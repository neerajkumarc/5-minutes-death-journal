"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const page = () => {
    const router = useRouter()
    return (
        <main className='max-w-xl m-auto p-4'>
            <div className='border-b mb-2'>
                <h1 className="text-4xl font-bold mb-2">How to Use</h1>
                <Button className='underline underline-offset-2 cursor-pointer mb-2 flex items-center gap-2' onClick={() => router.back()}><ArrowLeftIcon /> Back</Button>
            </div>
            <div className='text-sm'>
                <div className='border-b'>
                    <h2 className='text-xl font-bold mb-2'>Why Journal?</h2>
                    <p className='mb-4'>Journaling for five minutes daily helps clear your mind, find meaning in everyday experiences, and boost productivity. Activities like reflecting on the day, learning lessons, and planning for the future promote gratitude and a balanced mindset.</p>
                </div>
                <div className='border-b'>
                    <h2 className='text-xl font-bold mb-2'>How to Use the 5 Min Death Journal</h2>
                    <p>
                    Take five minutes before nightfall to reflect and journal, capturing the essence of your day. Delve into your inner thoughts and record them with intention. Over time, revisit past entries to see your growth and confront past challenges, reflecting on your journey.</p>
                </div>
                <div className='border-b'>
                    <h2 className='text-xl font-bold mb-2'>Sections of the Journal</h2>
                    <ul className='list-disc list-inside mb-4'>
                        <li className='mb-2'>
                            <h3 className='font-bold'>Deathbed Time-Machine Tour of Today</h3>
                            Reflect on the top three moments of your day, as if you were reliving them on your deathbed.
                        </li>
                        <li className='mb-2'>
                            <h3 className='font-bold'>Old Wise Man Who Teaches You Stuff</h3>
                            Record what you have learned today, guided by the wisdom of an ancient sage.
                        </li>
                        <li className='mb-2'>
                            <h3 className='font-bold'>Serial Kidnapper Who Just So Happens to Be a Part-Time Productivity Coach</h3>
                            Plan the three tasks for tomorrow, motivated by an unusual yet effective mentor.
                        </li>
                        <li className='mb-2'>
                            <h3 className='font-bold'>The Karmic Well of Universal Awesomeness</h3>
                            Document one selfless act you performed today, contributing to the well of cosmic balance.
                        </li>
                        <li className='mb-2'>
                            <h3 className='font-bold'>The Eternal Springs of Never-Ending Gratitude</h3>
                            Express what you are grateful for, tapping into the perpetual source of thankfulness.
                        </li>
                    </ul>
                </div>
                <h2 className='text-xl font-bold mb-2'>Inspiration </h2>
                <p>This journaling ritual was inspired by a thought-provoking <Link href={"https://www.youtube.com/watch?v=w_gohJgxBlU&t"} className='underline text-blue-200'>video</Link> on the YouTube channel <Link href={"https://www.youtube.com/@spoonfedstudy"} className='underline text-blue-200'>SpoonFedStudy</Link></p>
            </div>
        </main>
    )
}

export default page