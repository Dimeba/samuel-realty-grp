import styles from "./Blog.module.scss";
import Link from "next/link";
import Image from "next/image";

//contentful
import { getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Blog = await getEntries("blog");

const BlogPage = () => {
  const blogDetails = [];

  for (let i = 0; i < Blog.items.length; i++) {
    let blog = Blog.items[i];
    console.log(blog);
    const blogDetails = (
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
            {/* nisam znala kako da nazovem ovo i cemu sluzi uopste */}
            <p className={styles.blogPostDate}>
              {" "}
              | {`${blog.fields.date}`}
            </p>{" "}
            {/* stavila sam u contentfilu date i izabrala samo date only, ali mi ne izbacuje kako treba */}
            <h2
              className={styles.blogPostHeadline}
            >{`${blog.fields.headline}`}</h2>
            <div className={styles.paragraph}>
              {documentToReactComponents(blog.fields.about)}
              <Link href={`/blog/${blog.sys.id}`} passHref>
                <span className={styles.readMore}>READ MORE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className={styles.mainContainer}>
        <h2 className={styles.mainHeadline}>Blog</h2>
        <div className={styles.contentRow}>{blogDetails}</div>
      </div>
    );
  }
};

export default BlogPage;
