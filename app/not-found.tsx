import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return <main className="not-found"><div><span className="logo-mark"><span>A</span></span><Compass aria-hidden="true"/><p>404 · PAGE NOT FOUND</p><h1>This page has moved beyond the map.</h1><p>The address may be incorrect, or the page may no longer be available.</p><Link href="/" className="btn-primary"><ArrowLeft size={17}/> Return to Home</Link></div></main>;
}
