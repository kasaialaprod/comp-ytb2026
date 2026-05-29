const shorts = [
  {
    title: "Micro-trottoir gênant #1",
    embedUrl: "https://www.youtube.com/embed/sMdiLV7JKvk",
    href: "https://www.youtube.com/shorts/sMdiLV7JKvk",
  },
  {
    title: "Question taboue #2",
    embedUrl: "https://www.youtube.com/embed/hJkBOVXSKrE",
    href: "https://www.youtube.com/shorts/hJkBOVXSKrE",
  },
  {
    title: "Réponse trop honnête #3",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    href: "https://www.youtube.com/shorts/VIDEO_ID_3",
  },
]

export function Hero3() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
      <div className="max-w-2xl">
        <div className="inline-flex rounded-full bg-coral px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-ink">
          YouTube Shorts
        </div>

        <h2 className="mt-4 font-display text-3xl uppercase leading-none text-ink dark:text-paper md:text-5xl">
          Les formats courts de la chaîne
        </h2>

        <p className="mt-4 text-base leading-7 text-ink/75 dark:text-paper/75">
          Trois extraits rapides pour capter l’ambiance, les questions et les réponses
          qu’on n’oublie pas.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {shorts.map((short, index) => (
          <article
            key={index}
            className="rounded-[1.75rem] border border-black/10 bg-paper p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <div className="overflow-hidden rounded-[1.4rem] border border-black/10 bg-black dark:border-white/10">
              <div className="mx-auto aspect-[9/16] w-full max-w-[360px]">
                <iframe
                  className="h-full w-full"
                  src={short.embedUrl}
                  title={short.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-bold leading-6 text-ink dark:text-paper">
                {short.title}
              </h3>

              <a
                href={short.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-hotpink px-4 py-2 text-sm font-bold text-paper transition hover:scale-[1.02]"
              >
                Voir le short
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}