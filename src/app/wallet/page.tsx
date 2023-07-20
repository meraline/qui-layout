'use client'


import Layout from '@/Layouts/Layout';
import Puzzle from "@/images/puzzle.png"
import Bg from "@/images/soon.svg"
import PrimaryButton from '@/Components/PrimaryButton';
import Image from 'next/image';

export default function Wallet() {
    return (
        <Layout
            headerbg={true}
        >
            <div className={`container mx-auto text-white opacity-[.99]`}>
                <div className="flex-col justify-center items-center gap-2 flex text-white text-center pb-12">
                    <div className="text-[28px] xl:text-[54px] opacity-[.99]">Wallet</div>
                    <div className="xl:text-xl">Store your growing investments in our<br />non-custodial wallet that gives you access to a full suite of DeFi services in one place</div>
                </div>
            </div>
            <div className="bg-neutral-800 relative overflow-hidden max-w-screen">
                <div className="max-w-lg xl:max-w-none mx-auto">
                    <div className={`container mx-auto text-white flex flex-col items-center justify-center xl:pt-24 xl:pb-36`}>
                        <Image width="1440" height="1021" alt="" className="absolute w-full" src={Bg.src} />
                        <div className="w-full max-w-xl bg-neutral-800 xl:rounded-[10px] relative xl:shadow-modal p-6 xl:p-12 pb-10">
                            <Image width={512} height={486} alt="" className="absolute -right-12 -top-12 w-[11rem] h-auto hidden xl:block" src={Puzzle.src} />
                            <div className="text-[28px] xl:text-[34px] mb-4">Coming soon</div>
                            <div className="text-stone-300 xl:text-xl mb-2.5">
                                <span className="">We creating </span>
                                <span className="font-semibold">something amazing</span>
                                <span className=""> for you. </span>
                            </div>
                            <div className="text-stone-300 text-lg xl:text-xl mb-8 pr-16">Let’s stay in touch: we notify you when Wallet will be released</div>
                            <input placeholder="mail@example.com" className="placeholder:text-zinc-100 w-full xl:w-auto text-white xl:min-w-[20rem] bg-neutral-500 rounded-md border border-black border-opacity-10 py-3 px-4 mb-4" />
                            <PrimaryButton className="w-full xl:w-auto xl:min-w-[20rem]" disabled={false}>Send</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
