import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import Projects from "./Projects";
import BlogPosts from "./BlogPosts";

const App = () => {
  return (
    <div className=" relative bg-gradient-to-b from-gray-200 to-white overflow-scroll h-screen snap-y snap-mandatory">
      <div className="absolute w-full ">
        <Navbar></Navbar>
      </div>
      <div id="header" className=" snap-start">
        <Header></Header>
        <hr className="h-1 absolute mx-auto rounded-md w-full bg-gray-400 " />
      </div>
      <div id="main" className="snap-start">
        <Main></Main>
        <hr className="h-1 absolute mx-auto bg-gray-400 w-full rouded-md" />
      </div>
      <div div id="main" className="snap-start">
        <Projects></Projects>
      </div>
      <div div id="main" className="snap-start">
        <BlogPosts></BlogPosts>
      </div>
      <div id="footer" className=" snap-start">
        <Footer></Footer>
      </div>
      <div className="snap-start "></div>
    </div>
  );
};

export default App;
