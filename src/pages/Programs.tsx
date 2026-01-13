import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, MapPin, CircleDollarSign, GraduationCap, ArrowRight, Clock, Info } from "lucide-react";

// 講師画像のインポート
import haraImage from "@/assets/instructors/hara-george.jpg";
import inokumaImage from "@/assets/instructors/inokuma-hiroko.jpg";
import gotoImage from "@/assets/instructors/goto-gen.png";
import iwaiImage from "@/assets/instructors/iwai-katsuhito.png";
import obaraImage from "@/assets/instructors/obara-yasu.png";
import yahagiImage from "@/assets/instructors/yahagi-tsuneo.png";
import minamideImage from "@/assets/instructors/minamide-kenichi.png";
import todorokiImage from "@/assets/instructors/todoroki-kazuhiro.png";
import tajiriImage from "@/assets/instructors/tajiri-nozomu.png";

const programDetails = [
  { icon: Calendar, label: "開講期間", value: "2026年5月〜10月" },
  { icon: Clock, label: "時間", value: "月1回 18:00〜20:00" },
  { icon: MapPin, label: "会場", value: "三田キャンパス＋オンライン" },
  { icon: CircleDollarSign, label: "受講料", value: "30万円（税別）" },
];

const specialLecture = {
  date: "3月30日(月) 18:00",
  title: "企業ガバナンスの課題",
  speaker: "後藤 元 氏",
  affiliation: "東京大学大学院 法学政治学研究科 教授",
  image: gotoImage,
  isFree: true,
};

const curriculum = [
  {
    session: 1,
    date: "5月18日(月)",
    title: "資本主義と貨幣の本質",
    speaker: "岩井 克人 氏",
    affiliation: "東京大学名誉教授",
    image: iwaiImage,
  },
  {
    session: 2,
    date: "6月15日(月)",
    title: "100年企業の経営速度",
    speaker: "小原 泰 氏",
    affiliation: "パブリックアフェアーズ 代表取締役",
    image: obaraImage,
  },
  {
    session: 3,
    date: "7月21日(月)",
    title: "ベンチャー経営者の本物度",
    speaker: "矢作 恒雄 氏",
    affiliation: "慶應義塾大学名誉教授・大学院経営管理研究科教授",
    image: yahagiImage,
  },
  {
    session: 4,
    date: "8月17日(月)",
    title: "人口減と地方自治経営",
    speaker: "南出 賢一 氏",
    affiliation: "大阪府泉大津市長",
    image: minamideImage,
  },
  {
    session: 5,
    date: "9月21日(月)",
    title: "公共経営と民間経営",
    speaker: "轟木 一博 氏",
    affiliation: "株式会社カクシン 代表取締役社長",
    image: todorokiImage,
  },
  {
    session: 6,
    date: "10月19日(月)",
    title: "付加価値を創り出せ",
    speaker: "田尻 望 氏",
    affiliation: "ベクターホールディングス 代表取締役社長",
    image: tajiriImage,
  },
];

const instructors = [
  {
    name: "原 丈人",
    role: "センター統括",
    affiliation: "アライアンス・フォーラム財団 会長",
    specialty: "公益資本主義論、ベンチャー投資",
    image: haraImage,
  },
  {
    name: "猪熊 浩子",
    role: "センター長",
    affiliation: "慶應義塾大学SDM研究科 教授",
    specialty: "システムデザイン、社会実装",
    image: inokumaImage,
  },
  {
    name: "後藤 元",
    role: "講師",
    affiliation: "東京大学大学院法学政治学研究科 教授",
    specialty: "商法、企業法務",
    image: gotoImage,
  },
  {
    name: "岩井 克人",
    role: "講師",
    affiliation: "東京大学名誉教授",
    specialty: "経済理論、会社論",
    image: iwaiImage,
  },
  {
    name: "小原 泰",
    role: "講師",
    affiliation: "パブリックアフェアーズ 代表取締役",
    specialty: "経営実務、100年企業経営",
    image: obaraImage,
  },
  {
    name: "矢作 恒雄",
    role: "講師",
    affiliation: "慶應義塾大学名誉教授・大学院経営管理研究科教授",
    specialty: "経営管理、ベンチャー経営",
    image: yahagiImage,
  },
  {
    name: "南出 賢一",
    role: "講師",
    affiliation: "大阪府泉大津市長",
    specialty: "地方自治、行政経営",
    image: minamideImage,
  },
  {
    name: "轟木 一博",
    role: "講師",
    affiliation: "株式会社カクシン 代表取締役社長",
    specialty: "公共経営、民間経営",
    image: todorokiImage,
  },
  {
    name: "田尻 望",
    role: "講師",
    affiliation: "ベクターホールディングス 代表取締役社長",
    specialty: "付加価値創造、事業経営",
    image: tajiriImage,
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
              人口減を逆手に捉え
              <br />
              社会を豊かにする公益資本主義人材へ
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

          <AnimatedSection delay={100} className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              現代の企業経営は、投資家との対話、人的資本経営の導入、地政学リスクへの備えなど、
              かつてない複雑な課題に直面しています。こうした課題を「公益資本主義」の観点から捉え直すことで、
              俯瞰的な視座を磨きます。企業価値の持続的向上と社会的責任の両立を目指す実践的な学びの場です。
            </p>
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
                  企業経営・マネジメント層（企業規模は不問）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  官公庁政策立案者等
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  自治体職員・関係者
                </li>
              </ul>
              <p className="text-sm text-muted-foreground/70 mt-4">
                ＊官公庁の方のご参加は事務局までお問合せください
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Special Opening Lecture */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-bold bg-secondary text-secondary-foreground rounded-full">
                  無料
                </span>
                <h2 className="text-2xl font-bold text-foreground">開講特別講演</h2>
              </div>
              <div className="p-8 bg-background rounded-2xl border border-border">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-muted shrink-0 mx-auto md:mx-0">
                    <img 
                      src={specialLecture.image} 
                      alt={specialLecture.speaker}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-sm text-muted-foreground mb-1">日時</p>
                    <p className="text-lg font-semibold text-foreground mb-3">{specialLecture.date}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{specialLecture.title}</h3>
                    <p className="text-foreground font-medium">{specialLecture.speaker}</p>
                    <p className="text-sm text-muted-foreground">{specialLecture.affiliation}</p>
                  </div>
                </div>
              </div>
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
              title="カリキュラム（全6回）"
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
                    <div className="flex items-center gap-4 md:w-40 shrink-0">
                      <span className="text-3xl font-bold text-gradient-gold">
                        {String(item.session).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-white/60">{item.date}</span>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-white/10 shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.speaker}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="text-sm font-medium text-white/80">
                            {item.speaker}
                          </span>
                          <span className="text-xs text-white/50">
                            {item.affiliation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* 修了課題発表会 */}
            <AnimatedSection delay={800} animation="fade-in-left">
              <div className="group relative p-6 rounded-xl bg-secondary/20 border border-secondary/30">
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="flex items-center gap-4 md:w-40 shrink-0">
                    <span className="text-sm text-white/60">10月26日(月)</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      修了課題発表会
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      〜 2035年に向けた自身の羅針盤とは 〜
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* ワークショップ合宿 */}
            <AnimatedSection delay={900} animation="fade-in-left">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-white/60 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  8月には任意参加のワークショップ合宿を予定しています（参加費別途）
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={1000} className="mt-8 max-w-4xl mx-auto">
            <p className="text-xs text-white/40 text-center">
              ※日程・講師は変更となる場合があります。
            </p>
          </AnimatedSection>
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
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <img 
                        src={instructor.image} 
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <p className="text-sm text-muted-foreground mt-6">
                お問い合わせ: pic-center@keio.jp
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
