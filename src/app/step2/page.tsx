
'use client'


import Layout from '@/Layouts/Layout';
import Gradient from "@/images/gradient.svg"
import Qr from "@/images/qr.svg"
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
import PrimaryButton from '@/Components/PrimaryButton';
import RedInfo from '@/Icons/RedInfo';
import Notification from '@/Components/Notification';
import { useState } from 'react';
import Image from 'next/image';

export default function Step2() {

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
                            <div className="w-1/2 xl:w-auto pr-2 xl:pr-0">
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
                            <div className="xl:hidden">
                                <div className="p-4 bg-zinc-800 rounded-t-xl">
                                    <Image width="133" height="142" src={Qr.src} alt="" className="w-full h-auto" />
                                </div>
                                <div className="flex text-center text-white text-[11px]">
                                    <div className="w-1/2 rounded-bl-xl rounded-br-xl bg-zinc-800 p-1.5">With sum</div>
                                    <div className="w-1/2 rounded-bl-xl rounded-br-xl bg-neutral-800 p-1.5">Address</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-700 xl:rounded-2xl xl:shadow grow flex gap-5 p-5 xl:pb-12">
                        <div className="max-w-full xl:grow">
                            <div className="text-[24px] font-medium mb-5 hidden xl:block">Send funds to the address below</div>
                            <div className="">
                                <span className="text-lg xl:hidden"> Send </span>
                                <div className="xl:mb-3 inline-block xl:block">
                                    <div className="text-neutral-400 hidden xl:block">Amount</div>
                                    <div className="items-center gap-[7px] inline-flex xl:flex">
                                        <div className="text-[18px] xl:text-[20px] font-medium">0.00341563 ETH</div>
                                        <Copy className="w-4 h-4 text-neutral-400 shrink-0" />
                                    </div>
                                </div>
                                <span className="text-lg xl:hidden"> to the address: </span>
                                <div className="xl:mb-3 inline-block xl:block max-w-full">
                                    <div className="text-neutral-400 hidden xl:block">Quickex address (BTC)</div>
                                    <div className="items-center gap-[7px] inline-flex xl:flex max-w-full">
                                        <div className="xl:text-[20px] xl:font-medium break-words w-[calc(100%-20px)] xl:w-auto inline-block xl:block">0xd1286680fa2955c68F829aCC24dd11894185f722</div>
                                        <Copy className="w-4 h-4 text-neutral-400 shrink-0" />
                                    </div>
                                </div>
                                <div className="text-neutral-400 text-[11px] xl:hidden">Receive address:</div>
                                <div className="w-[316px] text-white text-[11px] xl:hidden">0xdac17f958d2ee523a2206206994597c13d831ec7</div>
                                <div className="xl:mb-3 hidden xl:block">
                                    <div className="text-neutral-400">Tiime remaining</div>
                                    <div className="text-xl font-medium ">28:19</div>
                                    <div className="flex space-x-3 text-rose-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25C2.41421 11.25 2.75 11.5858 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C11.5858 2.75 11.25 2.41421 11.25 2ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V12.25H16C16.4142 12.25 16.75 12.5858 16.75 13C16.75 13.4142 16.4142 13.75 16 13.75H12C11.5858 13.75 11.25 13.4142 11.25 13V9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="currentColor" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.09958 2.39754C9.24874 2.78396 9.05641 3.21814 8.66999 3.36731C8.52855 3.42191 8.38879 3.47988 8.2508 3.54114C7.87221 3.70921 7.42906 3.53856 7.261 3.15997C7.09293 2.78139 7.26358 2.33824 7.64217 2.17017C7.80267 2.09892 7.96526 2.03147 8.1298 1.96795C8.51623 1.81878 8.95041 2.01112 9.09958 2.39754ZM5.6477 4.24026C5.93337 4.54021 5.92178 5.01495 5.62183 5.30061C5.51216 5.40506 5.40505 5.51216 5.30061 5.62183C5.01495 5.92178 4.54021 5.93337 4.24026 5.6477C3.94031 5.36204 3.92873 4.88731 4.21439 4.58736C4.33566 4.46003 4.46002 4.33566 4.58736 4.21439C4.88731 3.92873 5.36204 3.94031 5.6477 4.24026ZM3.15997 7.261C3.53856 7.42907 3.70921 7.87222 3.54114 8.2508C3.47988 8.38879 3.42191 8.52855 3.36731 8.66999C3.21814 9.05641 2.78396 9.24874 2.39754 9.09958C2.01112 8.95041 1.81878 8.51623 1.96795 8.12981C2.03147 7.96526 2.09892 7.80267 2.17017 7.64217C2.33824 7.26358 2.78139 7.09293 3.15997 7.261Z" fill="currentColor" />
                                        </svg>
                                        <div className="text-xl">Order expired</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-zinc-300 w-[286px] shrink-0 hidden xl:block">
                            <Image width="133" height="142" src={Qr.src} alt="" className="w-32 h-auto mb-4 block" />
                            <div className=" text-sm font-semibold mb-2">To send funds without using a QR-code, follow these steps:</div>
                            <ol className="list-decimal space-y-1.5 list-inside">
                                <li>Open your cryptocurrency wallet application</li>
                                <li>Look for the &lsquo;Send&rsquo; or &lsquo;Transfer&rsquo; option.</li>
                                <li>
                                    <span className="">If required, ensure you select the </span>
                                    <span className="font-semibold ">TRC20</span>
                                    <span className=""> network</span></li>
                                <li>Make sure you have enough funds to cover both the transfer amount and the blockchain transaction fee (also known as gas).</li>
                                <li>Enter the given address and amount.</li>
                                <li>Confirm and proceed to send your cryptocurrency.</li>
                            </ol>
                        </div>
                    </div>
                </div>


                <div className="-mx-6 px-6 py-4 xl:mx-0 xl:px-8 xl:py-8 bg-neutral-700 xl:rounded-2xl xl:shadow mb-5 order-5 xl:order-5">
                    <div className="flex items-center mb-4">
                        <RedInfo className='w-8 h-8 mr-2' />
                        <div className="text-[22px] font-medium">Oops! Your Order Has Expired!</div>
                    </div>
                    <div className=" mb-4">
                        <span className="text-zinc-400 text-lg font-medium">You Sent Your Funds?<br /></span>
                        <span className="text-zinc-400 text-lg font-normal">No worries, we&quot;ve got you covered. If your transaction reaches us within the next 24 hours, you can choose one of the following options:<br />  </span>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="option2" className="flex items-center relative">
                            <input type="radio" name="option" id="option2" className="hidden peer" />
                            <div className="w-3 h-3 bg-stone-300 rounded-full hidden peer-checked:flex absolute left-[5px]" />
                            <div className="w-[22px] h-[22px] bg-neutral-500 rounded-full mr-3 shrink-0" />
                            <div>
                                <span className="text-white text-lg font-medium">Continue With the Exchange</span>
                                <span className="text-white text-lg font-normal"> - We&quot;ll process your transaction at the current market rate.</span>
                            </div>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="option1" className="flex items-center relative">
                            <input type="radio" name="option" id="option1" className="hidden peer" />
                            <div className="w-3 h-3 bg-stone-300 rounded-full hidden peer-checked:flex absolute left-[5px]" />
                            <div className="w-[22px] h-[22px] bg-neutral-500 rounded-full mr-3 shrink-0" />
                            <div>
                                <span className="text-white text-lg font-medium">Request a Refund</span>
                                <span className="text-white text-lg font-normal"> – We&quot;ll return the funds you sent, minus the applicable network fee.</span>
                            </div>
                        </label>
                    </div>
                    <PrimaryButton disabled={false}>Continue exchange</PrimaryButton>
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
                            bgicon: `bg-white`,
                            colortitle: `text-white font-bold`,
                            colortext: `text-neutral-400`
                        }, {
                            icon: <Exchange className={`${iconClass} text-neutral-500`} />,
                            title: `Patience is Key`,
                            text: `Wait a bit while we process your exchange`,
                            bgicon: `bg-zinc-400`,
                            colortitle: `text-zinc-400`,
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
