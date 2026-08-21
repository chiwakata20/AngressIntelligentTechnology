import type { Metadata } from "next";
import { CompanyPage } from "@/components/CompanySite";

export const metadata:Metadata={title:"Terms and Conditions",description:"Read the terms and conditions for using the ANGRESS Intelligent Technology company profile website.",alternates:{canonical:"/terms-and-conditions"}};
export default function Page(){return <CompanyPage page="terms-and-conditions"/>}
