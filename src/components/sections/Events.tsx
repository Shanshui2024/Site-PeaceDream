import { events } from "@/data/site";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Events() {
  return (
    <Section
      id="events"
      index="04"
      title="活动动态"
      subtitle="创立至今已开展多项游戏活动"
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {events.map((e, i) => (
          <Reveal
            as="li"
            key={e.title}
            delay={i * 80}
            className="panel group p-6 transition-shadow duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-accent">
                {e.title}
              </h3>
              <span className="shrink-0 border border-line px-2 py-0.5 text-xs text-muted transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                {e.tag}
              </span>
            </div>
            <p className="mt-1.5 text-xs tracking-wider text-muted tabular-nums">
              {e.period}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{e.desc}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
