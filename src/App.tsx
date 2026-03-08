/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SvgParadox from './components/arch/SvgParadox';
import SvgSolution from './components/arch/SvgSolution';
import SvgRiskSentinel from './components/arch/SvgRiskSentinel';
import SvgSanctionsGuard from './components/arch/SvgSanctionsGuard';
import SvgReserveWatchdog from './components/arch/SvgReserveWatchdog';
import SvgPrivacyLayer from './components/arch/SvgPrivacyLayer';
import SvgOcpAttestations from './components/arch/SvgOcpAttestations';
import SvgFullArchitecture from './components/arch/SvgFullArchitecture';

function Section({ title, description, children, reverse = false }: { title: string, description: string, children: React.ReactNode, reverse?: boolean }) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 py-24 border-b border-white/5 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2">
        <div className="aspect-[8/5] bg-black rounded-xl border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 m-2"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 m-2"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 m-2"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 m-2"></div>
          {children}
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="text-lg text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="mb-32 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Architecture</h1>
          <p className="text-xl text-gray-400">A deep dive into how ComplianceShield resolves the paradox of on-chain privacy and regulatory compliance.</p>
        </div>

        <Section 
          title="The Paradox" 
          description="DeFi faces a fundamental tension: institutions need privacy to protect trade secrets and user data, but regulators demand transparency to monitor risks and enforce sanctions. Traditional systems force a choice between the two."
        >
          <SvgParadox />
        </Section>

        <Section 
          title="The Solution" 
          description="ComplianceShield uses Trusted Execution Environments (TEEs) to process sensitive data off-chain. The enclave ingests private inputs, runs verifiable compliance checks, and outputs cryptographic attestations to the blockchain—without ever revealing the underlying data."
          reverse
        >
          <SvgSolution />
        </Section>

        <Section 
          title="Risk Sentinel" 
          description="Continuous market monitoring powered by Chainlink Data Feeds. The Risk Engine evaluates protocol health against predefined thresholds. If critical risk levels are breached, it automatically triggers the ComplianceGuard to pause operations."
        >
          <SvgRiskSentinel />
        </Section>

        <Section 
          title="Sanctions Guard" 
          description="Real-time screening against global sanctions lists (OFAC, EU) within a secure enclave. Addresses are checked confidentially via HTTP APIs. Only the final verdict (Approved/Denied) is attested on-chain, protecting user privacy while ensuring compliance."
          reverse
        >
          <SvgSanctionsGuard />
        </Section>

        <Section 
          title="Reserve Watchdog" 
          description="Bridging off-chain assets with on-chain liabilities. The Watchdog securely queries bank APIs to verify fiat reserves, comparing them against token supply. If the collateralization ratio drops below 100%, protective measures are instantly activated."
        >
          <SvgReserveWatchdog />
        </Section>

        <Section 
          title="Privacy Layer" 
          description="Shielded transfers ensure that sender, recipient, and amounts remain confidential. Using ECDH key derivation and zero-knowledge proofs, transactions are executed privately while still carrying an OCP-compliant attestation."
          reverse
        >
          <SvgPrivacyLayer />
        </Section>

        <Section 
          title="OCP Attestations" 
          description="Every compliance check generates an immutable On-Chain Privacy (OCP) attestation. These attestations form a continuous, verifiable audit trail that regulators can inspect without accessing the underlying sensitive data."
        >
          <SvgOcpAttestations />
        </Section>

        <div className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Full Architecture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The complete ComplianceShield stack, from off-chain triggers to on-chain privacy layers.</p>
          </div>
          <div className="w-full aspect-[2/1] bg-black rounded-xl border border-white/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 m-2"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 m-2"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 m-2"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 m-2"></div>
            <SvgFullArchitecture />
          </div>
        </div>

      </div>
    </div>
  );
}
