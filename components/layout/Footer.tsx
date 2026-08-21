import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Camera, Clock, Mail, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import { companyConfig } from "@/app/company-config";
import { Logo } from "./Logo";

export function Footer(){
  const year=new Date().getFullYear();
  const socials=[[Users,"Facebook",companyConfig.socialMedia.facebook],[BriefcaseBusiness,"LinkedIn",companyConfig.socialMedia.linkedin],[Camera,"Instagram",companyConfig.socialMedia.instagram],[MessageCircle,"WhatsApp",companyConfig.socialMedia.whatsapp]] as const;
  return <footer className="premium-footer">
    <div className="footer-glow"/>
    <div className="container footer-main">
      <div className="footer-brand">
        <Logo light/><p className="footer-tagline">
          {companyConfig.tagline}
          </p>
          <p>We build secure, scalable and locally relevant digital solutions that help organisations improve operations, service delivery and growth.</p>
          <div className="footer-socials">
            {socials.map(([Icon,label,url])=>url?<a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ANGRESS on ${label}`} key={label}><Icon aria-hidden="true"/>
            </a>:<span className="social-placeholder" aria-label={`${label} profile coming soon`} title={`${label} profile coming soon`} key={label}><Icon aria-hidden="true"/></span>)}</div></div>
            <div className="footer-column"><h3>Quick links</h3><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/projects">Projects</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact</Link></div>
            <div className="footer-column"><h3>Services</h3><Link href="/services/custom-software-development">Software Development</Link><Link href="/services/website-web-application-development">Web Applications</Link><Link href="/services/mobile-application-development">Mobile Applications</Link><Link href="/services/cybersecurity-solutions">Cybersecurity</Link><Link href="/services/it-consultancy">IT Consultancy</Link></div>
            <div className="footer-column"><h3>Solutions</h3><Link href="/solutions">Education Platforms</Link><Link href="/solutions">Healthcare Systems</Link><Link href="/solutions">Vehicle Marketplace</Link><Link href="/solutions">Commerce & POS</Link><Link href="/solutions">Booking Systems</Link></div>
            <div className="footer-column footer-contact"><h3>Contact</h3><span><Phone/>{companyConfig.phoneDisplay}</span><a href={`mailto:${companyConfig.email}`}><Mail/>{companyConfig.email}</a><span><MapPin/>{companyConfig.location}</span><span><Clock/>{companyConfig.businessHours}</span></div>
            </div>
            <div className="container footer-cta"><div><span>HAVE A PROJECT IN MIND?</span><h2>Let’s build something useful.</h2></div>
            <Link href="/contact#enquiry-form" className="btn-accent">Request a Consultation <ArrowRight/></Link></div>
            <div className="footer-bottom"><div className="container"><span>© {year} ANGRESS INTELLIGENT TECHNOLOGY. All rights reserved.</span><div>
              <Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms and Conditions</Link>
              </div></div></div></footer>;
}
