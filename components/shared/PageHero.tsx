import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({eyebrow,title,text}:{eyebrow:string;title:string;text:string}){return <section className="page-hero hero-grid"><div className="container relative z-10 py-24 text-white"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true"/><span aria-current="page">{eyebrow}</span></nav><span className="hero-kicker">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>}
