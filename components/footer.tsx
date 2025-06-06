import ReactGA from "react-ga4";
import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const trackSponsorClick = () => {
    ReactGA.event("sponsorship_click_header", {
      category: "Sponsorship",
      label: "GitHub Sponsor Button"
    });
  };

  return (
    <div className="flex bg-black w-full items-center xl:px-8 lg:px-8 md:px-8 px-4 pt-6">
      {/* Container that changes between centered/between based on screen size */}
      <div className="w-full flex justify-center md:justify-between sm:justify-between items-center">
        {/* Left Side - GitHub Sponsor Button */}
        <Link
          href={"https://github.com/sponsors/irfakmy"}
          className="inline-flex items-center mr-4 w-[100px] h-[40px]"
          onClick={trackSponsorClick}
        >
          <Image
            src="/sponsor-icon.png"
            alt="Sponsor lassiecoder on GitHub"
            className="h-8 w-auto rounded-lg"
            width={100}
            height={10}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>

        {/* Social Icons - Centered on small screens */}
        <div className="flex space-x-5 md:space-x-8 items-center">
          <SocialLink
            href="https://github.com/irfakmy"
            icon={FaGithub}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/irfa-maulana-430a86276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <SocialLink
            href="#"
            icon={IoNewspaperOutline}
            label="Newsletter"
          />
          <SocialLink
            href="#"
            icon={FaSquareXTwitter}
            label="Twitter"
          />
          <SocialLink
            href="https://instagram.com/irfakkk06"
            icon={FaInstagram}
            label="Instagram"
          />
          <SocialLink
            href="mailto:irfakmaulana05@gmail.com"
            icon={FaMailBulk}
            label="Mail"
          />
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <div className="relative group">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
        </span>
      </Link>
    </div>
  );
};
