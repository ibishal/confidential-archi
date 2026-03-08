import { motion } from 'motion/react';

export default function SvgMcp() {
  const size = 35;
  const dx = size * 0.866;
  const dy = size * 0.5;

  const Cube = ({ cx, cy, delay, children }: any) => (
    <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}>
      <path d={`M ${cx},${cy-size} L ${cx+dx},${cy-dy} L ${cx},${cy} L ${cx-dx},${cy-dy} Z`} fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" strokeLinejoin="round" />
      <path d={`M ${cx},${cy} L ${cx-dx},${cy-dy} L ${cx-dx},${cy+dy} L ${cx},${cy+size} Z`} fill="#fafafa" stroke="#e5e7eb" strokeWidth="1.5" strokeLinejoin="round" />
      <path d={`M ${cx},${cy} L ${cx+dx},${cy-dy} L ${cx+dx},${cy+dy} L ${cx},${cy+size} Z`} fill="#f5f5f5" stroke="#e5e7eb" strokeWidth="1.5" strokeLinejoin="round" />
      <g transform={`matrix(0.866, -0.5, 0, 1, ${cx}, ${cy})`}>
        <g transform={`translate(${size/2}, ${size/2}) scale(0.5)`}>
          {children}
        </g>
      </g>
    </motion.g>
  );

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <Cube cx={70} cy={100} delay={0}>
        <path d="M-15,0 L15,0 M0,-15 L0,15 M-10,-10 L10,10 M-10,10 L10,-10" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
      </Cube>
      <Cube cx={150} cy={100} delay={0.5}>
        <circle cx="0" cy="0" r="12" fill="none" stroke="#6b7280" strokeWidth="3" />
        <path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
      </Cube>
      <Cube cx={230} cy={100} delay={1}>
        <path d="M-12,-12 L12,12 M-12,12 L12,-12 M0,-16 L0,16 M-16,0 L16,0" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
      </Cube>
    </svg>
  );
}
