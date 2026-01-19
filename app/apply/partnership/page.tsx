"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function PartnershipApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    role: "",
    isFounderOwner: "",
    businessType: "",
    offeringFormat: "",
    revenueModel: "",
    pricing: "",
    primaryCustomer: "",
    geography: "",
    monthlyRevenue: "",
    revenueTrend: "",
    grossMargin: "",
    cashRunway: "",
    numberOfPartners: "",
    ownershipBreakdown: "",
    capitalInvested: "",
    outsideCapital: "",
    capitalType: "",
    capitalDetails: "",
    monthlyMarketingSpend: "",
    acquisitionChannels: [] as string[],
    cac: "",
    churn: "",
    teamSize: "",
    keyFunctions: [] as string[],
    operationalBottleneck: "",
    bottleneckOther: "",
    lookingFor: "",
    whyOperatorPartner: "",
    sixMonthOutcomes: "",
    openToEquity: "",
    equityRange: "",
    involvementLevel: "",
    restrictions: "",
    deckLink: "",
    metricsLink: "",
    anythingElse: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Application Received</h1>
        <p className="text-muted-foreground">
          Thanks — we only accept a small number of partnerships. If it's a fit,
          we'll request additional materials and schedule a call.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Strategic Partnership Application</h1>
        <p className="text-muted-foreground">
          Strategic partnerships involve equity, execution responsibility, and
          long-term alignment. This is not a capital-only application.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Section A — Contact & Company Basics */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Contact & Company Basics</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name *</Label>
              <Input id="fullName" name="fullName" required value={formData.fullName} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName">Company name *</Label>
              <Input id="companyName" name="companyName" required value={formData.companyName} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyWebsite">Company website *</Label>
              <Input type="url" id="companyWebsite" name="companyWebsite" required value={formData.companyWebsite} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Your role/title *</Label>
              <Input id="role" name="role" required value={formData.role} onChange={handleInputChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Are you a founder/owner? *</Label>
            <div className="flex flex-wrap gap-4">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="isFounderOwner" value={option} required checked={formData.isFounderOwner === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section B — Business Model & Offering */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Business Model & Offering</h2>

          <div className="space-y-2">
            <Label>Business type *</Label>
            <div className="flex flex-wrap gap-4">
              {["B2B", "B2C", "B2B2C"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="businessType" value={option} required checked={formData.businessType === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Offering format *</Label>
            <div className="flex flex-wrap gap-4">
              {["Online/Digital product", "Physical product (shipped)", "In-person service", "Hybrid"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="offeringFormat" value={option} required checked={formData.offeringFormat === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Revenue model *</Label>
            <div className="flex flex-wrap gap-4">
              {["Subscription", "One-time purchase", "Usage-based", "Transactional", "Hybrid"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="revenueModel" value={option} required checked={formData.revenueModel === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pricing">Pricing (Average order value OR average contract value) *</Label>
            <Input id="pricing" name="pricing" required placeholder="e.g., $500 AOV or $10,000 ACV" value={formData.pricing} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label>Primary customer *</Label>
            <div className="flex flex-wrap gap-4">
              {["Consumers", "SMB", "Mid-market", "Enterprise"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="primaryCustomer" value={option} required checked={formData.primaryCustomer === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="geography">Geography (Primary countries/regions served) *</Label>
            <Input id="geography" name="geography" required value={formData.geography} onChange={handleInputChange} />
          </div>
        </section>

        {/* Section C — Traction & Financial Snapshot */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Traction & Financial Snapshot</h2>

          <div className="space-y-2">
            <Label>Current monthly revenue range *</Label>
            <div className="flex flex-wrap gap-4">
              {["Pre-revenue", "$1–$10k", "$10k–$50k", "$50k–$200k", "$200k–$1M", "$1M+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="monthlyRevenue" value={option} required checked={formData.monthlyRevenue === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Last 3 months revenue trend *</Label>
            <div className="flex flex-wrap gap-4">
              {["Up", "Flat", "Down"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="revenueTrend" value={option} required checked={formData.revenueTrend === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Gross margin range *</Label>
            <div className="flex flex-wrap gap-4">
              {["<30%", "30–50%", "50–70%", "70%+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="grossMargin" value={option} required checked={formData.grossMargin === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Current cash runway *</Label>
            <div className="flex flex-wrap gap-4">
              {["<1 month", "1–3 months", "3–6 months", "6–12 months", "12+ months", "Profitable / cashflow positive"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="cashRunway" value={option} required checked={formData.cashRunway === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section D — Partners, Ownership, and Capital Invested */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Partners, Ownership & Capital</h2>

          <div className="space-y-2">
            <Label>How many partners/co-founders exist today? *</Label>
            <div className="flex flex-wrap gap-4">
              {["1", "2", "3", "4+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="numberOfPartners" value={option} required checked={formData.numberOfPartners === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ownershipBreakdown">Ownership breakdown (List owners + % ownership) *</Label>
            <Textarea id="ownershipBreakdown" name="ownershipBreakdown" required value={formData.ownershipBreakdown} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label>Total capital invested by founders/owners to date *</Label>
            <div className="flex flex-wrap gap-4">
              {["$0", "$1–$10k", "$10k–$50k", "$50k–$200k", "$200k+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="capitalInvested" value={option} required checked={formData.capitalInvested === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Any outside capital raised? *</Label>
            <div className="flex flex-wrap gap-4">
              {["No", "Yes"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="outsideCapital" value={option} required checked={formData.outsideCapital === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {formData.outsideCapital === "Yes" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="capitalDetails">Amount and details of outside capital</Label>
                <Input id="capitalDetails" name="capitalDetails" value={formData.capitalDetails} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label>Type of capital</Label>
                <div className="flex flex-wrap gap-4">
                  {["Angel", "Seed/VC", "Debt", "Revenue-based financing", "Other"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input type="radio" name="capitalType" value={option} checked={formData.capitalType === option} onChange={handleInputChange} className="accent-primary" />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        {/* Section E — Marketing & Growth Engine */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Marketing & Growth Engine</h2>

          <div className="space-y-2">
            <Label>Current monthly marketing spend *</Label>
            <div className="flex flex-wrap gap-4">
              {["$0", "$1–$2,500", "$2,500–$10k", "$10k–$50k", "$50k+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="monthlyMarketingSpend" value={option} required checked={formData.monthlyMarketingSpend === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Main acquisition channels * (select all that apply)</Label>
            <div className="flex flex-wrap gap-4">
              {["Organic social", "Paid social", "Search/SEO", "Affiliates/partners", "Email/SMS", "YouTube/content", "Sales outbound", "Events/community", "Other"].map((channel) => (
                <label key={channel} className="flex items-center gap-2">
                  <input type="checkbox" name="acquisitionChannels" value={channel} checked={formData.acquisitionChannels.includes(channel)} onChange={handleCheckboxChange} className="accent-primary" />
                  <span className="text-sm">{channel}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cac">If you have paid spend: what is CAC (or best estimate)?</Label>
            <Input id="cac" name="cac" value={formData.cac} onChange={handleInputChange} />
          </div>

          {formData.revenueModel === "Subscription" && (
            <div className="space-y-2">
              <Label htmlFor="churn">What is churn (monthly) or retention?</Label>
              <Input id="churn" name="churn" value={formData.churn} onChange={handleInputChange} />
            </div>
          )}
        </section>

        {/* Section F — Operations & Team */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Operations & Team</h2>

          <div className="space-y-2">
            <Label>Team size *</Label>
            <div className="flex flex-wrap gap-4">
              {["Solo", "2–5", "6–15", "16–50", "50+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="teamSize" value={option} required checked={formData.teamSize === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Key functions covered today * (select all that apply)</Label>
            <div className="flex flex-wrap gap-4">
              {["Product", "Engineering", "Marketing", "Sales", "Support", "Operations", "Finance", "Legal/Compliance"].map((func) => (
                <label key={func} className="flex items-center gap-2">
                  <input type="checkbox" name="keyFunctions" value={func} checked={formData.keyFunctions.includes(func)} onChange={handleCheckboxChange} className="accent-primary" />
                  <span className="text-sm">{func}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Biggest operational bottleneck *</Label>
            <div className="flex flex-wrap gap-4">
              {["Systems/process", "Hiring/team", "Execution bandwidth", "Product delivery", "Customer success", "Unit economics", "Other"].map((bottleneck) => (
                <label key={bottleneck} className="flex items-center gap-2">
                  <input type="radio" name="operationalBottleneck" value={bottleneck} required checked={formData.operationalBottleneck === bottleneck} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{bottleneck}</span>
                </label>
              ))}
            </div>
            {formData.operationalBottleneck === "Other" && (
              <Input name="bottleneckOther" placeholder="Please specify" value={formData.bottleneckOther} onChange={handleInputChange} className="mt-2" />
            )}
          </div>
        </section>

        {/* Section G — What You're Asking For */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">What You're Asking For</h2>

          <div className="space-y-2">
            <Label>What are you looking for? *</Label>
            <div className="flex flex-wrap gap-4">
              {["Capital only", "Strategic partnership only", "Capital + strategic partnership"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="lookingFor" value={option} required checked={formData.lookingFor === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyOperatorPartner">Why do you want an operator partner instead of an advisor? *</Label>
            <Textarea id="whyOperatorPartner" name="whyOperatorPartner" required value={formData.whyOperatorPartner} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sixMonthOutcomes">What outcomes do you want in the next 6 months? *</Label>
            <Textarea id="sixMonthOutcomes" name="sixMonthOutcomes" required value={formData.sixMonthOutcomes} onChange={handleInputChange} />
          </div>
        </section>

        {/* Section H — Equity & Partnership Terms */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Equity & Partnership Terms</h2>

          <div className="space-y-2">
            <Label>Are you open to giving equity in exchange for executive management + execution? *</Label>
            <div className="flex flex-wrap gap-4">
              {["Yes", "Maybe", "No"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="openToEquity" value={option} required checked={formData.openToEquity === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {(formData.openToEquity === "Yes" || formData.openToEquity === "Maybe") && (
            <div className="space-y-2">
              <Label>What range are you open to? *</Label>
              <div className="flex flex-wrap gap-4">
                {["<5%", "5–10%", "10–20%", "20%+", "Not sure"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input type="radio" name="equityRange" value={option} required checked={formData.equityRange === option} onChange={handleInputChange} className="accent-primary" />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>What level of involvement are you comfortable with? *</Label>
            <div className="flex flex-wrap gap-4">
              {["Advisor-only", "Fractional executive", "Operator-led (hands-on, decision rights)"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="involvementLevel" value={option} required checked={formData.involvementLevel === option} onChange={handleInputChange} className="accent-primary" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="restrictions">Any existing restrictions (investors, board, contracts) that affect equity/decision rights?</Label>
            <Textarea id="restrictions" name="restrictions" value={formData.restrictions} onChange={handleInputChange} />
          </div>
        </section>

        {/* Section I — Materials */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Materials</h2>

          <div className="space-y-2">
            <Label htmlFor="deckLink">Link to deck / docs</Label>
            <Input type="url" id="deckLink" name="deckLink" value={formData.deckLink} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="metricsLink">Link to KPI dashboard or metrics snapshot</Label>
            <Input type="url" id="metricsLink" name="metricsLink" value={formData.metricsLink} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="anythingElse">Anything else we should know?</Label>
            <Textarea id="anythingElse" name="anythingElse" value={formData.anythingElse} onChange={handleInputChange} />
          </div>
        </section>

        <Button type="submit" size="lg">Submit Application</Button>
      </form>
    </div>
  );
}
