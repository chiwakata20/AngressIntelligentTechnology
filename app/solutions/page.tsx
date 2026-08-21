import type { Metadata } from "next";
import { SolutionsPage } from "@/components/pages";

export const metadata:Metadata={title:"Digital Solutions",description:"Explore adaptable technology solution concepts for education, healthcare, commerce, transport and organisations.",alternates:{canonical:"/solutions"}};
export default function Page(){return <SolutionsPage/>}
