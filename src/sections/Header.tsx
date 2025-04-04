import React from "react";
import UserMenu from "../components/DropdownProfile";
import ThemeToggle from "../components/ThemeToggle";
import Icon from "../components/Icons/Icon";
import { HeaderProps } from "../types/type";


const Header: React.FC<HeaderProps> = ({
  sidebarOpen,
  setSidebarOpen,
  variant = "default",
}) => {

  return (
    <header
      className={`sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 ${variant === "v2" || variant === "v3"
          ? "before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10"
          : "max-lg:shadow-xs lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90"
        } ${variant === "v2" ? "dark:before:bg-gray-800" : ""} ${variant === "v3" ? "dark:before:bg-gray-900" : ""
        }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-16 ${variant === "v2" || variant === "v3"
              ? ""
              : "lg:border-b border-gray-200 dark:border-gray-700/60"
            }`}
        >
          <div className="flex">
            <button
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <Icon
                name="hamburger"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none" />
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
