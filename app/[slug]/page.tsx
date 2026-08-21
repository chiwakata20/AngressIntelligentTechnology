import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CompanyPage, type PageKey, pages } from "../../components/CompanySite";

const seo: Record<string, [string, string]> = {
  about: ["About Us", "Meet the Harare technology company building practical digital solutions for African progress."],
  services: ["Technology Services", "Explore custom software, web, mobile, cybersecurity, analytics, consultancy and technology support services."],
  solutions: ["Digital Solutions", "Explore adaptable technology solution concepts for education, healthcare, commerce, transport and organisations."],
  projects: ["Projects and Portfolio", "Explore honest concept, prototype, development and completed internal technology work from ANGRESS."],
  industries: ["Industries We Serve", "Practical Zimbabwe-focused technology for education, healthcare, automotive, retail, transport and more."],
  contact: ["Contact Us", "Discuss a technology project with ANGRESS Intelligent Technology in Harare, Zimbabwe."],
  "privacy-policy": ["Privacy Policy", "Learn how the front-end-only ANGRESS website handles locally stored preferences and enquiry drafts."],
  "terms-of-service": ["Terms of Service", "Read the terms for using the ANGRESS Intelligent Technology company profile website."],
  "terms-and-conditions": ["Terms and Conditions", "Read the terms and conditions for using the ANGRESS Intelligent Technology company profile website."],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = seo[slug];
  if (!item) return {};
  return { title: item[0], description: item[1], alternates:{canonical:`/${slug}`}, openGraph: { type:"website",title: item[0], description: item[1], url: `/${slug}` },twitter:{card:"summary",title:item[0],description:item[1]} };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pages.includes(slug as PageKey)) notFound();
  return <CompanyPage page={slug as PageKey} />;
}
