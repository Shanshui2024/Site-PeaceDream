import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `下载中心 | 和梦团队 PeaceDream`,
  description:
    "和梦团队整合包与资源下载：12 个精选 Minecraft 整合包、剪辑资源分享，均经真机测试。",
};

export default function DownloadLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
