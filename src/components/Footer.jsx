import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import Reveal from "./Reveal.jsx";

const Footer = () => {
  return (
    <footer className="mt-28 border-t border-neutral-800 bg-neutral-950 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Main Grid Layout - Eliminates the "scanty" feel by framing a brand bio side-by-side with links */}
      <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
        
        {/* Column 1: Brand Anchor & Bio Description (Spans 2 columns on desktop to fill empty space) */}
        <Reveal className="lg:col-span-2 flex flex-col space-y-4 pr-0 lg:pr-8">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center text-white text-xs font-bold" />
            <span className="text-lg font-semibold tracking-tight text-white">VirtualR</span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
            Empowering developers with institutional-grade virtual build systems and seamless workflow management tools.
          </p>
        </Reveal>

        {/* Column 2: Resources Links */}
        <Reveal className="flex flex-col" delay={80}>
          <h4 className="text-xs font-bold tracking-wider text-neutral-200 uppercase mb-4">
            Resources
          </h4>
          <ul className="space-y-3">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200 block"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Column 3: Platform Links */}
        <Reveal className="flex flex-col" delay={160}>
          <h4 className="text-xs font-bold tracking-wider text-neutral-200 uppercase mb-4">
            Platform
          </h4>
          <ul className="space-y-3">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200 block"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Column 4: Community Links */}
        <Reveal className="flex flex-col" delay={240}>
          <h4 className="text-xs font-bold tracking-wider text-neutral-200 uppercase mb-4">
            Community
          </h4>
          <ul className="space-y-3">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200 block"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>

      {/* Bottom Footer: Legal Layout */}
      <Reveal className="py-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} VirtualR Inc. All rights reserved.
        </p>
        <div className="flex space-x-6 text-xs text-neutral-500">
          <a href="#" className="hover:text-neutral-400 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-400 transition-colors duration-200">Terms of Service</a>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
