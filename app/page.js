//components
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Properties from "@/components/Properties";
import ImageSlider from "@/components/ImageSlider";

export default async function Home() {
  return (
    <main>
      <Hero />

      <div>
        <SocialMedia />
      </div>
      <div>
        <Properties />
      </div>
    </main>
  );
}
