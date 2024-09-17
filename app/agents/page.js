import About from "@/components/agents/About";

export const metadata = {
  title: "About Us | Samuel Realty Group",
  description:
    "Learn more about our real estate agency, our mission, and our team of expert agents.",
};

export default async function AboutUs() {
  return (
    <main>
      <div>
        <About />
      </div>
    </main>
  );
}
