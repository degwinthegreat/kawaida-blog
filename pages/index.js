import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";

const publicWork = [
  {
    title: "Code",
    href: "https://github.com/degwinthegreat?tab=repositories",
    description: "systems, experiments, and unfinished questions.",
  },
  {
    title: "Notes",
    href: "https://zenn.dev/degwinthegreat",
    description: "things that became clear enough to write down.",
  },
  {
    title: "Archive",
    href: "https://qiita.com/degwinthegreat",
    description: "older attempts, kept where they landed.",
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
        <p className="eyebrow">Kochi, Japan</p>
        <h1 id="intro-title">Shinsuke Kawaida</h1>
        <p className="lead">
          ソフトウェアをつくっています。変化しても意味を失わず、誰も見ていない間も静かに動き続けるものに興味があります。
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
        <h2 id="interests-title">Questions</h2>
        <p>
          人とソフトウェアの境界、道具が仕事の形を変える瞬間、複雑な仕組みが単純に見えるまでの過程。そのあたりを行き来しながら、プロダクトをつくっています。
        </p>
        <p className="current-focus">
          <strong>Current focus:</strong> systems that keep working when no one
          is watching.
        </p>
      </section>

      <section id="work" aria-labelledby="work-title">
        <h2 id="work-title">Traces</h2>
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
          ときどき、考えていたことが言葉になります。古いものも、そのまま残しています。
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
          以前は土に触れる仕事をしていました。今はソフトウェアを育てています。熱い場所と、登るための壁が好きです。
        </p>
      </section>

      <section id="disclosure" aria-labelledby="disclosure-title">
        <h2 id="disclosure-title">Biases</h2>
        <p>
          AIを調査や制作の道具として使います。ここに残す判断の責任は私にあります。商業的な関係がある場合は、それが意味を持つ場所で明示します。
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
