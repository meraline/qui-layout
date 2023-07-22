import TrustPilot from "@/images/trust/trustpilot.svg"
import BestChange from "@/images/trust/bestchange.png"
import Star from "@/Icons/Star"
import Arrow from "@/Icons/ShortArrow"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Chevron from "@/Icons/Chevron";
import Hand from "@/Icons/Hand";
import Image from "next/image";

export default function Trusted(props: Object) {

    return <div className="bg-center bg-cover mb-16">
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="text-center mb-5 xl:mb-[88px]">
                <div className="text-[26px] xl:text-[34px] uppercase mb-4">Trusted crypto exchange</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 xl:gap-12 mb-8 xl:mb-16">
                <div className="xl:w-1/4 flex flex-col justify-between xl:pb-12">
                    <div className="flex flex-col items-center xl:items-start">
                        <Image  width="200" height="50" src={TrustPilot.src} alt="" className="xl:mb-12 w-36 xl:w-48" />
                        <div className="text-zinc-100 text-[40px]">4.6</div>
                        <ul className="hidden xl:flex space-x-1">
                            {[0, 1, 2, 3, 4].map((item, index) => <li key={index} className="bg-emerald-500 px-1 py-1">
                                <Star className="w-4 h-auto text-white" />
                            </li>)}
                        </ul>
                        <div className="opacity-25 text-zinc-100">TrustScore</div>
                    </div>
                    <div className="space-x-2 items-center hidden xl:flex">
                        <div className="text-zinc-100 text-xl">All Truspilot reviews</div>
                        <Arrow className="w-5 h-auto" />
                    </div>
                </div>
                <div className="xl:w-3/4 px-8 xl:px-12">
                    <div className="relative trustpilot-swiper">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                // when window width is >= 640px
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                }
                            }}
                            modules={[Navigation, Pagination]}
                            pagination={{
                                clickable: true,
                                dynamicBullets: false
                            }}
                            navigation={{ nextEl: ".trustpilot-swiper .arrow-next", prevEl: ".trustpilot-swiper .arrow-prev" }}
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => <SwiperSlide key={index}>
                                <div className="px-4 py-5 bg-neutral-700 rounded-[11px] shadow space-y-2.5 mb-12">
                                    <div className="flex justify-between">
                                        <div className="text-zinc-100 text-lg">Sofy V.</div>
                                        <ul className="flex">
                                            {[0, 1, 2, 3, 4].map((item, index) => <li key={index} className="">
                                                <Star className="w-4 h-auto text-emerald-500" />
                                            </li>)}
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-zinc-100">Without a doubt, the service is reliable. I use the services regularly throughout the year for sure. I buy BTC only here. The exchange takes place quickly and the money also arrives quickly. I recommend the service to use.</div>
                                        <div className="flex justify-between items-center space-x-4 text-[11px]">
                                            <div className="text-zinc-100">Dec 9, 2022</div>
                                            <a className="flex items-center space-x-1 border-b border-white border-dashed border-opacity-50 hover:border-transparent" href="#">
                                                <div className="text-white text-opacity-50">Read Full Review</div>
                                                <Chevron className="w-[5px] h-auto" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                        <a href="#" className="arrow-prev w-6 h-6 bg-neutral-700 rounded-full shadow justify-center items-center flex absolute top-1/2 -translate-y-1/2 -left-10">
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.0415 9.08317L0.95817 4.99984L5.0415 0.916504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className="arrow-next w-6 h-6 bg-neutral-700 rounded-full shadow justify-center items-center flex absolute top-1/2 -translate-y-1/2 -right-10">
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.958496 0.91683L5.04183 5.00016L0.958496 9.0835" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 xl:gap-12 mb-8 xl:mb-16">
                <div className="xl:w-1/4 flex flex-col justify-between xl:pb-12">
                    <div className="flex flex-col items-center xl:items-start">
                        <Image  width={185} height={37} src={BestChange.src} alt="" className="mb-4 xl:mb-12" />
                        <div className="text-[40px]">
                            <span className="text-red-300">0</span>
                            <span className="text-zinc-100">/</span>
                            <span className="text-lime-400">154</span>
                        </div>
                    </div>
                    <div className="space-x-2 items-center hidden xl:flex">
                        <div className="text-zinc-100 text-xl">All BestChange reviews</div>
                        <Arrow className="w-5 h-auto" />
                    </div>
                </div>
                <div className="xl:w-3/4 px-8 xl:px-12">
                    <div className="relative trustbest-swiper">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                // when window width is >= 640px
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                }
                            }}
                            modules={[Navigation, Pagination]}
                            pagination={{
                                clickable: true,
                                dynamicBullets: false
                            }}
                            navigation={{ nextEl: ".trustbest-swiper .arrow-next", prevEl: ".trustbest-swiper .arrow-prev" }}
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => <SwiperSlide key={index}>
                                <div className="px-4 py-5 bg-neutral-700 rounded-[11px] shadow space-y-2.5 mb-12">
                                    <div className="flex justify-between">
                                        <div className="text-zinc-100 text-lg">Sofy V.</div>
                                        <Hand className="w-5 h-auto text-lime-400" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-zinc-100">Without a doubt, the service is reliable. I use the services regularly throughout the year for sure. I buy BTC only here. The exchange takes place quickly and the money also arrives quickly. I recommend the service to use.</div>
                                        <div className="flex justify-between items-center space-x-4 text-[11px]">
                                            <div className="text-zinc-100">Dec 9, 2022</div>
                                            <a className="flex items-center space-x-1 border-b border-white border-dashed border-opacity-50 hover:border-transparent" href="#">
                                                <div className="text-white text-opacity-50">Read Full Review</div>
                                                <Chevron className="w-[5px] h-auto" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                        <a href="#" className="arrow-prev w-6 h-6 bg-neutral-700 rounded-full shadow justify-center items-center flex absolute top-1/2 -translate-y-1/2 -left-10">
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.0415 9.08317L0.95817 4.99984L5.0415 0.916504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className="arrow-next w-6 h-6 bg-neutral-700 rounded-full shadow justify-center items-center flex absolute top-1/2 -translate-y-1/2 -right-10">
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.958496 0.91683L5.04183 5.00016L0.958496 9.0835" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}