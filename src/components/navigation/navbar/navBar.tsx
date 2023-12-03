import NavButton from '../navButton/navButton'

export type NavigationLinksType = {
  label: string
  route: string
}

export default function NavBar ({ navLinks }: {navLinks: NavigationLinksType[]}) {
  return (
    <nav className='bg-gray-100 border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
        <ul className='flex flex-col font-medium gap-16 p-4 md:p-0 mt-4 bordermd:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
          {navLinks.map((link) => (
            <NavButton key={link.label} link={link} />
          ))}
        </ul>
      </div>
    </nav>

  )
}
