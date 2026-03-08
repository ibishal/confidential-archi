import { motion } from 'motion/react';

export default function SvgFullArchitecture() {
  return (
    <svg viewBox="0 0 1200 600" className="w-full h-full bg-black font-mono">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Layer Backgrounds */}
      <rect x="0" y="40" width="1200" height="80" fill="rgba(52,211,153,0.02)" />
      <rect x="0" y="140" width="1200" height="100" fill="rgba(59,130,246,0.02)" />
      <rect x="0" y="260" width="1200" height="100" fill="rgba(168,85,247,0.02)" />
      <rect x="0" y="380" width="1200" height="100" fill="rgba(251,191,36,0.02)" />
      <rect x="0" y="500" width="1200" height="80" fill="rgba(168,85,247,0.02)" />

      {/* Layer Labels */}
      <text x="40" y="85" fill="rgba(255,255,255,0.3)" fontSize="12" letterSpacing="0.1em">1. TRIGGERS</text>
      <text x="40" y="195" fill="rgba(255,255,255,0.3)" fontSize="12" letterSpacing="0.1em">2. CRE WORKFLOWS</text>
      <text x="40" y="315" fill="rgba(255,255,255,0.3)" fontSize="12" letterSpacing="0.1em">3. DATA &amp; TEE</text>
      <text x="40" y="435" fill="rgba(255,255,255,0.3)" fontSize="12" letterSpacing="0.1em">4. SMART CONTRACTS</text>
      <text x="40" y="545" fill="rgba(255,255,255,0.3)" fontSize="12" letterSpacing="0.1em">5. PRIVACY LAYER</text>

      {/* Connections Layer 1 -> 2 */}
      <line x1="300" y1="100" x2="300" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="600" y1="100" x2="600" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="900" y1="100" x2="900" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* Connections Layer 2 -> 3 */}
      <line x1="300" y1="220" x2="300" y2="290" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="600" y1="220" x2="600" y2="280" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="900" y1="220" x2="900" y2="280" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* Connections Layer 3 -> 4 */}
      <path d="M 300,330 C 300,380 400,350 450,400" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M 600,340 C 600,380 500,360 450,400" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M 900,340 C 900,380 800,360 750,400" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* Connections Layer 4 -> 5 */}
      <line x1="450" y1="460" x2="450" y2="520" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="750" y1="460" x2="750" y2="520" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* Flowing Dots */}
      {[300, 600, 900].map((x, i) => (
        <motion.circle key={`d1-${i}`} r="4" fill={['#34d399', '#3b82f6', '#a855f7'][i]} filter="url(#glow)"
          animate={{ cy: [100, 160] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }} cx={x} />
      ))}
      {[300, 600, 900].map((x, i) => (
        <motion.circle key={`d2-${i}`} r="4" fill={['#34d399', '#3b82f6', '#a855f7'][i]} filter="url(#glow)"
          animate={{ cy: [220, 280] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 + 0.5 }} cx={x} />
      ))}

      {/* Layer 1: Triggers */}
      <g transform="translate(300, 80)">
        <circle r="20" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5" />
        <text x="0" y="35" fill="#34d399" fontSize="11" textAnchor="middle">Risk Cron</text>
      </g>
      <g transform="translate(600, 80)">
        <rect x="-25" y="-15" width="50" height="30" rx="6" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5" />
        <text x="0" y="35" fill="#34d399" fontSize="11" textAnchor="middle">HTTP POST</text>
      </g>
      <g transform="translate(900, 80)">
        <circle r="20" fill="rgba(52,211,153,0.05)" stroke="#34d399" strokeWidth="1.5" />
        <text x="0" y="35" fill="#34d399" fontSize="11" textAnchor="middle">Reserve Cron</text>
      </g>

      {/* Layer 2: Workflows */}
      <g transform="translate(300, 190)">
        <rect x="-80" y="-30" width="160" height="60" rx="8" fill="rgba(0,0,0,0.8)" stroke="#34d399" strokeWidth="1.5" />
        <text x="0" y="5" fill="#34d399" fontSize="14" textAnchor="middle" fontWeight="600">Risk Sentinel</text>
      </g>
      <g transform="translate(600, 190)">
        <rect x="-80" y="-30" width="160" height="60" rx="8" fill="rgba(0,0,0,0.8)" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="0" y="5" fill="#3b82f6" fontSize="14" textAnchor="middle" fontWeight="600">Sanctions Guard</text>
      </g>
      <g transform="translate(900, 190)">
        <rect x="-80" y="-30" width="160" height="60" rx="8" fill="rgba(0,0,0,0.8)" stroke="#a855f7" strokeWidth="1.5" />
        <text x="0" y="5" fill="#a855f7" fontSize="14" textAnchor="middle" fontWeight="600">Reserve Watchdog</text>
      </g>

      {/* Layer 3: Data & TEE */}
      <g transform="translate(300, 310)">
        <rect x="-70" y="-20" width="140" height="40" rx="6" fill="rgba(59,130,246,0.05)" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="0" y="5" fill="#3b82f6" fontSize="12" textAnchor="middle">ETH/USD Feed</text>
      </g>
      <g transform="translate(600, 310)">
        <rect x="-90" y="-30" width="180" height="60" rx="8" fill="rgba(168,85,247,0.05)" stroke="#a855f7" strokeWidth="1.5" />
        <text x="0" y="5" fill="#a855f7" fontSize="13" textAnchor="middle">Sanctions API (TEE)</text>
      </g>
      <g transform="translate(900, 310)">
        <rect x="-80" y="-30" width="160" height="60" rx="8" fill="rgba(168,85,247,0.05)" stroke="#a855f7" strokeWidth="1.5" />
        <text x="0" y="5" fill="#a855f7" fontSize="13" textAnchor="middle">Bank API (TEE)</text>
      </g>

      {/* Layer 4: Smart Contracts */}
      <g transform="translate(450, 430)">
        <rect x="-100" y="-30" width="200" height="60" rx="8" fill="rgba(251,191,36,0.05)" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="0" y="5" fill="#fbbf24" fontSize="14" textAnchor="middle" fontWeight="600">RiskRegistry</text>
      </g>
      <g transform="translate(750, 430)">
        <rect x="-90" y="-30" width="180" height="60" rx="8" fill="rgba(251,191,36,0.05)" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="0" y="5" fill="#fbbf24" fontSize="14" textAnchor="middle" fontWeight="600">ComplianceGuard</text>
      </g>

      {/* Layer 5: Privacy */}
      <g transform="translate(450, 540)">
        <rect x="-90" y="-20" width="180" height="40" rx="20" fill="rgba(168,85,247,0.05)" stroke="#a855f7" strokeWidth="1.5" />
        <text x="0" y="5" fill="#a855f7" fontSize="12" textAnchor="middle">Shielded Addresses</text>
      </g>
      <g transform="translate(750, 540)">
        <rect x="-80" y="-20" width="160" height="40" rx="20" fill="rgba(251,191,36,0.05)" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="0" y="5" fill="#fbbf24" fontSize="12" textAnchor="middle">OCP Attestations</text>
      </g>
    </svg>
  );
}
