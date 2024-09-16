//components
import Hero from "@/components/Hero";
import SocialMedia from "@/components/SocialMedia";
import Properties from "@/components/Properties";

import Head from "next/head";
export const metadata = {
  title: "Samuel Realty Group",
  description: "Real Estate Agency",
};
export default async function Home({ selectedLocation }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="real estate, new york, long island, properties"
        />
      </Head>
      <main>
        <Hero />

        <div>
          <SocialMedia />
        </div>
        <div>
          <Properties selectedLocation={selectedLocation || "New York"} />
        </div>
      </main>
    </>
  );
}
