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
        {/* @ts-ignore */}
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
                <h1 className="text-4xl font-bold ">Past Entries For : </h1><br />
                <p className='text-3xl text-blue-200'>{decodeURI(params.id)}</p>
                <Button className='underline underline-offset-2 cursor-pointer my-2 gap-2' onClick={() => router.back()}><ArrowLeftIcon /> Back</Button>
            </div>
            {isNoData && <p>No data available</p>}
            {!isNoData && <div className='space-y-8 my-2'>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">1) TOP THREE MOMENTS</h2>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="topMoments">  "Deathbed Time-Machine Tour of Today"</Label>
                        <div className="flex justify-between">
                            <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200'>
                                {data.topMoments}
                            </pre>
                            <div>
                                <Image src={"/deathbed.png"} width={200} height={200} alt="deathbed" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">2) WHAT DID YOU LEARN TODAY?</h2>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="whatLearned">"Old Wise Man Who Teaches You Stuff"</Label>
                        <div className="flex">
                            <div>
                                <Image src={"/lesson.png"} width={200} height={200} alt="deathbed" />
                            </div>
                            <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200'>
                                {data.whatLearned}
                            </pre>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">3) THE 3 TASKS FOR TOMORROW</h2>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="tomorrowTasks">"Serial Kidnapper Who Just So Happens to be a part-time productivity coach"</Label>
                        <div className="flex">
                            <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200'>
                                {data.tomorrowTasks}
                            </pre>
                            <div>
                                <Image src={"/work.png"} width={200} height={200} alt="deathbed" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">4) ONE SELF-LESS ACT</h2>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="selflessAct">"The Karmic Well of Universal Awesomeness"</Label>
                        <div className="flex">
                            <div>
                                <Image src={"/selflessact.png"} width={200} height={200} alt="deathbed" />
                            </div>
                            <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200'>
                                {data.selflessAct}
                            </pre>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-xl font-bold">5) WHAT ARE YOU GRATEFUL FOR?</h2>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="gratitude">"The Eternal Springs of Never-ending Gratitude"</Label>
                        <div className="flex">
                            <pre className='tracking-tighter border w-full rounded-sm p-2 text-orange-200'>
                                {data.gratitude}
                            </pre>
                            <div>
                                <Image src={"/gratitude.png"} width={200} height={200} alt="deathbed" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>}

        </main>
    )
}

export default page