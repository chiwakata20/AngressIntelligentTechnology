import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages";

export const metadata:Metadata={title:"Projects and Portfolio",description:"Explore transparent concept and demonstration technology projects from ANGRESS.",alternates:{canonical:"/projects"}};
export default function Page(){return <ProjectsPage/>}
