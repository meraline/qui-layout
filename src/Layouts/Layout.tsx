import { useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import User from '@/Icons/User';
import ArrowDown from '@/Icons/ArrowForward';
import Sky from "@/images/sky.png"
import Telegram from '@/Icons/Telegram';
import Twitter from '@/Icons/Twitter';
import Burger from '@/Icons/Burger';
import { useLayout } from '../Contexts/LayoutContext';
import Feedback from '@/Modals/Feedback';
import TopMenu from './TopMenu';
import countries from '@/data/countries';
import Link from 'next/link';
import Image from 'next/image';

interface LayoutPropsInterface {
    children: string | JSX.Element | JSX.Element[],
    headerbg?: boolean,
    headerbgmobile?: boolean,
}

const Layout: React.FC<LayoutPropsInterface> = ({ children, headerbg = false, headerbgmobile = true }) => {

    const {
        feedbackModal,
        countryMenu,
        setCountryMenu,
        country,
        setCountry,
        modal,
        setModal,
        nooverflow
    } = useLayout();

    useEffect(() => {
        feedbackModal && setCountryMenu(false)
    }, [feedbackModal, setCountryMenu])

    return (
        <div className={`min-h-screen bg-neutral-800 relative ${nooverflow ? `max-h-screen` : ``}`}>
            <div className={`w-full h-[936px] absolute pointer-events-none bg-cover bg-bottom  ${headerbgmobile ? `` : `hidden xl:block`}`} style={headerbg ? { backgroundImage: `url('${Sky.src}')` } : {}} />
            <div className="mx-auto max-w-lg xl:max-w-full relative">
                <header className="text-zinc-100 relative">
                    <div className="container mx-auto flex justify-between items-center py-5">
                        <Link href={'/'} className="block pt-2 ">
                            <ApplicationLogo className="w-[110px] h-auto" />
                        </Link>
                        <div className="items-center gap-[27px] inline-flex">
                            <TopMenu />
                            <div className="flex gap-3 items-center">
                                <a href="#" className="w-7 h-7 bg-opacity-30 bg-violet-100 rounded-full items-center justify-center hidden xl:flex">
                                    <User className="h-3.5 w-auto" />
                                </a>
                                <div className="pr-[18px]">
                                    <a href="#" className="h-7 flex items-center gap-1.5"
                                        onClick={e => {
                                            e.preventDefault();
                                            setCountryMenu((prev: boolean) => !prev)
                                        }}>
                                        <Image width={28} height={28} src={country.flag} className="w-7 h-7" alt="" />
                                        <ArrowDown className={`w-3 h-auto hidden xl:block transition duration-500 ${countryMenu ? `rotate-[180deg]` : ``}`} />
                                    </a>
                                    <div className="relative z-50">
                                        <div className={`absolute w-[240px] xl:w-[480px] p-6 xl:p-8 bg-neutral-600 bg-opacity-90 rounded-lg right-0 top-4 transition duration-500 ${countryMenu ? `` : `pointer-events-none opacity-0`}`}>
                                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                                {countries.map((item, index) => <a key={index}
                                                    href="#"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        setCountry(item)
                                                    }}
                                                    className="flex items-center gap-2.5">
                                                    <Image width={24} height={24} src={item.flag} className="w-6 h-6" alt="" />
                                                    <div className="">{item.title}</div>
                                                </a>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="xl:hidden">
                                    <Burger className="text-white w-6 h-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header >
            </div>
            <main className="">{children}</main>
            <footer className="bg-neutral-900 text-white relative">
                <div className="max-w-lg xl:max-w-none mx-auto">
                    <div className="container mx-auto relative grid grid-cols-2 xl:grid-cols-6 gap-8 py-12">
                        <div className="col-span-2 xl:col-span-1">
                            <ApplicationLogo className="w-[110px] h-auto mb-4" />
                            <div className="flex xl:flex-col space-x-8 xl:space-x-0 items-center xl:items-start">
                                <div className="text-zinc-400 text-[13px] xl:mb-4 w-1/2 xl:w-auto">Trustest and fastest<br />crypto exchanger</div>
                                <div className="w-1/2 xl:w-auto">
                                    <div className="mb-1">Follow us </div>
                                    <div className="items-center gap-2 flex">
                                        <a href="#" className="group">
                                            <Telegram className="w-[22px] h-[22px] text-slate-500 group-hover:scale-110 transition duration-500" />
                                        </a>
                                        <a href="#" className="group">
                                            <Twitter className="w-[22px] h-[22px] text-slate-500 group-hover:scale-110 transition duration-500" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-5">Company</div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">How to works</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">FAQ</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">About us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-5">Partners</div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">Create your own exchanger</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">Affiliates</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">Widget for Wordpress</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">API</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-5">Contact</div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">support@quickex.io</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">@support_quickex</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-5">Contact</div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">Terms and Conditions</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">Privacy Policy</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">AML Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 xl:col-span-6">Popular exchanges</div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2">Exchange</div>
                        <div className="hidden xl:block col-span-4">Buy</div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 xl:hidden">Buy</div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:text-white transition duration-500">XRP to BTC</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div className="border-t border-neutral-500 pt-4 pb-8">© 2018-2023 Quickex.io</div>
                    </div>
                </div>
            </footer>
            {feedbackModal ? <Feedback /> : ``}
            {modal ? <>
                <div className="px-8 text-white fixed w-full h-full top-0 left-0 z-50 bg-black bg-opacity-50 backdrop-blur-[17px] flex flex-col py-16 items-center  overflow-y-auto"
                    onClick={e => setModal(null)}
                >
                    {modal}
                </div>
            </> : ``}
        </div >

    );
}

export default Layout;
