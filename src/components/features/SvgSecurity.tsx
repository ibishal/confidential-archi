import { motion } from 'motion/react';

export default function SvgSecurity() {
  const cx = 150;
  const cy = 100;

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <g transform={`matrix(0.866, 0.5, -0.866, 0.5, ${cx}, ${cy})`}>
        <line x1="-120" y1="0" x2="120" y2="0" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
        
        <g transform="translate(-50, 0)">
          <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
          <path d="M-6,0 L-2,4 L6,-4" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <motion.line x1="-35" y1="0" x2="20" y2="0" stroke="#3b82f6" strokeWidth="2"
          initial={{ strokeDasharray: "0 100" }}
          animate={{ strokeDasharray: ["0 100", "100 0", "100 0"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        <g transform="translate(50, 0)">
          <rect x="-35" y="-15" width="70" height="30" rx="4" fill="#3b82f6" />
          <text x="0" y="4" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" transform="scale(1, 1)">Confirm</text>
        </g>
      </g>
    </svg>
  );
}
