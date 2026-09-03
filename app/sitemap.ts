import type { MetadataRoute } from "next";
import { programmes } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://thespeechfactory.org"; const routes = ["", "/about", "/programmes", "/events", "/resources", "/book-consultation", "/results", "/join", "/contact", "/faq", "/privacy", "/terms", "/refunds", "/cookies"]; return [...routes.map(route => ({ url: `${base}${route}`, lastModified: new Date() })), ...programmes.map(programme => ({ url: `${base}/programmes/${programme.slug}`, lastModified: new Date() }))]; }
