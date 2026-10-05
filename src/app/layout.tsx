import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} ${site.nameEn} | ${site.positioning}`,
  description: `${site.slogan} —— ${site.name}（${site.nameEn}），创立于 ${site.founded}，专注 Minecraft 与自媒体创作的团队。`,
  keywords: ["和梦团队", "PeaceDream", "Minecraft", "自媒体", "MC团队"],
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
