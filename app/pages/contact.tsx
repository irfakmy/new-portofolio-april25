"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactGA from "react-ga4";
import { FlipWords } from "../../components/ui/flip-words";

const ContactForm = () => {
  const words = ["Networking", "Collaboration", "Suggestions"];

  const trackSponsorClick = () => {
    ReactGA.event("sponsorship_click_contact", {
      category: "Sponsorship",
      label: "GitHub Sponsor Button"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-44 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 relative z-10 w-[100%]">
          {/* <div className="flex flex-row header-container"> */}
          <div className="flex flex-col items-start w-full sm:flex-row sm:header-container">
            <div className="title-box">
              <p
                className="text text-white"
                style={{ width: "max-content", marginRight: "0.8rem" }}
              >
                I&apos;m open for
              </p>
            </div>
            <div className="subtitle-box">
              <FlipWords words={words} duration={1000} />
            </div>
          </div>
        </h2>
      </div>
      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-left text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4 relative z-0">
        <p className="pb-6">
          I appreciate your interest in connecting with me. I&apos;m excited to
          explore <span className="text-white">new opportunities</span>,{" "}
          <span className="text-white">receive feedback</span>,{" "}
          <span className="text-white">collaborate on projects</span>, and
          broaden my network.
        </p>
        <p className="pb-6">
          For any specific questions or comments, please don&apos;t hesitate to
          contact me directly at
          <a
            className=" bg-gradient-to-r from-purple-600 to-gray-400 text-transparent bg-clip-text ml-2"
            href="mailto:irfakmaulana05@gmail.com"
            target="_blank"
          >
            irfakmaulana05@gmail.com
          </a>
          . I strive to respond to all messages within{" "}
          <span className="text-white">24 hours</span>, although it may take a
          bit longer during busy periods.{" "}
        </p>
        If you prefer social media, you can also find me on{" "}
        <span className="text-white">Instagram</span> at
        <a
          className="bg-gradient-to-r from-pink-500 to-gray-400 text-transparent bg-clip-text ml-2"
          href="https://instagram.com/irfakkk06"
          target="_blank"
        >
          @irfakkk06
        </a>
        .
      </h3>
      <Link
        href={"https://github.com/sponsors/irfakmy"}
        className="inline-flex items-center ml-4 w-[100px] h-[40px]"
        onClick={trackSponsorClick}
      >
        <Image
          src="/sponsor-icon.png"
          alt="Sponsor irfakmy on GitHub"
          className="h-8 w-auto rounded-lg"
          width={100}
          height={40}
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <div className="text-sm pt-60 sm:mt-20 font-light text-center relative z-20 text-gray-400 max-w-7xl pb-8">
        Always be caffeinated! | © irfak maulana (irfakkk06)
      </div>
    </div>
  );
};

export default ContactForm;
