"use client";

import { useState } from "react";

export default function PartnershipApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Section A — Contact & Company Basics
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    role: "",
    isFounderOwner: "",
    // Section B — Business Model & Offering
    businessType: "",
    offeringFormat: "",
    revenueModel: "",
    pricing: "",
    primaryCustomer: "",
    geography: "",
    // Section C — Traction & Financial Snapshot
    monthlyRevenue: "",
    revenueTrend: "",
    grossMargin: "",
    cashRunway: "",
    // Section D — Partners, Ownership, and Capital Invested
    numberOfPartners: "",
    ownershipBreakdown: "",
    capitalInvested: "",
    outsideCapital: "",
    capitalType: "",
    capitalDetails: "",
    // Section E — Marketing & Growth Engine
    monthlyMarketingSpend: "",
    acquisitionChannels: [] as string[],
    cac: "",
    churn: "",
    // Section F — Operations & Team
    teamSize: "",
    keyFunctions: [] as string[],
    operationalBottleneck: "",
    bottleneckOther: "",
    // Section G — What You're Asking For
    lookingFor: "",
    whyOperatorPartner: "",
    sixMonthOutcomes: "",
    // Section H — Equity & Partnership Terms
    openToEquity: "",
    equityRange: "",
    involvementLevel: "",
    restrictions: "",
    // Section I — Materials
    deckLink: "",
    metricsLink: "",
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
      const response = await fetch("/api/forms/partnership", {
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
          Thanks — we only accept a small number of partnerships. If it's a fit,
          we'll request additional materials and schedule a call.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>Strategic Partnership Application</h1>
      <p>
        Strategic partnerships involve equity, execution responsibility, and
        long-term alignment. This is not a capital-only application.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Section A — Contact & Company Basics */}
        <section>
          <h2>Section A — Contact & Company Basics</h2>

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
            <label>Are you a founder/owner? *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="isFounderOwner"
                  value="Yes"
                  required
                  checked={formData.isFounderOwner === "Yes"}
                  onChange={handleInputChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isFounderOwner"
                  value="No"
                  checked={formData.isFounderOwner === "No"}
                  onChange={handleInputChange}
                />
                No
              </label>
            </div>
          </div>
        </section>

        {/* Section B — Business Model & Offering */}
        <section>
          <h2>Section B — Business Model & Offering</h2>

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
            <label htmlFor="pricing">
              Pricing (Average order value OR average contract value) *
            </label>
            <input
              type="text"
              id="pricing"
              name="pricing"
              required
              placeholder="e.g., $500 AOV or $10,000 ACV"
              value={formData.pricing}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Primary customer *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="primaryCustomer"
                  value="Consumers"
                  required
                  checked={formData.primaryCustomer === "Consumers"}
                  onChange={handleInputChange}
                />
                Consumers
              </label>
              <label>
                <input
                  type="radio"
                  name="primaryCustomer"
                  value="SMB"
                  checked={formData.primaryCustomer === "SMB"}
                  onChange={handleInputChange}
                />
                SMB
              </label>
              <label>
                <input
                  type="radio"
                  name="primaryCustomer"
                  value="Mid-market"
                  checked={formData.primaryCustomer === "Mid-market"}
                  onChange={handleInputChange}
                />
                Mid-market
              </label>
              <label>
                <input
                  type="radio"
                  name="primaryCustomer"
                  value="Enterprise"
                  checked={formData.primaryCustomer === "Enterprise"}
                  onChange={handleInputChange}
                />
                Enterprise
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="geography">
              Geography (Primary countries/regions served) *
            </label>
            <input
              type="text"
              id="geography"
              name="geography"
              required
              value={formData.geography}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section C — Traction & Financial Snapshot */}
        <section>
          <h2>Section C — Traction & Financial Snapshot</h2>

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
            <label>Last 3 months revenue trend *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="revenueTrend"
                  value="Up"
                  required
                  checked={formData.revenueTrend === "Up"}
                  onChange={handleInputChange}
                />
                Up
              </label>
              <label>
                <input
                  type="radio"
                  name="revenueTrend"
                  value="Flat"
                  checked={formData.revenueTrend === "Flat"}
                  onChange={handleInputChange}
                />
                Flat
              </label>
              <label>
                <input
                  type="radio"
                  name="revenueTrend"
                  value="Down"
                  checked={formData.revenueTrend === "Down"}
                  onChange={handleInputChange}
                />
                Down
              </label>
            </div>
          </div>

          <div>
            <label>Gross margin range *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="grossMargin"
                  value="<30%"
                  required
                  checked={formData.grossMargin === "<30%"}
                  onChange={handleInputChange}
                />
                {"<30%"}
              </label>
              <label>
                <input
                  type="radio"
                  name="grossMargin"
                  value="30–50%"
                  checked={formData.grossMargin === "30–50%"}
                  onChange={handleInputChange}
                />
                30–50%
              </label>
              <label>
                <input
                  type="radio"
                  name="grossMargin"
                  value="50–70%"
                  checked={formData.grossMargin === "50–70%"}
                  onChange={handleInputChange}
                />
                50–70%
              </label>
              <label>
                <input
                  type="radio"
                  name="grossMargin"
                  value="70%+"
                  checked={formData.grossMargin === "70%+"}
                  onChange={handleInputChange}
                />
                70%+
              </label>
            </div>
          </div>

          <div>
            <label>Current cash runway *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="cashRunway"
                  value="<1 month"
                  required
                  checked={formData.cashRunway === "<1 month"}
                  onChange={handleInputChange}
                />
                {"<1 month"}
              </label>
              <label>
                <input
                  type="radio"
                  name="cashRunway"
                  value="1–3 months"
                  checked={formData.cashRunway === "1–3 months"}
                  onChange={handleInputChange}
                />
                1–3 months
              </label>
              <label>
                <input
                  type="radio"
                  name="cashRunway"
                  value="3–6 months"
                  checked={formData.cashRunway === "3–6 months"}
                  onChange={handleInputChange}
                />
                3–6 months
              </label>
              <label>
                <input
                  type="radio"
                  name="cashRunway"
                  value="6–12 months"
                  checked={formData.cashRunway === "6–12 months"}
                  onChange={handleInputChange}
                />
                6–12 months
              </label>
              <label>
                <input
                  type="radio"
                  name="cashRunway"
                  value="12+ months"
                  checked={formData.cashRunway === "12+ months"}
                  onChange={handleInputChange}
                />
                12+ months
              </label>
              <label>
                <input
                  type="radio"
                  name="cashRunway"
                  value="Profitable / cashflow positive"
                  checked={
                    formData.cashRunway === "Profitable / cashflow positive"
                  }
                  onChange={handleInputChange}
                />
                Profitable / cashflow positive
              </label>
            </div>
          </div>
        </section>

        {/* Section D — Partners, Ownership, and Capital Invested */}
        <section>
          <h2>Section D — Partners, Ownership, and Capital Invested</h2>

          <div>
            <label>How many partners/co-founders exist today? *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="numberOfPartners"
                  value="1"
                  required
                  checked={formData.numberOfPartners === "1"}
                  onChange={handleInputChange}
                />
                1
              </label>
              <label>
                <input
                  type="radio"
                  name="numberOfPartners"
                  value="2"
                  checked={formData.numberOfPartners === "2"}
                  onChange={handleInputChange}
                />
                2
              </label>
              <label>
                <input
                  type="radio"
                  name="numberOfPartners"
                  value="3"
                  checked={formData.numberOfPartners === "3"}
                  onChange={handleInputChange}
                />
                3
              </label>
              <label>
                <input
                  type="radio"
                  name="numberOfPartners"
                  value="4+"
                  checked={formData.numberOfPartners === "4+"}
                  onChange={handleInputChange}
                />
                4+
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="ownershipBreakdown">
              Ownership breakdown (List owners + % ownership) *
            </label>
            <textarea
              id="ownershipBreakdown"
              name="ownershipBreakdown"
              required
              value={formData.ownershipBreakdown}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Total capital invested by founders/owners to date *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="capitalInvested"
                  value="$0"
                  required
                  checked={formData.capitalInvested === "$0"}
                  onChange={handleInputChange}
                />
                $0
              </label>
              <label>
                <input
                  type="radio"
                  name="capitalInvested"
                  value="$1–$10k"
                  checked={formData.capitalInvested === "$1–$10k"}
                  onChange={handleInputChange}
                />
                $1–$10k
              </label>
              <label>
                <input
                  type="radio"
                  name="capitalInvested"
                  value="$10k–$50k"
                  checked={formData.capitalInvested === "$10k–$50k"}
                  onChange={handleInputChange}
                />
                $10k–$50k
              </label>
              <label>
                <input
                  type="radio"
                  name="capitalInvested"
                  value="$50k–$200k"
                  checked={formData.capitalInvested === "$50k–$200k"}
                  onChange={handleInputChange}
                />
                $50k–$200k
              </label>
              <label>
                <input
                  type="radio"
                  name="capitalInvested"
                  value="$200k+"
                  checked={formData.capitalInvested === "$200k+"}
                  onChange={handleInputChange}
                />
                $200k+
              </label>
            </div>
          </div>

          <div>
            <label>Any outside capital raised? *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="outsideCapital"
                  value="No"
                  required
                  checked={formData.outsideCapital === "No"}
                  onChange={handleInputChange}
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  name="outsideCapital"
                  value="Yes"
                  checked={formData.outsideCapital === "Yes"}
                  onChange={handleInputChange}
                />
                Yes
              </label>
            </div>
          </div>

          {formData.outsideCapital === "Yes" && (
            <>
              <div>
                <label htmlFor="capitalDetails">
                  Amount and details of outside capital
                </label>
                <input
                  type="text"
                  id="capitalDetails"
                  name="capitalDetails"
                  value={formData.capitalDetails}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Type of capital</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="capitalType"
                      value="Angel"
                      checked={formData.capitalType === "Angel"}
                      onChange={handleInputChange}
                    />
                    Angel
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="capitalType"
                      value="Seed/VC"
                      checked={formData.capitalType === "Seed/VC"}
                      onChange={handleInputChange}
                    />
                    Seed/VC
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="capitalType"
                      value="Debt"
                      checked={formData.capitalType === "Debt"}
                      onChange={handleInputChange}
                    />
                    Debt
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="capitalType"
                      value="Revenue-based financing"
                      checked={formData.capitalType === "Revenue-based financing"}
                      onChange={handleInputChange}
                    />
                    Revenue-based financing
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="capitalType"
                      value="Other"
                      checked={formData.capitalType === "Other"}
                      onChange={handleInputChange}
                    />
                    Other
                  </label>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Section E — Marketing & Growth Engine */}
        <section>
          <h2>Section E — Marketing & Growth Engine</h2>

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
            <label>Main acquisition channels * (select all that apply)</label>
            <div>
              {[
                "Organic social",
                "Paid social",
                "Search/SEO",
                "Affiliates/partners",
                "Email/SMS",
                "YouTube/content",
                "Sales outbound",
                "Events/community",
                "Other",
              ].map((channel) => (
                <label key={channel}>
                  <input
                    type="checkbox"
                    name="acquisitionChannels"
                    value={channel}
                    checked={formData.acquisitionChannels.includes(channel)}
                    onChange={handleCheckboxChange}
                  />
                  {channel}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="cac">
              If you have paid spend: what is CAC (or best estimate)?
            </label>
            <input
              type="text"
              id="cac"
              name="cac"
              value={formData.cac}
              onChange={handleInputChange}
            />
          </div>

          {formData.revenueModel === "Subscription" && (
            <div>
              <label htmlFor="churn">
                What is churn (monthly) or retention?
              </label>
              <input
                type="text"
                id="churn"
                name="churn"
                value={formData.churn}
                onChange={handleInputChange}
              />
            </div>
          )}
        </section>

        {/* Section F — Operations & Team */}
        <section>
          <h2>Section F — Operations & Team</h2>

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

          <div>
            <label>Key functions covered today * (select all that apply)</label>
            <div>
              {[
                "Product",
                "Engineering",
                "Marketing",
                "Sales",
                "Support",
                "Operations",
                "Finance",
                "Legal/Compliance",
              ].map((func) => (
                <label key={func}>
                  <input
                    type="checkbox"
                    name="keyFunctions"
                    value={func}
                    checked={formData.keyFunctions.includes(func)}
                    onChange={handleCheckboxChange}
                  />
                  {func}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label>Biggest operational bottleneck *</label>
            <div>
              {[
                "Systems/process",
                "Hiring/team",
                "Execution bandwidth",
                "Product delivery",
                "Customer success",
                "Unit economics",
                "Other",
              ].map((bottleneck) => (
                <label key={bottleneck}>
                  <input
                    type="radio"
                    name="operationalBottleneck"
                    value={bottleneck}
                    required
                    checked={formData.operationalBottleneck === bottleneck}
                    onChange={handleInputChange}
                  />
                  {bottleneck}
                </label>
              ))}
            </div>
            {formData.operationalBottleneck === "Other" && (
              <input
                type="text"
                name="bottleneckOther"
                placeholder="Please specify"
                value={formData.bottleneckOther}
                onChange={handleInputChange}
              />
            )}
          </div>
        </section>

        {/* Section G — What You're Asking For */}
        <section>
          <h2>Section G — What You're Asking For</h2>

          <div>
            <label>What are you looking for? *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="lookingFor"
                  value="Capital only"
                  required
                  checked={formData.lookingFor === "Capital only"}
                  onChange={handleInputChange}
                />
                Capital only
              </label>
              <label>
                <input
                  type="radio"
                  name="lookingFor"
                  value="Strategic partnership only"
                  checked={formData.lookingFor === "Strategic partnership only"}
                  onChange={handleInputChange}
                />
                Strategic partnership only
              </label>
              <label>
                <input
                  type="radio"
                  name="lookingFor"
                  value="Capital + strategic partnership"
                  checked={
                    formData.lookingFor === "Capital + strategic partnership"
                  }
                  onChange={handleInputChange}
                />
                Capital + strategic partnership
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="whyOperatorPartner">
              Why do you want an operator partner instead of an advisor? *
            </label>
            <textarea
              id="whyOperatorPartner"
              name="whyOperatorPartner"
              required
              value={formData.whyOperatorPartner}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="sixMonthOutcomes">
              What outcomes do you want in the next 6 months? *
            </label>
            <textarea
              id="sixMonthOutcomes"
              name="sixMonthOutcomes"
              required
              value={formData.sixMonthOutcomes}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section H — Equity & Partnership Terms (Filtering Section) */}
        <section>
          <h2>Section H — Equity & Partnership Terms</h2>

          <div>
            <label>
              Are you open to giving equity in exchange for executive management
              + execution? *
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  name="openToEquity"
                  value="Yes"
                  required
                  checked={formData.openToEquity === "Yes"}
                  onChange={handleInputChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="openToEquity"
                  value="Maybe"
                  checked={formData.openToEquity === "Maybe"}
                  onChange={handleInputChange}
                />
                Maybe
              </label>
              <label>
                <input
                  type="radio"
                  name="openToEquity"
                  value="No"
                  checked={formData.openToEquity === "No"}
                  onChange={handleInputChange}
                />
                No
              </label>
            </div>
          </div>

          {(formData.openToEquity === "Yes" ||
            formData.openToEquity === "Maybe") && (
            <div>
              <label>What range are you open to? *</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="equityRange"
                    value="<5%"
                    required
                    checked={formData.equityRange === "<5%"}
                    onChange={handleInputChange}
                  />
                  {"<5%"}
                </label>
                <label>
                  <input
                    type="radio"
                    name="equityRange"
                    value="5–10%"
                    checked={formData.equityRange === "5–10%"}
                    onChange={handleInputChange}
                  />
                  5–10%
                </label>
                <label>
                  <input
                    type="radio"
                    name="equityRange"
                    value="10–20%"
                    checked={formData.equityRange === "10–20%"}
                    onChange={handleInputChange}
                  />
                  10–20%
                </label>
                <label>
                  <input
                    type="radio"
                    name="equityRange"
                    value="20%+"
                    checked={formData.equityRange === "20%+"}
                    onChange={handleInputChange}
                  />
                  20%+
                </label>
                <label>
                  <input
                    type="radio"
                    name="equityRange"
                    value="Not sure"
                    checked={formData.equityRange === "Not sure"}
                    onChange={handleInputChange}
                  />
                  Not sure
                </label>
              </div>
            </div>
          )}

          <div>
            <label>What level of involvement are you comfortable with? *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="involvementLevel"
                  value="Advisor-only"
                  required
                  checked={formData.involvementLevel === "Advisor-only"}
                  onChange={handleInputChange}
                />
                Advisor-only
              </label>
              <label>
                <input
                  type="radio"
                  name="involvementLevel"
                  value="Fractional executive"
                  checked={formData.involvementLevel === "Fractional executive"}
                  onChange={handleInputChange}
                />
                Fractional executive
              </label>
              <label>
                <input
                  type="radio"
                  name="involvementLevel"
                  value="Operator-led (hands-on, decision rights)"
                  checked={
                    formData.involvementLevel ===
                    "Operator-led (hands-on, decision rights)"
                  }
                  onChange={handleInputChange}
                />
                Operator-led (hands-on, decision rights)
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="restrictions">
              Any existing restrictions (investors, board, contracts) that
              affect equity/decision rights?
            </label>
            <textarea
              id="restrictions"
              name="restrictions"
              value={formData.restrictions}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section I — Materials */}
        <section>
          <h2>Section I — Materials</h2>

          <div>
            <label htmlFor="deckLink">Link to deck / docs</label>
            <input
              type="url"
              id="deckLink"
              name="deckLink"
              value={formData.deckLink}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="metricsLink">
              Link to KPI dashboard or metrics snapshot
            </label>
            <input
              type="url"
              id="metricsLink"
              name="metricsLink"
              value={formData.metricsLink}
              onChange={handleInputChange}
            />
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
