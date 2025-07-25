import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    fullWidth?: boolean;
};

export function Button({
    variant = 'primary',
    fullWidth = false,
    className,
    ...props
}: ButtonProps) {
    const baseClasses =
        'rounded-md font-bold transition duration-300 px-4 py-2 text-sm md:text-base lg:text-lg 2xl:text-xl';

    const variants = {
        primary:
            'bg-cursale-orange-300 text-white hover:bg-cursale-white hover:text-cursale-orange-300',
        secondary:
            'bg-cursale-blue-900 text-white hover:bg-cursale-white hover:text-cursale-blue-900',
        outline:
            'bg-cursale-blue-100 text-cursale-blue-900 hover:bg-cursale-orange-300 hover:text-white',
        ghost: 'bg-transparent text-cursale-blue-900 hover:bg-cursale-blue-300 hover:text-white', // ✅ novo variant para Dropdown
    };

    return (
        <button
            className={clsx(baseClasses, variants[variant], fullWidth && 'w-full', className)}
            {...props}
        />
    );
}
