import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 min-h-[800px] px-4 sm:px-6">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full text-base sm:text-lg font-medium px-3 py-1 inline-block">
          Featured Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide px-2">
          Easy build {" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20 -mx-3">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-3  flex">
            <div className="flex flex-col sm:flex-row w-full lg:py-15 p-8 bg-neutral-900 rounded-lg border border-transparent hover:border-neutral-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 ease-in-out group">

              <div className="flex h-10 w-10 shrink-0 bg-neutral-800 text-orange-700 group-hover:bg-orange-700 group-hover:text-neutral-900 justify-center items-center rounded-full transition-colors duration-300 mb-4 sm:mb-0 sm:mr-4">
                {feature.icon}
              </div>
              
              {/* Content Wrapper */}
              <div className="flex-1">
                <h5 className="text-lg font-semibold mb-2 text-white">{feature.text}</h5>
                <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
