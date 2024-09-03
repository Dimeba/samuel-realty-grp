import { getEntry, getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import styles from "./page.module.scss";

const agents = await getEntries("agents");
export async function generateStaticParams() {
  return agents.items.map((item) => ({
    slug: item.sys.id,
  }));
}

export default async function AgentPage({ params }) {
  const { slug } = params;
  console.log("Slug:", slug);
  const agent = await getEntry(slug);

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
    </div>
  );
}
