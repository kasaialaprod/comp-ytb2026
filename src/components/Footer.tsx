const socials = [
  {
    name: "Instagram",
    handle: "@recul.media",
    href: "https://instagram.com/bigdickwolves",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 2.12a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
      </svg>
    ),
  },
  {
    name: "X",
    handle: "@reculmedia",
    href: "https://x.com/BigDickWolves?s=20",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M18.901 2H21l-4.588 5.244L21.81 22h-4.226l-3.31-4.33L10.486 22H8.386l4.906-5.607L2.19 2h4.332l2.992 3.914L12.9 2h6.001Zm-1.482 18.476h1.171L5.954 3.444H4.697L17.419 20.476Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@recul.off",
    href: "https://tiktok.com/bigdickwolves",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M14.5 2h2.07a4.9 4.9 0 0 0 1.37 3.05A4.93 4.93 0 0 0 21 6.42v2.1a6.93 6.93 0 0 1-4.5-1.66v7.38a5.74 5.74 0 1 1-5.74-5.74c.29 0 .57.02.84.06v2.12a3.63 3.63 0 1 0 2.9 3.56V2Z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-10">
      <div className="rounded-[2rem] border border-black/10 bg-paper px-6 py-8 shadow-sm dark:border-white/10 dark:bg-white/5 md:px-8 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <div className="inline-flex rounded-full bg-hotpink px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-paper">
              ReCUL
            </div>

            <h2 className="mt-4 font-display text-3xl uppercase leading-none text-ink dark:text-paper md:text-4xl">
              On continue le tea ailleurs
            </h2>

            <p className="mt-4 text-sm leading-6 text-ink/75 dark:text-paper/75 md:text-base">
              Retrouve la chaîne sur nos réseaux pour les extraits, les questions
              anonymes, les backstage et les moments trop honnêtes pour rester hors cam.
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.18em] text-ink/45 dark:text-paper/45">
            © 2026 ReCUL
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.4rem] border border-black/10 bg-white/70 p-4 transition hover:-translate-y-1 hover:border-hotpink/40 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper transition group-hover:bg-hotpink dark:bg-paper dark:text-ink">
                  {social.icon}
                </div>

                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-ink dark:text-paper">
                    {social.name}
                  </p>
                  <p className="mt-1 text-sm text-ink/65 dark:text-paper/65">
                    {social.handle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}