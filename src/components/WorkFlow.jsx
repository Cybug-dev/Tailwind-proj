import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import Reveal from "./Reveal.jsx";

const WorkFlow = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Heading - Fixed sm layout typo */}
      <Reveal>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-medium text-white">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            coding workflow.
          </span>
        </h2>
      </Reveal>

      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 lg:gap-12 mt-12 lg:mt-16">
        
        <Reveal className="w-full lg:w-1/2 p-2" direction="left">
          <div className="w-full">
            <img 
              src={codeImg} 
              alt="Coding interface"
            />
          </div>
        </Reveal>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {checklistItems.map((item, index) => (
            <Reveal
              key={index} 
              className="flex items-start p-4 rounded-xl border border-transparent hover:border-neutral-800/60 hover:bg-neutral-900/30 transition-all duration-300 group"
              delay={index * 90}
              direction="right"
            >
   
              <div className="text-emerald-400 shrink-0 bg-neutral-900 border border-neutral-800 h-11 w-11 flex justify-center items-center rounded-xl shadow-inner group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors duration-300">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              
              <div className="ml-5">
                <h5 className="text-lg sm:text-xl font-semibold text-neutral-100 tracking-tight group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h5>
                <p className="text-sm sm:text-base text-neutral-500 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WorkFlow;
