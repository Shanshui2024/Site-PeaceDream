import type { Metadata } from "next";
import { site } from "@/data/site";
import { pricing } from "@/data/pricing";

const title = `商单定价 | ${site.name} ${site.nameEn}`;
const description =
  "和梦精品工作室商单价格划分参考：服务器租用、建筑、模组、皮肤、材质包、数据包、插件、动画、配音与视频剪辑。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: `${site.name} ${site.nameEn}`,
    title,
    description,
    url: "/pricing/",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} 商单定价` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.ogImage],
  },
};

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}