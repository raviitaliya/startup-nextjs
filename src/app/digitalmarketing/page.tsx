import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import { FaSearch, FaHashtag, FaAd, FaPencilAlt, FaChartLine, FaLightbulb, FaRocket, FaChartBar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Levify Solutions",
  description: "Boost your online presence with Levify Solutions' data-driven digital marketing services. We help businesses grow through SEO, social media, PPC, and content marketing.",
};

const DigitalMarketing = () => {
  return (
    <>
      <Breadcrumb
        pageName="Digital Marketing Services"
        description="Drive growth and engagement with our comprehensive digital marketing solutions tailored to your business goals."
      />

      {/* Digital Marketing Services Section */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Strategic Digital Marketing Solutions
                </h2>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                  At Levify Solutions, we create data-driven digital marketing strategies that help businesses reach their target audience, increase engagement, and drive conversions.
                </p>
                <div className="flex flex-col gap-8">
                  {marketingServices.map((service, index) => (
                    <div 
                      key={index} 
                      className="group flex items-start p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg dark:hover:bg-gray-800"
                    >
                      <div className="mr-6 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-2xl bg-primary bg-opacity-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-base text-body-color">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative aspect-[25/24] overflow-hidden rounded-lg">
                <Image
                  src="/images/marketing.jpg"
                  alt="digital marketing services"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategy Process */}
      <section className="bg-gray-50 dark:bg-gray-900 pb-[120px]">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Our Marketing Approach
            </h2>
            <p className="text-base text-body-color">
              A results-driven process to maximize your digital marketing ROI
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {marketingProcess.map((step, index) => (
              <div 
                key={index}
                className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-body-color">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-[120px]">
        <div className="container">
          <div className="relative z-10 overflow-hidden rounded-lg bg-primary bg-opacity-10 py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
                  Ready to Grow Your Online Presence?
                </h2>
                <p className="mb-8 text-base text-body-color">
                  Let's create a customized digital marketing strategy that helps you reach your business goals and target audience effectively.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Updated Digital Marketing Services Data
const marketingServices = [
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility in search results with our comprehensive SEO strategies.",
  },
  {
    icon: <FaHashtag className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your audience through strategic social media campaigns.",
  },
  {
    icon: <FaAd className="w-8 h-8" />,
    title: "Pay-Per-Click Advertising",
    description: "Drive targeted traffic and conversions with optimized PPC campaigns across multiple platforms.",
  },
  {
    icon: <FaPencilAlt className="w-8 h-8" />,
    title: "Content Marketing",
    description: "Create valuable content that attracts and retains your target audience while driving conversions.",
  },
];

// Updated Marketing Process Data
const marketingProcess = [
  {
    icon: <FaChartLine className="w-12 h-12 text-primary mx-auto" />,
    title: "Research & Analysis",
    description: "Understanding your market, competitors, and target audience to develop effective strategies.",
  },
  {
    icon: <FaLightbulb className="w-12 h-12 text-primary mx-auto" />,
    title: "Strategy Development",
    description: "Creating customized marketing plans aligned with your business goals and target audience.",
  },
  {
    icon: <FaRocket className="w-12 h-12 text-primary mx-auto" />,
    title: "Implementation",
    description: "Executing campaigns across chosen channels with continuous optimization for best results.",
  },
  {
    icon: <FaChartBar className="w-12 h-12 text-primary mx-auto" />,
    title: "Monitor & Optimize",
    description: "Tracking performance metrics and making data-driven adjustments to improve ROI.",
  },
];

export default DigitalMarketing;
