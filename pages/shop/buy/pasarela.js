import { useAppContext } from "@/components/contextWrapper";
import Image from "next/image";
import { getTotal } from "@/utils/utilsFunctions";
import { useStoreCheckOut } from "@/store/checkOut";
export default function Pasarela() {
  const { pasarela, checkOutPasarela, setCheckOutPasarela } =
    useStoreCheckOut();
  const checkOutHandler = (e) => {
    setCheckOutPasarela({
      ...checkOutPasarela,
      [e.target.name]: e.target.value,
    });
    console.log(checkOutPasarela);
  };
  const cart = useAppContext();

  const total = `Precio total: $${getTotal(cart.items)} USD`;

  console.log(total);
  const messageHandler = (e) => {

    e.preventDefault()

    if (


      checkOutPasarela.cedula.trim() === "" ||
      checkOutPasarela.numeroContacto.trim()  === "" ||
      checkOutPasarela.nombreYApellido.trim()  === "" 


    ) {
      alert("faltan campos por llenar");
      return
    }
    const message =
      "mensaje de bienvenida de whastapp, seguimos trabajando, aca esta su pedido:\n\n";
    const productos = cart.items
      .map((item, index) => {
        return `${item.title} - Color: ${item.colorName} - Talla: ${
          item.tallaActive.talla
        } - Cantidad: ${item.quantity}  - Precio unitario: $${
          item.price
        } - Sub total: $${item.price * item.quantity}`;
      })
      .join("\n");

    const valorTotal = `\n\n${total}\n`;
    const nombre = `\nNombre: ${checkOutPasarela.nombreYApellido}\n`;
    const cedula = `Cedula: ${checkOutPasarela.cedula}\n`;
    const contacto = `Contacto: ${checkOutPasarela.numeroContacto}\n`;
    const ubicacion = `Ubicacion: ${
      checkOutPasarela.tipoEnvio === "nacionales"
        ? checkOutPasarela.ubicacion
        : ""
    }\n`;
    const agencia = `Agencia: ${
      checkOutPasarela.tipoEnvio === "nacionales"
        ? checkOutPasarela.agenciaDeEnvios
        : ""
    }\n`;

    const moneda = `Moneda: ${checkOutPasarela.moneda}\n`;
    const metodoPago = `Metodo de pago: ${checkOutPasarela.metodoPago}\n`;
    const mensaje = `${message}${productos}${valorTotal}${nombre}${cedula}${contacto}${
      checkOutPasarela.tipoEnvio === "nacionales" ? ubicacion + agencia : ""
    }${moneda}${metodoPago}`;
    const encodedMessage = encodeURIComponent(mensaje).replace(/%0A/g, "%0A");

    const whatsappUrl =
      "https://api.whatsapp.com/send?phone=" +
      541158438872 +
      "&text=" +
      encodedMessage;
window.open(whatsappUrl, "_blank");
   
  };

  const handleEnvio = (value) => {
    setCheckOutPasarela({
      ...checkOutPasarela,
      tipoEnvio: value,
    });
  };
  return (
    <>
      <section className="w-full sm:h-screen md:h-[80vh]  lg:min-h-[80vh] max-h-max">
        <div className=" sm:w-full sm:px-2 lg:px-0 lg:w-3/4 h-full m-auto  grid grid-cols-2 grid-rows-2 bg-white">
          <div className="  sm:col-span-2 sm:row-span-2 lg:col-span-1 sm:max-h-full md:max-h-full lg:row-span-2  flex py-2 items-center  flex-col">
            <div className=" sm:w-full lg:w-9/12 h-5/6 bg-white border p-2 overflow-y-scroll mb-3">
              {cart.items.map((items, index) => {
                return (
                  <div key={index} className="w-full border-b-[1px] flex ">
                    <div className="py-2  flex grow">
                      <div>
                        <Image
                          src={items.images[0].imagen}
                          width={60}
                          height={60}
                          alt={items.images[0].imagen}
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
<form action="" onSubmit={messageHandler} className="w-full lg:col-span-1 lg:row-span-2  md:col-span-2 md:row-span-1 sm:col-span-2 sm:row-span-1 ">
          <section className="">
            <div className="w-full  py-2 text-sm">
              <ul className=" flex gap-3  w-full">
                {pasarela &&
                  pasarela.envios.map((item, index) => (
                    <li key={index} 
                      className={`${
                        checkOutPasarela.tipoEnvio == item
                          ? "bg-black text-white"
                          : "bg-gray-500 text-black"
                      } bg-black cursor-pointer  text-white rounded flex flex-wrap h-16 w-32 justify-center items-center`}
                      onClick={() => handleEnvio(item)}
                    >
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
                      onChange={checkOutHandler}
                      required
                    />
                  </div>

                  <div className="flex flex-col w-52">
                    <label htmlFor="">Num Contacto (*)</label>
                    <input
                      type="text"
                      name="numeroContacto"
                      id=""
                      className="border-b h-6 focus:outline-none"
                      onChange={checkOutHandler}
                    />
                  </div>
                </div>

                <div className=" flex flex-col w-80 pt-3">
                  <label htmlFor="">Nombre y apellido (*)</label>
                  <input
                    type="text"
                    name="nombreYApellido"
                    id=""
                    className="w-full border-b h-6 focus:outline-none"
                    onChange={checkOutHandler}
                  />
                </div>
              </div>

              {/*Ubicacion y agencia*/}
              <div className="w-full flex justify-between text-xs pt-3">
                <div className=" flex w-full  gap-4 ">
                  <div className=" w-60 flex flex-col">
                    <label htmlFor="">Ubicacion</label>
                    <input
                      type="text"
                      name="ubicacion"
                      id=""
                      className="w-full border-b h-6 focus:outline-none disabled:bg-gray-200 "
                      onChange={checkOutHandler}
                      disabled={
                        checkOutPasarela.tipoEnvio === "nacionales"
                          ? false
                          : true
                      }
                    />
                  </div>

                  <div className="flex  flex-col w-40">
                    <label htmlFor="">Agencia de envios</label>
                    <select
                      name="agenciaDeEnvios"
                      id=""
                      className="w-full border-b h-6 focus:outline-none  disabled:bg-gray-200 "
                      onChange={checkOutHandler}
                      disabled={
                        checkOutPasarela.tipoEnvio === "nacionales"
                          ? false
                          : true
                      }
                    >
                      <option value="MRW">
                        {" "}
                        MRW
                      </option>
                      <option value="Zoom">Zoom</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            {/* moneda y metodo de pago*/}
            <p className=" text-xs font-bold sm:py-2 md:py-0">
              Seleccione un metodo de pago(*)
            </p>
            <div className=" flex gap-4 mb-6 ">
              <section className="sm:w-1/2 md:w-auto">
                <div className="w-full py-2 ">
                  <select
                    className=" cursor-pointer gap-3 text-sm bg-black  text-white rounded flex flex-wrap h-10 lg:w-20 sm:w-full  justify-center items-center capitalize"
                    name="moneda"
                    onChange={checkOutHandler}
                  >
                    {pasarela &&
                      Object.keys(pasarela.metodosDePago).map((item, index) => (
                        <option key={index} className="bg-black  text-white rounded flex flex-wrap h-16 w-32 justify-center items-center capitalize text-center">
                          {item}
                        </option>
                      ))}
                  </select>
                </div>
              </section>

              <section className="sm:w-1/2 md:w-auto">
                <div className="w-full  py-2">
                  <select
                    className="gap-3 cursor-pointer text-sm bg-black  text-white rounded flex flex-wrap h-10 lg:w-20 sm:w-full justify-center items-center capitalize"
                    name="metodoPago"
                    onChange={checkOutHandler}
                  >
                    {pasarela &&
                      Object.values(pasarela.metodosDePago)[
                        checkOutPasarela.moneda === "dolares" ? 0 : 1
                      ].map((item, index) => {
                        return (
                          <option  key={index} className="bg-black  text-white rounded flex flex-wrap h-16 w-32 justify-center items-center capitalize  text-center">
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
                {/* cedula, numero de contacto y nombre y apellido*/}

                {/* cedula, numero de contacto y nombre y apellido*/}
              </section>
            </div>

          <div className="flex sm:justify-center md:justify-normal mb-4">
          <button
              className="w-60 py-2 bg-black text-white  "
              onClick={messageHandler}
            >
              enviar a whatsapp
            </button>

          </div>
          </section>
          </form>
        </div>
      </section>
    </>
  );
}
