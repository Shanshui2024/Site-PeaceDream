"use client";

import { useState } from "react";
import {
  downloadNotices,
  getDiskType,
  modPacks,
  qqGroupUrl,
  resources,
  type PackLink,
} from "@/data/modpacks";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { BilibiliIcon, BookIcon } from "@/components/ui/icons";

function CopyButton({
  link,
  className = "",
}: {
  link: PackLink;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);


  return (
    <span className="relative inline-flex">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          // 无提取码时交给浏览器直接跳转
          if (!link.code) return;
          e.preventDefault();
          navigator.clipboard.writeText(link.code).then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
              window.open(link.url, "_blank");
            }, 900);
          });
        }}
        className={`xy-btn xy-btn-primary ${className ?? ""}`}
      >
        {getDiskType(link.url)}下载
        {link.code && <span className="opacity-80">· {link.code}</span>}
      </a>
      {copied && (
        <span className="absolute -top-6 right-0 bg-accent px-2 py-0.5 text-[11px] text-white">
          已复制
        </span>
      )}
    </span>
  );
}

function TextLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-line px-3 py-1.5 text-xs text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      {label}
    </a>
  );
}

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-24">
        {/* 页头 */}
        <Reveal>
          <span className="text-xs tracking-[0.3em] text-accent">DOWNLOAD</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            下载中心
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            精选优质 Minecraft 整合包与创作资源，均经真机测试。
            <a
              href={qqGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-accent underline-offset-4 hover:underline"
            >
              加入 QQ 群
            </a>
          </p>
        </Reveal>

        {/* 必看公告 */}
        <Reveal delay={80} className="mt-10 border border-accent/60 p-5">
          <h2 className="mb-3 text-sm font-semibold text-accent">
            下载专页必看
          </h2>
          <ol className="list-decimal space-y-1.5 pl-5 text-xs leading-relaxed text-muted md:text-sm">
            {downloadNotices.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>
        </Reveal>

        {/* 整合包 */}
        <section className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                MC 整合包 / 数据包分享
              </h2>
              <span className="pb-1 text-xs text-muted tabular-nums">
                {modPacks.length} 个整合包 · 含原创数据包
              </span>
            </div>
          </Reveal>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modPacks.map((pack, i) => (
              <Reveal
                as="li"
                key={pack.id}
                delay={(i % 3) * 70}
                className="xy-card"
              >
                {/* 封面 */}
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pack.cover}
                    alt={pack.name}
                    width={900}
                    height={506}
                    className="xy-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-black/55 px-2 py-0.5 text-[11px] font-medium text-white">
                    {pack.version}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  {/* 作者 / 更新 */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="xy-meta truncate">
                      作者: {pack.author}
                    </span>
                    {pack.updated && (
                      <span className="xy-meta shrink-0">{pack.updated}</span>
                    )}
                  </div>

                  {/* 标题 */}
                  <h3 className="xy-title mt-1.5">{pack.name}</h3>

                  {/* 标签 */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {pack.tags.map((tag) => (
                      <span key={tag} className="xy-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 简介 */}
                  <p className="mt-3 line-clamp-3 flex-1 text-[13px] leading-relaxed text-muted">
                    {pack.description}
                  </p>

                  {pack.tip && (
                    <p className="mt-2.5 border-l-2 border-accent/40 bg-accent-soft px-2.5 py-1.5 text-[11px] leading-relaxed text-muted">
                      {pack.tip}
                    </p>
                  )}
                  {pack.warning && (
                    <p className="mt-2 text-[11px] leading-relaxed text-accent">
                      警告 · {pack.warning}
                    </p>
                  )}

                  {/* 底部：数据 + 操作 */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
                    <div className="flex items-center gap-3 text-[11px] text-muted">
                      {pack.downloads && (
                        <span className="inline-flex items-center gap-1">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="square"
                            className="h-3 w-3"
                          >
                            <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
                          </svg>
                          {pack.downloads}
                        </span>
                      )}
                      {pack.likes && (
                        <span className="inline-flex items-center gap-1">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="square"
                            className="h-3 w-3"
                          >
                            <path d="M12 20s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.6-7 9-7 9z" />
                          </svg>
                          {pack.likes}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-1.5">
                      {pack.links.map((link) => (
                        <CopyButton key={link.url} link={link} />
                      ))}
                      {pack.video && (
                        <a
                          href={pack.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xy-btn xy-btn-icon"
                          title="B站视频"
                        >
                          <BilibiliIcon className="h-4 w-4" />
                        </a>
                      )}
                      {pack.wiki && (
                        <a
                          href={pack.wiki}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xy-btn xy-btn-icon"
                          title="MC百科"
                        >
                          <BookIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* 剪辑资源 */}
        <section className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                剪辑资源分享
              </h2>
              <span className="pb-1 text-xs text-muted tabular-nums">
                {resources.length} 个资源
              </span>
            </div>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-3">
            {resources.map((res, i) => (
              <Reveal
                as="li"
                key={res.id}
                delay={i * 70}
                className="panel flex flex-col p-5"
              >
                <h3 className="text-sm font-semibold">{res.name}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
                  {res.description}
                </p>
                {res.tip && (
                  <p className="mt-2 text-xs text-muted">
                    <span className="font-medium text-fg">提示</span> · {res.tip}
                  </p>
                )}
                <div className="mt-4 border-t border-line pt-3">
                  <CopyButton link={{ url: res.download }} />
                </div>
              </Reveal>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
