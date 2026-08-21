import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages";

export const metadata:Metadata={title:"Technology Services",description:"Explore custom software, web, mobile, cybersecurity, analytics, consultancy and technology support services.",alternates:{canonical:"/services"}};
export default function Page(){return <ServicesPage/>}
