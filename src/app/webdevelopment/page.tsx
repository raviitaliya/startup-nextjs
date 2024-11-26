import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import { FaLaptopCode, FaMobile, FaShoppingCart, FaRocket, FaSearch, FaPencilAlt, FaCode, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Web Development Services | Levify Solutions",
  description: "Transform your digital presence with Levify Solutions' professional web development services. We create modern, responsive, and high-performing websites.",
};

const WebDevelopment = () => {
  return (
    <>
      <Breadcrumb
        pageName="Web Development Services"
        description="Create powerful, scalable, and user-friendly websites that drive growth and deliver exceptional digital experiences."
      />

      {/* Web Development Services Section */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Custom Web Development Solutions
                </h2>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                  At Levify Solutions, we specialize in creating custom websites that combine stunning design with powerful functionality. Our development team ensures your website is fast, secure, and optimized for success.
                </p>
                <div className="flex flex-col gap-8">
                  {webServices.map((service, index) => (
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
                  src="/images/webdevelopment.jpg"
                  alt="web development services"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="bg-gray-50 dark:bg-gray-900 pb-[120px]">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Our Development Process
            </h2>
            <p className="text-base text-body-color">
              A systematic approach to delivering high-quality web solutions
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {developmentProcess.map((step, index) => (
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
                  Ready to Build Your Website?
                </h2>
                <p className="mb-8 text-base text-body-color">
                  Let's create a powerful web presence that helps your business grow and succeed in the digital world.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Updated Web Development Services Data
const webServices = [
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Custom Website Development",
    description: "Tailored websites built with modern technologies to meet your specific business needs and goals.",
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: "Responsive Web Design",
    description: "Mobile-first websites that provide seamless experience across all devices and screen sizes.",
  },
  {
    icon: <FaShoppingCart className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description: "Custom online stores with secure payment gateways and intuitive shopping experiences.",
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Web Application Development",
    description: "Scalable and secure web applications with robust functionality and user-friendly interfaces.",
  },
];

// Updated Development Process Data
const developmentProcess = [
  {
    icon: <FaSearch className="w-12 h-12 text-primary mx-auto" />,
    title: "Discovery & Planning",
    description: "Understanding your requirements, goals, and target audience to create a comprehensive development strategy.",
  },
  {
    icon: <FaPencilAlt className="w-12 h-12 text-primary mx-auto" />,
    title: "Design & Prototyping",
    description: "Creating wireframes and interactive prototypes to visualize the user experience and interface.",
  },
  {
    icon: <FaCode className="w-12 h-12 text-primary mx-auto" />,
    title: "Development",
    description: "Building your website with clean, efficient code and implementing all required functionality.",
  },
  {
    icon: <FaCheckCircle className="w-12 h-12 text-primary mx-auto" />,
    title: "Testing & Launch",
    description: "Thorough testing across devices and browsers, followed by deployment and post-launch support.",
  },
];

export default WebDevelopment;
