import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500] xl:h-[600] 2xl:h-[700]">
      <Image src="/images/studynature.jpg" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
          <p className="font-bold text-lg sm:text-2xl md:text-4xl text-gray-900">The Best Way To Learn Is In Your Language</p>
          <button className="text-blue-500 bg-white px-10 py-4 rounded-md
           shadow-lg font-bold my-3 hover:shadow-xl transition duration-2000 active:scale-90"
           >Start Learning</button>
      </div>
    </div>
  );
}

export default Banner;
