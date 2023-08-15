import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className=" relative overflow-scroll h-screen snap-y snap-mandatory">
      <div className="absolute w-full ">
        <Navbar></Navbar>
      </div>
      <div id="header" className=" snap-start ">
        <Header></Header>
      </div>
      <div id="main" className="snap-start   ">
        <Main></Main>
      </div>
      <div id="footer" className=" snap-start  ">
        <Footer></Footer>
      </div>
      <div className="snap-start "></div>
    </div>
  );
};

export default App;
