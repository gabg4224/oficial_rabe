import Image from "next/image";

export default function CardHome({ view }) {
  if (view === "major") {
    return (
      <div
        className={`md:row-span-2 md:col-span-2 sm:row-span-1 sm:col-span-1 relative group flex justify-center items-end h-full overflow-hidden  `}
      >
        <Image
          src={"https://zwinwrcelthkeoztdgcd.supabase.co/storage/v1/object/public/rabe-images/image1.png"}
          width={1280}
          height={1707}
          className="h-full group-hover:scale-110 transition-all aspect-auto duration-700 ease-out  opacity-0 "
          onLoadingComplete={(image)=> image.classList.remove("opacity-0")}
          alt="image"
        ></Image>
        <div className="absolute inset-0 z-10 flex justify-center items-end p-10 px-3 text-center">
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="font-bold">new year</h4>
              <p className="font-light">new design</p>
            </div>
            <button className="capitalize bg-black rounded-lg text-white text-sm p-2 px-5 ">
              shop latest
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (view !== "major") {
    return (
      <div
        className={`sm:row-span-1 sm:col-span-1 col-span-1 relative group flex justify-center items-end h-full overflow-hidden  `}
      >
        <Image
          src={"https://zwinwrcelthkeoztdgcd.supabase.co/storage/v1/object/public/rabe-images/image1.png"}
          width={1280}
          height={1707}
          className="h-full group-hover:scale-110  aspect-auto transition-all duration-700 ease-out opacity-0 "
          placeholder="blur"
          blurDataURL="https://zwinwrcelthkeoztdgcd.supabase.co/storage/v1/object/public/rabe-images/rabe-16x16.svg"
          alt="image"
          onLoadingComplete={(image)=> image.classList.remove("opacity-0")}
        ></Image>
        <div className="absolute inset-0 z-10 flex justify-center items-end p-10 px-3 text-center">
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="font-bold">new year</h4>
              <p className="font-light">new design</p>
            </div>
            <button className="capitalize bg-black rounded-lg text-white text-sm p-2 px-5 ">
              shop latest
            </button>
          </div>
        </div>
      </div>
    );
  }
}
