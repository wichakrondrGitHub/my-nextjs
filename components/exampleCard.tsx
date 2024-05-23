"use client";
import { Image as NextImage } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

const ExampleCard = () => {
  return (
    <div className="mb-5">
      <Card className="sm:mx-0" hoverable clickable>
        <Link
          href="/posts/hello-world"
          aria-label="Learn How to Pre-render Pages Using Static Generation with Next.js"
        >
          <CardBody css={{ p: 0 }}>
            <div
              style={{
                display: "block",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: 0,
              }}
            >
              <div
                style={{
                  display: "block",
                  boxSizing: "border-box",
                  paddingTop: "50%",
                }}
              ></div>
              <NextImage
                alt="Cover Image for Learn How to Pre-render Pages Using Static Generation with Next.js"
                src="/_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=3840&q=75"
                decoding="async"
                className="shadow-sm hover:shadow-md transition-shadow duration-200"
                style={{
                  visibility: "visible",
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                sizes="100vw"
                srcSet="
                  /_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=640&q=75   640w,
                  /_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=750&q=75   750w,
                  /_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=828&q=75   828w,
                  /_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=1080&q=75 1080w,
                  /_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=1200&q=75 1200w,
                  /_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=1920&q=75 1920w,
                  /_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=2048&q=75 2048w,
                  /_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=3840&q=75 3840w
                "
              />
            </div>
          </CardBody>
        </Link>
      </Card>

      <div h3 className="text-3xl mb-3 leading-snug">
        <Link href="/posts/hello-world" className="hover:underline">
          Learn How to Pre-render Pages Using Static Generation with Next.js
        </Link>
      </div>

      <div className="text-lg mb-4">
        <time dateTime="2020-03-16T05:35:07.322Z">March 16, 2020</time>
      </div>

      <div className="text-lg leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Praesent elementum
        facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui
        accumsan sit amet nulla facilities morbi tempus.
      </div>

      <div>
        <NextImage
          src="/assets/blog/authors/tim.jpeg"
          className="w-12 h-12 rounded-full mr-4"
          alt="Tim Neutkens"
          width={48}
          height={48}
        />
        <div className="text-xl font-bold">Tim Neutkens</div>
      </div>
    </div>
  );
};

export default ExampleCard;
