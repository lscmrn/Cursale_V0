/* eslint-disable prettier/prettier */
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Button } from '@/ui/Button';

export type DropdownItem = {
    label: React.ReactNode;
    onClick: () => void;
};

type DropdownProps = {
    label: React.ReactNode;
    items: DropdownItem[];
    scrolled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
};

export function Dropdown({ label, items, scrolled, variant = 'secondary' }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggle = () => setOpen((prev) => !prev);
    const handleItemClick = (onClick: () => void) => {
        onClick();
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <div
            className="relative"
            ref={dropdownRef}
        >
            <Button
                variant={variant}
                onClick={toggle}
                className="flex items-center space-x-1"
            >
                <span>{label}</span>
                <FaChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </Button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute right-0 mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-black/10`}
                    >
                        {items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleItemClick(item.onClick)}
                                className="w-full px-4 py-2 text-left text-sm text-ia-cyberpunk-darkBlue transition hover:bg-ia-cyberpunk-neonBlue hover:text-white"
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
