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
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl  px-6">
          <div className=" flex items-center justify-between  border-b-2 border-gray-100 md:justify-start">
            <div className="md:hidden">
              <Bars3Icon
                className="h-6 w-6"
                onClick={() => cart.handlerMenu()}
              />
            </div>

            <div className=" justify-start lg:w-0 lg:flex-1 hidden md:flex">
              <ul className="flex w-auto gap-4 ">
                {routes.map((route, index) => (
                  <li
                    className={`flex relative items-center text-base group py-6`}
                    key={uuidv4()}
                  >
                    <Link href={route.route} className="font-medium">
                      <span> {route.label}</span>
                    </Link>

                    {route.subMenu && <ChevronDownIcon className="h-5 ml-1" />}

                    {route.subMenu && (
                      <div
                        className={` bg-white absolute w-0 h-0 group-hover:w-40 group-hover:h-auto hover:w-40 hover:h-auto top-16 border-transparent  left-5 box-border  shadow-xl rounded-md  overflow-hidden transition-all ease-in-out duration-300`}
                      >
                        <ul className="flex flex-col items-center">
                          {route.subMenuItems.map((subRoute, index) => (
                            <Link
                              key={uuidv4()}
                              href={subRoute.route}
                              className="py-2 hover:bg-slate-500"
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

            <div className="">
              <Link href={"/"}>
                <Image src={rabe} width={130} height={50} alt="rabe" />
              </Link>
            </div>

            <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
              <button
                onClick={cart.openCart}
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </button>
            </div>
            {/*debajo va el menu responsive */}
            <div
              className={`${
                !cart.isMenuOpen && "hidden"
              }  bg-slate-500/50 min-h-screen fixed w-full top-0 left-0 right-0 backdrop-blur-sm `}
            ></div>
            <div
              className={`${
                cart.isMenuOpen ? "w-3/4" : "w-0"
              }  bg-white min-h-screen w-0 fixed overflow-scroll  top-0 left-0 transition-all duration-300`}
            >
              <div className={`${!cart.isMenuOpen && "hidden"} pt-3`}>
                <button
                  className="ml-4 text-gray-400"
                  onClick={() => cart.handlerMenu()}
                >
                  <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                </button>
                <div className="mx-auto px-3 mt-1 ">
                  <ul className="flex flex-col">
                    {routes.map((route, index) => (
                      <li
                        key={uuidv4()}
                        className=" flex flex-col py-3   border-b-2 "
                      >
                        <div className=" flex justify-between ">
                          <Link href={route.route} className="uppercase">
                            {" "}
                            {route.label}
                          </Link>

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

                        {route.subMenu && (
                          <ul className="overflow-hidden">
                            {route.subMenuItems.map((subItems, index) => (
                              <div
                                key={uuidv4()}
                                className={`${
                                  cart.verifyer(route.label) ? "h-11" : "h-0"
                                } flex flex-col px-5 text-gray-600 h-0 transition-all duration-300`}
                              >
                                <Link href={subItems.route} className="py-3">
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
    </>
  );
};
