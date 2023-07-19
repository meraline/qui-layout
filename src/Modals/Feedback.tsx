import PrimaryButton from "@/Components/PrimaryButton";
import { useLayout } from "@/Contexts/LayoutContext";
import Close from "@/Icons/Close";

export default function Feedback() {

    const { setFeedbackModal } = useLayout();

    return <div className="text-white fixed w-full h-full top-0 left-0 z-50 bg-black bg-opacity-50 backdrop-blur-[17px] flex flex-col items-center justify-center">
        <div className="w-full max-w-lg mx-auto bg-stone-900 p-8 rounded-lg">
            <div className="text-2xl font-medium mb-6 flex justify-between">
                <span>Leave feedback</span>
                <a href="#" className="text-zink-400 hover:text-zink-100"
                    onClick={e => {
                        e.preventDefault();
                        setFeedbackModal(false)
                    }}>
                    <Close className="w-3.5 h-3.5" />
                </a>
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label className="text-neutral-400">Your name</label>
                <input className="px-6 py-4 bg-zinc-100 rounded-[11px] text-zinc-600 text-lg" defaultValue="John Doe" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label className="text-neutral-400">Your name</label>
                <input className="px-6 py-4 bg-zinc-100 rounded-[11px] text-zinc-600 text-lg" defaultValue="John Doe" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label className="text-neutral-400">Your name</label>
                <textarea className="px-6 py-4 bg-zinc-100 rounded-[11px] text-zinc-600 text-lg" defaultValue="Your service is very good. I love that fast transactions. Thanks to all team! " />
            </div>
            <PrimaryButton disabled={false} className="w-full mt-6">Submit</PrimaryButton>
        </div>
    </div>
}