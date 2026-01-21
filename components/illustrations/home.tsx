"use client";

import { BaseSVG } from "./IllustrationFrame";

// Systems Dashboard illustration
export function SystemsDashboardViz() {
  return (
    <BaseSVG>
      {/* Ambient glow */}
      <circle cx="600" cy="337" r="250" fill="#a855f7" fillOpacity="0.03" />

      {/* Title */}
      <text x="600" y="50" fontFamily="ui-monospace, monospace" fontSize="14" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">OPERATOR DASHBOARD</text>

      {/* Main dashboard container */}
      <rect x="100" y="80" width="1000" height="520" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.2" />

      {/* Top metrics row */}
      <rect x="130" y="110" width="220" height="100" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="150" y="145" fontFamily="system-ui" fontSize="12" fill="#71717a">Monthly Revenue</text>
      <text x="150" y="180" fontFamily="ui-monospace, monospace" fontSize="32" fill="#22c55e" fontWeight="600">$127K</text>
      <text x="280" y="180" fontFamily="system-ui" fontSize="14" fill="#22c55e">+18%</text>

      <rect x="370" y="110" width="220" height="100" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="390" y="145" fontFamily="system-ui" fontSize="12" fill="#71717a">Active Users</text>
      <text x="390" y="180" fontFamily="ui-monospace, monospace" fontSize="32" fill="#a855f7" fontWeight="600">2.4K</text>
      <text x="480" y="180" fontFamily="system-ui" fontSize="14" fill="#22c55e">+12%</text>

      <rect x="610" y="110" width="220" height="100" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="630" y="145" fontFamily="system-ui" fontSize="12" fill="#71717a">Conversion Rate</text>
      <text x="630" y="180" fontFamily="ui-monospace, monospace" fontSize="32" fill="#ffffff" fontWeight="600">4.2%</text>
      <text x="720" y="180" fontFamily="system-ui" fontSize="14" fill="#22c55e">+0.8pp</text>

      <rect x="850" y="110" width="220" height="100" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="870" y="145" fontFamily="system-ui" fontSize="12" fill="#71717a">Churn Rate</text>
      <text x="870" y="180" fontFamily="ui-monospace, monospace" fontSize="32" fill="#eab308" fontWeight="600">2.1%</text>
      <text x="950" y="180" fontFamily="system-ui" fontSize="14" fill="#22c55e">-0.3pp</text>

      {/* Chart area */}
      <rect x="130" y="230" width="620" height="280" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="150" y="265" fontFamily="system-ui" fontSize="13" fill="#71717a">Revenue Trend (12 months)</text>

      {/* Chart line */}
      <path d="M 170 450 L 230 420 L 290 435 L 350 400 L 410 380 L 470 350 L 530 320 L 590 290 L 650 260 L 710 240"
            fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
      <path d="M 170 450 L 230 420 L 290 435 L 350 400 L 410 380 L 470 350 L 530 320 L 590 290 L 650 260 L 710 240 L 710 480 L 170 480 Z"
            fill="url(#purple-glow)" fillOpacity="0.3" />

      {/* Chart dots */}
      <circle cx="710" cy="240" r="6" fill="#a855f7" filter="url(#glow)" />
      <circle cx="650" cy="260" r="4" fill="#a855f7" fillOpacity="0.7" />
      <circle cx="590" cy="290" r="4" fill="#a855f7" fillOpacity="0.7" />

      {/* Right sidebar - KPIs */}
      <rect x="770" y="230" width="300" height="280" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="790" y="265" fontFamily="system-ui" fontSize="13" fill="#71717a">Key Performance</text>

      {/* KPI items */}
      <rect x="790" y="285" width="260" height="50" rx="8" fill="#22c55e" fillOpacity="0.08" />
      <text x="810" y="315" fontFamily="system-ui" fontSize="12" fill="#d4d4d8">LTV:CAC Ratio</text>
      <text x="990" y="315" fontFamily="ui-monospace, monospace" fontSize="16" fill="#22c55e" textAnchor="end">4.2x</text>

      <rect x="790" y="345" width="260" height="50" rx="8" fill="#a855f7" fillOpacity="0.08" />
      <text x="810" y="375" fontFamily="system-ui" fontSize="12" fill="#d4d4d8">Payback Period</text>
      <text x="990" y="375" fontFamily="ui-monospace, monospace" fontSize="16" fill="#a855f7" textAnchor="end">4.8mo</text>

      <rect x="790" y="405" width="260" height="50" rx="8" fill="#eab308" fillOpacity="0.08" />
      <text x="810" y="435" fontFamily="system-ui" fontSize="12" fill="#d4d4d8">NPS Score</text>
      <text x="990" y="435" fontFamily="ui-monospace, monospace" fontSize="16" fill="#eab308" textAnchor="end">62</text>

      <rect x="790" y="465" width="260" height="30" rx="6" fill="#a855f7" fillOpacity="0.05" />
      <text x="920" y="485" fontFamily="system-ui" fontSize="10" fill="#52525b" textAnchor="middle">Updated 2 min ago</text>

      {/* Bottom status bar */}
      <rect x="130" y="530" width="940" height="50" rx="10" fill="#a855f7" fillOpacity="0.05" />
      <circle cx="160" cy="555" r="6" fill="#22c55e" />
      <text x="180" y="560" fontFamily="system-ui" fontSize="11" fill="#71717a">All systems operational</text>
      <text x="920" y="560" fontFamily="system-ui" fontSize="11" fill="#52525b" textAnchor="end">Last sync: Just now</text>
    </BaseSVG>
  );
}

// Automation Pipeline illustration
export function AutomationPipelineViz() {
  return (
    <BaseSVG>
      {/* Ambient glow */}
      <circle cx="600" cy="337" r="250" fill="#22c55e" fillOpacity="0.03" />

      {/* Title */}
      <text x="600" y="50" fontFamily="ui-monospace, monospace" fontSize="14" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">AUTOMATION PIPELINE</text>

      {/* Pipeline stages */}
      {/* Stage 1 - Trigger */}
      <rect x="80" y="150" width="200" height="140" rx="12" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.4" />
      <rect x="80" y="150" width="200" height="8" rx="12" fill="#a855f7" fillOpacity="0.5" />
      <text x="180" y="200" fontFamily="system-ui" fontSize="14" fill="#a855f7" textAnchor="middle" fontWeight="500">Trigger</text>
      <text x="180" y="225" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">New lead captured</text>
      <circle cx="180" cy="260" r="10" fill="#22c55e" fillOpacity="0.2" />
      <circle cx="180" cy="260" r="5" fill="#22c55e" />

      {/* Arrow 1 */}
      <path d="M 290 220 L 340 220" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowhead)" />
      <circle cx="315" cy="220" r="4" fill="#a855f7" fillOpacity="0.3" />

      {/* Stage 2 - Enrich */}
      <rect x="350" y="150" width="200" height="140" rx="12" fill="#1a0f2e" stroke="#22c55e" strokeOpacity="0.4" />
      <rect x="350" y="150" width="200" height="8" rx="12" fill="#22c55e" fillOpacity="0.5" />
      <text x="450" y="200" fontFamily="system-ui" fontSize="14" fill="#22c55e" textAnchor="middle" fontWeight="500">Enrich</text>
      <text x="450" y="225" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">API data lookup</text>
      <rect x="380" y="245" width="140" height="30" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="450" y="265" fontFamily="ui-monospace, monospace" fontSize="10" fill="#22c55e" textAnchor="middle">Processing...</text>

      {/* Arrow 2 */}
      <path d="M 560 220 L 610 220" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="585" cy="220" r="4" fill="#22c55e" fillOpacity="0.3" />

      {/* Stage 3 - Score */}
      <rect x="620" y="150" width="200" height="140" rx="12" fill="#1a0f2e" stroke="#eab308" strokeOpacity="0.4" />
      <rect x="620" y="150" width="200" height="8" rx="12" fill="#eab308" fillOpacity="0.5" />
      <text x="720" y="200" fontFamily="system-ui" fontSize="14" fill="#eab308" textAnchor="middle" fontWeight="500">Score</text>
      <text x="720" y="225" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">ML qualification</text>
      <text x="720" y="265" fontFamily="ui-monospace, monospace" fontSize="24" fill="#eab308" textAnchor="middle">87</text>

      {/* Arrow 3 */}
      <path d="M 830 220 L 880 220" stroke="#eab308" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="855" cy="220" r="4" fill="#eab308" fillOpacity="0.3" />

      {/* Stage 4 - Route */}
      <rect x="890" y="150" width="200" height="140" rx="12" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.4" />
      <rect x="890" y="150" width="200" height="8" rx="12" fill="#a855f7" fillOpacity="0.5" />
      <text x="990" y="200" fontFamily="system-ui" fontSize="14" fill="#a855f7" textAnchor="middle" fontWeight="500">Route</text>
      <text x="990" y="225" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">Assign to SDR</text>
      <rect x="920" y="245" width="140" height="30" rx="6" fill="#22c55e" fillOpacity="0.15" />
      <text x="990" y="265" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="middle">Completed</text>

      {/* Stats panel */}
      <rect x="80" y="350" width="1010" height="200" rx="12" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Pipeline stats */}
      <text x="120" y="390" fontFamily="system-ui" fontSize="13" fill="#71717a">Pipeline Performance (24h)</text>

      <rect x="120" y="410" width="230" height="80" rx="10" fill="#22c55e" fillOpacity="0.08" />
      <text x="140" y="440" fontFamily="system-ui" fontSize="11" fill="#71717a">Leads Processed</text>
      <text x="140" y="475" fontFamily="ui-monospace, monospace" fontSize="28" fill="#22c55e">1,247</text>

      <rect x="370" y="410" width="230" height="80" rx="10" fill="#a855f7" fillOpacity="0.08" />
      <text x="390" y="440" fontFamily="system-ui" fontSize="11" fill="#71717a">Avg Processing Time</text>
      <text x="390" y="475" fontFamily="ui-monospace, monospace" fontSize="28" fill="#a855f7">2.4s</text>

      <rect x="620" y="410" width="230" height="80" rx="10" fill="#eab308" fillOpacity="0.08" />
      <text x="640" y="440" fontFamily="system-ui" fontSize="11" fill="#71717a">Qualified Rate</text>
      <text x="640" y="475" fontFamily="ui-monospace, monospace" fontSize="28" fill="#eab308">34%</text>

      <rect x="870" y="410" width="200" height="80" rx="10" fill="#a855f7" fillOpacity="0.05" />
      <text x="890" y="440" fontFamily="system-ui" fontSize="11" fill="#71717a">Error Rate</text>
      <text x="890" y="475" fontFamily="ui-monospace, monospace" fontSize="28" fill="#22c55e">0.1%</text>

      {/* Live indicator */}
      <circle cx="1040" y="390" r="5" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="1010" y="395" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="end">LIVE</text>
    </BaseSVG>
  );
}

// Distribution Analytics illustration
export function DistributionAnalyticsViz() {
  return (
    <BaseSVG>
      {/* Ambient glow */}
      <circle cx="600" cy="337" r="250" fill="#eab308" fillOpacity="0.03" />

      {/* Title */}
      <text x="600" y="50" fontFamily="ui-monospace, monospace" fontSize="14" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">DISTRIBUTION ANALYTICS</text>

      {/* Funnel visualization */}
      <rect x="80" y="80" width="500" height="520" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="120" y="120" fontFamily="system-ui" fontSize="13" fill="#71717a">Acquisition Funnel</text>

      {/* Funnel stages */}
      <path d="M 140 160 L 500 160 L 460 230 L 180 230 Z" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeOpacity="0.5" />
      <text x="320" y="200" fontFamily="system-ui" fontSize="12" fill="#ffffff" textAnchor="middle">Visitors: 45,230</text>

      <path d="M 180 245 L 460 245 L 420 315 L 220 315 Z" fill="#a855f7" fillOpacity="0.25" stroke="#a855f7" strokeOpacity="0.4" />
      <text x="320" y="285" fontFamily="system-ui" fontSize="12" fill="#d4d4d8" textAnchor="middle">Signups: 4,892</text>

      <path d="M 220 330 L 420 330 L 380 400 L 260 400 Z" fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeOpacity="0.4" />
      <text x="320" y="370" fontFamily="system-ui" fontSize="12" fill="#d4d4d8" textAnchor="middle">Activated: 2,156</text>

      <path d="M 260 415 L 380 415 L 350 485 L 290 485 Z" fill="#22c55e" fillOpacity="0.35" stroke="#22c55e" strokeOpacity="0.5" />
      <text x="320" y="455" fontFamily="system-ui" fontSize="12" fill="#22c55e" textAnchor="middle">Converted: 847</text>

      {/* Conversion rates */}
      <text x="510" y="200" fontFamily="ui-monospace, monospace" fontSize="11" fill="#a855f7">10.8%</text>
      <text x="510" y="285" fontFamily="ui-monospace, monospace" fontSize="11" fill="#a855f7">44.1%</text>
      <text x="510" y="370" fontFamily="ui-monospace, monospace" fontSize="11" fill="#22c55e">39.3%</text>

      {/* Channel breakdown */}
      <rect x="620" y="80" width="480" height="250" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="660" y="120" fontFamily="system-ui" fontSize="13" fill="#71717a">Channel Performance</text>

      {/* Channel bars */}
      <text x="660" y="165" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Organic Search</text>
      <rect x="780" y="150" width="280" height="20" rx="4" fill="#12081f" />
      <rect x="780" y="150" width="220" height="20" rx="4" fill="#22c55e" fillOpacity="0.6" />
      <text x="1010" y="165" fontFamily="ui-monospace, monospace" fontSize="11" fill="#22c55e">38%</text>

      <text x="660" y="205" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Paid Social</text>
      <rect x="780" y="190" width="280" height="20" rx="4" fill="#12081f" />
      <rect x="780" y="190" width="150" height="20" rx="4" fill="#a855f7" fillOpacity="0.6" />
      <text x="940" y="205" fontFamily="ui-monospace, monospace" fontSize="11" fill="#a855f7">26%</text>

      <text x="660" y="245" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Referral</text>
      <rect x="780" y="230" width="280" height="20" rx="4" fill="#12081f" />
      <rect x="780" y="230" width="115" height="20" rx="4" fill="#eab308" fillOpacity="0.6" />
      <text x="905" y="245" fontFamily="ui-monospace, monospace" fontSize="11" fill="#eab308">20%</text>

      <text x="660" y="285" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Direct</text>
      <rect x="780" y="270" width="280" height="20" rx="4" fill="#12081f" />
      <rect x="780" y="270" width="90" height="20" rx="4" fill="#71717a" fillOpacity="0.6" />
      <text x="880" y="285" fontFamily="ui-monospace, monospace" fontSize="11" fill="#71717a">16%</text>

      {/* ROI metrics */}
      <rect x="620" y="350" width="480" height="250" rx="16" fill="#1a0f2e" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="660" y="390" fontFamily="system-ui" fontSize="13" fill="#22c55e">ROI by Channel</text>

      <rect x="660" y="420" width="140" height="90" rx="10" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="730" y="455" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">Organic</text>
      <text x="730" y="490" fontFamily="ui-monospace, monospace" fontSize="24" fill="#22c55e" textAnchor="middle">12.4x</text>

      <rect x="820" y="420" width="140" height="90" rx="10" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="890" y="455" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">Paid</text>
      <text x="890" y="490" fontFamily="ui-monospace, monospace" fontSize="24" fill="#a855f7" textAnchor="middle">3.2x</text>

      <rect x="980" y="420" width="100" height="90" rx="10" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeOpacity="0.2" />
      <text x="1030" y="455" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">Referral</text>
      <text x="1030" y="490" fontFamily="ui-monospace, monospace" fontSize="24" fill="#eab308" textAnchor="middle">8.7x</text>

      {/* Trend summary */}
      <rect x="660" y="530" width="420" height="50" rx="8" fill="#22c55e" fillOpacity="0.08" />
      <text x="870" y="560" fontFamily="system-ui" fontSize="12" fill="#22c55e" textAnchor="middle">Overall CAC down 23% MoM while conversion up 15%</text>
    </BaseSVG>
  );
}
