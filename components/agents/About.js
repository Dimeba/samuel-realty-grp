import Link from "next/link";

//styles
import styles from "./About.module.scss";

//contentful
import { getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; //added in contenful Rich text field, got an error in the meantime

const Agents = await getEntries("agents");

const ourAgents = () => {
  const agentDetails = [];

  for (let i = 0; i < Agents.items.length; i++) {
    let agent = Agents.items[i];

    let agentDetail = (
      <div className={styles.agent} key={i}>
        <Link
          style={{ textDecoration: "none" }}
          href={`/agents/${agent.sys.id}`}
          passHref
        >
          <h3 className={styles.namesHeadline}>{`${agent.fields.name}`}</h3>
        </Link>
        <p className={styles.paragraphPosition}>{`${agent.fields.position}`}</p>
        <div className={styles.paragraph}>
          {" "}
          {documentToReactComponents(agent.fields.biography)}
          <Link href={`/agents/${agent.sys.id}`} passHref>
            <span className={styles.moreInfo}>More info</span>
          </Link>{" "}
        </div>
        <p
          className={styles.paragraph}
        >{`Phone number: ${agent.fields.phone}`}</p>
        <p className={styles.paragraph}>{`E-mail: ${agent.fields.email}`}</p>
      </div>
    );
    agentDetails[i] = agentDetail;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.about}>
        <h2 className={styles.headlineMain}>About the Agency</h2>
        <p className={styles.paragraph}>
          Samuel Realty Group, LLC, founded in 2016, is a first-class
          residential brokerage firm. The company's identity is built around its
          founder Sam Horowitz's years as a practicing real estate attorney on
          Long Island and Manhattan. When clients purchase or sell property
          through Samuel Realty Group, LLC, our 24/7 accessibility gives our
          clients confidence that their listings and other real estate needs
          will be handled with the utmost care. Our agents have been trained to
          see all aspects of a real estate deal from inception all the way to
          the closing table with an analytical approach.
        </p>
        <p className={styles.paragraphAbout}>
          The relationships we build with our clients are lasting ones and we
          consider each and every client to be an integral part of our growing
          real estate family.
        </p>
      </div>

      <div className={styles.ourAgents}>
        <h2 className={styles.headline}>Our Agents</h2>
        {agentDetails}
      </div>
    </div>
  );
};

export default ourAgents;
