"use client";
import React, { useState } from "react";
import { Avatar, Button, Card, Skeleton } from "@nextui-org/react";
import ProfileCardSkeleton from "@/components/profileCardSkeleton";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const info = [
    {
      heading: "Dear",
      description:
        "I am an experienced Full Stack Developer with 4 years of expertise in web app  development. experience mentors 3 members of team coding . Proficient in NestJS, ExpressJS, Next.js, and React.js, with skills in Ant Design and Tailwind CSS for UI. Strong Git, CI/CD, and mapping with Leaflet.js.",
    },
  ];
  return (
    <>
      {loading && <ProfileCardSkeleton />}
      {!loading && (
        <>
          <div className="mt-40 mb-20 flex  gap-[16px] p-6 md:p-4 h-96 relative  justify-around">
            <div className="flex flex-col justify-center gap-0 md:gap-[40px]">
              <div className="w-1/2 lg:w-full">
                <span className="text-3xl md:text-6xl font-bold text-para sm:hidden">
                  Hi{" "}
                </span>
                <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-para">
                  I&apos;m{" "}
                  <span className=" text-black dark:text-white">
                    {info && info[0].heading}
                  </span>
                </h1>
                <p className="text-sm md:text-md lg:text-xl text-para dark:text-para lg:w-[400px] text-balance mt-0 md:mt-4">
                  {info && info[0].description}
                </p>
              </div>
              <div className=" mt-7 flex flex-col md:flex md:flex-row space-y-4 md:space-y-0 gap-[16px]">
                <Button onClick={() => router.push("/WichakronDear.pdf")}>
                  My Resume
                </Button>
              </div>
            </div>

            <motion.div
              className="flex justify-center align-middle w-96 h-96"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Avatar src="/my_avatar.JPG" className=" w-96 h-96 text-large" />
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
