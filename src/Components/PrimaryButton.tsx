import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonPropsInterface {
    children: string | JSX.Element,
    className?: string,
    rounded?: string,
    type?: `button` | `submit` | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled: boolean
}

const PrimaryButton: React.FC<PrimaryButtonPropsInterface> = ({ className = '', disabled, children, rounded, ...props }) => {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center px-4 py-3 bg-fuchsia-800 border border-transparent  font-semibold text-pink-100 hover:bg-fuchsia-700 focus:bg-fuchsia-700 active:bg-fuchsia-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 shadow-pbtn ${disabled && 'opacity-25'
                } ` + className + (` ${rounded ? rounded : ` rounded-md`}`)
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default PrimaryButton;
