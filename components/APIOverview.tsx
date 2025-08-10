'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, TrendingUp, RefreshCw, Clock, Send, CreditCard, BarChart3, Layers } from 'lucide-react';

import { LucideIcon } from 'lucide-react';

type ApiStatus = 'stable' | 'beta' | 'new';

const apis: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  status: ApiStatus;
  features: string[];
}> = [
  {
    title: 'Swap API',
    description: 'トークンスワップのための包括的なAPI。最適なルーティングと価格を提供',
    icon: RefreshCw,
    href: '/apis/swap',
    status: 'stable',
    features: ['最適ルーティング', 'スリッページ保護', 'MEV保護'],
  },
  {
    title: 'Price API v3',
    description: 'リアルタイムの正確な価格情報を取得',
    icon: TrendingUp,
    href: '/apis/price',
    status: 'new',
    features: ['リアルタイム価格', '履歴データ', 'マルチトークン対応'],
  },
  {
    title: 'Token API v2',
    description: 'Solanaトークンの詳細情報を取得',
    icon: Layers,
    href: '/apis/token',
    status: 'new',
    features: ['メタデータ', '流動性情報', '保有者統計'],
  },
  {
    title: 'Trigger API',
    description: '条件付き注文とオートメーション',
    icon: Sparkles,
    href: '/apis/trigger',
    status: 'stable',
    features: ['指値注文', 'DCA', '条件付き実行'],
  },
  {
    title: 'Recurring API',
    description: '定期的な取引の自動化',
    icon: Clock,
    href: '/apis/recurring',
    status: 'stable',
    features: ['定期購入', 'DCA戦略', 'ポートフォリオ管理'],
  },
  {
    title: 'Lend API',
    description: 'レンディングプロトコルとの統合',
    icon: CreditCard,
    href: '/apis/lend',
    status: 'beta',
    features: ['貸出', '借入', '金利最適化'],
  },
  {
    title: 'Send API',
    description: 'トークン送信の簡素化',
    icon: Send,
    href: '/apis/send',
    status: 'beta',
    features: ['一括送信', 'メモ付き送信', 'ガス最適化'],
  },
  {
    title: 'Perp API',
    description: '永続先物取引のAPI',
    icon: BarChart3,
    href: '/apis/perp',
    status: 'stable',
    features: ['レバレッジ取引', 'ポジション管理', 'リスク管理'],
  },
];

const statusColors: Record<ApiStatus, string> = {
  stable: 'bg-green-500/10 text-green-400 border-green-500/20',
  beta: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  new: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

const statusLabels: Record<ApiStatus, string> = {
  stable: '安定版',
  beta: 'ベータ版',
  new: '新機能',
};

export default function APIOverview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">強力なAPI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jupiter Exchangeの全機能をあなたのアプリケーションに統合
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apis.map((api, index) => (
            <motion.div
              key={api.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={api.href} className="block h-full">
                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="glass-card rounded-2xl p-6 h-full group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center backdrop-blur-sm">
                      <api.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusColors[api.status]}`}>
                      {statusLabels[api.status]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 relative">
                    {api.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{api.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {api.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs rounded-lg bg-white/5 text-gray-400 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-accent-cyan group-hover:text-accent-purple transition-colors">
                    <span className="text-sm font-semibold">詳細を見る</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}