import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import { FaCogs, FaRobot, FaChartLine, FaTools, FaClipboardCheck, FaLightbulb } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Business Automation Solutions | Levify Solutions",
  description: "Transform your business operations with Levify Solutions' automation services. We help businesses streamline processes, reduce costs, and improve efficiency.",
};

const BusinessAutomation = () => {
  return (
    <>
      <Breadcrumb
        pageName="Business Automation Solutions"
        description="Streamline your operations and boost productivity with intelligent automation solutions."
      />

      {/* Business Automation Services Section */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Intelligent Business Automation
                </h2>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                  We help businesses automate repetitive tasks, streamline workflows, and optimize operations using cutting-edge automation technologies and intelligent solutions.
                </p>
                <div className="flex flex-col gap-8">
                  {automationServices.map((service, index) => (
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
                  src="/images/bussinesssollutions.jpg"
                  alt="business automation solutions"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-[120px]">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Benefits of Business Automation
            </h2>
            <p className="text-base text-body-color">
              Transform your business operations with automation
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {automationBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-body-color">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px]">
        <div className="container">
          <div className="relative z-10 overflow-hidden rounded-lg bg-primary bg-opacity-10 py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
                  Ready to Automate Your Business?
                </h2>
                <p className="mb-8 text-base text-body-color">
                  Let's discuss how automation can transform your business operations and boost productivity.
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

// Business Automation Services Data
const automationServices = [
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to improve efficiency and reduce manual errors.",
  },
  {
    icon: <FaRobot className="w-8 h-8" />,
    title: "Intelligent Automation",
    description: "Implement AI and machine learning solutions to automate complex business processes.",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Business Analytics",
    description: "Automated data collection and analysis for better decision-making.",
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: "Integration Solutions",
    description: "Seamlessly connect your business systems and applications for improved workflow.",
  },
];

// Automation Benefits Data
const automationBenefits = [
  {
    icon: <FaChartLine className="w-12 h-12 text-primary mx-auto" />,
    title: "Increased Efficiency",
    description: "Reduce manual tasks and streamline operations for better productivity.",
  },
  {
    icon: <FaClipboardCheck className="w-12 h-12 text-primary mx-auto" />,
    title: "Improved Accuracy",
    description: "Minimize human errors and ensure consistent process execution.",
  },
  {
    icon: <FaLightbulb className="w-12 h-12 text-primary mx-auto" />,
    title: "Cost Reduction",
    description: "Lower operational costs and improve resource allocation.",
  },
];

export default BusinessAutomation;
