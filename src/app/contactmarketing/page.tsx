import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import { FaPencilAlt, FaChartLine, FaSearch, FaBullhorn, FaNewspaper, FaVideo } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Content Marketing Services | Levify Solutions",
  description: "Drive engagement and growth with Levify Solutions' strategic content marketing services. We create compelling content that connects with your audience and delivers results.",
};

const ContentMarketing = () => {
  return (
    <>
      <Breadcrumb
        pageName="Content Marketing Services"
        description="Create compelling content that engages your audience and drives business growth."
      />

      {/* Content Marketing Services Section */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Strategic Content Marketing Solutions
                </h2>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                  We help businesses create and distribute valuable, relevant content that attracts and retains their target audience while driving profitable customer action.
                </p>
                <div className="flex flex-col gap-8">
                  {contentServices.map((service, index) => (
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
                  src="/images/contactmarketing.jpg"
                  alt="content marketing services"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="bg-gray-50 dark:bg-gray-900 pb-[120px]">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Content Types We Create
            </h2>
            <p className="text-base text-body-color">
              Diverse content formats to engage your audience across all channels
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contentTypes.map((type, index) => (
              <div 
                key={index}
                className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {type.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {type.name}
                </h3>
                <p className="text-body-color">
                  {type.description}
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
                  Ready to Create Engaging Content?
                </h2>
                <p className="mb-8 text-base text-body-color">
                  Let's develop a content strategy that helps you connect with your audience and achieve your business goals.
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

// Content Marketing Services Data
const contentServices = [
  {
    icon: <FaPencilAlt className="w-8 h-8" />,
    title: "Content Strategy",
    description: "Develop comprehensive content strategies aligned with your business goals and audience needs.",
  },
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: "SEO Content Creation",
    description: "Create SEO-optimized content that ranks well and drives organic traffic to your website.",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Content Analytics",
    description: "Track and analyze content performance to optimize your content marketing strategy.",
  },
 
];

// Content Types Data
const contentTypes = [
  {
    icon: <FaNewspaper className="w-12 h-12 text-primary mx-auto" />,
    name: "Blog Posts & Articles",
    description: "Informative and engaging written content that establishes thought leadership.",
  },
  {
    icon: <FaVideo className="w-12 h-12 text-primary mx-auto" />,
    name: "Video Content",
    description: "Engaging video content that captures attention and drives engagement.",
  },
  {
    icon: <FaPencilAlt className="w-12 h-12 text-primary mx-auto" />,
    name: "Whitepapers & Guides",
    description: "In-depth content that showcases your expertise and generates leads.",
  },
];

export default ContentMarketing;
