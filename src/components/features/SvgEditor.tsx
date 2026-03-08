import { motion } from 'motion/react';

export default function SvgEditor() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <g transform="translate(30, 40)">
        <rect x="0" y="0" width="240" height="130" rx="6" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
        <path d="M0,28 L240,28" stroke="#e5e7eb" strokeWidth="2" />
        <circle cx="16" cy="14" r="4" fill="#e5e7eb" />
        <circle cx="30" cy="14" r="4" fill="#e5e7eb" />
        <circle cx="44" cy="14" r="4" fill="#e5e7eb" />
        
        <rect x="65" y="0" width="80" height="28" fill="#eff6ff" />
        <text x="80" y="18" fill="#3b82f6" fontSize="11" fontWeight="600">VS Code</text>
        <path d="M65,28 L145,28" stroke="#3b82f6" strokeWidth="2" />
        
        <text x="160" y="18" fill="#9ca3af" fontSize="11" fontWeight="600">Zed</text>
        
        <motion.rect x="20" y="50" width="140" height="6" rx="3" fill="#bfdbfe" 
          initial={{ width: 0 }} animate={{ width: 140 }} transition={{ duration: 1, delay: 0.5 }} />
        <motion.rect x="20" y="66" width="90" height="6" rx="3" fill="#e5e7eb" 
          initial={{ width: 0 }} animate={{ width: 90 }} transition={{ duration: 1, delay: 0.7 }} />
        <motion.rect x="20" y="82" width="180" height="6" rx="3" fill="#e5e7eb" 
          initial={{ width: 0 }} animate={{ width: 180 }} transition={{ duration: 1, delay: 0.9 }} />
        <motion.rect x="20" y="98" width="120" height="6" rx="3" fill="#e5e7eb" 
          initial={{ width: 0 }} animate={{ width: 120 }} transition={{ duration: 1, delay: 1.1 }} />
      </g>
    </svg>
  );
}
