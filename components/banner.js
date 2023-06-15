import CardHome from "./cardHome";


export default function Banner() {
  return (
    <section className=" bg-[#f5f5f5]">
      <div className=" flex w-full justify-center items-center py-20 px-14">
        <div className="grid w-full lg:grid-cols-4 lg:grid-rows-2  grid-cols-2 min-h-[66vh]  grid-rows-4  gap-4">
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
