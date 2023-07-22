import UsdtCoin from '@/images/coins/usdt.png';
import BitCoin from '@/images/coins/bitcoin.png';
import LongArrow from '../../Icons/LongArrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Latest(props: Object) {


    return <div className={`container mx-auto mb-12 xl:-mt-[280px] opacity-[.99] text-white`}>
        <div className="text-[22px] mb-2 text-center xl:text-left">LATEST TRANSACTIONS</div>
        <div className="relative latest-swiper">
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{ nextEl: ".latest-swiper .arrow-next", prevEl: ".latest-swiper .arrow-prev" }}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                    }
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => <SwiperSlide key={index}>
                    <div className="bg-neutral-700 rounded-[18px] shadow px-6 xl:px-8 pt-5 pb-3 no-select">
                        <div className="flex flex-col space-y-[18px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image width={20} height={20} alt="" src={UsdtCoin.src} className="h-[18px] w-[18px] mr-1.5" />
                                    <div className="leading-none">USDT</div>
                                </div>
                                <LongArrow className="w-6 h-auto" />
                                <div className="flex items-center">
                                    <Image width={20} height={20} alt="" src={BitCoin.src} className="h-[18px] w-[18px] mr-1.5" />
                                    <div className="leading-none">SHIB</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-semibold">2608.0919</span>
                                <span className="text-xl">USDT</span>
                            </div>
                            <div className="text-neutral-500 text-[13px] relative -top-[3px]">6 MINUTES AGO</div>
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
    </div >
}