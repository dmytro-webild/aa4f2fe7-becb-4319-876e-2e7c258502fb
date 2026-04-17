"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Restoration Inc."
      button={{ text: "Contact Us", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static"}}
      title="Restoring Excellence in Mount Juliet and middle Tennessee"
      description="Family-owned and trusted for 18+ years. Serving Mount Juliet, TN and middle Tennessee. Call us at 615-686-6921 for Construction or 615-525-6813 for Restoration Services."
      buttons={[
        {
          text: "Get an Estimate",          href: "#contact"},
      ]}
      carouselItems={[
        { id: "c1", imageSrc: "http://img.b2bpic.net/free-photo/raw-concrete-building-construction-against-cloudy-sky_626616-500.jpg", imageAlt: "Roofing Restoration" },
        { id: "c2", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-worker-with-helmet-working-roof_23-2149343663.jpg", imageAlt: "Exterior Siding Work" },
        { id: "c3", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-working-roof_23-2149343654.jpg", imageAlt: "Gutter Maintenance" },
        { id: "c4", imageSrc: "http://img.b2bpic.net/free-photo/long-shot-men-working-together-roof_23-2149343674.jpg", imageAlt: "Interior Remodeling" },
        { id: "c5", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-working-roof_23-2149343671.jpg", imageAlt: "Mount Juliet Construction" },
        { id: "c6", imageSrc: "http://img.b2bpic.net/free-photo/people-renovating-house_53876-13433.jpg", imageAlt: "Property Restoration" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Family-Owned, Local Expertise"
      description="With over 18 years of dedicated service in Mount Juliet, TN and middle Tennessee, our family-owned business prides itself on quality, honesty, and lasting relationships. We treat your property as our own."
      imageSrc="http://img.b2bpic.net/free-photo/group-three-engineers_23-2147704210.jpg"
      imageAlt="Our team at work"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      features={[
        { title: "Roofing & Siding", description: "High-quality roofing installation and durable siding solutions for home and business.", imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-building-ceiling_1359-160.jpg" },
        { title: "Gutter Systems", description: "Complete gutter installation, cleaning, and maintenance services to protect your foundation.", imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530736.jpg" },
        { title: "Interior Remodeling", description: "Full-service interior renovations tailored to your personal taste and lifestyle.", imageSrc: "http://img.b2bpic.net/free-photo/tiler-working-renovation-apartment_23-2149278568.jpg" },
      ]}
      title="Our Expert Services"
      description="We specialize in both commercial and residential projects across Mount Juliet and middle Tennessee."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Sarah Miller", handle: "@sarah-mtj", testimonial: "Exceptional service! They restored our roof quickly and professionally.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/workers-having-little-chat-while-having-cup-coffee_329181-15605.jpg" },
        { id: "t2", name: "John Doe", handle: "@john-roof", testimonial: "Truly a family-owned business that cares. Great craftsmanship on our siding.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-index-finger-up_23-2148308592.jpg" },
        { id: "t3", name: "Emily Davis", handle: "@emily-remodel", testimonial: "Our kitchen remodel was seamless. Everything was done on time and budget.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/concentrated-interracial-successful-coworkers-work-together-annual-economic-report_273609-18029.jpg" },
        { id: "t4", name: "David Wilson", handle: "@dw-gutters", testimonial: "Very thorough gutter cleaning and repair. Highly recommend them to everyone.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/asian-attractive-glasses-interior-designer-working-house-site-renovation-construction-progress-with-smile-confident-desk-with-blue-print-drawing-tool_609648-514.jpg" },
        { id: "t5", name: "Anna Brown", handle: "@anna-res", testimonial: "Professional, reliable, and friendly. We are very happy with our exterior.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/carpenter-working-house_329181-9436.jpg" },
      ]}
      showRating={true}
      title="Trusted by Local Homeowners"
      description="Hear what our Mount Juliet and middle Tennessee community says about our restoration work."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How long have you been in business?", content: "We have been providing expert construction and restoration services in Mount Juliet and middle Tennessee for over 18 years." },
        { id: "f2", title: "Do you handle both residential and commercial?", content: "Yes, we specialize in both types of projects with dedicated expertise for each." },
        { id: "f3", title: "Are you fully insured and licensed?", content: "Absolutely. We are fully licensed and insured for all construction and restoration tasks." },
      ]}
      title="Frequently Asked Questions"
      description="Answers to common concerns about our restoration services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static"}}
      tag="Contact Us"
      title="Ready for a Renovation?"
      description="Reach out today to request your free quote or discuss your next residential or commercial project. We're here to help!"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTGZmTtOxn8VFTl3Wz3whpziCB/uploaded-1776402456968-2ent03mb.jpg"
      logoText="Restoration Inc."
      columns={[
        {
          title: "Services",          items: [
            { label: "Roofing", href: "#features" },
            { label: "Siding", href: "#features" },
            { label: "Remodeling", href: "#features" },
          ],
        },
        {
          title: "Company",          items: [
            { label: "About Us", href: "#about" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "FAQ", href: "#faq" },
          ],
        },
        {
          title: "Support",          items: [
            { label: "Contact", href: "#contact" },
            { label: "Privacy Policy", href: "#" },
          ],
        },
      ]}
      copyrightText="© 2024 Restoration Inc. Mount Juliet and middle Tennessee. Construction: 615-686-6921 | Restoration: 615-525-6813"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}