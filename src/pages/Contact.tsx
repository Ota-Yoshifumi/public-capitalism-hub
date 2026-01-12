import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Building } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "お問い合わせを受け付けました",
      description: "担当者より折り返しご連絡いたします。",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

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
              CONTACT
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              お問い合わせ
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              エグゼクティブ・プログラムへのお申し込み、
              <br />
              センターへのお問い合わせはこちらから
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <AnimatedSection animation="fade-in-left">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  お問い合わせフォーム
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input id="name" name="name" required placeholder="山田 太郎" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">ご所属</Label>
                      <Input id="organization" name="organization" placeholder="株式会社〇〇" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input id="email" name="email" type="email" required placeholder="example@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">お問い合わせ種別</Label>
                    <select
                      id="subject"
                      name="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="program">エグゼクティブ・プログラムについて</option>
                      <option value="partnership">連携・協力について</option>
                      <option value="media">取材・メディア関連</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">お問い合わせ内容 *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="space-y-8">
                <div>
                  <SectionTitle
                    subtitle="Information"
                    title="連絡先情報"
                    centered={false}
                  />
                </div>

                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
                    <Mail className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">メール</h3>
                      <a href="mailto:pic-center@keio.jp" className="text-muted-foreground hover:text-primary transition-colors">
                        pic-center@keio.jp
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
                    <Building className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">所属</h3>
                      <p className="text-muted-foreground">
                        慶應義塾大学<br />
                        グローバルリサーチインスティテュート（KGRI）<br />
                        公益資本主義・研究実装センター
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">アクセス</h3>
                      <p className="text-muted-foreground">
                        〒108-8345<br />
                        東京都港区三田2-15-45<br />
                        慶應義塾大学 三田キャンパス
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
