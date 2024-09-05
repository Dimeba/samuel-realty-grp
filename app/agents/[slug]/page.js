import { getEntry, getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";

const agents = await getEntries("agents");

export async function generateStaticParams() {
  return agents.items.map((item) => ({
    slug: item.sys.id,
  }));
}

//renderovanje pojedinacne stranice za svakog agenta
export default async function AgentPage({ params }) {
  const { slug } = params;
  console.log("Slug:", slug);

  const agent = await getEntry(slug);
  const propertyClosings = agent.fields.closings || [];

  const propertyPromise = propertyClosings.map(async (propertyRef) => {
    const property = await getEntry(propertyRef.sys.id);
    return property;
  });
  const properties = await Promise.all(propertyPromise);

  return (
    <div className={styles.container}>
      {
        <div>
          <Link href="/agents">Our Agents</Link> &gt;{" "}
          <strong>{agent.fields.name}</strong>
        </div>
      }
      <div className={styles.agentDetails}>
        <h1 className={styles.heading}>About {agent.fields.name}</h1>
        <h2 className={styles.headingTwo}>{agent.fields.position}</h2>
        <div className={styles.biography}>
          {documentToReactComponents(agent.fields.biographyExtended)}
        </div>
        <p className={styles.phone}>Phone: {agent.fields.phone}</p>
        <p className={styles.email}>
          Email:{" "}
          <a href={`mailto:${agent.fields.email}`}>{agent.fields.email}</a>
        </p>
      </div>
      <div>
        <hr className={styles.hr}></hr>
        <h2 className={styles.closings}>Closings</h2>
      </div>
      <div className={styles.properties}>
        {properties.map((property) => (
          <div className={styles.property} key={property.sys.id}>
            <div className={styles.image}>
              {" "}
              <Image
                src={`https:${property.fields.image.fields.file.url}`}
                width={275}
                height={183}
              ></Image>
            </div>
            <div className={styles.propertyDetails}>
              <Link
                style={{ textDecoration: "none" }}
                href={`/properties/${property.sys.id}`}
              >
                <h3 className={styles.headline}>{property.fields.address}</h3>
              </Link>
              <p className={styles.paragraph}>
                {property.fields.neighbourhood}
              </p>

              <p className={styles.paragraph}>
                {property.fields.propertyCategoryy}
              </p>
              <hr className={styles.hr}></hr>
              <p className={styles.paragraphPrice}>
                <strong>
                  {/*   {property.fields.propertyCategory === "Rentals"
                    ? "Monthly Rent:"
                    : "Asking Price:"}{" "} */}
                  {property.fields.price}
                </strong>
              </p>
              <p className={styles.paragraph}>
                {property.fields.squareFeet} | Beds: {property.fields.beds} |
                Baths: {property.fields.baths}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
