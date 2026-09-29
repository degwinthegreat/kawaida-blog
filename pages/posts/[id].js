import Head from "next/head";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Layout from "../../components/layout";
import "highlight.js/styles/dark.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | Shinsuke Kawaida</title>
        <meta
          name="description"
          content={`${postData.title} — Shinsuke Kawaida`}
        />
      </Head>
      <article className="post">
        <p className="back-link">
          <Link href="/">← Home</Link>
        </p>
        <h1>{postData.title}</h1>
        <div className="post-date">
          <Date dateString={postData.date} />
        </div>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
