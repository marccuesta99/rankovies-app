import Link from "next/link";
import { RouteType } from "../navbar/navBar";

export default function NavButton({ route }: { route: RouteType }) {
  const { href, label, as } = route;

  return (
    <Link
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      href={href}
      as={as}
    >
      {label}
    </Link>
  );
}
