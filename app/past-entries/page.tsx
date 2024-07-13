"use client"
import { Button } from '@/components/ui/button'
import { CalendarIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"

type Props = {}

const page = (props: Props) => {
    const [pastEntries, setPastEntries] = useState<[string, any][]>([])
    const router = useRouter()
    useEffect(() => {
        const data = localStorage
        setPastEntries(Object.entries(data))
    }, [])
    console.log(pastEntries)
    return (
        <main className='max-w-xl m-auto p-4'>
            <h1 className="text-4xl font-bold">Past Entries</h1>
            <Button className='underline underline-offset-2 cursor-pointer my-2 gap-2' onClick={() => router.back()}><ArrowLeftIcon /> Back</Button>

            {pastEntries.length == 0 && <p>no data</p>}
            {pastEntries &&
                pastEntries.map((item) => {
                    const data = JSON.parse(item[1])
                    return (
                        <div className='border rounded-sm p-4 my-4 flex items-center gap-4 cursor-pointer hover:bg-zinc-800' onClick={() => router.push(`/past-entries/${item[0]}`)}>
                            <CalendarIcon />
                            {item[0]}
                        </div>
                    )
                })
            }</main>

    )
}

export default page