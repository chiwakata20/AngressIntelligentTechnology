"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, CheckCircle2, Cookie, Moon, Sun } from "lucide-react";

export function SiteEnhancements(){
  const [top,setTop]=useState(false);const [cookies,setCookies]=useState(false);const [dark,setDark]=useState(false);const [toast,setToast]=useState("");
  useEffect(()=>{const onScroll=()=>setTop(window.scrollY>500);window.addEventListener("scroll",onScroll,{passive:true});const init=window.setTimeout(()=>{try{setCookies(!localStorage.getItem("angress-cookie-preference"));const saved=localStorage.getItem("angress-theme");const useDark=saved?saved==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;setDark(useDark);document.documentElement.classList.toggle("dark-theme",useDark)}catch{}},0);const onToast=(event:Event)=>{setToast((event as CustomEvent<string>).detail);window.setTimeout(()=>setToast(""),3200)};window.addEventListener("angress-toast",onToast);return()=>{window.clearTimeout(init);window.removeEventListener("scroll",onScroll);window.removeEventListener("angress-toast",onToast)}},[]);
  const choose=(value:string)=>{localStorage.setItem("angress-cookie-preference",value);setCookies(false);setToast(value==="all"?"Preferences saved.":"Essential storage only.")};
  const toggleTheme=()=>{const next=!dark;setDark(next);document.documentElement.classList.toggle("dark-theme",next);localStorage.setItem("angress-theme",next?"dark":"light");setToast(`${next?"Dark":"Light"} theme enabled.`)};
  return <><button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${dark?"light":"dark"} theme`}>{dark?<Sun aria-hidden="true"/>:<Moon aria-hidden="true"/>}</button>{top&&<button type="button" className="back-to-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top"><ArrowUp aria-hidden="true"/></button>}{cookies&&<aside className="cookie-banner" aria-label="Cookie preferences"><Cookie aria-hidden="true"/><div><b>Your browsing preferences</b><p>We use local browser storage only for preferences and optional enquiry drafts—never advertising trackers.</p><Link href="/privacy-policy">Read our privacy policy</Link></div><div><button type="button" onClick={()=>choose("essential")}>Essential only</button><button type="button" className="btn-primary" onClick={()=>choose("all")}>Accept preferences</button></div></aside>}{toast&&<div className="site-toast" role="status" aria-live="polite"><CheckCircle2 aria-hidden="true"/>{toast}</div>}</>;
}
