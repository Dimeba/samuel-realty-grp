//components
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";
import Button from "@/components/Button";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      <div>
        <SocialMedia />
      </div>
      <div>
        <Services />
      </div>
    </main>
  );
}
