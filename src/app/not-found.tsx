'use client'


import Layout from '@/Layouts/Layout';
import Image404 from "@/images/404.svg"
import ImageM404 from "@/images/m404.svg"
import Image from 'next/image';

export default function NotFound() {
    return (
        <Layout>
            <div className={`container mx-auto`}>
                <div className="flex flex-col justify-center items-center" >
                    <Image width="1351" height="903" src={Image404.src} alt="" className="hidden xl:block max-w-none absolute top-0 pointer-events-none" />
                    <Image width="927" height="875" src={ImageM404.src} alt="" className="xl:hidden max-w-none absolute top-0 pointer-events-none -mt-60 ml-24" />
                    <div className="text-gray-200 text-[104px] xl:text-[250px] font-semibold leading-none mt-24 xl:mt-36">404</div>
                    <div className="text-center text-white text-xl xl:text-[28px] mt-2 xl:mt-4">Oooooops... There’s nothing interesting, sorry</div>
                    <button className="shrink-0 py-3 w-full xl:max-w-[20rem] px-8 bg-fuchsia-900 rounded-md shadow hover:shadow-lg text-pink-100 mb-36 mt-32 xl:mb-36 xl:mt-40">Send</button>
                </div>
            </div>
        </Layout>
    );
}
