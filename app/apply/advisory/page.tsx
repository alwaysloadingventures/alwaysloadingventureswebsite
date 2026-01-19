"use client";

import { useState } from "react";

export default function AdvisoryApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Section A — Contact & Company
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    role: "",
    isDecisionMaker: "",
    // Section B — Business Snapshot
    businessType: "",
    offeringFormat: "",
    revenueModel: "",
    monthlyRevenue: "",
    teamSize: "",
    // Section C — Marketing & Growth
    marketingChannels: [] as string[],
    monthlyMarketingSpend: "",
    paidPlatforms: "",
    // Section D — What You Want Help With
    topOutcomes: "",
    biggestBottleneck: "",
    bottleneckOther: "",
    timelineUrgency: "",
    // Section E — Engagement Fit
    engagementType: "",
    advisoryBudget: "",
    anythingElse: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
        ? [...(prev[name as keyof typeof prev] as string[]), value]
        : (prev[name as keyof typeof prev] as string[]).filter(
            (v) => v !== value
          ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/forms/advisory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (submitted) {
    return (
      <main>
        <h1>Application Received</h1>
        <p>
          Thanks — we review every application. If it's a fit, we'll reach out
          with next steps.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>Advisory Application</h1>
      <form onSubmit={handleSubmit}>
        {/* Section A — Contact & Company */}
        <section>
          <h2>Section A — Contact & Company</h2>

          <div>
            <label htmlFor="fullName">Full name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="companyName">Company name *</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="companyWebsite">Company website *</label>
            <input
              type="url"
              id="companyWebsite"
              name="companyWebsite"
              required
              value={formData.companyWebsite}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="role">Your role/title *</label>
            <input
              type="text"
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Are you the decision-maker? *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="isDecisionMaker"
                  value="Yes"
                  required
                  checked={formData.isDecisionMaker === "Yes"}
                  onChange={handleInputChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isDecisionMaker"
                  value="No (but involved)"
                  checked={formData.isDecisionMaker === "No (but involved)"}
                  onChange={handleInputChange}
                />
                No (but involved)
              </label>
              <label>
                <input
                  type="radio"
                  name="isDecisionMaker"
                  value="No"
                  checked={formData.isDecisionMaker === "No"}
                  onChange={handleInputChange}
                />
                No
              </label>
            </div>
          </div>
        </section>

        {/* Section B — Business Snapshot */}
        <section>
          <h2>Section B — Business Snapshot</h2>

          <div>
            <label>Business type *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="businessType"
                  value="B2B"
                  required
                  checked={formData.businessType === "B2B"}
                  onChange={handleInputChange}
                />
                B2B
              </label>
              <label>
                <input
                  type="radio"
                  name="businessType"
                  value="B2C"
                  checked={formData.businessType === "B2C"}
                  onChange={handleInputChange}
                />
                B2C
              </label>
              <label>
                <input
                  type="radio"
                  name="businessType"
                  value="B2B2C"
                  checked={formData.businessType === "B2B2C"}
                  onChange={handleInputChange}
                />
                B2B2C
              </label>
            </div>
          </div>

          <div>
            <label>Offering format *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="offeringFormat"
                  value="Online/Digital product"
                  required
                  checked={formData.offeringFormat === "Online/Digital product"}
                  onChange={handleInputChange}
                />
                Online/Digital product
              </label>
              <label>
                <input
                  type="radio"
                  name="offeringFormat"
                  value="Physical product (shipped)"
                  checked={
                    formData.offeringFormat === "Physical product (shipped)"
                  }
                  onChange={handleInputChange}
                />
                Physical product (shipped)
              </label>
              <label>
                <input
                  type="radio"
                  name="offeringFormat"
                  value="In-person service"
                  checked={formData.offeringFormat === "In-person service"}
                  onChange={handleInputChange}
                />
                In-person service
              </label>
              <label>
                <input
                  type="radio"
                  name="offeringFormat"
                  value="Hybrid"
                  checked={formData.offeringFormat === "Hybrid"}
                  onChange={handleInputChange}
                />
                Hybrid
              </label>
            </div>
          </div>

          <div>
            <label>Revenue model *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="revenueModel"
                  value="Subscription"
                  required
                  checked={formData.revenueModel === "Subscription"}
                  onChange={handleInputChange}
                />
                Subscription
              </label>
              <label>
                <input
                  type="radio"
                  name="revenueModel"
                  value="One-time purchase"
                  checked={formData.revenueModel === "One-time purchase"}
                  onChange={handleInputChange}
                />
                One-time purchase
              </label>
              <label>
                <input
                  type="radio"
                  name="revenueModel"
                  value="Usage-based"
                  checked={formData.revenueModel === "Usage-based"}
                  onChange={handleInputChange}
                />
                Usage-based
              </label>
              <label>
                <input
                  type="radio"
                  name="revenueModel"
                  value="Transactional"
                  checked={formData.revenueModel === "Transactional"}
                  onChange={handleInputChange}
                />
                Transactional
              </label>
              <label>
                <input
                  type="radio"
                  name="revenueModel"
                  value="Hybrid"
                  checked={formData.revenueModel === "Hybrid"}
                  onChange={handleInputChange}
                />
                Hybrid
              </label>
            </div>
          </div>

          <div>
            <label>Current monthly revenue range *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="monthlyRevenue"
                  value="Pre-revenue"
                  required
                  checked={formData.monthlyRevenue === "Pre-revenue"}
                  onChange={handleInputChange}
                />
                Pre-revenue
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyRevenue"
                  value="$1–$10k"
                  checked={formData.monthlyRevenue === "$1–$10k"}
                  onChange={handleInputChange}
                />
                $1–$10k
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyRevenue"
                  value="$10k–$50k"
                  checked={formData.monthlyRevenue === "$10k–$50k"}
                  onChange={handleInputChange}
                />
                $10k–$50k
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyRevenue"
                  value="$50k–$200k"
                  checked={formData.monthlyRevenue === "$50k–$200k"}
                  onChange={handleInputChange}
                />
                $50k–$200k
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyRevenue"
                  value="$200k–$1M"
                  checked={formData.monthlyRevenue === "$200k–$1M"}
                  onChange={handleInputChange}
                />
                $200k–$1M
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyRevenue"
                  value="$1M+"
                  checked={formData.monthlyRevenue === "$1M+"}
                  onChange={handleInputChange}
                />
                $1M+
              </label>
            </div>
          </div>

          <div>
            <label>Team size *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="teamSize"
                  value="Solo"
                  required
                  checked={formData.teamSize === "Solo"}
                  onChange={handleInputChange}
                />
                Solo
              </label>
              <label>
                <input
                  type="radio"
                  name="teamSize"
                  value="2–5"
                  checked={formData.teamSize === "2–5"}
                  onChange={handleInputChange}
                />
                2–5
              </label>
              <label>
                <input
                  type="radio"
                  name="teamSize"
                  value="6–15"
                  checked={formData.teamSize === "6–15"}
                  onChange={handleInputChange}
                />
                6–15
              </label>
              <label>
                <input
                  type="radio"
                  name="teamSize"
                  value="16–50"
                  checked={formData.teamSize === "16–50"}
                  onChange={handleInputChange}
                />
                16–50
              </label>
              <label>
                <input
                  type="radio"
                  name="teamSize"
                  value="50+"
                  checked={formData.teamSize === "50+"}
                  onChange={handleInputChange}
                />
                50+
              </label>
            </div>
          </div>
        </section>

        {/* Section C — Marketing & Growth */}
        <section>
          <h2>Section C — Marketing & Growth</h2>

          <div>
            <label>Current marketing channels * (select all that apply)</label>
            <div>
              {[
                "Organic social",
                "Paid social",
                "Search/SEO",
                "Affiliates/partners",
                "Email/SMS",
                "YouTube/Content",
                "Sales outbound",
                "Other",
              ].map((channel) => (
                <label key={channel}>
                  <input
                    type="checkbox"
                    name="marketingChannels"
                    value={channel}
                    checked={formData.marketingChannels.includes(channel)}
                    onChange={handleCheckboxChange}
                  />
                  {channel}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label>Current monthly marketing spend *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="monthlyMarketingSpend"
                  value="$0"
                  required
                  checked={formData.monthlyMarketingSpend === "$0"}
                  onChange={handleInputChange}
                />
                $0
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyMarketingSpend"
                  value="$1–$2,500"
                  checked={formData.monthlyMarketingSpend === "$1–$2,500"}
                  onChange={handleInputChange}
                />
                $1–$2,500
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyMarketingSpend"
                  value="$2,500–$10k"
                  checked={formData.monthlyMarketingSpend === "$2,500–$10k"}
                  onChange={handleInputChange}
                />
                $2,500–$10k
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyMarketingSpend"
                  value="$10k–$50k"
                  checked={formData.monthlyMarketingSpend === "$10k–$50k"}
                  onChange={handleInputChange}
                />
                $10k–$50k
              </label>
              <label>
                <input
                  type="radio"
                  name="monthlyMarketingSpend"
                  value="$50k+"
                  checked={formData.monthlyMarketingSpend === "$50k+"}
                  onChange={handleInputChange}
                />
                $50k+
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="paidPlatforms">
              If paid spend exists, what platforms?
            </label>
            <input
              type="text"
              id="paidPlatforms"
              name="paidPlatforms"
              placeholder="Meta / Google / TikTok / X / YouTube / Other"
              value={formData.paidPlatforms}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section D — What You Want Help With */}
        <section>
          <h2>Section D — What You Want Help With</h2>

          <div>
            <label htmlFor="topOutcomes">
              What are the top 1–2 outcomes you want in the next 90 days? *
            </label>
            <textarea
              id="topOutcomes"
              name="topOutcomes"
              required
              value={formData.topOutcomes}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>What is the biggest bottleneck right now? *</label>
            <div>
              {[
                "Distribution",
                "Conversion",
                "Retention",
                "Ops/systems",
                "Product",
                "Hiring/team",
                "Finance/unit economics",
                "Other",
              ].map((bottleneck) => (
                <label key={bottleneck}>
                  <input
                    type="radio"
                    name="biggestBottleneck"
                    value={bottleneck}
                    required
                    checked={formData.biggestBottleneck === bottleneck}
                    onChange={handleInputChange}
                  />
                  {bottleneck}
                </label>
              ))}
            </div>
            {formData.biggestBottleneck === "Other" && (
              <input
                type="text"
                name="bottleneckOther"
                placeholder="Please specify"
                value={formData.bottleneckOther}
                onChange={handleInputChange}
              />
            )}
          </div>

          <div>
            <label>Timeline urgency *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="timelineUrgency"
                  value="ASAP (0–14 days)"
                  required
                  checked={formData.timelineUrgency === "ASAP (0–14 days)"}
                  onChange={handleInputChange}
                />
                ASAP (0–14 days)
              </label>
              <label>
                <input
                  type="radio"
                  name="timelineUrgency"
                  value="2–4 weeks"
                  checked={formData.timelineUrgency === "2–4 weeks"}
                  onChange={handleInputChange}
                />
                2–4 weeks
              </label>
              <label>
                <input
                  type="radio"
                  name="timelineUrgency"
                  value="1–2 months"
                  checked={formData.timelineUrgency === "1–2 months"}
                  onChange={handleInputChange}
                />
                1–2 months
              </label>
              <label>
                <input
                  type="radio"
                  name="timelineUrgency"
                  value="3+ months"
                  checked={formData.timelineUrgency === "3+ months"}
                  onChange={handleInputChange}
                />
                3+ months
              </label>
            </div>
          </div>
        </section>

        {/* Section E — Engagement Fit */}
        <section>
          <h2>Section E — Engagement Fit</h2>

          <div>
            <label>Preferred engagement type *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="engagementType"
                  value="Retainer (ongoing)"
                  required
                  checked={formData.engagementType === "Retainer (ongoing)"}
                  onChange={handleInputChange}
                />
                Retainer (ongoing)
              </label>
              <label>
                <input
                  type="radio"
                  name="engagementType"
                  value="Project-based (fixed scope)"
                  checked={
                    formData.engagementType === "Project-based (fixed scope)"
                  }
                  onChange={handleInputChange}
                />
                Project-based (fixed scope)
              </label>
              <label>
                <input
                  type="radio"
                  name="engagementType"
                  value="Not sure"
                  checked={formData.engagementType === "Not sure"}
                  onChange={handleInputChange}
                />
                Not sure
              </label>
            </div>
          </div>

          <div>
            <label>Estimated budget for advisory *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="advisoryBudget"
                  value="Under $2,500/mo"
                  required
                  checked={formData.advisoryBudget === "Under $2,500/mo"}
                  onChange={handleInputChange}
                />
                Under $2,500/mo
              </label>
              <label>
                <input
                  type="radio"
                  name="advisoryBudget"
                  value="$2,500–$7,500/mo"
                  checked={formData.advisoryBudget === "$2,500–$7,500/mo"}
                  onChange={handleInputChange}
                />
                $2,500–$7,500/mo
              </label>
              <label>
                <input
                  type="radio"
                  name="advisoryBudget"
                  value="$7,500–$15k/mo"
                  checked={formData.advisoryBudget === "$7,500–$15k/mo"}
                  onChange={handleInputChange}
                />
                $7,500–$15k/mo
              </label>
              <label>
                <input
                  type="radio"
                  name="advisoryBudget"
                  value="$15k+/mo"
                  checked={formData.advisoryBudget === "$15k+/mo"}
                  onChange={handleInputChange}
                />
                $15k+/mo
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="anythingElse">Anything else we should know?</label>
            <textarea
              id="anythingElse"
              name="anythingElse"
              value={formData.anythingElse}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <button type="submit">Submit Application</button>
      </form>

      <footer>
        <p>AlwaysLoading Ventures — Operator-Led Venture Studio & Advisory Firm</p>
        <p>
          Disclaimer: AlwaysLoading Ventures is not a registered investment
          fund. All engagements are structured on a case-by-case basis.
        </p>
      </footer>
    </main>
  );
}
