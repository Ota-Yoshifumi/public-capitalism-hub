import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "ホーム", href: "/" },
  { label: "センター紹介", href: "/about" },
  { label: "プログラム", href: "/programs" },
  { label: "お問い合わせ", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const headerBg = isScrolled || !isHome 
    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
    : "bg-transparent";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerBg
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className={cn(
                "text-xs tracking-wider transition-colors",
                isScrolled || !isHome ? "text-muted-foreground" : "text-white/70"
              )}>
                KGRI
              </span>
              <span className={cn(
                "text-lg font-semibold tracking-tight transition-colors",
                isScrolled || !isHome ? "text-foreground" : "text-white"
              )}>
                公益資本主義センター
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors link-underline",
                  location.pathname === item.href
                    ? isScrolled || !isHome 
                      ? "text-primary" 
                      : "text-secondary"
                    : isScrolled || !isHome
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link to="/contact">お申し込み</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "h-6 w-6",
                isScrolled || !isHome ? "text-foreground" : "text-white"
              )} />
            ) : (
              <Menu className={cn(
                "h-6 w-6",
                isScrolled || !isHome ? "text-foreground" : "text-white"
              )} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors py-2",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  お申し込み
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
