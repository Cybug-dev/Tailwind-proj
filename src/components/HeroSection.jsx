import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center px-4 pt-20 overflow-hidden">
      {" "}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Subtle Tech Grid Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20" />

        {/* Soft Orange Glow Orb (Top Left) */}
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute top-[30%] right-[-25%] w-[600px] h-[600px] rounded-full bg-red-800/10 blur-[130px]" />
      </div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold tracking-tight text-white leading-tight relative z-10">
        Virtual Build Tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text block sm:inline">
          {" "}
          For Developers
        </span>
      </h1>
      <p className="text-base sm:text-lg text-center mt-6 lg:mt-8 text-neutral-400 max-w-3xl leading-relaxed relative z-10">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 mt-10 relative z-10">
        <a
          href="#"
          className="w-full sm:w-auto text-center bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-xl text-white font-medium text-sm transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]"
        >
          Start for free
        </a>

        <a
          href="#"
          className="w-full sm:w-auto text-center py-3 px-6 rounded-xl border border-neutral-700 text-neutral-300 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 text-sm font-medium"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 lg:mt-24 w-full relative z-10">
        <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm shadow-xl shadow-black/40 transition-all duration-500 ease-out hover:border-orange-500/20 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(249,115,22,0.05)] group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-100"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm shadow-xl shadow-black/40 transition-all duration-500 ease-out hover:border-orange-500/20 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(249,115,22,0.05)] group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-100"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
