import { useState } from "react";
import { motion } from "framer-motion";
const Main = () => {
  const [visibleId, setVisibleId] = useState(null);

  const languages = [
    { name: "HTML", location: "/images/HtmlLogo.png", animationDuration: 0.2 },
    { name: "CSS", location: "/images/CssLogo.png", animationDuration: 0.5 },
    { name: "JAVA", location: "/images/JavaLogo.png", animationDuration: 0.8 },
    {
      name: "PYTHON",
      location: "/images/PythonLogo.png",
      animationDuration: 1,
    },
  ];
  const logos = [
    {
      id: 1,
      name: "GIT",
      logoSrc: "/images/GitLogo.png",
      size: "lg:w-1/2",
      styles: "",
      description: "Overall git commands, working in teams",
      animationDuration: 0.2,
    },
    {
      id: 2,
      name: "REACT",
      logoSrc: "/images/ReactLogo.png",
      size: "lg:w-4/5 ",
      styles: " ",
      description: "@tanstack/react-query, react-router-dom ",
      animationDuration: 0.4,
    },
    {
      id: 3,
      name: "DJANGO",
      logoSrc: "/images/DjangoLogo.png",
      size: "lg:mt-4 lg:w-4/5 ",
      styles: "",
      description: "Añade descripcion",
      animationDuration: 0.6,
    },
    {
      id: 4,
      name: "DJANGO REST FRAMEWORK",
      logoSrc: "/images/DjangoRFLogo.png",
      size: "lg:w-full ",
      styles: "",
      description: "Añade descripcion",
      animationDuration: 0.8,
    },
  ];

  const toggleDescription = (id) => {
    setVisibleId(visibleId === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br p-6  from-black to-gray-600 bg-gradient-to-r min-h-screen h-fit ">
      <h1 className="text-5xl text-left text-white p-10">My Skillset</h1>

      <ul className="flex  shadow-2xl  overflow-hidden lg:mx-auto w-[90vw]  rounded-lg border-2 border-gray-700 p-6 mx-auto lg:justify-around  flex-wrap text-white gap-x-2   ">
        <div className=" relative sm:flex sm:flex-col justify-center     mx-auto lg:w-full ">
          <svg
            className="absolute  z-0"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100%"
            filter="blur(7px)"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "blue" }}></stop>{" "}
                <stop offset="100%" style={{ stopColor: "green" }}></stop>{" "}
              </linearGradient>
            </defs>
            <path id="blob" fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="18.5s"
                repeatCount="indefinite"
                values="M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;M419.06254,317.79517Q411.11118,385.59033,349.66843,425.59894Q288.22568,465.60755,228.34547,428.45831Q168.46526,391.30906,120.24124,353.19622Q72.01722,315.08338,69.86103,249.40801Q67.70483,183.73263,103.47221,120.73263Q139.23958,57.73263,215.36631,36.75347Q291.49305,15.77432,346.41495,69.35242Q401.33686,122.93051,414.17538,186.46526Q427.0139,250,419.06254,317.79517Z;M433.0232,309.9192Q393.01281,369.83841,338.3352,406.40881Q283.6576,442.97921,221.7752,424.49281Q159.8928,406.0064,119.2384,358.9864Q78.584,311.9664,70.5304,246.7752Q62.4768,181.584,97.7552,114.4464Q133.0336,47.3088,206.208,64.61119Q279.3824,81.91359,342.208,100.8192Q405.0336,119.7248,439.0336,184.8624Q473.0336,250,433.0232,309.9192Z;M428.39652,310.63781Q395.12039,371.27562,337.58607,396.3189Q280.05174,421.36219,204.00896,441.94775Q127.96619,462.5333,107.32787,385.81839Q86.68955,309.10348,96.33581,253.18955Q105.98207,197.27562,134.68904,148.26665Q163.396,99.25769,224.43929,74.05174Q285.48258,48.8458,334.83632,93.40548Q384.19006,137.96516,422.93135,193.98258Q461.67264,250,428.39652,310.63781Z;M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z"
              ></animate>
            </path>
          </svg>
        </div>

        {logos.map((each) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: each.animationDuration, ease: "easeOut" }}
            onClick={() => toggleDescription(each.id)}
            className="flex cursor-pointer z-10 p-2 lg:w-[13vw] whitespace-normal   flex-col group  lg:items-start justify-end  "
          >
            <div className="group-hover:w-full   self-center w-0 group-hover:bg-cyan-400 bg-white h-2 transition-all rounded-xl  "></div>
            <p className="text-start mb-2 flex items-end h-24 md:text-lg lg:text-2xl   max-w-xs text-base">
              {each.name}
            </p>

            <li
              className={`relative  overflow-hidden flex flex-col h-[30vh] w-full lg:w-full justify-center items-center rounded-xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 border border-gray-100 shadow-xl text-black 
            group-hover:bg-white transition-all`}
            >
              <img
                src={each.logoSrc}
                className={`${each.size} ${each.styles} `}
              />
              <div
                className="transition-all w-full flex justify-end h-full z-10 items-end  absolute  
                     "
              >
                {visibleId === each.id ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
                     
                    shadow-xl
                    h-18 
                    rounded-md 
                    p-2 m-2 leading-4 
                    transition-all  whitespace-normal 
                    bg-slate-200   
                    "
                  >
                    {each.description}
                  </motion.p>
                ) : (
                  <p className=" cursor-pointer font-roboto group-hover:text-black   text-white rounded-lg p-2 m-2 whitespace-nowrap  ">
                    See more...
                  </p>
                )}
              </div>
            </li>
          </motion.div>
        ))}

        <ul className="flex z-10 p-2  lg:py-0 items-start py-10 w-full flex-col  lg:w-[20vw]  gap-3 text-white ">
          <h1 className="text-2xl  ">Languages</h1>
          {languages.map((each) => (
            <motion.li
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: each.animationDuration }}
              className="p-2  relative transition-all group-hover:shadow-xl justify-between flex  text-2xl w-full group text-white group "
            >
              <div className="w-20  flex justify-center  rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 border border-gray-100 shadow-xl z-0 group-hover:border-white transition-all group-hover:w-full    ">
                <img
                  className=" group-hover:bg-white p-5 group-hover:scale-125 transition-all
                  rounded-md max-h-20 min-w-max "
                  src={each.location}
                />
              </div>
              <h1 className="opacity-0 absolute w-fit right-0 text-right font-semibold z-0 group-hover:opacity-100 text-sm mr-4 rounded-xl text-black bg-white group-hover:w-fit transition-opacity px-3 py-1 self-center ">
                {each.name}
              </h1>
            </motion.li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Main;
