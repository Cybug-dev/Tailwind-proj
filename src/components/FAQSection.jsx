import React, { useState } from 'react';
import Reveal from "./Reveal.jsx";


export default function PremiumFAQ() {
  // Track which item is open (-1 means all closed)
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: "How does Virtual Build Tools speed up compile times?",
      answer: "By offloading workloads to our high-performance, cloud-optimized server farms, tasks are compiled concurrently across multiple virtual environments, cutting build times down significantly compared to standard local hardware."
    },
    {
      question: "Can I integrate this with my existing GitHub CI/CD pipeline?",
      answer: "Yes, seamlessly. We provide custom-built extensions and a universal CLI tool that hooks directly into GitHub Actions, GitLab CI, and Bitbucket pipelines with just a few lines of configuration."
    },
    {
      question: "Is there a limit on concurrent builds for the Free Tier?",
      answer: "Our Free Tier allows up to 2 concurrent builds at a time. For unlimited parallel testing and isolated environments, you can look into our Pro and Enterprise tiers."
    },
    {
      question: "How secure is my code on your virtual instances?",
      answer: "Security is our top priority. Every single build instance runs inside a completely isolated, ephemeral sandbox environment that destroys itself immediately after execution. Your code is never saved or cached."
    }
  ];

  return (
     
    <section className="text-[#C5C6C7] py-20 px-4 md:px-8 border-t border-[#1F2833]/30">
        
      <div className="max-w-4xl mx-auto">
          <Reveal>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-[#8B949E] max-w-xl mx-auto text-sm md:text-base">
            Everything you need to know about our virtual build environments and workflows.
          </p>
        </div>
        </Reveal>

        {/* FAQ Accordion Container */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <Reveal key={index} delay={index * 80}>
                <div
                  className={`overflow-hidden rounded-xl border border-neutral-800 transition-all duration-300 ${
                    isOpen ? 'border-orange-500/50' : 'border-[#1F2833] hover:border-orange-500/30'
                  } group`}
                >
                {/* Question Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-6 text-left cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base md:text-lg pr-4 transition-colors duration-300 ${
                    isOpen ? 'text-orange-400' : 'text-white group-hover:text-orange-400'
                  }`}>
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-[#8B949E] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-orange-400' : 'group-hover:text-orange-400'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Answer Content Wrapper */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out border-t ${
                    isOpen 
                      ? 'grid-rows-[1fr] opacity-100 border-[#1F2833]/50' 
                      : 'grid-rows-[0fr] opacity-0 border-transparent'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 text-sm text-[#8B949E] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
