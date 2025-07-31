import React from "react";

const Home = () => {
  const img = 'https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'
  return (
    <div id="Home" className="min-h-[85dvh] border-b border-solid border-gray-700 py-3">
      {/* Navbar  */}
      <nav className="flex fixed top-0 left-0 right-0 z-30 px-4 h-[4rem] bg-black justify-between items-center border-b pb-3 pt-2 border-solid border-gray-700">
        <a href="#" className="flex justify-between items-center select-none font-bold text-sm md:text-xl gap-1">
          <span>Nisha</span>
          <span className="text-pink-600">Kattel</span>
        </a>
        <div className="flex justify-center items-center text-xs md:text-[.94rem] gap-3 font-semibold">
          <a href="#Home" className=" hover:text-pink-600 transition-all duration-200">Home</a>
          <a href="#About" className=" hover:text-pink-600 transition-all duration-200">About</a>
          <a href="#services" className=" hover:text-pink-600 transition-all duration-200">Services</a>
          <a href="#Connect" className=" hover:text-pink-600 transition-all duration-200">Connect</a>
          <a href="#Footer" className=" hover:text-pink-600 transition-all duration-200">Contact</a>
        </div>
        <a href="https://wa.me/9779812345678" className="font-semibold hidden md:block w-[7rem] py-1 bg-pink-600 hover:bg-pink-700 rounded-xl text-center">Connect</a>
      </nav>

      {/* Main Home  */}

      <div className="flex gap-2 flex-col-reverse md:flex-row pt-12 ">
          <div className="flex h-full md:min-h-[70dvh] justify-center items-center md:items-start flex-col md:w-[50%] w-full ">
            <h3 className=" font-semibold text-gray-200">
              Hello, My name is
            </h3>
            <h1 className="font-extrabold text-3xl md:text-4xl flex gap-3">
              <span>Nisha</span><span className="text-pink-600">Kattel</span>
            </h1>
            <h2 className="font-lg italic font-bold text-gray-100">
                I am Web Developer
            </h2>

            <div className="w-[20rem] p-1 bg-white rounded-2xl flex justify-between items-center mt-2 text-gray-700 gap-2">
                NishaKattel67@gmail.com
                <a href="mailto:nishakatel@gmail.com" className="py-1 px-5 rounded-2xl bg-pink-600 text-gray-100 font-semibold tex-sm">Mail Me</a>
            </div>
          </div>
          <div className="flex h-fit items-center">
             <img className="w-96 object-cover rounded-full" src={img} alt="Nisha Kattel" />
          </div>
      </div>
      <div className="text-gray-300 text-sm text-center pt-6">
          This is the Demo Portfolio Created Me.
      </div>
    </div>
  );
};

export default Home;
