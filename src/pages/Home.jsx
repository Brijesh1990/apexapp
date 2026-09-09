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
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. Integrated Technical Capabilities */}
      <ServicesGrid />

      {/* 4. The Apex Edge / Why Global Leaders Choose Us */}
      <WhyChooseUs />

      {/* 5. Our Portfolio / Engineered Excellence Across the Globe */}
      <PortfolioSection />

      {/* 6. Our Core Team */}
      <TeamSection />

      {/* 7. Our Workflow / Disciplined Approach to Project Lifecycle */}
      <WorkflowSection />

      {/* 8. Uncompromising Quality & Safety Standards */}
      <CommitmentsSection />

      {/* 9. Partners Row */}
      <PartnersSection />

      {/* 10. Blue CTA Banner */}
      <CtaBanner />

      {/* 11. Start a Project Discussion Form */}
      <ContactFormSection />
    </main>
  );
}
