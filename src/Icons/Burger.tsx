import IconProps from "@/types/iconprops"

export default function Burger(props: IconProps) {
    return <svg  {...props} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="2" rx="1" fill="currentColor" />
        <rect y="10" width="24" height="2" rx="1" fill="currentColor" />
        <rect y="20" width="24" height="2" rx="1" fill="currentColor" />
    </svg>
}
