
import Arrow from "@/Icons/ShortArrow"
import HowBG from "@/images/howbg.svg"

export default function How(props: Object) {

    const items = [{
        number: 1,
        title: `Selecting Your Desired Cryptocurrency`,
        text: `To start the process on Quickex, you first need to choose the cryptocurrency you want to exchange. The platform supports a wide array of cryptocurrencies, allowing you to select from popular options like Bitcoin, Ethereum, and even less popular, like Dogecoin 	or Ton. Simply select your desired crypto in the 'You send' section and then in the 'You receive” section from the drop-down list.`
    }, {
        number: 2,
        title: `Initiating a Cryptocurrency Transfer`,
        text: `Once you've selected your desired cryptocurrencies, it's time to initiate a transfer. Enter the amount you want to exchange in the 'You send' field. The 'You Receive’ field will auto-calculate the amount you will receive based on the current exchange rate. Next, you need to provide the recipient's wallet address for the cryptocurrency you're buying. Always double-check to make sure the address is correct to ensure a successful transaction.`
    }, {
        number: 3,
        title: `Receiving Your Exchanged Cryptocurrency`,
        text: `After you've confirmed all the details and initiated the transfer, Quickex takes care of the rest. The platform will automatically exchange your cryptocurrencies at the best available rate. Once the transaction is complete, the exchanged cryptocurrency will be directly transferred to the recipient wallet address you provided. Transactions typically complete in a few minutes but can take longer depending on network congestion. Rest assured, your new funds will arrive safely in your wallet`
    },]

    return <div className="bg-center bg-cover my-12 xl:my-0 xl:pt-10 xl:pb-[54px]" style={{
        backgroundImage: `url('${HowBG.src}')`
    }}>
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="text-center mb-5 xl:mb-12 px-8 xl:px-0">
                <div className="text-[26px] xl:text-[34px] uppercase mb-5">How to exchange cryptocurrency</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div>
            <div className="gap-6 xl:gap-10 grid grid-cols-1 xl:grid-cols-3 mb-8 xl:mb-16">
                {items.map((item, index) => <div key={index}>
                    <div className="space-x-8 xl:space-x-0 xl:space-y-2 flex xl:flex-col items-center xl:items-start">
                        <div className="text-fuchsia-800 text-[80px] font-light shrink-0 shadow-numbers">{item.number}</div>
                        <div className="space-y-2">
                            <div className="text-zinc-100 text-2xl xl:text-[28px]">{item.title}</div>
                            <div className="text-violet-100">{item.text}</div>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className="flex justify-center">
                <button className="px-6 py-3 rounded-xl border border-neutral-100 border-opacity-50 items-center gap-2 flex">
                    <div className="text-zinc-100 text-xl">Learn more</div>
                    <Arrow className={`w-4 h-auto`} />
                </button>
            </div>
        </div>
    </div>
}