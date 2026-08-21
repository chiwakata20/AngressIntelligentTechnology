import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata:Metadata={title:"About Us",description:"Meet the Harare technology company building practical digital solutions for African progress.",alternates:{canonical:"/about"}};
export default function Page(){return <AboutPage/>}
