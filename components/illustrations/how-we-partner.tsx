"use client";

import { BaseSVG } from "./IllustrationFrame";

// Weekly Operating Cadence
export function WeeklyOperatingCadenceViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#a855f7" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">WEEKLY OPERATING RHYTHM</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Week days header */}
      <rect x="85" y="100" width="1030" height="50" rx="8" fill="#12081f" />
      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
        <g key={day}>
          <text x={185 + i * 200} y="132" fontFamily="system-ui" fontSize="13" fill={i === 2 ? "#a855f7" : "#71717a"} textAnchor="middle" fontWeight="500">{day}</text>
          {i === 2 && <rect x={135 + i * 200} y="138" width="100" height="3" rx="1" fill="#a855f7" fillOpacity="0.5" />}
        </g>
      ))}

      {/* Calendar grid */}
      {[0, 1, 2, 3, 4].map((col) => (
        <rect key={col} x={90 + col * 206} y="165" width="196" height="420" rx="8" fill="#12081f" stroke="#a855f7" strokeOpacity={col === 2 ? "0.3" : "0.1"} />
      ))}

      {/* Monday - Sprint Planning */}
      <rect x="100" y="180" width="176" height="80" rx="6" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeOpacity="0.3" />
      <text x="188" y="210" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle" fontWeight="500">Sprint Planning</text>
      <text x="188" y="228" fontFamily="system-ui" fontSize="9" fill="#71717a" textAnchor="middle">9:00 AM</text>
      <text x="188" y="248" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">Set week priorities</text>

      <rect x="100" y="280" width="176" height="60" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="188" y="310" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="middle">Deep Work Block</text>
      <text x="188" y="328" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">10:00 - 12:00</text>

      {/* Tuesday */}
      <rect x="306" y="180" width="176" height="60" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="394" y="210" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="middle">Team Standup</text>
      <text x="394" y="228" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">9:30 AM (15 min)</text>

      <rect x="306" y="260" width="176" height="100" rx="6" fill="#a855f7" fillOpacity="0.08" />
      <text x="394" y="300" fontFamily="system-ui" fontSize="10" fill="#d4d4d8" textAnchor="middle">Execution Block</text>
      <text x="394" y="340" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">Build + Ship</text>

      {/* Wednesday - Mid-week sync */}
      <rect x="512" y="180" width="176" height="100" rx="6" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeOpacity="0.4" />
      <text x="600" y="210" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle" fontWeight="500">Operator Sync</text>
      <text x="600" y="230" fontFamily="system-ui" fontSize="9" fill="#71717a" textAnchor="middle">10:00 AM (60 min)</text>
      <text x="600" y="255" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">Review blockers</text>
      <text x="600" y="270" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">Realign priorities</text>

      <rect x="512" y="300" width="176" height="80" rx="6" fill="#eab308" fillOpacity="0.1" />
      <text x="600" y="335" fontFamily="system-ui" fontSize="10" fill="#eab308" textAnchor="middle">Metrics Review</text>
      <text x="600" y="355" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">KPI dashboard check</text>

      {/* Thursday */}
      <rect x="718" y="180" width="176" height="60" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="806" y="210" fontFamily="system-ui" fontSize="10" fill="#22c55e" textAnchor="middle">Team Standup</text>

      <rect x="718" y="260" width="176" height="120" rx="6" fill="#a855f7" fillOpacity="0.08" />
      <text x="806" y="300" fontFamily="system-ui" fontSize="10" fill="#d4d4d8" textAnchor="middle">Build Sprint</text>
      <text x="806" y="360" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">Ship deadline: 5 PM</text>

      {/* Friday */}
      <rect x="924" y="180" width="176" height="80" rx="6" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.3" />
      <text x="1012" y="210" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle" fontWeight="500">Sprint Retro</text>
      <text x="1012" y="228" fontFamily="system-ui" fontSize="9" fill="#71717a" textAnchor="middle">2:00 PM</text>
      <text x="1012" y="248" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">What worked/didn't</text>

      <rect x="924" y="280" width="176" height="60" rx="6" fill="#a855f7" fillOpacity="0.1" />
      <text x="1012" y="310" fontFamily="system-ui" fontSize="10" fill="#a855f7" textAnchor="middle">Async Updates</text>
      <text x="1012" y="328" fontFamily="system-ui" fontSize="9" fill="#52525b" textAnchor="middle">Slack summary</text>

      {/* Bottom summary */}
      <rect x="85" y="510" width="1030" height="75" rx="10" fill="#a855f7" fillOpacity="0.05" />
      <text x="120" y="545" fontFamily="system-ui" fontSize="11" fill="#71717a">Weekly Rhythm:</text>
      <text x="240" y="545" fontFamily="system-ui" fontSize="11" fill="#a855f7">2 syncs</text>
      <text x="320" y="545" fontFamily="system-ui" fontSize="11" fill="#71717a">•</text>
      <text x="340" y="545" fontFamily="system-ui" fontSize="11" fill="#22c55e">3 deep work blocks</text>
      <text x="500" y="545" fontFamily="system-ui" fontSize="11" fill="#71717a">•</text>
      <text x="520" y="545" fontFamily="system-ui" fontSize="11" fill="#eab308">1 metrics review</text>
      <text x="680" y="545" fontFamily="system-ui" fontSize="11" fill="#71717a">•</text>
      <text x="700" y="545" fontFamily="system-ui" fontSize="11" fill="#d4d4d8">1 retro</text>
      <text x="120" y="570" fontFamily="system-ui" fontSize="10" fill="#52525b">Async-first culture with intentional synchronous touchpoints</text>
    </BaseSVG>
  );
}

// 90-Day Execution Timeline
export function ExecutionTimelineViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#22c55e" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">90-DAY EXECUTION PLAN</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Timeline track */}
      <rect x="100" y="150" width="1000" height="8" rx="4" fill="#12081f" />
      <rect x="100" y="150" width="700" height="8" rx="4" fill="url(#purple-glow)" fillOpacity="0.5" />

      {/* Phase markers */}
      <circle cx="100" cy="154" r="12" fill="#22c55e" stroke="#22c55e" strokeOpacity="0.5" strokeWidth="3" />
      <circle cx="400" cy="154" r="12" fill="#22c55e" stroke="#22c55e" strokeOpacity="0.5" strokeWidth="3" />
      <circle cx="700" cy="154" r="12" fill="#a855f7" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="3" />
      <circle cx="1000" cy="154" r="12" fill="#71717a" stroke="#71717a" strokeOpacity="0.3" strokeWidth="3" />
      <circle cx="1100" cy="154" r="8" fill="#52525b" />

      {/* Phase labels */}
      <text x="100" y="130" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle">Day 1</text>
      <text x="400" y="130" fontFamily="system-ui" fontSize="11" fill="#22c55e" textAnchor="middle">Day 30</text>
      <text x="700" y="130" fontFamily="system-ui" fontSize="11" fill="#a855f7" textAnchor="middle">Day 60</text>
      <text x="1000" y="130" fontFamily="system-ui" fontSize="11" fill="#71717a" textAnchor="middle">Day 90</text>

      {/* Phase 1 - Days 1-30 */}
      <rect x="90" y="190" width="295" height="280" rx="12" fill="#12081f" stroke="#22c55e" strokeOpacity="0.3" />
      <rect x="90" y="190" width="295" height="6" rx="12" fill="#22c55e" fillOpacity="0.5" />
      <text x="120" y="225" fontFamily="system-ui" fontSize="13" fill="#22c55e" fontWeight="500">Phase 1: Foundation</text>

      <rect x="110" y="250" width="255" height="40" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="125" y="275" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Diagnostic + context gathering</text>
      <circle cx="350" cy="270" r="5" fill="#22c55e" />

      <rect x="110" y="300" width="255" height="40" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="125" y="325" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">KPI visibility + dashboards</text>
      <circle cx="350" cy="320" r="5" fill="#22c55e" />

      <rect x="110" y="350" width="255" height="40" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="125" y="375" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Bottleneck identification</text>
      <circle cx="350" cy="370" r="5" fill="#22c55e" />

      <rect x="110" y="400" width="255" height="40" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <text x="125" y="425" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">First priorities defined</text>
      <circle cx="350" cy="420" r="5" fill="#22c55e" />

      {/* Phase 2 - Days 31-60 */}
      <rect x="403" y="190" width="280" height="280" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.3" />
      <rect x="403" y="190" width="280" height="6" rx="12" fill="#a855f7" fillOpacity="0.5" />
      <text x="433" y="225" fontFamily="system-ui" fontSize="13" fill="#a855f7" fontWeight="500">Phase 2: Momentum</text>

      <rect x="423" y="250" width="240" height="40" rx="6" fill="#a855f7" fillOpacity="0.1" />
      <text x="438" y="275" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Core systems installed</text>
      <circle cx="648" cy="270" r="5" fill="#a855f7" />

      <rect x="423" y="300" width="240" height="40" rx="6" fill="#a855f7" fillOpacity="0.1" />
      <text x="438" y="325" fontFamily="system-ui" fontSize="10" fill="#d4d4d8">Funnel improvements live</text>
      <circle cx="648" cy="320" r="5" fill="#a855f7" />

      <rect x="423" y="350" width="240" height="40" rx="6" fill="#a855f7" fillOpacity="0.08" />
      <text x="438" y="375" fontFamily="system-ui" fontSize="10" fill="#71717a">Reporting cadence set</text>
      <circle cx="648" cy="370" r="5" fill="#a855f7" fillOpacity="0.5" />

      <rect x="423" y="400" width="240" height="40" rx="6" fill="#a855f7" fillOpacity="0.05" />
      <text x="438" y="425" fontFamily="system-ui" fontSize="10" fill="#52525b">First wins visible</text>
      <circle cx="648" cy="420" r="5" fill="#71717a" fillOpacity="0.5" />

      {/* Phase 3 - Days 61-90 */}
      <rect x="701" y="190" width="280" height="280" rx="12" fill="#12081f" stroke="#a855f7" strokeOpacity="0.15" />
      <rect x="701" y="190" width="280" height="6" rx="12" fill="#a855f7" fillOpacity="0.2" />
      <text x="731" y="225" fontFamily="system-ui" fontSize="13" fill="#71717a" fontWeight="500">Phase 3: Scale</text>

      <rect x="721" y="250" width="240" height="40" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="736" y="275" fontFamily="system-ui" fontSize="10" fill="#52525b">Execution rhythm locked</text>

      <rect x="721" y="300" width="240" height="40" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="736" y="325" fontFamily="system-ui" fontSize="10" fill="#52525b">Metrics trending positive</text>

      <rect x="721" y="350" width="240" height="40" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="736" y="375" fontFamily="system-ui" fontSize="10" fill="#52525b">Team operating autonomously</text>

      <rect x="721" y="400" width="240" height="40" rx="6" fill="#a855f7" fillOpacity="0.03" />
      <text x="736" y="425" fontFamily="system-ui" fontSize="10" fill="#52525b">Scale playbooks documented</text>

      {/* Progress summary */}
      <rect x="100" y="495" width="1000" height="90" rx="10" fill="#a855f7" fillOpacity="0.05" />
      <text x="130" y="530" fontFamily="system-ui" fontSize="12" fill="#71717a">Current Progress:</text>
      <text x="260" y="530" fontFamily="ui-monospace, monospace" fontSize="14" fill="#a855f7">Day 47 of 90</text>
      <rect x="130" y="550" width="940" height="10" rx="4" fill="#12081f" />
      <rect x="130" y="550" width="490" height="10" rx="4" fill="#a855f7" fillOpacity="0.5" />
      <text x="1050" y="565" fontFamily="ui-monospace, monospace" fontSize="11" fill="#a855f7" textAnchor="end">52%</text>
    </BaseSVG>
  );
}

// Decision Rights Matrix
export function DecisionRightsMatrixViz() {
  return (
    <BaseSVG>
      <circle cx="600" cy="337" r="250" fill="#eab308" fillOpacity="0.03" />
      <text x="600" y="45" fontFamily="ui-monospace, monospace" fontSize="13" fill="#a855f7" textAnchor="middle" fontWeight="500" letterSpacing="0.1em">DECISION RIGHTS FRAMEWORK</text>

      <rect x="60" y="70" width="1080" height="540" rx="16" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />

      {/* Matrix header */}
      <rect x="85" y="100" width="1030" height="50" rx="8" fill="#12081f" stroke="#a855f7" strokeOpacity="0.2" />
      <text x="200" y="132" fontFamily="system-ui" fontSize="12" fill="#71717a" textAnchor="middle">Decision Area</text>
      <text x="450" y="132" fontFamily="system-ui" fontSize="12" fill="#a855f7" textAnchor="middle">Founder</text>
      <text x="650" y="132" fontFamily="system-ui" fontSize="12" fill="#22c55e" textAnchor="middle">ALV</text>
      <text x="850" y="132" fontFamily="system-ui" fontSize="12" fill="#eab308" textAnchor="middle">Joint</text>
      <text x="1020" y="132" fontFamily="system-ui" fontSize="12" fill="#71717a" textAnchor="middle">Escalation</text>

      {/* Matrix rows */}
      {[
        { area: "Strategic Direction", founder: true, alv: false, joint: true, escalation: "Board" },
        { area: "Product Roadmap", founder: true, alv: true, joint: true, escalation: "Weekly Sync" },
        { area: "Hiring Decisions", founder: true, alv: false, joint: true, escalation: "As needed" },
        { area: "Budget Allocation", founder: true, alv: false, joint: true, escalation: "Quarterly" },
        { area: "Tech Architecture", founder: false, alv: true, joint: true, escalation: "As needed" },
        { area: "Growth Experiments", founder: false, alv: true, joint: false, escalation: "Weekly Sync" },
        { area: "Ops Improvements", founder: false, alv: true, joint: false, escalation: "Async" },
        { area: "Vendor Selection", founder: false, alv: true, joint: true, escalation: "As needed" },
      ].map((row, i) => (
        <g key={row.area}>
          <rect x="85" y={165 + i * 52} width="1030" height="46" rx="6" fill={i % 2 === 0 ? "#12081f" : "#a855f7"} fillOpacity={i % 2 === 0 ? "1" : "0.02"} />
          <text x="110" y={195 + i * 52} fontFamily="system-ui" fontSize="11" fill="#d4d4d8">{row.area}</text>

          {/* Founder column */}
          <circle cx="450" cy={188 + i * 52} r="10" fill={row.founder ? "#a855f7" : "transparent"} fillOpacity="0.2" stroke={row.founder ? "#a855f7" : "#52525b"} strokeOpacity={row.founder ? "0.5" : "0.2"} />
          {row.founder && <circle cx="450" cy={188 + i * 52} r="4" fill="#a855f7" />}

          {/* ALV column */}
          <circle cx="650" cy={188 + i * 52} r="10" fill={row.alv ? "#22c55e" : "transparent"} fillOpacity="0.2" stroke={row.alv ? "#22c55e" : "#52525b"} strokeOpacity={row.alv ? "0.5" : "0.2"} />
          {row.alv && <circle cx="650" cy={188 + i * 52} r="4" fill="#22c55e" />}

          {/* Joint column */}
          <circle cx="850" cy={188 + i * 52} r="10" fill={row.joint ? "#eab308" : "transparent"} fillOpacity="0.2" stroke={row.joint ? "#eab308" : "#52525b"} strokeOpacity={row.joint ? "0.5" : "0.2"} />
          {row.joint && <circle cx="850" cy={188 + i * 52} r="4" fill="#eab308" />}

          {/* Escalation */}
          <text x="1020" y={195 + i * 52} fontFamily="system-ui" fontSize="10" fill="#52525b" textAnchor="middle">{row.escalation}</text>
        </g>
      ))}

      {/* Legend */}
      <rect x="85" y="510" width="1030" height="75" rx="10" fill="#a855f7" fillOpacity="0.05" />
      <text x="120" y="545" fontFamily="system-ui" fontSize="11" fill="#71717a">Legend:</text>

      <circle cx="200" cy="540" r="6" fill="#a855f7" />
      <text x="220" y="545" fontFamily="system-ui" fontSize="10" fill="#a855f7">Founder owns</text>

      <circle cx="360" cy="540" r="6" fill="#22c55e" />
      <text x="380" y="545" fontFamily="system-ui" fontSize="10" fill="#22c55e">ALV owns</text>

      <circle cx="500" cy="540" r="6" fill="#eab308" />
      <text x="520" y="545" fontFamily="system-ui" fontSize="10" fill="#eab308">Joint decision</text>

      <text x="700" y="545" fontFamily="system-ui" fontSize="10" fill="#52525b">Clear ownership prevents delays. Escalation paths keep things moving.</text>
    </BaseSVG>
  );
}
