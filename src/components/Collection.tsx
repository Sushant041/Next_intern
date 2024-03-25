"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import prev from "@/public/assets/icons/previous.png"
import nxt from "@/public/assets/icons/next.png"
import { CollectionList } from '@/constants/CollectionList'
import { Button } from './ui/button'

const Collection = () => {
    return (
        <div className='flex text-center p-5 m-10'>
            <div className='p-4 flex flex-col'>
                <h1 className='text-5xl font-extrabold'>Collection Spotlight</h1>
                <p className='my-5'>
                    Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
                </p>
                
                <div className="flex flex-between">
                <div className='border-4 hidden md:flex border-cyan-500 cursor-pointer'>
                    <Image src={prev} alt="prev" className='dark:invert' width={50} height={80} />
                </div>
                <div className="wrapper gap-2 flex-center flex-wrap">
                    {
                        CollectionList.map((collection) => {
                            return (
                                <div key={collection.id} className="mt-5 hover:scale-105 delay-75 bg-white border border-gray-200 shadow max-w-64 dark:bg-zinc-700 dark:border-gray-700">
                                    <Link href="#">
                                        <Image className="" src={collection.img} alt="logo" width={237} height={511} />
                                    </Link>
                                    <div className='my-5'>
                                        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                            {collection.name}
                                        </h5>
                                        <div className="flex-center gap-2">
                                            <div>
                                                <span className='text-sm dark:text-gray-100'>{collection.month} </span>
                                                |
                                                <span className='text-sm dark:text-gray-100'> {collection.day} </span>
                                                |
                                                <span className='text-sm dark:text-gray-100'> {collection.time}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className='text-sm dark:text-gray-100'>{collection.location}</span>
                                        </div>

                                        <div>
                                            <Button size="lg" className='rounded hover:bg-black mt-5 bg-black text-white'>{collection.coll}</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='border-4 hidden md:flex border-cyan-500 cursor-pointer'>
                    <Image src={nxt} alt="next" className='dark:invert' width={50} height={80} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Collection