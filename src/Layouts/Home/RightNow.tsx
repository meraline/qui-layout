import RightnowBg from "@/images/rightnowbg.svg"
import RightNowImage from "@/images/rightnow.png"
import Image from "next/image"

export default function RightNow(props: Object) {

    return <div className="flex items-center justify-center mb-16 xl:mt-16">
        <Image width="1440" height="942" alt="" src={RightnowBg.src} className="absolute pointer-events-none w-full" />
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="grid grid-cols-[3fr_2fr] gap-12">
                <div className="pt-12">
                    <div className="text-[40px] font-semibold mb-10">Exchange any crypto right now</div>
                    <div className="text-xl mb-16">Quickex provides you with a number of exchange options from our partners, so you can easily choose any cryptocurrency you like and exchange it instantly without extra fees.  </div>
                    <button className="px-[120px] py-6 bg-gradient-to-r from-fuchsia-800 to-pink-800 rounded-[11px] shadow">
                        <span className="text-pink-100 text-xl font-medium">Exchange now</span>
                    </button>
                </div>
                <div className="relative flex justify-end">
                    <div className="flex justify-center items-center">
                        <div className="overflow-hidden rounded-2xl relative">
                            <Image width={456} height={456} alt="" className="block" src={RightNowImage.src} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}