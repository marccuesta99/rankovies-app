import Link from 'next/link'
import { NavigationLinksType } from '../navbar/navBar'

export default function NavButton ({ link }:{link:NavigationLinksType}) {
  const { label, route } = link
  return (
    <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' href={route}>
      {label}
    </Link>

  )
}
