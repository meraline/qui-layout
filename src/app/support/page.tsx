
'use client'


import Layout from '@/Layouts/Layout';
import Aero from '@/Icons/Aero';
import Chat from '@/Icons/Chat';
import Mail from '@/Icons/Mail';

export default function Support() {
    return (
        <Layout
            headerbg={true}
        >
            <div className={`container mx-auto text-white opacity-[.99]`}>
                <div className="flex-col justify-center items-center gap-2 flex text-white pb-12">
                    <div className="text-[28px] xl:text-[54px] opacity-[.99]">Support</div>
                </div>
            </div>
            <div className="bg-neutral-800 relative overflow-hidden">
                <div className={`container mx-auto text-white flex flex-col xl:items-center xl:justify-center pt-8 pb-12 xl:pt-24 xl:pb-36`}>
                    <div className="text-lg xl:text-[28px] mb-9 xl:mb-20 text-center xl:text-left">If you have technical or financial questions, write us and we&quot;ll help you with your question. We answer your questions within 15-60 minutes, depending on service load.</div>
                    <div className="gap-5 xl:gap-10 grid grid-cols-1 xl:grid-cols-3 mb-16">
                        <div className="xl:space-y-6 flex xl:flex-col justify-center items-center bg-neutral-700 rounded-[22px] shadow py-6 xl:py-8 px-6">
                            <Aero className="w-9 h-9 xl:w-20 xl:h-20 relative" />
                            <div className="xl:text-2xl ml-6 xl:ml-0">
                                <span className="">Write us on</span>
                                <span className="text-fuchsia-800 font-medium"> Telegram</span>
                            </div>
                        </div>
                        <div className="xl:space-y-6 flex xl:flex-col justify-center items-center bg-neutral-700 rounded-[22px] shadow py-6 xl:py-8 px-6">
                            <Chat className="w-9 h-9 xl:w-20 xl:h-20 relative" />
                            <div className="xl:text-2xl ml-6 xl:ml-0">
                                <span className="">Write now in</span>
                                <span className="text-fuchsia-800 font-medium"> online chat</span>
                            </div>
                        </div>
                        <div className="xl:space-y-6 flex xl:flex-col justify-center items-center bg-neutral-700 rounded-[22px] shadow py-6 xl:py-8 px-6">
                            <Mail className="w-9 h-9 xl:w-20 xl:h-20 relative" />
                            <div className="xl:text-2xl ml-6 xl:ml-0">
                                <span className="">E-mail</span>
                                <span className="text-fuchsia-800 font-medium"> us</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-xl xl:text-[28px] text-center xl:text-left">
                        <span className="text-zinc-300 font-medium">We work  </span>
                        <span className="text-fuchsia-800 font-semibold">24/7 </span>
                        <span className="text-zinc-300 font-medium">for you and your comfort </span>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
