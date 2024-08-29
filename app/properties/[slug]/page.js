import { getEntries, getEntry } from "@/lib/contentful";

const properties = await getEntries("listings");

export async function generateStaticParams() {
  return properties.items.map((item) => ({
    slug: item.sys.id,
  }));
}

export default async function Property({ params }) {
  const { slug } = params;
  const property = await getEntry(slug);
  return (
    <main>
      <div style={{ marginTop: "200px" }}>{property.fields.address}</div>
    </main>
  );
}
