import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
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
        primary: 'bg-gradient-ia text-white hover:bg-cursale-white hover:text-cursale-orange-50',
        secondary:
            'bg-gradient-orange-100 text-cursale-blue-900 hover:bg-cursale-white hover:text-cursale-blue-900',
        outline:
            'bg-gradient-ia-100 text-cursale-blue-900 hover:bg-cursale-orange-900 hover:text-cursale-blue-900',
        gradient:
            'bg-gradient-orange-700 text-cursale-blue-50 hover:bg-cursale-orange-900 hover:text-cursale-blue-900',
        ghost: 'bg-transparent text-cursale-blue-900 hover:bg-cursale-blue-300 hover:text-cursale-blue-900',
    };

    return (
        <button
            className={clsx(baseClasses, variants[variant], fullWidth && 'w-full', className)}
            {...props}
        />
    );
}
