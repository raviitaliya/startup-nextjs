import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import { FaPalette, FaLightbulb, FaGlobe, FaChartLine, FaSearch, FaBullseye, FaPencilAlt, FaRocket } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Strategic Branding Services | Levify Solutions",
  description: "Elevate your business with Levify Solutions' professional branding services. We create distinctive brand identities that drive growth and customer engagement.",
};

const Branding = () => {
  return (
    <>
      <Breadcrumb
        pageName="Strategic Branding Solutions"
        description="Partner with Levify Solutions to build a powerful brand that drives business growth and creates lasting connections with your audience."
      />

      {/* Branding Services Section */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Build a Powerful Brand Identity
                </h2>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                  At Levify Solutions, we combine strategic thinking with creative excellence to build brands that stand out. Our comprehensive branding services help businesses establish strong market presence and create meaningful connections with their target audience.
                </p>
                <div className="flex flex-col gap-8">
                  {brandingServices.map((service, index) => (
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
                  src="/images/branding/branding-hero.jpg"
                  alt="branding services"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 dark:bg-gray-900 pb-[120px]">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Our Strategic Branding Approach
            </h2>
            <p className="text-base text-body-color">
              A proven methodology that transforms businesses into memorable brands
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {brandingProcess.map((step, index) => (
              <div 
                key={index}
                className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg"
              >
                <div className="mb-4 text-primary text-4xl font-bold">
                  {(index + 1).toString().padStart(2, '0')}
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
                  Ready to Transform Your Brand?
                </h2>
                <p className="mb-8 text-base text-body-color">
                  Let's collaborate to create a distinctive brand identity that drives your business success and resonates with your target audience.
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

// Branding Services Data
const brandingServices = [
  {
    icon: <FaPalette className="w-8 h-8" />,
    title: "Brand Identity Design",
    description: "Custom logo design, visual elements, and brand assets that capture your unique business essence.",
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Strategic Brand Development",
    description: "Comprehensive brand strategy, positioning, and market analysis to differentiate your business.",
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Digital Brand Experience",
    description: "Cohesive digital presence across web, social media, and other digital platforms.",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Brand Management",
    description: "Ongoing brand monitoring, guidelines implementation, and consistency maintenance.",
  },
];

// Branding Process Data
const brandingProcess = [
  {
    icon: <FaSearch className="w-12 h-12 text-primary mx-auto" />,
    title: "Research & Analysis",
    description: "Deep dive into your industry, competitors, target audience, and business objectives to inform our strategy.",
  },
  {
    icon: <FaBullseye className="w-12 h-12 text-primary mx-auto" />,
    title: "Brand Strategy",
    description: "Developing your unique value proposition, brand positioning, and comprehensive brand strategy.",
  },
  {
    icon: <FaPencilAlt className="w-12 h-12 text-primary mx-auto" />,
    title: "Creative Development",
    description: "Creating distinctive visual elements and brand assets that align with your strategy and resonate with your audience.",
  },
  {
    icon: <FaRocket className="w-12 h-12 text-primary mx-auto" />,
    title: "Implementation & Growth",
    description: "Launching your brand across all channels and providing ongoing support for consistent brand growth.",
  },
];

export default Branding;
