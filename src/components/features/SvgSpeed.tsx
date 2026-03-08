import { motion } from 'motion/react';

export default function SvgSpeed() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <g transform="translate(150, 150)">
        <path d="M -90,0 A 90,90 0 0,1 90,0" fill="none" stroke="#e5e7eb" strokeWidth="14" strokeLinecap="round" />
        
        {[...Array(9)].map((_, i) => {
          const angle = -180 + (i * 22.5);
          return (
            <line key={i} x1="70" y1="0" x2="80" y2="0" stroke="#d1d5db" strokeWidth="2" transform={`rotate(${angle})`} />
          );
        })}

        <motion.g 
          initial={{ rotate: -150 }}
          animate={{ rotate: [-150, 20, 10, 30, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M -6,0 L 0,-70 L 6,0 Z" fill="#111827" />
          <circle cx="0" cy="0" r="10" fill="#111827" />
          <circle cx="0" cy="0" r="4" fill="#fff" />
        </motion.g>
      </g>
    </svg>
  );
}
