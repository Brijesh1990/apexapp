import React from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import PortfolioSection from '../components/PortfolioSection';
import TeamSection from '../components/TeamSection';
import WorkflowSection from '../components/WorkflowSection';
import CommitmentsSection from '../components/CommitmentsSection';
import PartnersSection from '../components/PartnersSection';
import CtaBanner from '../components/CtaBanner';
import ContactFormSection from '../components/ContactFormSection';

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section: Building Trust. Delivering Excellence. */}
      <Hero />

      {/* 2. Introduction (SEO Section): Trusted EPC Company in India */}
      <WhoWeAre />

      {/* 3. Our Core Services (Snapshot): Industrial Construction & PEB */}
      <ServicesGrid />

      {/* 4. Why Choose Relinfinite: 5 Core Value Pillars */}
      <WhyChooseUs />

      {/* 5. Our Portfolio: Proven Track Record Across Critical Sectors */}
      <PortfolioSection />

      {/* 6. Experienced Civil Engineers & Structural Designers */}
      <TeamSection />

      {/* 7. Concept to Completion: Disciplined EPC Lifecycle */}
      <WorkflowSection />

      {/* 8. Uncompromising Quality & Safety Standards */}
      <CommitmentsSection />

      {/* 9. Technology & Material Partners */}
      <PartnersSection />

      {/* 10. Closing CTA: Planning an industrial project? Talk to Our Team */}
      <CtaBanner />

      {/* 11. Contact Form: Start a Project Discussion */}
      <ContactFormSection />
    </main>
  );
}
