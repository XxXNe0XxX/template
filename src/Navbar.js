import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const icons = [
    {
      icon: <HiMailOpen className="lg:scale-150 md:scale-125" />,
      link: "",
      animationDuration: 0.8,
    },
    {
      icon: <BsMedium className="lg:scale-150 md:scale-125" />,
      link: "",
      animationDuration: 0.6,
    },
    {
      icon: <BsLinkedin className="lg:scale-150 md:scale-125" />,
      link: "",
      animationDuration: 0.4,
    },
    {
      icon: <BsGithub className="lg:scale-150 md:scale-125" />,
      link: "",
      animationDuration: 0.2,
    },
  ];

  return (
    <>
      {/* <div className="absolute background-animate bg-gradient-to-tr from-black to-blue-500 -z-10 "></div> */}
      {/* <div className="absolute h-screen w-[50vw] bg-green-200 right-0 bottom-0 -z-10 "></div> */}
      <nav className="flex lg:h-20  h-16 w-[95vw] lg:backdrop-blur-md  justify-between   items-center   ">
        <div className="flex items-center gap-x-2 w-full">
          <div className="w-16 lg:inline-block md:inline-block hidden bg-black h-[2px] rounded-lg"></div>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Hi I'm Julio
          </motion.h1>
        </div>
        <ul className="flex lg:space-x-12 space-x-6">
          {icons.map((each, index) => (
            <a href={each.link} target={each.link}>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: each.animationDuration }}
                viewport={{ once: true }}
                key={index}
                className=" opacity-80 cursor-pointer hover:text-whitetext hover:bg-secondary hover:shadow-lg transition-all lg:p-3 p-2 rounded-md"
              >
                {each.icon}
              </motion.li>
            </a>
          ))}
        </ul>
      </nav>
      <div className="w-full h-[1px]  bg-black"></div>
    </>
  );
};

export default Navbar;
