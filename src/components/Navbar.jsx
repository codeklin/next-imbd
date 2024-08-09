import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex gap-6 dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center'>
        <NavbarItem title='Trending' param='fetchTrending'/>
        <NavbarItem title='TopRated'param='fetchTopRated'/>
       
    </div>
  )
}
