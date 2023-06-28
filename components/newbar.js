import Link from "next/link";
import Image from "next/image";
import rabe from "../public/rabe-negro.svg";
import { routes } from "@/pages/api/rutesApi";
import { useAppContext } from "./contextWrapper";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { v4 as uuidv4 } from "uuid";

export const NewBar = () => {
  const cart = useAppContext();

  return (
    <>
      {/* Contenedor principal de la barra de navegación */}
      <div className="fixed w-full z-30 top-0">
        <div className="relative bg-white z-20">
          {/* Contenedor interno para alinear y ajustar el contenido */}
          <div className="mx-auto max-w-7xl px-6">
            {/* Contenedor de la barra de navegación */}
            <div className="flex items-center justify-between border-b-2 border-gray-100 lg:justify-start">
              {/* Icono para mostrar/ocultar el menú en pantallas pequeñas */}
              <div className="flex items-center lg:hidden">
                <Bars3Icon
                  className="h-6 w-6"
                  onClick={() => cart.handlerMenu()}
                />
              </div>

              {/* Lista de enlaces de navegación */}
              <div className="justify-start lg:w-0 lg:flex-1 hidden lg:flex">
                <ul className="flex w-auto gap-4">
                  {/* Iterar sobre las rutas y generar los elementos de la lista */}
                  {routes.map((route, index) => (
                    <li
                      className={`flex relative items-center text-base group py-6`}
                      key={uuidv4()}
                    >
                      {/* Enlace utilizando la ruta y etiqueta proporcionadas */}
                      <Link href={route.route} className="font-medium">
                        <span> {route.label}</span>
                      </Link>

                      {/* Mostrar icono de despliegue si hay un submenú */}
                      {route.subMenu && (
                        <ChevronDownIcon className="h-5 ml-1" />
                      )}

                      {/* Mostrar submenú si existe */}
                      {route.subMenu && (
                        <div
                          className={`bg-white absolute w-40    opacity-0 group-hover:opacity-100  top-12 group-hover:top-16  border left-5 box-border shadow-xl overflow-hidden rounded-md transition-all ease-in-out duration-400`}
                        >
                          {/* Lista de elementos del submenú */}
                          <ul className="flex flex-col items-center h-full">
                            {/* Iterar sobre los elementos del submenú y generar los enlaces */}
                            {route.subMenuItems.map((subRoute, index) => (
                              <Link
                                key={uuidv4()}
                                href={subRoute.route}
                                className="py-2 flex-grow  w-full justify-center flex items-center  hover:bg-slate-500"
                              >
                                {subRoute.label}
                              </Link>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logotipo de la barra de navegación */}
              <div className="">
                <Link href={"/"}>
                  <Image src={rabe} width={130} height={50} alt="rabe" />
                </Link>
              </div>

              {/* Botón para abrir el carrito */}
              <div className="items-center justify-end md:flex lg:flex-1 py-2 lg:w-0">
                <button
                  onClick={cart.openCart}
                  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {/* Icono de carrito de compras */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Menú desplegable en pantalla completa */}
              <div
                className={`${
                  !cart.isMenuOpen && "hidden"
                } bg-slate-500/50 min-h-screen fixed w-full top-0 left-0 right-0 backdrop-blur-sm`}
              ></div>
              <div
                className={`${
                  cart.isMenuOpen ? "w-3/4" : "w-0"
                } bg-white min-h-screen w-0 fixed overflow-scroll top-0 left-0 transition-all duration-300`}
              >
                <div className={`${!cart.isMenuOpen && "hidden"} pt-3`}>
                  {/* Botón para cerrar el menú desplegable */}
                  <button
                    className="ml-4 text-gray-400"
                    onClick={() => cart.handlerMenu()}
                  >
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                  <div className="mx-auto px-3 mt-1">
                    {/* Lista de enlaces del menú desplegable */}
                    <ul className="flex flex-col">
                      {/* Iterar sobre las rutas y generar los elementos de la lista */}
                      {routes.map((route, index) => (
                        <li
                          key={uuidv4()}
                          className="flex flex-col py-3 border-b-2"
                        >
                          <div className="flex justify-between">
                            {/* Enlace utilizando la ruta y etiqueta proporcionadas */}
                            <Link href={route.route} className="uppercase">
                              {route.label}
                            </Link>

                            {/* Mostrar icono de despliegue si hay un submenú */}
                            {route.subMenu && (
                              <ChevronDownIcon
                                className={`${
                                  cart.verifyer(route.label)
                                    ? "rotate-180"
                                    : "rotate-0"
                                } w-6 h-6 transition-all duration-300`}
                                onClick={() =>
                                  cart.handlerOpenSubmenu(route.label)
                                }
                              />
                            )}
                          </div>

                          {/* Mostrar submenú si existe */}
                          {route.subMenu && (
                            <ul className="overflow-hidden">
                              {/* Iterar sobre los elementos del submenú y generar los enlaces */}
                              {route.subMenuItems.map((subItems, index) => (
                                <div
                                  key={uuidv4()}
                                  className={`${
                                    cart.verifyer(route.label) ? "h-11" : "h-0"
                                  } flex flex-col px-5 text-gray-600 h-0 transition-all duration-300`}
                                >
                                  <Link
                                    onClick={cart.handlerMenu}
                                    href={subItems.route}
                                    className="py-3"
                                  >
                                    {subItems.label}
                                  </Link>
                                </div>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:h-12 lg:h-20"></div>
    </>
  );
};
