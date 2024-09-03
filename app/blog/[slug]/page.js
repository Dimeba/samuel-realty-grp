import { getEntries, getEntry } from "@/lib/contentful";

const news = await getEntries("blog");

export async function generateStaticParams() {
  return news.items.map((item) => ({
    slug: item.sys.id,
  }));
}

export default async function Blog({ params }) {
  const { slug } = params;
  const blog = await getEntry(slug);
  return (
    <main>
      <div style={{ marginTop: "200px" }}>{blog.fields.headline}</div>
    </main>
  );
}
