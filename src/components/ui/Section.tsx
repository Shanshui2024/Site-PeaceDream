import Reveal from "./Reveal";

/**
 * 通用区块容器：编号 + 标题，呼应年终 PPT 的「01 / 02」章节风格。
 */
export default function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-24">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs tracking-[0.3em] text-accent">
                {index}
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className="hidden max-w-60 pb-1 text-right text-xs leading-relaxed text-muted md:block">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
