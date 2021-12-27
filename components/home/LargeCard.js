import React from "react";
import Image from "next/image";
const LargeCard = () => {
  return (
    <section className="relative">
      <div className="relative min-w-[300px] h-96">
        {" "}
        <Image
          src="https://airbnb-pi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F4cj&w=1920&q=75"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute top-1/4 left-1/4">
        <h3 className="text-4xl">The Greatest Outdoors</h3>
        <p className="my-3 font-bold"> Wishlists curated by Airbnb.</p>
        <button className="text-sm text-white bg-gray-800 rounded-md p-2">
          {" "}
          Get Inspired
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
