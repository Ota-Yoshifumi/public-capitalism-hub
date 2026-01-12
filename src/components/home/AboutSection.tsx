import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Building, Users, BookOpen } from "lucide-react";

const divisions = [
  {
    icon: Building,
    title: "制度設計部会",
    description: "公益資本主義を支える法制度・税制の研究と提言",
    color: "bg-primary",
  },
  {
    icon: BookOpen,
    title: "情報判断部会",
    description: "正しい情報による意思決定と、メディアリテラシーの研究",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "経営実践部会",
    description: "企業における公益資本主義の実践と事例研究",
    color: "bg-primary",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle
            subtitle="About"
            title="センター概要"
          />
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            KGRIに設置された公益資本主義・研究実装センターは、
            福澤諭吉が説いた「学問ノススメ」の精神を現代に活かし、
            <span className="text-foreground font-medium">格差と分断を是正</span>するための
            新しい資本主義のあり方を研究・実装する産官学連携のプラットフォームです。
          </p>
        </AnimatedSection>

        {/* Three Divisions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <AnimatedSection
              key={division.title}
              delay={400 + index * 100}
              animation="fade-in-up"
            >
              <div className="group relative p-8 rounded-2xl bg-card border border-border hover-lift card-glow h-full">
                <div className={`w-14 h-14 rounded-xl ${division.color} flex items-center justify-center mb-6`}>
                  <division.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {division.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {division.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Vision Statement */}
        <AnimatedSection delay={700} className="mt-20">
          <div className="relative p-8 md:p-12 rounded-3xl bg-muted/50 border border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                私たちが目指す社会
              </h3>
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                「短期的な利益の追求から脱却し、
                <span className="text-foreground font-medium">中長期的な価値創造</span>を通じて
                すべてのステークホルダーの幸福を実現する。
                それが公益資本主義の理念です。」
              </blockquote>
              <p className="mt-6 text-sm text-muted-foreground">
                — 原丈人（センター統括・デフタパートナーズ会長）
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
