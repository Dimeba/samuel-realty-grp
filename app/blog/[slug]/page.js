//styles
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

//contentful
import { getEntries, getEntry } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const news = await getEntries("blog");

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
export async function generateStaticParams() {
  return news.items.map((item) => ({
    slug: item.sys.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await getEntry(slug);

  const pageTitle = `${blog.fields.headline}`;
  const pageDescription = `${
    blog.fields.aboutExtended || "Read more about this topic."
  }`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: "real estate, agent, new york, long island, Samuel Realty Group",
  };
}

export default async function Blog({ params }) {
  const { slug } = params;
  const blog = await getEntry(slug);
  const pageTitle = `${blog.fields.headline}`;
  const pageDescription = `${
    blog.fields.aboutExtended || "Read more about this topic."
  }`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="blog, real estate, news, Samuel Realty Group"
        />
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.contentRow}>
          {
            <div className={styles.breadcrumb}>
              <Link href="/blog">Blog</Link>{" "}
              <span className={styles.separator}>&gt;</span>
              <strong>{blog.fields.headline}</strong>
            </div>
          }
          <div className={styles.image}>
            <Image
              src={`https:${blog.fields.image.fields.file.url}`}
              width={455}
              height={680}
            />
          </div>
          <div className={styles.blogPost}>
            <p className={styles.blogPostDate}>
              {" "}
              {formatDate(blog.fields.date)}
            </p>
            <h2 className={styles.headline}>{blog.fields.headline}</h2>
            <div className={styles.moreAbout}>
              {" "}
              {documentToReactComponents(blog.fields.aboutExtended)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
