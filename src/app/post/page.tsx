'use client'

import Layout from '@/Layouts/Layout';
import Bg from "@/images/howcontentbg.svg"
import Avatar from "@/images/avatar.png"
import Post1Image from "@/images/post1.png"
import items from '@/data/posts';
import Chevron from '@/Icons/Chevron';

import Comments from "@/Icons/Comments"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PrimaryButton from '@/Components/PrimaryButton';
import Dropdown from '@/Components/Dropdown';
import RedInfo from '@/Icons/RedInfo';
import Change from '@/Icons/Change';
import Image from 'next/image';

export default function Post() {
    return (
        <Layout
            headerbg={true}
        >
            <div className={`container mx-auto text-white opacity-[.99]`}>
                <div className="flex-col justify-center items-center gap-2 flex text-white text-center pb-12">
                    <div className="text-[28px] xl:text-[54px] opacity-[.99]">Is Crypto Dead?</div>
                    <div className="text-lg xl:text-xl mb-12">The question on everyone’s mind is: Is crypto dead?</div>
                    <div className="mx-auto items-center gap-2.5 flex text-lg whitespace-nowrap">
                        <div className="flex space-x-2">
                            <Image width={630} height={601} alt="" className="w-6 h-6 rounded-full" src={Avatar.src} />
                            <div className="opacity-75">Jack Shepard</div>
                        </div>
                        <div className="w-[5px] h-[5px] bg-white bg-opacity-25 rounded-full" />
                        <div className="opacity-75">2 min read</div>
                        <div className="w-[5px] h-[5px] bg-white bg-opacity-25 rounded-full" />
                        <div className="opacity-75">15 may 2023 17:40</div>
                        <div className="w-[5px] h-[5px] bg-white bg-opacity-25 rounded-full" />
                        <div className="opacity-75">UPD: 15 may 2023 19:32</div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-800 relative overflow-hidden bg-center bg-no-repeat" style={{
                backgroundImage: `url('${Bg.src}')`
            }}>
                <div className={`container mx-auto text-white my-8 xl:my-20`}>
                    <div className={`flex justify-center mb-8`}>
                        <Image width={1028} height={423}src={Post1Image.src} alt=""/>
                    </div>
                    <div className="mb-16 leading-[42.50px]">
                        <div className="text-justify text-xl mb-12">In recent years, cryptocurrencies have been a topic of interest, excitement, and debate, with both supporters and detractors expressing strong opinions on their future. The question on everyone’s mind is: Is crypto dead?<br />Recently, a billionaire tech investor Chamath Palihapitiya claimed that crypto is pretty much dead in the United States — mainly because of the strict regulations imposed by the SEC. It remains to be seen how much those regulations will actually do to destroy the crypto market in the States and whether crypto assets will be able to weather this storm. However, we can still examine things we do know — existing crypto projects and businesses.<br />In this article, we’ll examine various aspects of cryptocurrency, its history, the current state of the market, and its potential future to determine if crypto is truly dead or if it’s simply experiencing growing pains.<br />A cryptocurrency is a digital asset that relies on cryptography and blockchain technology to enable secure, decentralized transactions. Unlike traditional currencies, cryptocurrencies are not regulated by central authorities, such as governments or financial institutions. This decentralization allows for faster transactions, lower fees, and increased privacy. Some of the most popular cryptocurrencies include Bitcoin, Ethereum, and XNR.</div>
                        <div className="text-justify text-3xl font-medium mb-6">Cryptocurrency as an Investment</div>
                        <div className="text-justify text-white text-xl">As cryptocurrencies have become more popular, they have attracted the attention of investors who view them as an alternative investment opportunity. While some have achieved significant gains by investing in cryptocurrencies, others have experienced losses due to the volatile nature of the market.<br />Despite the risks, many retail and institutional investors alike continue to be attracted to the potential for high returns and the opportunity to diversify their portfolios with digital assets. As the market matures and regulatory frameworks are established, cryptocurrencies will likely continue to gain acceptance as a viable investment option.</div>

                    </div>
                    <div className="flex flex-wrap gap-10 justify-between items-center mb-16">
                        <div className="gap-4 flex items-center flex-wrap">
                            <div className="text-lg xl:text-2xl">Tags:</div>
                            <div className="gap-4 flex items-center flex-wrap">
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Academy</div>
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Article</div>
                                <div className="px-3 py-1 bg-stone-500 rounded-[5px]">Explanations</div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="text-lg xl:text-2xl">Share article:</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 xl:w-10 xl:h-10" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="#55ACE3" />
                                <path d="M30.6 14.9C29.9 15.2 29.1 15.4 28.3 15.5C29.1 15 29.8 14.2 30.1 13.3C29.3 13.8 28.5 14.1 27.5 14.3C26.8 13.5 25.7 13 24.6 13C22.4 13 20.6 14.8 20.6 17C20.6 17.3 20.6 17.6 20.7 17.9C17.4 17.7 14.4 16.1 12.4 13.7C12.1 14.3 11.9 15 11.9 15.7C11.9 17.1 12.6 18.3 13.7 19C13 19 12.4 18.8 11.9 18.5C11.9 20.4 13.3 22.1 15.1 22.4C14.8 22.5 14.4 22.5 14 22.5C13.7 22.5 13.5 22.5 13.2 22.4C13.7 24 15.2 25.2 17 25.2C15.6 26.3 13.9 26.9 12 26.9C11.7 26.9 11.4 26.9 11 26.8C12.8 27.9 14.9 28.6 17.2 28.6C24.6 28.6 28.6 22.5 28.6 17.2V16.7C29.4 16.4 30.1 15.7 30.6 14.9Z" fill="white" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 xl:w-10 xl:h-10" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="#4E6297" />
                                <path d="M29 13.8186C29 12.3212 27.6788 11 26.1813 11H14.8186C13.3212 11 12 12.3212 12 13.8186V25.1813C12 26.6787 13.3212 28 14.8186 28H20.544V21.5699H18.4301V18.7513H20.544V17.6062C20.544 15.6684 21.9534 13.9948 23.715 13.9948H26.0052V16.8135H23.715C23.4508 16.8135 23.1865 17.0777 23.1865 17.6062V18.7513H26.0052V21.5699H23.1865V28H26.1813C27.6788 28 29 26.6787 29 25.1813V13.8186Z" fill="white" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 xl:w-10 xl:h-10" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="#2AABEE" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2374 18.8879C15.0692 16.6299 18.2912 15.1413 19.9033 14.4221C24.5063 12.3686 25.4627 12.0119 26.0861 12.0001C26.2232 11.9975 26.5298 12.034 26.7284 12.2068C26.8961 12.3528 26.9422 12.5499 26.9643 12.6883C26.9864 12.8266 27.0139 13.1418 26.992 13.3881C26.7426 16.1992 25.6633 23.021 25.1142 26.1694C24.8818 27.5017 24.4244 27.9484 23.9815 27.9921C23.0189 28.0871 22.288 27.3098 21.3558 26.6543C19.897 25.6287 19.0729 24.9902 17.6569 23.9893C16.0205 22.8327 17.0813 22.1969 18.0139 21.158C18.258 20.8861 22.4988 16.7487 22.5809 16.3733C22.5912 16.3264 22.6007 16.1514 22.5038 16.059C22.4069 15.9666 22.2639 15.9982 22.1606 16.0234C22.0143 16.059 19.6839 17.7111 15.1694 20.9798C14.5079 21.467 13.9087 21.7044 13.3719 21.6919C12.7801 21.6782 11.6417 21.333 10.7955 21.038C9.75749 20.6761 8.93252 20.4847 9.00436 19.8701C9.04178 19.55 9.45279 19.2226 10.2374 18.8879Z" fill="white" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 xl:w-10 xl:h-10" viewBox="0 0 40 40" fill="none">
                                <g clip-path="url(#clip0_2022_14385)">
                                    <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#FF4500" />
                                    <path d="M31 20.1772C31 18.8189 29.9174 17.7165 28.5835 17.7165C27.9262 17.7165 27.3462 17.9724 26.9209 18.4055C25.2777 17.2047 22.9965 16.4173 20.4833 16.3189L21.5852 11.063L25.1617 11.8307C25.2004 12.7559 25.9543 13.5039 26.8823 13.5039C27.8295 13.5039 28.6028 12.7165 28.6028 11.752C28.6028 10.7874 27.8295 10 26.8823 10C26.2056 10 25.6257 10.3937 25.355 10.9843L21.3533 10.1181C21.2373 10.0984 21.1213 10.1181 21.0246 10.1772C20.9279 10.2362 20.8699 10.3346 20.8313 10.4528L19.6134 16.3189C17.0422 16.3976 14.7417 17.1654 13.0791 18.4055C12.6538 17.9921 12.0545 17.7165 11.4165 17.7165C10.0826 17.7165 9 18.8189 9 20.1772C9 21.1811 9.57997 22.0276 10.4306 22.4213C10.3919 22.6575 10.3726 22.9134 10.3726 23.1693C10.3726 26.9488 14.6837 30 20.0193 30C25.355 30 29.6661 26.9488 29.6661 23.1693C29.6661 22.9134 29.6467 22.6772 29.6081 22.4409C30.4007 22.0472 31 21.1811 31 20.1772ZM14.471 21.9291C14.471 20.9646 15.2443 20.1772 16.1916 20.1772C17.1388 20.1772 17.9121 20.9646 17.9121 21.9291C17.9121 22.8937 17.1388 23.6811 16.1916 23.6811C15.2443 23.6811 14.471 22.8937 14.471 21.9291ZM24.0791 26.5551C22.8998 27.7559 20.6573 27.8346 20 27.8346C19.3427 27.8346 17.0808 27.7362 15.9209 26.5551C15.7469 26.378 15.7469 26.0827 15.9209 25.9055C16.0949 25.7283 16.3849 25.7283 16.5589 25.9055C17.2935 26.6535 18.8787 26.9291 20.0193 26.9291C21.1599 26.9291 22.7258 26.6535 23.4798 25.9055C23.6538 25.7283 23.9438 25.7283 24.1178 25.9055C24.2531 26.1024 24.2531 26.378 24.0791 26.5551ZM23.7698 23.6811C22.8225 23.6811 22.0492 22.8937 22.0492 21.9291C22.0492 20.9646 22.8225 20.1772 23.7698 20.1772C24.717 20.1772 25.4903 20.9646 25.4903 21.9291C25.4903 22.8937 24.717 23.6811 23.7698 23.6811Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2022_14385">
                                        <rect width="40" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_2022_14388)">
                                    <path d="M16.9308 3.4629C15.6561 2.87799 14.2892 2.44707 12.8599 2.20025C12.8339 2.19549 12.8079 2.20739 12.7945 2.2312C12.6187 2.54388 12.4239 2.9518 12.2876 3.27242C10.7503 3.04228 9.22099 3.04228 7.71527 3.27242C7.57887 2.94467 7.37707 2.54388 7.20048 2.2312C7.18707 2.20819 7.16107 2.19629 7.13504 2.20025C5.70659 2.44628 4.33963 2.87721 3.06411 3.4629C3.05307 3.46766 3.04361 3.4756 3.03732 3.48591C0.444493 7.35954 -0.265792 11.138 0.0826501 14.8695C0.0842267 14.8878 0.0944749 14.9053 0.108665 14.9164C1.81934 16.1726 3.47642 16.9353 5.10273 17.4408C5.12876 17.4488 5.15634 17.4393 5.1729 17.4178C5.55761 16.8925 5.90054 16.3385 6.19456 15.756C6.21192 15.7219 6.19535 15.6814 6.15989 15.6679C5.61594 15.4616 5.098 15.21 4.59977 14.9243C4.56037 14.9013 4.55721 14.8449 4.59346 14.8179C4.69831 14.7394 4.80318 14.6576 4.9033 14.5751C4.92141 14.56 4.94665 14.5568 4.96794 14.5664C8.24107 16.0608 11.7846 16.0608 15.0191 14.5664C15.0404 14.5561 15.0657 14.5592 15.0846 14.5743C15.1847 14.6568 15.2895 14.7394 15.3952 14.8179C15.4314 14.8449 15.4291 14.9013 15.3897 14.9243C14.8914 15.2155 14.3735 15.4616 13.8288 15.6671C13.7933 15.6806 13.7775 15.7219 13.7949 15.756C14.0952 16.3377 14.4381 16.8917 14.8157 17.417C14.8315 17.4393 14.8599 17.4488 14.8859 17.4408C16.5201 16.9353 18.1772 16.1726 19.8879 14.9164C19.9028 14.9053 19.9123 14.8886 19.9139 14.8703C20.3309 10.5562 19.2154 6.80878 16.9568 3.4867C16.9513 3.4756 16.9419 3.46766 16.9308 3.4629ZM6.68335 12.5974C5.69792 12.5974 4.88594 11.6927 4.88594 10.5816C4.88594 9.47056 5.68217 8.56585 6.68335 8.56585C7.69239 8.56585 8.49651 9.4785 8.48073 10.5816C8.48073 11.6927 7.68451 12.5974 6.68335 12.5974ZM13.329 12.5974C12.3435 12.5974 11.5316 11.6927 11.5316 10.5816C11.5316 9.47056 12.3278 8.56585 13.329 8.56585C14.338 8.56585 15.1421 9.4785 15.1264 10.5816C15.1264 11.6927 14.338 12.5974 13.329 12.5974Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2022_14388">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={`container mx-auto text-white xl:my-16 blog-swiper`}>
                    <div className={`flex justify-between items-center mb-8`}>
                        <div className="text-3xl font-medium">Related posts:</div>
                        <div className={`flex items-center`}>
                            <div className="text-white opacity-50 text-xl font-normal leading-normal mr-3">Show more</div>
                            <a href="#" className="w-9 h-9 bg-neutral-700 rounded-md shadow flex justify-center items-center mr-2 arrow-prev">
                                <Chevron className="w-2.5 rotate-[180deg]" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-neutral-700 rounded-md shadow flex justify-center items-center arrow-next">
                                <Chevron className="w-2.5" />
                            </a>
                        </div>
                    </div>


                    <div className="relative mb-32">
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
                            pagination={{
                                el: ".blog-swiper  .pagination-wrapper",
                                clickable: true,
                                dynamicBullets: false
                            }}
                            navigation={{ nextEl: ".blog-swiper .arrow-next", prevEl: ".blog-swiper .arrow-prev" }}
                        >
                            {items.map((item, index) => <SwiperSlide key={index}>
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
                            </SwiperSlide>)}
                        </Swiper>
                    </div>


                    <div className="max-w-[580px] bg-neutral-600 bg-opacity-50 rounded-[22px] backdrop-blur-sm mx-auto mb-64">
                        <div className="w-full max-w-lg xl:max-w-[60rem] p-6 xl:bg-neutral-600 xl:bg-opacity-50 xl:rounded-xl xl:backdrop-blur-sm">
                            <div className="flex flex-col">
                                <div className="grow">
                                    <div className="relative flex flex-col justify-center">
                                        <div className="absolute right-4 xl:right-6">
                                            <Dropdown />
                                        </div>
                                        <label className="absolute top-5 left-4 xl:left-6 text-neutral-400 text-[11px] xl:text-base">You send</label>
                                        <input className="bg-neutral-700 xl:bg-white w-full pt-6 xl:pt-10 pb-3 xl:pb-5 pl-4 xl:pl-6 pr-36 rounded-xl outline outline-2 outline-rose-600 text-rose-600 text-xl xl:text-2xl leading-none" defaultValue="50" />
                                        <div className="absolute z-10 top-full mt-1 text-white bg-rose-700 bg-opacity-40 rounded-[11px] px-4 py-1 flex items-center">
                                            <svg className="w-10 h-auto absolute top-0 -translate-y-full text-rose-700 text-opacity-50" viewBox="0 0 42 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29 0L38 9L20 9L29 0Z" fill="currentColor" />
                                            </svg>
                                            <RedInfo className="w-[22px] h-[22px] mr-2" />
                                            <span>Minimum ammount: <span className="ont-bold">100 USDT</span></span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-white text-[13px] px-6 py-3">
                                        <div className="w-4/5">1 USDT ≈ 0.0054 BTC</div>
                                        <div className="w-1/5">50 $</div>
                                    </div>
                                </div>
                                <div className="shrink-0 flex justify-end -mt-6 mb-3">
                                    <Change className="w-7 h-7 rotate-[90deg]" />
                                </div>
                                <div className="grow">
                                    <div className="relative flex flex-col justify-center">
                                        <div className="absolute right-6">
                                            <Dropdown />
                                        </div>
                                        <label className="absolute top-5 left-6 text-neutral-400 text-[11px] xl:text-base">You receive</label>
                                        <input className="bg-neutral-700 xl:bg-white w-full pt-10 pb-5 pl-6 pr-36 rounded-xl text-white xl:text-pink-950 text-xl xl:text-2xl leading-none" defaultValue="0,00544" />
                                    </div>
                                    <div className="flex justify-between text-white text-[13px] px-6 py-3">
                                        <div className="w-4/5">1 USDT ≈ 0.0054 BTC</div>
                                        <div className="w-1/5">50 $</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row">
                                <div className="grow order-3">
                                    <PrimaryButton className="w-full py-6 px-6 text-xl text-pink-100 w-1/2 shrink-0" disabled={false}>
                                        <div>Exchange now</div>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}
