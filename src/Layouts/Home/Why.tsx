import Arrows from "@/images/why/arrows.svg"
import Chart from "@/images/why/chart.svg"
import Flash from "@/images/why/flash.svg"
import Image from "next/image"

export default function Why(props: Object) {

    const items = [{
        image: Flash.src,
        title: `Best Exchange Rates`,
        text: `Leverage the power of Quickex to maximize your crypto assets' worth. By partnering with esteemed crypto trading platforms, we ensure the most lucrative deals for our users. We pledge to offer the most competitive exchange rates in the market.`
    }, {
        image: Arrows.src,
        title: `Fast transactions`,
        text: `Trade your crypto assets at Quickex and witness the efficiency of our swift transactions. Our strategic collaborations with reputable crypto trading platforms empower us to identify and deliver the best offers promptly.`
    }, {
        image: Chart.src,
        title: `Respectful and Transparent Service`,
        text: `At Quickex, we value your privacy and prioritize maintaining control of your funds in your hands. You have the ability to monitor your transaction at every stage and oversee the entire process. We refrain from storing coins - after the exchange, they are directly sent to your wallet.`
    },]

    return <div className="bg-center bg-cover mb-12 xl:mb-16">
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="text-center mb-5 xl:mb-16">
                <div className="text-[26px] xl:text-[34px] uppercase mb-4">Why choose Quickex crypto exchange</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div>
            <div className="gap-8 grid grid-cols-1 xl:grid-cols-3 mb-[68px] px-4 xl:px-0">
                {items.map((item, index) => <div key={index}>
                    <div className="space-y-2 flex flex-col">
                        <Image width={156} height={156}className="w-60 h-auto self-center xl:self-start -mx-10 -mt-10 -mb-4" src={item.image} alt="" />
                        <div className="text-zinc-100 text-xl font-semibold">{item.title}</div>
                        <div className="text-violet-100">{item.text}</div>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}