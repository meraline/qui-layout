'use client'

import Layout from '@/Layouts/Layout';
import ImageMaintenance from "@/images/maintenance.svg"
import Telegram from '@/Icons/Telegram';
import Twitter from '@/Icons/Twitter';
import Image from 'next/image';

export default function Maintenance() {
    return (
        <Layout>
            <div className={`container mx-auto`}>
                <div className="flex flex-col xl:flex-row gap-8 xl:items-center mb-24 xl:mb-40" >
                    <div className="xl:w-1/2 pointer-events-none">
                        <div className="pt-[100%] relative flex flex-col items-center justify-center">
                            <Image width="1080" height="941" src={ImageMaintenance.src} alt="" className="absolute max-w-none w-[180%] -left-10 xl:-left-16 -top-20 xl:-top-24" />
                        </div>
                    </div>
                    <div className="xl:w-1/2 text-white relative">
                        <div className="text-[44px] xl:text-[68px] font-semibold">Maintenance</div>
                        <div className="text-[24px] mb-6 xl:mb-12">We will back shortly</div>
                        <div className="opacity-75 text-lg xl:text-2xl mb-8">Someone has kidnapped our site. <br />We are negotiation ransom and will resolve this issue in 24/7 hours</div>
                        <div className="">
                            <div className="xl:text-xl mb-4">Let’s get in touch</div>
                            <div className="items-center gap-4 flex">
                                <a href="#" className="group">
                                    <Telegram className="w-7 h-7 xl:w-10 xl:h-10 text-slate-500 group-hover:scale-110 group-hover:text-blue-400 transition duration-500" />
                                </a>
                                <a href="#" className="group">
                                    <Twitter className="w-7 h-7 xl:w-10 xl:h-10 text-slate-500 group-hover:scale-110 group-hover:text-blue-400 transition duration-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
