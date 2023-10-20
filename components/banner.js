import CardHome from "./cardHome";

export default function Banner() {
const endpoints = [
  "https://zwinwrcelthkeoztdgcd.supabase.co/storage/v1/object/public/rabe-images/portada/portada-web.webp?t=2023-10-20T17%3A56%3A05.311Z",
  "https://zwinwrcelthkeoztdgcd.supabase.co/storage/v1/object/public/rabe-images/portada/empaques-piso-2.webp",
  "https://zwinwrcelthkeoztdgcd.supabase.co/storage/v1/object/public/rabe-images/portada/cielo-producto-dragonball.webp",
  "https://zwinwrcelthkeoztdgcd.supabase.co/storage/v1/object/public/rabe-images/portada/suetere-portada.webp?t=2023-10-20T17%3A57%3A18.760Z",
  "https://zwinwrcelthkeoztdgcd.supabase.co/storage/v1/object/public/rabe-images/portada/televisor-con-todas-la-franelas.webp?t=2023-10-20T17%3A57%3A26.989Z"
]
  return (
    <>
  <section className=" bg-[#f5f5f5] ">
        <div className=" w-full lg:h-[750px] h-full sm:py-6 md:py-10 lg:py-12 sm:px-6 lg:px-14 ">
          <div className="grid h-full mx-auto  w-full max-w-[1200px] gap-4 sm:grid-cols-1  sm:grid-rows-5 md:grid-cols-2 md:grid-rows-4  lg:grid-cols-4 lg:grid-rows-2 ">
            {endpoints?.map((item, index) => (
              <CardHome
                key={crypto.randomUUID}
                src={item}
                index={index}
              ></CardHome>
            ))}
          </div>
        </div>
      </section>

     {/*  <section className=" bg-[#f5f5f5]">
        <div className=" flex w-full  justify-center items-center sm:py-6 md:py-10 lg:py-20 sm:px-6 lg:px-14">
          <div className="grid w-full max-w-5xlxl sm:grid-cols-1  sm:grid-rows-5 md:grid-cols-2 md:grid-rows-4  lg:grid-cols-4 lg:grid-rows-2  grid-cols-2 min-h-[66vh]  grid-rows-4  gap-4">
            <CardHome view={"major"}></CardHome>
            <CardHome></CardHome>
            <CardHome></CardHome>
            <CardHome></CardHome>
            <CardHome></CardHome>
          </div>
        </div>
      </section> */}
    </>
  );
}

