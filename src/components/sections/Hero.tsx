import { characters, qqGroupUrl, site } from "@/data/site";

const artNames = characters.map((c) => c.name);
const artAlt = `和梦虚拟人物：${artNames.join("与")}`;
const artCaption = `${artNames.join(" / ")} · ${characters[0].role}`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-14"
    >
      {/* 细网格背景 */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      {/* 移动端：立绘右侧半透明遮盖，出血裁切 */}
      <div
        className="hero-in-delay hero-art-veil pointer-events-none absolute -right-[14%] top-[56%] z-0 w-[74%] max-w-[340px] -translate-y-1/2 opacity-55 md:hidden"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/team/characters.png"
          alt=""
          width={440}
          height={600}
          className="h-auto w-full select-none"
          draggable={false}
        />
      </div>

      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr]">
        <div className="hero-in relative z-10">
          <p className="mb-5 flex flex-wrap items-center gap-2 text-xs tracking-wider text-muted">
            <span className="border border-line px-2 py-0.5">
              EST. {site.founded}
            </span>
            <span className="border border-line px-2 py-0.5">
              {site.positioning}
            </span>
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            {site.name}
            <span className="mt-2 block text-xl font-normal text-muted md:text-2xl">
              {site.nameEn}
            </span>
          </h1>
          <p className="mt-6 border-l-2 border-accent pl-4 text-base leading-relaxed text-muted md:text-lg">
            {site.slogan}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.keywords.map((k) => (
              <li
                key={k}
                className="rounded-full border border-line bg-panel px-3 py-1 text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {k}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/#about"
              className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              了解团队
            </a>
            <a
              href="/download/"
              className="rounded-lg border border-line bg-panel px-6 py-2.5 text-sm shadow-sm transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              整合包下载
            </a>
            <a
              href={qqGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-6 py-2.5 text-sm shadow-sm transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.9 8.9 0 01-3.8-.9L3 20.5l1.5-4.9A8.4 8.4 0 0112 3.1a8.4 8.4 0 019 8.4z" />
              </svg>
              加入群聊
            </a>
          </div>
        </div>

        {/* 桌面端：立绘常规展示 */}
        <div className="hero-in-delay relative mx-auto hidden w-full max-w-xs md:block md:max-w-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/team/characters.png"
            alt={artAlt}
            width={440}
            height={600}
            className="h-auto w-full select-none"
            draggable={false}
          />
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center whitespace-nowrap border border-line bg-panel/85 px-3 py-1 text-[11px] tracking-wider text-muted backdrop-blur">
            {artCaption}
          </div>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <a
        href="/#about"
        aria-label="向下滚动"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="animate-bounce"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="square" />
        </svg>
      </a>
    </section>
  );
}
