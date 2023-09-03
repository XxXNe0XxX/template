const AboutMe = () => {
  // const languages = [
  //   {
  //     link: "/images/HtmlLogo.png",
  //     alt: "HtmlLogo",
  //   },
  //   {
  //     link: "/images/CssLogo.png",
  //     alt: "CssLogo",
  //   },
  //   {
  //     link: "/images/JSLogo.png",
  //     alt: "JSLogo",
  //   },
  //   {
  //     link: "/images/PythonLogo.png",
  //     alt: "PythonLogo",
  //   },
  //   {
  //     link: "/images/JavaLogo.png",
  //     alt: "JavaLogo",
  //   },
  // ];
  // const technologies = [
  //   {
  //     link: "/images/DjangoLogo.png",
  //     alt: "DjangoLogo",
  //   },
  //   {
  //     link: "/images/DjangoRFLogo.png",
  //     alt: "DjangoRFLogo",
  //   },
  //   {
  //     link: "/images/GitLogo.png",
  //     alt: "GitLogo",
  //   },

  //   {
  //     link: "/images/ReactLogo.png",
  //     alt: "ReactLogo",
  //   },
  // ];

  const certifications = [
    {
      title: "Meta Back-End Developer Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FHCC3W8BTE5M",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "Programming with JavaScript",
      link: "https://www.coursera.org/account/accomplishments/certificate/NM73MPVD9PHW",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "The Full Stack",
      link: "https://www.coursera.org/account/accomplishments/certificate/KN5KPY4A3HWG",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "API",
      link: "https://www.coursera.org/account/accomplishments/certificate/W82D9LKLLJDH",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "Django Web Framework",
      link: "https://www.coursera.org/account/accomplishments/certificate/4WWNCH9B8LUJ",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "Introduction to Back-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/ENREK52ZM86L",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "Introduction to Databases for Back-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/PQJR8JDNYNAK",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "Introduction to Front-End Development",
      link: "https://www.coursera.org/account/accomplishments/certificate/M8VZWBPQXREY",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "Programming in Python",
      link: "https://www.coursera.org/account/accomplishments/certificate/DF8G6LJRH7QQ",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
    {
      title: "Version Control",
      link: "https://www.coursera.org/account/accomplishments/certificate/4F8QGX6KKBTC",
      by: "/images/coursera.svg",
      icons: ["images/HtmlLogo.png"],
    },
  ];
  return (
    <div className="w-[90vw] relative mx-auto">
      <div className="flex  h-[70vh] md:flex-row flex-col  md:justify-center justify-between items-center lg:space-y-0 space-y-8  overflow-hidden ">
        <div className="flex  content-center h-[50%]">
          <div className="flex flex-col w-[50%] justify-center space-y-4  items-center ">
            <div className="flex  md:h-40 md:w-40 w-28 h-28 rounded-full  overflow-hidden content-center items-center justify-center object-cover ">
              <img
                className=""
                src="images/Pepi.jpg"
                alt="my profile pic"
              ></img>
            </div>
            <div className="space-y-2">
              <p className="md:text-lg text-md font-semibold">
                Julio Cesar Siles
              </p>
              <div className="w-[50%] m-auto h-1 rounded-xl bg-secondary "></div>
            </div>
            <p className="text-center md:text-base text-sm p-2 w-[80%] self-center mx-auto">
              Software Developer | Computer Scientist | Data Scientist |
              Back-End Developer
            </p>
          </div>
          <div className="h-[90%] w-[1px] bg-graytext m-auto "></div>
          <div className="w-[50%] h-full m-auto flex flex-col content-center justify-center ">
            <p className="md:p-8 p-2  self-center overflow-scroll no-scrollbar lg:text-base text-sm">
              Mollit ad consequat sunt eiusmod elit ad ut irure magna. Labore
              anim exercitation veniam cupidatat ipsum. Ipsum eu occaecat cillum
              nostrud sunt duis veniam magna officia. Voluptate laborum ullamco
              eu velit aliquip in laboris cupidatat id adipisicing velit dolor
              labore. Magna incididunt elit nostrud reprehenderit sint aute
              laborum reprehenderit cillum.
            </p>

            <h1 className="  font-bold px-8 md:text-base text-sm w-full text-left bottom-0">
              <a href="asd " target="asd">
                Learn More...
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center overflow-y-scroll snap-y snap-mandatory h-[50%] flex-wrap  w-full relative  no-scrollbar">
          {certifications.map((each, i) => (
            <div
              className="snap-start rounded-xl flex w-full backdrop-blur-sm   shadow-lg justify-between border border-graytext px-2 m-2"
              key={i}
            >
              <div className="flex flex-col content-center justify-center space-y-4 p-2 w-full">
                <div className="flex justify-center">
                  {each.icons.map((item) => (
                    <img className="h-8 w-8" alt="no1" src={item}></img>
                  ))}
                </div>

                <h1 className=" font-medium space-y-2 text-center w-full">
                  {each.title}
                  <a href="asd" target="asd">
                    <h1 className="font-bold  p-1 md:text-sm text-xs">
                      Learn More...
                    </h1>
                  </a>
                </h1>
                <img className="h-8 w-16" alt="no2" src={each.by}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className=" absolute md:bottom-32 sm:block hidden  right-0 text-right w-full animate-pulse lg:text-base text-xs">
        Scroll to see more...
      </p>
    </div>
  );
};

export default AboutMe;
