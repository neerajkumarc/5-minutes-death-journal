"use client"
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

interface type {
    topMoments: string,
    whatLearned: string,
    tomorrowTasks: string,
    selflessAct: string,
    gratitude: string
}

const page = ({ params }: { params: { id: string } }) => {
    const [data, setData] = useState<type>({
        topMoments: '',
        whatLearned: '',
        tomorrowTasks: '',
        selflessAct: '',
        gratitude: '',
    })
    const [isNoData, setIsNoData] = useState(false)
    const router = useRouter()
    useEffect(() => {
        {/* @ts-ignore */ }
        const res = JSON.parse(localStorage.getItem(decodeURI(params.id)))
        if (!res) {
            setIsNoData(true)
            return
        }
        setData(res)
        console.log(localStorage.getItem(decodeURI(params.id)))
    }, [])
    return (
        <main className='max-w-xl m-auto p-4'>
            <div className='border-b m2'>
                <h1 className="text-4xl font-bold ">Entries For : </h1><br />
                <p className='text-3xl text-blue-200'>{decodeURI(params.id)}</p>
                <Button className='underline underline-offset-2 cursor-pointer my-2 gap-2' onClick={() => router.back()}><ArrowLeftIcon /> Back</Button>
            </div>
            {isNoData && <p>No data available</p>}
            {!isNoData && <div className='space-y-8 my-2'>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">1) TOP THREE MOMENTS</h2>
                    <div className="w-[21rem] md:w-[30rem]">
                        <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200 break-words text-wrap'>
                            {data.topMoments}
                        </pre>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">2) WHAT DID YOU LEARN TODAY?</h2>
                    <div className="w-[21rem] md:w-[30rem]">
                        <pre className='tracking-tighter border rounded-sm p-2 text-orange-200 break-words text-wrap'>
                            {data.whatLearned}
                        </pre>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">3) THE 3 TASKS FOR TOMORROW</h2>
                    <div className="w-[21rem] md:w-[30rem]">
                        <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200 break-words text-wrap'>
                            {data.tomorrowTasks}
                        </pre>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">4) ONE SELF-LESS ACT</h2>
                    <div className="w-[21rem] md:w-[30rem]">
                        <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200 break-words text-wrap'>
                            {data.selflessAct}
                        </pre>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">5) WHAT ARE YOU GRATEFUL FOR?</h2>
                    <div className="w-[21rem] md:w-[30rem]">
                        <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200 break-words text-wrap'>
                            {data.gratitude}
                        </pre>
                    </div>
                </section>
            </div>}

        </main>
    )
}

export default page