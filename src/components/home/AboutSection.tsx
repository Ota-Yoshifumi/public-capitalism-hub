import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionTitle } from "@/components/ui/section-title";
import { GraduationCap, FileText } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "エグゼクティブ・プログラム",
    description: "俯瞰的な視点と経営判断力を産官学が連携して磨いていく",
    color: "bg-primary",
  },
  {
    icon: FileText,
    title: "制度研究・プログラム",
    description: "経済社会システムの基盤である制度設計のアップデート案を作る",
    color: "bg-secondary",
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

        <AnimatedSection delay={200} className="mt-14 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-loose tracking-wide">
            公益資本主義を提唱する<span className="text-foreground font-medium">アライアンス・フォーラム財団</span>と、
            未来の常識を創る研究人材づくりを目指す<span className="text-foreground font-medium">慶應義塾大学</span>が連携し、
            本センターを設立しました。
          </p>
          <p className="text-lg text-muted-foreground leading-loose tracking-wide mt-4">
            産官学から志ある有能な人材を集わせ、これからの経済・社会システムを構想し、
            社会に実装していく<span className="text-foreground font-medium">旗手たちの虎の穴</span>となることを目指します。
          </p>
        </AnimatedSection>

        {/* Two Programs */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <AnimatedSection
              key={program.title}
              delay={400 + index * 100}
              animation="fade-in-up"
            >
              <div className="group relative p-10 rounded-2xl bg-card border border-border hover-lift card-glow h-full">
                <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-8`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-loose tracking-wide">
                  {program.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Vision Statement - Fukuzawa's Three Pillars */}
        <AnimatedSection delay={700} className="mt-24">
          <div className="relative p-10 md:p-16 rounded-3xl bg-muted/50 border border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                福澤諭吉の「近代日本への構想」に習う
              </h3>
              <p className="text-muted-foreground leading-loose tracking-wide mb-8">
                150年以上前、福澤諭吉が構想し、実装した日本の近代化に必要な３つの人材システム
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-foreground mb-2">学問ノススメ</h4>
                  <p className="text-sm text-muted-foreground">自由・独立・平等の新時代の価値観を宣言</p>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-foreground mb-2">時事新報</h4>
                  <p className="text-sm text-muted-foreground">友なく敵なく思うところを述べる</p>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-foreground mb-2">交詢社</h4>
                  <p className="text-sm text-muted-foreground">社中が創発しあい活学問としていく</p>
                </div>
              </div>
              <p className="mt-8 text-sm text-muted-foreground tracking-wide">
                — ここ慶應義塾大学において「公益資本主義ノススメ」を産み出していきましょう
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
