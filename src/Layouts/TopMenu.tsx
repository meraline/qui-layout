import { useLayout } from "@/Contexts/LayoutContext";
import Chat from "@/Icons/Chat";
import TopMenuLink from "./TopMenuLink";
import TelegramIcon from '@/Icons/TopMenu/Telegram';
import FaqIcon from '@/Icons/TopMenu/Faq';
import FeedbackIcon from '@/Icons/TopMenu/Feedback';
import LiveChatIcon from '@/Icons/TopMenu/LiveChat';
import ArrowDown from '@/Icons/ArrowForward';

export default function TopMenu() {

    const {
        setFeedbackModal,
        contactMenu,
        setContactMenu
    } = useLayout();

    return <div className="items-center gap-9 inline-flex hidden xl:flex">
        <TopMenuLink href={`/step2`}>Exchange</TopMenuLink>
        <TopMenuLink href={`/maintenance`}>How it works</TopMenuLink>
        <TopMenuLink href={`/404`}>Blog</TopMenuLink>
        <TopMenuLink href={`/how`}>For partners</TopMenuLink>
        <TopMenuLink href={`/wallet`}>Wallet</TopMenuLink>
        <TopMenuLink href={`/support`}>AML</TopMenuLink>
        <div className="relative">
            <a className="items-center gap-1 flex"
                href="#"
                onClick={e => {
                    e.preventDefault();
                    setContactMenu((prev: boolean) => !prev)
                }}>
                <Chat className="w-6 h-6" />
                <div className="">Contact us</div>
                <ArrowDown className={`w-3 h-auto hidden xl:block transition duration-500`} />
            </a>
            <div className="relative z-50">
                <div className={`absolute w-[222px] p-8 bg-neutral-600 bg-opacity-90 rounded-lg right-0 top-4 transition duration-500 ${contactMenu ? `` : `pointer-events-none opacity-0`}`}>
                    <div className="grid grid-cols-1 gap-4">
                        <a href="#" className="flex items-center text-zinc-300">
                            <TelegramIcon className="w-6 h-6 mr-4" />
                            <div className="">Telegram</div>
                        </a>
                        <a href="#" className="flex items-center text-zinc-300">
                            <LiveChatIcon className="w-6 h-6 mr-4" />
                            <div className="">Live chat</div>
                        </a>
                        <a href="#" className="flex items-center text-zinc-300"
                            onClick={e => {
                                e.preventDefault();
                                setContactMenu(false)
                                setFeedbackModal(true)
                            }}>
                            <FeedbackIcon className="w-6 h-6 mr-4" />
                            <div className="">Leave feedback</div>
                        </a>
                        <a href="#" className="flex items-center text-zinc-300">
                            <FaqIcon className="w-6 h-6 mr-4" />
                            <div className="">FAQ</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div >
}