import Image from "next/image";

export default function CardHome({ index,src }) {
  return (
    <div
      className={`${
        index == 0
          ? "md:row-span-2 md:col-span-2 sm:row-span-1 sm:col-span-1 relative group flex justify-center items-end h-full overflow-hidden  "
          : "sm:row-span-1 sm:col-span-1 col-span-1 relative group flex justify-center items-end h-full overflow-hidden "
      }  rounded-md`}
    >
      <Image
        src={
          src
        }
        width={1280}
        height={1707}
        className="h-full group-hover:scale-110 transition-all aspect-auto duration-700 ease-out  opacity-0 "
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        alt="image"
      ></Image>
      <div className="absolute inset-0 z-10 flex justify-center items-end p-10 px-3 text-center">
        <div className="flex flex-col gap-3">
        
          <button className="uppercase bg-[#ff2040] rounded-lg text-white text-sm p-2 px-5 ">
          Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );

}
