import { motion } from 'motion/react';

export default function SvgThemes() {
  const cx = 150;
  const cy = 80;
  const w = 120;
  const h = 120;

  const Layer = ({ dy, fill, stroke, delay, children }: any) => (
    <motion.g 
      animate={{ y: [dy - 6, dy + 6, dy - 6] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <g transform={`matrix(0.866, 0.5, -0.866, 0.5, ${cx}, ${cy})`}>
        <rect x={-w/2} y={-h/2} width={w} height={h} fill={fill} stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
        {children}
      </g>
    </motion.g>
  );

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <Layer dy={50} fill="#fff" stroke="#e5e7eb" delay={0.4}>
        <line x1={-w/2 + 20} y1={-h/2} x2={-w/2 + 20} y2={h/2} stroke="#e5e7eb" strokeWidth="1" />
        <line x1={-w/2 + 40} y1={-h/2} x2={-w/2 + 40} y2={h/2} stroke="#e5e7eb" strokeWidth="1" />
        <line x1={-w/2} y1={-h/2 + 20} x2={w/2} y2={-h/2 + 20} stroke="#e5e7eb" strokeWidth="1" />
        <line x1={-w/2} y1={-h/2 + 40} x2={w/2} y2={-h/2 + 40} stroke="#e5e7eb" strokeWidth="1" />
      </Layer>
      
      <Layer dy={25} fill="#f9fafb" stroke="#d1d5db" delay={0.2}>
        <rect x={-w/2 + 10} y={-h/2 + 10} width={w - 20} height={h - 20} fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
      </Layer>

      <Layer dy={0} fill="#1f2937" stroke="#374151" delay={0}>
        <rect x={-w/2 + 10} y={-h/2 + 10} width={w - 20} height={h - 20} fill="#374151" />
        <line x1={-w/2 + 30} y1={-h/2 + 10} x2={-w/2 + 30} y2={h/2 - 10} stroke="#4b5563" strokeWidth="2" />
        <line x1={-w/2 + 10} y1={-h/2 + 30} x2={w/2 - 10} y2={-h/2 + 30} stroke="#4b5563" strokeWidth="2" />
      </Layer>
    </svg>
  );
}
