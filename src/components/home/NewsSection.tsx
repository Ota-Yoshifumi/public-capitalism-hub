import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionTitle } from "@/components/ui/section-title";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const newsItems = [
  {
    date: "2026年1月",
    category: "お知らせ",
    title: "公益資本主義エグゼクティブ・プログラム 2026 受講生募集開始",
    description: "第一期エグゼクティブ・プログラムの募集を開始しました。5月から10月まで全6回の講義を予定しています。",
    isNew: true,
  },
  {
    date: "2026年1月",
    category: "設立",
    title: "KGRI 公益資本主義・研究実装センター 設立",
    description: "慶應義塾大学グローバルリサーチインスティテュート（KGRI）内に、公益資本主義・研究実装センターを設立しました。",
    isNew: true,
  },
  {
    date: "近日公開",
    category: "イベント",
    title: "設立記念シンポジウム（仮）",
    description: "センター設立を記念したシンポジウムを開催予定です。詳細は追って発表いたします。",
    isNew: false,
  },
];

export function NewsSection() {
  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle
            subtitle="News & Events"
            title="お知らせ・イベント"
            dark
          />
        </AnimatedSection>

        <div className="mt-14 space-y-8 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <AnimatedSection
              key={index}
              delay={200 + index * 100}
              animation="fade-in-left"
            >
              <article className="group relative p-8 rounded-xl bg-dark-muted/50 border border-white/10 hover:border-secondary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="flex items-center gap-3 md:w-44 shrink-0">
                    <CalendarDays className="w-4 h-4 text-white/40" />
                    <span className="text-sm text-white/60 tracking-wide">{item.date}</span>
                    {item.isNew && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-secondary tracking-widest uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-secondary transition-colors tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-loose tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600} className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Link to="/contact">
              お問い合わせはこちら
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
