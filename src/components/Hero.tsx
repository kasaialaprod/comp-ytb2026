export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-4 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10 md:pb-24 md:pt-10">
      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-current/15 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] backdrop-blur dark:bg-white/5">
          YouTube · sexualité · sans filtre
        </div>

        <h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-coral uppercase sm:text-6xl lg:text-8xl">
          Le média qui parle de sexe{' '}
          <span className="stroke-title">sans détour</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80 dark:text-paper/80">
          RECUL assume les conversations qu’on évite souvent : désir, plaisir,
          relations, normes, corps et contradictions.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-7 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-paper transition hover:opacity-90"
          >
            Voir la chaîne
          </a>

          <a
            href="#newsletter"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-current/15 bg-white/55 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur dark:bg-white/5"
          >
            Recevoir les actus
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-4 top-0 hidden h-24 w-24 rotate-12 rounded-[2rem] bg-hotpink/25 blur-2xl md:block" />

        <div className="relative rounded-[2rem] border border-black/10 bg-paper p-4 dark:border-white/10 dark:bg-white/5 md:p-6">
          <div className="grid-dots relative overflow-hidden rounded-[1.7rem] p-6 md:p-8">
            <div className="absolute -left-4 top-6 h-20 w-20 rounded-full bg-lemon/85 blur-xl" />

            <img
              src="/logo.jpg"
              alt="Visuel RECUL"
              className="relative z-10 mx-auto aspect-square w-full max-w-md rounded-full object-cover"
            />

            <div className="absolute bottom-5 left-3 rotate-[-12deg] font-display text-5xl text-hotpink md:text-7xl">
              ✦
            </div>

            <div className="absolute right-5 top-5 rotate-[10deg] font-display text-5xl text-lemon md:text-7xl">
              ➜
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl bg-coral px-4 py-4 text-paper">
              <p className="text-xs uppercase tracking-[0.25em] text-paper/70">
                ton
              </p>
              <p className="mt-2 text-lg font-extrabold">Audacieux</p>
            </div>

            <div className="rounded-3xl bg-ink px-4 py-4 text-paper dark:bg-paper dark:text-ink">
              <p className="text-xs uppercase tracking-[0.25em] opacity-60">
                style
              </p>
              <p className="mt-2 text-lg font-extrabold">Magazine pop</p>
            </div>

            <div className="rounded-3xl bg-lemon px-4 py-4 text-ink">
              <p className="text-xs uppercase tracking-[0.25em] opacity-60">
                mission
              </p>
              <p className="mt-2 text-lg font-extrabold">Libérer la parole</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}