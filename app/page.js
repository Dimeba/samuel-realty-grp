//components
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import PropertiesTest from "@/components/PropertiesTest";

export default async function Home() {
  return (
    <main>
      <Hero />

      <div>
        <SocialMedia />
      </div>
      <div>
        <PropertiesTest />
      </div>
    </main>
  );
}
