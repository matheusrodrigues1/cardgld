import Image from "next/image";
import React from "react";
import Goldcard from "../assets/goldcard.jpeg";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-white items-center flex justify-center">
      <Image
        src={Goldcard}
        className="mt-[-4rem] w-[18rem] h-[25rem]"
        alt="img"
      />
    </div>
  );
};

export default HomePage;
