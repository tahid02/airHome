import Image from "next/image";
import React from "react";
import { liveAnywhere } from "./fakeData";
const LiveAnywhere = () => {
  return (
    <section className="">
      <h1 className="font-bold text-3xl pb-5"> Live Anywhere </h1>
      <div className="flex flex-row flex-nowrap overflow-x-scroll overflow-y-hidden scrollbar-hide p-4 -m-4 space-x-4 ">
        {liveAnywhere?.map((item, index) => {
          return (
            <div
              className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
              key={index}
            >
              <div className="relative w-80 h-80">
                <Image
                  // src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg"
                  src={item.img}
                  className="rounded-xl"
                  layout="fill"
                />
              </div>
              <p className=" pt-4 text-2xl">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LiveAnywhere;
