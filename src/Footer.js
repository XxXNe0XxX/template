import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContent } from "./ContentContext";

const Footer = ({ dataLength }) => {
  const { currentIndex, setCurrentIndex } = useContent();
  const pages = [
    {
      index: 0,
      title: "Licenses",
    },
    {
      index: 1,
      title: "Projects",
    },
    {
      index: 2,
      title: "About Me",
    },
    {
      index: 3,
      title: "Blog Posts",
    },
  ];

  return (
    <div className="h-[10vh] pb-2  w-full lg:w-[80vw] md:w-[90vw] space-y-6 flex flex-col justify-start lg:h-44">
      <ul className=" flex justify-center w-full ">
        {pages.map((each, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(each.index)}
            className=" w-full cursor-pointer  flex flex-col content-center items-center"
          >
            <h1
              className={`${
                currentIndex === each.index ? " transition-all italic" : ""
              } text-md lg:text-xl `}
            >
              {each.title}
            </h1>
            <div
              className={` ${
                currentIndex === each.index ? " transition-all w-full" : ""
              } "hover:w-full rounded-full w-0 h-[1px] bg-black transition-all"`}
            ></div>
          </button>
        ))}
      </ul>
      <div className="w-full h-fit flex md:justify-between mx-auto justify-around">
        <button
          className={` px-4 scale-150 transition-all ${
            currentIndex === 0 ? " text-graytext " : ""
          }`}
          onClick={() =>
            currentIndex === 0 ? "" : setCurrentIndex((prev) => prev - 1)
          }
        >
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </button>

        <button
          className={` px-4 scale-150  transition-all ${
            currentIndex === dataLength - 1 ? "  text-graytext " : ""
          }`}
          onClick={() =>
            currentIndex === dataLength - 1
              ? ""
              : setCurrentIndex((prev) => prev + 1)
          }
        >
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Footer;
