import { motion } from "framer-motion";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title:
        "Eiusmod minim Lorem aute cillum nisi id consectetur proident eiusmod ipsum.",
      description:
        "Tempor non elit aliqua commodo fugiat commodo amet minim excepteur culpa mollit cillum ea. Duis irure laboris ea elit elit sint laborum officia. Veniam pariatur cillum ullamco.",
      gridPos: "lg:col-span-2 col-span-3",
      animationDuration: 2,
    },
    {
      id: 2,
      title: "Aliqua non elit sunt irure consequat do consequat ad nulla.",
      description:
        "Tempor non elit aliqua commodo fugiat commodo amet minim excepteur culpa mollit cillum ea. Duis irure laboris ea elit elit sint laborum officia. Veniam pariatur cillum ullamco.",
      gridPos: "lg:col-span-1 col-span-3",
      animationDuration: 2,
    },
    {
      id: 3,
      title: "Dolore consectetur proident nisi dolor excepteur cillum.",
      description:
        "Tempor non elit aliqua commodo fugiat commodo amet minim excepteur culpa mollit cillum ea. Duis irure laboris ea elit elit sint laborum officia. Veniam pariatur cillum ullamco.",
      gridPos: "lg:col-span-1 col-span-3",
      animationDuration: 1.5,
    },
    {
      id: 4,
      title: "Dolore consectetur proident nisi dolor excepteur cillum.",
      description:
        "Tempor non elit aliqua commodo fugiat commodo amet minim excepteur culpa mollit cillum ea. Duis irure laboris ea elit elit sint laborum officia. Veniam pariatur cillum ullamco.",
      gridPos: "lg:col-span-2 col-span-3",
      animationDuration: 1.5,
    },
    {
      id: 5,
      title: "Dolore consectetur proident nisi dolor excepteur cillum.",
      description:
        "Tempor non elit aliqua commodo fugiat commodo amet minim excepteur culpa mollit cillum ea. Duis irure laboris ea elit elit sint laborum officia. Veniam pariatur cillum ullamco.",
      gridPos: "lg:col-span-3 col-span-3",
      animationDuration: 1.5,
    },
  ];
  return (
    <div className="overflow-y-scroll no-scrollbar h-[65vh]">
      <div className="lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:flex-none flex flex-col  content-center items-center overflow-y-scroll snap-y snap-mandatory justify-center  gap-4 no-scrollbar">
        {projects.map((each) => (
          <motion.div
            className={` ${each.gridPos} h-40 rounded-lg snap-start  overflow-hidden backdrop-blur-sm shadow-lg  lg:p-4 p-2 border border-graytext  `}
          >
            <h1 className="font-serif text-md font-bold line-clamp-2 lg:text-base text-md ">
              {each.title}
            </h1>
            <p className="lg:text-base text-sm line-clamp-3">
              {each.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
