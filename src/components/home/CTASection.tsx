import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background: "radial-gradient(circle at 100% 50%, hsl(215 80% 25%), transparent 70%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-wider bg-primary/10 text-primary mb-6">
            EXECUTIVE PROGRAM 2026
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            次世代リーダーのための
            <br />
            <span className="text-gradient-gold">公益資本主義プログラム</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            企業経営者、官公庁・自治体のリーダーを対象とした
            <br className="hidden md:block" />
            実践的なエグゼクティブ・プログラムを開講します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              <Link to="/programs">
                プログラム詳細
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8"
            >
              <Link to="/contact">お申し込み・お問い合わせ</Link>
            </Button>
          </div>

          {/* Program highlights */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "開講期間", value: "2026年5月〜10月" },
              { label: "全6回", value: "月1回開催" },
              { label: "定員", value: "30名程度" },
              { label: "受講料", value: "30万円（税込）" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-4"
              >
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
