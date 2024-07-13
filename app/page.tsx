"use client"
import React, { ChangeEventHandler, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { toast } from "sonner"
import { useRouter } from 'next/navigation';
import { InfoCircledIcon, TimerIcon } from '@radix-ui/react-icons';


export default function Home() {
  const [formData, setFormData] = useState({
    topMoments: '',
    whatLearned: '',
    tomorrowTasks: '',
    selflessAct: '',
    gratitude: '',
  });
  const router = useRouter()
  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const timestamp = new Date().toDateString();
    localStorage.setItem(timestamp, JSON.stringify(formData));
    toast("Added successfully 🚀")
    setFormData({
      topMoments: '',
      whatLearned: '',
      tomorrowTasks: '',
      selflessAct: '',
      gratitude: '',
    })
  };
  return (

    <main className='p-4 max-w-xl m-auto'>
      <div className='border-b mb-2'>
        <h1 className="text-4xl font-bold ">5 minutes Death Journal</h1>
        <div className='flex gap-4 mb-2'>
          <Button className='underline underline-offset-2 gap-2 my-2' onClick={() => router.push("/past-entries")}><TimerIcon />Past Entries</Button>
          <Button className='underline underline-offset-2 gap-2 my-2' onClick={() => router.push("/how-to-use")}><InfoCircledIcon />How to use</Button>
        </div>
      </div>
      <form  onSubmit={handleSubmit} className="space-y-8 my-4">
        <section className="space-y-4">
          <h2 className="text-xl font-bold">1) TOP THREE MOMENTS</h2>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="topMoments">  "Deathbed Time-Machine Tour of Today"</Label>
            <div className="flex">
              <Textarea
                required={true}
                rows={4}
                placeholder="Type your message here."
                id="topMoments"
                name="topMoments"
                value={formData.topMoments}
                onChange={handleInputChange}
              />
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
              <Textarea
                required={true}
                rows={4}
                placeholder="Type your message here."
                id="whatLearned"
                name="whatLearned"
                value={formData.whatLearned}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold">3) THE 3 TASKS FOR TOMORROW</h2>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="tomorrowTasks">"Serial Kidnapper Who Just So Happens to be a part-time productivity coach"</Label>
            <div className="flex">
              <Textarea
                required={true}
                rows={4}
                placeholder="Type your message here."
                id="tomorrowTasks"
                name="tomorrowTasks"
                value={formData.tomorrowTasks}
                onChange={handleInputChange}
              />
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
              <Textarea
                required={true}
                rows={4}
                placeholder="Type your message here."
                id="selflessAct"
                name="selflessAct"
                value={formData.selflessAct}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold">5) WHAT ARE YOU GRATEFUL FOR?</h2>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="gratitude">"The Eternal Springs of Never-ending Gratitude"</Label>
            <div className="flex">
              <Textarea
                required={true}
                rows={4}
                placeholder="Type your message here."
                id="gratitude"
                name="gratitude"
                value={formData.gratitude}
                onChange={handleInputChange}
              />
              <div>
                <Image src={"/gratitude.png"} width={200} height={200} alt="deathbed" />
              </div>
            </div>
          </div>
        </section>
        <Button className="w-full" type='submit'>Add</Button>
      </form>
    </main>
  );
}