"use client";

import * as React from "react";
import { BaseSVG } from "./IllustrationFrame";

// About Page Illustration 1: Operator Mindset
export function OperatorMindsetViz() {
  return (
    <BaseSVG>
      {/* Subtle radial pattern */}
      <circle cx="600" cy="337" r="320" fill="none" stroke="#a855f7" strokeOpacity="0.05" strokeWidth="1" />
      <circle cx="600" cy="337" r="240" fill="none" stroke="#a855f7" strokeOpacity="0.08" strokeWidth="1" />
      <circle cx="600" cy="337" r="160" fill="none" stroke="#a855f7" strokeOpacity="0.1" strokeWidth="1" />

      {/* Header */}
      <text x="600" y="60" fill="#a855f7" fontSize="20" fontWeight="600" fontFamily="system-ui" textAnchor="middle">
        The Operator Mindset
      </text>
      <text x="600" y="85" fill="#a1a1aa" fontSize="12" fontFamily="system-ui" textAnchor="middle">
        How we think about building companies
      </text>

      {/* Central hub */}
      <circle cx="600" cy="337" r="70" fill="#1a0f2e" stroke="#a855f7" strokeWidth="2" />
      <text x="600" y="330" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui" textAnchor="middle">
        Operator
      </text>
      <text x="600" y="350" fill="#a855f7" fontSize="11" fontFamily="system-ui" textAnchor="middle">
        First
      </text>

      {/* Surrounding principles */}
      {[
        { label: "Execution", sublabel: "Over Strategy", angle: 0, color: "#22c55e" },
        { label: "Systems", sublabel: "Over Hustle", angle: 60, color: "#06b6d4" },
        { label: "Leverage", sublabel: "Over Effort", angle: 120, color: "#eab308" },
        { label: "Focus", sublabel: "Over Spread", angle: 180, color: "#ec4899" },
        { label: "Iteration", sublabel: "Over Perfection", angle: 240, color: "#a855f7" },
        { label: "Data", sublabel: "Over Intuition", angle: 300, color: "#22c55e" },
      ].map((principle) => {
        const rad = (principle.angle * Math.PI) / 180;
        const x = 600 + Math.cos(rad) * 200;
        const y = 337 + Math.sin(rad) * 180;
        return (
          <g key={principle.label}>
            {/* Connection line */}
            <line
              x1="600"
              y1="337"
              x2={x}
              y2={y}
              stroke={principle.color}
              strokeOpacity="0.3"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            {/* Node */}
            <circle cx={x} cy={y} r="50" fill="#1a0f2e" stroke={principle.color} strokeWidth="1.5" />
            <text
              x={x}
              y={y - 5}
              fill="#ffffff"
              fontSize="12"
              fontWeight="500"
              fontFamily="system-ui"
              textAnchor="middle"
            >
              {principle.label}
            </text>
            <text
              x={x}
              y={y + 12}
              fill={principle.color}
              fontSize="10"
              fontFamily="system-ui"
              textAnchor="middle"
            >
              {principle.sublabel}
            </text>
          </g>
        );
      })}

      {/* Bottom quote */}
      <rect x="200" y="560" width="800" height="80" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="600" y="595" fill="#ffffff" fontSize="13" fontStyle="italic" fontFamily="system-ui" textAnchor="middle">
        "We don't just advise — we embed, execute, and build alongside you."
      </text>
      <text x="600" y="620" fill="#a855f7" fontSize="11" fontFamily="system-ui" textAnchor="middle">
        — The ALV Way
      </text>
    </BaseSVG>
  );
}

// About Page Illustration 2: Technology Forward
export function TechnologyForwardViz() {
  return (
    <BaseSVG>
      {/* Grid background */}
      <g opacity="0.08">
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={48 * i}
            y1="0"
            x2={48 * i}
            y2="675"
            stroke="#a855f7"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={48 * i}
            x2="1200"
            y2={48 * i}
            stroke="#a855f7"
            strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Header */}
      <text x="80" y="60" fill="#a855f7" fontSize="18" fontWeight="600" fontFamily="system-ui">
        Technology-Forward Operations
      </text>
      <text x="80" y="82" fill="#a1a1aa" fontSize="12" fontFamily="system-ui">
        Modern tools and systems for modern companies
      </text>

      {/* Left panel - Tech Stack */}
      <rect
        x="80"
        y="110"
        width="350"
        height="520"
        rx="10"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.2"
      />
      <text x="100" y="145" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui">
        Our Tech Stack
      </text>

      {/* Tech categories */}
      {[
        { category: "Automation", tools: ["Zapier", "Make", "n8n"], color: "#22c55e" },
        { category: "Analytics", tools: ["Mixpanel", "Amplitude", "Metabase"], color: "#06b6d4" },
        { category: "Operations", tools: ["Notion", "Linear", "Slack"], color: "#eab308" },
        { category: "Distribution", tools: ["HubSpot", "Clay", "Apollo"], color: "#ec4899" },
      ].map((cat, i) => (
        <g key={cat.category}>
          <rect
            x="100"
            y={170 + i * 110}
            width="310"
            height="95"
            rx="6"
            fill="#0d0816"
            stroke={cat.color}
            strokeOpacity="0.2"
          />
          <rect
            x="100"
            y={170 + i * 110}
            width="4"
            height="95"
            rx="2"
            fill={cat.color}
          />
          <text
            x="120"
            y={195 + i * 110}
            fill={cat.color}
            fontSize="12"
            fontWeight="600"
            fontFamily="system-ui"
          >
            {cat.category}
          </text>
          {cat.tools.map((tool, j) => (
            <g key={tool}>
              <rect
                x={120 + j * 95}
                y={210 + i * 110}
                width="85"
                height="40"
                rx="4"
                fill="#1a0f2e"
                stroke={cat.color}
                strokeOpacity="0.3"
              />
              <text
                x={162 + j * 95}
                y={235 + i * 110}
                fill="#ffffff"
                fontSize="10"
                fontFamily="system-ui"
                textAnchor="middle"
              >
                {tool}
              </text>
            </g>
          ))}
        </g>
      ))}

      {/* Center - Integration Flow */}
      <rect
        x="450"
        y="110"
        width="300"
        height="520"
        rx="10"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.2"
      />
      <text x="470" y="145" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui">
        Integration Architecture
      </text>

      {/* Flow diagram */}
      <g>
        {/* Top node */}
        <rect x="520" y="170" width="160" height="50" rx="6" fill="#a855f7" opacity="0.2" />
        <text x="600" y="200" fill="#a855f7" fontSize="11" fontWeight="500" fontFamily="system-ui" textAnchor="middle">
          Data Sources
        </text>

        {/* Arrow */}
        <line x1="600" y1="220" x2="600" y2="260" stroke="#a855f7" strokeWidth="2" />
        <path d="M595 255 L600 265 L605 255" fill="none" stroke="#a855f7" strokeWidth="2" />

        {/* Middle node */}
        <rect x="520" y="270" width="160" height="80" rx="6" fill="#22c55e" opacity="0.15" />
        <text x="600" y="300" fill="#22c55e" fontSize="11" fontWeight="500" fontFamily="system-ui" textAnchor="middle">
          Automation Layer
        </text>
        <text x="600" y="320" fill="#a1a1aa" fontSize="9" fontFamily="system-ui" textAnchor="middle">
          Transforms & Routes
        </text>
        <text x="600" y="335" fill="#a1a1aa" fontSize="9" fontFamily="system-ui" textAnchor="middle">
          Real-time Processing
        </text>

        {/* Arrow */}
        <line x1="600" y1="350" x2="600" y2="390" stroke="#22c55e" strokeWidth="2" />
        <path d="M595 385 L600 395 L605 385" fill="none" stroke="#22c55e" strokeWidth="2" />

        {/* Branching */}
        <line x1="600" y1="395" x2="520" y2="430" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="600" y1="395" x2="680" y2="430" stroke="#eab308" strokeWidth="1.5" />

        {/* Left branch */}
        <rect x="470" y="440" width="100" height="60" rx="6" fill="#06b6d4" opacity="0.15" />
        <text x="520" y="470" fill="#06b6d4" fontSize="10" fontWeight="500" fontFamily="system-ui" textAnchor="middle">
          Analytics
        </text>
        <text x="520" y="485" fill="#a1a1aa" fontSize="8" fontFamily="system-ui" textAnchor="middle">
          Dashboards
        </text>

        {/* Right branch */}
        <rect x="630" y="440" width="100" height="60" rx="6" fill="#eab308" opacity="0.15" />
        <text x="680" y="470" fill="#eab308" fontSize="10" fontWeight="500" fontFamily="system-ui" textAnchor="middle">
          Actions
        </text>
        <text x="680" y="485" fill="#a1a1aa" fontSize="8" fontFamily="system-ui" textAnchor="middle">
          Workflows
        </text>

        {/* Converge */}
        <line x1="520" y1="500" x2="600" y2="540" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="680" y1="500" x2="600" y2="540" stroke="#eab308" strokeWidth="1.5" />

        {/* Final node */}
        <rect x="520" y="550" width="160" height="60" rx="6" fill="#ec4899" opacity="0.15" />
        <text x="600" y="580" fill="#ec4899" fontSize="11" fontWeight="500" fontFamily="system-ui" textAnchor="middle">
          Business Outcomes
        </text>
        <text x="600" y="598" fill="#a1a1aa" fontSize="9" fontFamily="system-ui" textAnchor="middle">
          Revenue & Efficiency
        </text>
      </g>

      {/* Right panel - Metrics */}
      <rect
        x="770"
        y="110"
        width="350"
        height="520"
        rx="10"
        fill="#1a0f2e"
        stroke="#a855f7"
        strokeOpacity="0.2"
      />
      <text x="790" y="145" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui">
        Impact Metrics
      </text>

      {/* Metric cards */}
      {[
        { value: "75%", label: "Time Saved", sublabel: "On manual processes", color: "#22c55e" },
        { value: "3x", label: "Throughput", sublabel: "Output per team member", color: "#06b6d4" },
        { value: "90%", label: "Data Accuracy", sublabel: "Automated validation", color: "#eab308" },
        { value: "48hr", label: "Deployment", sublabel: "Avg. automation setup", color: "#ec4899" },
      ].map((metric, i) => (
        <g key={metric.label}>
          <rect
            x="790"
            y={170 + i * 110}
            width="310"
            height="95"
            rx="8"
            fill="#0d0816"
            stroke={metric.color}
            strokeOpacity="0.2"
          />
          <text
            x="820"
            y={220 + i * 110}
            fill={metric.color}
            fontSize="32"
            fontWeight="700"
            fontFamily="system-ui"
          >
            {metric.value}
          </text>
          <text
            x="920"
            y={205 + i * 110}
            fill="#ffffff"
            fontSize="13"
            fontWeight="500"
            fontFamily="system-ui"
          >
            {metric.label}
          </text>
          <text
            x="920"
            y={225 + i * 110}
            fill="#a1a1aa"
            fontSize="10"
            fontFamily="system-ui"
          >
            {metric.sublabel}
          </text>
        </g>
      ))}
    </BaseSVG>
  );
}

// About Page Illustration 3: Long-Term Value Creation
export function LongTermValueViz() {
  return (
    <BaseSVG>
      {/* Subtle wave pattern */}
      <path
        d="M0 400 Q300 350 600 400 T1200 400"
        fill="none"
        stroke="#a855f7"
        strokeOpacity="0.08"
        strokeWidth="2"
      />
      <path
        d="M0 420 Q300 370 600 420 T1200 420"
        fill="none"
        stroke="#a855f7"
        strokeOpacity="0.05"
        strokeWidth="2"
      />

      {/* Header */}
      <rect x="80" y="30" width="1040" height="70" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />
      <text x="600" y="65" fill="#ffffff" fontSize="18" fontWeight="600" fontFamily="system-ui" textAnchor="middle">
        Long-Term Value Creation
      </text>
      <text x="600" y="87" fill="#a1a1aa" fontSize="12" fontFamily="system-ui" textAnchor="middle">
        Building enduring companies, not quick flips
      </text>

      {/* Timeline axis */}
      <line x1="120" y1="450" x2="1080" y2="450" stroke="#a855f7" strokeOpacity="0.3" strokeWidth="1" />

      {/* Time markers */}
      {["Day 1", "Year 1", "Year 3", "Year 5", "Year 10+"].map((label, i) => (
        <g key={label}>
          <line
            x1={120 + i * 240}
            y1="445"
            x2={120 + i * 240}
            y2="455"
            stroke="#a855f7"
            strokeWidth="2"
          />
          <text
            x={120 + i * 240}
            y="475"
            fill="#a1a1aa"
            fontSize="10"
            fontFamily="system-ui"
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Value curve */}
      <path
        d="M120 380 C200 370 280 340 360 300 C440 260 520 200 600 180 C680 160 760 150 840 140 C920 130 1000 125 1080 120"
        fill="none"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Curve glow */}
      <path
        d="M120 380 C200 370 280 340 360 300 C440 260 520 200 600 180 C680 160 760 150 840 140 C920 130 1000 125 1080 120"
        fill="none"
        stroke="#22c55e"
        strokeWidth="8"
        strokeOpacity="0.2"
        strokeLinecap="round"
      />

      {/* Milestone markers */}
      {[
        { x: 120, y: 380, label: "Partnership\nBegins", value: "" },
        { x: 360, y: 300, label: "Foundation\nComplete", value: "2x" },
        { x: 600, y: 180, label: "Scale\nMode", value: "5x" },
        { x: 840, y: 140, label: "Market\nLeader", value: "10x" },
        { x: 1080, y: 120, label: "Enduring\nValue", value: "20x+" },
      ].map((milestone, i) => (
        <g key={i}>
          <circle cx={milestone.x} cy={milestone.y} r="8" fill="#22c55e" />
          <circle cx={milestone.x} cy={milestone.y} r="16" fill="#22c55e" opacity="0.2" />
          {milestone.value && (
            <text
              x={milestone.x}
              y={milestone.y - 30}
              fill="#22c55e"
              fontSize="14"
              fontWeight="700"
              fontFamily="system-ui"
              textAnchor="middle"
            >
              {milestone.value}
            </text>
          )}
        </g>
      ))}

      {/* Value pillars - bottom section */}
      <rect x="80" y="510" width="340" height="130" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />
      <rect x="80" y="510" width="340" height="35" rx="8" fill="#22c55e" opacity="0.1" />
      <text x="100" y="535" fill="#22c55e" fontSize="12" fontWeight="600" fontFamily="system-ui">
        Sustainable Growth
      </text>
      <text x="100" y="565" fill="#ffffff" fontSize="11" fontFamily="system-ui">
        Focus on unit economics and
      </text>
      <text x="100" y="582" fill="#ffffff" fontSize="11" fontFamily="system-ui">
        capital efficiency from day one
      </text>
      <text x="100" y="610" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
        Build to last, not to flip
      </text>

      <rect x="440" y="510" width="340" height="130" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />
      <rect x="440" y="510" width="340" height="35" rx="8" fill="#06b6d4" opacity="0.1" />
      <text x="460" y="535" fill="#06b6d4" fontSize="12" fontWeight="600" fontFamily="system-ui">
        Operational Excellence
      </text>
      <text x="460" y="565" fill="#ffffff" fontSize="11" fontFamily="system-ui">
        Systems and processes that
      </text>
      <text x="460" y="582" fill="#ffffff" fontSize="11" fontFamily="system-ui">
        compound over time
      </text>
      <text x="460" y="610" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
        Excellence becomes culture
      </text>

      <rect x="800" y="510" width="340" height="130" rx="8" fill="#1a0f2e" stroke="#a855f7" strokeOpacity="0.15" />
      <rect x="800" y="510" width="340" height="35" rx="8" fill="#eab308" opacity="0.1" />
      <text x="820" y="535" fill="#eab308" fontSize="12" fontWeight="600" fontFamily="system-ui">
        Aligned Incentives
      </text>
      <text x="820" y="565" fill="#ffffff" fontSize="11" fontFamily="system-ui">
        Our success is tied directly
      </text>
      <text x="820" y="582" fill="#ffffff" fontSize="11" fontFamily="system-ui">
        to your success
      </text>
      <text x="820" y="610" fill="#a1a1aa" fontSize="10" fontFamily="system-ui">
        True partnership model
      </text>
    </BaseSVG>
  );
}

export const aboutIllustrations = {
  OperatorMindsetViz,
  TechnologyForwardViz,
  LongTermValueViz,
};
