'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Code, Shield, Zap, Copy, Check } from 'lucide-react';

const endpoints = [
  {
    method: 'GET',
    path: '/v6/quote',
    description: 'スワップの見積もりを取得',
  },
  {
    method: 'POST',
    path: '/v6/swap',
    description: 'スワップトランザクションを作成',
  },
  {
    method: 'GET',
    path: '/v6/swap-instructions',
    description: 'スワップ命令を取得',
  },
];

const parameters = [
  {
    name: 'inputMint',
    type: 'string',
    required: true,
    description: '入力トークンのミントアドレス',
  },
  {
    name: 'outputMint',
    type: 'string',
    required: true,
    description: '出力トークンのミントアドレス',
  },
  {
    name: 'amount',
    type: 'number',
    required: true,
    description: 'スワップする金額（最小単位）',
  },
  {
    name: 'slippageBps',
    type: 'number',
    required: false,
    description: 'スリッページ許容度（ベーシスポイント）',
  },
  {
    name: 'onlyDirectRoutes',
    type: 'boolean',
    required: false,
    description: '直接ルートのみを使用',
  },
];

const exampleCode = `// Swap APIの使用例
const getSwapQuote = async () => {
  const params = {
    inputMint: 'So11111111111111111111111111111111111111112', // SOL
    outputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // USDC
    amount: 100000000, // 0.1 SOL
    slippageBps: 50, // 0.5%
  };

  const response = await fetch(
    \`https://quote-api.jup.ag/v6/quote?\${new URLSearchParams(params)}\`
  );
  
  const quote = await response.json();
  return quote;
};

const executeSwap = async (quote, userPublicKey) => {
  const swapResponse = await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quoteResponse: quote,
      userPublicKey: userPublicKey,
      wrapAndUnwrapSol: true,
      dynamicComputeUnitLimit: true,
      prioritizationFeeLamports: 'auto',
    }),
  });

  const swapData = await swapResponse.json();
  return swapData;
};`;

export default function SwapAPIPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg gradient-border p-[1px] mr-4">
              <div className="w-full h-full rounded-lg bg-jupiter-dark flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-jupiter-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Swap API</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            トークンスワップのための包括的なAPI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-effect rounded-xl p-6"
          >
            <Zap className="w-8 h-8 text-jupiter-primary mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">高速処理</h3>
            <p className="text-sm text-gray-400">
              ミリ秒単位で最適なルートを計算し、最良の価格を提供
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-xl p-6"
          >
            <Shield className="w-8 h-8 text-jupiter-primary mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">セキュア</h3>
            <p className="text-sm text-gray-400">
              MEV保護とスリッページ制御で安全な取引を実現
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-effect rounded-xl p-6"
          >
            <Code className="w-8 h-8 text-jupiter-primary mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">簡単統合</h3>
            <p className="text-sm text-gray-400">
              シンプルなREST APIで素早く統合可能
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">エンドポイント</h2>
          
          <div className="space-y-4">
            {endpoints.map((endpoint) => (
              <div key={endpoint.path} className="bg-black/30 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded text-xs font-bold ${
                    endpoint.method === 'GET' 
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-sm font-mono text-gray-300">{endpoint.path}</code>
                </div>
                <p className="text-sm text-gray-400 mt-2">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-effect rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">パラメータ</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">パラメータ</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">タイプ</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">必須</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">説明</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((param) => (
                  <tr key={param.name} className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="text-sm font-mono text-jupiter-primary">{param.name}</code>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-400">{param.type}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-sm ${param.required ? 'text-red-400' : 'text-gray-500'}`}>
                        {param.required ? '必須' : 'オプション'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-400">{param.description}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-effect rounded-xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h3 className="text-xl font-bold text-white">コード例</h3>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          
          <div className="p-6">
            <pre className="overflow-x-auto">
              <code className="text-sm text-gray-300 font-mono">
                {exampleCode}
              </code>
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}