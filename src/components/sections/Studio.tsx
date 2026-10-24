import { studio } from "@/data/site";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Studio() {
  return (
    <Section
      id="studio"
      index="03"
      title="和梦精品工作室"
      subtitle="为玩家打造更好的游戏内容"
    >
      <Reveal>
        <p className="max-w-2xl text-base leading-loose text-muted">
          {studio.intro}
        </p>
      </Reveal>
      <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line shadow-sm sm:grid-cols-3 md:grid-cols-6">
        {studio.departments.map((d, i) => (
          <Reveal
            as="li"
            key={d.name}
            delay={i * 70}
            className="group bg-panel p-5 transition-colors duration-200 hover:bg-accent-soft"
          >
            <p className="text-3xl font-bold tabular-nums transition-colors duration-200 group-hover:text-accent">
              {d.count}
            </p>
            <p className="mt-2 text-sm text-muted transition-colors duration-200 group-hover:text-fg">
              {d.name}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
