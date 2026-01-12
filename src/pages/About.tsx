import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, TrendingUp } from "lucide-react";

const timelineItems = [
  { year: "2026年1月", event: "センター設立" },
  { year: "2026年5月", event: "第1期エグゼクティブ・プログラム開講" },
  { year: "2026年秋", event: "研究成果報告シンポジウム（予定）" },
  { year: "2027年", event: "第2期プログラム・研究拡大（予定）" },
];

const values = [
  {
    icon: Target,
    title: "長期的視点",
    description: "短期的な利益ではなく、10年、20年先を見据えた持続可能な価値創造を目指します。",
  },
  {
    icon: Heart,
    title: "公益の追求",
    description: "株主だけでなく、従業員、顧客、地域社会、将来世代を含むすべてのステークホルダーの利益を考慮します。",
  },
  {
    icon: Lightbulb,
    title: "実践知の創造",
    description: "理論研究にとどまらず、実際の経営現場で活用できる実践的な知見を生み出します。",
  },
  {
    icon: TrendingUp,
    title: "社会変革",
    description: "経済システムの転換を通じて、格差と分断を解消し、豊かな中間層を創出します。",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-wider border border-white/20 text-white/80 mb-6">
              ABOUT
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              センター紹介
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              公益資本主義・研究実装センターは、持続可能な経済社会の実現に向けた
              研究と実践を推進する産官学連携のプラットフォームです。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              subtitle="Message"
              title="センター長・統括メッセージ"
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Center Director */}
            <AnimatedSection delay={200} animation="fade-in-left">
              <div className="bg-card rounded-2xl border border-border p-8 h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-3xl font-serif text-primary">猪</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">猪熊 浩子</h3>
                  <p className="text-sm text-muted-foreground mt-1">センター長</p>
                  <p className="text-sm text-muted-foreground">慶應義塾大学法務研究科 教授</p>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed italic text-center">
                  「公益資本主義は、福澤諭吉が説いた『学問ノススメ』の精神を現代に活かす試みです。
                  法学の視点から、公益を重視した企業統治のあり方を研究し、
                  持続可能な社会の実現に貢献したいと考えています。」
                </blockquote>
              </div>
            </AnimatedSection>

            {/* General Director */}
            <AnimatedSection delay={300} animation="fade-in-right">
              <div className="bg-card rounded-2xl border border-border p-8 h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <span className="text-3xl font-serif text-secondary">原</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">原 丈人</h3>
                  <p className="text-sm text-muted-foreground mt-1">センター統括</p>
                  <p className="text-sm text-muted-foreground">デフタパートナーズグループ 会長</p>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed italic text-center">
                  「株主資本主義から公益資本主義へ。この転換こそが、
                  格差と分断を是正し、世界が憧れる日本を創り出す鍵です。
                  理論と実践の両面から、新しい経済システムの構築を目指します。」
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              subtitle="Values"
              title="センターの理念"
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                delay={200 + index * 100}
                animation="fade-in-up"
              >
                <div className="flex gap-5 p-6 bg-background rounded-xl border border-border hover-lift">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              subtitle="Background"
              title="設立の背景"
              dark
            />
          </AnimatedSection>

          <AnimatedSection delay={200} className="mt-12 max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-white/70 leading-relaxed">
                1980年代以降、株主価値の最大化を至上命題とする株主資本主義が世界経済を席巻しました。
                しかしその結果、短期的な利益追求が優先され、
                <span className="text-white font-medium">格差の拡大、環境破壊、地域社会の疲弊</span>
                といった深刻な問題が生じています。
              </p>
              <p className="text-white/70 leading-relaxed mt-6">
                公益資本主義は、これらの問題を解決するための新しい経済システムです。
                企業は株主だけでなく、従業員、顧客、取引先、地域社会、そして将来世代を含む
                すべてのステークホルダーのために存在するという考え方に基づき、
                <span className="text-white font-medium">中長期的な価値創造</span>を目指します。
              </p>
              <p className="text-white/70 leading-relaxed mt-6">
                当センターは、この公益資本主義の理念を理論的に深化させるとともに、
                実際の企業経営や政策立案に活かせる実践知を創出する場として設立されました。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              subtitle="Roadmap"
              title="活動ロードマップ"
            />
          </AnimatedSection>

          <div className="mt-16 max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              
              {timelineItems.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={200 + index * 150}
                  animation="fade-in-up"
                >
                  <div className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      <div className="inline-block p-4 bg-card rounded-xl border border-border">
                        <p className="text-sm font-medium text-secondary mb-1">{item.year}</p>
                        <p className="text-foreground font-medium">{item.event}</p>
                      </div>
                    </div>
                    
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 ring-4 ring-background" />
                    
                    <div className="flex-1 md:hidden pl-12">
                      <div className="p-4 bg-card rounded-xl border border-border">
                        <p className="text-sm font-medium text-secondary mb-1">{item.year}</p>
                        <p className="text-foreground font-medium">{item.event}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
