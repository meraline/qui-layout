import Logo from "@/images/logo.png"
import Twitter from "@/Icons/Twitter"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";


export default function WeAre(props: Object) {

    return <div className="bg-center bg-cover mb-6 xl:mb-32">
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="text-center mb-5 xl:mb-10">
                <div className="text-[26px] xl:text-[34px] uppercase mb-4">WE ARE QUICKEX</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div>
            <div className="bg-neutral-700 rounded-[22px] shadow flex flex-col xl:flex-row xl:items-center xl:justify-between px-8 xl:px-12 mb-8 pb-8 xl:pb-0">
                <div className="flex flex-col xl:flex-row xl:items-center">
                    <div className="flex items-center space-x-6 xl:pr-20 py-8">
                        <Image width={75} height={75} alt="" src={Logo.src} className="w-[75px] h-[75px] xl:w-[106px] xl:h-[106px]" />
                        <div>
                            <div className="text-[28px] font-medium">Quickex</div>
                            <div className="text-neutral-500">@quickex_exchanger</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between xl:justify-start mb-6 xl:mb-0">
                        <div className="xl:px-6 xl:py-8">
                            <div className="text-stone-300 font-medium">Tweets</div>
                            <div className="text-2xl font-bold">1,842</div>
                        </div>
                        <div className="xl:px-6 xl:py-8">
                            <div className="text-stone-300 font-medium">Following</div>
                            <div className="text-2xl font-bold">219</div>
                        </div>
                        <div className="xl:px-6 xl:py-8">
                            <div className="text-stone-300 font-medium">Followers</div>
                            <div className="text-2xl font-bold">32,891</div>
                        </div>
                    </div>
                </div>
                <button className="px-6 py-3 bg-blue-500 rounded-lg flex space-x-4 items-center shrink-0 self-start xl:self-center">
                    <Twitter className="w-5 h-auto" />
                    <div className="font-semibold">Follow us</div>
                </button>
            </div>
            <div>
                <div className="relative weare-swiper">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={{
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        modules={[Navigation, Pagination]}
                        navigation={{ nextEl: ".weare-swiper .arrow-next", prevEl: ".weare-swiper .arrow-prev" }}
                        pagination={{
                            el: ".weare-swiper  .pagination-wrapper",
                            clickable: true,
                            dynamicBullets: false
                        }}
                    >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => <SwiperSlide key={index}>
                            <div className="px-7 py-9 bg-neutral-700 rounded-[22px] shadow">
                                <div className="justify-between items-center gap-2.5 flex mb-3">
                                    <div className="flex items-center">
                                        <Image width={48} height={48} alt="" src={Logo.src} className="w-12 h-12 mr-4" />
                                        <div className="">
                                            <div className="text-xl font-medium">Quickex</div>
                                            <div className="text-neutral-500 text-[13px]">@quickex_exchanger</div>
                                        </div>
                                    </div>
                                    <Twitter className="w-6 h-auto text-slate-600" />
                                </div>
                                <div className="text-zinc-100 mb-2.5">Quickex la implementación de mejores mecanismos que permitan a los usuarios comprar, vender e intercambiar a la mejor tasa todo el tiempo.</div>
                                <div className="text-neutral-600 text-[13px] text-right">19 June</div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                    <div className="flex justify-center items-center">
                        <a href="#" className="block arrow-prev w-6 h-6 justify-center items-center flex">
                            <svg className="w-[7px] h-[14px]" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.0415 9.08317L0.95817 4.99984L5.0415 0.916504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <div className="pagination-outer px-12 py-6">
                            <div className="pagination-wrapper"></div>
                        </div>
                        <a href="#" className="block arrow-next w-6 h-6 justify-center items-center flex">
                            <svg className="w-[7px] h-[14px]" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.958496 0.91683L5.04183 5.00016L0.958496 9.0835" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}