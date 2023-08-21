import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { motion } from "framer-motion";

const Example = () => {
  const icons = [
    {
      icon: <BsLinkedin />,
      animationDuration: 0.2,
    },
    {
      icon: <BsGithub />,
      animationDuration: 0.4,
    },
    {
      icon: <BsWhatsapp />,
      animationDuration: 0.6,
    },
    {
      icon: <HiMailOpen />,
      animationDuration: 0.8,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden h-fit ">
      <div className="absolute background-animate bg-gradient-to-tr from-black to-blue-500 -z-10 "></div>
      {/* <div className="absolute h-screen w-[50vw] bg-green-200 right-0 bottom-0 -z-10 "></div> */}

      <nav className="flex h-20 w-[90vw] justify-between items-center mx-auto ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Hi I'm Julio
        </motion.h1>
        <ul className="flex lg:space-x-12 space-x-6">
          {icons.map((each, index) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: each.animationDuration }}
              viewport={{ once: true }}
              key={index}
              className="  md:scale-100 lg:scale-125"
            >
              {each.icon}
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Example;
