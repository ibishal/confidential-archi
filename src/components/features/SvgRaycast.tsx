import { motion } from 'motion/react';

export default function SvgRaycast() {
  const cx = 150;
  const cy = 130;
  const size = 70;
  const dx = size * 0.866;
  const dy = size * 0.5;
  const h = 25;

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <g>
        <path d={`M ${cx},${cy} L ${cx-dx},${cy-dy} L ${cx-dx},${cy-dy+h} L ${cx},${cy+h} Z`} fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1.5" strokeLinejoin="round" />
        <path d={`M ${cx},${cy} L ${cx+dx},${cy-dy} L ${cx+dx},${cy-dy+h} L ${cx},${cy+h} Z`} fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1.5" strokeLinejoin="round" />
        <path d={`M ${cx},${cy} L ${cx+dx},${cy-dy} L ${cx},${cy-2*dy} L ${cx-dx},${cy-dy} Z`} fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" strokeLinejoin="round" />
        
        <path d={`M ${cx},${cy-10} L ${cx+dx-10},${cy-dy-5} L ${cx},${cy-2*dy+10} L ${cx-dx+10},${cy-dy-5} Z`} fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      </g>

      <motion.g 
        animate={{ y: [-10, 0, -10] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <g transform={`matrix(0.866, 0.5, -0.866, 0.5, ${cx}, ${cy - 40})`}>
          <rect x="-20" y="-20" width="40" height="40" rx="4" fill="#fff" stroke="#111827" strokeWidth="2" />
          <path d="M-8,-4 L0,4 L8,-4" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M-8,4 L0,12 L8,4" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </motion.g>
    </svg>
  );
}
