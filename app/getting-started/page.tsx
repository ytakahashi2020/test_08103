'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, BookOpen, Code, ArrowRight, Terminal, Settings, Package } from 'lucide-react';

const quickLinks = [
  {
    title: '環境構築',
    description: '開発環境のセットアップとAPIキーの取得',
    icon: Settings,
    href: '/getting-started/setup',
  },
  {
    title: 'クイックスタート',
    description: '5分で始める最初のトランザクション',
    icon: Rocket,
    href: '/getting-started/quickstart',
  },
  {
    title: '基本概念',
    description: 'Jupiterの仕組みと重要な概念を理解',
    icon: BookOpen,
    href: '/getting-started/concepts',
  },
];

const steps = [
  {
    number: '1',
    title: 'APIキーを取得',
    description: 'Jupiter Developer Portalでアカウントを作成し、APIキーを発行します',
  },
  {
    number: '2',
    title: 'SDKをインストール',
    description: 'お使いの言語に対応したJupiter SDKをプロジェクトに追加します',
  },
  {
    number: '3',
    title: 'ウォレット接続',
    description: 'Solanaウォレットを接続して、トランザクションを送信可能にします',
  },
  {
    number: '4',
    title: '最初のスワップ',
    description: 'Swap APIを使用して、最初のトークンスワップを実行します',
  },
];

export default function GettingStartedPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">はじめに</span>
          </h1>
          <p className="text-xl text-gray-300">
            Jupiter Exchangeを使い始めるための完全ガイド
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={link.href} className="block h-full">
                <div className="glass-effect rounded-xl p-6 h-full hover-glow group">
                  <div className="w-12 h-12 rounded-lg gradient-border p-[1px] mb-4">
                    <div className="w-full h-full rounded-lg bg-jupiter-dark flex items-center justify-center">
                      <link.icon className="w-6 h-6 text-jupiter-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{link.description}</p>
                  <div className="flex items-center text-jupiter-primary group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">詳細を見る</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">クイックスタート</h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-border p-[1px]">
                  <div className="w-full h-full rounded-full bg-jupiter-dark flex items-center justify-center">
                    <span className="text-jupiter-primary font-bold">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-effect rounded-xl p-8"
        >
          <div className="flex items-center mb-6">
            <Terminal className="w-6 h-6 text-jupiter-primary mr-3" />
            <h3 className="text-2xl font-bold text-white">インストール</h3>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">npm</p>
              <div className="bg-black/30 rounded-lg p-3">
                <code className="text-sm text-gray-300 font-mono">
                  npm install @jup-ag/core @solana/web3.js
                </code>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">yarn</p>
              <div className="bg-black/30 rounded-lg p-3">
                <code className="text-sm text-gray-300 font-mono">
                  yarn add @jup-ag/core @solana/web3.js
                </code>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">pnpm</p>
              <div className="bg-black/30 rounded-lg p-3">
                <code className="text-sm text-gray-300 font-mono">
                  pnpm add @jup-ag/core @solana/web3.js
                </code>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold mb-6">次のステップ</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/apis" className="block">
              <div className="glass-effect rounded-xl p-6 hover-glow group">
                <div className="flex items-center mb-3">
                  <Code className="w-6 h-6 text-jupiter-primary mr-3" />
                  <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all">
                    API リファレンス
                  </h3>
                </div>
                <p className="text-gray-400">
                  すべてのAPIエンドポイントの詳細なドキュメント
                </p>
              </div>
            </Link>

            <Link href="/guides" className="block">
              <div className="glass-effect rounded-xl p-6 hover-glow group">
                <div className="flex items-center mb-3">
                  <Package className="w-6 h-6 text-jupiter-primary mr-3" />
                  <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all">
                    統合ガイド
                  </h3>
                </div>
                <p className="text-gray-400">
                  実際のアプリケーションへの統合方法を学ぶ
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}