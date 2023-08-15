const Header = () => {
  return (
    <div className="bg-black h-screen p-20  ">
      <h1 className="shadow-3xl shadow-white text-white  text-left h-fit font-semibold text-9xl">
        Hi I'm Julio
      </h1>
      <div className="flex items-center justify-start space-x-2">
        <div className="w-8 h-8 hover:shadow-2xl animate-bounce hover:shadow-yellow-400 rounded-full self-end bg-yellow-400"></div>
        <p className="text-6xl text-gray-600 self-center ">
          SOFTWARE DEVELOPER
        </p>
      </div>

      <div className="flex h-full space-x-6 items-center justify-end w-full">
        <a href="#main">
          <p className="px-3 py-2 text-xl text-white hover:px-4 hover:text-black font-semibold hover:bg-yellow-400 hover:border-gray-600 transition-all rounded-2xl border-2 border-white">
            SKILLSET
          </p>
        </a>
        <a href="#footer">
          <p className="px-3 py-2 text-xl text-white hover:px-4 hover:text-black font-semibold hover:bg-yellow-400 hover:border-gray-600 transition-all rounded-2xl border-2 border-white">
            CONTACT
          </p>
        </a>
      </div>
    </div>
  );
};

export default Header;
