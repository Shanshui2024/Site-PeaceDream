import { site, qqGroupUrl } from "@/data/site";

// 团队创立于 2023 年，止于当前年份。
// 静态导出下必须用构建期注入的确定值：若在组件里直接调 new Date()，
// 服务端（构建时）与客户端（访问时）可能算出不同年份，导致 React hydration 不匹配。
const startYear = Number(site.founded.slice(0, 4));
const currentYear = process.env.NEXT_PUBLIC_BUILD_YEAR ?? "2026";
const yearRange = `${startYear} — ${currentYear}`;

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/favicon.ico"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 rounded-[5px]"
              />
              <span className="text-sm font-semibold tracking-widest">
                {site.nameEn.toUpperCase()}
              </span>
              <span className="text-xs text-muted">/ {site.name}</span>
            </p>
            <p className="mt-3 text-sm text-muted">{site.slogan}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            <a
              href={qqGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              加入群聊
            </a>
            <a
              href="/download/"
              className="transition-colors hover:text-accent"
            >
              下载中心
            </a>
            <a href="/" className="transition-colors hover:text-accent">
              门户首页
            </a>
            <a
              href="/#about"
              className="transition-colors hover:text-accent"
            >
              关于我们
            </a>
            <a
              href="/pricing/"
              className="transition-colors hover:text-accent"
            >
              商单定价
            </a>
            <a
              href="/#partners"
              className="transition-colors hover:text-accent"
            >
              商务合作
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <p>© {yearRange} {site.name} {site.nameEn}</p>
          <p className="tabular-nums">{site.keywords.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
