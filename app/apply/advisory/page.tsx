"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function AdvisoryApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    role: "",
    isDecisionMaker: "",
    businessType: "",
    offeringFormat: "",
    revenueModel: "",
    monthlyRevenue: "",
    teamSize: "",
    marketingChannels: [] as string[],
    monthlyMarketingSpend: "",
    paidPlatforms: "",
    topOutcomes: "",
    biggestBottleneck: "",
    bottleneckOther: "",
    timelineUrgency: "",
    engagementType: "",
    advisoryBudget: "",
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
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Application Received</h1>
        <p className="text-muted-foreground">
          Thanks — we review every application. If it's a fit, we'll reach out
          with next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Advisory Application</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Section A — Contact & Company */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Contact & Company</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name *</Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company name *</Label>
              <Input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyWebsite">Company website *</Label>
              <Input
                type="url"
                id="companyWebsite"
                name="companyWebsite"
                required
                value={formData.companyWebsite}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Your role/title *</Label>
              <Input
                type="text"
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Are you the decision-maker? *</Label>
            <div className="flex flex-wrap gap-4">
              {["Yes", "No (but involved)", "No"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isDecisionMaker"
                    value={option}
                    required
                    checked={formData.isDecisionMaker === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section B — Business Snapshot */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Business Snapshot</h2>

          <div className="space-y-2">
            <Label>Business type *</Label>
            <div className="flex flex-wrap gap-4">
              {["B2B", "B2C", "B2B2C"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="businessType"
                    value={option}
                    required
                    checked={formData.businessType === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
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
                  <input
                    type="radio"
                    name="offeringFormat"
                    value={option}
                    required
                    checked={formData.offeringFormat === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
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
                  <input
                    type="radio"
                    name="revenueModel"
                    value={option}
                    required
                    checked={formData.revenueModel === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Current monthly revenue range *</Label>
            <div className="flex flex-wrap gap-4">
              {["Pre-revenue", "$1–$10k", "$10k–$50k", "$50k–$200k", "$200k–$1M", "$1M+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="monthlyRevenue"
                    value={option}
                    required
                    checked={formData.monthlyRevenue === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Team size *</Label>
            <div className="flex flex-wrap gap-4">
              {["Solo", "2–5", "6–15", "16–50", "50+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="teamSize"
                    value={option}
                    required
                    checked={formData.teamSize === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section C — Marketing & Growth */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Marketing & Growth</h2>

          <div className="space-y-2">
            <Label>Current marketing channels * (select all that apply)</Label>
            <div className="flex flex-wrap gap-4">
              {["Organic social", "Paid social", "Search/SEO", "Affiliates/partners", "Email/SMS", "YouTube/Content", "Sales outbound", "Other"].map((channel) => (
                <label key={channel} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="marketingChannels"
                    value={channel}
                    checked={formData.marketingChannels.includes(channel)}
                    onChange={handleCheckboxChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{channel}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Current monthly marketing spend *</Label>
            <div className="flex flex-wrap gap-4">
              {["$0", "$1–$2,500", "$2,500–$10k", "$10k–$50k", "$50k+"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="monthlyMarketingSpend"
                    value={option}
                    required
                    checked={formData.monthlyMarketingSpend === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="paidPlatforms">If paid spend exists, what platforms?</Label>
            <Input
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
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">What You Want Help With</h2>

          <div className="space-y-2">
            <Label htmlFor="topOutcomes">What are the top 1–2 outcomes you want in the next 90 days? *</Label>
            <Textarea
              id="topOutcomes"
              name="topOutcomes"
              required
              value={formData.topOutcomes}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label>What is the biggest bottleneck right now? *</Label>
            <div className="flex flex-wrap gap-4">
              {["Distribution", "Conversion", "Retention", "Ops/systems", "Product", "Hiring/team", "Finance/unit economics", "Other"].map((bottleneck) => (
                <label key={bottleneck} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="biggestBottleneck"
                    value={bottleneck}
                    required
                    checked={formData.biggestBottleneck === bottleneck}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{bottleneck}</span>
                </label>
              ))}
            </div>
            {formData.biggestBottleneck === "Other" && (
              <Input
                type="text"
                name="bottleneckOther"
                placeholder="Please specify"
                value={formData.bottleneckOther}
                onChange={handleInputChange}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label>Timeline urgency *</Label>
            <div className="flex flex-wrap gap-4">
              {["ASAP (0–14 days)", "2–4 weeks", "1–2 months", "3+ months"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="timelineUrgency"
                    value={option}
                    required
                    checked={formData.timelineUrgency === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section E — Engagement Fit */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Engagement Fit</h2>

          <div className="space-y-2">
            <Label>Preferred engagement type *</Label>
            <div className="flex flex-wrap gap-4">
              {["Retainer (ongoing)", "Project-based (fixed scope)", "Not sure"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="engagementType"
                    value={option}
                    required
                    checked={formData.engagementType === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Estimated budget for advisory *</Label>
            <div className="flex flex-wrap gap-4">
              {["Under $2,500/mo", "$2,500–$7,500/mo", "$7,500–$15k/mo", "$15k+/mo"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="advisoryBudget"
                    value={option}
                    required
                    checked={formData.advisoryBudget === option}
                    onChange={handleInputChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="anythingElse">Anything else we should know?</Label>
            <Textarea
              id="anythingElse"
              name="anythingElse"
              value={formData.anythingElse}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <Button type="submit" size="lg">Submit Application</Button>
      </form>
    </div>
  );
}
