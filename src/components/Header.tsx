import logo from '../assets/recul-logo.jpg'

type HeaderProps = {
  onToggleTheme: () => void
  isDark: boolean
}

export default function Header({ onToggleTheme, isDark }: HeaderProps) {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 md:py-7">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo ReCUL"
          className="h-14 w-14 rounded-full border border-black/10 object-cover dark:border-white/10"
        />

        <div>
          <p className="font-display text-2xl leading-none tracking-tight">
            <span className="text-amber-900 dark:text-lemon">Re</span>
            <span className="text-amber-900 dark:text-coral">CUL</span>
          </p>
          <p className="text-cocoa text-xs font-semibold uppercase tracking-[0.32em] dark:text-paper/70">
            sans tabou
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Changer de thème"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-current/15 bg-white/55 text-sm backdrop-blur dark:bg-white/5">
          {isDark ? '☀' : '☾'}
        </button>
      </div>
    </header>
  )
}