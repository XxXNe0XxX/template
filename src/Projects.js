import { useState } from "react";

const CarouselItem = ({ item, isActive }) => (
  <div
    className={`transition-all overflow-hidden group border  border-white  rounded-md flex items-end justify-center   relative  ${
      isActive ? "z-10 scale-110" : "blur-sm "
    }`}
  >
    <img className=" h-96 object-cover" src={item.imageSrc} alt={item.name} />
    <h1
      className={` ${
        isActive ? "" : "hidden "
      } absolute group-hover:text-sm text-lg top-0 rounded-t-md transition-all   group-hover:opacity-0 backdrop-blur-sm   w-full text-center p-1 bg-clip-padding font-extrabold font-roboto  text-white bg-gradient-to-r from-black-50 to-gray-800  `}
    >
      {item.name}
    </h1>
    <div
      className={` ${
        isActive ? "" : "hidden "
      } absolute flex items-center justify-center transition-all overflow-hidden backdrop-blur-sm group-hover:w-full w-0 h-0 p-2 group-hover:h-full `}
    >
      <p className="opacity-0 border border-gray-400 shadow-xl font-semibold h-fit z-20  group-hover:opacity-100 mx-8 transition-all bg-slate-300  p-3 rounded-md">
        {item.description}
      </p>
    </div>
  </div>
);
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  const projects = [
    {
      id: 1,
      name: "Breast Cancer Diagnosis Using Machine Learning",
      imageSrc: "/images/project1.jpg",
      description:
        "Implemented predictive models to diagnose breast cancer based on the Breast Cancer Wisconsin dataset - Utilized various machine learning algorithms, including Support Vector Machines, Random Forest, Decision Trees, and Multi-Layer Perceptron (MLP) classifier.",

      link: "",
      technologies: "Data Visualization · Pandas · Python",
    },
    {
      id: 2,
      name: "World CO2 Emission Dashboard",
      imageSrc: "/images/project2.jpg",
      description:
        "This project involves an interactive application that analyzes and visualizes CO2 emission data over time, focusing on different continents and emission sources. It utilizes Python and libraries such as pandas, panel, and hvplot to process and visualize the data.",
      link: "",
      technologies:
        "Data Preprocessing · Hyperparameter Tuning · Neural Networks · Pandas · Machine Learning",
    },
    {
      id: 3,
      name: "project 3",
      description: "poqpwdokpqwd",
      imageSrc: "/images/project3.jpg",
      link: "",
      technologies: "Data Visualization · Pandas · Python",
    },
    {
      id: 4,
      name: "project 4",
      imageSrc: "/images/project4.jpg",
      description: "oqpdoqw",
      link: "",
      technologies: "Data Visualization · Pandas · Python",
    },
    {
      id: 5,
      name: "project 5",
      imageSrc: "/images/project5.jpg",
      description: "kpaoskdpo",
      link: "",
      technologies: "Data Visualization · Pandas · Python",
    },
  ];

  return (
    <div className="min-h-screen p-6 h-fit bg-gradient-to-tr from-black to-gray-800 ">
      <h1 className="text-5xl px-16 font-roboto tracking-tight text-white py-12">
        Projects
      </h1>

      <div className=" lg:px-6 px-1 border border-white overflow-hidden  rounded-md lg:mx-auto w-[90vw] ">
        <div className="flex p-4  rounded-lg content-center justify-center relative w-full">
          <button
            className=" z-40 lg:p-4 p-3 lg:text-2xl text-base my-auto button rounded-md h-full  bg-gray-600 hover:bg-gray-800 transition-all text-white left-0 "
            onClick={handlePrev}
          >
            &lt;
          </button>
          <div className="flex lg:-space-x-[500px] -space-x-52 p-20 justify-around">
            {projects.map((item, index) => (
              <CarouselItem
                key={index}
                item={item}
                isActive={index === currentIndex}
              />
            ))}
          </div>
          <button
            className=" z-40  lg:p-4 p-3 lg:text-2xl text-base my-auto button rounded-md h-full  bg-gray-600 hover:bg-gray-800 transition-all text-white right-0 "
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
