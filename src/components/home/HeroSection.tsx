import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sky.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Gradient overlay for text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.5) 40%, rgba(15, 23, 42, 0.8) 100%)"
        }}
      />
      
      {/* Animated light effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, transparent 60%)"
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 60%)"
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* KGRI Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-3 rounded-full text-sm font-medium tracking-widest border border-white/30 text-white/90 backdrop-blur-md bg-white/5">
              KEIO GLOBAL RESEARCH INSTITUTE
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              公益資本主義・
            </motion.span>
            <motion.span 
              className="block text-gradient-gold"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              研究実装センター
            </motion.span>
          </motion.h1>

          {/* Vision Statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-loose tracking-wide"
          >
            教育を受けた健康で豊かな中間層を創り出し、
            <br className="hidden md:block" />
            <span className="text-white font-medium">世界が憧れる日本</span>を目指す
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link to="/programs">プログラムを見る</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/15 backdrop-blur-sm px-10 py-6 text-base transition-all duration-300 hover:-translate-y-1"
            >
              <Link to="/about">センター紹介</Link>
            </Button>
          </motion.div>

          {/* Fukuzawa Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="mt-20 pt-8 border-t border-white/20 max-w-xl mx-auto"
          >
            <p className="text-white/60 text-base italic font-serif tracking-wide leading-relaxed">
              「天は人の上に人を造らず、人の下に人を造らず」
            </p>
            <p className="text-white/40 text-sm mt-3 tracking-wide">— 福澤諭吉『学問ノススメ』より</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
