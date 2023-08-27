import { motion } from "framer-motion";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Breast Cancer Diagnosis Using Machine Learning",
      description:
        "Implemented predictive models to diagnose breast cancer based on the Breast Cancer Wisconsin dataset.*- Utilized various machine learning algorithms, including Support Vector Machines, Random Forest, Decision Trees, and Multi-Layer Perceptron (MLP) classifier.- Employed data preprocessing techniques such as feature scaling and encoding.- Tuned hyperparameters using GridSearchCV to optimize model performance.- Achieved the highest accuracy with the MLP classifier, demonstrating strong predictive power.",
      gridPos: "",
      animationDuration: 2,
      image: "/images/breast-cancer.webp",
      imageAlt: "breast cancer",
    },
    {
      id: 2,
      title: "World CO2 Emission Dashboard",
      description:
        "This project involves an interactive application that analyzes and visualizes CO2 emission data over time, focusing on different continents and emission sources. It utilizes Python and libraries such as pandas, panel, and hvplot to process and visualize the data.",
      gridPos: "",
      animationDuration: 2,
      image: "/images/co2.jpg",
      imageAlt: "Co2 contamination",
    },
  ];

  return (
    <div className="h-full md:w-full  w-[85vw] ">
      <div className="no-scrollbar   space-x-5 p-1 snap-x snap-mandatory  overflow-x-scroll  flex    ">
        {projects.map((each) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={` ${each.gridPos} relative border-4  border-graytext flex flex-col justify-between h-[60vh]  group snap-start  md:min-w-full min-w-[85vw]  rounded-md  backdrop-blur-sm     `}
          >
            <img
              className="absolute w-full h-full blur-[2px] -z-10 object-cover"
              alt={each.alt}
              src={each.image}
            ></img>
            <h1 className="font-serif background-animate p-4 text-md line-clamp-2 lg:text-2xl text-md font-bold tracking-wide  ">
              {each.title}
            </h1>
            <p className=" lg:text-base p-4 opacity-0 group-hover:opacity-100  group-hover:pb-40  backdrop-blur-3xl  transition-all text-md line-clamp-3">
              {each.description}
            </p>
            <p className="group-hover:opacity-0 text-whitetext rounded-md  absolute transition-all bottom-0 right-0 p-2 animate-bounce ">
              ...
            </p>
          </motion.div>
        ))}
      </div>
      <p className=" w-full text-right animate-pulse lg:text-base text-xs">
        Scroll to see more...
      </p>
    </div>
  );
};

export default Projects;
