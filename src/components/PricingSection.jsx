import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const PricingSection = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 lg:my-12 tracking-wide font-medium text-white">
        Pricing
      </h2>
      
      {/* Grid Layout Container */}
      <div className="flex flex-wrap -mx-2 justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-3 flex">
            {/* Professional, clean card container */}
            <div className={`p-8 sm:p-10 border rounded-2xl w-full flex flex-col justify-between bg-neutral-900/40 relative ${
              option.title === "Pro" ? "border-orange-500/50 shadow-lg shadow-orange-500/5" : "border-neutral-800"
            }`}>
              
              <div>
                {/* Title Line */}
                <div className="flex items-baseline flex-wrap gap-2 mb-6">
                  <h3 className="text-3xl font-semibold text-white tracking-tight">
                    {option.title}
                  </h3>
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
                      (Most Popular)
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="mb-8 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{option.price}</span>
                  <span className="text-neutral-500 tracking-tight ml-2 text-sm">/month</span>
                </div>

                {/* Feature List */}
                <ul className="space-y-4 my-6">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-neutral-300">
                      <CheckCircle2 className="h-5 w-5 text-neutral-500 shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm sm:text-base leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Button */}
              <div className="mt-12">
                <a
                  href="#"
                  className={`inline-flex justify-center items-center text-center w-full h-11 px-4 rounded-xl text-sm font-medium tracking-tight transition duration-200 ${
                    option.title === "Pro"
                      ? "bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:opacity-90 shadow-md"
                      : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600"
                  }`}
                >
                  Subscribe
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
