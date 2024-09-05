import styles from "./Blog.module.scss";
import Link from "next/link";
import Image from "next/image";

//contentful
import { getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Blog = await getEntries("blog");

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
const BlogPage = () => {
  const blogEntries = [];

  for (let i = 0; i < Blog.items.length; i++) {
    let blog = Blog.items[i];
    console.log(blog);
    blogEntries.push(
      <div className={styles.blog} key={i}>
        <div className={styles.contentRow}>
          <div className={styles.image}>
            {" "}
            <Image
              src={`https:${blog.fields.image.fields.file.url}`}
              width={520}
              height={790}
            />
          </div>
          <div className={styles.blogPost}>
            {/* <p className={styles.name}>{`${blog.fields.name}`}</p> */}{" "}
            {/* nisam znala kako da nazovem ovo i cemu sluzi uopste na sajtu @imefirme */}
            <p className={styles.blogPostDate}>
              {" "}
              | {formatDate(`${blog.fields.date}`)}
            </p>{" "}
            {/* stavila sam u contentfilu date i izabrala samo date only, ali mi ne izbacuje kako treba */}
            <h2 className={styles.blogPostHeadline}>
              {" "}
              <Link href={`/blog/${blog.sys.id}`} passHref>
                {" "}
                {`${blog.fields.headline}`}
              </Link>
            </h2>
            <div className={styles.paragraph}>
              <div className={styles.paragraphChild}>
                {documentToReactComponents(blog.fields.about)}
                <Link href={`/blog/${blog.sys.id}`} passHref>
                  <span className={styles.readMore}>READ MORE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className={styles.mainContainer}>
        <h2 className={styles.mainHeadline}>Blog</h2>
        <div className={styles.contentRow}>{blogEntries}</div>
      </div>
    );
  }
};

export default BlogPage;
