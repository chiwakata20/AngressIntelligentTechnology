import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projectCatalog } from "../../../data/projects";
import { ProjectDetailPage } from "../../../components/CompanySite";

export function generateStaticParams(){return projectCatalog.map(project=>({slug:project.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const project=getProject(slug);return project?{title:project.name,description:project.summary,alternates:{canonical:`/projects/${slug}`},openGraph:{type:"website",title:project.name,description:project.summary,url:`/projects/${slug}`},twitter:{card:"summary",title:project.name,description:project.summary}}:{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!getProject(slug))notFound();return <ProjectDetailPage slug={slug}/>;}
