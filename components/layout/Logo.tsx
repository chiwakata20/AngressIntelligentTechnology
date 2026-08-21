import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className="group flex items-center gap-3" aria-label="ANGRESS INTELLIGENT TECHNOLOGY home">
    <span className={`logo-mark ${light ? "light" : ""}`}><span>A</span></span>
    <span className="leading-tight"><strong className={`block text-[15px] tracking-[.08em] ${light ? "text-white" : "text-slate-950"}`}>ANGRESS</strong><span className={`block text-[9px] font-semibold tracking-[.16em] ${light ? "text-cyan-300" : "text-blue-700"}`}>INTELLIGENT TECHNOLOGY</span></span>
  </Link>;
}
