import { site } from "@/data/site";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      title="关于团队"
      subtitle="从闲聊群到创作者团队，三年成长"
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-base leading-loose text-muted md:text-lg">
            {site.intro}
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line text-sm shadow-sm sm:grid-cols-4">
            {site.keywords.map((k) => (
              <li
                key={k}
                className="flex items-center justify-center bg-panel py-5 font-medium tracking-widest"
              >
                {k}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <dl className="divide-y divide-line border border-line text-sm">
            {[
              ["创立时间", site.founded],
              ["团队定位", site.positioning],
              ["体系构成", "团队 + 联互自媒体 + 签约 UP"],
              ["资料来源", "2026 年度总结"],
            ].map(([dt, dd]) => (
              <div key={dt} className="flex justify-between gap-4 px-4 py-3.5">
                <dt className="shrink-0 text-muted">{dt}</dt>
                <dd className="text-right">{dd}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
