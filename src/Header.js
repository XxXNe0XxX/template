import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-black h-screen flex flex-col relative justify-between min-h-fit lg:p-16 p-12 ">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="shadow-3xl shadow-white text-white  text-left h-fit font-semibold text-9xl"
        >
          Hi I'm Julio
        </motion.h1>

        <div className="flex items-center ml-2 space-x-2 justify-start">
          <div className="lg:w-[1em] w-[20px] h-[3em]  animate-bounce min-h-8 transition-all duration-75 shadow-yellow-300 box-shadow-yellow hover:shadow-inner hover:shadow-black rounded-full self-end bg-yellow-400"></div>
          <p className="text-6xl tracking-tight font-roboto text-gray-600 self-center ">
            Software developer
          </p>
        </div>
      </div>

      <div className="grid mt-2 gap-6 p-2 mb-8 grid-cols-2 grid-rows-3  w-full lg:w-[25%]  absolute bottom-0   right-0">
        <a className="col-span-1" href="#footer">
          <p className="px-3  w-full text-center bg-yellow-400 py-2 buttonSp text-xl text-black  hover:text-white font-semibold hover:bg-black hover:border-yellow-400 transition-all rounded-2xl border-2 border-black">
            CONTACT
          </p>
        </a>
        <a className="col-span-1 " href="#main">
          <p className="px-3  w-full text-center  py-2 button text-xl text-white  hover:text-black font-semibold hover:bg-yellow-400 hover:border-gray-600 transition-all rounded-2xl border-2 border-white">
            SKILLSET
          </p>
        </a>

        <a className="col-span-2" href="#projects">
          <p className="px-3  w-full text-center   py-2 button text-xl text-white  hover:text-black font-semibold hover:bg-yellow-400 hover:border-gray-600 transition-all rounded-2xl border-2 border-white">
            PROJECTS
          </p>
        </a>
        <a className="col-span-2" href="#blogPosts">
          <p className="px-3  w-full text-center  py-2 button text-xl text-white  hover:text-black font-semibold hover:bg-yellow-400 hover:border-gray-600 transition-all rounded-2xl border-2 border-white">
            POSTS
          </p>
        </a>
      </div>
    </div>
  );
};

export default Header;
