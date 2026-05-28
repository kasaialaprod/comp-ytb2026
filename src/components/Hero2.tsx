const faqs = [
  {
    user: "@latextedejade",
    question: "C’est grave de ne jamais avoir eu de vrai rapport à 23 ans ?",
    answer:
      "Non. Il n’y a pas d’âge normal, pas de chrono universel, et encore moins de parcours obligatoire. Le plus important, c’est ce que toi tu ressens, pas ce que les autres prétendent avoir déjà vécu.",
  },
  {
    user: "@mecquifaitgenre",
    question: "Est-ce qu’on peut aimer quelqu’un et ne plus avoir envie de coucher avec ?",
    answer:
      "Oui, complètement. Le désir varie, bouge, disparaît parfois, puis revient. Ça ne veut pas automatiquement dire que l’amour a disparu, mais ça mérite souvent une vraie discussion.",
  },
  {
    user: "@anonyme_du_94",
    question: "Pourquoi les gens mentent autant sur leur body count ?",
    answer:
      "Parce que le regard des autres pèse encore beaucoup trop dans les sujets liés au sexe. Certains gonflent, d’autres minimisent, juste pour coller à une image attendue.",
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
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-4 md:px-10 md:pb-24 md:pt-10">
      <div className="max-w-3xl">
        <div className="inline-flex rounded-full bg-hotpink px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-paper">
          FAQ taboue
        </div>

        <h2 className="mt-4 font-display text-3xl uppercase leading-none text-ink dark:text-paper md:text-5xl">
          Les questions qu’on n’ose pas poser
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 dark:text-paper/75">
          Des faux comptes, de vraies gênes, et toutes les questions qu’on garde
          souvent pour soi.
        </p>
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