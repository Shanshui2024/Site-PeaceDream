import { growth, stats } from "@/data/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Stats() {
  const max = Math.max(...growth.map((g) => g.count));

  return (
    <Section
      id="stats"
      index="02"
      title="数据一览"
      subtitle="数据截至 2026 年末，来源于年度总结公开信息"
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line shadow-sm md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="group bg-panel p-6 transition-colors duration-200 hover:bg-accent-soft"
          >
            <p className="text-4xl font-bold tabular-nums tracking-tight transition-colors duration-200 group-hover:text-accent md:text-5xl">
              {s.value}
            </p>
            <p className="mt-3 text-sm font-medium">{s.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{s.note}</p>
          </Reveal>
        ))}
      </div>

      {/* 人数增长条形图（纯 CSS） */}
      <Reveal delay={150} className="panel mt-10 p-6">
        <p className="mb-6 text-xs tracking-wider text-muted">
          和梦体系人数变化 · 2024 — 2026
        </p>
        <ul className="space-y-4">
          {growth.map((g, i) => (
            <li key={g.year} className="flex items-center gap-4 text-sm">
              <span className="w-20 shrink-0 text-muted tabular-nums">
                {g.year}
              </span>
              <div className="h-5 flex-1 bg-line/50">
                <div
                  className="h-full bg-fg transition-all duration-1000 ease-out"
                  style={{
                    width: `${(g.count / max) * 100}%`,
                    opacity: 0.35 + i * 0.22,
                    transitionDelay: `${i * 120}ms`,
                  }}
                />
              </div>
              <span className="w-12 shrink-0 text-right font-medium tabular-nums">
                {g.count}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-muted">
          * 统计口径：和梦团队 + 联互自媒体 + 联互签约 UP，不含重复入群与小号机器人。
        </p>
      </Reveal>
    </Section>
  );
}
