import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from "@/public/assets/images/sport-logo.jpg"

const Footer = () => {
  return (
    <footer className="text-center w-full bg-white dark:bg-gray-700">
      <div className='flex-center wrapper flex-between flex flex-col gap-4 text-center sm:flex-row'>
        <Link href="/">
          <Image src={img} alt="logo" width={50} style={{borderRadius: "50%"}} />
        </Link>
       <p>&copy; 2024, All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer