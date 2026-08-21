import type { MetadataRoute } from "next";
import { serviceCatalog } from "../data/services";
import { projectCatalog } from "../data/projects";

const baseUrl = "https://angress-intelligent-technology.chiwakatakevin.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  const pages = ["", "/about", "/services", "/solutions", "/industries", "/projects", "/contact", "/privacy-policy", "/terms-and-conditions"];
  return [
    ...pages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: updated, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...serviceCatalog.map((service) => ({ url: `${baseUrl}/services/${service.slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...projectCatalog.map((project) => ({ url: `${baseUrl}/projects/${project.slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
