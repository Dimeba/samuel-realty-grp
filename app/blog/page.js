import Blog from "@/components/blog/Blog";

export const metadata = {
  title: "Blog page | Samuel Realty Group",
  description: "See more about our last updates and news.",
};
export default function BlogPage() {
  return (
    <main>
      <div>
        <Blog />
      </div>
    </main>
  );
}
