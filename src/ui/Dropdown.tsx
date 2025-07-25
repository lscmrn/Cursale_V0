import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Button } from '@/ui/Button';

export type DropdownItem = {
    label: string;
    onClick: () => void;
};

type DropdownProps = {
    label: string;
    items: DropdownItem[];
    scrolled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline'; // ✅ herda do Button
};

export function Dropdown({ label, items, scrolled, variant = 'secondary' }: DropdownProps) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((prev) => !prev);
    const handleItemClick = (onClick: () => void) => {
        onClick();
        setOpen(false);
    };

    return (
        <div className="relative">
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
                        className={`absolute right-0 mt-2 w-44 rounded-md shadow-lg ${
                            scrolled
                                ? 'bg-gradient-orange-100 text-white'
                                : 'bg-gradient-orange-100 text-cursale-blue-900'
                        }`}
                    >
                        {items.map((item) => (
                            <Button
                                key={item.label}
                                variant="ghost"
                                className="block w-full px-4 py-2 text-left text-sm hover:bg-cursale-blue-50 hover:text-cursale-orange-500"
                                onClick={() => handleItemClick(item.onClick)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
