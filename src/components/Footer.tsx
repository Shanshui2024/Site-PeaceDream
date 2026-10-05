import { site } from "@/data/site";

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
              href="/#partners"
              className="transition-colors hover:text-accent"
            >
              商务合作
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <p>© 2023 — 2027 {site.name} {site.nameEn}</p>
          <p className="tabular-nums">优秀 · 和平 · 创意 · 友善</p>
        </div>
      </div>
    </footer>
  );
}
