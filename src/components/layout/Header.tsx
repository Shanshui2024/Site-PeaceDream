"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

/** 团队相关锚点，收进「团队」下拉，避免平级导航过长 */
const teamLinks = [
  { href: "/#about", label: "关于我们" },
  { href: "/#stats", label: "数据一览" },
  { href: "/#studio", label: "精品工作室" },
  { href: "/#events", label: "活动动态" },
  { href: "/#partners", label: "合作伙伴" },
];

const nav = [
  { href: "/", label: "首页", dropdown: false },
  { href: "/#studio", label: "团队", dropdown: true },
  { href: "/pricing/", label: "商单", dropdown: false },
];

function Chevron({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function DownloadIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="square"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false); // 移动端抽屉
  const [teamOpen, setTeamOpen] = useState(false); // 桌面端团队下拉
  const teamRef = useRef<HTMLDivElement | null>(null);

  // 抽屉打开时锁定页面滚动
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc 关闭抽屉与下拉
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setTeamOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 点击下拉外部时关闭
  useEffect(() => {
    if (!teamOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!teamRef.current?.contains(e.target as Node)) setTeamOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [teamOpen]);

  // 路由变化时收起所有浮层
  useEffect(() => {
    setOpen(false);
    setTeamOpen(false);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-panel/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        {/* 品牌 */}
        <a href="/" className="group flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/favicon.ico"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-[6px] transition-transform duration-300 group-hover:rotate-6"
          />
          <span className="text-[15px] font-semibold tracking-[0.1em]">
            {site.nameEn.toUpperCase()}
          </span>
          <span className="hidden text-xs text-muted sm:inline">
            / {site.name}
          </span>
        </a>

        {/* 桌面端导航 */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                ref={teamRef}
                className="relative"
                onMouseEnter={() => setTeamOpen(true)}
                onMouseLeave={() => setTeamOpen(false)}
              >
                <a
                  href={item.href}
                  onFocus={() => setTeamOpen(true)}
                  aria-expanded={teamOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-accent-soft hover:text-accent"
                >
                  {item.label}
                  <Chevron
                    className={`h-3 w-3 transition-transform duration-200 ${
                      teamOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {teamOpen && (
                  <div className="absolute left-0 top-full w-44 pt-1.5">
                    <ul className="panel overflow-hidden p-1.5 shadow-lg">
                      {teamLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-accent-soft hover:text-accent"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* 右侧操作区 */}
        <div className="flex items-center gap-2">
          <a
            href="/download/"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
          >
            <DownloadIcon />
            <span className="hidden sm:inline">下载中心</span>
            <span className="sm:hidden">下载</span>
          </a>

          {/* 汉堡按钮（仅移动端） */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line transition-colors duration-200 hover:border-accent hover:text-accent md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端抽屉：保持全部入口平铺，避免二级菜单在手机上难操作 */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/40 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            aria-label="移动端导航"
            className="fixed inset-x-0 top-16 z-40 border-b border-line bg-panel shadow-lg md:hidden"
          >
            <ul className="mx-auto max-w-5xl px-5 py-2">
              <li>
                <a
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent"
                >
                  首页
                </a>
              </li>
              {teamLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg border-t border-line px-3 py-2.5 text-sm text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-line">
                <a
                  href="/pricing/"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent"
                >
                  商单定价
                </a>
              </li>
              <li className="border-t border-line">
                <a
                  href="/download/"
                  onClick={() => setOpen(false)}
                  className="mx-1 mt-2 mb-1 block rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-medium text-white"
                >
                  下载中心
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}