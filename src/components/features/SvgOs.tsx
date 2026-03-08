import { motion } from 'motion/react';

export default function SvgOs() {
  const size = 30;
  const dx = size * 0.866;
  const dy = size * 0.5;

  const Cube = ({ cx, cy, isBlue, delay, children }: any) => {
    const topFill = isBlue ? "#38bdf8" : "#fff";
    const leftFill = isBlue ? "#0ea5e9" : "#f9fafb";
    const rightFill = isBlue ? "#0284c7" : "#f3f4f6";
    const stroke = isBlue ? "#0284c7" : "#e5e7eb";

    return (
      <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}>
        <path d={`M ${cx},${cy-size} L ${cx+dx},${cy-dy} L ${cx},${cy} L ${cx-dx},${cy-dy} Z`} fill={topFill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <path d={`M ${cx},${cy} L ${cx-dx},${cy-dy} L ${cx-dx},${cy+dy} L ${cx},${cy+size} Z`} fill={leftFill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <path d={`M ${cx},${cy} L ${cx+dx},${cy-dy} L ${cx+dx},${cy+dy} L ${cx},${cy+size} Z`} fill={rightFill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <g transform={`matrix(-0.866, 0.5, 0.866, 0.5, ${cx}, ${cy-size})`}>
          <g transform={`translate(${size/2}, ${size/2}) scale(0.6)`}>
            {children}
          </g>
        </g>
      </motion.g>
    );
  };

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <Cube cx={80} cy={110} isBlue={false} delay={0}>
        <path d="M-5,-3 C-5,-7 -1,-8 -1,-8 C-1,-8 3,-7 3,-3 C3,1 -1,5 -1,5 C-1,5 -5,1 -5,-3 Z" fill="#9ca3af" />
      </Cube>
      
      <Cube cx={150} cy={80} isBlue={true} delay={0.5}>
        <rect x="-8" y="-8" width="7" height="7" fill="#fff" />
        <rect x="1" y="-8" width="7" height="7" fill="#fff" />
        <rect x="-8" y="1" width="7" height="7" fill="#fff" />
        <rect x="1" y="1" width="7" height="7" fill="#fff" />
      </Cube>
      
      <Cube cx={220} cy={110} isBlue={false} delay={1}>
        <circle cx="0" cy="0" r="6" fill="#9ca3af" />
        <circle cx="-2" cy="-2" r="1.5" fill="#fff" />
        <circle cx="2" cy="-2" r="1.5" fill="#fff" />
      </Cube>
    </svg>
  );
}
