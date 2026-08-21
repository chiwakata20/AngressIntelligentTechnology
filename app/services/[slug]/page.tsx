import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, serviceCatalog } from "../../../data/services";
import { ServiceDetailPage } from "../../../components/CompanySite";

export function generateStaticParams(){return serviceCatalog.map(service=>({slug:service.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const service=getService(slug);return service?{title:service.name,description:service.summary,alternates:{canonical:`/services/${slug}`},openGraph:{type:"website",title:service.name,description:service.summary,url:`/services/${slug}`},twitter:{card:"summary",title:service.name,description:service.summary}}:{};}

export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!getService(slug))notFound();return <ServiceDetailPage slug={slug}/>;}
