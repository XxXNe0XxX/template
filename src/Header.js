import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-black h-screen min-h-fit p-16  ">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="shadow-3xl shadow-white text-white  text-left h-fit font-semibold text-9xl"
      >
        Hi I'm Julio
      </motion.h1>

      <div className="flex items-center justify-start space-x-2">
        <div className="w-4 h-[3em]  animate-bounce min-w-4 min-h-8 transition-all duration-75 shadow-yellow-300 box-shadow hover:shadow-inner hover:shadow-black rounded-full self-end bg-yellow-400"></div>
        <p className="text-6xl font-roboto text-gray-600 self-center ">
          Software developer
        </p>
      </div>

      <div className="flex lg:h-full md:h-[50%] h-24 self-end space-x-6 items-center justify-end w-full">
        <a href="#main">
          <p className="px-3 py-2 button text-xl text-white  hover:text-black font-semibold hover:bg-yellow-400 hover:border-gray-600 transition-all rounded-2xl border-2 border-white">
            SKILLSET
          </p>
        </a>
        <a href="#footer">
          <p className="px-3 py-2 button text-xl text-white  hover:text-black font-semibold hover:bg-yellow-400 hover:border-gray-600 transition-all rounded-2xl border-2 border-white">
            CONTACT
          </p>
        </a>
      </div>
    </div>
  );
};

export default Header;
