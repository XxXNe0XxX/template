import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { motion } from "framer-motion";

const icons = [
  {
    id: 1,
    name: "Hire",
    icon: <BsBriefcaseFill />,
    description: "Available for hiring",
    link: "",
    styles: "border-green-400 bg-green-200 ",
  },
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
    description: "jjssiilleess@gmail.com ",
    link: "_",
    styles: "hover:bg-red-800 hover:text-white",
  },
];

const Footer = () => {
  return (
    <div className="min-h-screen  bg-gradient-from-br p-6  from-white to-gray-300 bg-gradient-to-r  ">
      <h1 className="text-6xl  text-black p-16">About Me</h1>
      <div className="gap-3 rounded-md lg:flex-row flex-col-reverse  flex h-full  justify-center  lg:flex">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-12 border shadow-lg lg:max-w-[50vw] border-gray-300 rounded-md bg-white  "
        >
          <p className="text-left leading-8 whitespace-normal ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, veniam
            culpa. Enim vel voluptas dolore voluptatum sit dolorem id ut.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. In, veniam
            culpa. Enim vel voluptas dolore voluptatum sit dolorem id ut.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. In, veniam
            culpa. Enim vel voluptas dolore voluptatum sit dolorem id ut.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. In, veniam
            culpa. Enim vel voluptas dolore voluptatum sit dolorem id ut.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border shadow-lg p-4  border-gray-300 text-2xl rounded-md bg-white h-[70vh] lg:w-[20vw] flex justify-between content-around  items-center flex-col "
        >
          <div className="rounded-full w-40 h-40 overflow-hidden flex content-center justify-center items-center align-middle  shadow-lg drop-shadow border-2 border-green-300">
            <img alt="profile" className="" src="/images/Pepi.jpg"></img>
          </div>
          <h1 className="p-2 text-3xl font-thin">JULIO C. SILES </h1>
          <p className="text-sm mb-4 text-gray-500">Descripcion corta aqui</p>
          <div className="flex justify-center w-fit font-thin flex-col space-y-4 ">
            {icons.map((each) => (
              <div key={each.id}>
                <a href={each.link} target={each.link}>
                  <div
                    className={`${each.styles} flex border  p-2    items-center  rounded-md transition-all gap-x-9`}
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
