import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import { NavigationRoutes } from "./[type]/components/navigation/navbar/navBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 md:gap-8 items-center justify-center p-8">
      <Header />
      <Cards />
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-2 md:gap-4 w-full md:max-w-4xl dark:bg-gray-400 dark:bg-transparent p-2 md:p-8 pt-0">
      <Image
        src={Logo}
        alt="logo"
        width={130}
        height={130}
        className="w-20 h-20"
      />
      <h2 className="text-center text-2xl text-gray-900 dark:text-white mt-1 md:mt-4">
        Welcome to Rankovies!
      </h2>
      <p className="hidden md:block text-center text-gray-700 dark:text-gray-400 mt-2">
        Your go-to for the best movies! Explore top-rated films and discover
        your next cinematic adventure with Movie Rankings. The easiest way to
        find the perfect movie for any mood!
      </p>
      <h5 className="hidden md:block  text-center text-bold text-yellow-600 dark:text-yellow-300 mt-2">
        Start now and discover where your favorites stand!
      </h5>
    </header>
  );
}

function Cards() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {NavigationRoutes.map((type) => (
        <Link
          key={type.as}
          href={type.href}
          as={type.as}
          className="flex flex-col justify-center items-center w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h3 className="mb-3">{type.icon}</h3>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {type.label}
          </h5>
          <p className="block text-center font-normal text-gray-700 dark:text-gray-400">
            {type.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
