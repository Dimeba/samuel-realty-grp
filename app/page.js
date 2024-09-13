//components
import Hero from "@/components/Hero";

import SocialMedia from "@/components/SocialMedia";

import Properties from "@/components/Properties";

export const metadata = {
  title: "Samuel Realty Group",
  description: "Real Estate Agency",
};
export default async function Home({ selectedLocation }) {
  return (
    <main>
      <Hero />

      <div>
        <SocialMedia />
      </div>
      <div>
        <Properties selectedLocation={selectedLocation || "New York"} />
      </div>
    </main>
  );
}
