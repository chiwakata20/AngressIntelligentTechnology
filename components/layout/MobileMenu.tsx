import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { navigationItems } from "@/data/navigation";

export function MobileMenu({open,pathname,closeMenu,navRef}:{open:boolean;pathname:string;closeMenu:()=>void;navRef:React.RefObject<HTMLElement|null>}) {
  const active=(href:string)=>href==="/"?pathname==="/":pathname.startsWith(href);
  return <>
    <button type="button" className={`mobile-nav-backdrop lg:hidden ${open?"open":""}`} onClick={closeMenu} tabIndex={-1} aria-hidden="true" aria-label="Close navigation menu" />
    <nav ref={navRef} id="mobile-navigation" className={`mobile-nav lg:hidden ${open?"open":""}`} aria-label="Mobile navigation" aria-hidden={!open}>
      {navigationItems.map(item=><Link key={item.href} href={item.href} tabIndex={open?0:-1} onClick={closeMenu} aria-current={active(item.href)?"page":undefined} className={active(item.href)?"active":""}>{item.label}<ChevronRight size={17} aria-hidden="true"/></Link>)}
      <Link href="/contact#enquiry-form" tabIndex={open?0:-1} onClick={closeMenu} className="mobile-consultation">Request a Consultation <ArrowRight aria-hidden="true"/></Link>
    </nav>
  </>;
}
