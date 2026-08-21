import type { Metadata } from "next";
import { ContactPage } from "@/components/pages";

export const metadata:Metadata={title:"Contact Us",description:"Discuss a technology project with ANGRESS Intelligent Technology in Harare, Zimbabwe.",alternates:{canonical:"/contact"}};
export default function Page(){return <ContactPage/>}
