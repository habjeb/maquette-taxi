import {
  LinearSRGBColorSpace,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from "three";

const vertexShader = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uScroll;
uniform float uReduced;
uniform vec2 uRes;

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float scroll = uReduced > 0.5 ? mix(0.33, 0.67, uScroll) : uScroll;
  float sway = uReduced > 0.5 ? 0.0 : sin(uTime * 0.25) * 0.05;
  vec2 source = vec2(mix(-0.55, 0.55, scroll) + sway, 0.62);
  float tilt = mix(-0.28, 0.28, scroll) + sway * 0.35;

  vec3 charcoal = vec3(0.05, 0.052, 0.07);
  vec3 amber = vec3(1.0, 0.55, 0.18);
  vec3 gold = vec3(1.0, 0.86, 0.55);
  float halo = 0.0;
  float core = 0.0;

  for (int i = 0; i < 7; i++) {
    float index = float(i) - 3.0;
    float ang = tilt + index * 0.085;
    vec2 dir = vec2(sin(ang), -cos(ang));
    vec2 rel = uv - source;
    float travel = clamp(dot(rel, dir), 0.0, 2.6);
    float dist = length(rel - dir * travel);
    float fade = smoothstep(2.6, 0.2, travel);
    float weight = exp(-index * index * 0.22);
    float shimmer = 1.0;
    if (uReduced < 0.5) shimmer = 0.8 + 0.2 * sin(uTime * 0.8 + travel * 4.0 + index);
    float radius = 0.025 + travel * 0.11 + abs(index) * 0.01;
    halo += exp(-(dist * dist) / (radius * radius)) * fade * weight * shimmer;
    core += exp(-(dist * dist) / 0.0009) * fade * weight;
  }

  float bulb = exp(-dot(uv - source, uv - source) / 0.06);
  vec3 color = charcoal;
  color += amber * halo * 0.34;
  color += gold * core * 0.2;
  color += gold * bulb * 0.45;
  color = color / (vec3(1.0) + max(color - charcoal, vec3(0.0)) * 0.65);

  gl_FragColor = vec4(color, 1.0);
}
`;

function scrollProgress() {
  const scroller = document.scrollingElement ?? document.documentElement;
  const max = scroller.scrollHeight - scroller.clientHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, scroller.scrollTop / max));
}

export function mountGodRays(canvas: HTMLCanvasElement) {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: "high-performance",
    stencil: false,
    depth: false,
  });
  renderer.outputColorSpace = LinearSRGBColorSpace;
  renderer.setClearColor(0x16171e, 1);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uReduced: { value: 0 },
    uRes: { value: new Vector2(1, 1) },
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
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (width < 2 || height < 2) return;
    const cap = width < 480 ? 1.15 : width < 760 ? 1.25 : 1.5;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, cap);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    uniforms.uRes.value.set(width * pixelRatio, height * pixelRatio);
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
    if (!running || document.hidden || reduce.matches) return;
    render(time);
    frame = window.requestAnimationFrame(loop);
  };

  const startLoop = () => {
    if (frame || reduce.matches || document.hidden) return;
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

  const onReduce = () => {
    if (reduce.matches) {
      stopLoop();
      render();
    } else if (!document.hidden) {
      startLoop();
    }
  };

  const onVisibility = () => {
    if (document.hidden) {
      stopLoop();
      return;
    }
    if (reduce.matches) render();
    else startLoop();
  };

  resize();
  render(0);
  startLoop();

  const onResize = () => {
    resize();
    render();
  };
  const observer = new ResizeObserver(onResize);
  observer.observe(canvas);
  window.addEventListener("scroll", onScroll, { passive: true, capture: true });
  window.addEventListener("resize", onResize);
  reduce.addEventListener("change", onReduce);
  document.addEventListener("visibilitychange", onVisibility);

  return () => {
    running = false;
    stopLoop();
    observer.disconnect();
    window.removeEventListener("scroll", onScroll, { capture: true });
    window.removeEventListener("resize", onResize);
    reduce.removeEventListener("change", onReduce);
    document.removeEventListener("visibilitychange", onVisibility);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
