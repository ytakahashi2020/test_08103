'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal } from 'lucide-react';

const codeExamples = {
  javascript: {
    label: 'JavaScript',
    code: `// Jupiter Swap APIを使用したトークンスワップ
import { Connection, PublicKey } from '@solana/web3.js';

async function swapTokens() {
  // Quoteを取得
  const quoteResponse = await fetch(
    'https://quote-api.jup.ag/v6/quote?' +
    'inputMint=So11111111111111111111111111111111111111112&' +
    'outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&' +
    'amount=100000000' // 0.1 SOL
  );
  
  const quoteData = await quoteResponse.json();
  
  // スワップトランザクションを作成
  const swapResponse = await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      quoteResponse: quoteData,
      userPublicKey: wallet.publicKey.toString(),
      wrapAndUnwrapSol: true,
    })
  });
  
  const swapData = await swapResponse.json();
  console.log('Swap transaction created:', swapData);
}`,
  },
  python: {
    label: 'Python',
    code: `# Jupiter Swap APIを使用したトークンスワップ
import requests
from solana.publickey import PublicKey

def swap_tokens(wallet_address):
    # Quoteを取得
    quote_params = {
        'inputMint': 'So11111111111111111111111111111111111111112',
        'outputMint': 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
        'amount': 100000000  # 0.1 SOL
    }
    
    quote_response = requests.get(
        'https://quote-api.jup.ag/v6/quote',
        params=quote_params
    )
    quote_data = quote_response.json()
    
    # スワップトランザクションを作成
    swap_payload = {
        'quoteResponse': quote_data,
        'userPublicKey': str(wallet_address),
        'wrapAndUnwrapSol': True
    }
    
    swap_response = requests.post(
        'https://quote-api.jup.ag/v6/swap',
        json=swap_payload
    )
    swap_data = swap_response.json()
    
    print(f'Swap transaction created: {swap_data}')
    return swap_data`,
  },
  rust: {
    label: 'Rust',
    code: `// Jupiter Swap APIを使用したトークンスワップ
use reqwest;
use serde_json::Value;
use solana_sdk::pubkey::Pubkey;

async fn swap_tokens(wallet: &Pubkey) -> Result<Value, Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // Quoteを取得
    let quote_url = format!(
        "https://quote-api.jup.ag/v6/quote?inputMint={}&outputMint={}&amount={}",
        "So11111111111111111111111111111111111111112",
        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        100000000 // 0.1 SOL
    );
    
    let quote_response = client.get(&quote_url).send().await?;
    let quote_data: Value = quote_response.json().await?;
    
    // スワップトランザクションを作成
    let swap_payload = serde_json::json!({
        "quoteResponse": quote_data,
        "userPublicKey": wallet.to_string(),
        "wrapAndUnwrapSol": true
    });
    
    let swap_response = client
        .post("https://quote-api.jup.ag/v6/swap")
        .json(&swap_payload)
        .send()
        .await?;
    
    let swap_data: Value = swap_response.json().await?;
    println!("Swap transaction created: {:?}", swap_data);
    
    Ok(swap_data)
}`,
  },
};

export default function CodeExample() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[selectedLanguage as keyof typeof codeExamples].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <span className="gradient-text">簡単な統合</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            お好みの言語でJupiter APIを使い始めましょう
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-jupiter-primary" />
              <span className="text-sm font-medium text-gray-300">コード例</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex rounded-lg bg-white/5 p-1">
                {Object.entries(codeExamples).map(([key, { label }]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedLanguage(key)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                      selectedLanguage === key
                        ? 'bg-jupiter-primary text-jupiter-dark'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Copy code"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-6">
            <pre className="overflow-x-auto">
              <code className="text-sm text-gray-300 font-mono">
                {codeExamples[selectedLanguage as keyof typeof codeExamples].code}
              </code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 mb-4">
            もっと詳しいサンプルコードが必要ですか？
          </p>
          <Link
            href="/resources/examples"
            className="inline-flex items-center text-jupiter-primary hover:text-jupiter-secondary transition-colors"
          >
            サンプルコード集を見る
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';