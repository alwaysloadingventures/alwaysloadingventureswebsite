"use client";

import { BaseSVG } from "./IllustrationFrame";

// Weekly Operator Sync
export function WeeklyOperatorSyncViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#a855f7" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">WEEKLY OPERATOR SYNC</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Video call mockup */}
      <rect x="85" y="95" width="520" height="320" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.3" />

      {/* Participant grid */}
      <rect x="100" y="110" width="240" height="145" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.2" />
      <circle cx="220" cy="165" r="35" fill="#a855f7" fillOpacity="0.2" />
      <text x="220" y="172" fontFamily="system-ui" fontSize="12" fill="#a855f7" textAnchor="middle">You</text>
      <rect x="145" y="220" width="150" height="10" rx="4" fill="#22c55e" fillOpacity="0.5" />

      <rect x="350" y="110" width="240" height="145" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.2" />
      <circle cx="470" cy="165" r="35" fill="#8b5cf6" fillOpacity="0.2" />
      <text x="470" y="172" fontFamily="system-ui" fontSize="12" fill="#8b5cf6" textAnchor="middle">ALV</text>
      <rect x="395" y="220" width="150" height="10" rx="4" fill="#22c55e" fillOpacity="0.5" />

      {/* Agenda */}
      <rect x="100" y="265" width="490" height="135" rx="8" fill="#1a0f2e" />
      <text x="125" y="295" fontFamily="system-ui" fontSize="11" fill="#71717a">Today's Agenda</text>

      <text x="125" y="325" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">1. Review blockers + decisions</text>
      <circle cx="480" cy="320" r="6" fill="#22c55e" />

      <text x="125" y="350" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">2. KPI walkthrough</text>
      <circle cx="480" cy="345" r="6" fill="#a855f7" />

      <text x="125" y="375" fontFamily="system-ui" fontSize="11" fill="#52525b">3. Next week priorities</text>
      <circle cx="480" cy="370" r="6" fill="#52525b" />

      {/* Notes panel */}
      <rect x="620" y="95" width="300" height="320" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="650" y="130" fontFamily="system-ui" fontSize="12" fill="#71717a">Live Notes</text>
      <rect x="650" y="145" width="240" height="1" fill="#a855f7" fillOpacity="0.15" />

      <text x="650" y="180" fontFamily="system-ui" fontSize="11" fill="#a855f7">Decisions:</text>
      <text x="650" y="205" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Proceed with v2 launch</text>
      <text x="650" y="225" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Delay hiring 2 weeks</text>

      <text x="650" y="260" fontFamily="system-ui" fontSize="11" fill="#eab308">Blockers:</text>
      <text x="650" y="285" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Awaiting legal review</text>

      <text x="650" y="320" fontFamily="system-ui" fontSize="11" fill="#22c55e">Actions:</text>
      <text x="650" y="345" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Ship fix by Thursday</text>
      <text x="650" y="365" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Update pricing page</text>

      {/* Meeting context */}
      <rect x="935" y="95" width="190" height="320" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="960" y="130" fontFamily="system-ui" fontSize="11" fill="#71717a">Context</text>

      <text x="960" y="170" fontFamily="system-ui" fontSize="10" fill="#52525b">Duration</text>
      <text x="960" y="190" fontFamily="ui-monospace, monospace" fontSize="16" fill="#a855f7">60 min</text>

      <text x="960" y="230" fontFamily="system-ui" fontSize="10" fill="#52525b">Frequency</text>
      <text x="960" y="250" fontFamily="ui-monospace, monospace" fontSize="16" fill="#d4d4d8">Weekly</text>

      <text x="960" y="290" fontFamily="system-ui" fontSize="10" fill="#52525b">Week #</text>
      <text x="960" y="310" fontFamily="ui-monospace, monospace" fontSize="16" fill="#22c55e">12</text>

      <rect x="960" y="340" width="150" height="50" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="1035" y="372" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="middle">On Track</text>

      {/* Bottom tags */}
      <rect x="85" y="440" width="1030" height="140" rx="12" fill="#a855f7" fillOpacity="0.03" />

      <rect x="120" y="475" width="180" height="50" rx="8" fill="#a855f7" fillOpacity="0.15" />
      <text x="160" y="507" fontFamily="system-ui" fontSize="11" fill="#a855f7">60 min weekly</text>

      <rect x="320" y="475" width="200" height="50" rx="8" fill="#22c55e" fillOpacity="0.1" />
      <text x="370" y="507" fontFamily="system-ui" fontSize="11" fill="#22c55e">Structured format</text>

      <rect x="540" y="475" width="180" height="50" rx="8" fill="#eab308" fillOpacity="0.1" />
      <text x="585" y="507" fontFamily="system-ui" fontSize="11" fill="#eab308">Action-driven</text>

      <rect x="740" y="475" width="180" height="50" rx="8" fill="#a855f7" fillOpacity="0.05" />
      <text x="790" y="507" fontFamily="system-ui" fontSize="11" fill="#71717a">Not therapy</text>

      <text x="600" y="560" fontFamily="system-ui" fontSize="11" fill="#52525b" textAnchor="middle">Real decisions. Clear actions. Measurable progress.</text>
    </BaseSVG>
  );
}

// Execution Backlog
export function ExecutionBacklogViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#eab308" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">EXECUTION BACKLOG</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Kanban columns */}
      {/* Prioritized */}
      <rect x="85" y="100" width="320" height="480" rx="12" fill="#12081f" stroke="#eab308" strokeOpacity="0.3" />
      <rect x="85" y="100" width="320" height="45" rx="12" fill="#eab308" fillOpacity="0.1" />
      <text x="115" y="130" fontFamily="system-ui" fontSize="12" fill="#eab308" fontWeight="500">Prioritized</text>
      <rect x="355" y="112" width="35" height="22" rx="5" fill="#eab308" fillOpacity="0.25" />
      <text x="372" y="128" fontFamily="system-ui" fontSize="10" fill="#eab308" textAnchor="middle">4</text>

      <rect x="105" y="160" width="280" height="85" rx="8" fill="#1a0f2e" stroke="#eab308" strokeOpacity="0.3" />
      <text x="125" y="190" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Payment integration</text>
      <text x="125" y="215" fontFamily="system-ui" fontSize="10" fill="#eab308">High Priority</text>
      <text x="320" y="215" fontFamily="system-ui" fontSize="9" fill="#71717a">Due Fri</text>

      <rect x="105" y="255" width="280" height="75" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="125" y="285" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Onboarding flow v2</text>
      <text x="125" y="310" fontFamily="system-ui" fontSize="10" fill="#a855f7">Medium</text>
      <text x="280" y="310" fontFamily="system-ui" fontSize="9" fill="#71717a">Due Mon</text>

      <rect x="105" y="340" width="280" height="60" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="125" y="375" fontFamily="system-ui" fontSize="11" fill="#71717a">Analytics dashboard</text>

      <rect x="105" y="410" width="280" height="60" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.1" />
      <text x="125" y="445" fontFamily="system-ui" fontSize="11" fill="#71717a">API rate limiting</text>

      {/* In Progress */}
      <rect x="420" y="100" width="320" height="480" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.4" />
      <rect x="420" y="100" width="320" height="45" rx="12" fill="#a855f7" fillOpacity="0.15" />
      <text x="450" y="130" fontFamily="system-ui" fontSize="12" fill="#a855f7" fontWeight="500">In Progress</text>
      <rect x="690" y="112" width="35" height="22" rx="5" fill="#a855f7" fillOpacity="0.25" />
      <text x="707" y="128" fontFamily="system-ui" fontSize="10" fill="#a855f7" textAnchor="middle">2</text>

      <rect x="440" y="160" width="280" height="110" rx="8" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeOpacity="0.3" />
      <text x="460" y="190" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">User auth refactor</text>
      <text x="460" y="215" fontFamily="system-ui" fontSize="10" fill="#a855f7">75% complete</text>
      <rect x="460" y="235" width="240" height="10" rx="4" fill="#12081f" />
      <rect x="460" y="235" width="180" height="10" rx="4" fill="#a855f7" fillOpacity="0.6" />

      <rect x="440" y="280" width="280" height="110" rx="8" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeOpacity="0.25" />
      <text x="460" y="310" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">Email templates</text>
      <text x="460" y="335" fontFamily="system-ui" fontSize="10" fill="#a855f7">40% complete</text>
      <rect x="460" y="355" width="240" height="10" rx="4" fill="#12081f" />
      <rect x="460" y="355" width="96" height="10" rx="4" fill="#a855f7" fillOpacity="0.5" />

      {/* Done */}
      <rect x="755" y="100" width="320" height="480" rx="12" fill="#12081f" stroke="#22c55e" strokeOpacity="0.3" />
      <rect x="755" y="100" width="320" height="45" rx="12" fill="#22c55e" fillOpacity="0.1" />
      <text x="785" y="130" fontFamily="system-ui" fontSize="12" fill="#22c55e" fontWeight="500">Done</text>
      <rect x="1025" y="112" width="35" height="22" rx="5" fill="#22c55e" fillOpacity="0.25" />
      <text x="1042" y="128" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="middle">8</text>

      <rect x="775" y="160" width="280" height="55" rx="8" fill="#22c55e" fillOpacity="0.1" />
      <text x="795" y="195" fontFamily="system-ui" fontSize="11" fill="#22c55e">Landing page</text>

      <rect x="775" y="225" width="280" height="55" rx="8" fill="#22c55e" fillOpacity="0.08" />
      <text x="795" y="260" fontFamily="system-ui" fontSize="11" fill="#22c55e">Stripe setup</text>

      <rect x="775" y="290" width="280" height="55" rx="8" fill="#22c55e" fillOpacity="0.05" />
      <text x="795" y="325" fontFamily="system-ui" fontSize="11" fill="#71717a">CI/CD pipeline</text>

      <rect x="775" y="355" width="280" height="55" rx="8" fill="#22c55e" fillOpacity="0.03" />
      <text x="795" y="390" fontFamily="system-ui" fontSize="11" fill="#52525b">DB migration</text>

      <rect x="775" y="420" width="280" height="45" rx="8" fill="#22c55e" fillOpacity="0.02" />
      <text x="915" y="450" fontFamily="system-ui" fontSize="10" fill="#52525b" textAnchor="middle">+4 more</text>
    </BaseSVG>
  );
}

// Metrics & Feedback Loops
export function MetricsFeedbackLoopsViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#22c55e" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">METRICS + FEEDBACK LOOPS</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Feedback loop diagram */}
      <rect x="85" y="100" width="420" height="350" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="120" y="140" fontFamily="system-ui" fontSize="12" fill="#71717a">Continuous Feedback Cycle</text>

      {/* Loop circle */}
      <circle cx="295" cy="290" r="120" fill="none" stroke="#a855f7" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="8 4" />
      <circle cx="295" cy="290" r="45" fill="#12081f" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="2" />
      <text x="295" y="295" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle">Loop</text>

      {/* Loop nodes */}
      <rect x="250" y="150" width="90" height="40" rx="6" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeOpacity="0.4" />
      <text x="295" y="175" fontFamily="system-ui" fontSize="10" fill="#a855f7" textAnchor="middle">Measure</text>

      <rect x="385" y="250" width="85" height="40" rx="6" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeOpacity="0.4" />
      <text x="427" y="275" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="middle">Analyze</text>

      <rect x="250" y="390" width="90" height="40" rx="6" fill="#eab308" fillOpacity="0.2" stroke="#eab308" strokeOpacity="0.4" />
      <text x="295" y="415" fontFamily="system-ui" fontSize="10" fill="#eab308" textAnchor="middle">Decide</text>

      <rect x="115" y="250" width="70" height="40" rx="6" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeOpacity="0.4" />
      <text x="150" y="275" fontFamily="system-ui" fontSize="10" fill="#ec4899" textAnchor="middle">Act</text>

      {/* Curved arrows */}
      <path d="M 340 170 Q 400 190 410 250" fill="none" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M 410 295 Q 390 360 340 400" fill="none" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M 250 400 Q 190 380 170 295" fill="none" stroke="#eab308" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M 170 250 Q 190 200 250 175" fill="none" stroke="#ec4899" strokeOpacity="0.4" strokeWidth="2" />

      {/* Metrics panel */}
      <rect x="520" y="100" width="450" height="350" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="555" y="140" fontFamily="system-ui" fontSize="12" fill="#71717a">Live Metrics Dashboard</text>
      <rect x="555" y="155" width="380" height="1" fill="#a855f7" fillOpacity="0.15" />

      <rect x="555" y="175" width="380" height="70" rx="8" fill="#22c55e" fillOpacity="0.1" />
      <text x="575" y="205" fontFamily="system-ui" fontSize="11" fill="#71717a">Monthly Recurring Revenue</text>
      <text x="575" y="235" fontFamily="ui-monospace, monospace" fontSize="22" fill="#22c55e">$127K</text>
      <text x="720" y="235" fontFamily="system-ui" fontSize="12" fill="#22c55e">+8% MoM</text>

      <rect x="555" y="255" width="380" height="70" rx="8" fill="#a855f7" fillOpacity="0.1" />
      <text x="575" y="285" fontFamily="system-ui" fontSize="11" fill="#71717a">Activation Rate</text>
      <text x="575" y="315" fontFamily="ui-monospace, monospace" fontSize="22" fill="#a855f7">62%</text>
      <text x="660" y="315" fontFamily="system-ui" fontSize="12" fill="#22c55e">+3pp</text>

      <rect x="555" y="335" width="380" height="70" rx="8" fill="#eab308" fillOpacity="0.1" />
      <text x="575" y="365" fontFamily="system-ui" fontSize="11" fill="#71717a">Churn Rate</text>
      <text x="575" y="395" fontFamily="ui-monospace, monospace" fontSize="22" fill="#eab308">4.2%</text>
      <text x="670" y="395" fontFamily="system-ui" fontSize="12" fill="#22c55e">-0.5pp</text>

      {/* Insight panel */}
      <rect x="85" y="470" width="1030" height="115" rx="12" fill="#22c55e" fillOpacity="0.05" stroke="#22c55e" strokeOpacity="0.2" />
      <text x="120" y="505" fontFamily="system-ui" fontSize="12" fill="#22c55e">Latest Insight</text>
      <rect x="120" y="520" width="960" height="1" fill="#22c55e" fillOpacity="0.15" />
      <text x="120" y="550" fontFamily="system-ui" fontSize="12" fill="#d4d4d8">Activation rate improved 3pp after simplifying onboarding flow.</text>
      <text x="120" y="575" fontFamily="system-ui" fontSize="11" fill="#71717a">Recommendation: Continue iteration on first-run experience.</text>
    </BaseSVG>
  );
}
