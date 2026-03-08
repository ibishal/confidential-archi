import { motion } from 'motion/react';

export default function SvgPrivacyLayer() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full bg-black font-mono">
      <defs>
        <radialGradient id="ecdhGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(168,85,247,0.25)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* 1. Sender */}
      <g transform="translate(120, 200)">
        <circle cx="0" cy="-20" r="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
        <path d="M-25,20 C-25,5 25,5 25,20 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
        <text x="0" y="45" fill="#fff" fontSize="13" textAnchor="middle" fontWeight="600" letterSpacing="0.05em">SENDER</text>
        <text x="0" y="65" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">0x2eAB...C003</text>
        
        <rect x="-45" y="85" width="90" height="24" rx="12" fill="rgba(52,211,153,0.1)" stroke="#34d399" strokeWidth="1" />
        <circle cx="-30" cy="97" r="6" fill="#34d399" />
        <path d="M-33,97 L-31,99 L-27,94" fill="none" stroke="#000" strokeWidth="1.5" />
        <text x="-15" y="101" fill="#34d399" fontSize="10">hide-sender: ON</text>
      </g>

      {/* 2. ECDH Transformation */}
      <g transform="translate(400, 200)">
        <text x="-140" y="0" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">REAL ADDRESS</text>
        <line x1="-90" y1="0" x2="-60" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        
        <circle cx="0" cy="0" r="50" fill="url(#ecdhGlow)" />
        <circle cx="0" cy="0" r="40" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
        
        {/* Rotating Rings */}
        <motion.circle cx="0" cy="0" r="25" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="15 10"
          animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="0" cy="0" r="15" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="8 8"
          animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        
        <text x="0" y="65" fill="#a855f7" fontSize="11" textAnchor="middle" fontWeight="600" letterSpacing="0.05em">ECDH DERIVATION</text>
        
        <line x1="60" y1="0" x2="90" y2="0" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" />
        <text x="160" y="-15" fill="#a855f7" fontSize="11" textAnchor="middle">SHIELDED ADDRESS</text>
        <rect x="100" y="-5" width="120" height="24" rx="4" fill="rgba(168,85,247,0.1)" stroke="#a855f7" strokeWidth="1" />
        <text x="160" y="12" fill="#fff" fontSize="11" textAnchor="middle">0xA3c7...F91e</text>
      </g>

      {/* 3. Recipient */}
      <g transform="translate(680, 200)">
        <circle cx="0" cy="-20" r="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M-25,20 C-25,5 25,5 25,20 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="2 2" />
        <motion.text x="0" y="-14" fill="#a855f7" fontSize="20" textAnchor="middle" fontWeight="bold" filter="url(#glow)"
          animate={{ y: [-14, -18, -14] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>?</motion.text>
        <text x="0" y="45" fill="rgba(255,255,255,0.5)" fontSize="13" textAnchor="middle" letterSpacing="0.05em">RECIPIENT</text>
        
        <g transform="translate(0, 65)">
          <path d="M-6,-8 L0,-12 L6,-8 L6,0 C6,6 0,10 0,10 C0,10 -6,6 -6,0 Z" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <text x="12" y="3" fill="#a855f7" fontSize="10">Identity Protected</text>
        </g>
      </g>

      {/* 4. Encrypted Tunnel */}
      <g transform="translate(400, 400)">
        <line x1="-240" y1="-15" x2="240" y2="-15" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" />
        <line x1="-240" y1="15" x2="240" y2="15" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" />
        <rect x="-240" y="-15" width="480" height="30" fill="url(#ecdhGlow)" />
        
        {/* Flowing Tokens */}
        {[0, 1, 2].map((i) => (
          <motion.g key={i} animate={{ x: [-240, 240] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 }}>
            <circle cx="0" cy="0" r="8" fill="#34d399" filter="url(#glow)" />
            <rect x="-4" y="-3" width="8" height="6" rx="1" fill="none" stroke="#000" strokeWidth="1" />
            <path d="M-2,-3 v-2 a2,2 0 0,1 4,0 v2" fill="none" stroke="#000" strokeWidth="1" />
          </motion.g>
        ))}
      </g>

      {/* OCP Badge */}
      <g transform="translate(660, 450)">
        <rect x="-60" y="-15" width="120" height="30" rx="15" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" strokeWidth="1.5" />
        <circle cx="-45" cy="0" r="8" fill="#fbbf24" />
        <path d="M-48,0 L-46,2 L-42,-2" fill="none" stroke="#000" strokeWidth="1.5" />
        <text x="-30" y="4" fill="#fbbf24" fontSize="10" fontWeight="600">OCP COMPLIANT</text>
      </g>
    </svg>
  );
}
