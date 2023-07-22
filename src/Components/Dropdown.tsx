import { useEffect, useState } from "react";
import Coin from "@/types/coin";

import UsdtCoin from '@/images/coins/usdt.png';
import BitCoin from '@/images/coins/bitcoin.png';
import ChevronDown from "@/Icons/ChevronDown";
import Image from "next/image";
import { useLayout } from "@/Contexts/LayoutContext";

const coinsData: Coin[] = [
    {
        title: `Tether`,
        code: `USDT`,
        image: UsdtCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
    {
        title: `Bitcoin`,
        code: `BTC`,
        image: BitCoin.src
    },
];


export default function Dropdown() {

    const [coins, setCoins] = useState<Coin[]>(coinsData);
    const [coin, setCoin] = useState<Coin>(coins[0]);
    const [open, setOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<string>(``);

    const { setNooverflow } = useLayout();

    useEffect(() => {
        setOpen(false)
    }, [coin])

    useEffect(() => {
        setNooverflow(open)
    }, [open])

    useEffect(() => {
        setCoins(coinsData.filter(el => el.code.toLowerCase().indexOf(query.toLowerCase()) > -1 || el.title.toLowerCase().indexOf(query.toLowerCase()) > -1))
    }, [query])

    return <div className="relative flex flex-col items-center">
        <div className="absolute px-3 py-px bg-neutral-500 bg-opacity-60 rounded-[11px] -top-1.5 z-10">
            <div className="text-white text-[11px] uppercase">sol</div>
        </div>
        <div className="px-2 py-2.5 bg-neutral-600 xl:bg-zinc-100 rounded-[11px] cursor-pointer" onClick={e => setOpen(prev => !prev)}>
            <div className="items-center gap-1.5 flex">
                <Image width={20} height={20} alt="" src={coin.image} className="w-5 h-5" />
                <div className="text-zinc-400 xl:text-neutral-500">{coin.code}</div>
                <ChevronDown className={`w-5 h-auto text-zinc-400 xl:text-indigo-900 transition duration-500 ${open ? `rotate-[180deg]` : ``}`} />
            </div>
        </div>
        {open ? <div className="bg-zinc-100 px-3 py-4 xl:rounded-[11px] left-0 xl:left-auto top-0 xl:top-auto border w-screen xl:w-[20rem] z-50 fixed xl:absolute xl:top-12">
            <input placeholder="Search currency..." className="block px-3 py-4 w-full bg-zinc-100 rounded-lg border border-black border-opacity-5 mb-4" onChange={e => {
                setQuery(e.target.value)
            }} />
            <ul className="flex-col gap-5 flex max-h-screen xl:max-h-[15rem] overflow-y-auto no-select">
                {coins.map((item, index) => <li key={index}>
                    <a href="#" className="flex space-x-2 items-center"
                        onClick={e => {
                            e.preventDefault();
                            setCoin(item)
                            setOpen(false)
                        }}>
                        <Image width={32} height={32} alt="" src={item.image} className="w-8 h-8" />
                        <div className="text-zinc-800">{item.title}</div>
                        <div className="text-neutral-400 text-xs">{item.code}</div>
                    </a>
                </li>)}
            </ul>
        </div> : ``}
    </div>
}