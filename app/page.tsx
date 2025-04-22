'use client';
import Image from "next/image";
import HomeScreen from "@/app/pages/homescreen";
import { Article } from "@/app/pages/articles";
import ThreeDCard from "@/app/pages/projects";
import About from "@/app/pages/about";
import ContactForm from "./pages/contact";

import { useEffect } from "react";
import { Experience } from "./pages/experience";
import Networking from "./pages/networking";
import ReactGA from "react-ga4";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-2X3K0JZ5F7");
    ReactGA.send("pageview");
  }, []);
  return (
    <div className="font-sans bg-black">
      <HomeScreen />
      <About />
      <Experience />
      <ThreeDCard />
      <Article />
      <Networking />
      <ContactForm />
    </div>
  );
}
