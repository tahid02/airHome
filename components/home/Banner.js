import Image from "next/image";
const Banner = () => {
  return (
    <section className="relative h-[300px] sm:h-[400px]  lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://airbnb-pi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F0fm&w=1920&q=75"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2  w-full text-center">
        <p className="font-bold">Not sure where to go? Perfect</p>
        <button className="bg-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl active:scale-90 transition-all">
          I am flexible
        </button>
      </div>
    </section>
  );
};

export default Banner;
