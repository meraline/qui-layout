'use client'

import Layout from '@/Layouts/Layout';
import Bg from "@/images/blogsbg.svg"
import Rupor from "@/images/rupor.png"
import PrimaryButton from '@/Components/PrimaryButton';
import Chevron from '@/Icons/Chevron';
import Comments from '@/Icons/Comments';
import posts from '@/data/posts';
import { useState } from 'react';

import Image from 'next/image';

export default function Blog() {

    const items = posts

    const [data, setData] = useState({
        email: `andrew@gmail.com`
    })

    return (
        <Layout
            headerbg={true}
        >
            <div className={`container mx-auto text-white opacity-[.99]`}>
                <div className="flex-col justify-center items-center gap-2 flex text-white text-center pb-12">
                    <div className="text-[28px] xl:text-[54px] opacity-[.99]">Quickex Blog</div>
                    <div className="text-lg xl:text-xl max-w-xl mx-auto">Latest crypto-related news and long reads on blockchain tech, DeFi industry, crypto markets, and renowned coins.</div>
                </div>
            </div>
            <div className="bg-neutral-800 relative overflow-hidden bg-no-repeat bg-[center_bottom_-10rem] bg-[length:300%] xl:bg-[length:unset]" style={{
                backgroundImage: `url('${Bg.src}')`
            }}>
                <div className={`container mx-auto text-white py-8 xl:py-16 text-white`}>

                    <div className="mb-16">
                        <div className="gap-4 flex mb-10 items-center flex-wrap">
                            <div className="text-[24px]">Tags:</div>
                            <div className="gap-4 flex items-center flex-wrap">
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Academy</div>
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Article</div>
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Explanations</div>
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Fun facts</div>
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Top crypto</div>
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Services</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-12">
                            {items.map((item, index) => <div key={index}>
                                <div className="rounded-[22px] bg-neutral-700 overflow-hidden">
                                    <div className="pt-[50%] relative bg-center bg-cover" style={{
                                        backgroundImage: `url('${item.image}')`
                                    }}>
                                    </div>
                                    <div className="px-4 pt-5 pb-6 space-y-6">
                                        <div className="space-y-2.5">
                                            <div className="text-2xl">How to keep privacy</div>
                                            <div className="text-sm opacity-25 items-center gap-[7px] flex">
                                                <div className="">Jack Shepard</div>
                                                <div>&middot;</div>
                                                <div className="">2 min read</div>
                                                <div>&middot;</div>
                                                <div className="">15 may</div>
                                            </div>
                                            <div className="text-stone-300">Today we learn how to keep privacy when exchange crypto </div>
                                        </div>
                                        <div className="justify-between items-center gap-6 flex">
                                            <div className="text-sm px-3 py-1 bg-stone-500 rounded-[5px]">Academy</div>
                                            <div className="flex space-x-2 items-center">
                                                <Comments className="w-5 h-5" />
                                                <div className="text-stone-300">12 comments</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        <div className="flex justify-center">
                            <div className="shadow gap-2.5 flex items-center text-white">
                                <a href="#" className="w-9 h-9 bg-neutral-700 rounded-md shadow flex items-center justify-center">
                                    <Chevron className="w-2.5 text-stone-500 rotate-[180deg]" />
                                </a>
                                <div className="overflow-hidden gap-2.5 flex items-center">
                                    {[0, 1, 2, 3].map((item, index) => <a key={index} href="#" className={`w-12 h-12 bg-neutral-700 rounded-md shadow text-xl flex items-center justify-center ${index > 0 ? `text-neutral-400` : ``}`}>{1 + item}</a>)}
                                </div>
                                <a href="#" className="w-9 h-9 bg-neutral-700 rounded-md shadow flex items-center justify-center">
                                    <Chevron className="w-2.5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-[561px] bg-neutral-800 rounded-[10px] shadow text-white p-4 xl:p-8 relative mb-16 mx-auto">
                        <Image width={97} height={113} alt="" src={Rupor.src} className="absolute -top-8 -left-8 pointer-events-none" />
                        <div className="text-center text-[24px] xl:text-[35px] font-semibold mb-4">Crypto Price Alerts</div>
                        <div className="text-center text-stone-300 text-sm xl:text-lg mb-6">Get daily alerts on price changes of the top 10 cryptocurrencies.</div>
                        <div className="flex gap-2.5">
                            <input className="w-2/3 grow p-3 bg-neutral-500 rounded-md border border-black border-opacity-10" value={data.email} onChange={e => setData(prev => ({
                                ...prev,
                                email: e.target.value
                            }))} />
                            <PrimaryButton disabled={false} className="shrink-0 px-8 w-1/3">Subscribe</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
