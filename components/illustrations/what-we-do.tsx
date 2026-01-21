"use client";

import { BaseSVG } from "./IllustrationFrame";

// Operator Dashboard for What We Do
export function OperatorDashboardViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#a855f7" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">OPERATOR COMMAND CENTER</text>

      {/* Main dashboard grid */}
      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Left column - Priority metrics */}
      <rect x="85" y="95" width="320" height="490" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="110" y="130" fontFamily="system-ui" fontSize="12" fill="#a855f7" fontWeight="500">PRIORITY METRICS</text>

      {/* Metric cards */}
      <rect x="105" y="155" width="280" height="70" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="125" y="185" fontFamily="system-ui" fontSize="11" fill="#71717a">Revenue Velocity</text>
      <text x="125" y="210" fontFamily="ui-monospace, monospace" fontSize="22" fill="#22c55e">+$47K/mo</text>
      <circle cx="355" cy="190" r="6" fill="#22c55e" />

      <rect x="105" y="240" width="280" height="70" rx="8" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="125" y="270" fontFamily="system-ui" fontSize="11" fill="#71717a">Execution Velocity</text>
      <text x="125" y="295" fontFamily="ui-monospace, monospace" fontSize="22" fill="#a855f7">94 pts/wk</text>
      <circle cx="355" cy="275" r="6" fill="#a855f7" />

      <rect x="105" y="325" width="280" height="70" rx="8" fill="#eab308" fillOpacity="0.08" stroke="#eab308" strokeOpacity="0.2" />
      <text x="125" y="355" fontFamily="system-ui" fontSize="11" fill="#71717a">Burn Multiple</text>
      <text x="125" y="380" fontFamily="ui-monospace, monospace" fontSize="22" fill="#eab308">1.2x</text>
      <circle cx="355" cy="360" r="6" fill="#eab308" />

      <rect x="105" y="410" width="280" height="70" rx="8" fill="#a855f7" fillOpacity="0.05" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="125" y="440" fontFamily="system-ui" fontSize="11" fill="#71717a">Team Velocity</text>
      <text x="125" y="465" fontFamily="ui-monospace, monospace" fontSize="22" fill="#d4d4d8">87%</text>
      <circle cx="355" cy="445" r="6" fill="#71717a" />

      {/* Health score */}
      <rect x="105" y="500" width="280" height="60" rx="8" fill="#22c55e" fillOpacity="0.1" />
      <text x="245" y="538" fontFamily="system-ui" fontSize="13" fill="#22c55e" textAnchor="middle" fontWeight="500">Health Score: 92</text>

      {/* Center - Execution timeline */}
      <rect x="425" y="95" width="400" height="490" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="450" y="130" fontFamily="system-ui" fontSize="12" fill="#a855f7" fontWeight="500">EXECUTION TIMELINE</text>

      {/* Timeline items */}
      <line x1="470" y1="160" x2="470" y2="540" stroke="#a855f7" strokeOpacity="0.2" strokeWidth="2" />

      <circle cx="470" cy="180" r="8" fill="#22c55e" />
      <rect x="495" y="165" width="310" height="55" rx="6" fill="#22c55e" fillOpacity="0.08" />
      <text x="515" y="190" fontFamily="system-ui" fontSize="11" fill="#22c55e" fontWeight="500">Payment Integration</text>
      <text x="515" y="208" fontFamily="system-ui" fontSize="10" fill="#71717a">Shipped this week</text>

      <circle cx="470" cy="260" r="8" fill="#a855f7" />
      <rect x="495" y="245" width="310" height="55" rx="6" fill="#a855f7" fillOpacity="0.08" />
      <text x="515" y="270" fontFamily="system-ui" fontSize="11" fill="#a855f7" fontWeight="500">Onboarding Flow v2</text>
      <text x="515" y="288" fontFamily="system-ui" fontSize="10" fill="#71717a">In progress - 75%</text>

      <circle cx="470" cy="340" r="8" fill="#eab308" />
      <rect x="495" y="325" width="310" height="55" rx="6" fill="#eab308" fillOpacity="0.08" />
      <text x="515" y="350" fontFamily="system-ui" fontSize="11" fill="#eab308" fontWeight="500">Analytics Dashboard</text>
      <text x="515" y="368" fontFamily="system-ui" fontSize="10" fill="#71717a">Blocked - awaiting API</text>

      <circle cx="470" cy="420" r="6" fill="#71717a" fillOpacity="0.5" />
      <rect x="495" y="405" width="310" height="55" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="515" y="430" fontFamily="system-ui" fontSize="11" fill="#71717a">API Rate Limiting</text>
      <text x="515" y="448" fontFamily="system-ui" fontSize="10" fill="#52525b">Queued for next sprint</text>

      <circle cx="470" cy="500" r="6" fill="#71717a" fillOpacity="0.3" />
      <rect x="495" y="485" width="310" height="55" rx="6" fill="#a855f7" fillOpacity="0.02" />
      <text x="515" y="510" fontFamily="system-ui" fontSize="11" fill="#52525b">Mobile Optimization</text>
      <text x="515" y="528" fontFamily="system-ui" fontSize="10" fill="#52525b">Backlog</text>

      {/* Right column - Quick actions */}
      <rect x="845" y="95" width="270" height="490" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="870" y="130" fontFamily="system-ui" fontSize="12" fill="#a855f7" fontWeight="500">QUICK ACTIONS</text>

      <rect x="865" y="155" width="230" height="45" rx="6" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeOpacity="0.3" />
      <text x="980" y="183" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle">Create Sprint</text>

      <rect x="865" y="215" width="230" height="45" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="980" y="243" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle">Ship Feature</text>

      <rect x="865" y="275" width="230" height="45" rx="6" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="980" y="303" fontFamily="system-ui" fontSize="11" fill="#d4d4d8" textAnchor="middle">Review Metrics</text>

      <rect x="865" y="335" width="230" height="45" rx="6" fill="#a855f7" fillOpacity="0.05" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="980" y="363" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">Update Roadmap</text>

      {/* Activity feed */}
      <text x="870" y="420" fontFamily="system-ui" fontSize="11" fill="#71717a">Recent Activity</text>
      <rect x="865" y="435" width="230" height="130" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="880" y="460" fontFamily="system-ui" fontSize="10" fill="#22c55e">Deploy #247 succeeded</text>
      <text x="880" y="480" fontFamily="system-ui" fontSize="10" fill="#a855f7">PR merged: auth-refactor</text>
      <text x="880" y="500" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">KPI sync completed</text>
      <text x="880" y="520" fontFamily="system-ui" fontSize="10" fill="#71717a">Sprint #12 started</text>
      <text x="880" y="540" fontFamily="system-ui" fontSize="10" fill="#52525b">2 alerts resolved</text>
    </BaseSVG>
  );
}

// Automation Workflow
export function AutomationWorkflowViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#22c55e" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">AUTOMATION WORKFLOW ENGINE</text>

      {/* Workflow canvas */}
      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Workflow nodes - Row 1 */}
      <rect x="100" y="120" width="180" height="100" rx="10" fill="#12081f" stroke="#22c55e" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="190" cy="155" r="15" fill="#22c55e" fillOpacity="0.2" />
      <text x="190" y="160" fontFamily="system-ui" fontSize="12" fill="#22c55e" textAnchor="middle">1</text>
      <text x="190" y="190" fontFamily="system-ui" fontSize="11" fill="#d4d4d8" textAnchor="middle">Webhook Trigger</text>
      <text x="190" y="205" fontFamily="system-ui" fontSize="9" fill="#71717a" textAnchor="middle">New form submission</text>

      {/* Arrow */}
      <path d="M 290 170 L 360 170" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="5,5" />
      <polygon points="360,165 375,170 360,175" fill="#22c55e" fillOpacity="0.5" />

      <rect x="385" y="120" width="180" height="100" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="475" cy="155" r="15" fill="#a855f7" fillOpacity="0.2" />
      <text x="475" y="160" fontFamily="system-ui" fontSize="12" fill="#a855f7" textAnchor="middle">2</text>
      <text x="475" y="190" fontFamily="system-ui" fontSize="11" fill="#d4d4d8" textAnchor="middle">Data Enrichment</text>
      <text x="475" y="205" fontFamily="system-ui" fontSize="9" fill="#71717a" textAnchor="middle">Clearbit + LinkedIn</text>

      <path d="M 575 170 L 645 170" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="5,5" />
      <polygon points="645,165 660,170 645,175" fill="#a855f7" fillOpacity="0.5" />

      <rect x="670" y="120" width="180" height="100" rx="10" fill="#12081f" stroke="#eab308" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="760" cy="155" r="15" fill="#eab308" fillOpacity="0.2" />
      <text x="760" y="160" fontFamily="system-ui" fontSize="12" fill="#eab308" textAnchor="middle">3</text>
      <text x="760" y="190" fontFamily="system-ui" fontSize="11" fill="#d4d4d8" textAnchor="middle">AI Classification</text>
      <text x="760" y="205" fontFamily="system-ui" fontSize="9" fill="#71717a" textAnchor="middle">GPT-4 scoring</text>

      {/* Branch indicator */}
      <path d="M 760 230 L 760 280" stroke="#eab308" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="760" cy="290" r="8" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeOpacity="0.5" />

      {/* Branch paths */}
      <path d="M 752 290 L 400 290 L 400 350" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.4" />
      <path d="M 768 290 L 1000 290 L 1000 350" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.4" />

      {/* Row 2 - Conditional branches */}
      <rect x="300" y="360" width="200" height="90" rx="10" fill="#12081f" stroke="#22c55e" strokeOpacity="0.4" />
      <text x="400" y="395" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle" fontWeight="500">High Score Path</text>
      <text x="400" y="420" fontFamily="system-ui" fontSize="10" fill="#71717a" textAnchor="middle">Assign to SDR + Slack</text>
      <text x="400" y="440" fontFamily="system-ui" fontSize="9" fill="#22c55e" textAnchor="middle">Score ≥ 80</text>

      <rect x="900" y="360" width="200" height="90" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.4" />
      <text x="1000" y="395" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle" fontWeight="500">Nurture Path</text>
      <text x="1000" y="420" fontFamily="system-ui" fontSize="10" fill="#71717a" textAnchor="middle">Email sequence</text>
      <text x="1000" y="440" fontFamily="system-ui" fontSize="9" fill="#a855f7" textAnchor="middle">Score &lt; 80</text>

      {/* Merge back */}
      <path d="M 400 460 L 400 510 L 600 510" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M 1000 460 L 1000 510 L 600 510" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.3" />

      {/* Final node */}
      <rect x="500" y="520" width="200" height="70" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="2" />
      <text x="600" y="555" fontFamily="system-ui" fontSize="11" fill="#d4d4d8" textAnchor="middle" fontWeight="500">Update CRM + Log</text>
      <text x="600" y="575" fontFamily="system-ui" fontSize="9" fill="#71717a" textAnchor="middle">Sync to Salesforce</text>

      {/* Stats sidebar */}
      <rect x="80" y="300" width="180" height="280" rx="10" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="100" y="330" fontFamily="system-ui" fontSize="11" fill="#71717a">Workflow Stats</text>

      <text x="100" y="365" fontFamily="system-ui" fontSize="10" fill="#52525b">Runs today</text>
      <text x="240" y="365" fontFamily="ui-monospace, monospace" fontSize="14" fill="#22c55e" textAnchor="end">1,247</text>

      <text x="100" y="400" fontFamily="system-ui" fontSize="10" fill="#52525b">Avg duration</text>
      <text x="240" y="400" fontFamily="ui-monospace, monospace" fontSize="14" fill="#a855f7" textAnchor="end">3.2s</text>

      <text x="100" y="435" fontFamily="system-ui" fontSize="10" fill="#52525b">Success rate</text>
      <text x="240" y="435" fontFamily="ui-monospace, monospace" fontSize="14" fill="#22c55e" textAnchor="end">99.8%</text>

      <text x="100" y="470" fontFamily="system-ui" fontSize="10" fill="#52525b">High score %</text>
      <text x="240" y="470" fontFamily="ui-monospace, monospace" fontSize="14" fill="#eab308" textAnchor="end">34%</text>

      <rect x="100" y="500" width="140" height="60" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="170" y="535" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle">Active</text>
    </BaseSVG>
  );
}

// Distribution Funnel
export function DistributionFunnelViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#eab308" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">DISTRIBUTION FUNNEL</text>

      {/* Main container */}
      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Funnel visualization - Left side */}
      <rect x="85" y="100" width="550" height="480" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="110" y="135" fontFamily="system-ui" fontSize="12" fill="#a855f7" fontWeight="500">CONVERSION FUNNEL</text>

      {/* Funnel stages */}
      <path d="M 150 180 L 550 180 L 510 250 L 190 250 Z" fill="#a855f7" fillOpacity="0.25" stroke="#a855f7" strokeOpacity="0.4" />
      <text x="350" y="220" fontFamily="system-ui" fontSize="13" fill="#ffffff" textAnchor="middle">Awareness</text>
      <text x="350" y="240" fontFamily="ui-monospace, monospace" fontSize="11" fill="#a855f7" textAnchor="middle">125,000</text>

      <path d="M 190 265 L 510 265 L 470 335 L 230 335 Z" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeOpacity="0.3" />
      <text x="350" y="305" fontFamily="system-ui" fontSize="13" fill="#d4d4d8" textAnchor="middle">Interest</text>
      <text x="350" y="325" fontFamily="ui-monospace, monospace" fontSize="11" fill="#a855f7" textAnchor="middle">45,230</text>

      <path d="M 230 350 L 470 350 L 430 420 L 270 420 Z" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeOpacity="0.3" />
      <text x="350" y="390" fontFamily="system-ui" fontSize="13" fill="#d4d4d8" textAnchor="middle">Consideration</text>
      <text x="350" y="410" fontFamily="ui-monospace, monospace" fontSize="11" fill="#22c55e" textAnchor="middle">12,450</text>

      <path d="M 270 435 L 430 435 L 400 505 L 300 505 Z" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeOpacity="0.4" />
      <text x="350" y="475" fontFamily="system-ui" fontSize="13" fill="#22c55e" textAnchor="middle">Conversion</text>
      <text x="350" y="495" fontFamily="ui-monospace, monospace" fontSize="11" fill="#22c55e" textAnchor="middle">2,847</text>

      {/* Conversion rates on the right of funnel */}
      <text x="570" y="220" fontFamily="ui-monospace, monospace" fontSize="11" fill="#a855f7">36.2%</text>
      <text x="570" y="305" fontFamily="ui-monospace, monospace" fontSize="11" fill="#a855f7">27.5%</text>
      <text x="570" y="390" fontFamily="ui-monospace, monospace" fontSize="11" fill="#22c55e">22.9%</text>

      {/* Metrics panel - Right side */}
      <rect x="660" y="100" width="455" height="200" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="685" y="135" fontFamily="system-ui" fontSize="12" fill="#a855f7" fontWeight="500">CHANNEL PERFORMANCE</text>

      {/* Channel bars */}
      <text x="685" y="175" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Organic Search</text>
      <rect x="810" y="160" width="280" height="22" rx="4" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <rect x="810" y="160" width="200" height="22" rx="4" fill="#22c55e" fillOpacity="0.5" />
      <text x="810" y="195" fontFamily="ui-monospace, monospace" fontSize="10" fill="#22c55e">42% | $8 CAC</text>

      <text x="685" y="225" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Paid Ads</text>
      <rect x="810" y="210" width="280" height="22" rx="4" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <rect x="810" y="210" width="130" height="22" rx="4" fill="#a855f7" fillOpacity="0.5" />
      <text x="810" y="245" fontFamily="ui-monospace, monospace" fontSize="10" fill="#a855f7">28% | $42 CAC</text>

      <text x="685" y="275" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Referral</text>
      <rect x="810" y="260" width="280" height="22" rx="4" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <rect x="810" y="260" width="90" height="22" rx="4" fill="#eab308" fillOpacity="0.5" />
      <text x="810" y="295" fontFamily="ui-monospace, monospace" fontSize="10" fill="#eab308">18% | $12 CAC</text>

      {/* Revenue metrics */}
      <rect x="660" y="320" width="220" height="260" rx="12" fill="#12081f" stroke="#22c55e" strokeOpacity="0.15" />
      <text x="685" y="355" fontFamily="system-ui" fontSize="11" fill="#22c55e">Revenue Impact</text>

      <text x="685" y="395" fontFamily="system-ui" fontSize="10" fill="#71717a">Monthly Revenue</text>
      <text x="685" y="425" fontFamily="ui-monospace, monospace" fontSize="26" fill="#22c55e">$284K</text>

      <text x="685" y="470" fontFamily="system-ui" fontSize="10" fill="#71717a">Avg Order Value</text>
      <text x="685" y="500" fontFamily="ui-monospace, monospace" fontSize="26" fill="#a855f7">$99</text>

      <rect x="685" y="530" width="175" height="35" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="772" y="553" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle">+23% MoM</text>

      {/* LTV/CAC */}
      <rect x="895" y="320" width="220" height="260" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="920" y="355" fontFamily="system-ui" fontSize="11" fill="#a855f7">Unit Economics</text>

      <text x="920" y="395" fontFamily="system-ui" fontSize="10" fill="#71717a">LTV</text>
      <text x="920" y="425" fontFamily="ui-monospace, monospace" fontSize="26" fill="#ffffff">$847</text>

      <text x="920" y="470" fontFamily="system-ui" fontSize="10" fill="#71717a">Blended CAC</text>
      <text x="920" y="500" fontFamily="ui-monospace, monospace" fontSize="26" fill="#eab308">$124</text>

      <rect x="920" y="530" width="175" height="35" rx="6" fill="#a855f7" fillOpacity="0.1" />
      <text x="1007" y="553" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle">6.8x LTV:CAC</text>
    </BaseSVG>
  );
}
