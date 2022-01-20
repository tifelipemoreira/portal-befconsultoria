import { Transition } from "@headlessui/react"; //for smooth transition between tabs
import { Link } from "react-scroll"; // alternate for a tag, in next js we use link for ref

export default function Navbar() {
  return (
    <div className="">
      {/*for main NavContainer*/}
      <nav className="shadow-sm fixed h-20 w-full z-10 justify-start ">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-10 justify-between w-full  ">
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer">
                  B&F<span className="text-blue-500 "> Consultoria</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-6 ">
                  <Link
                    activeClass="Home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-bold text-lg"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-bold text-lg"
                  >
                    Sobre
                  </Link>
                  <Link
                    activeClass="contacts"
                    to="contacts"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-bold text-lg"
                  >
                   Contatos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
