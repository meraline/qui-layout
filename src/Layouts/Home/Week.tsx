import Star from "@/images/week/star.svg"
import Rocket from "@/images/week/rocket.svg"
import Wallet from "@/images/week/wallet.svg"
import Image from "next/image"

export default function Week(props: Object) {

    const items = [{
        image: Wallet.src,
        title: `Number of exchanges`,
        text: `42 890`
    }, {
        image: Star.src,
        title: `The most popular pair`,
        text: `USDT - BTC`
    }, {
        image: Rocket.src,
        title: `Average exchange time`,
        text: `18,4 min`
    },]

    return <div className="bg-center bg-cover mb-12 xl:mb-24">
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="text-center mb-5 xl:mb-16">
                <div className="text-[26px] xl:text-[34px] uppercase mb-4">WEEK STATISTICS</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div>
            <div className="gap-6 xl:gap-10 grid grid-cols-1 xl:grid-cols-3 mb-12 xl:mb-16">
                {items.map((item, index) => <div key={index}>
                    <div className="px-6 xl:px-7 py-6 xl:pt-9 xl:pb-9 bg-neutral-700 rounded-[22px] flex flex-col items-center">
                        <Image width={64} height={64}className="w-16 xl:w-24 h-auto mb-6" src={item.image} alt="" />
                        <div className="text-zinc-500">{item.title}</div>
                        <div className="text-transparent bg-clip-text  bg-gradient-to-r from-[#90287B] to-[#9E2A5F] shadow-numbers text-[32px] xl:text-[40px] font-bold">{item.text}</div>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}