import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, MapPin, CircleDollarSign, GraduationCap, ArrowRight } from "lucide-react";

const programDetails = [
  { icon: Calendar, label: "開講期間", value: "2026年5月〜10月" },
  { icon: Users, label: "定員", value: "30名程度" },
  { icon: MapPin, label: "会場", value: "慶應義塾大学 三田キャンパス" },
  { icon: CircleDollarSign, label: "受講料", value: "30万円（税込）" },
];

const curriculum = [
  {
    session: 1,
    month: "5月",
    title: "公益資本主義とは何か",
    description: "株主資本主義の問題点と公益資本主義の基本理念を学ぶ",
    speakers: ["原 丈人", "猪熊 浩子"],
  },
  {
    session: 2,
    month: "6月",
    title: "企業統治と法制度",
    description: "公益資本主義を支える企業統治のあり方と法制度の研究",
    speakers: ["猪熊 浩子", "後藤 元"],
  },
  {
    session: 3,
    month: "7月",
    title: "経済理論と資本主義の再構築",
    description: "経済学の観点から資本主義の本質と改革の方向性を探る",
    speakers: ["岩井 克人"],
  },
  {
    session: 4,
    month: "8月",
    title: "中長期経営と価値創造",
    description: "短期主義を超えた中長期的な企業経営のあり方を実践的に学ぶ",
    speakers: ["原 丈人", "ゲスト講師"],
  },
  {
    session: 5,
    month: "9月",
    title: "ステークホルダー経営の実践",
    description: "従業員、地域社会、環境を含むステークホルダーとの共生経営",
    speakers: ["小原 泰", "ゲスト講師"],
  },
  {
    session: 6,
    month: "10月",
    title: "総括・グループ発表",
    description: "学びの総括と受講生によるグループプロジェクト発表",
    speakers: ["全講師陣"],
  },
];

const instructors = [
  {
    name: "原 丈人",
    role: "センター統括",
    affiliation: "デフタパートナーズグループ 会長",
    specialty: "公益資本主義論、ベンチャー投資",
  },
  {
    name: "猪熊 浩子",
    role: "センター長",
    affiliation: "慶應義塾大学法務研究科 教授",
    specialty: "会社法、企業統治論",
  },
  {
    name: "後藤 元",
    role: "講師",
    affiliation: "東京大学大学院法学政治学研究科 教授",
    specialty: "商法、企業法務",
  },
  {
    name: "岩井 克人",
    role: "講師",
    affiliation: "東京大学名誉教授、国際基督教大学特別招聘教授",
    specialty: "経済理論、会社論",
  },
  {
    name: "小原 泰",
    role: "講師",
    affiliation: "フューチャー株式会社 取締役CFO",
    specialty: "経営実務、財務戦略",
  },
];

export default function Programs() {
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
              EXECUTIVE PROGRAM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              公益資本主義
              <br />
              <span className="text-gradient-gold">エグゼクティブ・プログラム 2026</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              次世代の経営リーダーを対象とした
              <br />
              公益資本主義の理論と実践を学ぶ6ヶ月間のプログラム
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              subtitle="Overview"
              title="プログラム概要"
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {programDetails.map((item, index) => (
              <AnimatedSection
                key={item.label}
                delay={200 + index * 100}
                animation="fade-in-up"
              >
                <div className="text-center p-6 bg-card rounded-xl border border-border">
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600} className="mt-12 max-w-3xl mx-auto">
            <div className="p-8 bg-muted/30 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                対象者
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  企業の経営者・経営幹部、次世代経営層
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  官公庁・自治体のリーダー、政策立案者
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  公益資本主義に関心を持つプロフェッショナル
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              subtitle="Curriculum"
              title="カリキュラム"
              dark
            />
          </AnimatedSection>

          <div className="mt-12 max-w-4xl mx-auto space-y-4">
            {curriculum.map((item, index) => (
              <AnimatedSection
                key={item.session}
                delay={200 + index * 100}
                animation="fade-in-left"
              >
                <div className="group relative p-6 rounded-xl bg-dark-muted/50 border border-white/10 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    <div className="flex items-center gap-4 md:w-32 shrink-0">
                      <span className="text-3xl font-bold text-gradient-gold">
                        {String(item.session).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-white/60">{item.month}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60 mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.speakers.map((speaker) => (
                          <span
                            key={speaker}
                            className="px-3 py-1 text-xs font-medium bg-white/5 text-white/70 rounded-full"
                          >
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              subtitle="Instructors"
              title="講師陣"
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <AnimatedSection
                key={instructor.name}
                delay={200 + index * 100}
                animation="fade-in-up"
              >
                <div className="p-6 bg-card rounded-xl border border-border hover-lift h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-serif text-primary">
                        {instructor.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {instructor.name}
                      </h3>
                      <p className="text-xs font-medium text-secondary">
                        {instructor.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {instructor.affiliation}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    専門: {instructor.specialty}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                プログラムへのお申し込み
              </h2>
              <p className="text-muted-foreground mb-8">
                第1期エグゼクティブ・プログラムの募集を受け付けております。
                <br />
                詳細のお問い合わせ・お申し込みは下記よりお願いいたします。
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                <Link to="/contact">
                  お申し込み・お問い合わせ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
