import { motion } from 'motion/react';

export default function SvgOcpAttestations() {
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
      <path d="M 160,150 C 250,150 250,250 340,250" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 160,250 L 340,250" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 160,350 C 250,350 250,250 340,250" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 460,250 L 600,250" fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" />

      {/* Flowing Dots */}
      <motion.circle r="3" fill="#34d399" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 160,150 C 250,150 250,250 340,250')` }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      <motion.circle r="3" fill="#3b82f6" filter="url(#glow)" animate={{ cx: [160, 340] }} cy="250" transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "linear" }} />
      <motion.circle r="3" fill="#a855f7" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 160,350 C 250,350 250,250 340,250')` }} transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "linear" }} />

      {/* 1. Workflow Sources */}
      <g transform="translate(120, 150)">
        <motion.circle r="25" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5"
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
        <path d="M-10,0 L-4,-6 L2,6 L10,-2" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="45" fill="#34d399" fontSize="11" textAnchor="middle" letterSpacing="0.05em">Risk Sentinel</text>
      </g>
      
      <g transform="translate(120, 250)">
        <motion.circle r="25" fill="rgba(59,130,246,0.05)" stroke="#3b82f6" strokeWidth="1.5"
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        <path d="M-10,-10 L10,-10 L10,10 Q0,18 -10,10 Z" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="45" fill="#3b82f6" fontSize="11" textAnchor="middle" letterSpacing="0.05em">Sanctions Guard</text>
      </g>

      <g transform="translate(120, 350)">
        <motion.circle r="25" fill="rgba(168,85,247,0.05)" stroke="#a855f7" strokeWidth="1.5"
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <rect x="-10" y="-10" width="20" height="20" rx="3" fill="none" stroke="#a855f7" strokeWidth="2" />
        <text x="0" y="45" fill="#a855f7" fontSize="11" textAnchor="middle" letterSpacing="0.05em">Reserve Watchdog</text>
      </g>

      {/* 2. Attestation Factory */}
      <g transform="translate(400, 250)">
        <polygon points="-60,-120 60,-120 30,-70 30,70 60,120 -60,120 -30,70 -30,-70" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <text x="0" y="-135" fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="middle" fontWeight="600" letterSpacing="0.05em">OCP ATTESTATION ENGINE</text>
        
        {/* Factory Processing Animation */}
        <motion.g animate={{ y: [-50, 50], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}>
          <rect x="-20" y="-25" width="40" height="50" rx="4" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" strokeWidth="1.5" />
          <circle cx="0" cy="-5" r="8" fill="#fbbf24" />
          <path d="M-3,-5 L-1,-3 L3,-7" fill="none" stroke="#000" strokeWidth="1.5" />
          <line x1="-10" y1="10" x2="10" y2="10" stroke="#fbbf24" strokeWidth="1.5" />
          <line x1="-10" y1="15" x2="5" y2="15" stroke="#fbbf24" strokeWidth="1.5" />
        </motion.g>
      </g>

      {/* 3. Blockchain Visualization */}
      <g transform="translate(680, 250)">
        <text x="0" y="-180" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="600" letterSpacing="0.05em">BLOCKCHAIN</text>
        
        {[0, 1, 2, 3].map((i) => (
          <motion.g key={i} transform={`translate(0, ${(i - 1.5) * 80})`}
            initial={{ y: (i - 1.5) * 80 - 80, opacity: 0 }}
            animate={{ y: (i - 1.5) * 80, opacity: 1 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.4, ease: "easeOut" }}>
            
            <rect x="-90" y="-35" width="180" height="70" rx="6" fill="rgba(0,0,0,0.8)" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" />
            <text x="-75" y="-15" fill="rgba(255,255,255,0.4)" fontSize="10">Block #{14285000 + i}</text>
            <text x="-75" y="5" fill="rgba(255,255,255,0.8)" fontSize="11" fontWeight="600">SANCTIONS_CHECK</text>
            <text x="-75" y="20" fill="#34d399" fontSize="10">APPROVED</text>
            
            <circle cx="70" cy="-15" r="4" fill="#fbbf24" filter="url(#glow)" />
            
            {i < 3 && <line x1="0" y1="35" x2="0" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />}
          </motion.g>
        ))}
      </g>

      {/* 4. Timeline */}
      <g transform="translate(400, 460)">
        <line x1="-300" y1="0" x2="300" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        {[-200, -100, 0, 100, 200].map((x, i) => (
          <g key={x} transform={`translate(${x}, 0)`}>
            <circle cx="0" cy="0" r="4" fill="#fbbf24" filter="url(#glow)" />
            <text x="0" y="20" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">{['10m ago', '8m ago', '5m ago', '2m ago', 'Just now'][i]}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
