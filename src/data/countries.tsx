import UsaFlag from "@/images/flags/usa.svg";
import RusFlag from "@/images/flags/rus.svg";
import TurkeFlag from "@/images/flags/turke.svg";
import XzFlag from "@/images/flags/xz.svg";
import XxzFlag from "@/images/flags/xxz.svg";
import Country from "@/types/country";

const countries: Country[] = [{
    title: `Русский`,
    flag: RusFlag.src
}, {
    title: `العربية `,
    flag: XzFlag.src
}, {
    title: `English`,
    flag: UsaFlag.src
}, {
    title: `ภาษาไทย `,
    flag: XxzFlag.src
}, {
    title: `Türkçe `,
    flag: TurkeFlag.src
},]

export default countries