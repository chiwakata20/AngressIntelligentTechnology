import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction({eyebrow="LET’S BUILD WHAT’S NEXT",title,text,primary="Start Your Project"}:{eyebrow?:string;title:string;text:string;primary?:string}){return <section className="cta-banner"><div className="container relative z-10 flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center"><div><span>{eyebrow}</span><h2>{title}</h2><p>{text}</p></div><div className="flex flex-wrap gap-3"><Link href="/contact#enquiry-form" className="btn-accent">{primary} <ArrowRight size={17} aria-hidden="true"/></Link><Link href="/contact" className="btn-ghost">Contact Us</Link></div></div></section>}
