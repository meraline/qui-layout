import Chart from "@/images/chart.png"
import PrimaryButton from "@/Components/PrimaryButton"
import SecondaryButton from "@/Components/SecondaryButton"
import ModalBg from "@/images/modalbg.svg"
import Close from "@/Icons/Close"
import { useLayout } from "@/Contexts/LayoutContext"
import Image from "next/image"

export default function Attention() {

    const { setModal } = useLayout();

    return <div className="w-full max-w-[612px] mx-auto bg-neutral-700 py-10 px-5 rounded-[22px] bg-no-repeat relative" style={{
        backgroundImage: `url('${ModalBg.src}')`,
        backgroundPositionX: `center`,
        backgroundPositionY: `-700px`,
    }}
        onClick={e => e.stopPropagation()}>
        <a href="#" className="absolute right-8 top-8 p-2" onClick={e => setModal(null)}>
            <Close className="w-3.5 h-3.5" />
        </a>
        <div className="">
            <div className="text-center flex-col items-center gap-3 flex text-white mb-6">
                <div className="justify-center flex">
                    <Image width={46} height={39} alt="" className="w-12 h-auto" src={Chart.src} />
                </div>
                <div className="text-[26px] font-medium">Attention! High network commissions!</div>
                <div className="text-neutral-200">Note that when you send a transaction and consolidate the funds received in this direction, a significant portion of the total amount of exchange is made up by network commissions. As a result, your exchange for this amount can be very unprofitable.</div>
                <div className="text-neutral-200">
                    <span className="">If you want to know more about this problem, we recommend you to read this </span>
                    <span className="font-semibold underline">article about this.</span>
                </div>
            </div>
            <div className="gap-5 flex flex-col xl:flex-row">
                <SecondaryButton disabled={false} className="rounded-xl grow">Cancel exchange</SecondaryButton>
                <PrimaryButton disabled={false} className="rounded-xl shrink-0">I understand and want to continue</PrimaryButton>
            </div>
        </div>
    </div>
}