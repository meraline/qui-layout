import RightnowBg from "@/images/rightnowbg.svg"
import Rightnow from "@/images/rightnow.png"
import Chevron from "@/Icons/Chevron"
import { useEffect, useState } from "react"
import QuestionGroup from "@/types/questiongroup"

export default function Faq(props: Object) {

    const items: QuestionGroup[] = [{
        id: 1,
        title: `Frequently Asked`,
        questions: [
            {
                id: 1,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
            {
                id: 2,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
            {
                id: 3,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
        ]
    }, {
        id: 2,
        title: `About Service`,
        questions: [
            {
                id: 4,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
            {
                id: 5,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
            {
                id: 6,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
        ]
    }, {
        id: 3,
        title: `About transactions`,
        questions: [
            {
                id: 7,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
            {
                id: 8,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
            {
                id: 9,
                question: `What should I do if "transaction not found"?`,
                answer: `If the user changes their browser/cookies or starts using a VPN, the transaction will not be available for viewing. Users can always inquire about the status of the transaction in the 24-hour support chat room.`
            },
        ]
    },]

    const [group, setGroup] = useState<QuestionGroup>(items[0])
    const [question, setQuestion] = useState<QuestionGroup | null>(null)

    useEffect(() => {
        if (group.questions && group.questions.length) setQuestion(group.questions[0])
    }, [group])

    return <div className="bg-center bg-cover mb-8 xl:mb-40">
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="text-center mb-5 xl:mb-16">
                <div className="text-[26px] xl:text-[34px] uppercase mb-6">Frequently Asked QuestionsS</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] gap-12">
                <ul className="space-y-4">
                    {items.map((gr, gdx) => <li key={gdx}>
                        <a href="#" onClick={e => {
                            e.preventDefault();
                            setGroup(gr)
                        }} className={`p-4 items-center flex ${gr.id === group.id ? `rounded-[11px] shadow border border-fuchsia-800` : ``}`}>
                            <div className={`grow shrink basis-0 text-xl ${gr.id === group.id ? `text-pink-50` : `text-zinc-400`}`}>{gr.title}</div>
                            {gr.id === group.id ? <Chevron className="w-2 h-auto" /> : ``}
                        </a>
                    </li>)}
                </ul>
                <div>
                    <ul className="space-y-4">
                        {group.questions.map((qs, gdx) => <li key={gdx}>
                            <a href="#" onClick={e => {
                                e.preventDefault();
                                setQuestion(qs)
                            }} className={`block px-6 py-6 relative ${question && qs.id === question.id ? `bg-neutral-700 rounded-[14px]` : `text-neutral-400 border-b border-white border-opacity-5`}`}>
                                <Chevron className={`w-2 h-auto absolute top-6 right-6 ${question && qs.id === question.id ? `-rotate-[90deg]` : `rotate-[90deg]`}`} />
                                <div className="text-xl pr-8">{qs.question}</div>
                                {question && qs.id === question.id ? <div className="text-zinc-400 mt-4">{qs.answer}</div> : ``}
                            </a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}