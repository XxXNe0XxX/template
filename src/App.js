import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import ContentProvider from "./ContentContext";
import React from "react";

const App = () => {
  const content = [
    {
      index: 0,
      item: (
        <>
          <div className="flex flex-col">
            <h1 className=" tracking-tighter font-serif lg:text-5xl text-3xl w-full lg:leading-[4rem] line line-clamp-3  ">
              Tempor est culpa officia pariatur enim incididunt veniam
            </h1>
            <p className="py-4">Download CV</p>
          </div>
          <h2 className=" m-2 tracking-tighter lg:text-2xl text-sm w-full lg:leading-[2.4rem] line-clamp-6">
            Ullamco et enim cupidatat qui incididunt veniam consequat id
            laborum. Aliquip pariatur esse in culpa duis nostrud sit enim ut
            excepteur cillum est fugiat aliquip. Labore et consectetur anim anim
            dolor cupidatat eEsse sint incididunt ex mollit consectetur dolor ex
            est et proident aliquip amet velit duis. laboris ex occaecat
          </h2>
        </>
      ),
    },
    {
      index: 1,
      item: (
        <>
          <h1 className="lg:text-5xl font-serif text-3xl w-full lg:leading-[4rem] line line-clamp-3  ">
            Dolor velit officia Lorem magna laborum aliquip exercitation Lorem
            ut tempor veniam irure exercitation pariatur.
          </h1>

          <h2 className=" tracking-tighter lg:text-2xl text-sm w-full lg:leading-[2.4rem] line-clamp-6">
            Mollit nisi velit et excepteur velit sit. Voluptate Lorem id veniam
            eu officia irure esse esse amet. Minim cupidatat consequat dolore
            est minim velit commodo in qui. Duis ipsum labore exercitation
            adipisicing exercitation laborum sint elit ad tempor deserunt dolore
            proident dolore. Labore aliqua adipisicing ex exercitation consequat
            occaecat sint ipsum tempor. Adipisicing eu do ea commodo.
            Exercitation laboris consequat elit ut quis est officia.
          </h2>
        </>
      ),
    },
    {
      index: 2,
      item: (
        <>
          <h1 className=" tracking-tighter font-serif lg:text-5xl text-3xl w-full lg:leading-[4rem] line line-clamp-3  ">
            Non commodo ex do aute tempor id pariatur id et ut qui. Do culpa
            anim dese
          </h1>

          <h2 className=" tracking-tighter lg:text-2xl text-sm w-full lg:leading-[2.4rem] line-clamp-6">
            Ullamco et enim cupidatat qui incididunt veniam consequat id
            laborum. Aliquip pariatur esse in culpa duis nostrud sit enim ut
            excepteur cillum est fugiat
          </h2>
        </>
      ),
    },
  ];

  return (
    <div className="no-scrollbar  font-verdana">
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
