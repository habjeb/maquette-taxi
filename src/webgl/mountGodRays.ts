import {
  LinearSRGBColorSpace,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";

const vertexShader = /* glsl */ `
varying vec2 vNdc;

void main() {
  vNdc = position.xy;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = /* glsl */ `
varying vec2 vNdc;

uniform float uTime;
uniform float uScroll;
uniform float uReduced;
uniform float uAspect;

void main() {
  vec2 uv = vec2(vNdc.x * uAspect * 0.5, vNdc.y * 0.5);
  float scroll = uReduced > 0.5 ? mix(0.33, 0.67, uScroll) : uScroll;
  float sway = uReduced > 0.5 ? 0.0 : sin(uTime * 0.25) * 0.05;

  // On a portrait phone the visible width is a fraction of the desktop frame.
  // The previous source sat above and beside that frame, so the rays never crossed it.
  float portrait = 1.0 - smoothstep(0.72, 1.05, uAspect);
  float halfW = max(uAspect * 0.5, 0.18);
  float span = mix(0.55, halfW * 0.82, portrait);
  float lift = mix(0.62, 0.3, portrait);
  vec2 source = vec2(mix(-span, span, scroll) + sway * mix(1.0, halfW, portrait), lift);
  float tilt = mix(-0.28, 0.28, scroll) * mix(1.0, 0.35, portrait) + sway * 0.35;

  vec3 charcoal = vec3(0.05, 0.052, 0.07);
  vec3 amber = vec3(1.0, 0.55, 0.18);
  vec3 gold = vec3(1.0, 0.86, 0.55);
  float halo = 0.0;
  float core = 0.0;

  for (int i = 0; i < 7; i++) {
    float index = float(i) - 3.0;
    float ang = tilt + index * mix(0.085, 0.05, portrait);
    vec2 dir = vec2(sin(ang), -cos(ang));
    vec2 rel = uv - source;
    float along = dot(rel, dir);
    float travel = clamp(along, 0.0, 2.6);
    float dist = length(rel - dir * travel);
    float fade = smoothstep(2.6, 0.12, travel);
    float weight = exp(-index * index * mix(0.22, 0.55, portrait));
    float shimmer = 1.0;
    if (uReduced < 0.5) shimmer = 0.8 + 0.2 * sin(uTime * 0.8 + travel * 4.0 + index);
    float radius = 0.025 + travel * 0.11 + abs(index) * 0.01;
    halo += exp(-(dist * dist) / (radius * radius)) * fade * weight * shimmer;
    float coreRadius = mix(0.0009, 0.0014, portrait);
    core += exp(-(dist * dist) / coreRadius) * fade * weight;
  }

  float bulb = exp(-dot(uv - source, uv - source) / 0.06);
  vec3 color = charcoal;
  color += amber * halo * mix(0.34, 0.55, portrait);
  color += gold * core * mix(0.2, 0.32, portrait);
  color += gold * bulb * mix(0.45, 0.75, portrait);
  color = color / (vec3(1.0) + max(color - charcoal, vec3(0.0)) * mix(0.65, 0.48, portrait));

  gl_FragColor = vec4(color, 1.0);
}
`;

function scrollProgress() {
  const scroller = document.scrollingElement ?? document.documentElement;
  const max = scroller.scrollHeight - scroller.clientHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, scroller.scrollTop / max));
}

function createRenderer(canvas: HTMLCanvasElement) {
  const shared = {
    canvas,
    antialias: false,
    alpha: false,
    stencil: false,
    depth: false,
    preserveDrawingBuffer: true,
    failIfMajorPerformanceCaveat: false,
  } as const;
  try {
    return new WebGLRenderer({ ...shared, powerPreference: "default" });
  } catch {
    return new WebGLRenderer({ ...shared, powerPreference: "low-power" });
  }
}

export function mountGodRays(canvas: HTMLCanvasElement) {
  const renderer = createRenderer(canvas);
  renderer.outputColorSpace = LinearSRGBColorSpace;
  renderer.setClearColor(0x16171e, 1);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uReduced: { value: 0 },
    uAspect: { value: 1 },
  };
  const material = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    depthTest: false,
    depthWrite: false,
  });
  const geometry = new PlaneGeometry(2, 2);
  scene.add(new Mesh(geometry, material));

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let running = true;

  const resize = () => {
    const viewport = window.visualViewport;
    const width = Math.max(2, Math.round(viewport?.width || canvas.clientWidth || window.innerWidth));
    const height = Math.max(2, Math.round(viewport?.height || canvas.clientHeight || window.innerHeight));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const cap = width < 760 ? 1.5 : 2;
    const ratio = Math.min(window.devicePixelRatio || 1, cap, 2048 / Math.max(width, height));
    renderer.setPixelRatio(Math.max(1, ratio));
    renderer.setSize(width, height, false);
    uniforms.uAspect.value = width / height;
  };

  const render = (time = 0) => {
    const reduced = reduce.matches;
    uniforms.uReduced.value = reduced ? 1 : 0;
    uniforms.uScroll.value = scrollProgress();
    if (!reduced) uniforms.uTime.value = time * 0.001;
    renderer.render(scene, camera);
  };

  const loop = (time: number) => {
    frame = 0;
    if (!running || document.hidden) return;
    render(time);
    if (reduce.matches) return;
    frame = window.requestAnimationFrame(loop);
  };

  const startLoop = () => {
    if (frame || document.hidden) return;
    frame = window.requestAnimationFrame(loop);
  };

  const stopLoop = () => {
    if (!frame) return;
    window.cancelAnimationFrame(frame);
    frame = 0;
  };

  const onScroll = () => {
    if (document.hidden) return;
    if (reduce.matches) render();
  };

  const onResize = () => {
    resize();
    render(performance.now());
    startLoop();
  };

  const onReduce = () => {
    if (reduce.matches) stopLoop();
    render(performance.now());
    if (!reduce.matches) startLoop();
  };

  const onVisibility = () => {
    if (document.hidden) {
      stopLoop();
      return;
    }
    onResize();
  };

  const onLost = (event: Event) => {
    event.preventDefault();
    stopLoop();
  };

  const onRestored = () => {
    onResize();
  };

  resize();
  render(0);
  startLoop();
  requestAnimationFrame(() => {
    resize();
    render(performance.now());
  });

  const observer = new ResizeObserver(onResize);
  observer.observe(canvas);
  window.addEventListener("scroll", onScroll, { passive: true, capture: true });
  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", onResize);
  window.addEventListener("pageshow", onResize);
  window.visualViewport?.addEventListener("resize", onResize);
  reduce.addEventListener("change", onReduce);
  document.addEventListener("visibilitychange", onVisibility);
  canvas.addEventListener("webglcontextlost", onLost);
  canvas.addEventListener("webglcontextrestored", onRestored);

  return () => {
    running = false;
    stopLoop();
    observer.disconnect();
    window.removeEventListener("scroll", onScroll, { capture: true });
    window.removeEventListener("resize", onResize);
    window.removeEventListener("orientationchange", onResize);
    window.removeEventListener("pageshow", onResize);
    window.visualViewport?.removeEventListener("resize", onResize);
    reduce.removeEventListener("change", onReduce);
    document.removeEventListener("visibilitychange", onVisibility);
    canvas.removeEventListener("webglcontextlost", onLost);
    canvas.removeEventListener("webglcontextrestored", onRestored);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
