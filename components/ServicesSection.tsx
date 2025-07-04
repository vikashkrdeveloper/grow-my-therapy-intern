import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Work through overwhelming thoughts, sleep disturbances, and burnout. Dr. Blake uses CBT and mindfulness tools to help you regain control and peace.",
      image:
        "https://img.freepik.com/free-photo/young-woman-meditating-nature_53876-138052.jpg",
    },
    {
      title: "Relationship Counseling",
      description:
        "Improve communication, rebuild trust, and foster deeper emotional connection. Sessions are tailored to couples or individuals navigating relationship challenges.",
      image:
        "https://img.freepik.com/free-photo/couple-therapy-session-indoors_23-2148994370.jpg",
    },
    {
      title: "Trauma Recovery",
      description:
        "Dr. Blake offers a trauma-informed approach to help you process and recover from painful past experiences in a safe and supportive environment.",
      image:
        "https://img.freepik.com/free-photo/woman-receiving-therapy-session-mental-health_23-2148994513.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f3f0e8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-8 text-gray-800">
            Areas of Focus
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              {/* Circular Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
                style={{ objectFit: "cover" }}
              />

              {/* Content */}
              <h3 className="font-serif text-2xl font-medium mb-6 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
