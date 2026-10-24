import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Reveal from "@/components/ui/Reveal";
import { priceSections, pricing } from "@/data/pricing";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-24">
        {/* 页头 */}
        <Reveal>
          <span className="text-xs tracking-[0.3em] text-accent">
            {pricing.eyebrow}
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            {pricing.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            {pricing.lead}
          </p>
        </Reveal>

        {/* 计费说明 */}
        <Reveal delay={80} className="mt-10 border border-line p-5">
          <h2 className="mb-3 text-sm font-semibold text-accent">计费说明</h2>
          <p className="text-xs leading-relaxed text-muted md:text-sm">
            {pricing.notice.before}
            <span className="font-bold text-red-600 dark:text-red-500">
              {pricing.notice.highlight}
            </span>
            {pricing.notice.after}
            <br />
            <span className="font-bold text-red-600 dark:text-red-500">
              {pricing.notice.emphasis}
            </span>
            <br />
            {pricing.notice.afterSalesTip}
          </p>
        </Reveal>

        {/* 申请入口 */}
        <Reveal delay={140} className="mt-6 panel flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h2 className="text-base font-semibold">提交商单申请</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {pricing.formNote}
            </p>
          </div>
          <a
            href={pricing.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
          >
            填写商单申请表
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </Reveal>

        {/* 价格明细 */}
        <div className="mt-16 space-y-14">
          {priceSections.map((sec, si) => (
            <section key={sec.index} id={`price-${sec.index}`}>
              <Reveal>
                <div className="flex items-baseline gap-3">
                  <span className="text-xs tracking-[0.3em] text-accent">
                    {sec.index}
                  </span>
                  <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                    {sec.title}
                  </h2>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  <span className="font-medium">定价核心标准：</span>
                  {sec.core}
                </p>
                {sec.footer && (
                  <p className="mt-2 border-l-2 border-accent/40 pl-3 text-xs leading-relaxed text-muted">
                    {sec.footer}
                  </p>
                )}
              </Reveal>

              {/* 表格档位 */}
              {sec.rows && sec.rows.length > 0 && (
                <ul className="mt-6 space-y-px overflow-hidden rounded-xl border border-line bg-line">
                  {sec.rows.map((row, i) => (
                    <Reveal
                      as="li"
                      key={row.label}
                      delay={(i % 3) * 70}
                      className="grid gap-1 bg-panel px-4 py-3.5 transition-colors duration-200 hover:bg-accent-soft sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-4 md:px-5"
                    >
                      <span className="text-sm font-semibold">
                        {row.label}
                      </span>
                      <span className="text-xs leading-relaxed text-muted sm:text-[13px]">
                        {row.spec}
                      </span>
                      <span className="text-sm font-bold tabular-nums text-accent sm:text-right">
                        {row.price}
                      </span>
                    </Reveal>
                  ))}
                </ul>
              )}

              {/* 段落型定价 */}
              {sec.paragraphs?.map((p) => (
                <Reveal key={p.title} className="panel mt-4 p-5">
                  <h3 className="text-sm font-semibold">{p.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {p.lines.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}

              {/* 售后说明 */}
              {sec.afterSales && (
                <Reveal
                  delay={140}
                  className="mt-4 flex items-center gap-2.5 border border-line bg-panel px-4 py-3"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`h-4 w-4 shrink-0 ${
                      sec.afterSales === "无售后" ? "text-muted" : "text-accent"
                    }`}
                  >
                    <path d="M12 3l7 3v5c0 4.6-3 8.4-7 9.5C8 19.4 5 15.6 5 11V6l7-3z" />
                    <path d="M9.5 11.5l2 2 3.5-3.5" />
                  </svg>
                  <p className="text-xs leading-relaxed text-muted md:text-sm">
                    <span className="mr-1.5 font-medium text-fg">售后说明</span>
                    {sec.afterSales}
                  </p>
                </Reveal>
              )}
            </section>
          ))}
        </div>

        {/* 底部再放一次申请入口 */}
        <Reveal delay={100} className="mt-16 border border-accent/60 p-6 text-center">
          <h2 className="text-base font-semibold text-accent">
            确定合作意向？
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted">
            提交商单申请表，填写合作内容与报价，工作室会尽快与你联系。
          </p>
          <a
            href={pricing.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
          >
            填写商单申请表
          </a>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}