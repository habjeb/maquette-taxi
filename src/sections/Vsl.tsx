import { SectionHead } from "../components/SectionHead";
import { publicAsset } from "../lib/site";

const TOPICS = [
  {
    title: "Le bon de transport",
    text: "La prescription indique le mode de transport. Avec le bon correspondant, la course éligible est facturée à l’Assurance Maladie. S’il reste une part à votre charge, elle est dite avant de démarrer.",
  },
  {
    title: "L’accompagnant",
    text: "Un proche peut monter. Qu’il soit pris en charge — ou qu’il s’agisse d’un enfant de moins de 16 ans — dépend de la prescription. On le vérifie avec le médecin, pas au moment de fermer la portière.",
  },
  {
    title: "En dessous et au-delà de 150 km",
    text: "Pour un trajet habituel, la prescription suffit en général. Au-delà de 150 kilomètres, un accord préalable peut être exigé. On s’en occupe avant le jour du départ.",
  },
  {
    title: "La conduite",
    text: "Pas de brancard et pas de portage : ce n’est pas une ambulance. J’aide à monter et à s’installer, je roule sans à-coups et je respecte les limitations.",
  },
  {
    title: "Le rôle du médecin",
    text: "C’est lui qui prescrit. Le mien est d’assurer le transport qu’il a choisi, à l’heure du rendez-vous, puis de ramener la personne quand la séance est finie.",
  },
  {
    title: "L’habitacle",
    text: "La berline est aérée et les surfaces essuyées entre les courses. Rien ne traîne sur les sièges. Un véhicule tenu fait partie du trajet, surtout au retour d’un soin.",
  },
] as const;

export function Vsl() {
  return (
    <section className="block" id="vsl">
      <div className="container">
        <SectionHead
          kicker="02 — Convention"
          title={
            <>
              Quand le trajet est <em>prescrit</em>.
            </>
          }
          intro="Le médecin choisit le mode de transport. S’il prescrit un taxi conventionné et que le bon est en règle, vous n’avancez en général pas les frais : la facture part à l’Assurance Maladie."
        />
        <div className="split vsl-split">
          <div className="prose" data-reveal>
            <p>
              Conventionné, ici, veut dire une convention avec l’Assurance Maladie. Ce n’est pas une ambulance, et ce n’est
              pas une centrale qui répartit la course : vous savez qui vient vous chercher.
            </p>
            <p>
              Apportez la prescription et le bon. Si un doute reste sur l’accompagnant ou sur la distance, on le lève
              avant de bloquer l’heure.
            </p>
          </div>
          <figure className="shot liquid-glass liquid-glass--panel" data-reveal>
            <img
              src={publicAsset("photos/hopital-couloir.webp")}
              width={1400}
              height={1256}
              alt="Couloir d’établissement de santé, grandes fenêtres et lumière du jour sur le sol."
              loading="lazy"
            />
            <figcaption>Couloir de soins, lumière du jour.</figcaption>
          </figure>
        </div>
        <div className="card-grid cols-3 vsl-topics">
          {TOPICS.map((topic) => (
            <article key={topic.title} className="service-card plain liquid-glass liquid-glass--panel" data-reveal>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
