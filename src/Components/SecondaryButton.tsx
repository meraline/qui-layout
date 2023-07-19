interface SecondaryButtonPropsInterface {
    children: string | JSX.Element,
    className: string,
    disabled: boolean,
    type?: `button` | `submit` | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const SecondaryButton: React.FC<SecondaryButtonPropsInterface> = ({ className = '', disabled, children, ...props }) => {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center px-4 py-3 bg-neutral-500 border border-neutral-500 rounded-md font-semibold text-white shadow-sm hover:bg-neutral-600 hover:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default SecondaryButton;
