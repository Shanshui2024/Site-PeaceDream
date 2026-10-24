import { partners } from "@/data/site";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Partners() {
  return (
    <Section
      id="partners"
      index="05"
      title="合作伙伴"
      subtitle="互帮互助 · 共同进步"
    >
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line shadow-sm sm:grid-cols-4">
        {partners.map((p, i) => (
          <Reveal
            as="li"
            key={p.name}
            delay={i * 50}
            className="group bg-panel p-5 text-center transition-colors duration-200 hover:bg-accent-soft"
          >
            <p className="text-sm font-medium transition-colors duration-200 group-hover:text-accent">
              {p.name}
            </p>
            <p className="mt-1 text-xs text-muted">{p.type}</p>
          </Reveal>
        ))}
      </ul>
      <Reveal delay={100}>
        <p className="mt-6 text-xs text-muted">
          * 排名不分先后，合作信息来源于 2026 年度总结公开内容。
        </p>
      </Reveal>
    </Section>
  );
}
