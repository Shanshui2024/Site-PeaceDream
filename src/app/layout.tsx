import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

const title = `${site.name} ${site.nameEn} | ${site.positioning}`;
const description = `${site.slogan} —— ${site.name}（${site.nameEn}），创立于 ${site.founded}，专注 Minecraft 与自媒体创作的团队。`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: ["和梦团队", "PeaceDream", "Minecraft", "自媒体", "MC团队"],
  authors: [{ name: site.name }],
  creator: site.name,
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: `${site.name} ${site.nameEn}`,
    title,
    description,
    url: "/",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} ${site.nameEn}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
