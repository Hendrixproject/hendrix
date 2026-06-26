import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Dynamic models",
    body: "Define and edit data models from the browser — no code, no migrations. Like Django admin, on the web.",
  },
  {
    title: "Full CRUD",
    body: "Auto-generated forms with validation for create, read, update and delete across every model.",
  },
  {
    title: "Search & bulk actions",
    body: "Filter records by any field and act on many at once. Sensible defaults, no setup.",
  },
  {
    title: "Auth built in",
    body: "Cognito sign-in gates the admin, scoped to an admins group. Secure from the first deploy.",
  },
  {
    title: "Deploys itself",
    body: "Push to main and AWS Amplify builds and ships the app and its backend. Near-zero ops.",
  },
  {
    title: "Modern stack",
    body: "Next.js 15, React 19, Tailwind CSS 4 and TypeScript — fast, typed, and current.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Header */}
      <header className="border-b border-edge">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/hendrix-logo.png"
              alt="Hendrix"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold tracking-tight">Hendrix</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-ink-soft">
            <Link href="/admin" className="hover:text-accent">
              Admin
            </Link>
            <a
              href="https://github.com/Hendrixproject/hendrix"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-edge">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Are you experienced?
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              The admin that plays your data like a Stratocaster.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft">
              Hendrix is a Django-like admin interface for AWS Amplify. Define
              models, manage records, and ship — all from the browser, deployed
              serverless and near-free.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admin"
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Open the admin
              </Link>
              <a
                href="https://docs.amplify.aws/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-edge px-5 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:border-accent hover:text-accent"
              >
                Read the docs
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title}>
                <div className="mb-3 h-1 w-10 rounded-full bg-accent" />
                <h2 className="text-lg font-semibold">{f.title}</h2>
                <p className="mt-2 text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech strip */}
        <section className="border-t border-edge bg-paper">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-8 text-sm font-medium text-ink-faint">
            <span className="text-ink-soft">Built with</span>
            {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "AWS Amplify"].map(
              (t) => (
                <span key={t}>{t}</span>
              ),
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-edge">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink-faint sm:flex-row">
          <span>© 2026 Hendrix. Built with ♥ on Next.js &amp; AWS Amplify.</span>
          <div className="flex gap-6">
            <Link href="/admin" className="hover:text-accent">
              Admin
            </Link>
            <a
              href="https://github.com/Hendrixproject/hendrix"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
