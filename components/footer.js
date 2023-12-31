import logoRabe from "../public/rabe-negro.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font flex w-full items-center justify-center border-gray-100 border-t-2">
      <div className=" px-5 py-2 flex items-center justify-center  sm:flex-row  md:w-11/12 sm:w-full">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {<Image src={logoRabe} alt="logo" className="w-24 h-10" />}
        
        </a>
        <div className="flex items-center justify-between min-w-fit  ">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 rabe —
          </p>
          <a
            href="https://www.instagram.com/rabeoficial/?hl=es"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @rabe
          </a>
        </div>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center ">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/rabeoficial/?hl=es"
            rel="noopener noreferrer"
            target="_blank"
            className=" sm:ml-1 ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
