import Link  from 'next/link'
import Image from 'next/image'
import img from "@/public/assets/images/sport-logo.jpg"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { ModeToggle } from '../DarkLight'


const Header = () => {
  return (
    <header className='w-full sticky z-10 top-0 bg-white dark:bg-gray-700'>
      <div className="wrapper flex items-center justify-between">
      <Link href="/" className='sidebar-logo'>
             <Image src={img} alt="logo" width={50} style={{borderRadius: "50%"}} />
      </Link>

      <SignedIn>
        <nav className='md:flex-between hidden w-full max-w-xs'>
         <NavItems />
        </nav>
      </SignedIn>
      <div className="flex w-32 justify-end gap-3">
      
        <div className="md:flex hidden ">
           <ModeToggle />
        </div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <MobileNav />
        </SignedIn>
       <SignedOut>
          <Button asChild className='rounded-full hover:bg-gray-1000 hover:opacity-70  bg-black text-white' size="lg">
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
        </SignedOut> 
      </div>
      </div>
    </header>
  )
}

export default Header