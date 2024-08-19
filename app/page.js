import Hero from "@/components/Hero";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <section>
        <Hero></Hero>
      </section>
      <div>
        <SocialMedia></SocialMedia>
      </div>
    </main>
  );
}
