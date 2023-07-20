'use client'

import Layout from '@/Layouts/Layout';
import Bg from "@/images/howcontentbg.svg"
import PrimaryButton from '@/Components/PrimaryButton';
import How1 from "@/images/how/calc1.png"
import How2 from "@/images/how/calc2.png"
import How3 from "@/images/how/calc3.png"
import How4 from "@/images/how/calc4.png"
import How5 from "@/images/how/calc5.png"
import Image from 'next/image';

export default function How() {
    return (
        <Layout
            headerbg={true}
        >
            <div className={`container mx-auto text-white opacity-[.99]`}>
                <div className="flex-col justify-center items-center gap-2 flex text-white text-center pb-12">
                    <div className="text-[28px] xl:text-[54px] opacity-[.99]">How it works</div>
                    <div className="text-lg xl:text-xl">As we provide the best course</div>
                </div>
            </div>
            <div className="bg-neutral-800 relative overflow-hidden bg-center bg-no-repeat" style={{
                backgroundImage: `url('${Bg.src}')`
            }}>
                <div className={`container mx-auto text-white my-8 xl:my-16`}>
                    <div className="gap-12 xl:gap-36 flex-col flex mb-20">
                        <div className="gap-6 xl:gap-12 flex flex-col xl:flex-row">
                            <Image width={423} height={342} alt="" className="w-[422px] h-auto shrink-0 self-start" src={How1.src} />
                            <div className="flex-col gap-6 flex">
                                <div className="text-justify text-2xl font-medium">1. Please select the desired currency pair</div>
                                <div className="text-lg leading-[42.50px]">Go to quickex.io and select the coin you want to exchange in the box to the left (&ldquo;You send&rdquo;) and the coin you want to purchase in the box on the right ( &ldquo;you get&rdquo;) and click the &ldquo;Start program.&rdquo;</div>
                            </div>
                        </div>
                        <div className="gap-6 xl:gap-12 flex flex-col xl:flex-row">
                            <Image width={619} height={265} alt="" className="w-[618px] h-auto shrink-0 xl:order-2 self-start" src={How2.src} />
                            <div className="flex-col gap-6 flex">
                                <div className="text-justify text-2xl font-medium">2. Enter a destination and return addresses</div>
                                <div className="text-lg leading-[42.50px]">Enter the destination address. On the same page on the left you will see the assigned unique identifier (ID) for this transaction. The identifier needs priobraschenii technical support in case of problems with the transaction. Carefully read the documents &ldquo;Terms of Use&rdquo; and &ldquo;confidentiality policy&rdquo; If you agree with the terms of these documents checkbox checked re-check all entries. If everything looks good go to the next step by clicking the &ldquo;start a transaction&rdquo;</div>
                            </div>
                        </div>
                        <div className="gap-6 xl:gap-12 flex flex-col xl:flex-row">
                            <Image width={634} height={277} alt="" className="w-[634px] h-auto shrink-0 self-start" src={How3.src} />
                            <div className="flex-col gap-6 flex">
                                <div className="text-justify text-2xl font-medium">3. Send to the address below cryptocurrency</div>
                                <div className="text-lg leading-[42.50px]">Now your transaction was initiated. On this page you will see the address of the purse. This is the address to which you want to send the coins that you want to exchange. For some currencies except for the address will be shown the address of the purse and the TAG (Payment ID Tag Message Memo). In no case do not send your money without a TAG your money may be lost forever! Address provided will be reserved for this transaction and service Quickex will wait to send money to this address within 240 minutes. You need to send money before the expiration of this time. After expiration of 240 minutes address lifted will not exchange with the reserve and the funds received after this time. After expiration of 360 minutes from the initiation of application for exchange this address may be provided to other users to make the exchange. In no case do not send their money after the expiry of 240 minutes after the initiation of an application for sharing! Your money may be lost forever! In no case do not send their money to re-address received in a single application!</div>
                            </div>
                        </div>
                        <div className="gap-6 xl:gap-12 flex flex-col xl:flex-row">
                            <Image width={619} height={339} alt="" className="w-[618px] h-auto shrink-0 xl:order-2 self-start" src={How4.src} />
                            <div className="flex-col gap-6 flex">
                                <div className="text-justify text-2xl font-medium">4. Confirmation of the transfer</div>
                                <div className="text-lg leading-[42.50px]">Once we get the coin our service automatically exchange your money for kriptovalyutnoy stock exchange market orders and instantly send them to the destination specified in step 2. In connection with the fact that all exchanges are made at kriptovalyutnoy Exchange on order book our service does not fix exchange rate. The calculator shows the expected course of the service. Also this course does not include a commission for sending kriptovalyutnyh exchanges. Therefore due to the high volatility kriptovalyutnogo market you can get less money than shown in the calculator.</div>
                            </div>
                        </div>
                        <div className="gap-6 xl:gap-12 flex flex-col xl:flex-row">
                            <Image width={420} height={495} alt="" className="w-[420px] h-auto shrink-0 self-start" src={How5.src} />
                            <div className="flex-col gap-6 flex">
                                <div className="text-justify text-2xl font-medium">5. Done!</div>
                                <div className="text-lg leading-[42.50px]">Usually at the end of the transaction we spend 30-90 minutes. In some cases the waiting time can be increased due to network latency. If you want to make a re-exchange of the same coin or the other you must create a new exchange.</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <PrimaryButton disabled={false} className="mb-16 px-[120px] py-6 w-full max-w-xl mx-auto">Start exchange</PrimaryButton>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
