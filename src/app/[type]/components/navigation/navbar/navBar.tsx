import Image from "next/image";
import Link from "next/link";
import { BiSolidCameraMovie, BiSolidSlideshow } from "react-icons/bi";
import Logo from "../../../../../assets/logo.png";
import NavButton from "../navButton/navButton";

export interface RouteType {
  href: string;
  as: string;
  label: string;
  description: string;
  icon: JSX.Element;
}

export const NavigationRoutes: RouteType[] = [
  {
    href: "/[type]",
    as: "/movies",
    label: "Movies",
    description:
      "Explore a vast collection of the latest movies across genres. Find popular blockbusters, timeless classics, and discover new releases.",
    icon: <BiSolidCameraMovie style={{ width: 36, height: 36 }} />,
  },
  {
    href: "/[type]",
    as: "/tvShows",
    label: "TV Shows",
    description:
      "Dive into an extensive library of TV Shows, including binge-worthy series, gripping dramas, hilarious comedies, and much more.",
    icon: <BiSolidSlideshow style={{ width: 36, height: 36 }} />,
  },
];

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        {/*<LogoButton />*/}
        {/*<SearchButton />*/}
        <MainMenu />
      </div>
    </nav>
  );
}

const MainMenu = () => {
  return (
    <div className="items-center justify-between w-full" id="navbar-search">
      <ul className="flex items-center justify-center font-medium gap-8 p-1 my-1  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {NavigationRoutes.map((route) => (
          <NavButton key={route.as} route={route} />
        ))}
      </ul>
    </div>
  );
};

const LogoButton = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
      <Image src={Logo} alt="logo" width={50} height={50} />
      <span className="hidden md:block self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        Rankovies
      </span>
    </Link>
  );
};

const SearchButton = () => {
  return (
    <div className="flex md:order-2">
      <button
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
      <button
        data-collapse-toggle="navbar-search"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
};
