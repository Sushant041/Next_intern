"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { PlayerList } from '@/constants/PlayerList'
import ad from "@/public/assets/images/Google_Ads_logo.svg.png"
import { Button } from './ui/button'

const Player = () => {
  return (
    <div className='bg-dark w-full'>
      <h1 className='font-bold text-xl dark:text-white'>Sports</h1>
      <hr className="w-16 h-1 bg-blue-400 border-0 rounded my-2 "></hr>

      <div className="md:grid grid-cols-5 gap-2 w-full flex-center flex-wrap">
        {PlayerList.map((player) =>
          <div key={player.id} className="mt-5 p-3 delay-75 hover:opacity-90 hover:scale-105 bg-white border border-gray-200 shadow max-w-64 dark:bg-zinc-700 dark:border-gray-700">
            <Link href="#">
              <Image className="" src={player.img} alt="logo" width={237} height={511} />
            </Link>
            <div className='mt-5'>
              <h5 className="mb-3 text-lg font-normal tracking-tight text-gray-900 dark:text-white">
                {player.name}
              </h5>
              <div className="bg-gray-100 grid rounded grid-cols-2 p-3 gap-2 dark:bg-zinc-800 ">
                <div className='text-xs text-gray-700 dark:text-gray-400'>
                  Total Events
                  <div>
                    <span className='text-sm dark:text-gray-100'>{player.totalEvents} Events</span>
                  </div>
                </div>
                <div className='text-xs text-gray-700 dark:text-gray-400'>
                  Sport
                  <div>
                    <span className='text-sm dark:text-gray-100'>{player.sport}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        }


        <div style={{zIndex: "-1"}} className="relative mt-5 p-3 bg-white border border-gray-200 shadow max-w-64 dark:bg-zinc-700 dark:border-gray-700">
          <Link href="#">
            <div className='absolute flex-center text-sm w-10 top-0 right-0 text-white bg-black'>
              AD
            </div>
            <Image width={200} src={ad} alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Google Ads</h5>
            </Link>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates delectus similique ipsa in, libero quas aliquam ut eveniet, officiis recusandae quibusdam rerum?
            </p>
          </div>
        </div>
      </div>
      <div className='text-center'>
      <Button className='rounded hover:opacity-90 hover:scale-105 mt-5 dark:bg-white dark:text-black' style={{background: "#2C9CF0", color: "white"}} size="sm">
           See More
      </Button>
      </div>
    </div>
  )
}

export default Player
