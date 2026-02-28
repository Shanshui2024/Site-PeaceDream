import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PeaceDream - 和梦团队资源下载",
  description: "MC整合包、模组、剪辑资源下载平台。优秀·和平·创意·友善。",
  icons: {
    icon: 'https://image.shanshui.site/file/1772292721030_1753d26de273f43c6cc9077059ff3040.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="https://image.shanshui.site/file/1772292721030_1753d26de273f43c6cc9077059ff3040.webp" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}