import React from "react";

const About = () => {
  const img =
    "https://static.vecteezy.com/system/resources/thumbnails/044/277/175/small_2x/young-man-standing-holding-laptop-and-looking-at-camera-on-isolated-transparent-background-free-png.png";
  return (
    <div id="About" className="flex justify-center py-5 items-center min-h-[90dvh] flex-wrap gap-3 border-b border-solid border-gray-800">
      <img
        src={img}
        alt="Nisha Kattel"
        className="bg-gray-900 object-cover min-w-[24rem] rounded-xl "
      />
      <div>
        <h1 className="font-extrabold text-xl md:text-3xl">About Me</h1>
        <h3 className="text-lg md:text-xl font-semibold text-gray-100">
          <span>Developer</span>{" "}
          <span className="text-pink-600"> &Designer</span>
        </h3>
        <p className="font-semibold text-gray-200 text-sm max-w-[30rem] text-justify mt-3">
          Hi, I'm <b> Nisha Kattel</b>, a passionate Web Developer dedicated to building
          responsive, user-friendly, and efficient web applications. I enjoy
          turning complex problems into clean, functional interfaces using
          modern technologies. With a solid foundation in both frontend and
          backend development, I strive to create seamless user experiences and
          maintain high code quality. Whether collaborating in a team or working
          independently, I bring strong attention to detail, continuous
          learning, and a drive to solve real-world problems through code.
        </p>
        <button className="rounded-full w-[9rem] py-1 bg-pink-600 hover:bg-pink-700 cursor-pointer mt-3 font-semibold">
          Lets Talk
        </button>
      </div>
    </div>
  );
};

export default About;
