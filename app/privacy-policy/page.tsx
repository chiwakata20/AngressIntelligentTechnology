import type { Metadata } from "next";
import { CompanyPage } from "@/components/CompanySite";

export const metadata:Metadata={title:"Privacy Policy",description:"Learn how the front-end-only ANGRESS website handles locally stored preferences and enquiry drafts.",alternates:{canonical:"/privacy-policy"}};
export default function Page(){return <CompanyPage page="privacy-policy"/>}
