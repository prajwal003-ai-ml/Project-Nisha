import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="p-2 md:p-4 bg-black text-white min-h-[100dvh]">
      <Home />
      <About />
      <Service />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
