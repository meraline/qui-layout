import PrimaryButton from "./PrimaryButton"
import Rupor from "@/images/rupor.png"
import Image from "next/image"
import { useState } from "react"

export default function Notification() {


    const [data, setData] = useState({
        email: `andrew@gmail.com`
    })

    const [open, setOpen] = useState(false)

    return <div className="w-[395px] bg-neutral-700 rounded-2xl shadow shrink-0 p-5 pb-8 hidden xl:block relative ">
        <Image width={97} height={113} alt="" src={Rupor.src} className="absolute -top-12 -left-6 pointer-events-none w-[84px] h-auto" />
        <div className="text-[24px] font-medium mb-3">Email notifications</div>

        {open ? <div className="flex-col gap-0.5 flex">
            <div className="">
                <span className="text-neutral-200">You are subscribed to exchange status notifications and will be notified by email at </span>
                <span className="text-neutral-200 font-semibold">andrew@gmail.com</span>
            </div>
            <div className="flex">
                <div className="text-neutral-500 font-medium border-b border-neutral-500 border-dashed">Change email for notifications</div>
            </div>
        </div> : <><div className="flex gap-2.5 mb-3">
            <input className="grow p-3 bg-neutral-500 rounded-md border border-black border-opacity-10" value={data.email} onChange={e => setData(prev => ({
                ...prev,
                email: e.target.value
            }))} />
            <PrimaryButton disabled={false} className="shrink-0 px-8" type="button" onClick={() => {
                setOpen(true)
            }}>Save</PrimaryButton>
        </div>
            <div className="text-neutral-200 text-[13px]">Enter your email (e.g., andrew@gmail.com) if you&quot;d like to receive updates about your order status. Click &lsquo;Save&rsquo; to confirm.</div>
        </>}
    </div>
}