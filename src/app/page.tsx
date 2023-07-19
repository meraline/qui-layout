'use client'

import Layout from '@/Layouts/Layout';
import How from '@/Layouts/Home/How';
import Week from '@/Layouts/Home/Week';
import Why from '@/Layouts/Home/Why';
import Platform from '@/Layouts/Home/Platform';
import Form from '@/Layouts/Home/Form';
import Latest from '@/Layouts/Home/Latest';
import Trusted from '@/Layouts/Home/Trusted';
import Blog from '@/Layouts/Home/Blog';
import News from '@/Layouts/Home/News';
import RightNow from '@/Layouts/Home/RightNow';
import Faq from '@/Layouts/Home/Faq';
import WeAre from '@/Layouts/Home/WeAre';
import LatestMobile from '@/Layouts/Home/LatestMobile';
import { useEffect, useState } from 'react';

export default function Home() {

    const [mobile, setMobile] = useState<boolean>(false)

    const checkMobile = (e: Event) => {
        const el = e.target as Window;
        setMobile(el.innerWidth < 1280)
    }

    useEffect(() => {
        window.addEventListener('resize', checkMobile)
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    return (
        <Layout
            headerbg={true}
            headerbgmobile={false}
        >
            <div className="max-w-screen overflow-hidden">
                {/**/} <div className={`container mx-auto xl:my-12`}>
                    <div className="flex-col justify-center items-center gap-2 flex text-white">
                        <div className="text-center text-2xl xl:text-[32px] text-gray-100 opacity-[.99]">Exchange Your Cryptocurrency Instantly on Quickex at the Best Market Rates</div>
                        <div className="opacity-80 text-center text-[20px] hidden xl:block">Quickex is a trusted and secure crypto exchange platform launched in 2018. Exchange Bitcoin, Ethereum, Tether, BNB and hundreds of different altcoins at the best rates in a simple and secure way. </div>
                    </div>
                </div>

                <Form />
                {mobile ? <LatestMobile /> : <Latest />}
                <How />
                <Week />
                <Why />
                <Platform />
                <Trusted />
                <Blog />
                <News />
                <WeAre />
                <Faq />
                <RightNow />
            </div>
        </Layout>
    );
}
