'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Rocket, Code, BookOpen, Cpu, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    title: 'はじめに',
    href: '/getting-started',
    icon: Rocket,
    items: [
      { title: '環境構築', href: '/getting-started/setup' },
      { title: 'クイックスタート', href: '/getting-started/quickstart' },
      { title: '基本概念', href: '/getting-started/concepts' },
    ],
  },
  {
    title: 'APIs',
    href: '/apis',
    icon: Code,
    items: [
      { title: 'Swap API', href: '/apis/swap' },
      { title: 'Price API', href: '/apis/price' },
      { title: 'Token API', href: '/apis/token' },
      { title: 'Trigger API', href: '/apis/trigger' },
      { title: 'Recurring API', href: '/apis/recurring' },
      { title: 'Lend API (Beta)', href: '/apis/lend' },
      { title: 'Send API (Beta)', href: '/apis/send' },
      { title: 'Perp API', href: '/apis/perp' },
    ],
  },
  {
    title: 'ガイド',
    href: '/guides',
    icon: BookOpen,
    items: [
      { title: '統合ガイド', href: '/guides/integration' },
      { title: 'ベストプラクティス', href: '/guides/best-practices' },
      { title: 'セキュリティ', href: '/guides/security' },
      { title: 'エラーハンドリング', href: '/guides/error-handling' },
    ],
  },
  {
    title: 'リソース',
    href: '/resources',
    icon: Cpu,
    items: [
      { title: 'SDKs', href: '/resources/sdks' },
      { title: 'ツール', href: '/resources/tools' },
      { title: 'サンプルコード', href: '/resources/examples' },
      { title: 'FAQ', href: '/resources/faq' },
    ],
  },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass backdrop-blur-xl shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple p-[1px]"
              >
                <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </motion.div>
              <span className="text-xl font-bold gradient-text">Jupiter Japan</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium",
                    "text-gray-300 hover:text-white transition-all",
                    "hover:bg-white/5 relative overflow-hidden group"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    openDropdown === item.title && "rotate-180"
                  )} />
                </button>

                <AnimatePresence>
                  {openDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl glass-card overflow-hidden"
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://jup.ag"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block px-6 py-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-black font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Jupiter Exchange
              </Link>
            </motion.div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    openDropdown === item.title && "rotate-180"
                  )} />
                </button>
                {openDropdown === item.title && (
                  <div className="mt-2 ml-6 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                        onClick={() => {
                          setOpenDropdown(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="https://jup.ag"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4 px-4 py-2 rounded-lg gradient-border text-center"
            >
              <span className="block bg-jupiter-dark rounded-lg px-4 py-1 text-sm font-medium">
                Jupiter Exchange
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}