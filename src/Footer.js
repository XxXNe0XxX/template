import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";

const icons = [
  {
    id: 2,
    name: "LinkedIn",
    icon: <BsLinkedin />,
    description: "LinkedIn",
    link: "https://www.linkedin.com/in/siles-julio/",
    styles: " hover:bg-blue-800 hover:text-white ",
  },
  {
    id: 3,
    name: "GitHub",
    icon: <BsGithub />,
    description: "GitHub",
    link: "https://github.com/1SJulioS1",
    styles: "hover:bg-gray-800 hover:text-white",
  },
  {
    id: 4,
    name: "Whatsapp",
    icon: <BsWhatsapp />,
    description: "WhatsApp",
    link: "https://wa.me/+15664488997",
    styles: "hover:bg-green-800 hover:text-white",
  },
  {
    id: 5,
    name: "email",
    icon: <HiMailOpen />,
    description: "juliosspz@gmail.com",
    link: "_",
    styles: "hover:bg-red-800 hover:text-white",
  },
];
const certifications = [
  {
    title: "Meta Back-End Developer Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FHCC3W8BTE5M",
    by: "Coursera",
  },
  {
    title: "Programming with JavaScript",
    link: "https://www.coursera.org/account/accomplishments/certificate/NM73MPVD9PHW",
    by: "Coursera",
  },
  {
    title: "The Full Stack",
    link: "https://www.coursera.org/account/accomplishments/certificate/KN5KPY4A3HWG",
    by: "Coursera",
  },
  {
    title: "API",
    link: "https://www.coursera.org/account/accomplishments/certificate/W82D9LKLLJDH",
    by: "Coursera",
  },
  {
    title: "Django Web Framework",
    link: "https://www.coursera.org/account/accomplishments/certificate/4WWNCH9B8LUJ",
    by: "Coursera",
  },
  {
    title: "Introduction to Back-End Development",
    link: "https://www.coursera.org/account/accomplishments/certificate/ENREK52ZM86L",
    by: "Coursera",
  },
  {
    title: "Introduction to Databases for Back-End Development",
    link: "https://www.coursera.org/account/accomplishments/certificate/PQJR8JDNYNAK",
    by: "Coursera",
  },
  {
    title: "Introduction to Front-End Development",
    link: "https://www.coursera.org/account/accomplishments/certificate/M8VZWBPQXREY",
    by: "Coursera",
  },
  {
    title: "Programming in Python",
    link: "https://www.coursera.org/account/accomplishments/certificate/DF8G6LJRH7QQ",
    by: "Coursera",
  },
  {
    title: "Version Control",
    link: "https://www.coursera.org/account/accomplishments/certificate/4F8QGX6KKBTC",
    by: "Coursera",
  },
];

const Footer = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-t   from-black to-gray-800  ">
      <h1 className="text-5xl text-white font-roboto tracking-tight p-16">
        About Me
      </h1>
      <div className="gap-3 rounded-md lg:flex-row flex-col-reverse h-fit  flex  justify-center  lg:flex">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" grid grid-cols-3 tracking-tighter grid-rows-3 gap-6 p-5 border font-roboto shadow-lg lg:max-w-[60vw] border-gray-300 rounded-md bg-white  "
        >
          <div className=" p-1 rounded-md shadow-md h-fit col-span-3">
            <h1 className="">Licenses and certifications</h1>
            <div className="h-40 flex gap-2 snap-x snap-mandatory w-full overflow-x-scroll">
              {certifications.map((each) => (
                <div
                  className="border snap-start flex  flex-col justify-between items-end  text-sm rounded-md p-1 border-gray-200"
                  key={each.id}
                >
                  <div className="text-center  overflow-y-scroll no-scrollbar h-full w-full">
                    <span className="">{each.title}</span>
                  </div>
                  <h2 className="text-center text-gray-800 w-full">
                    By:{each.by}
                  </h2>
                  <p className="bg-gray-800 hover:bg-gray-600 transition-colors p-1 w-full text-xs rounded-md text-white">
                    <a href={each.link} target={each.link}>
                      Certification
                      <span>
                        <BiLinkExternal></BiLinkExternal>
                      </span>
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" p-1 rounded-md border-gray-200 border shadow-md row-span-2 overflow-y-scroll ">
            <p className="text-left  text-sm h-[20vh] leading-8 whitespace-normal ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              veniam culpa. Enim vel voluptas dolore voluptatum sit dolorem id
              ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              veniam culpa. Enim vel voluptas dolore voluptatum sit dolorem id
              ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              veniam culpa. Enim vel voluptas dolore voluptatum sit dolorem id
              ut.Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              veniam culpa. Enim vel voluptas dolore voluptatum sit dolorem id
              ut.
            </p>
          </div>
          <div className="col-span-2  ">
            <h1>Technologies applied</h1>
            <div className="overflow-x-scroll h-fit  border-gray-300 rounded-md p-1 shadow-lg border flex flex-col w-full">
              <div className="">
                <h1>
                  {/* Project # */}Breast Cancer Diagnosis Using Machine
                  Learning
                </h1>
                {/* Project Desription */}
                <p>
                  Data Preprocessing · Hyperparameter Tuning · Neural Networks ·
                  Pandas · Machine Learning
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2  ">
            <h1>Knowledge</h1>
            <div className="overflow-x-scroll h-fit  border-gray-300 rounded-md p-1 shadow-lg border flex flex-col w-full">
              <div className="">
                <ul>
                  <li>Data Analysis</li>
                  <li>Algorithms</li>
                  <li>Algorithm design</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border shadow-lg  px-10 py-4 border-gray-300 text-2xl rounded-md bg-white  lg:w-[20vw] flex justify-center space-y-3 content-around  items-center flex-col "
        >
          <div className="rounded-full overflow-hidden flex content-center justify-center items-center   shadow-lg drop-shadow border-2 border-cyan-400">
            <img alt="profile " className="" src="/images/Pepi.jpg"></img>
          </div>
          <h1 className=" text-4xl tracking-wider font-thin">JULIO C. SILES</h1>
          <p className="text-sm text-center whitespace-normal py-2 text-gray-500">
            Software Developer | Computer Scientist | Data Scientist | Back-End
            Developer | Front-End Developer
          </p>
          <div className="flex justify-center w-full space-y-2 font-thin flex-col  ">
            {icons.map((each) => (
              <div className="lg:p-0  md:px-40" key={each.id}>
                <a href={each.link} target={each.link}>
                  <div
                    className={`${each.styles} flex border p-2 lg:p-2   items-center  rounded-md transition-all gap-x-9`}
                  >
                    {each.icon}
                    <p className="text-sm">{each.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
