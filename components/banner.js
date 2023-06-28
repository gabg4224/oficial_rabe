import CardHome from "./cardHome";


export default function Banner() {
  return (
    <section className=" bg-[#f5f5f5]">
      <div className=" flex w-full  justify-center items-center sm:py-6 md:py-10 lg:py-20 sm:px-6 lg:px-14">
        <div className="grid w-full sm:grid-cols-1  sm:grid-rows-5 md:grid-cols-2 md:grid-rows-4  lg:grid-cols-4 lg:grid-rows-2  grid-cols-2 min-h-[66vh]  grid-rows-4  gap-4">
          <CardHome view={"major"}></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
        </div>
      </div>
    </section>
  );
}
