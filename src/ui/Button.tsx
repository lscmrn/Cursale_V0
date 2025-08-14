import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
};

export function Button({
    variant = 'primary',
    fullWidth = false,
    className,
    ...props
}: ButtonProps) {
    const base =
        'rounded-full font-semibold transition duration-300 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple/30 px-5 py-2 text-sm md:text-sm lg:text-base';
    const variants = {
        primary: 'bg-gradient-ia-btn-hero text-white hover:brightness-110',
        secondary: 'bg-gradient-ia-futurist text-white hover:brightness-110',
    };
    return (
        <button
            className={clsx(base, variants[variant], fullWidth && 'w-full', className)}
            {...props}
        />
    );
}
