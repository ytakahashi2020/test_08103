import Link from 'next/link';
import { Github, MessageCircle, Twitter, Globe } from 'lucide-react';

const footerLinks = {
  product: {
    title: 'プロダクト',
    links: [
      { title: 'Jupiter Exchange', href: 'https://jup.ag' },
      { title: 'Jupiter Station', href: 'https://station.jup.ag' },
      { title: 'Jupiter Perps', href: 'https://perps.jup.ag' },
    ],
  },
  developers: {
    title: '開発者向け',
    links: [
      { title: 'ドキュメント', href: '/getting-started' },
      { title: 'API リファレンス', href: '/apis' },
      { title: 'GitHub', href: 'https://github.com/jup-ag' },
      { title: 'サンプルコード', href: '/resources/examples' },
    ],
  },
  community: {
    title: 'コミュニティ',
    links: [
      { title: 'Discord', href: 'https://discord.gg/jup' },
      { title: 'Twitter', href: 'https://twitter.com/JupiterExchange' },
      { title: 'Telegram', href: 'https://t.me/jup_ag' },
      { title: 'ブログ', href: 'https://blog.jup.ag' },
    ],
  },
  support: {
    title: 'サポート',
    links: [
      { title: 'ヘルプセンター', href: 'https://support.jup.ag' },
      { title: 'FAQ', href: '/resources/faq' },
      { title: 'お問い合わせ', href: 'mailto:support@jup.ag' },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/JupiterExchange', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/jup-ag', label: 'GitHub' },
  { icon: MessageCircle, href: 'https://discord.gg/jup', label: 'Discord' },
  { icon: Globe, href: 'https://jup.ag', label: 'Website' },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-jupiter-primary transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg gradient-border p-[1px]">
                <div className="w-full h-full rounded-lg bg-jupiter-dark flex items-center justify-center">
                  <Globe className="w-6 h-6 text-jupiter-primary" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold gradient-text">Jupiter Japan</p>
                <p className="text-xs text-gray-400">Solanaの最先端DEXアグリゲーター</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-jupiter-primary hover:bg-white/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              © 2024 Jupiter Exchange. All rights reserved. | 日本語版ドキュメント
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}