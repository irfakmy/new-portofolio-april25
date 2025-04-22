"use client";
import React from "react";
import Link from "next/link";
import ReactGA from "react-ga4";
import { SiReaddotcv } from "react-icons/si";

export function Article() {
  const trackReadMoreClick = () => {
    ReactGA.event("article_read_more", {
      category: "Articles",
      label: "Read more - Tech Scoop"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-32 pb-20 overflow-hidden font-medium">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left xl:pl-0 lg:mb-0 lg:pl-5 sm:mb-0 sm:pl-2 text-white">
          Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[0rem] w-full">
        {pinData.map((item, index) => (
          <div key={index}>
            <Link href={item.href} target="_blank">
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 h-[12rem] w-[18rem] lg:w-[16rem] lg:h-[14rem] sm:w-[18rem]">
                  <h3 className="font-bold text-base text-gray-100 mb-2">
                    {item.heading}
                  </h3>
                  <div className="text-sm text-gray-400 mb-4">
                    {item.description}
                  </div>
                </div>
            </Link>
          </div>
        ))}
      </div>
      <Link
        onClick={trackReadMoreClick}
        href={"#"}
        target="_blank"
        className="flex justify-end items-center gap-1 w-full text-gray-300 hover:text-blue-400 transition-colors duration-300"
      >
        <span className="md:text-sm text-sm lg:text-sm font-normal px-1">
          Read more
        </span>
        <SiReaddotcv className="text-xl" />
      </Link>
    </div>
  );
}

const pinData = [
  {
    techstack: "",
    href: "#",
    heading: "This website is under development",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    techstack: "",
    href: "#",
    heading: "This website is under development",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    techstack: "",
    href: "#",
    heading: "This website is under development",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    techstack: "",
    href: "#",
    heading: "This website is under development",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
];
