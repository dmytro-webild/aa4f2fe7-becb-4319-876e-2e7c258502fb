"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitEmail from '@/components/sections/contact/ContactSplitEmail';
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
      brandName="Construction Services & Restoration Inc."
      button={{ text: "Request Free Quote", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static"}}
      title="Restoring Excellence in Mount Juliet and Middle Tennessee"
      description="Family-owned and trusted for 18+ years. Serving Mount Juliet, TN and surrounding areas. Committed to delivering professional residential and commercial construction with the highest standards of craftsmanship."
      buttons={[
        { text: "Request Free Quote", href: "#contact" },
      ]}
      carouselItems={[
        { id: "c1", imageSrc: "https://storage.googleapis.com/webild/users/user_3CTGZmTtOxn8VFTl3Wz3whpziCB/uploaded-1792279098908-zon07ui9.jpg", imageAlt: "Roofing Project 1" },
        { id: "c2", imageSrc: "https://storage.googleapis.com/webild/users/user_3CTGZmTtOxn8VFTl3Wz3whpziCB/uploaded-1792279098909-1mx77srg.jpg", imageAlt: "Roofing Project 2" },
        { id: "c3", imageSrc: "https://storage.googleapis.com/webild/users/user_3CTGZmTtOxn8VFTl3Wz3whpziCB/uploaded-1792279098910-5hqfsppq.jpg", imageAlt: "Roofing Project 3" },
        { id: "c4", imageSrc: "https://storage.googleapis.com/webild/users/user_3CTGZmTtOxn8VFTl3Wz3whpziCB/uploaded-1792279098911-rfw8me9o.jpg", imageAlt: "Roofing Project 4" },
        { id: "c5", imageSrc: "https://storage.googleapis.com/webild/users/user_3CTGZmTtOxn8VFTl3Wz3whpziCB/uploaded-1792279098911-80ifp5q6.jpg", imageAlt: "Roofing Project 5" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="18+ Years Serving Our Mount Juliet Neighbors"
      description="As a family-owned business for over 18 years, we have dedicated ourselves to building trust and excellence across Mount Juliet and Middle Tennessee. We treat every residential and commercial project with the same family pride that has defined our reputation."
      imageSrc="http://img.b2bpic.net/free-photo/group-three-engineers_23-2147704210.jpg?_wi=1"
      imageAlt="Our family-owned team"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      features={[
        { title: "Roofing & Siding", description: "High-quality residential and commercial roofing and durable siding.", imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-building-ceiling_1359-160.jpg?_wi=1" },
        { title: "Gutter Systems", description: "Comprehensive gutter installation and protection systems.", imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530736.jpg?_wi=1" },
        { title: "Interior Remodeling", description: "Expert renovations for homes and businesses.", imageSrc: "http://img.b2bpic.net/free-photo/tiler-working-renovation-apartment_23-2149278568.jpg?_wi=1" },
        { title: "Dump Trailer Rentals", description: "Reliable dump trailer rentals for your waste removal needs. Please note: Prices vary based on the total load weight and duration.", imageSrc: "https://storage.googleapis.com/webild/users/user_3CTGZmTtOxn8VFTl3Wz3whpziCB/uploaded-1792279291540-scclcogu.jpg" },
        { title: "Professional Cleanouts", description: "We handle the heavy lifting for your project or cleanout needs with our professional dump trailer fleet.", imageSrc: "https://storage.googleapis.com/webild/users/user_3CTGZmTtOxn8VFTl3Wz3whpziCB/uploaded-1792279291542-wt9w6iz8.jpg" },
      ]}
      title="Expert Construction Services"
      description="Serving residential and commercial clients with integrity for over 18 years."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Sarah Miller", handle: "@sarah-mtj", testimonial: "Exceptional service and family pride. They handled our roof restoration perfectly.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/workers-having-little-chat-while-having-cup-coffee_329181-15605.jpg?_wi=1" },
        { id: "t2", name: "John Doe", handle: "@john-roof", testimonial: "Truly a family-owned business that cares. Great craftsmanship.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-index-finger-up_23-2148308592.jpg?_wi=1" },
        { id: "t3", name: "Emily Davis", handle: "@emily-remodel", testimonial: "Our kitchen remodel was seamless. Trusted locally for good reason.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/concentrated-interracial-successful-coworkers-work-together-annual-economic-report_273609-18029.jpg?_wi=1" },
      ]}
      showRating={true}
      title="Trusted by Our Community"
      description="18+ years of dedicated service in Mount Juliet."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How long have you served the area?", content: "We have been serving Mount Juliet and Middle Tennessee for over 18 years as a family-owned company." },
        { id: "f2", title: "What services do you provide?", content: "We provide comprehensive roofing, siding, gutter, interior remodeling, and dump trailer rentals for residential and commercial clients." },
        { id: "f3", title: "How can I contact you?", content: "You can reach out via our contact form for a free quote or email us directly at csrincnashville@gmail.com." },
      ]}
      title="Frequently Asked Questions"
      description="Common questions about our restoration services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitEmail
      tag="Contact Us"
      title="Request Your Free Quote"
      description="We specialize in high-quality residential and commercial restoration. Please provide your email address to receive your quote. For additional inquiries, you can call Henry at 615-686-6921 or Jesus at 615-525-6813."
      inputPlaceholder="Enter your email address"
      buttonText="Send Request"
      onSubmit={(email) => {
        window.location.href = `mailto:Jesusplacencia@icloud.com?subject=Free Quote Request&body=Email: ${email}%0D%0AAddress: [Please enter your address]%0D%0APhone: [Please enter your phone number]`;
      }}
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
            { label: "Dump Trailer Rentals", href: "#features" },
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
            { label: "Email: csrincnashville@gmail.com", href: "mailto:csrincnashville@gmail.com" },
          ],
        },
      ]}
      copyrightText="© 2025 Construction Services & Restoration Inc. Mount Juliet, TN. Email: csrincnashville@gmail.com | Henry: 615-686-6921 | Jesus: 615-525-6813"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}