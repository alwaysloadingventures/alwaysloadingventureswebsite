"use client";

import { BaseSVG } from "./IllustrationFrame";

// Venture Blueprint
export function VentureBlueprintViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#a855f7" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">VENTURE BLUEPRINT</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Three pillars */}
      {/* Pillar 1 - Product */}
      <rect x="90" y="100" width="320" height="360" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.4" />
      <rect x="90" y="100" width="320" height="8" rx="12" fill="#a855f7" fillOpacity="0.6" />
      <text x="250" y="145" fontFamily="system-ui" fontSize="16" fill="#a855f7" textAnchor="middle" fontWeight="500">Product</text>

      <rect x="110" y="170" width="280" height="40" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="130" y="195" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Core value proposition</text>
      <text x="370" y="195" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="end">Done</text>

      <rect x="110" y="220" width="280" height="40" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="130" y="245" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">MVP scope defined</text>
      <text x="370" y="245" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="end">Done</text>

      <rect x="110" y="270" width="280" height="40" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="130" y="295" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Tech stack selected</text>
      <text x="370" y="295" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="end">Done</text>

      <rect x="110" y="320" width="280" height="40" rx="6" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="130" y="345" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Roadmap (6 months)</text>
      <text x="370" y="345" fontFamily="system-ui" fontSize="10" fill="#a855f7" textAnchor="end">75%</text>

      <rect x="110" y="380" width="280" height="8" rx="4" fill="#12081f" />
      <rect x="110" y="380" width="252" height="8" rx="4" fill="#22c55e" fillOpacity="0.5" />

      <rect x="110" y="410" width="280" height="35" rx="6" fill="#22c55e" fillOpacity="0.15" />
      <text x="250" y="432" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle">Validated</text>

      {/* Pillar 2 - Operations */}
      <rect x="430" y="100" width="320" height="360" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.5" />
      <rect x="430" y="100" width="320" height="8" rx="12" fill="#a855f7" fillOpacity="0.8" />
      <text x="590" y="145" fontFamily="system-ui" fontSize="16" fill="#a855f7" textAnchor="middle" fontWeight="500">Operations</text>

      <rect x="450" y="170" width="280" height="40" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="470" y="195" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Team structure</text>
      <text x="710" y="195" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="end">Done</text>

      <rect x="450" y="220" width="280" height="40" rx="6" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="470" y="245" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Process design</text>
      <text x="710" y="245" fontFamily="system-ui" fontSize="10" fill="#a855f7" textAnchor="end">60%</text>

      <rect x="450" y="270" width="280" height="40" rx="6" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="470" y="295" fontFamily="system-ui" fontSize="11" fill="#71717a">Tools + systems</text>
      <text x="710" y="295" fontFamily="system-ui" fontSize="10" fill="#71717a" textAnchor="end">40%</text>

      <rect x="450" y="320" width="280" height="40" rx="6" fill="#a855f7" fillOpacity="0.05" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="470" y="345" fontFamily="system-ui" fontSize="11" fill="#52525b">KPIs defined</text>
      <text x="710" y="345" fontFamily="system-ui" fontSize="10" fill="#52525b" textAnchor="end">10%</text>

      <rect x="450" y="380" width="280" height="8" rx="4" fill="#12081f" />
      <rect x="450" y="380" width="140" height="8" rx="4" fill="#a855f7" fillOpacity="0.5" />

      <rect x="450" y="410" width="280" height="35" rx="6" fill="#a855f7" fillOpacity="0.15" />
      <text x="590" y="432" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle">In Progress</text>

      {/* Pillar 3 - Distribution */}
      <rect x="770" y="100" width="320" height="360" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <rect x="770" y="100" width="320" height="8" rx="12" fill="#a855f7" fillOpacity="0.3" />
      <text x="930" y="145" fontFamily="system-ui" fontSize="16" fill="#71717a" textAnchor="middle" fontWeight="500">Distribution</text>

      <rect x="790" y="170" width="280" height="40" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="810" y="195" fontFamily="system-ui" fontSize="11" fill="#52525b">Channel strategy</text>

      <rect x="790" y="220" width="280" height="40" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="810" y="245" fontFamily="system-ui" fontSize="11" fill="#52525b">GTM plan</text>

      <rect x="790" y="270" width="280" height="40" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="810" y="295" fontFamily="system-ui" fontSize="11" fill="#52525b">Partnership leads</text>

      <rect x="790" y="320" width="280" height="40" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="810" y="345" fontFamily="system-ui" fontSize="11" fill="#52525b">Launch timeline</text>

      <rect x="790" y="380" width="280" height="8" rx="4" fill="#12081f" />

      <rect x="790" y="410" width="280" height="35" rx="6" fill="#a855f7" fillOpacity="0.05" />
      <text x="930" y="432" fontFamily="system-ui" fontSize="11" fill="#52525b" textAnchor="middle">Planned</text>

      {/* Progress bar */}
      <rect x="90" y="485" width="1000" height="90" rx="10" fill="#a855f7" fillOpacity="0.05" />
      <text x="120" y="520" fontFamily="system-ui" fontSize="12" fill="#71717a">Overall Blueprint Progress</text>
      <rect x="120" y="540" width="820" height="12" rx="5" fill="#12081f" />
      <rect x="120" y="540" width="540" height="12" rx="5" fill="#a855f7" fillOpacity="0.5" />
      <text x="960" y="552" fontFamily="ui-monospace, monospace" fontSize="18" fill="#a855f7">67%</text>
    </BaseSVG>
  );
}

// Distribution Engine / Flywheel
export function DistributionEngineViz() {
  return (
    <BaseSVG>
      <circle cx="400" cy="337" r="250" fill="#22c55e" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">DISTRIBUTION ENGINE</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Flywheel circles */}
      <circle cx="360" cy="340" r="200" fill="none" stroke="#a855f7" strokeOpacity="0.15" strokeWidth="2" />
      <circle cx="360" cy="340" r="150" fill="none" stroke="#a855f7" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="8,4" />
      <circle cx="360" cy="340" r="100" fill="none" stroke="#a855f7" strokeOpacity="0.08" />

      {/* Center hub */}
      <circle cx="360" cy="340" r="50" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="2" />
      <text x="360" y="335" fontFamily="system-ui" fontSize="14" fill="#a855f7" textAnchor="middle" fontWeight="500">Growth</text>
      <text x="360" y="352" fontFamily="system-ui" fontSize="10" fill="#71717a" textAnchor="middle">Flywheel</text>

      {/* Flywheel nodes */}
      <circle cx="360" cy="140" r="35" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="2" />
      <text x="360" y="145" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle">Acquire</text>

      <circle cx="520" cy="220" r="35" fill="#1a0f2e" stroke="#22c55e" strokeOpacity="0.5" strokeWidth="2" />
      <text x="520" y="225" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle">Activate</text>

      <circle cx="520" cy="460" r="35" fill="#1a0f2e" stroke="#eab308" strokeOpacity="0.5" strokeWidth="2" />
      <text x="520" y="465" fontFamily="system-ui" fontSize="11" fill="#eab308" textAnchor="middle">Retain</text>

      <circle cx="360" cy="540" r="35" fill="#1a0f2e" stroke="#ec4899" strokeOpacity="0.5" strokeWidth="2" />
      <text x="360" y="545" fontFamily="system-ui" fontSize="11" fill="#ec4899" textAnchor="middle">Expand</text>

      <circle cx="200" cy="460" r="35" fill="#1a0f2e" stroke="#06b6d4" strokeOpacity="0.5" strokeWidth="2" />
      <text x="200" y="465" fontFamily="system-ui" fontSize="11" fill="#06b6d4" textAnchor="middle">Refer</text>

      <circle cx="200" cy="220" r="35" fill="#1a0f2e" stroke="#8b5cf6" strokeOpacity="0.5" strokeWidth="2" />
      <text x="200" y="218" fontFamily="system-ui" fontSize="10" fill="#8b5cf6" textAnchor="middle">Com-</text>
      <text x="200" y="230" fontFamily="system-ui" fontSize="10" fill="#8b5cf6" textAnchor="middle">pound</text>

      {/* Curved arrows */}
      <path d="M 390 150 Q 450 165 500 200" fill="none" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M 540 250 Q 555 340 540 430" fill="none" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M 500 480 Q 440 520 395 530" fill="none" stroke="#eab308" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M 330 530 Q 260 510 220 480" fill="none" stroke="#ec4899" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M 185 430 Q 170 340 185 250" fill="none" stroke="#06b6d4" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M 220 200 Q 280 165 330 150" fill="none" stroke="#8b5cf6" strokeOpacity="0.4" strokeWidth="2" />

      {/* Metrics panels */}
      <rect x="620" y="100" width="220" height="130" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="640" y="135" fontFamily="system-ui" fontSize="11" fill="#71717a">Growth Velocity</text>
      <text x="640" y="175" fontFamily="ui-monospace, monospace" fontSize="32" fill="#22c55e" fontWeight="600">+42%</text>
      <text x="770" y="175" fontFamily="system-ui" fontSize="12" fill="#71717a">MoM</text>
      <rect x="640" y="200" width="180" height="6" rx="3" fill="#22c55e" fillOpacity="0.3" />

      <rect x="860" y="100" width="220" height="130" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="880" y="135" fontFamily="system-ui" fontSize="11" fill="#71717a">CAC Payback</text>
      <text x="880" y="175" fontFamily="ui-monospace, monospace" fontSize="32" fill="#ffffff" fontWeight="600">4.2</text>
      <text x="945" y="175" fontFamily="system-ui" fontSize="12" fill="#71717a">months</text>
      <text x="880" y="205" fontFamily="system-ui" fontSize="10" fill="#22c55e">Target: &lt;6mo</text>

      <rect x="620" y="250" width="220" height="130" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="640" y="285" fontFamily="system-ui" fontSize="11" fill="#71717a">Viral Coefficient</text>
      <text x="640" y="325" fontFamily="ui-monospace, monospace" fontSize="32" fill="#a855f7" fontWeight="600">1.3</text>
      <text x="720" y="325" fontFamily="system-ui" fontSize="12" fill="#22c55e">Growing</text>
      <text x="640" y="360" fontFamily="system-ui" fontSize="10" fill="#71717a">Organic &gt; Paid</text>

      <rect x="860" y="250" width="220" height="130" rx="10" fill="#12081f" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="880" y="285" fontFamily="system-ui" fontSize="11" fill="#22c55e">Net Revenue Retention</text>
      <text x="880" y="325" fontFamily="ui-monospace, monospace" fontSize="32" fill="#22c55e" fontWeight="600">118%</text>
      <text x="880" y="360" fontFamily="system-ui" fontSize="10" fill="#71717a">Expansion &gt; Churn</text>

      {/* Bottom metrics row */}
      <rect x="620" y="400" width="460" height="80" rx="10" fill="#a855f7" fillOpacity="0.05" />
      <text x="850" y="445" fontFamily="system-ui" fontSize="12" fill="#a855f7" textAnchor="middle">Flywheel momentum increasing. Organic acquisition now exceeds paid.</text>
    </BaseSVG>
  );
}

// Scale Infrastructure
export function ScaleInfrastructureViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#eab308" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">SCALE INFRASTRUCTURE</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Stack layers */}
      <rect x="100" y="100" width="1000" height="85" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="2" />
      <rect x="100" y="100" width="1000" height="8" rx="10" fill="#a855f7" fillOpacity="0.5" />
      <text x="140" y="150" fontFamily="system-ui" fontSize="14" fill="#a855f7" fontWeight="500">Application Layer</text>
      <circle cx="400" cy="142" r="8" fill="#22c55e" />
      <circle cx="425" cy="142" r="8" fill="#22c55e" />
      <circle cx="450" cy="142" r="8" fill="#22c55e" />
      <text x="475" y="148" fontFamily="system-ui" fontSize="11" fill="#22c55e">3 instances healthy</text>
      <rect x="900" y="128" width="100" height="30" rx="5" fill="#22c55e" fillOpacity="0.15" />
      <text x="930" y="148" fontFamily="system-ui" fontSize="11" fill="#22c55e">Healthy</text>

      <rect x="100" y="200" width="1000" height="85" rx="10" fill="#12081f" stroke="#22c55e" strokeOpacity="0.3" />
      <text x="140" y="250" fontFamily="system-ui" fontSize="14" fill="#22c55e" fontWeight="500">Compliance + Security</text>
      <rect x="400" y="228" width="65" height="28" rx="5" fill="#22c55e" fillOpacity="0.2" />
      <text x="415" y="247" fontFamily="system-ui" fontSize="10" fill="#22c55e">SOC 2</text>
      <rect x="480" y="228" width="65" height="28" rx="5" fill="#22c55e" fillOpacity="0.2" />
      <text x="495" y="247" fontFamily="system-ui" fontSize="10" fill="#22c55e">GDPR</text>
      <rect x="560" y="228" width="50" height="28" rx="5" fill="#22c55e" fillOpacity="0.15" />
      <text x="572" y="247" fontFamily="system-ui" fontSize="10" fill="#22c55e">PCI</text>
      <rect x="900" y="228" width="100" height="30" rx="5" fill="#22c55e" fillOpacity="0.15" />
      <text x="935" y="248" fontFamily="system-ui" fontSize="11" fill="#22c55e">Active</text>

      <rect x="100" y="300" width="1000" height="85" rx="10" fill="#12081f" stroke="#eab308" strokeOpacity="0.3" />
      <text x="140" y="350" fontFamily="system-ui" fontSize="14" fill="#eab308" fontWeight="500">Performance + Monitoring</text>
      <text x="400" y="340" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">99.9% uptime</text>
      <text x="400" y="360" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">p99: 120ms</text>
      <text x="550" y="340" fontFamily="system-ui" fontSize="10" fill="#71717a">Alerts: 0</text>
      <text x="550" y="360" fontFamily="system-ui" fontSize="10" fill="#71717a">Errors: 0.01%</text>
      <rect x="900" y="328" width="100" height="30" rx="5" fill="#eab308" fillOpacity="0.15" />
      <text x="930" y="348" fontFamily="system-ui" fontSize="11" fill="#eab308">Scaling</text>

      <rect x="100" y="400" width="1000" height="85" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="140" y="450" fontFamily="system-ui" fontSize="14" fill="#71717a" fontWeight="500">Data + Analytics</text>
      <text x="400" y="440" fontFamily="system-ui" fontSize="10" fill="#52525b">Warehouse</text>
      <text x="400" y="460" fontFamily="system-ui" fontSize="10" fill="#52525b">Pipelines</text>
      <text x="550" y="440" fontFamily="system-ui" fontSize="10" fill="#52525b">BI</text>
      <text x="550" y="460" fontFamily="system-ui" fontSize="10" fill="#52525b">ML ready</text>
      <rect x="900" y="428" width="100" height="30" rx="5" fill="#a855f7" fillOpacity="0.1" />
      <text x="935" y="448" fontFamily="system-ui" fontSize="11" fill="#71717a">Ready</text>

      {/* Bottom metrics */}
      <rect x="100" y="510" width="300" height="60" rx="8" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="140" y="547" fontFamily="system-ui" fontSize="11" fill="#22c55e">Trust Score: 94</text>

      <rect x="430" y="510" width="300" height="60" rx="8" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="480" y="547" fontFamily="system-ui" fontSize="11" fill="#a855f7">Load: 2.4K rps</text>

      <rect x="760" y="510" width="340" height="60" rx="8" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeOpacity="0.2" />
      <text x="830" y="547" fontFamily="system-ui" fontSize="11" fill="#eab308">Auto-scale: ON</text>
    </BaseSVG>
  );
}
