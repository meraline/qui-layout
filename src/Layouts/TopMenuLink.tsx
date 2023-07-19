import Link from "next/link"
import * as React from "react"

interface TopMenuLinkPropsInterface {
    children: string | JSX.Element,
    href: string
}

const TopMenuLink: React.FC<TopMenuLinkPropsInterface> = ({ children, href }) => {
    return <Link href={href}>{children}</Link>
}

export default TopMenuLink