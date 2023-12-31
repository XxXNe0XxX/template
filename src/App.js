import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import ContentProvider from "./ContentContext";
import React from "react";
import BlogPosts from "./BlogPosts";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const App = () => {
  const content = [
    {
      index: 0,
      item: (
        <div className="flex p-4 space-y-10 lg:space-x-20 space-x-0 lg:flex-row flex-col justify-between items-start">
          <div className="flex space-y-4 flex-col ">
            <h1 className=" tracking-tighter font-serif lg:text-8xl  text-4xl w-full  line-clamp-3  ">
              Tempor est culpa officia pariatur enim incididunt veniam
            </h1>
            <p className="">Download CV</p>
          </div>
          <h2 className=" m-2 tracking-tighter lg:text-2xl text-md w-full lg:leading-[2.4rem] line-clamp-6">
            Ullamco et enim cupidatat qui incididunt veniam consequat id
            laborum. Aliquip pariatur esse in culpa duis nostrud sit enim ut
            excepteur cillum est fugiat aliquip. Labore et consectetur anim anim
            dolor cupidatat eEsse sint incididunt ex mollit consectetur dolor ex
            est et proident aliquip amet velit duis. laboris ex occaecat
          </h2>
        </div>
      ),
    },
    {
      index: 1,
      item: <Projects></Projects>,
    },
    {
      index: 2,
      item: <AboutMe></AboutMe>,
    },
    {
      index: 3,
      item: <BlogPosts></BlogPosts>,
    },
  ];

  return (
    <div className="tracking-tighter inner-background overflow-hidden font-verdana">
      <div className="flex h-screen  flex-col z-10 justify-between items-center  content-center relative ">
        <div className="absolute h-full w-full background-animate -z-10"></div>
        <ContentProvider>
          <Navbar></Navbar>
          <Content data={content}></Content>
          <Footer dataLength={content.length}></Footer>
        </ContentProvider>
      </div>
    </div>
  );
};

export default App;
