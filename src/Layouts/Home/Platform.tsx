import PlatformBg from "@/images/platformbg.svg"
import PlatformImage from "@/images/platform.png"
import Hand from "@/images/platform/hand.svg"
import Incognito from "@/images/platform/incognito.svg"
import Password from "@/images/platform/password.svg"
import Settings from "@/images/platform/settings.svg"
import Wallet from "@/images/platform/wallet.svg"
import Image from "next/image"

export default function Platform(props: Object) {


    const items = [
        {
            image: Hand.src,
            text: `Мы  уважаем вашу приватность.`
        },
        {
            image: Incognito.src,
            text: `Мы не требуем регистрации`
        },
        {
            image: Password.src,
            text: `Без удержания ваших средств`
        },
        {
            image: Settings.src,
            text: `Мы работаем полностью в автоматическом режиме`
        },
        {
            image: Wallet.src,
            text: `Без скрытых комиссий`
        },
    ]

    return <div className="bg-center bg-cover mb-16">
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="text-center mb-5 xl:mb-16">
                <div className="text-[26px] xl:text-[34px] uppercase mb-6">Non-custodial exchange platform</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div>

            <div className="flex xl:grid grid-cols-[2fr_3fr] gap-12">
                <div className="relative justify-end hidden xl:flex">
                    <div className="flex justify-center items-center">
                        <Image width="715" height="698" alt="" className="absolute max-w-none" src={PlatformBg.src} />
                        <div className="overflow-hidden rounded-2xl relative">
                            <Image width={210} height={456} alt="" className="block" src={PlatformImage.src} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-violet-100 mb-12 text-xl xl:text-[28px] text-center xl:text-left">
                        <span className="">Quickex retains your privacy and guarantees security.</span>
                        <span className="font-semibold">We are a non-custodial exchange service</span>
                    </div>
                    <div className="flex flex-col gap-6">
                        {items.map((item, index) => <div key={index}>
                            <div className="flex space-x-6 items-center">
                                <div className="shrink-0 w-[42px] h-[42px] relative bg-fuchsia-900 bg-opacity-75 rounded-[32px] flex items-center justify-center">
                                    <Image width={24} height={24} className="w-6 h-6" src={item.image} alt="" />
                                </div>
                                <div className="xl:text-2xl">{item.text}</div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}