import { motion } from 'motion/react';

export default function SvgRiskSentinel() {
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
      <path d="M 140,250 C 200,250 200,150 260,150" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 140,250 C 200,250 200,350 260,350" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 340,150 C 400,150 400,250 460,250" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 340,350 C 400,350 400,250 460,250" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 540,250 C 600,250 600,150 660,150" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 540,250 C 600,250 600,350 660,350" fill="none" stroke="rgba(248,113,113,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Flowing Dots */}
      <motion.circle r="3" fill="#34d399" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 140,250 C 200,250 200,150 260,150')` }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      <motion.circle r="3" fill="#34d399" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 140,250 C 200,250 200,350 260,350')` }} transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "linear" }} />
      <motion.circle r="3" fill="#3b82f6" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 340,150 C 400,150 400,250 460,250')` }} transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "linear" }} />
      <motion.circle r="3" fill="#3b82f6" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 340,350 C 400,350 400,250 460,250')` }} transition={{ duration: 2, repeat: Infinity, delay: 1.5, ease: "linear" }} />
      <motion.circle r="3" fill="#fbbf24" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 540,250 C 600,250 600,150 660,150')` }} transition={{ duration: 2, repeat: Infinity, delay: 2.5, ease: "linear" }} />

      {/* 1. Cron Trigger */}
      <g transform="translate(100, 250)">
        <circle r="35" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5" />
        <circle r="28" fill="none" stroke="rgba(52,211,153,0.3)" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="0" cy="0" r="3" fill="#34d399" />
        <motion.line x1="0" y1="0" x2="0" y2="-20" stroke="#34d399" strokeWidth="2" strokeLinecap="round"
          animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
        <text x="0" y="55" fill="#34d399" fontSize="11" textAnchor="middle" letterSpacing="0.05em">CRON */5 * * * *</text>
      </g>

      {/* 2. Data Feeds */}
      <g transform="translate(300, 150)">
        <rect x="-50" y="-35" width="100" height="70" rx="6" fill="rgba(59,130,246,0.05)" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="-40" y="-15" fill="rgba(255,255,255,0.5)" fontSize="10">ETH/USD</text>
        <text x="-40" y="5" fill="#fff" fontSize="14" fontWeight="600">$2,387.41</text>
        <motion.path d="M-40,25 L-20,15 L0,20 L20,5 L40,10" fill="none" stroke="#34d399" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
      </g>

      <g transform="translate(300, 350)">
        <rect x="-50" y="-35" width="100" height="70" rx="6" fill="rgba(59,130,246,0.05)" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="-40" y="-15" fill="rgba(255,255,255,0.5)" fontSize="10">BTC/USD</text>
        <text x="-40" y="5" fill="#fff" fontSize="14" fontWeight="600">$82,341.00</text>
        <motion.path d="M-40,20 L-20,25 L0,10 L20,15 L40,0" fill="none" stroke="#34d399" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
      </g>

      {/* 3. Risk Engine */}
      <g transform="translate(500, 250)">
        <motion.rect x="-50" y="-50" width="100" height="100" rx="12" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"
          animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.1)", "0 0 0px rgba(255,255,255,0)"] }}
          transition={{ duration: 4, repeat: Infinity }} />
        
        <text x="0" y="-60" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle" letterSpacing="0.05em">RISK ENGINE</text>
        
        {/* Gauge */}
        <path d="M -35,10 A 35,35 0 0,1 35,10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" strokeLinecap="round" />
        <path d="M -35,10 A 35,35 0 0,1 -10,-23" fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
        
        <motion.line x1="0" y1="10" x2="-15" y2="-15" stroke="#fff" strokeWidth="2" strokeLinecap="round"
          animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} transformOrigin="0 10" />
        <circle cx="0" cy="10" r="4" fill="#fff" />

        <line x1="-40" y1="-10" x2="40" y2="-10" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" />
        <text x="45" y="-7" fill="#fbbf24" fontSize="8">500bps</text>
        
        <line x1="-40" y1="-25" x2="40" y2="-25" stroke="#f87171" strokeWidth="1" strokeDasharray="2 2" />
        <text x="45" y="-22" fill="#f87171" fontSize="8">1500bps</text>

        <text x="0" y="35" fill="#34d399" fontSize="10" textAnchor="middle">SAFE — 120 bps</text>
      </g>

      {/* 4. Outputs */}
      <g transform="translate(700, 150)">
        <rect x="-50" y="-30" width="100" height="60" rx="6" fill="rgba(251,191,36,0.05)" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="0" y="-10" fill="#fbbf24" fontSize="10" textAnchor="middle">RiskRegistry</text>
        <text x="0" y="10" fill="#fff" fontSize="11" textAnchor="middle">WRITE REPORT</text>
        <text x="0" y="25" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle">47 records</text>
      </g>

      <g transform="translate(700, 350)">
        <rect x="-50" y="-30" width="100" height="60" rx="6" fill="rgba(251,191,36,0.05)" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="0" y="-10" fill="#fbbf24" fontSize="10" textAnchor="middle">ComplianceGuard</text>
        <text x="0" y="10" fill="#fff" fontSize="11" textAnchor="middle">PAUSE PROTOCOL</text>
        <text x="0" y="25" fill="#34d399" fontSize="9" textAnchor="middle">ACTIVE</text>
      </g>
    </svg>
  );
}
