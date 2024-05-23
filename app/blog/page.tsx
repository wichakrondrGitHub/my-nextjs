import BlogPostCard from "@/components/blogCard";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  authorName: string;
  authorImage: string;
  postUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring the Mountains",
    description:
      "Join us as we explore the breathtaking mountains and discover the beauty of nature.",
    date: "2023-04-10",
    imageUrl: "https://source.unsplash.com/random/400x250?mountains",
    authorName: "John Doe",
    authorImage: "/assets/blog/authors/john.jpg",
    postUrl: "/posts/exploring-the-mountains",
  },
  {
    id: 2,
    title: "A Day at the Beach",
    description:
      "Experience the relaxing atmosphere of a day spent on the sunny shores of a beautiful beach.",
    date: "2023-04-11",
    imageUrl: "https://source.unsplash.com/random/400x250?beach",
    authorName: "Jane Smith",
    authorImage: "/assets/blog/authors/jane.jpg",
    postUrl: "/posts/a-day-at-the-beach",
  },
  {
    id: 3,
    title: "City Life Adventures",
    description:
      "Dive into the fast-paced life of the city and uncover the hidden gems it has to offer.",
    date: "2023-04-12",
    imageUrl: "https://source.unsplash.com/random/400x250?city",
    authorName: "Emily Johnson",
    authorImage: "/assets/blog/authors/emily.jpg",
    postUrl: "/posts/city-life-adventures",
  },
  {
    id: 4,
    title: "Forest Hiking Trails",
    description:
      "Discover the tranquility and beauty of hiking through lush, green forest trails.",
    date: "2023-04-13",
    imageUrl: "https://source.unsplash.com/random/400x250?forest",
    authorName: "Michael Brown",
    authorImage: "/assets/blog/authors/michael.jpg",
    postUrl: "/posts/forest-hiking-trails",
  },
  {
    id: 5,
    title: "Cultural Heritage Sites",
    description:
      "Take a journey through history and explore the rich cultural heritage sites around the world.",
    date: "2023-04-14",
    imageUrl: "https://source.unsplash.com/random/400x250?heritage",
    authorName: "Sarah Lee",
    authorImage: "/assets/blog/authors/sarah.jpg",
    postUrl: "/posts/cultural-heritage-sites",
  },
  {
    id: 6,
    title: "Desert Safari Adventures",
    description:
      "Embark on an exciting desert safari and experience the thrill of dune bashing and camel rides.",
    date: "2023-04-15",
    imageUrl: "https://source.unsplash.com/random/400x250?desert",
    authorName: "David Miller",
    authorImage: "/assets/blog/authors/david.jpg",
    postUrl: "/posts/desert-safari-adventures",
  },
  {
    id: 7,
    title: "Exploring the Arctic",
    description:
      "Join us as we venture into the icy landscapes of the Arctic and witness its unique wildlife.",
    date: "2023-04-16",
    imageUrl: "https://source.unsplash.com/random/400x250?arctic",
    authorName: "Linda Wilson",
    authorImage: "/assets/blog/authors/linda.jpg",
    postUrl: "/posts/exploring-the-arctic",
  },
  {
    id: 8,
    title: "Mountain Biking Trails",
    description:
      "Discover the best mountain biking trails and enjoy the thrill of off-road cycling.",
    date: "2023-04-17",
    imageUrl: "https://source.unsplash.com/random/400x250?biking",
    authorName: "Robert Davis",
    authorImage: "/assets/blog/authors/robert.jpg",
    postUrl: "/posts/mountain-biking-trails",
  },
  {
    id: 9,
    title: "Exploring Ancient Ruins",
    description:
      "Take a journey back in time and explore the fascinating ruins of ancient civilizations.",
    date: "2023-04-18",
    imageUrl: "https://source.unsplash.com/random/400x250?ruins",
    authorName: "Patricia Martinez",
    authorImage: "/assets/blog/authors/patricia.jpg",
    postUrl: "/posts/exploring-ancient-ruins",
  },
  {
    id: 10,
    title: "Discovering Coral Reefs",
    description:
      "Dive into the underwater world and explore the vibrant coral reefs teeming with marine life.",
    date: "2023-04-19",
    imageUrl: "https://source.unsplash.com/random/400x250?coral",
    authorName: "James Garcia",
    authorImage: "/assets/blog/authors/james.jpg",
    postUrl: "/posts/discovering-coral-reefs",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
            imageUrl={post.imageUrl}
            authorName={post.authorName}
            authorImage={post.authorImage}
            postUrl={post.postUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
