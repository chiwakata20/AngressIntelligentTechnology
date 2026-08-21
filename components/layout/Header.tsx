"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header(){
  const pathname=usePathname();
  const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);
  const buttonRef=useRef<HTMLButtonElement>(null);const navRef=useRef<HTMLElement>(null);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>12);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  useEffect(()=>{const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape"&&open){setOpen(false);buttonRef.current?.focus()}};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[open]);
  useEffect(()=>{document.body.classList.toggle("menu-open",open);if(open)window.requestAnimationFrame(()=>navRef.current?.querySelector<HTMLElement>("a")?.focus());return()=>document.body.classList.remove("menu-open")},[open]);
  useEffect(()=>setOpen(false),[pathname]);
  const home=pathname==="/";const transparent=home&&!scrolled&&!open;const active=(href:string)=>href==="/"?home:pathname.startsWith(href);
  return <header className={`site-header ${home?"home-header":"inner-header"} ${transparent?"transparent":"solid"} ${scrolled?"scrolled":""}`}>
    <div className="container flex h-20 items-center justify-between"><Logo/><nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">{navigationItems.map(item=><Link key={item.href} href={item.href} aria-current={active(item.href)?"page":undefined} className={`nav-link ${active(item.href)?"active":""}`}>{item.label}</Link>)}</nav><Link href="/contact#enquiry-form" className="btn-primary consultation-btn hidden xl:inline-flex">Request a Consultation <ArrowRight size={16} aria-hidden="true"/></Link><button ref={buttonRef} type="button" onClick={()=>setOpen(value=>!value)} className="icon-btn lg:hidden" aria-label={open?"Close navigation menu":"Open navigation menu"} aria-controls="mobile-navigation" aria-expanded={open}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button></div>
    <MobileMenu open={open} pathname={pathname} closeMenu={()=>setOpen(false)} navRef={navRef}/>
  </header>;
}
