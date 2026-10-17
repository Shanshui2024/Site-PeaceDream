import type { Metadata } from "next";
import { modPacks, resources } from "@/data/modpacks";
import { site } from "@/data/site";

const title = `下载中心 | ${site.name} ${site.nameEn}`;
const description = `${site.name}整合包与资源下载：${modPacks.length} 个精选 Minecraft 整合包、${resources.length} 项剪辑资源分享，均经真机测试。`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/download/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: `${site.name} ${site.nameEn}`,
    title,
    description,
    url: "/download/",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} 下载中心` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.ogImage],
  },
};

export default function DownloadLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
