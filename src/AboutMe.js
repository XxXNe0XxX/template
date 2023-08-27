const AboutMe = () => {
  const certifications = [
    {
      title: "Meta Back-End Developer Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FHCC3W8BTE5M",
      by: "Coursera",
    },
    {
      title: "Programming with JavaScript",
      link: "https://www.coursera.org/account/accomplishments/certificate/NM73MPVD9PHW",
      by: "Coursera",
    },
    {
      title: "The Full Stack",
      link: "https://www.coursera.org/account/accomplishments/certificate/KN5KPY4A3HWG",
      by: "Coursera",
    },
    {
      title: "API",
      link: "https://www.coursera.org/account/accomplishments/certificate/W82D9LKLLJDH",
      by: "Coursera",
    },
    {
      title: "Django Web Framework",
      link: "https://www.coursera.org/account/accomplishments/certificate/4WWNCH9B8LUJ",
      by: "Coursera",
    },
    {
      title: "Introduction to Back-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/ENREK52ZM86L",
      by: "Coursera",
    },
    {
      title: "Introduction to Databases for Back-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/PQJR8JDNYNAK",
      by: "Coursera",
    },
    {
      title: "Introduction to Front-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/M8VZWBPQXREY",
      by: "Coursera",
    },
    {
      title: "Programming in Python",
      link: "https://www.coursera.org/account/accomplishments/certificate/DF8G6LJRH7QQ",
      by: "Coursera",
    },
    {
      title: "Version Control",
      link: "https://www.coursera.org/account/accomplishments/certificate/4F8QGX6KKBTC",
      by: "Coursera",
    },
  ];
  return (
    <div className="flex w-[90vw] mx-auto h-full md:flex-row flex-col  md:justify-center justify-between items-center lg:space-y-0 space-y-2 lg:space-x-12 overflow-hidden">
      <div className="flex  w-[90%] lg:h-full h-52 shadow-lg  backdrop-blur-sm border-4 border-whitetext rounded-2xl">
        <p className="text-center self-center w-[50%] mx-auto">
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
      <div className="flex justify-center  overflow-y-scroll h-[40vh] flex-wrap lg:w-[60vw] w-full  no-scrollbar">
        {certifications.map((each, i) => (
          <div
            className="rounded-3xl flex flex-col w-[90%] backdrop-blur-sm  shadow-lg justify-between border border-graytext p-2 m-1"
            key={i}
          >
            <h1 className=" font-medium space-x-2 space-y-2 justify-around">
              {each.title}
            </h1>
            <p className="text-sm">{each.by}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
