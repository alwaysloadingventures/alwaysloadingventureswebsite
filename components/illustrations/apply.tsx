"use client";

import * as React from "react";
import { BaseSVG } from "./IllustrationFrame";

// Apply Page Illustration 1: Fit Assessment
export function FitAssessmentViz() {
  return (
    <BaseSVG>
      {/* Grid pattern */}
      <g opacity="0.1">
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={50 * i}
            y1="0"
            x2={50 * i}
            y2="675"
            stroke="#a855f7"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={50 * i}
            x2="1200"
            y2={50 * i}
            stroke="#a855f7"
            strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Main container */}
      <rect
        x="60"
        y="40"
        width="1080"
        height="595"
        rx="12"
        fill="#0d0816"
        stroke="#a855f7"
        strokeOpacity="0.2"
        strokeWidth="1"
      />

      {/* Header */}
      <rect
        x="60"
        y="40"
        width="1080"
        height="50"
        rx="12"
        fill="#1a0f2e"
      />
      <text x="100" y="72" fill="#a855f7" fontSize="16" fontWeight="600" fontFamily="system-ui">
        Fit Assessment
      </text>
      <circle cx="1100" cy="65" r="8" fill="#22c55e" opacity="0.8" />

      {/* Left panel - Company Profile */}
      <rect
        x="80"
        y="110"
        width="400"
        height="505"
        rx="8"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.15"
      />
      <text x="100" y="145" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui">
        Company Profile
      </text>

      {/* Profile fields */}
      {[
        { label: "Stage", value: "Series A" },
        { label: "Sector", value: "B2B SaaS" },
        { label: "ARR", value: "$1.2M" },
        { label: "Team Size", value: "12" },
        { label: "Location", value: "Remote-first" },
      ].map((field, i) => (
        <g key={field.label}>
          <text
            x="100"
            y={185 + i * 55}
            fill="#a1a1aa"
            fontSize="11"
            fontFamily="system-ui"
          >
            {field.label}
          </text>
          <rect
            x="100"
            y={195 + i * 55}
            width="360"
            height="32"
            rx="4"
            fill="#0d0816"
            stroke="#a855f7"
            strokeOpacity="0.2"
          />
          <text
            x="115"
            y={216 + i * 55}
            fill="#ffffff"
            fontSize="12"
            fontFamily="system-ui"
          >
            {field.value}
          </text>
        </g>
      ))}

      {/* Challenge text area */}
      <text x="100" y="470" fill="#a1a1aa" fontSize="11" fontFamily="system-ui">
        Key Challenge
      </text>
      <rect
        x="100"
        y="480"
        width="360"
        height="115"
        rx="4"
        fill="#0d0816"
        stroke="#a855f7"
        strokeOpacity="0.2"
      />
      <text x="115" y="505" fill="#ffffff" fontSize="11" fontFamily="system-ui" opacity="0.8">
        Need to build scalable distribution
      </text>
      <text x="115" y="525" fill="#ffffff" fontSize="11" fontFamily="system-ui" opacity="0.8">
        engine. Current growth is founder-led
      </text>
      <text x="115" y="545" fill="#ffffff" fontSize="11" fontFamily="system-ui" opacity="0.8">
        and hitting capacity limits...
      </text>

      {/* Right panel - Fit Criteria */}
      <rect
        x="500"
        y="110"
        width="620"
        height="505"
        rx="8"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.15"
      />
      <text x="520" y="145" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui">
        Fit Criteria Assessment
      </text>

      {/* Criteria items with progress */}
      {[
        { label: "Technical Founders", score: 92, status: "strong" },
        { label: "Product-Market Fit Evidence", score: 85, status: "strong" },
        { label: "Distribution Opportunity", score: 88, status: "strong" },
        { label: "Operational Maturity", score: 72, status: "medium" },
        { label: "Capital Efficiency", score: 78, status: "medium" },
        { label: "Market Size", score: 95, status: "strong" },
      ].map((criteria, i) => (
        <g key={criteria.label}>
          <text
            x="520"
            y={185 + i * 70}
            fill="#ffffff"
            fontSize="12"
            fontFamily="system-ui"
          >
            {criteria.label}
          </text>
          <rect
            x="520"
            y={195 + i * 70}
            width="400"
            height="8"
            rx="4"
            fill="#0d0816"
          />
          <rect
            x="520"
            y={195 + i * 70}
            width={4 * criteria.score}
            height="8"
            rx="4"
            fill={criteria.status === "strong" ? "#22c55e" : "#eab308"}
          />
          <text
            x="930"
            y={200 + i * 70}
            fill={criteria.status === "strong" ? "#22c55e" : "#eab308"}
            fontSize="12"
            fontWeight="600"
            fontFamily="system-ui"
          >
            {criteria.score}%
          </text>
          <circle
            cx="1080"
            cy={196 + i * 70}
            r="10"
            fill={criteria.status === "strong" ? "#22c55e" : "#eab308"}
            opacity="0.2"
          />
          <path
            d={
              criteria.status === "strong"
                ? `M${1075} ${196 + i * 70}l3 3 7-7`
                : `M${1076} ${192 + i * 70}v8M${1080} ${196 + i * 70}h0`
            }
            stroke={criteria.status === "strong" ? "#22c55e" : "#eab308"}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Overall fit score */}
      <rect
        x="520"
        y="530"
        width="580"
        height="65"
        rx="8"
        fill="#22c55e"
        opacity="0.1"
      />
      <text x="540" y="560" fill="#ffffff" fontSize="14" fontFamily="system-ui">
        Overall Fit Score
      </text>
      <text x="540" y="580" fill="#a1a1aa" fontSize="11" fontFamily="system-ui">
        Strong alignment with partnership criteria
      </text>
      <text
        x="1060"
        y="572"
        fill="#22c55e"
        fontSize="28"
        fontWeight="700"
        fontFamily="system-ui"
        textAnchor="end"
      >
        85%
      </text>

      {/* Decorative elements */}
      <circle cx="1050" cy="80" r="40" fill="#a855f7" opacity="0.05" />
      <circle cx="150" cy="600" r="30" fill="#22c55e" opacity="0.05" />
    </BaseSVG>
  );
}

// Apply Page Illustration 2: Discovery & Structuring
export function DiscoveryStructuringViz() {
  return (
    <BaseSVG>
      {/* Subtle dot pattern */}
      <g opacity="0.15">
        {Array.from({ length: 30 }).map((_, i) =>
          Array.from({ length: 17 }).map((_, j) => (
            <circle
              key={`dot-${i}-${j}`}
              cx={40 + i * 40}
              cy={40 + j * 40}
              r="1"
              fill="#a855f7"
            />
          ))
        )}
      </g>

      {/* Header */}
      <text x="80" y="60" fill="#a855f7" fontSize="18" fontWeight="600" fontFamily="system-ui">
        Partnership Discovery Process
      </text>

      {/* Process stages */}
      {[
        { num: "01", title: "Initial Call", desc: "30-min intro call", status: "complete", x: 80 },
        { num: "02", title: "Deep Dive", desc: "Operations review", status: "complete", x: 310 },
        { num: "03", title: "Term Sheet", desc: "Structure proposal", status: "active", x: 540 },
        { num: "04", title: "Due Diligence", desc: "Validation phase", status: "pending", x: 770 },
        { num: "05", title: "Close", desc: "Partnership begins", status: "pending", x: 1000 },
      ].map((stage, i) => (
        <g key={stage.num}>
          {/* Connection line */}
          {i < 4 && (
            <line
              x1={stage.x + 140}
              y1="140"
              x2={stage.x + 200}
              y2="140"
              stroke={stage.status === "complete" ? "#22c55e" : "#a855f7"}
              strokeOpacity={stage.status === "pending" ? 0.3 : 0.6}
              strokeWidth="2"
              strokeDasharray={stage.status === "pending" ? "4 4" : "0"}
            />
          )}
          {/* Stage circle */}
          <circle
            cx={stage.x + 60}
            cy="140"
            r="35"
            fill={
              stage.status === "complete"
                ? "#22c55e"
                : stage.status === "active"
                ? "#a855f7"
                : "#1a0f2e"
            }
            opacity={stage.status === "pending" ? 0.5 : 1}
            stroke={stage.status === "pending" ? "#a855f7" : "none"}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <text
            x={stage.x + 60}
            y="145"
            fill={stage.status === "pending" ? "#a1a1aa" : "#ffffff"}
            fontSize="14"
            fontWeight="600"
            fontFamily="system-ui"
            textAnchor="middle"
          >
            {stage.num}
          </text>
          <text
            x={stage.x + 60}
            y="195"
            fill="#ffffff"
            fontSize="12"
            fontWeight="500"
            fontFamily="system-ui"
            textAnchor="middle"
          >
            {stage.title}
          </text>
          <text
            x={stage.x + 60}
            y="212"
            fill="#a1a1aa"
            fontSize="10"
            fontFamily="system-ui"
            textAnchor="middle"
          >
            {stage.desc}
          </text>
        </g>
      ))}

      {/* Current stage details */}
      <rect
        x="80"
        y="260"
        width="540"
        height="370"
        rx="12"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.2"
      />
      <rect
        x="80"
        y="260"
        width="540"
        height="45"
        rx="12"
        fill="#a855f7"
        opacity="0.15"
      />
      <text x="100" y="290" fill="#a855f7" fontSize="14" fontWeight="600" fontFamily="system-ui">
        Term Sheet Discussion
      </text>
      <text x="520" y="288" fill="#ffffff" fontSize="11" fontFamily="system-ui" textAnchor="end">
        In Progress
      </text>
      <circle cx="590" cy="282" r="6" fill="#eab308" />

      {/* Term sheet sections */}
      {[
        { title: "Investment Amount", value: "$500K - $2M", icon: "dollar" },
        { title: "Partnership Model", value: "Operating Partner", icon: "partner" },
        { title: "Time Commitment", value: "10-15 hrs/week", icon: "clock" },
        { title: "Success Metrics", value: "Revenue + Ops KPIs", icon: "chart" },
      ].map((item, i) => (
        <g key={item.title}>
          <rect
            x="100"
            y={325 + i * 70}
            width="500"
            height="55"
            rx="6"
            fill="#0d0816"
            stroke="#a855f7"
            strokeOpacity="0.1"
          />
          <rect
            x="115"
            y={340 + i * 70}
            width="30"
            height="30"
            rx="4"
            fill="#a855f7"
            opacity="0.15"
          />
          <text
            x="160"
            y={355 + i * 70}
            fill="#ffffff"
            fontSize="12"
            fontWeight="500"
            fontFamily="system-ui"
          >
            {item.title}
          </text>
          <text
            x="160"
            y={372 + i * 70}
            fill="#a1a1aa"
            fontSize="11"
            fontFamily="system-ui"
          >
            {item.value}
          </text>
          <circle cx="565" cy={352 + i * 70} r="12" fill="#22c55e" opacity="0.2" />
          <path
            d={`M${558} ${352 + i * 70}l4 4 8-8`}
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Right panel - Timeline */}
      <rect
        x="650"
        y="260"
        width="470"
        height="370"
        rx="12"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.2"
      />
      <text x="670" y="295" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui">
        Expected Timeline
      </text>

      {/* Timeline items */}
      {[
        { week: "Week 1", activity: "Initial call + fit assessment", done: true },
        { week: "Week 2", activity: "Deep dive sessions (2-3)", done: true },
        { week: "Week 3", activity: "Term sheet draft + review", done: false, current: true },
        { week: "Week 4", activity: "Due diligence kickoff", done: false },
        { week: "Week 5-6", activity: "Final diligence + close", done: false },
        { week: "Week 7", activity: "Partnership kickoff", done: false },
      ].map((item, i) => (
        <g key={item.week}>
          {/* Timeline line */}
          {i < 5 && (
            <line
              x1="700"
              y1={345 + i * 50}
              x2="700"
              y2={385 + i * 50}
              stroke={item.done ? "#22c55e" : "#a855f7"}
              strokeOpacity={item.done ? 0.6 : 0.2}
              strokeWidth="2"
            />
          )}
          {/* Timeline dot */}
          <circle
            cx="700"
            cy={335 + i * 50}
            r={item.current ? 10 : 6}
            fill={item.done ? "#22c55e" : item.current ? "#a855f7" : "#1a0f2e"}
            stroke={item.current ? "#a855f7" : item.done ? "#22c55e" : "#a855f7"}
            strokeWidth="2"
            strokeOpacity={item.done || item.current ? 1 : 0.3}
          />
          <text
            x="725"
            y="332 "
            fill={item.current ? "#a855f7" : item.done ? "#22c55e" : "#a1a1aa"}
            fontSize="11"
            fontWeight="600"
            fontFamily="system-ui"
          >
            <tspan x="725" y={332 + i * 50}>{item.week}</tspan>
          </text>
          <text
            x="725"
            y={348 + i * 50}
            fill={item.done ? "#ffffff" : "#a1a1aa"}
            fontSize="11"
            fontFamily="system-ui"
          >
            {item.activity}
          </text>
        </g>
      ))}

      {/* CTA hint */}
      <rect
        x="670"
        y="580"
        width="430"
        height="35"
        rx="6"
        fill="#a855f7"
        opacity="0.2"
      />
      <text x="885" y="603" fill="#a855f7" fontSize="12" fontFamily="system-ui" textAnchor="middle">
        Average time to partnership: 4-6 weeks
      </text>
    </BaseSVG>
  );
}

// Apply Page Illustration 3: Onboarding & Execution Kickoff
export function OnboardingExecutionViz() {
  return (
    <BaseSVG>
      {/* Background glow */}
      <ellipse cx="600" cy="337" rx="500" ry="280" fill="#a855f7" opacity="0.03" />

      {/* Header */}
      <rect
        x="80"
        y="30"
        width="1040"
        height="60"
        rx="8"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.2"
      />
      <text x="110" y="67" fill="#ffffff" fontSize="16" fontWeight="600" fontFamily="system-ui">
        Partnership Onboarding
      </text>
      <rect x="900" y="45" width="200" height="30" rx="4" fill="#22c55e" opacity="0.2" />
      <text x="1000" y="66" fill="#22c55e" fontSize="12" fontWeight="500" fontFamily="system-ui" textAnchor="middle">
        Day 1 Ready
      </text>

      {/* Three column layout */}
      {/* Column 1: Week 1 Setup */}
      <rect
        x="80"
        y="110"
        width="340"
        height="520"
        rx="10"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.15"
      />
      <rect
        x="80"
        y="110"
        width="340"
        height="40"
        rx="10"
        fill="#a855f7"
        opacity="0.15"
      />
      <text x="100" y="137" fill="#a855f7" fontSize="13" fontWeight="600" fontFamily="system-ui">
        Week 1: Foundation
      </text>

      {[
        { task: "Kick-off call with full team", checked: true },
        { task: "Access to shared workspace", checked: true },
        { task: "Initial data/systems audit", checked: true },
        { task: "90-day roadmap draft", checked: false },
        { task: "Weekly cadence established", checked: false },
      ].map((item, i) => (
        <g key={item.task}>
          <rect
            x="100"
            y={170 + i * 65}
            width="300"
            height="50"
            rx="6"
            fill="#0d0816"
            stroke="#a855f7"
            strokeOpacity="0.1"
          />
          <rect
            x="115"
            y={182 + i * 65}
            width="24"
            height="24"
            rx="4"
            fill={item.checked ? "#22c55e" : "#1a0f2e"}
            stroke={item.checked ? "#22c55e" : "#a855f7"}
            strokeOpacity={item.checked ? 1 : 0.3}
          />
          {item.checked && (
            <path
              d={`M${121} ${194 + i * 65}l3 3 6-6`}
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          )}
          <text
            x="150"
            y={199 + i * 65}
            fill={item.checked ? "#ffffff" : "#a1a1aa"}
            fontSize="11"
            fontFamily="system-ui"
          >
            {item.task}
          </text>
        </g>
      ))}

      {/* Progress indicator */}
      <text x="100" y="515" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
        Progress
      </text>
      <rect x="100" y="525" width="300" height="6" rx="3" fill="#0d0816" />
      <rect x="100" y="525" width="180" height="6" rx="3" fill="#22c55e" />
      <text x="380" y="535" fill="#22c55e" fontSize="10" fontFamily="system-ui" textAnchor="end">
        60%
      </text>

      {/* Column 2: Operating Model */}
      <rect
        x="440"
        y="110"
        width="340"
        height="520"
        rx="10"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.15"
      />
      <rect
        x="440"
        y="110"
        width="340"
        height="40"
        rx="10"
        fill="#eab308"
        opacity="0.15"
      />
      <text x="460" y="137" fill="#eab308" fontSize="13" fontWeight="600" fontFamily="system-ui">
        Operating Model
      </text>

      {/* Operating model sections */}
      <g>
        <rect x="460" y="170" width="300" height="85" rx="6" fill="#0d0816" />
        <text x="480" y="195" fill="#ffffff" fontSize="12" fontWeight="500" fontFamily="system-ui">
          Weekly Sync
        </text>
        <text x="480" y="215" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
          60-min strategic review
        </text>
        <text x="480" y="235" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
          Tue/Thu @ 10am PT
        </text>
      </g>

      <g>
        <rect x="460" y="270" width="300" height="85" rx="6" fill="#0d0816" />
        <text x="480" y="295" fill="#ffffff" fontSize="12" fontWeight="500" fontFamily="system-ui">
          Async Updates
        </text>
        <text x="480" y="315" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
          Daily standups in Slack
        </text>
        <text x="480" y="335" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
          Weekly written reports
        </text>
      </g>

      <g>
        <rect x="460" y="370" width="300" height="85" rx="6" fill="#0d0816" />
        <text x="480" y="395" fill="#ffffff" fontSize="12" fontWeight="500" fontFamily="system-ui">
          Decision Rights
        </text>
        <text x="480" y="415" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
          Clear ownership matrix
        </text>
        <text x="480" y="435" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
          Founder final call on strategy
        </text>
      </g>

      <g>
        <rect x="460" y="470" width="300" height="85" rx="6" fill="#0d0816" />
        <text x="480" y="495" fill="#ffffff" fontSize="12" fontWeight="500" fontFamily="system-ui">
          Metrics Review
        </text>
        <text x="480" y="515" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
          Monthly deep-dive on KPIs
        </text>
        <text x="480" y="535" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
          Quarterly board prep
        </text>
      </g>

      {/* Column 3: First 90 Days */}
      <rect
        x="800"
        y="110"
        width="340"
        height="520"
        rx="10"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.15"
      />
      <rect
        x="800"
        y="110"
        width="340"
        height="40"
        rx="10"
        fill="#06b6d4"
        opacity="0.15"
      />
      <text x="820" y="137" fill="#06b6d4" fontSize="13" fontWeight="600" fontFamily="system-ui">
        First 90 Days Milestones
      </text>

      {/* Milestones */}
      {[
        { day: "Day 7", milestone: "Systems audit complete", status: "done" },
        { day: "Day 14", milestone: "Quick wins identified", status: "done" },
        { day: "Day 30", milestone: "First automation live", status: "current" },
        { day: "Day 45", milestone: "Distribution test launched", status: "pending" },
        { day: "Day 60", milestone: "Ops playbook v1", status: "pending" },
        { day: "Day 90", milestone: "Full system operational", status: "pending" },
      ].map((item, i) => (
        <g key={item.day}>
          {/* Vertical connector */}
          {i < 5 && (
            <line
              x1="845"
              y1={195 + i * 60}
              x2="845"
              y2={230 + i * 60}
              stroke={item.status === "done" ? "#22c55e" : "#a855f7"}
              strokeOpacity={item.status === "pending" ? 0.2 : 0.5}
              strokeWidth="2"
            />
          )}
          <circle
            cx="845"
            cy={185 + i * 60}
            r={item.status === "current" ? 12 : 8}
            fill={
              item.status === "done"
                ? "#22c55e"
                : item.status === "current"
                ? "#06b6d4"
                : "#1a0f2e"
            }
            stroke={item.status === "pending" ? "#a855f7" : "none"}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          {item.status === "done" && (
            <path
              d={`M${840} ${185 + i * 60}l3 3 6-6`}
              stroke="#ffffff"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          )}
          <text
            x="870"
            y={180 + i * 60}
            fill={item.status === "current" ? "#06b6d4" : item.status === "done" ? "#22c55e" : "#a1a1aa"}
            fontSize="11"
            fontWeight="600"
            fontFamily="system-ui"
          >
            {item.day}
          </text>
          <text
            x="870"
            y={197 + i * 60}
            fill={item.status === "pending" ? "#a1a1aa" : "#ffffff"}
            fontSize="11"
            fontFamily="system-ui"
          >
            {item.milestone}
          </text>
        </g>
      ))}

      {/* Success metrics preview */}
      <rect
        x="820"
        y="545"
        width="300"
        height="65"
        rx="6"
        fill="#22c55e"
        opacity="0.1"
      />
      <text x="840" y="570" fill="#22c55e" fontSize="11" fontWeight="600" fontFamily="system-ui">
        90-Day Success Target
      </text>
      <text x="840" y="590" fill="#ffffff" fontSize="10" fontFamily="system-ui">
        +40% operational efficiency
      </text>
      <text x="1000" y="590" fill="#ffffff" fontSize="10" fontFamily="system-ui">
        +25% distribution reach
      </text>
    </BaseSVG>
  );
}

export const applyIllustrations = {
  FitAssessmentViz,
  DiscoveryStructuringViz,
  OnboardingExecutionViz,
};
