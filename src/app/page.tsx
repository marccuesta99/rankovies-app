import Image from 'next/image'
import Link from 'next/link'
import { BiSolidCameraMovie, BiSolidSlideshow } from 'react-icons/bi'
import Logo from './logo.png'

const TypeRoutes = [
  {
    href: '/[type]',
    as: '/movies',
    label: 'Movies',
    description: 'Explore a vast collection of the latest movies across genres. Find popular blockbusters, timeless classics, and discover new releases.',
    icon: <BiSolidCameraMovie style={{ width: 36, height: 36 }} />
  },
  {
    href: '/[type]',
    as: '/tvShows',
    label: 'TV Shows',
    description: 'Dive into an extensive library of TV Shows, including binge-worthy series, gripping dramas, hilarious comedies, and much more.',
    icon: <BiSolidSlideshow style={{ width: 36, height: 36 }} />
  }
]

export default function Home () {
  return (
    <main className='min-h-screen flex flex-col gap-8 items-center justify-center p-8 '>
      <Header />
      <Cards />
    </main>
  )
}

function Header () {
  return (
    <header className='flex flex-col justify-center items-center gap-4 max-w-4xl bg-gray-400 dark:bg-transparent p-8'>
      <Image src={Logo} alt='logo' width={150} height={150} />
      <h2 className='text-2xl text-gray-900 dark:text-white'>Welcome to Rankovies!</h2>
      <p className='hidden md:block text-center text-gray-700 dark:text-gray-400'>Your ultimate destination for movie and TV show rankings, with a twist. </p>
      <p className='text-center text-gray-700 dark:text-gray-400'>
        Unveil the rankings by inputting your current watch or favorite. Join a community shaping rankings based on your input.
      </p>
      <h5 className='text-center text-bold first-letter:text-yellow-400 dark:text-yellow-300'>Start now and discover where your favorites stand!</h5>
    </header>
  )
}

function Cards () {
  return (
    <div className='flex flex-row items-center justify-center gap-8'>
      {TypeRoutes.map((type) => (
        <Link key={type.as} href={type.href} as={type.as} className='flex flex-col justify-center items-center max-w-sm min-w-[170px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h3 className='mb-3'>{type.icon}</h3>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{type.label}</h5>
          <p className='hidden md:block text-center font-normal text-gray-700 dark:text-gray-400'>{type.description}</p>
        </Link>
      ))}
    </div>
  )
}
