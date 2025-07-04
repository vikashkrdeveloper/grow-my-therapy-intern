import heroImage from "@/assets/hero-ocean.jpg";
import HeaderSection from "./HeaderSection";

const HeroSection = () => {
  return (
    <section className="relative  bg-[#f3f0e8]  overflow-hidden py-[4vw] px-[3vw] ">
      <HeaderSection />
      {/* Background Image */}
      <div
        className="bg-red-50 relative overflow-hidden  bg-cover bg-center bg-no-repeat py-[8.6vw] "
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-screen-2xl mx-auto">
          <h1 className="font-serif text-2xl md:text-4xl lg:text-6xl font-normal mb-8 leading-tight">
            Psychological Care for
          </h1>
          <h1 className="font-serif text-2xl md:text-4xl lg:text-6xl font-normal mb-12 leading-tight">
            Growth, Insight, and Well-Being
          </h1>

          <p className="font-sans text-sm md:text-lg lg:text-xl font-light mb-12 opacity-90 mx-auto leading-relaxed">
            Licensed clinical psychologist offering individual psychotherapy for
            adults both in-person and virtually in Los Angeles, CA
          </p>

          <button className="bg-[#94B0B0] ring-0 outline-none backdrop-blur-sm text-white border border-white/40 px-12 py-4 rounded-[100%] text-lg font-medium tracking-wide uppercase hover:bg-[#94B0B0]/80 transition-all duration-300 sm:h-28 mt-8 lg:mt-12 max-sm:text-sm max-sm:px-6 max-sm:py-2 max-sm:w-full max-sm:max-w-[300px] h-20">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
