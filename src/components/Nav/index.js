import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import StaspiLogo from '../../assets/svg/staspi.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 sm: w-[200px]">
                <img src={StaspiLogo} alt="Workflow" />
              </div>
              <div className="hidden md:block lg:hidden sm:hidden ">
                <div className="ml-5 flex items-baseline">
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Service
                  </a>

                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Testimonials
                  </a>

                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Hiring
                  </a>
                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-staspi-orange"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="hidden lg:block sm:hidden md:hidden">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Service
                  </a>

                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Testimonials
                  </a>

                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Hiring
                  </a>
                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-staspi-orange"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex sm:hidden md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                ></a>

                <a
                  href="#"
                  className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Service
                </a>

                <a
                  href="Testimonials"
                  className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="Hiring"
                  className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Hiring
                </a>
                <a
                  href="Contact"
                  className="text-staspi-dark-blue hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium bg-staspi-orange"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
