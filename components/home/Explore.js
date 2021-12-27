import { exploreNearby } from "./fakeData";
import Image from "next/image";
const Explore = () => {
  //   console.log({ exploreNearby });
  return (
    <section className="">
      <h2 className="font-bold text-3xl">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {exploreNearby?.map((data, index) => {
          return (
            <div
              className="flex items-center mt-10 space-x-4 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-in-out rounded-xl cursor-pointer"
              key={index}
            >
              <div className="relative h-16 w-16 ">
                <Image
                  // src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg"
                  src={data.img}
                  layout="fill"
                  className="rounded-md"
                />
                <Image src={data.img} layout="fill" className="rounded-md" />
              </div>
              <div className="flex flex-col ">
                <h2>{data.location}</h2>
                <h3 className="text-gray-500 whitespace-nowrap">
                  {data.distance}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export async function getStaticProps(params) {
  let exploreData = await fetch("").then((res) => res.json());
  return {
    props: {
      exploreData,
    },
  };
}
export default Explore;
