import { useAppContext } from "@/components/contextWrapper";
import Image from "next/image";
import { getTotal } from "@/utils/utilsFunctions";
import { useStoreCheckOut } from "@/store/checkOut";
export default function Pasarela() {
  const { pasarela, checkOutPasarela, setCheckOutPasarela } =
    useStoreCheckOut();
  console.log(
    Object.values(pasarela.metodosDePago).map((item) => console.log(item))
  );
  const cart = useAppContext();
  return (
    <>
      <section className="w-full h-[80vh] min-h-[80vh] max-h-max">
        <div className="w-3/4 h-full m-auto  grid grid-cols-2 grid-rows-2 bg-white">
          <div className=" col-span-1 row-span-2  flex justify-center items-center  flex-col">
            <div className="w-9/12 h-5/6 bg-white border p-2 overflow-y-scroll mb-3">
              {cart.items.map((items) => {
                console.log(items);
                return (
                  <div key={items.id} className="w-full border-b-[1px] flex ">
                    <div className="py-2  flex grow">
                      <div>
                        <Image
                          src={items.images[0].imagen}
                          width={60}
                          height={60}
                        ></Image>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <p className="uppercase">{items.title}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <p className="text-sm text-gray-500">
                            Talla: {items.tallaActive.talla}
                          </p>
                          <p className="text-sm text-gray-500  uppercase">
                            {items.colorName}
                          </p>
                        </div>

                        <div className=" flex items-center gap-2">
                          <p className="text-sm text-gray-500">
                            Precio: {items.price}
                          </p>
                          <p className="text-sm text-gray-500">
                            Cantidad: {items.quantity}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow flex justify-end items-center">
                      <p>${(items.price * items.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}

              <div className=" w-full flex justify-center mt-4"></div>
            </div>
            <div className="  bg-black  py-4 sm:w-full lg:w-48 flex justify-center ">
              <p
                href={"/shop/buy/pasarela"}
                className="text-white  uppercase  font-medium text-sm  text-center "
              >
                Total • ${getTotal()}
              </p>
            </div>
          </div>

          <section className="col-span-1 row-span-2">
            <div className="w-full  py-2 text-sm">
              <ul className=" flex gap-3 ">
                {pasarela &&
                  pasarela.envios.map((item, index) => (
                    <li className="bg-black  text-white rounded flex flex-wrap h-16 w-32 justify-center items-center">
                      <p className="text-center capitalize">{item}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <section className="py-3">
              {/* cedula, numero de contacto y nombre y apellido*/}
              <div className="w-full text-xs">
                <div className=" flex w-full  gap-4">
                  <div className=" flex w-40 flex-col">
                    <label htmlFor="">C.I. (*)</label>
                    <input
                      type="text"
                      name="cedula"
                      id=""
                      className="border-b h-6 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-52">
                    <label htmlFor="">Num Contacto (*)</label>
                    <input
                      type="text"
                      name="cedula"
                      id=""
                      className="border-b h-6 focus:outline-none"
                    />
                  </div>
                </div>

                <div className=" flex flex-col w-80 pt-3">
                  <label htmlFor="">Nombre y apellido (*)</label>
                  <input
                    type="text"
                    name="nombre"
                    id=""
                    className="w-full border-b h-6 focus:outline-none"
                  />
                </div>
              </div>

              {/*Ubicacion y agencia*/}
              <div className="w-full flex justify-between text-xs pt-3">
                <div className=" flex w-full  gap-4 ">
                  <div className=" w-60 flex flex-col">
                    <label htmlFor="">Ubicacion (*)</label>
                    <input
                      type="text"
                      name="cedula"
                      id=""
                      className="w-full border-b h-6 focus:outline-none"
                    />
                  </div>

                  <div className="flex  flex-col w-40">
                    <label htmlFor="">Agencia de envios (*)</label>
                    <select
                      name="Agencia"
                      id=""
                      className="w-full border-b h-6 focus:outline-none"
                    >
                      <option value="MRW" selected>
                        {" "}
                        MRW
                      </option>
                      <option value="Zoom">Zoom</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="w-full py-2 ">
                <ul className=" flex  gap-3 text-sm">
                  {pasarela &&
                    Object.keys(pasarela.metodosDePago).map((item, index) => (
                      <li className="bg-black  text-white rounded flex flex-wrap h-16 w-32 justify-center items-center">
                        <p className="text-center capitalize ">{item}</p>
                      </li>
                    ))}
                </ul>
              </div>
              {/* cedula, numero de contacto y nombre y apellido*/}

              {/* cedula, numero de contacto y nombre y apellido*/}
            </section>

            <section>
              <div className="w-full  py-2">
                <ul className=" flex  gap-3 text-sm ">
                  {pasarela &&
                    Object.values(pasarela.metodosDePago)[0].map((item) => {
                      return (
                        <li className="bg-black  text-white rounded flex flex-wrap h-16 w-32 justify-center items-center">
                        <p className="text-center capitalize ">{item}</p>
                      </li>
                      );
                    })}
                </ul>
              </div>
              {/* cedula, numero de contacto y nombre y apellido*/}

              {/* cedula, numero de contacto y nombre y apellido*/}
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
