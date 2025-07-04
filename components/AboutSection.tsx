import Image from "next/image";
import PortFolio from "@/assets/doctor-image.png";

const AboutSection = () => {
  return (
    <section className="py-24 pb-6 px-6 bg-white max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              About Dr. Serena Blake
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg font-light">
                Finding time and opportunities to care for ourselves can be
                incredibly challenging in today&apos;s busy and demanding world.
                I believe therapy offers a dedicated space for self-care,
                providing the support and tools needed to improve this essential
                practice.
              </p>

              <p className="text-lg font-light">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                based in Los Angeles, CA, with eight years of experience and
                over 500 client sessions. She blends evidence-based
                approaches—like cognitive-behavioral therapy and
                mindfulness—with compassionate, personalized care.
              </p>

              <p className="text-lg font-light">
                Whether you meet in her Maplewood Drive office or connect
                virtually via Zoom, Dr. Blake is committed to creating a safe,
                supportive space for you to overcome anxiety, strengthen
                relationships, and heal from trauma.
              </p>
            </div>
          </div>

          {/* Image */}
          <Image
            src={PortFolio}
            alt="Dr. Serena Blake"
            width={300}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      {/* divider */}
      <div className="border-t border-1 border-gray-500 mt-52 mb-14" />
    </section>
  );
};

export default AboutSection;
