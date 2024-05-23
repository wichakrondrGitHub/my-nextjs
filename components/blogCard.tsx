"use client";
import { Card, Link, Image as NextImage, CardBody } from "@nextui-org/react";

interface BlogPostCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  authorName: string;
  authorImage: string;
  postUrl: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  authorName,
  authorImage,
  postUrl,
}) => {
  return (
    <div className="mb-5">
      <Card className="sm:mx-0">
        <Link href={postUrl} aria-label={title}>
          <CardBody>
            <NextImage
              alt={`Cover Image for ${title}`}
              src={imageUrl}
              decoding="async"
              className="shadow-sm hover:shadow-md transition-shadow duration-200"
              style={{
                visibility: "visible",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",

                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
              }}
              sizes="100vw"
            />
          </CardBody>
        </Link>
      </Card>

      <div className="text-3xl mb-3 leading-snug">
        <Link href={postUrl} className="hover:underline">
          {title}
        </Link>
      </div>

      <div className="text-lg mb-4">
        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      </div>

      <div className="text-lg leading-relaxed mb-4">{description}</div>

      <div>
        <NextImage
          src={authorImage}
          className="w-12 h-12 rounded-full mr-4"
          alt={authorName}
          width={48}
          height={48}
        />
        <div className="text-xl font-bold">{authorName}</div>
      </div>
    </div>
  );
};

export default BlogPostCard;
