import { motion } from 'motion/react';

export default function SvgReserveWatchdog() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full bg-black font-mono">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Connection Paths */}
      <path d="M 160,250 L 300,250" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 500,250 C 560,250 580,150 660,150" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 500,250 C 560,250 580,350 660,350" fill="none" stroke="rgba(248,113,113,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Flowing Dots */}
      <motion.circle r="3" fill="#a855f7" filter="url(#glow)" animate={{ cx: [160, 300] }} cy="250" transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
      <motion.circle r="3" fill="#fbbf24" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 500,250 C 560,250 580,150 660,150')` }} transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "linear" }} />

      {/* 1. Clock + TEE */}
      <g transform="translate(100, 250)">
        <circle r="30" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5" />
        <motion.line x1="0" y1="0" x2="0" y2="-15" stroke="#34d399" strokeWidth="2" strokeLinecap="round"
          animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
        
        <rect x="-45" y="40" width="90" height="50" rx="6" fill="rgba(0,0,0,0.8)" stroke="#a855f7" strokeWidth="1.5" />
        <g transform="translate(0, 50)">
          <rect x="-6" y="-4" width="12" height="8" rx="1" fill="none" stroke="#a855f7" strokeWidth="1" />
          <path d="M-3,-4 v-2 a3,3 0 0,1 6,0 v2" fill="none" stroke="#a855f7" strokeWidth="1" />
        </g>
        <text x="0" y="68" fill="#a855f7" fontSize="11" textAnchor="middle" fontWeight="600">BANK API</text>
        <text x="0" y="82" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">Confidential HTTP</text>
        
        <line x1="0" y1="30" x2="0" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
      </g>

      {/* 2. Comparison Chart */}
      <g transform="translate(400, 350)">
        <line x1="-100" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        
        {/* Reserves Bar */}
        <motion.rect x="-50" y="-160" width="40" height="160" rx="4" fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="1.5"
          initial={{ height: 0, y: 0 }} animate={{ height: 160, y: -160 }} transition={{ duration: 1, ease: "easeOut" }} />
        <motion.text x="-30" y="-170" fill="#34d399" fontSize="12" textAnchor="middle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>$1.2B</motion.text>
        <text x="-30" y="20" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">RESERVES</text>

        {/* Liabilities Bar */}
        <motion.rect x="10" y="-120" width="40" height="120" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"
          initial={{ height: 0, y: 0 }} animate={{ height: 120, y: -120 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} />
        <motion.text x="30" y="-130" fill="#fff" fontSize="12" textAnchor="middle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>$960M</motion.text>
        <text x="30" y="20" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">LIABILITIES</text>

        {/* Threshold Line */}
        <line x1="-80" y1="-120" x2="80" y2="-120" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="4 4" />
        <text x="90" y="-117" fill="rgba(255,255,255,0.5)" fontSize="10">100%</text>

        {/* Health Ratio */}
        <motion.text x="0" y="-220" fill="#34d399" fontSize="28" textAnchor="middle" fontWeight="bold" filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: "spring" }}>125.0%</motion.text>
      </g>

      {/* 3. Outputs */}
      <g transform="translate(710, 150)">
        <rect x="-50" y="-30" width="100" height="60" rx="6" fill="rgba(251,191,36,0.05)" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="0" y="-10" fill="#fbbf24" fontSize="10" textAnchor="middle">RiskRegistry</text>
        <text x="0" y="10" fill="#fff" fontSize="11" textAnchor="middle">WRITE REPORT</text>
      </g>

      <g transform="translate(710, 350)">
        <rect x="-50" y="-30" width="100" height="60" rx="6" fill="rgba(251,191,36,0.05)" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="0" y="-10" fill="#fbbf24" fontSize="10" textAnchor="middle">ComplianceGuard</text>
        <text x="0" y="10" fill="#fff" fontSize="11" textAnchor="middle">PAUSE IF &lt; 100%</text>
      </g>
    </svg>
  );
}
