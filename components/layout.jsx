import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Shinsuke Kawaida";
export const siteDescription = "高知を拠点にWebプロダクトを開発するソフトウェアエンジニア、川井田慎介の個人サイト。";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kawaida-blog.vercel.app/" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="site-shell">
        <header className="site-header">
          <Link href="/" className="site-name">
            Shinsuke Kawaida
          </Link>
          <nav aria-label="メインナビゲーション">
            <Link href="/#work">Traces</Link>
            <Link href="/#writing">Writing</Link>
            <Link href="/#about">About</Link>
            <Link href="/#disclosure">Biases</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Shinsuke Kawaida</span>
          <span>
            <a href="https://github.com/degwinthegreat">GitHub</a>
            {" / "}
            <a href="https://zenn.dev/degwinthegreat">Zenn</a>
            {" / "}
            <a href="https://qiita.com/degwinthegreat">Qiita</a>
          </span>
        </footer>
      </div>
    </>
  );
}
