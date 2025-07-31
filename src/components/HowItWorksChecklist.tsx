import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon1 from '@/assets/images/icons/cursale-icon.svg';
import Icon2 from '@/assets/images/icons/cursale-scared.svg';
import Icon3 from '@/assets/images/icons/cursale-sound.svg';
import Icon4 from '@/assets/images/icons/cursale-task.svg';
import Icon5 from '@/assets/images/icons/cursale-ai.svg';
import IconCheck from '@/assets/images/icons/cursale-check.svg';
import './../checklist.css';

export default function HowItWorksChecklist() {
    const steps = [
        'Create your free account',
        'Install the Chrome extension',
        '(Or) Give a quick briefing',
        '(Optional) Connect your CRM',
        'Sell with real-time AI support',
    ];

    const iconPaths = [Icon1, Icon2, Icon3, Icon4, Icon5];
    const [checked, setChecked] = useState(Array(5).fill(false));

    const toggleStep = (index: number) => {
        setChecked((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    className="bg-gradient-check/10 relative flex items-center gap-3 rounded-lg border border-white/10 bg-clip-padding px-4 py-3 shadow-md backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Texto + checkbox */}
                    <div className="relative z-10 flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={checked[index]}
                            onChange={() => toggleStep(index)}
                            className="order-1 h-5 w-5 cursor-pointer accent-[#8603c2]"
                        />
                        <motion.img
                            key={checked[index] ? `check-${index}` : `idle-${index}`}
                            src={checked[index] ? IconCheck : iconPaths[index]}
                            alt={`Cursale ${index + 1}`}
                            className={`h-16 w-16 -translate-y-1/2 ${
                                checked[index] ? 'order-3' : 'order-2'
                            }`}
                            animate={{ x: checked[index] ? 'order-3' : 'order-2' }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                        />
                        <motion.span
                            className={`text-base font-semibold text-[#2c03c2] transition ${
                                checked[index] ? 'line-through opacity-60' : ''
                            } ${checked[index] ? 'order-2' : 'order-3'}`}
                            transition={{ duration: 0.5 }}
                        >
                            {step}
                        </motion.span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
