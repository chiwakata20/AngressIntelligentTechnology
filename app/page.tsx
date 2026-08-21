import { HomePage } from "@/components/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Technology for a Changing Africa",
  description: "ANGRESS builds reliable software, web, mobile, analytics and technology solutions for organisations in Zimbabwe and Southern Africa.",
  alternates: { canonical: "/" },
  openGraph: { title: "Intelligent Technology for a Changing Africa", description: "Zimbabwean technology. African ambition.", url: "/" },
};

export default function Home() {
  return <HomePage/>;
}
