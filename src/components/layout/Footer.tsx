import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="section-dark py-16 border-t border-dark-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-xs tracking-wider text-white/60">KGRI</span>
              <h3 className="text-xl font-semibold text-white">
                公益資本主義・研究実装センター
              </h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              福澤諭吉が説いた「学問ノススメ」の精神を受け継ぎ、
              公益資本主義による持続可能な社会の実現を目指す
              産官学連携の学びプラットフォームです。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">ナビゲーション</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  センター紹介
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-white/60 hover:text-white transition-colors">
                  プログラム
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="mailto:pic-center@keio.jp" className="hover:text-white transition-colors">
                  pic-center@keio.jp
                </a>
              </li>
              <li>
                慶應義塾大学 三田キャンパス
              </li>
              <li>
                〒108-8345 東京都港区三田2-15-45
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © 2026 慶應義塾大学グローバルリサーチインスティテュート（KGRI）
            </p>
            <div className="flex gap-6">
              <a href="https://www.kgri.keio.ac.jp/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                KGRI 公式サイト
              </a>
              <a href="https://www.keio.ac.jp/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                慶應義塾
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
