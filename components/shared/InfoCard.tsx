import type { LucideIcon } from "lucide-react";

export function InfoCard({icon:Icon,title,text,number}:{icon:LucideIcon;title:string;text:string;number?:string}){return <article className="info-card"><div className="flex items-start justify-between"><span className="icon-box"><Icon aria-hidden="true"/></span>{number&&<span className="text-xs font-bold tracking-widest text-slate-300">{number}</span>}</div><h3>{title}</h3><p>{text}</p></article>}
