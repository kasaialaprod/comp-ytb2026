type HeaderProps = {
  onToggleTheme: () => void
  isDark: boolean
}

export default function Header({ onToggleTheme, isDark }: HeaderProps) {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 md:py-7">
      <div className="flex items-center gap-3">
        <img
          src="src/assets/recul-logo.jpg"
          alt="Logo RECUL"
          className="h-14 w-14 rounded-full border border-black/10 object-cover dark:border-white/10"
        />

        <div>
          <p className="font-display text-2xl leading-none tracking-tight text-coral">
            RECUL
          </p>
          <p className="text-cocoa text-xs font-semibold uppercase tracking-[0.32em] dark:text-paper/70">
            sans tabou
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#episodes"
          className="hidden rounded-full border border-current/15 px-5 py-3 text-sm font-semibold md:inline-flex"
        >
          Explorer
        </a>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Changer de thème"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-current/15 bg-white/55 text-sm backdrop-blur dark:bg-white/5"
        >
          {isDark ? '☀' : '☾'}
        </button>
      </div>
    </header>
  )
}