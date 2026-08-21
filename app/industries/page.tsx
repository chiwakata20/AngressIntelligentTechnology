import type { Metadata } from "next";
import { IndustriesPage } from "@/components/pages";

export const metadata:Metadata={title:"Industries We Serve",description:"Practical Zimbabwe-focused technology for education, healthcare, retail, professional services, NGOs and government.",alternates:{canonical:"/industries"}};
export default function Page(){return <IndustriesPage/>}
