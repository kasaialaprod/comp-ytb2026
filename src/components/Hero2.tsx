import group from '../assets/group.jpg'
import background from '../assets/recul-banner.jpg'

const members = [
   {
    name: "Léonce",
    handle: "@cameleonce",
    role: "Big Boss de la chaine, présentateur de la chaine",
    position: "right-4 bottom-6 md:right-10 md:bottom-10",
  },
  {
    name: "Manon",
    handle: "@ma.oui_non",
    role: "Tête pensante, rédactrice & scénariste",
    position: "left-4 top-4 md:left-8 md:top-8",
  },
  {
    name: "Rayane",
    handle: "@el_rayou.xd",
    role: "Manager, buisness développement & community management",
    position: "right-4 top-10 md:right-10 md:top-12",
  },
  {
    name: "Sarah",
    handle: "@saracroche",
    role: "Éditrice, rédactrice en chef",
    position: "left-6 bottom-20 md:left-12 md:bottom-16",
  },
  {
    name: "Alex",
    handle: "@les_meuf_ajt_moi",
    role: "Caméraman, monteur & motion designer",
    position: "left-4 top-4 md:left-8 md:top-8",
  },
  {
    name: "Maxence",
    handle: "@maximus_prime69",
    role: "Tête pensante, rédactrice & scénariste",
    position: "right-4 top-10 md:right-10 md:top-12",
  },
  {
    name: "Yoan",
    handle: "@20cm_enbas",
    role: "Directeur artistique, motion designer & graphiste",
    position: "left-6 bottom-20 md:left-12 md:bottom-16",
  },
  {
    name: "Israël",
    handle: "@smoke_zaza420",
    role: "Développeur solitaire mdr jsuis pas dans ça moi",
    position: "right-4 bottom-6 md:right-10 md:bottom-10",
  }
]

const faqs = [
  {
    user: "@latextedejade",
    question: "C’est grave de ne jamais avoir eu de vrai rapport à 23 ans ?",
    answer:
      "Au bout d'un moment mon reuf, sincèrement, faudra s'y mettre hein. Tu dois avoir des gallons de sperme c'est chaud. Plus sérieusement, il n’y a pas d’âge pour ça, et ce n’est pas une course. Chacun son rythme, et il y a plein de façons d’explorer sa sexualité sans forcément passer par un rapport traditionnel.",
  },
  {
    user: "@mecquifaitgenre",
    question: "Est-ce qu’on peut aimer quelqu’un et ne plus avoir envie de coucher avec ?",
    answer:
      "Non change de meuf bandito. Oui, complètement. Le désir varie, bouge, disparaît parfois, puis revient. Ça ne veut pas automatiquement dire que l’amour a disparu, mais ça mérite souvent une vraie discussion.",
  },
  {
    user: "@anonyme_du_94",
    question: "Pourquoi les gens mentent autant sur leur body count ?",
    answer:
      "T'aimerais que tout le monde ait mangé dans ton plat avant toi ?",
  },
  {
    user: "@silencegenant",
    question: "Est-ce que tout le monde fake sa confiance en soi au lit ?",
    answer:
      "Beaucoup plus de monde qu’on ne l’imagine. Entre la pression, la comparaison et la peur du jugement, énormément de gens jouent un rôle avant d’oser être vraiment honnêtes.",
  },
  {
    user: "@paspretdelenvoyer",
    question: "On fait quoi quand on a une question trop honteuse pour la poser à ses potes ?",
    answer:
      "C’est exactement pour ça que ReCUL existe : mettre sur la table les questions qu’on garde d’habitude dans ses notes, ses DM ou dans sa tête à 2h du matin.",
  },
]

export default function Hero2() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-4 mt-16 md:px-10 md:pb-24 md:pt-10">
      
      {/* Team Section */}
      <div id='la-team' className="mb-8 max-w-2xl">
        <div className="inline-flex rounded-full bg-hotpink px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-paper">
          Notre team
        </div>

        <h2 className="mt-4 font-display text-3xl uppercase leading-none text-ink dark:text-paper md:text-5xl">
          Les têtes derrière ReCUL
        </h2>

        <p className="mt-4 text-base leading-7 text-ink/75 dark:text-paper/75">
          Ceux qui posent les questions trop directes, gardent les silences gênants
          au montage et transforment les tabous en vraies discussions.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[80vw]">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/50 shadow-xl dark:border-white/10 dark:bg-white/5">
          <img
            src={group}
            alt="Les membres de la chaîne ReCUL"
            className="h-[380px] w-full object-contain md:h-[560px]"
            style={{ backgroundImage: `url(${background})`}}
          />
        </div>

        <div className="-mt-6 grid gap-4 px-2 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.handle}
              className="rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#151515]"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-ink dark:text-paper">
                {member.name}
              </p>

              <p className="mt-2 inline-flex rounded-full bg-coral px-3 py-1 text-[11px] font-bold text-paper">
                {member.handle}
              </p>

              <p className="mt-3 text-sm leading-6 text-ink/75 dark:text-paper/75">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-3xl mt-20">
        <div id='faq' className="inline-flex rounded-full bg-hotpink px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-paper">
          FAQ
        </div>

        <h2 className="mt-4 font-display text-3xl uppercase leading-none text-ink dark:text-paper md:text-5xl">
          Les questions qu’on n’ose pas poser
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-[1.75rem] border border-black/10 bg-white/55 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-hotpink">
              {faq.user}
            </p>

            <h3 className="mt-3 text-lg font-bold leading-6 text-ink dark:text-paper">
              {faq.question}
            </h3>

            <p className="mt-3 text-base leading-7 text-ink/80 dark:text-paper/80">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}