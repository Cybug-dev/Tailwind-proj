import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 max-w-7xl mx-auto tracking-wide">

      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-16 font-medium text-white">
        What People are saying
      </h2>

      <div className="flex flex-wrap -mx-3 justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-3 flex">

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between w-full shadow-lg shadow-black/20 hover:border-neutral-700/60 transition-colors duration-200">
              
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex mt-8 items-center">
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-4 rounded-full border border-neutral-800 object-cover bg-neutral-800 shrink-0"
                  src={testimonial.image}
                  alt={`${testimonial.user} avatar`}
                />
                <div className="overflow-hidden">
                  <h6 className="text-sm sm:text-base font-semibold text-white tracking-tight truncate">
                    {testimonial.user}
                  </h6>
                  <p className="text-xs sm:text-sm font-medium text-neutral-500 truncate mt-0.5">
                    {testimonial.company}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
