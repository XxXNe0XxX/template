const AboutMe = () => {
  const certifications = [
    {
      title: "Meta Back-End Developer Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FHCC3W8BTE5M",
      by: "/images/coursera.svg",
    },
    {
      title: "Programming with JavaScript",
      link: "https://www.coursera.org/account/accomplishments/certificate/NM73MPVD9PHW",
      by: "/images/coursera.svg",
    },
    {
      title: "The Full Stack",
      link: "https://www.coursera.org/account/accomplishments/certificate/KN5KPY4A3HWG",
      by: "/images/coursera.svg",
    },
    {
      title: "API",
      link: "https://www.coursera.org/account/accomplishments/certificate/W82D9LKLLJDH",
      by: "/images/coursera.svg",
    },
    {
      title: "Django Web Framework",
      link: "https://www.coursera.org/account/accomplishments/certificate/4WWNCH9B8LUJ",
      by: "/images/coursera.svg",
    },
    {
      title: "Introduction to Back-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/ENREK52ZM86L",
      by: "/images/coursera.svg",
    },
    {
      title: "Introduction to Databases for Back-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/PQJR8JDNYNAK",
      by: "/images/coursera.svg",
    },
    {
      title: "Introduction to Front-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/M8VZWBPQXREY",
      by: "/images/coursera.svg",
    },
    {
      title: "Programming in Python",
      link: "https://www.coursera.org/account/accomplishments/certificate/DF8G6LJRH7QQ",
      by: "/images/coursera.svg",
    },
    {
      title: "Version Control",
      link: "https://www.coursera.org/account/accomplishments/certificate/4F8QGX6KKBTC",
      by: "/images/coursera.svg",
    },
  ];
  return (
    <div className="w-[90vw] mx-auto">
      <div className="flex  h-full md:flex-row flex-col  md:justify-center justify-between items-center lg:space-y-0 space-y-8  overflow-hidden">
        <div className="flex  lg:w-[70%] lg:h-full h-52 shadow-lg  backdrop-blur-sm border-2 border-graytext rounded-2xl">
          <p className="text-center md:text-base text-sm self-center w-[60%] p-4 mx-auto">
            Software Developer | Computer Scientist | Data Scientist | Back-End
            Developer
          </p>
          <div className="flex rounded-xl overflow-hidden content-center items-center justify-center object-cover ">
            <img
              className="w-56 "
              src="images/Pepi.jpg"
              alt="my profile pic"
            ></img>
          </div>
        </div>
        <div className="flex justify-center overflow-y-scroll h-[19rem] flex-wrap lg:w-[60vw] w-full relative  no-scrollbar">
          {certifications.map((each, i) => (
            <div
              className=" rounded-xl flex w-[90%] backdrop-blur-sm  shadow-lg justify-between border border-graytext px-2 m-2"
              key={i}
            >
              <div className="flex flex-col">
                <h1 className=" font-medium space-x-2 space-y-2 justify-around">
                  {each.title}
                </h1>
                <img className="h-8 w-16" src={each.by}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="pr-10  text-right w-full animate-pulse lg:text-base text-xs">
        Scroll to see more...
      </p>
    </div>
  );
};

export default AboutMe;
