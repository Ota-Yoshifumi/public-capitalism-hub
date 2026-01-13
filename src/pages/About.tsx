import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, TrendingUp } from "lucide-react";
import inokumaPhoto from "@/assets/instructors/inokuma-hiroko.jpg";
import haraPhoto from "@/assets/instructors/hara-george.jpg";

const timelineItems = [
  { year: "2025年11月", event: "設立発足式" },
  { year: "2026年3月", event: "特別公開講座" },
  { year: "2026年5月", event: "エグゼクティブ・プログラム開講" },
  { year: "2026年7月", event: "プロジェクト開始" },
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
              教育を受けた健康で豊かな中間層を創り出し、
              <br />
              世界が憧れる日本を目指す
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
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={inokumaPhoto} 
                      alt="猪熊浩子" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">猪熊 浩子</h3>
                  <p className="text-sm text-muted-foreground mt-1">センター長</p>
                  <p className="text-sm text-muted-foreground">慶應義塾大学SDM研究科 教授</p>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed text-sm">
                  「私は、2008年に開設された大学院システムデザイン・マネジメント（SDM）研究科において、大規模・複雑化した社会課題をシステムとして俯瞰的に捉え、アカデミアの知見を用いて解決策を講じ、社会実装することに取り組んでまいりました。
                  <br /><br />
                  本センターは、福澤諭吉先生が明治の時代に教育・報道・親睦の枠組みとして築かれた『慶應義塾』『時事新報』『交詢社』の三本柱を現代版として再構築することを目指します。」
                </blockquote>
              </div>
            </AnimatedSection>

            {/* General Director */}
            <AnimatedSection delay={300} animation="fade-in-right">
              <div className="bg-card rounded-2xl border border-border p-8 h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={haraPhoto} 
                      alt="原丈人" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">原 丈人</h3>
                  <p className="text-sm text-muted-foreground mt-1">センター統括</p>
                  <p className="text-sm text-muted-foreground">アライアンス・フォーラム財団 会長</p>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed text-sm">
                  「現在、格差の拡大や社会の分断は、世界の至る所で進み、止まることがありません。この根本原因は金融経済が重視され、株主資本主義が跋扈する経済・社会システムにあります。
                  <br /><br />
                  福澤諭吉が、近代日本に向けて提唱したのは『学問ノススメ』です。ここ、慶應義塾大学において、これからの日本に必要な『公益資本主義ノススメ』を産み出していきましょう。」
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
                現在、格差の拡大や社会の分断は、世界の至る所で進み、止まることがありません。このままでは、どの国からも中間層が減り、一部の富裕層とその他多くの貧困層となり、社会は、国は、そして世界は持続的でないものになってしまいます。
              </p>
              <p className="text-white/70 leading-relaxed mt-6">
                この根本原因は金融経済が重視され、株主資本主義が跋扈する経済・社会システムにあります。こうした経済・社会システムのあり方の変革は容易ではありませんが、
                <span className="text-white font-medium">世界に先駆け超高齢化社会に突入するわが国・日本こそが最先端の変革の舞台</span>
                となりえます。
              </p>
              <p className="text-white/70 leading-relaxed mt-6">
                「豊かな中間層が復活し、誰もが健康で溌らつと暮らせる経済と社会を実現していく」そんな日本に変われたら、世界から注目の的、憧れの対象となるでしょう。
                そのためには、志ある有能な者たちが、組織の垣根を越えて集い、大いに議論し、創意工夫を練り、相互に研究し、社会に実装し、その実践を支援していく場が必要です。
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
