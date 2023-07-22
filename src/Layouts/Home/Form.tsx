import Change from '../../Icons/Change';
import RedInfo from '../../Icons/RedInfo';
import Shield from '../../Icons/Shield';
import Locked from '../../Icons/Locked';
import UnLocked from '../../Icons/UnLocked';
import PrimaryButton from '@/Components/PrimaryButton';
import Attention from '../../Modals/Attention';
import { useLayout } from '../../Contexts/LayoutContext';
import InfoRate from '../../Modals/InfoRate';
import Dropdown from '@/Components/Dropdown';
import { useState } from 'react';

export default function Form() {

    const { setModal } = useLayout();

    const [locked, setLocked] = useState<boolean>(false)

    return <div className="xl:pt-7 flex flex-col items-center xl:pb-96">
        <div className="w-full max-w-lg xl:max-w-[928px] p-[25px] xl:bg-neutral-600 xl:bg-opacity-50 xl:rounded-xl xl:backdrop-blur-sm">
            <div className="flex flex-col xl:flex-row xl:space-x-[21px]">
                <div className="grow">
                    <div className="relative flex flex-col justify-center">
                        <div className="absolute right-4 xl:right-6">
                            <Dropdown />
                        </div>
                        <label className="absolute left-4 top-6 xl:top-[21px] xl:left-6 text-neutral-400 text-[11px] xl:text-base">You send</label>
                        <input className="leading-relaxed bg-neutral-700 xl:bg-white w-full pt-10 xl:pt-12 pb-4 xl:pb-5 pl-4 xl:pl-6 pr-36 rounded-xl outline outline-2 outline-rose-600 text-rose-600 text-xl xl:text-2xl" defaultValue="50" />
                        <div className="absolute z-10 top-full mt-1 text-white bg-rose-700 backdrop-blur-[50px] bg-opacity-50 rounded-[11px] px-4 py-1 flex items-center">
                            <svg className="w-10 h-auto absolute top-0 -translate-y-full text-rose-700 opacity-50" viewBox="0 0 42 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29 0L38 9L20 9L29 0Z" fill="currentColor" />
                            </svg>
                            <RedInfo className="w-[22px] h-[22px] mr-2" />
                            <span>Minimum ammount: <span className="ont-bold">100 USDT</span></span>
                        </div>
                    </div>
                    <div className="flex justify-between text-white text-[13px] px-6 py-3.5">
                        <div className="w-4/5">1 USDT ≈ 0.0054 BTC</div>
                        <div className="w-1/5">50 $</div>
                    </div>
                </div>
                <div className="shrink-0 flex justify-end -mt-6 xl:mt-8 mb-3 xl:mb-0">
                    <Change className="w-7 h-7 rotate-[90deg] xl:rotate-[0deg]" />
                </div>
                <div className="grow">
                    <div className="relative flex flex-col justify-center">
                        <div className="absolute right-4 xl:right-6">
                            <Dropdown />
                        </div>
                        <label className="absolute top-5 left-6 text-neutral-400 text-[11px] xl:text-base">You receive</label>
                        <input className="leading-relaxed bg-neutral-700 xl:bg-white w-full pt-10 xl:pt-12 pb-4 xl:pb-5 pl-4 xl:pl-6 pr-36 rounded-xl text-white xl:text-pink-950 text-xl xl:text-2xl" defaultValue="0,00544" />
                    </div>
                    <div className="flex justify-between text-white text-[13px] px-6 py-3.5">
                        <div className="w-4/5">1 USDT ≈ 0.0054 BTC</div>
                        <div className="w-1/5">50 $</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:space-x-6">
                <div className="grow mb-4 xl:mb-0">
                    <div className="relative flex flex-col justify-center">
                        <div className="absolute right-4 xl:right-6 text-white xl:text-pink-950">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4221 9.44434C10.1628 9.44434 9.91409 9.54735 9.73072 9.73072C9.54735 9.91409 9.44434 10.1628 9.44434 10.4221V14.3332H14.3332V9.44434H10.4221ZM13.111 13.111H10.6666V10.6666H13.111V13.111Z" fill="currentColor" />
                                <path d="M9.44434 25.5776C9.44434 25.8369 9.54735 26.0856 9.73072 26.269C9.91409 26.4524 10.1628 26.5554 10.4221 26.5554H14.3332V21.6665H9.44434V25.5776ZM10.6666 22.8887H13.111V25.3332H10.6666V22.8887Z" fill="currentColor" />
                                <path d="M21.6665 26.5554H25.5776C25.8369 26.5554 26.0856 26.4524 26.269 26.269C26.4524 26.0856 26.5554 25.8369 26.5554 25.5776V21.6665H21.6665V26.5554ZM22.8887 22.8887H25.3332V25.3332H22.8887V22.8887Z" fill="currentColor" />
                                <path d="M25.5776 9.44434H21.6665V14.3332H26.5554V10.4221C26.5554 10.1628 26.4524 9.91409 26.269 9.73072C26.0856 9.54735 25.8369 9.44434 25.5776 9.44434ZM25.3332 13.111H22.8887V10.6666H25.3332V13.111Z" fill="currentColor" />
                                <path d="M19.2223 13.1109V11.8887H16.7778V14.3331H18.0001V13.1109H19.2223Z" fill="currentColor" />
                                <path d="M14.3335 14.3335H15.5557V15.5557H14.3335V14.3335Z" fill="currentColor" />
                                <path d="M15.5557 15.5557H18.0001V16.7779H15.5557V15.5557Z" fill="currentColor" />
                                <path d="M19.2223 10.6666V11.8888H20.4446V9.44434H15.5557V11.8888H16.7779V10.6666H19.2223Z" fill="currentColor" />
                                <path d="M9.44434 15.5557H10.6666V18.0001H9.44434V15.5557Z" fill="currentColor" />
                                <path d="M14.3332 16.7779V18.0001H13.111V15.5557H11.8888V18.0001H10.6666V19.2223H9.44434V20.4446H11.8888V19.2223H13.111V20.4446H14.3332V19.2223H15.5554V16.7779H14.3332Z" fill="currentColor" />
                                <path d="M19.2222 16.778H20.4444V18.0002H21.6667V16.778H22.8889V15.5558H20.4444V13.1113H19.2222V14.3336H18V15.5558H19.2222V16.778Z" fill="currentColor" />
                                <path d="M18.0001 25.3336H15.5557V26.5558H20.4446V25.3336H19.2223V24.1113H18.0001V25.3336Z" fill="currentColor" />
                                <path d="M20.4445 19.2223V18.0001H19.2223V16.7778H18.0001V18.0001H16.7778V19.2223H18.0001V20.4445H19.2223V19.2223H20.4445Z" fill="currentColor" />
                                <path d="M25.3335 19.2222H26.5557V20.4444H25.3335V19.2222Z" fill="currentColor" />
                                <path d="M20.4443 19.2222H24.111V20.4444H20.4443V19.2222Z" fill="currentColor" />
                                <path d="M25.3331 15.5557H24.1109V16.7779H22.8887V18.0001H24.1109V19.2223H25.3331V18.0001H26.5553V16.7779H25.3331V15.5557Z" fill="currentColor" />
                                <path d="M19.2222 20.4443H20.4444V24.111H19.2222V20.4443Z" fill="currentColor" />
                                <path d="M15.5557 24.1111H16.7779V22.8888H18.0001V21.6666H16.7779V19.2222H15.5557V24.1111Z" fill="currentColor" />
                                <path d="M32 24V28C32 30.2091 30.2091 32 28 32H24M32 12V8C32 5.79086 30.2091 4 28 4H24M12 32H8C5.79086 32 4 30.2091 4 28V24M4 12V8C4 5.79086 5.79086 4 8 4H12" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <label className="absolute top-5 left-6 text-[11px] xl:text-base text-neutral-400">Destination address</label>
                        <input className="leading-relaxed bg-neutral-700 xl:bg-white w-full pt-10 xl:pt-12 pb-4 xl:pb-5 pl-4 xl:pl-6 pr-16 rounded-xl text-white xl:text-pink-950 text-xl xl:text-2xl" defaultValue="0x3242437a83f854dbae2c4913e514ea58f27a338f" />
                    </div>
                    <label className="space-x-3 items-center pt-5 pb-4 hidden xl:flex" htmlFor="ssdfsf">
                        <input type="checkbox" className="hidden peer" id="ssdfsf" />
                        <div className="w-5 h-5 flex items-center justify-center bg-white rounded-[5px] peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:block peer-checked:after:bg-gray-700 peer-checked:after:rounded" />
                        <div className="">
                            <span className="text-zinc-400 text-[13px]">I agree to the Terms of Use, AML Policy and With Privacy Policy</span>
                        </div>
                    </label>
                </div>
                <div className="grow xl:max-w-[10rem] mb-4 xl:mb-0">
                    <div className="relative flex flex-col justify-center">
                        <label className="absolute top-5 left-6 text-[11px] xl:text-base text-neutral-400 flex items-center space-x-2">
                            <div>Tag/Memo</div>
                            <div className="w-4 h-4 bg-neutral-400 rounded-full justify-center items-center flex relative">
                                <div className="text-white text-[9px]">?</div>
                                <div className="absolute top-0 -translate-y-full -mt-2">
                                    <div className="px-4 py-2 bg-zinc-600 bg-opacity-60 rounded-[11px]">
                                        <div className="text-white text-[13px]">Some&nbsp;text&nbsp;here</div>
                                        <svg className="w-3 h-auto absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 text-zinc-600 text-opacity-60 -mt-px" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6L0 0L12 0L6 6Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <input className="leading-relaxed bg-neutral-700 xl:bg-white w-full pt-10 xl:pt-12 pb-4 xl:pb-5 px-4 xl:px-6 rounded-xl text-white xl:text-pink-950 text-xl xl:text-2xl" defaultValue="924028" />
                    </div>
                    <div className="grow max-w-[10rem] space-x-3 justify-end items-center text-stone-400 pt-5 pb-4 hidden xl:flex">
                        <Shield className="w-4 h-auto" />
                        <div className="text-stone-400">AML Policy</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row">
                <a href="#" className="xl:order-2 xl:mr-3 xl:mt-0 items-center flex mb-3 xl:mb-0" onClick={e => {
                    e.preventDefault()
                    setModal(<InfoRate />)
                }}>
                    <div className="xl:hidden text-[13px] mr-2 text-white">Exchange type:</div>
                    <div className="w-5 h-5 xl:w-[30px] xl:h-[30px] bg-neutral-500 rounded-full justify-center items-center flex">
                        <div className="text-white">?</div>
                    </div>
                </a>
                <div className="bg-white bg-opacity-50 rounded-[11px] backdrop-blur-sm grow xl:self-start flex text-center xl:mr-3 mb-3 xl:mb-0">
                    {!locked ? <>
                        <PrimaryButton disabled={false} className=" w-1/2 font-normal"  rounded="rounded-[11px]">
                            <div className="items-center flex justify-center">
                                <Locked className="w-5 h-5 xl:w-8 xl:h-8" />
                                <div>Fixed (1,0 %)</div>
                            </div>
                        </PrimaryButton>
                        <div className={`py-4 px-4 xl:py-6 xl:px-6 xl:text-lg w-1/2 rounded-[11px]`} onClick={e => setLocked(true)}>
                            <div className="items-center flex justify-center text-zinc-300">
                                <UnLocked className="w-5 h-5 xl:w-8 xl:h-8" />
                                <div>Floating (0,5 %)</div>
                            </div>
                        </div>
                    </> : <>
                        <div className={`py-4 px-4 xl:py-6 xl:px-6 xl:text-lg w-1/2 rounded-[11px]`} onClick={e => setLocked(false)}>
                            <div className="items-center flex justify-center text-zinc-300">
                                <UnLocked className="w-5 h-5 xl:w-8 xl:h-8" />
                                <div>Fixed (1,0 %)</div>
                            </div>
                        </div>
                        <PrimaryButton disabled={false} className=" w-1/2 font-normal"  rounded="rounded-[11px]">
                            <div className="items-center flex justify-center text-zinc-300">
                                <UnLocked className="w-5 h-5 xl:w-8 xl:h-8" />
                                <div>Floating (0,5 %)</div>
                            </div>
                        </PrimaryButton>
                    </>}
                </div>
                <label className="space-x-3 items-center py-3 flex xl:hidden" htmlFor="ssdfsf1">
                    <input type="checkbox" className="hidden peer" id="ssdfsf1" />
                    <div className="w-5 h-5 flex items-center justify-center bg-white rounded-[5px] peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:block peer-checked:after:bg-gray-700 peer-checked:after:rounded" />
                    <div className="">
                        <span className="text-zinc-400 text-[13px]">I agree to the Terms of Use, AML Policy and With Privacy Policy</span>
                    </div>
                </label>
                <div className="grow order-3">
                    <PrimaryButton className="w-full py-[22px] px-6 text-xl text-pink-100 w-1/2 shrink-0" rounded="rounded-[11px]" disabled={false} onClick={() => {
                        setModal(<Attention />)
                    }}><>
                            <Locked className="w-8 h-8" />
                            <div>Exchange now</div>
                        </>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    </div>
}