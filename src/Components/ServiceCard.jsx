import React from "react";
import { IoIosMenu } from "react-icons/io";
<IoIosMenu />;

const ServiceCard = () => {
  return (
    <div className="flex justify-center items-center flex-col p-3 bg-gray-900 rounded-xl max-w-[22rem] pb-6">
      <IoIosMenu size={"2.8rem"} className="text-pink-600 font-bold  text-shadow-pink-600" />
      <h3 className="text-lg md:text-xl font-bold text-gray-100">
        Web Development
      </h3>
      <p className="text-sm text-gray-200 text-center mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore
        cupiditate rem perspiciatis modi, saepe officiis est non rerum,
        repellendus iusto. Fugiat est libero labore tenetur cum inventore,
        voluptatem nam, repudiandae, assumenda harum fugit ratione asperiores
        maxime non. Libero deleniti, maxime inventore consequuntur,
        necessitatibus perspiciatis explicabo iure eos, corrupti harum labore at
        deserunt architecto neque laboriosam! Necessitatibus consequatur
        similique dolores?
      </p>

      <button className="w-[11rem] bg-pink-600 cursor-pointer hover:bg-pink-700 rounded-2xl mt-4 p-2 font-semibold text-sm">
        Know More
      </button>

    </div>
  );
};

export default ServiceCard;
