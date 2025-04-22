import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    {
      title: (
        <div className="mt-10">
        <Image
          src="yezzpayre.png"
          alt="yezzpayre-logo"
          width={60}
          height={60}
        />
        </div>
      ),
      duration: "2025 – Present",
      smallScreenLogo: (
        <div className="z-1000">
        <Image
          src="yezzpayre.png"
          alt="yezzpayre-logo"
          width={50}
          height={50}
        />
        </div>
      ),
      content: (
        <div className="max-w-4xl mx-auto mt-10">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Customer Support Engineer
              </p>

              {/* Show only if screen size is <= 770px */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">The Yezzpay </span>
                  (March 2025 – Present)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (March 2025 – Present)
                </p>
              )}
            </h1>

            <div className=" text-gray-400 font-medium text-sm">
              <span className="text-white ">The Yezzpay</span> is a trusted{" "}
              <span className=" text-white">digital payment solution that focuses on fast, safe, and easy online game top up services</span> We are 
              <span className=" text-white">here to meet</span>,
              the needs of gamers <span className=" text-white">throughout Indonesia</span>,{" "}
              <span className=" text-white">from casual to professional players.</span>
            </div>
            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white ">Yezzpay</span>, I
                contribute to the development and serve customers{" "}
                <span className=" text-white">Yezzpay.com</span>, Providing fast, safe, and trusted online
                 game top up services with competitive prices and flexible payment systems.
                <span className="mt-2">
                Becoming the digital payment platform of choice for the gamer community in Indonesia and Southeast Asia.
                </span>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: (
        <Image
          src="laravel2.png"
          alt="laravel-logo"
          width={60}
          height={60}
        />
      ),
      duration: "2023 – Present",
      smallScreenLogo: (
        <div className="z-[-10]">
        <Image
          src="laravel2.png"
          alt="laravel-logo"
          width={50}
          height={50}
        />
        </div>
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Freelance Web Developer
              </p>
              {/* <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                (May 2022 – May 2023)
              </p> */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">Torum</span>
                  (May 2024 – present)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (May 2024 – present)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium">
              <span className="text-white ">Build various types of websites ranging </span> 
              <span className=" text-white">from landing pages,</span> e-commerce
               <span className=" text-white">, to admin dashboards</span>,{" "}
              <span className=" text-white">using laravel, React</span>, and{" "}
              <span className=" text-white">Work closely</span>with clients to understand
               <span className=" text-white">needs and deliver responsive </span>, and user-friendly digital solutions.{" "}
              <span className=" text-white">Integrate third-party </span>APIs{" "}
              <span className=" text-white">such as</span>Midtrans, RajaOngkir, OpenAI, and other payment services.{" "}
              <span className=" text-white">Manage projects</span> from start to finish including planning,{" "}
              <span className=" text-white">development, testing, and maintenance</span>.
            </div>
          </div>
        </div>
      )
    }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 text-white">
          Experience
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
