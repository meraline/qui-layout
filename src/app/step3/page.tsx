
'use client'


import Layout from '@/Layouts/Layout';
import Gradient from "@/images/gradient.svg"
import Tether from '@/Crypto/Tether';
import Bitcoin from '@/Crypto/Bitcoin';
import LongArrow from '@/Icons/LongArrow';
import Copy from '@/Icons/Copy';
import MapSign from '@/Icons/MapSign';
import TakeMoney from '@/Icons/TakeMoney';
import Exchange from '@/Icons/Exchange';
import Done from '@/Icons/Done';
import HandOk from '@/Icons/HandOk';
import Arrow from '@/Icons/Arrow';
import Info from '@/Icons/Info';
import ArrowForward from '@/Icons/ArrowForward';
import Revote from '@/Icons/Revote';
import Time from '@/Icons/Time';
import Notification from '@/Components/Notification';
import { useState } from 'react';
import Image from 'next/image';

export default function Step3() {

    const iconClass = `w-4 xl:w-8 h-4 xl:h-8`;
    const iconFactsClass = `w-[17.5px] h-[17.5px] xl:w-[28px] xl:h-[28px] text-zink-500`;

    const [data, setData] = useState({
        email: `andrew@gmail.com`
    })

    return (
        <Layout>
            <div className={`container mx-auto xl:pt-12 text-white flex flex-col`}>
                <div className="bg-no-repeat bg-neutral-700 bg-opacity-75 xl:rounded-2xl xl:shadow px-8 py-6 relative overflow-hidden mb-5 order-2 xl:order-1 -mx-6 xl:mx-0">
                    <Image width="1165" height="947" src={Gradient.src} alt="" className="absolute left-[-157px] top-[-147px] xl:left-[-507px] xl:top-[-577px]" />
                    <div className="relative flex gap-4 xl:gap-8">
                        <div className="items-center gap-4 xl:gap-8 flex xl:grow">
                            <Tether className="w-10 xl:w-20 h-auto order-2 xl:order-1 shrink-0" />
                            <div className="order-1 xl:order-2">
                                <div className="text-neutral-400 text-[11px] xl:text-[20px]">You send</div>
                                <div className="xl:text-[24px] xl:font-semibold">
                                    <span className="text-nowrap">0.2903</span> <span>USDT</span>
                                </div>
                                <div className="text-neutral-500 hidden xl:block">0x64ab0a24ebcbef50bbe791e8f8236d5b16164b8c</div>
                            </div>
                        </div>
                        <LongArrow className="w-12 h-auto shrink-0 hidden xl:block" />
                        <Arrow className="w-[18px] h-auto shrink-0 xl:hidden" />
                        <div className="items-center gap-4 xl:gap-8 flex xl:grow">
                            <Bitcoin className="w-[1.75rem] xl:w-12 h-auto order-2 xl:order-1 shrink-0" />
                            <div className="order-1 xl:order-2">
                                <div className="text-neutral-400 text-[11px] xl:text-[20px]">You receive</div>
                                <div className="xl:text-[24px] xl:font-semibold">
                                    <span className="text-nowrap">2,05</span> <span>BTC</span>
                                </div>
                                <div className="text-neutral-500 hidden xl:block">0xdac17f958d2ee523a2206206994597c13d831ec7</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-5 xl:align-strech mb-5 order-3 xl:order-2 -mx-6 xl:mx-0">
                    <div className="bg-neutral-700 xl:rounded-2xl xl:shadow shrink-0 pt-5 xl:w-[300px] shrink-0 pb-12 px-5">
                        <div className="flex xl:block">
                            <div className="w-2/5 xl:w-auto pr-2 xl:pr-0">
                                <div className="text-[24px] font-medium mb-3 hidden xl:block">Order details</div>
                                {[{
                                    title: `ID Number`,
                                    text: `99IEWW2GD`
                                }, {
                                    title: `Exchange type`,
                                    text: `Float`
                                }, {
                                    title: `Order status`,
                                    text: `Awaiting deposit`
                                }, {
                                    title: `Creation date`,
                                    text: `15.11.2022 06:58:32`
                                }].map((item, index) => <div key={index} className="xl:border-b xl:border-white xl:border-opacity-5 py-1 xl:py-3">
                                    <div className="text-neutral-400 text-[13px] leading-tight mb-0.5">{item.title}</div>
                                    <div className="">{item.text}</div>
                                </div>)}
                            </div>
                            <div className="xl:hidden w-3/5">
                                <div className="text-xl font-medium">Transaction process</div>

                                <div className="block pb-1">
                                    <div className="text-neutral-400">TXID</div>
                                    <div className="mb-2">
                                        <div className="items-center gap-[7px] flex">
                                            <div className="w-[calc(100%-23px)] font-medium overflow-hidden text-ellipsis whitespace-nowrap">09be15b5b31e-4025-8dc4-6d6344c575e4</div>
                                            <Copy className="w-4 h-4 text-neutral-400 shrink-0" />
                                        </div>
                                        <div className="flex-col gap-0.5 flex relative">
                                            <div className="text-neutral-400 text-[10px]">Check your transaction in the preferred blockchain explorer.</div>
                                            <div className="justify-start items-start gap-1.5 flex">
                                                <div className="flex items-center justify-center space-x-2 bg-black bg-opacity-25 rounded-md w-9 h-9">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M3.83136 8.28705C3.83137 8.19758 3.84906 8.10901 3.8834 8.02639C3.91774 7.94378 3.96806 7.86878 4.03148 7.80567C4.0949 7.74256 4.17014 7.6926 4.25292 7.65865C4.3357 7.6247 4.42436 7.60745 4.51383 7.60787L5.64536 7.61156C5.82576 7.61156 5.99878 7.68323 6.12634 7.81079C6.25392 7.93836 6.32559 8.11138 6.32559 8.29179V12.5703C6.45297 12.5325 6.61658 12.4921 6.79559 12.45C6.91994 12.4208 7.03076 12.3504 7.11009 12.2503C7.1894 12.1502 7.23255 12.0262 7.23253 11.8985V6.59121C7.23253 6.41078 7.30419 6.23774 7.43175 6.11016C7.55931 5.98256 7.73234 5.91088 7.91276 5.91084H9.04653C9.22694 5.91088 9.39996 5.98256 9.52753 6.11016C9.65509 6.23774 9.72676 6.41078 9.72676 6.59121V11.5168C9.72676 11.5168 10.0106 11.402 10.2871 11.2853C10.3898 11.2418 10.4775 11.1691 10.5391 11.0762C10.6008 10.9833 10.6337 10.8742 10.6338 10.7627V4.89062C10.6338 4.71023 10.7055 4.53723 10.833 4.40966C10.9606 4.2821 11.1335 4.21043 11.3139 4.21039H12.4477C12.6281 4.21039 12.8011 4.28205 12.9287 4.40962C13.0563 4.53719 13.1279 4.71021 13.1279 4.89062V9.72616C14.1109 9.01378 15.107 8.15704 15.8975 7.1268C16.0122 6.97727 16.0881 6.80166 16.1184 6.61568C16.1487 6.4297 16.1325 6.23909 16.0712 6.06088C15.7053 5.00809 15.1237 4.04328 14.3635 3.22818C13.6033 2.4131 12.6814 1.76567 11.6566 1.32735C10.6319 0.889027 9.5269 0.669458 8.41241 0.682694C7.29793 0.695929 6.19849 0.941678 5.18445 1.40421C4.17039 1.86675 3.26406 2.53588 2.52346 3.3688C1.78286 4.2017 1.22429 5.18006 0.883496 6.24125C0.542707 7.30242 0.427202 8.42306 0.544372 9.53144C0.661542 10.6398 1.00881 11.7115 1.56395 12.678C1.66065 12.8447 1.80293 12.9804 1.97406 13.0691C2.14518 13.1577 2.33806 13.1957 2.53003 13.1786C2.74448 13.1597 3.01149 13.133 3.32895 13.0957C3.46715 13.08 3.59474 13.014 3.68741 12.9103C3.78009 12.8066 3.83137 12.6725 3.83149 12.5334L3.83136 8.28705Z" fill="#4691BC" />
                                                        <path d="M3.80664 15.1495C5.0017 16.0189 6.414 16.5408 7.88727 16.6573C9.36055 16.7738 10.8373 16.4806 12.1543 15.8098C13.4712 15.1391 14.5768 14.1171 15.349 12.857C16.1211 11.5969 16.5295 10.1477 16.5291 8.66983C16.5291 8.48541 16.5206 8.30297 16.5083 8.12158C13.5815 12.4867 8.17745 14.5275 3.80689 15.1488" fill="#979695" />
                                                    </svg>
                                                </div>
                                                <div className="flex items-center justify-center space-x-2 bg-black bg-opacity-25 rounded-md w-9 h-9">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
                                                        <path d="M5.2775 18.5003L9.60218 15.8077V10.3093C9.60218 10.202 9.58315 10.099 9.5509 10.0005L5.18225 12.7201C5.24381 12.8661 5.2775 13.0253 5.2775 13.1896V18.5003Z" fill="#FFF200" />
                                                        <path d="M4.32466 0.5L0 3.19263V8.69103C0 8.79836 0.0190578 8.90132 0.0513096 8.99986L4.41996 6.28021C4.35839 6.13421 4.32466 5.97503 4.32466 5.81077V0.5Z" fill="#21DFF3" />
                                                        <path d="M4.56593 6.53271L0.18335 9.26182C0.257382 9.3655 0.352671 9.45602 0.465553 9.52684L4.70959 12.1691C4.83859 12.2494 4.94854 12.3509 5.03651 12.4677L9.4198 9.73929C9.34579 9.63566 9.25049 9.54509 9.13761 9.47427L4.89357 6.83203C4.76383 6.75098 4.65461 6.64951 4.56593 6.53271Z" fill="#FF0078" />
                                                        <path d="M4.32483 18.5004V13.6211L0.420166 16.0698L4.32483 18.5004Z" fill="#A42EFF" />
                                                    </svg>
                                                </div>
                                                <div className="flex items-center justify-center space-x-2 bg-black bg-opacity-25 rounded-md w-9 h-9">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <g clip-path="url(#clip0_1860_12121)">
                                                            <path d="M10.4856 2.58939C11.4418 1.62946 12.8405 1.6093 13.6148 2.38662C14.3906 3.1654 14.3697 4.57289 13.4128 5.53348L11.7969 7.15564C11.602 7.35128 11.6027 7.66786 11.7983 7.86274C11.9939 8.05763 12.3105 8.05701 12.5054 7.86137L14.1213 6.23921C15.3955 4.96007 15.5555 2.91785 14.3233 1.68088C13.0896 0.442449 11.0519 0.603857 9.7771 1.88366L6.54533 5.12796C5.27113 6.4071 5.11116 8.44934 6.34334 9.68631C6.53822 9.88195 6.8548 9.88256 7.05044 9.68768C7.24608 9.4928 7.2467 9.17621 7.05181 8.98057C6.27604 8.20179 6.29694 6.79428 7.2538 5.8337L10.4856 2.58939Z" fill="white" />
                                                            <path d="M9.65661 6.31391C9.46173 6.11827 9.14514 6.11765 8.9495 6.31254C8.75386 6.50742 8.75325 6.824 8.94813 7.01964C9.72391 7.79843 9.70302 9.20591 8.74615 10.1665L5.5144 13.4108C4.55818 14.3708 3.15946 14.3909 2.38515 13.6136C1.60937 12.8348 1.63027 11.4273 2.58714 10.4667L4.20303 8.84454C4.39792 8.6489 4.3973 8.33232 4.20166 8.13743C4.00602 7.94255 3.68944 7.94316 3.49456 8.1388L1.87866 9.76097C0.604462 11.0401 0.444489 13.0824 1.67667 14.3193C2.91032 15.5578 4.94802 15.3964 6.22287 14.1166L9.45462 10.8722C10.7288 9.59308 10.8888 7.55088 9.65661 6.31391Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1860_12121">
                                                                <rect width="16" height="16" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="text-neutral-400">Block confirmations</div>
                                        <div className="">
                                            <span className="text-red-500">1</span>
                                            <span className="text-white">/4</span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="text-neutral-400">Receiving time</div>
                                        <div className="text-[13px]">
                                            <span className="text-white font-medium ">Few seconds ago </span>
                                            <span className="text-neutral-400">(15.11.2022 06:58:32)</span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="text-neutral-400">Hit the block</div>
                                        <div className="text-[13px]">
                                            <span className="text-white font-medium ">Few seconds ago </span>
                                            <span className="text-neutral-400">(15.11.2022 06:58:32)</span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="text-neutral-400">Sum</div>
                                        <div className="">16 USDT</div>
                                    </div>
                                    <div className="">
                                        <div className="text-neutral-400">Commissions</div>
                                        <div className="">0,000221 ETH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-700 p-5 xl:hidden">
                        <div className="text-neutral-400 ">Receive address:</div>
                        <div className="break-words">0xdac17f958d2ee523a2206206994597c13d831ec7</div>
                    </div>
                    <div className="bg-neutral-700 xl:rounded-2xl xl:shadow grow flex flex-col gap-5 p-5 xl:pb-12  hidden xl:block">
                        <div className="text-[24px] font-medium hidden xl:block">Transaction process</div>
                        <div className="">
                            <span className="text-lg xl:hidden"> Send </span>
                            <div className="xl:mb-3 inline-block xl:block xl:border-b xl:border-white xl:border-opacity-5 pb-1">
                                <div className="text-neutral-400 hidden xl:block">TXID</div>
                                <div className="items-center justify-between flex xl:flex">
                                    <div className="items-center gap-[7px] flex xl:flex">
                                        <div className="text-[18px] xl:text-[20px] font-medium">09be15b5b31e-4025-8dc4-6d6344c575e4</div>
                                        <Copy className="w-4 h-4 text-neutral-400 shrink-0" />
                                    </div>
                                    <div className="flex-col gap-0.5 flex relative -top-3">
                                        <div className="text-neutral-400 text-[10px]">Check your transaction in the preferred blockchain explorer.</div>
                                        <div className="justify-start items-start gap-1.5 flex">
                                            <div className="flex items-center space-x-2 bg-black bg-opacity-25 rounded-md py-1 px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <path d="M3.83136 8.28705C3.83137 8.19758 3.84906 8.10901 3.8834 8.02639C3.91774 7.94378 3.96806 7.86878 4.03148 7.80567C4.0949 7.74256 4.17014 7.6926 4.25292 7.65865C4.3357 7.6247 4.42436 7.60745 4.51383 7.60787L5.64536 7.61156C5.82576 7.61156 5.99878 7.68323 6.12634 7.81079C6.25392 7.93836 6.32559 8.11138 6.32559 8.29179V12.5703C6.45297 12.5325 6.61658 12.4921 6.79559 12.45C6.91994 12.4208 7.03076 12.3504 7.11009 12.2503C7.1894 12.1502 7.23255 12.0262 7.23253 11.8985V6.59121C7.23253 6.41078 7.30419 6.23774 7.43175 6.11016C7.55931 5.98256 7.73234 5.91088 7.91276 5.91084H9.04653C9.22694 5.91088 9.39996 5.98256 9.52753 6.11016C9.65509 6.23774 9.72676 6.41078 9.72676 6.59121V11.5168C9.72676 11.5168 10.0106 11.402 10.2871 11.2853C10.3898 11.2418 10.4775 11.1691 10.5391 11.0762C10.6008 10.9833 10.6337 10.8742 10.6338 10.7627V4.89062C10.6338 4.71023 10.7055 4.53723 10.833 4.40966C10.9606 4.2821 11.1335 4.21043 11.3139 4.21039H12.4477C12.6281 4.21039 12.8011 4.28205 12.9287 4.40962C13.0563 4.53719 13.1279 4.71021 13.1279 4.89062V9.72616C14.1109 9.01378 15.107 8.15704 15.8975 7.1268C16.0122 6.97727 16.0881 6.80166 16.1184 6.61568C16.1487 6.4297 16.1325 6.23909 16.0712 6.06088C15.7053 5.00809 15.1237 4.04328 14.3635 3.22818C13.6033 2.4131 12.6814 1.76567 11.6566 1.32735C10.6319 0.889027 9.5269 0.669458 8.41241 0.682694C7.29793 0.695929 6.19849 0.941678 5.18445 1.40421C4.17039 1.86675 3.26406 2.53588 2.52346 3.3688C1.78286 4.2017 1.22429 5.18006 0.883496 6.24125C0.542707 7.30242 0.427202 8.42306 0.544372 9.53144C0.661542 10.6398 1.00881 11.7115 1.56395 12.678C1.66065 12.8447 1.80293 12.9804 1.97406 13.0691C2.14518 13.1577 2.33806 13.1957 2.53003 13.1786C2.74448 13.1597 3.01149 13.133 3.32895 13.0957C3.46715 13.08 3.59474 13.014 3.68741 12.9103C3.78009 12.8066 3.83137 12.6725 3.83149 12.5334L3.83136 8.28705Z" fill="#4691BC" />
                                                    <path d="M3.80664 15.1495C5.0017 16.0189 6.414 16.5408 7.88727 16.6573C9.36055 16.7738 10.8373 16.4806 12.1543 15.8098C13.4712 15.1391 14.5768 14.1171 15.349 12.857C16.1211 11.5969 16.5295 10.1477 16.5291 8.66983C16.5291 8.48541 16.5206 8.30297 16.5083 8.12158C13.5815 12.4867 8.17745 14.5275 3.80689 15.1488" fill="#979695" />
                                                </svg>
                                                <div className="">Etherscan</div>
                                            </div>
                                            <div className="flex items-center space-x-2 bg-black bg-opacity-25 rounded-md py-1 px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
                                                    <path d="M5.2775 18.5003L9.60218 15.8077V10.3093C9.60218 10.202 9.58315 10.099 9.5509 10.0005L5.18225 12.7201C5.24381 12.8661 5.2775 13.0253 5.2775 13.1896V18.5003Z" fill="#FFF200" />
                                                    <path d="M4.32466 0.5L0 3.19263V8.69103C0 8.79836 0.0190578 8.90132 0.0513096 8.99986L4.41996 6.28021C4.35839 6.13421 4.32466 5.97503 4.32466 5.81077V0.5Z" fill="#21DFF3" />
                                                    <path d="M4.56593 6.53271L0.18335 9.26182C0.257382 9.3655 0.352671 9.45602 0.465553 9.52684L4.70959 12.1691C4.83859 12.2494 4.94854 12.3509 5.03651 12.4677L9.4198 9.73929C9.34579 9.63566 9.25049 9.54509 9.13761 9.47427L4.89357 6.83203C4.76383 6.75098 4.65461 6.64951 4.56593 6.53271Z" fill="#FF0078" />
                                                    <path d="M4.32483 18.5004V13.6211L0.420166 16.0698L4.32483 18.5004Z" fill="#A42EFF" />
                                                </svg>
                                                <div className="">Blockchair</div>
                                            </div>
                                            <div className="flex items-center space-x-2 bg-black bg-opacity-25 rounded-md py-1 px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <g clip-path="url(#clip0_1860_12121)">
                                                        <path d="M10.4856 2.58939C11.4418 1.62946 12.8405 1.6093 13.6148 2.38662C14.3906 3.1654 14.3697 4.57289 13.4128 5.53348L11.7969 7.15564C11.602 7.35128 11.6027 7.66786 11.7983 7.86274C11.9939 8.05763 12.3105 8.05701 12.5054 7.86137L14.1213 6.23921C15.3955 4.96007 15.5555 2.91785 14.3233 1.68088C13.0896 0.442449 11.0519 0.603857 9.7771 1.88366L6.54533 5.12796C5.27113 6.4071 5.11116 8.44934 6.34334 9.68631C6.53822 9.88195 6.8548 9.88256 7.05044 9.68768C7.24608 9.4928 7.2467 9.17621 7.05181 8.98057C6.27604 8.20179 6.29694 6.79428 7.2538 5.8337L10.4856 2.58939Z" fill="white" />
                                                        <path d="M9.65661 6.31391C9.46173 6.11827 9.14514 6.11765 8.9495 6.31254C8.75386 6.50742 8.75325 6.824 8.94813 7.01964C9.72391 7.79843 9.70302 9.20591 8.74615 10.1665L5.5144 13.4108C4.55818 14.3708 3.15946 14.3909 2.38515 13.6136C1.60937 12.8348 1.63027 11.4273 2.58714 10.4667L4.20303 8.84454C4.39792 8.6489 4.3973 8.33232 4.20166 8.13743C4.00602 7.94255 3.68944 7.94316 3.49456 8.1388L1.87866 9.76097C0.604462 11.0401 0.444489 13.0824 1.67667 14.3193C2.91032 15.5578 4.94802 15.3964 6.22287 14.1166L9.45462 10.8722C10.7288 9.59308 10.8888 7.55088 9.65661 6.31391Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1860_12121">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="">Link</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:mb-3 inline-block xl:block max-w-full  xl:border-b xl:border-white xl:border-opacity-5 pb-1">
                                <div className="text-neutral-400 hidden xl:block">Block confirmations</div>
                                <div className="items-center gap-[7px] flex xl:flex max-w-full">
                                    <div className="xl:text-[20px] xl:font-medium break-words w-[calc(100%-20px)] xl:w-auto inline-block xl:block">
                                        <span className="text-red-500 text-xl font-semibold">1</span>
                                        <span className="text-white text-xl font-semibold">/4</span>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:mb-3 inline-block xl:block max-w-full xl:border-b xl:border-white xl:border-opacity-5 pb-2">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="text-neutral-400 hidden xl:block">Receiving time</div>
                                        <div className="items-center gap-[7px] flex xl:flex max-w-full">
                                            <div className="xl:text-[20px] xl:font-medium break-words w-[calc(100%-20px)] xl:w-auto inline-block xl:block">
                                                <span className="text-white text-xl font-medium leading-[30px]">Few seconds ago </span>
                                                <span className="text-neutral-400 text-xl font-normal leading-[30px]">(15.11.2022 06:58:32)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-neutral-400 hidden xl:block">Hit the block</div>
                                        <div className="items-center gap-[7px] flex xl:flex max-w-full">
                                            <div className="xl:text-[20px] xl:font-medium break-words w-[calc(100%-20px)] xl:w-auto inline-block xl:block">
                                                <span className="text-white text-xl font-medium leading-[30px]">Few seconds ago </span>
                                                <span className="text-neutral-400 text-xl font-normal leading-[30px]">(15.11.2022 06:58:32)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:mb-3 inline-block xl:block max-w-full pb-2">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="text-neutral-400 hidden xl:block">Sum</div>
                                        <div className="items-center gap-[7px] flex xl:flex max-w-full font-medium text-xl">16 USDT</div>
                                    </div>
                                    <div>
                                        <div className="text-neutral-400 hidden xl:block">Commission</div>
                                        <div className="items-center gap-[7px] flex xl:flex max-w-full font-medium text-xl">0,000221 ETH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 align-strech mb-5 order-1 xl:order-3 -mx-6 xl:mx-0">
                    <div className="xl:bg-neutral-700 xl:rounded-2xl xl:shadow grow flex px-5 xl:pt-5 xl:pb-8 relative">
                        <div className="w-[calc(84%-14px)] xl:w-[calc(75%-32px)] h-[0px] top-3.5 xl:top-[52px] absolute border-b xl:border-b-2 border-dashed border-neutral-500 border-opacity-50"></div>
                        {[{
                            icon: <MapSign className={`${iconClass} text-green-900`} />,
                            title: `Choose Your Pair`,
                            text: `Pick the cryptocurrency pair you'd like to exchange.`,
                            bgicon: `bg-green-400`,
                            colortitle: `text-green-400`,
                            colortext: `text-neutral-400`
                        }, {
                            icon: <TakeMoney className={`${iconClass} text-neutral-700`} />,
                            title: `Make a Deposit`,
                            text: `Send the amount you wish to exchange`,
                            bgicon: `bg-green-400`,
                            colortitle: `text-green-400`,
                            colortext: `text-neutral-400`
                        }, {
                            icon: <Exchange className={`${iconClass} text-neutral-500`} />,
                            title: `Patience is Key`,
                            text: `Wait a bit while we process your exchange`,
                            bgicon: `bg-white`,
                            colortitle: `text-white font-bold`,
                            colortext: `text-neutral-400`
                        }, {
                            icon: <Done className={`${iconClass} text-neutral-500`} />,
                            title: `All Done!`,
                            text: `Congratulations! Your exchange is now complete. Enjoy your new crypto!`,
                            bgicon: `bg-zinc-400`,
                            colortitle: `text-zinc-400`,
                            colortext: `text-neutral-400`
                        }].map((item, index) => <div className={`${index < 3 ? `w-[28%]` : `w-[16%]`} xl:w-1/4 relative`} key={index}>
                            <div className={`w-[1.7rem] xl:w-16 h-[1.7rem] xl:h-16 ${item.bgicon} rounded-full justify-center items-center flex mb-1 xl:mb-5`}>
                                {item.icon}
                            </div>
                            <div className="xl:pr-8 max-w-[14rem]">
                                <div className={`text-[11px] xl:text-base ${item.colortitle}`}>{item.title}</div>
                                <div className={`${item.colortext} text-opacity-75 text-[13px] leading-tight hidden xl:block`}>{item.text}</div>
                            </div>
                        </div>)}
                    </div>
                    <Notification />
                </div>
                <div className="bg-neutral-700 p-5 xl:hidden order-5 -mx-4 mb-5">
                    <div className="text-[20px] mb-3">Email notifications</div>
                    <div className="flex gap-2.5 mb-3">
                        <input className="grow p-2.5 bg-neutral-500 rounded-md border border-black border-opacity-10" value={data.email} onChange={e => setData(prev => ({
                            ...prev,
                            email: e.target.value
                        }))} />
                        <button className="shrink-0 py-2.5 px-8 bg-fuchsia-900 rounded-md shadow hover:shadow-lg text-pink-100">Save</button>
                    </div>
                    <div className="text-neutral-200 text-[13px]">Enter your email (e.g., andrew@gmail.com) if you&quot;d like to receive updates about your order status. Click &quot;Save&quot; to confirm.</div>
                </div>
                <div className="-mx-6 px-6 py-4 xl:mx-0 xl:px-8 xl:py-8 bg-neutral-700 xl:rounded-2xl xl:shadow mb-5 order-5 xl:order-5">
                    <div className="text-[20px] xl:text-[24px] xl:font-medium mb-5">Important Facts</div>
                    <ul className="space-y-4 xl:space-y-5 text-stone-300 max-w-4xl">
                        {[{
                            icon: <HandOk className={iconFactsClass} />,
                            text: `Please note, your exchange transaction will be confirmed after 4 Ethereum network confirmations`
                        }, {
                            icon: <Info className={iconFactsClass} />,
                            text: `Please note, your exchange transaction will be confirmed after 4 Ethereum network confirmations`
                        }, {
                            icon: <ArrowForward className={iconFactsClass} />,
                            text: `Please note, your exchange transaction will be confirmed after 4 Ethereum network confirmations`
                        }, {
                            icon: <Revote className={iconFactsClass} />,
                            text: `Please note, your exchange transaction will be confirmed after 4 Ethereum network confirmations`
                        }, {
                            icon: <Time className={iconFactsClass} />,
                            text: `Please note, your exchange transaction will be confirmed after 4 Ethereum network confirmations`
                        }].map((item, index) => <li key={index} className="items-center gap-3.5 flex">
                            <div className="w-[35px] h-[35px] xl:w-[54px] xl:h-[54px] bg-black bg-opacity-25 rounded-full flex items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <p>{item.text}</p>
                        </li>)}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
