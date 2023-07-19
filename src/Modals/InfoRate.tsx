import PrimaryButton from "@/Components/PrimaryButton"
import ModalBg from "@/images/modalbg.svg"
import { useLayout } from "@/Contexts/LayoutContext"
import Close from "@/Icons/Close"

export default function InfoRate() {

    const { setModal } = useLayout();

    return <div className="w-full max-w-[1015px] mx-auto bg-neutral-700 py-6 xl:py-10 px-5 xl:px-10 rounded-[22px] bg-no-repeat relative" style={{
        backgroundImage: `url('${ModalBg.src}')`,
        backgroundPositionX: `-600px`,
        backgroundPositionY: `-600px`,
    }}
        onClick={e => e.stopPropagation()}>
        <a href="#" className="absolute right-8 top-8 p-2" onClick={e => setModal(null)}>
            <Close className="w-3.5 h-3.5" />
        </a>
        <div className="">
            <div className="flex-col gap-3 flex text-white mb-4 xl:mb-6">
                <div className="text-xl xl:text-[26px] font-medium mb-4 xl:mb-6">Какой курс выгоднее?</div>
                <div className="text-[13px] xl:text-lg leading-tight mb-4 xl:mb-6">
                    <div className="font-bold">Фиксированный курс:</div>
                    <div className="">Вы получите точную сумму, сколько указано в поле «вы получите»  при создании обмена.</div>
                    <ul className="list-disc pl-8 mb-4 xl:mb-6">
                        <li>Наша комиссия составит 1% + комиссия сети.</li>
                        <li>Без скрытых комиссий. </li>
                        <li>Курс замораживается на 12 минут. При изменения биржевого курса более чем на 1.3% до обнаружения транзакции в сети блокчейн, вам будет предложено сделать возврат или совершить обмен по рыночному курсу. </li>
                    </ul>
                    <div className="font-bold">Плавающий курс:</div>
                    <div className="">Курс обмена фиксируется когда транзакция получает нужное количество подтверждений сети блокчейн. Если рынок пойдет вверх, вы получите больше криптовалюты, если вниз меньше. Мы за честную сделку. </div>
                    <ul className="list-disc pl-8 mb-4 xl:mb-6">
                        <li>Наша комиссия составляет 0,5% + комиссия сети.</li>
                        <li>Без скрытых комиссий </li>
                        <li>Обмен по рыночному курсу в момент поступления средств на счет нашего сервиса.</li>
                    </ul>
                    <div className="font-bold">Пример:</div>
                    <ol className="list-decimal pl-8 mb-4 xl:mb-6">
                        <li>При обмене 1 ETH на 1835 USDT и выборе фиксированного курса, вы получите точно указанное количество 1835 USDT за 1 ETH.</li>
                        <li>При выборе плавающего курса обмена, сумма, которую вы получите за 1 ETH, может варьироваться в зависимости от текущего рыночного курса обмена между ETH и USDT.</li>
                        <li>При плавающем курсе обмена, вы можете получить как большую сумму - 1875 USDT за 1 ETH, так и меньшую сумму - 1810 USDT за 1 ETH, в зависимости от текущего рыночного курса в момент обмена.</li>
                    </ol>
                </div>
                <div className="gap-5 flex flex-col items-center">
                    <PrimaryButton disabled={false} className="rounded-xl w-full xl:max-w-[216px]" onClick={e => setModal(null)}>Понятно</PrimaryButton>
                </div>
            </div>
        </div>
    </div>
}