import { site } from "@/data/site";

const nav = [
  { href: "/#about", label: "关于" },
  { href: "/#stats", label: "数据" },
  { href: "/#studio", label: "工作室" },
  { href: "/#events", label: "活动" },
  { href: "/#partners", label: "合作" },
];

export default function Header() {
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

        {/* 导航：XyeBBS 式文字链接 */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-accent-soft hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 右侧：绿色实心圆角按钮（对应 XyeBBS 的「注册」位） */}
        <a
          href="/download/"
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="square"
            className="h-4 w-4"
          >
            <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
          </svg>
          下载中心
        </a>
      </div>
    </header>
  );
}
