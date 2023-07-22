import Post1 from "@/images/news/news1.png"
import Post2 from "@/images/news/news2.png"
import PostBg1 from "@/images/news/bgnews1.png"
import PostBg2 from "@/images/news/bgnews2.png"
import Arrow from "@/Icons/ShortArrow"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import NewsLogo from "@/Icons/NewsLogo"
import Image from "next/image"

export default function News(props: Object) {

    const items = [
        {
            image: Post1.src,
            bg: PostBg1.src,
            title: `Новости криптовалют 1 недели июня 2023 года`,
            excerpt: `Судебные разбирательства SEC с Binance и Coinbase, обвал валют на 20%, расследование взлома Atomic Wallet продолжается.`,
        },
        {
            image: Post2.src,
            bg: PostBg2.src,
            title: `Новости криптовалют 1 недели июня 2023 года`,
            excerpt: `Судебные разбирательства SEC с Binance и Coinbase, обвал валют на 20%, расследование взлома Atomic Wallet продолжается.`,
        },
        {
            image: Post1.src,
            bg: PostBg1.src,
            title: `Новости криптовалют 1 недели июня 2023 года`,
            excerpt: `Судебные разбирательства SEC с Binance и Coinbase, обвал валют на 20%, расследование взлома Atomic Wallet продолжается.`,
        },
        {
            image: Post2.src,
            bg: PostBg2.src,
            title: `Новости криптовалют 1 недели июня 2023 года`,
            excerpt: `Судебные разбирательства SEC с Binance и Coinbase, обвал валют на 20%, расследование взлома Atomic Wallet продолжается.`,
        },
        {
            image: Post1.src,
            bg: PostBg1.src,
            title: `Новости криптовалют 1 недели июня 2023 года`,
            excerpt: `Судебные разбирательства SEC с Binance и Coinbase, обвал валют на 20%, расследование взлома Atomic Wallet продолжается.`,
        },
        {
            image: Post2.src,
            bg: PostBg2.src,
            title: `Новости криптовалют 1 недели июня 2023 года`,
            excerpt: `Судебные разбирательства SEC с Binance и Coinbase, обвал валют на 20%, расследование взлома Atomic Wallet продолжается.`,
        },
        {
            image: Post1.src,
            bg: PostBg1.src,
            title: `Новости криптовалют 1 недели июня 2023 года`,
            excerpt: `Судебные разбирательства SEC с Binance и Coinbase, обвал валют на 20%, расследование взлома Atomic Wallet продолжается.`,
        },
        {
            image: Post2.src,
            bg: PostBg2.src,
            title: `Новости криптовалют 1 недели июня 2023 года`,
            excerpt: `Судебные разбирательства SEC с Binance и Coinbase, обвал валют на 20%, расследование взлома Atomic Wallet продолжается.`,
        },
    ]

    return <div className="bg-center bg-cover mb-16">
        <div className="container mx-auto opacity-[.99] text-white">
            <div className="text-center mb-5 xl:mb-16">
                <div className="text-[26px] xl:text-[34px] uppercase mb-4">QUICKEX NEWS</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div>

            <div className="relative news-swiper xl:pt-12">
                <Swiper
                    className="overflow-visible"
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        1280: {
                            slidesPerView: 2,
                            spaceBetween: 32
                        }
                    }}
                    modules={[Navigation, Pagination]}
                    pagination={{
                        el: ".news-swiper  .pagination-wrapper",
                        clickable: true,
                        dynamicBullets: false
                    }}
                    navigation={{ nextEl: ".news-swiper .arrow-next", prevEl: ".news-swiper .arrow-prev" }}
                >
                    {items.map((item, index) => <SwiperSlide key={index}>
                        <div className="bg-cover bg-center rounded-xl" style={{ backgroundImage: `url('${item.bg}')` }}>
                            <div className="p-8 relative">
                                <div className="text-white text-lg mb-4">{item.title}</div>
                                <div className="text-sm -mb-4">{item.excerpt}</div>
                                <Image width={185} height={37} src={item.image} alt="" />
                                <NewsLogo className="absolute right-8 bottom-8 w-16 h-auto" />
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                <div className="flex justify-center items-center">
                    <a href="#" className="block arrow-prev w-6 h-6 justify-center items-center flex">
                        <svg className="w-[7px] h-[14px]" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.0415 9.08317L0.95817 4.99984L5.0415 0.916504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <div className="pagination-outer px-12 py-6">
                        <div className="pagination-wrapper"></div>
                    </div>
                    <a href="#" className="block arrow-next w-6 h-6 justify-center items-center flex">
                        <svg className="w-[7px] h-[14px]" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.958496 0.91683L5.04183 5.00016L0.958496 9.0835" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div className="flex justify-center mb-16">
            <button className="text-zinc-100 px-6 py-3 rounded-xl border border-neutral-100 border-opacity-50 items-center gap-2 flex">
                <div className="text-xl">View all news</div>
                <Arrow className={`w-4 h-auto`} />
            </button>
        </div>
    </div>
}