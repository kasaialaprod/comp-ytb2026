import background from '../assets/recul-bbg.jpg'


export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-4 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10 md:pb-24 md:pt-10">
      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-current/15 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] backdrop-blur dark:bg-white/5">
          YouTube · sexualité · sans filtre
        </div>

        <h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-coral uppercase sm:text-6xl lg:text-8xl">
          Le média qui parle de sexe{' '}
          <span className="stroke-title text-amber-900 dark:text-fuchsia-500">sans détour</span>
        </h1>

        <div className="rounded-[2rem] border border-black/10 bg-paper p-6 shadow-sm dark:border-white/10 dark:bg-white/5 md:p-8 mt-8">
          <div className="mb-4 inline-flex rounded-full bg-coral px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-ink">
            À propos
          </div>

          <h2 className="font-display text-3xl uppercase leading-none text-amber-900 dark:text-paper md:text-4xl">
            Un média sans détour
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/80 dark:text-paper/80">
            ReCUL explore la sexualité, les relations et les comportements humains à travers des questions franches, des situations parfois gênantes et des échanges qu’on entend rarement ailleurs.
          </p>

          <p className="mt-3 max-w-2xl text-base leading-7 text-ink/80 dark:text-paper/80">
            Notre idée : faire rire, mettre à l’aise, puis aller chercher cette vérité spontanée que les gens ne disent presque jamais devant une caméra.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.youtube.com/@reCUUUL/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-7 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-paper transition hover:opacity-90"
          >
            Voir la chaîne
          </a>

          <a
            href="#la-team"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-current/15 bg-white/55 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur dark:bg-white/5"
          >
            La team
          </a>

          <a
            href="#faq"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-current/15 bg-white/55 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur dark:bg-white/5"
          >
            FAQ
          </a>
        </div>
      </div>

      <div
        className="relative min-h-[90vh] rounded-[2rem] border border-black/10 bg-cover bg-center bg-no-repeat md:p-6"
        style={{ backgroundImage: `url(${background})`}}
      >
        <div className="absolute -right-4 top-0 hidden h-24 w-24 rotate-12 rounded-[2rem] bg-hotpink/25 blur-2xl md:block" />

          <div className="grid-dots relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[1.7rem] p-4 sm:p-6 md:min-h-[560px] md:p-8">
            <div className="absolute -left-4 top-6 h-20 w-20 rounded-full bg-lemon/85 blur-xl" />

            <div className="relative z-10 w-full max-w-4xl">
              <div className="w-full overflow-hidden rounded-[1.5rem]">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/GMNSsGDrXck?si=Jkj1vT3NLc6kEC2b"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <a
              href="https://youtu.be/UpleTeyFPJ0?si=kCSZCZJOZ3qd1u_A"
              className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-lemon text-2xl text-ink transition hover:scale-110 md:right-5 md:top-5 md:h-16 md:w-16 md:text-4xl"
              aria-label="Aller à la vidéo"
            >
              ➜
            </a>

            <div className="absolute bottom-4 left-3 rotate-[-12deg] font-display text-4xl text-hotpink md:bottom-5 md:text-7xl">
              ✦
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex min-h-[88px] w-full items-center justify-center rounded-full bg-hotpink px-8 py-5 text-center text-paper transition hover:opacity-90 lg:min-h-[104px] lg:px-12 lg:py-6">
              <p className="text-base font-extrabold uppercase tracking-[0.16em] lg:text-lg">
                Informer
              </p>
            </div>

            <div className="flex min-h-[88px] w-full items-center justify-center rounded-full bg-hotpink px-8 py-5 text-center text-paper transition hover:opacity-90 lg:min-h-[104px] lg:px-12 lg:py-6">
              <p className="text-base font-extrabold uppercase tracking-[0.16em] lg:text-lg">
                Rigoler
              </p>
            </div>

            <div className="flex min-h-[88px] w-full items-center justify-center rounded-full bg-lemon px-8 py-5 text-center text-ink transition hover:opacity-90 lg:min-h-[104px] lg:px-12 lg:py-6">
              <p className="text-base font-extrabold uppercase tracking-[0.16em] lg:text-lg">
                Sex’primer
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}