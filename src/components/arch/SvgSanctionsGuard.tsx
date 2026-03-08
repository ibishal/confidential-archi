import { motion } from 'motion/react';

export default function SvgSanctionsGuard() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full bg-black font-mono">
      <defs>
        <radialGradient id="teeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(168,85,247,0.2)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <clipPath id="teeClip">
          <rect x="-95" y="-115" width="190" height="230" rx="8" />
        </clipPath>
      </defs>

      {/* Connection Paths */}
      <path d="M 160,250 L 290,250" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 510,250 C 580,250 600,150 660,150" fill="none" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" />
      <path d="M 510,250 C 580,250 600,350 660,350" fill="none" stroke="rgba(248,113,113,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Flowing Dots */}
      <motion.circle r="3" fill="#34d399" filter="url(#glow)" animate={{ cx: [160, 290] }} cy="250" transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
      <motion.circle r="3" fill="#34d399" filter="url(#glow)" animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }} style={{ offsetPath: `path('M 510,250 C 580,250 600,150 660,150')` }} transition={{ duration: 2, repeat: Infinity, delay: 1.5, ease: "linear" }} />

      {/* 1. HTTP Trigger */}
      <g transform="translate(100, 250)">
        <rect x="-60" y="-25" width="120" height="50" rx="8" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5" />
        <text x="0" y="0" fill="#34d399" fontSize="13" textAnchor="middle" fontWeight="600">POST /check</text>
        <text x="0" y="45" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">0x1234...5678</text>
        {/* Wifi waves */}
        <motion.path d="M-10,-12 Q0,-18 10,-12" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.path d="M-15,-16 Q0,-24 15,-16" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
      </g>

      {/* 2. TEE Enclave */}
      <circle cx="400" cy="250" r="160" fill="url(#teeGlow)" />
      <g transform="translate(400, 250)">
        <rect x="-100" y="-120" width="200" height="240" rx="10" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="-95" y="-115" width="190" height="230" rx="8" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        
        {/* Lock Icon */}
        <g transform="translate(70, -95)">
          <rect x="-8" y="-6" width="16" height="12" rx="2" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <path d="M-4,-6 v-3 a4,4 0 0,1 8,0 v3" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        </g>
        
        <text x="0" y="-80" fill="#a855f7" fontSize="13" textAnchor="middle" fontWeight="600" letterSpacing="0.05em">TEE Sanctions API</text>
        <text x="0" y="-60" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">CONFIDENTIAL HTTP</text>

        {/* Lists */}
        <g transform="translate(-70, -20)">
          <rect x="0" y="0" width="140" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <circle cx="16" cy="16" r="4" fill="#3b82f6" />
          <text x="30" y="20" fill="rgba(255,255,255,0.8)" fontSize="11">OFAC-SDN</text>
        </g>
        <g transform="translate(-70, 25)">
          <rect x="0" y="0" width="140" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <circle cx="16" cy="16" r="4" fill="#3b82f6" />
          <text x="30" y="20" fill="rgba(255,255,255,0.8)" fontSize="11">EU-SANCTIONS</text>
        </g>

        {/* Scanner Line */}
        <g clipPath="url(#teeClip)">
          <motion.g animate={{ y: [-115, 115, -115] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
            <line x1="-95" y1="0" x2="95" y2="0" stroke="#a855f7" strokeWidth="2" filter="url(#glow)" />
            <rect x="-95" y="-20" width="190" height="20" fill="url(#teeGlow)" opacity="0.5" />
          </motion.g>
        </g>
      </g>

      {/* 3. Outputs */}
      <g transform="translate(710, 150)">
        <rect x="-50" y="-25" width="100" height="50" rx="6" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5" />
        <path d="M-20,0 L-5,10 L20,-10" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="45" fill="#34d399" fontSize="11" textAnchor="middle">APPROVED</text>
      </g>

      <g transform="translate(710, 350)">
        <rect x="-50" y="-25" width="100" height="50" rx="6" fill="rgba(248,113,113,0.05)" stroke="#f87171" strokeWidth="1.5" />
        <path d="M-10,-10 L10,10 M-10,10 L10,-10" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
        <text x="0" y="45" fill="#f87171" fontSize="11" textAnchor="middle">DENIED</text>
      </g>
    </svg>
  );
}
