import { motion } from 'motion/react';

export default function SvgParadox() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full bg-black font-mono">
      <defs>
        <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(248,113,113,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="emeraldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(52,211,153,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(168,85,247,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      {/* Background Glows */}
      <circle cx="400" cy="250" r="150" fill="url(#redGlow)" />
      <circle cx="200" cy="250" r="120" fill="url(#emeraldGlow)" />
      <circle cx="600" cy="250" r="120" fill="url(#purpleGlow)" />

      {/* Center Tension Line */}
      <line x1="250" y1="250" x2="550" y2="250" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
      
      {/* Oscillating Data Packets */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x="390" y={245 + (i - 1) * 20} width="20" height="10" rx="2"
          fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.5)" strokeWidth="1"
          animate={{ x: [-80, 80, -80] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* Center Question Mark */}
      <motion.text
        x="400" y="210" fill="rgba(248,113,113,0.6)" fontSize="48" textAnchor="middle" fontWeight="300"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >?</motion.text>

      {/* Left Side: Transparency / Eye */}
      <g transform="translate(200, 250)">
        <motion.circle r="45" fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="1"
          animate={{ r: [45, 90], opacity: [0.8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }} />
        <motion.circle r="45" fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="1"
          animate={{ r: [45, 90], opacity: [0.8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }} />
        
        {/* Eye Icon */}
        <motion.g animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M-30,0 Q0,-30 30,0 Q0,30 -30,0 Z" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="10" fill="none" stroke="#34d399" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="4" fill="#34d399" />
        </motion.g>

        {/* Labels */}
        {['SANCTIONS CHECK', 'RESERVE AUDIT', 'RISK MONITORING'].map((text, i) => (
          <motion.g key={text} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}>
            <line x1="-50" y1={(i - 1) * 60} x2="-120" y2={(i - 1) * 60} stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
            <circle cx="-50" cy={(i - 1) * 60} r="2" fill="#34d399" />
            <text x="-130" y={(i - 1) * 60 + 4} fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="end" letterSpacing="0.05em">{text}</text>
          </motion.g>
        ))}
      </g>

      {/* Right Side: Privacy / Lock */}
      <g transform="translate(600, 250)">
        <motion.path d="M-40,-20 L40,-20 L40,20 Q0,60 -40,20 Z" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="1"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        
        {/* Lock Icon */}
        <motion.g animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
          <rect x="-16" y="-10" width="32" height="24" rx="3" fill="rgba(168,85,247,0.05)" stroke="#a855f7" strokeWidth="1.5" />
          <path d="M-8,-10 v-6 a8,8 0 0,1 16,0 v6" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <circle cx="0" cy="2" r="3" fill="#a855f7" />
          <line x1="0" y1="5" x2="0" y2="9" stroke="#a855f7" strokeWidth="1.5" />
        </motion.g>

        {/* Labels */}
        {['API CREDENTIALS', 'TRADE SECRETS', 'TRANSFER AMOUNTS'].map((text, i) => (
          <motion.g key={text} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}>
            <line x1="50" y1={(i - 1) * 60} x2="120" y2={(i - 1) * 60} stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
            <circle cx="50" cy={(i - 1) * 60} r="2" fill="#a855f7" />
            <text x="130" y={(i - 1) * 60 + 4} fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="start" letterSpacing="0.05em">{text}</text>
          </motion.g>
        ))}
      </g>
    </svg>
  );
}
