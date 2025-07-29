import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
    fullWidth?: boolean;
};

export function Button({
    variant = 'primary',
    fullWidth = false,
    className,
    ...props
}: ButtonProps) {
    const baseClasses =
        'rounded-full font-bold transition duration-300 px-6 py-2 text-sm md:text-base lg:text-lg 2xl:text-xl shadow-md hover:shadow-lg';

    const variants = {
        primary: 'bg-gradient-ia-mirror text-white hover:brightness-110',
        secondary: 'bg-gradient-ia-futurist text-white hover:brightness-110',
        tertiary: 'bg-gradient-ia-cyberpunk-neonBlue text-white hover:bg-ia-cyberpunk-neonBlue',
        outline:
            'bg-gradient-ia-classic text-white hover:bg-ia-cyberpunk-neonBlue hover:text-white',
    };

    return (
        <button
            className={clsx(baseClasses, variants[variant], fullWidth && 'w-full', className)}
            {...props}
        />
    );
}
