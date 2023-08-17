import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Projects from "./Projects";
import BlogPosts from "./BlogPosts";

const App = () => {
  return (
    <div className="no-scrollbar relative bg-gradient-from-br   from-black to-gray-800 overflow-scroll h-screen snap-y snap-mandatory">
      <div id="header" className=" snap-start">
        <Header></Header>
        <hr className="h-1 absolute mx-auto rounded-md w-full bg-gray-400 " />
      </div>
      <div id="main" className="snap-start">
        <Main></Main>
        {/* <hr className="h-1 absolute mx-auto bg-gray-400 w-full rouded-md" /> */}
      </div>
      <div id="projects" className="snap-start">
        <Projects></Projects>
        {/* <hr className="h-1 absolute mx-auto bg-gray-400 w-full rouded-md" /> */}
      </div>
      <div id="blogPosts" className="snap-start">
        <BlogPosts></BlogPosts>
        {/* <hr className="h-1 absolute mx-auto bg-gray-400 w-full rouded-md" /> */}
      </div>
      <div id="footer" className=" snap-start">
        <Footer></Footer>
      </div>
      <div className="snap-start "></div>
    </div>
  );
};

export default App;
