import UsdtCoin from '@/images/coins/usdt.png';
import BitCoin from '@/images/coins/bitcoin.png';
import LongArrow from '../../Icons/LongArrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function LatestMobile(props: Object) {


    return <div className={`container mx-auto my-6 opacity-[.99] text-white`}>
        <div className="text-[22px] mb-2 text-center">LATEST TRANSACTIONS</div>
        <div className="relative latest-swiper">
            <div className="grid grid-cols-1 gap-4">
                {[0, 1, 2].map((item, index) => <div key={index}>
                    <div className="bg-neutral-700 rounded-[18px] shadow px-6 xl: py-5 no-select">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image width={20} height={20} alt="" src={UsdtCoin.src} className="h-5 w-5" />
                                    <div className="">USDT</div>
                                </div>
                                <LongArrow className="w-6 h-auto" />
                                <div className="flex items-center">
                                    <Image width={20} height={20} alt="" src={BitCoin.src} className="h-5 w-5" />
                                    <div className="">SHIB</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-semibold">2608.0919</span>
                                <span className="text-xl">USDT</span>
                            </div>
                            <div className="text-neutral-500 text-[13px]">6 MINUTES AGO</div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </div >
}