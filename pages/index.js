import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";

const publicWork = [
  {
    title: "Kubernetes learning lab",
    href: "https://github.com/degwinthegreat/k8s_learning",
    description:
      "Kubernetesを手を動かしながら理解するための、TypeScriptを使った学習リポジトリ。",
  },
  {
    title: "Rails on Cloud Run",
    href: "https://github.com/degwinthegreat/rails_cloud_run_sample",
    description:
      "Ruby on RailsアプリケーションをCloud Runで動かすための実装サンプル。",
  },
  {
    title: "Public repositories",
    href: "https://github.com/degwinthegreat?tab=repositories",
    description:
      "Rails、Go、TypeScript、Kubernetes、ISUCONを中心とした実験と学習の記録。",
  },
];

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="hero" aria-labelledby="intro-title">
        <Image
          className="avatar"
          src="/images/profile.jpg"
          width="112"
          height="112"
          alt="Shinsuke Kawaidaのアイコン"
        />
        <p className="eyebrow">Software Engineer · Kochi, Japan</p>
        <h1 id="intro-title">Shinsuke Kawaida</h1>
        <p className="lead">
          Webプロダクトをつくるソフトウェアエンジニアです。 Ruby on
          Railsを軸に、TypeScript、Go、クラウド基盤まで扱います。
        </p>
        <p className="links">
          <a href="https://github.com/degwinthegreat">GitHub</a>
          <span aria-hidden="true"> / </span>
          <a href="https://zenn.dev/degwinthegreat">Zenn</a>
          <span aria-hidden="true"> / </span>
          <a href="https://qiita.com/degwinthegreat">Qiita</a>
          <span aria-hidden="true"> / </span>
          <a href="https://note.com/tamamushi_">note</a>
        </p>
      </section>

      <section aria-labelledby="interests-title">
        <h2 id="interests-title">Professional interests</h2>
        <p>
          変更しやすく、長く運用できるWebアプリケーションの設計と開発に関心があります。
          現在は、AIエージェントがソフトウェア開発をどう変えるか、また少ない運用負荷で継続的に価値を届ける仕組みを探っています。
        </p>
        <p>
          日々の仕事では
          <a href="https://smarthr.co.jp/">SmartHR</a>
          のソフトウェア開発に携わっています。このサイトの内容は個人の見解です。
        </p>
        <p className="current-focus">
          <strong>Current focus:</strong> AI-assisted software development,
          developer tooling, and low-maintenance software products.
        </p>
      </section>

      <section id="work" aria-labelledby="work-title">
        <h2 id="work-title">Selected public work</h2>
        <ul className="item-list">
          {publicWork.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.title}</a>
              <span> — {item.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="writing" aria-labelledby="writing-title">
        <h2 id="writing-title">Writing</h2>
        <p>
          過去の記事も残しながら、技術的な実験と、その結果から考えたことをここに記録していきます。
        </p>
        <ul className="item-list writing-list">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <time dateTime={date}>
                <Date dateString={date} />
              </time>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" aria-labelledby="about-title">
        <h2 id="about-title">About</h2>
        <p>
          高知在住。農業からソフトウェアエンジニアに転身しました。仕事以外では、サウナとボルダリングが好きです。
        </p>
      </section>

      <section id="disclosure" aria-labelledby="disclosure-title">
        <h2 id="disclosure-title">Disclosure</h2>
        <p>
          このサイトの文章と評価に最終的な責任を持つのは私です。AIを調査、推敲、実装の補助に使う場合があります。
          将来、広告・アフィリエイト・スポンサーを利用する場合は、対象ページで明示し、編集上の評価と分離します。
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allPostsData: getSortedPostsData(),
    },
  };
}
