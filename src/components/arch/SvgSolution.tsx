import { motion } from 'motion/react';

export default function SvgSolution() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full bg-black font-mono">
      <defs>
        <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(168,85,247,0.25)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <filter id="blurGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <motion.circle cx="400" cy="250" r="180" fill="url(#purpleGlow)"
        animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Input Paths */}
      {['Risk Data', 'Sanctions API', 'Reserve Data'].map((text, i) => (
        <g key={text}>
          <path d={`M 100,${150 + i * 100} C 200,${150 + i * 100} 250,250 320,250`} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <text x="90" y={150 + i * 100 + 4} fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="end" letterSpacing="0.05em">{text}</text>
          <motion.circle r="3" fill={i === 0 ? "#34d399" : i === 1 ? "#3b82f6" : "#a855f7"} filter="url(#blurGlow)"
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            style={{ offsetPath: `path('M 100,${150 + i * 100} C 200,${150 + i * 100} 250,250 320,250')` }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "linear" }} />
        </g>
      ))}

      {/* Output Paths */}
      <g>
        <path d="M 480,250 C 550,250 600,180 700,180" fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" />
        <text x="710" y="184" fill="#fbbf24" fontSize="11" textAnchor="start" letterSpacing="0.05em">OCP ATTESTATION</text>
        <motion.circle r="3" fill="#fbbf24" filter="url(#blurGlow)"
          animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          style={{ offsetPath: `path('M 480,250 C 550,250 600,180 700,180')` }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "linear" }} />
      </g>
      <g>
        <path d="M 480,250 C 550,250 600,320 700,320" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5" />
        <text x="710" y="324" fill="#a855f7" fontSize="11" textAnchor="start" letterSpacing="0.05em">PRIVATE TRANSFER</text>
        <motion.circle r="3" fill="#a855f7" filter="url(#blurGlow)"
          animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          style={{ offsetPath: `path('M 480,250 C 550,250 600,320 700,320')` }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1.5, ease: "linear" }} />
      </g>

      {/* TEE Enclave */}
      <g transform="translate(400, 250)">
        {/* Outer Hexagon */}
        <motion.polygon points="0,-110 95,-55 95,55 0,110 -95,55 -95,-55" 
          fill="rgba(168,85,247,0.03)" stroke="rgba(168,85,247,0.3)" strokeWidth="1" 
          animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        
        {/* Inner Hexagon */}
        <polygon points="0,-100 86,-50 86,50 0,100 -86,50 -86,-50" fill="rgba(0,0,0,0.6)" stroke="#a855f7" strokeWidth="1.5" />
        
        {/* Corner brackets */}
        <path d="M-86,-40 L-86,-50 L-76,-55" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
        <path d="M86,-40 L86,-50 L76,-55" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
        <path d="M-86,40 L-86,50 L-76,55" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
        <path d="M86,40 L86,50 L76,55" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5" />

        {/* Lock Header */}
        <g transform="translate(0, -65)">
          <rect x="-12" y="-8" width="24" height="16" rx="2" fill="rgba(168,85,247,0.1)" stroke="#a855f7" strokeWidth="1.5" />
          <path d="M-6,-8 v-4 a6,6 0 0,1 12,0 v4" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <text x="0" y="25" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">TEE ENCLAVE</text>
        </g>
        
        {/* Internal Processing Nodes */}
        <g transform="translate(0, 20)">
          {[0, 1, 2].map((i) => {
            const angle = (i * 120 - 90) * (Math.PI / 180);
            const r = 35;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.g key={i} transform={`translate(${x}, ${y})`}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }} 
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}>
                <circle r="14" fill="rgba(168,85,247,0.1)" stroke="#a855f7" strokeWidth="1" />
                <circle r="6" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1" strokeDasharray="2 2" />
                <circle r="2" fill="#fff" />
              </motion.g>
            );
          })}
          {/* Connecting lines inside */}
          <motion.path d="M 0,-35 L 30,17 L -30,17 Z" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1" strokeDasharray="4 4"
            animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        </g>
      </g>

      <text x="400" y="460" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle" letterSpacing="0.05em">Sensitive data never leaves the enclave</text>
    </svg>
  );
}
