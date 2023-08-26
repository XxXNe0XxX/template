import { useContent } from "./ContentContext";
import { motion } from "framer-motion";

const Content = ({ data }) => {
  const { currentIndex } = useContent();
  return (
    <div className="h-full inner-background  shadow-lg  my-10  rounded-lg  min-h-fit flex  items-center  lg:w-[80vw] md:w-[90vw] px-10    ">
      {data.map((each, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`${
            currentIndex !== each.index ? "hidden" : ""
          }   flex flex-col space-y-10 sm:space-x-20 lg:flex-row  content-center items-center text-left   `}
        >
          {each.item}
        </motion.div>
      ))}
    </div>
  );
};

export default Content;
