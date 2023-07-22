import Comments from "@/Icons/Comments"
import Arrow from "@/Icons/ShortArrow"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import posts from "@/data/posts"

export default function Blog({ isHome = true }) {

    const items = posts

    return <div className="bg-center bg-cover mb-16">
        <div className={`${isHome ? `container mx-auto` : ``} opacity-[.99] text-white`}>
            {isHome ? <div className="text-center mb-5 xl:mb-16">
                <div className="text-[26px] xl:text-[34px] uppercase mb-4">BLOG POSTS</div>
                <div className="max-w-sm mx-auto shadow border border-fuchsia-800"></div>
            </div> : ``}
            <div className="relative blog-swiper -mx-2 xl:-mx-5">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        }
                    }}
                    modules={[Navigation, Pagination]}
                    pagination={{
                        el: ".blog-swiper  .pagination-wrapper",
                        clickable: true,
                        dynamicBullets: false
                    }}
                    navigation={{ nextEl: ".blog-swiper .arrow-next", prevEl: ".blog-swiper .arrow-prev" }}
                >
                    {items.map((item, index) => <SwiperSlide key={index}>
                        <div>
                            <div className="rounded-[22px] bg-neutral-700 overflow-hidden shadow-xl mb-4 mx-2 xl:mx-5">
                                <div className="pt-[50%] relative bg-center bg-cover" style={{
                                    backgroundImage: `url('${item.image}')`
                                }}>
                                </div>
                                <div className="px-4 pt-5 pb-6 space-y-6">
                                    <div className="space-y-2.5">
                                        <div className="text-2xl">How to keep privacy</div>
                                        <div className="text-sm opacity-25 items-center gap-[7px] flex -tracking-[.5px]">
                                            <div className="">Jack Shepard</div>
                                            <div>&middot;</div>
                                            <div className="">2 min read</div>
                                            <div>&middot;</div>
                                            <div className="">15 may</div>
                                        </div>
                                        <div className="text-stone-300">Today we learn how to keep privacy when exchange crypto </div>
                                    </div>
                                    <div className="justify-between items-center gap-6 flex">
                                        <div className="text-sm px-3 py-1 bg-stone-500 rounded-[5px]">Academy</div>
                                        <div className="flex space-x-2 items-center">
                                            <Comments className="w-5 h-5" />
                                            <div className="text-stone-300">12 comments</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                <div className="flex justify-center items-center xl:hidden">
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

            <div className="flex justify-center mb-16 xl:mt-8">
                <button className="text-zinc-100 px-6 py-3 rounded-xl border border-neutral-100 border-opacity-50 items-center gap-2 flex">
                    <div className="text-xl">View more posts</div>
                    <Arrow className={`w-4 h-auto`} />
                </button>
            </div>
        </div>
    </div>
}