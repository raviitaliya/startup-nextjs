import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaPencilAlt, 
  FaChartLine, 
  FaComments, 
  FaChartBar 
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Social Media Management | Levify Solutions",
  description: "Elevate your social media presence with Levify Solutions' professional management services. We help businesses engage audiences and drive growth through strategic social media marketing.",
};

const SocialMediaManagement = () => {
  return (
    <>
      <Breadcrumb
        pageName="Social Media Management"
        description="Build a strong social media presence with our expert management services and strategic content creation."
      />

      {/* Social Media Services Section */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Strategic Social Media Management
                </h2>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                  We help businesses build and maintain a strong social media presence through strategic content creation, community engagement, and data-driven campaigns.
                </p>
                <div className="flex flex-col gap-8">
                  {socialMediaServices.map((service, index) => (
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
                  src="/images/socialmeadia.jpg"
                  alt="social media management services"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="bg-gray-50 dark:bg-gray-900 pb-[120px]">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Platforms We Manage
            </h2>
            <p className="text-base text-body-color">
              Comprehensive social media management across all major platforms
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {platform.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {platform.name}
                </h3>
                <p className="text-body-color">
                  {platform.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="text-primary font-medium inline-flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
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
                  Ready to Boost Your Social Media Presence?
                </h2>
                <p className="mb-8 text-base text-body-color">
                  Let's create engaging social media content that connects with your audience and drives business growth.
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

// Updated Social Media Services Data
const socialMediaServices = [
  {
    icon: <FaPencilAlt className="w-8 h-8" />,
    title: "Content Creation & Curation",
    description: "Engaging posts, graphics, and videos tailored to your brand voice and audience preferences.",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Strategy Development",
    description: "Custom social media strategies aligned with your business goals and target audience.",
  },
  {
    icon: <FaComments className="w-8 h-8" />,
    title: "Community Management",
    description: "Active engagement with your audience through comments, messages, and community building.",
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    title: "Analytics & Reporting",
    description: "Regular performance reports and insights to optimize your social media strategy.",
  },
];

// Updated Platforms Data with consistent styling
const platforms = [
  {
    icon: <FaFacebook className="w-12 h-12 text-[#1877F2] mx-auto" />,
    name: "Facebook",
    description: "Engage with your community and build brand awareness",
  },
  {
    icon: <FaInstagram className="w-12 h-12 text-[#E4405F] mx-auto" />,
    name: "Instagram",
    description: "Share visual content and connect with younger audiences",
  },
  {
    icon: <FaLinkedin className="w-12 h-12 text-[#0A66C2] mx-auto" />,
    name: "LinkedIn",
    description: "Professional networking and B2B engagement",
  },
];

export default SocialMediaManagement;
