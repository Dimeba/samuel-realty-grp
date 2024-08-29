import styles from "./Blog.module.scss";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.headline}>Blog</h2>
      <div className={styles.contentRow}>
        <div className={styles.image}>
          <img src="/images/blog.jpg" alt="Colorful doors" />
        </div>
        <div className={styles.blogPost}>
          <p className={styles.blogPostDate}>
            @samuelrealtygroup | May 3, 2019
          </p>
          <h2 className={styles.blogPostHeadline}>
            The Nip Tuck of Home Showing
          </h2>
          <p className={styles.paragraph}>
            Sellers often ask - “what should I do to get my house ready to show
            to the world?” Inevitably, the concept of staging comes into play. I
            am a proponent of the same if it's in the seller's budget. But what
            if it isn't? Renting furniture can be an expensive and
            time-consuming endeavor. When asked what to do, I...{" "}
            <Link href="/read-more" passHref>
              <span className={styles.readMore}>READ MORE</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
