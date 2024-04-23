import LatestBlogs from "@/components/LatestBlog/LatestBlog";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  return (
    <div>
      <LatestBlogs blogs={blogs} />
    </div>
  );
};

export default HomePage;
