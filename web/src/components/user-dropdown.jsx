import React from 'react'
import { Menu, Transition } from '@headlessui/react'

function UserDropdown({ logout }) {
  return (
      <Menu as="div" className="relative inline-block px-3 mt-5">
        {({ open }) => (
          <>
            <Menu.Button
              className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span className="flex items-center justify-between w-full">
                <span className="flex items-center justify-between min-w-0 space-x-3">
                  <img
                    className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
                    src="https://unavatar.now.sh/github/riipandi"
                    alt="user avatar"
                  />
                  <span className="flex flex-col items-start justify-start min-w-0">
                    <span className="text-sm font-medium text-gray-900 truncate">Admin Sistem</span>
                    <span className="text-sm text-gray-500 truncate">admin@admin.com</span>
                  </span>
                </span>
                {/* Heroicon name: solid/selector */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Menu.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute left-0 right-0 z-auto mx-3 mt-1 origin-top bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    View profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Notifications
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Get desktop app
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Support
                  </a>
                </div>
                <div className="py-1">
                  <a
                    onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Logout
                  </a>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
  )
}

export default UserDropdown
