"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  FlaskConical,
  Briefcase,
  Users,
  Building2,
  CalendarDays,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Positions() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const tabs = [
    { id: "all", label: "すべて" },
    { id: "academic", label: "学歴" },
    { id: "research", label: "研究室" },
    { id: "internship", label: "インターン" },
    { id: "community", label: "コミュニティ" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Link>

          <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">
            所属
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
            現在の所属と過去の経歴をまとめています。学歴、研究室、インターン、コミュニティ活動など、
            様々な分野での活動を紹介しています。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* 学歴セクション */}
          {(activeTab === "all" || activeTab === "academic") && (
            <motion.div
              variants={item}
              className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-full">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                  学歴
                </h2>
              </div>

              <div className="pl-4 border-l-2 border-blue-200 dark:border-blue-800 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 bg-blue-500 rounded-full border-4 border-blue-100 dark:border-blue-900"></div>
                  <div className="mb-1">
                    <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">
                      東京大学 理科三類
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      学部2年
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    <span>2022年 - 現在</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    理科三類に在籍しており医学部に進学しようと考えています。数学、情報科学を中心に幅広い知識を身につけています。
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* 研究室セクション */}
          {(activeTab === "all" || activeTab === "research") && (
            <motion.div
              variants={item}
              className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-full">
                  <FlaskConical className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                  研究室
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">
                      阪大栁澤研究室
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>大阪大学</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      栁澤研究室では、機械学習と神経科学の融合研究に取り組んでいます。特に深層学習モデルを用いた脳活動データの解析手法の開発に参加しています。
                    </p>
                    <a
                      href="https://www.med.osaka-u.ac.jp/pub/nsurg/yanagisawa/"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      研究室サイトを見る
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>

                  <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">
                      東大北西研究室
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>東京大学</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      北西研究室では、コンピュータビジョンと画像処理の研究に参加しています。特に物体認識アルゴリズムの改良と実世界応用に焦点を当てた研究を行っています。
                    </p>
                    <a
                      href="https://www.kitanishilab.org/"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      研究室サイトを見る
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* インターンセクション */}
          {(activeTab === "all" || activeTab === "internship") && (
            <motion.div
              variants={item}
              className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-full">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                  インターン
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">
                        Growth Verse
                      </h3>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        現在
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      ML Engineer
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Growth
                      Verseでは、機械学習モデルの開発を主に行なっています。
                    </p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Building2 className="w-4 h-4 mr-1" />
                      <a
                        href="https://growth-verse.ai/"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        会社サイト
                      </a>
                    </div>
                  </div>

                  <div className="flex-1 p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">
                        Fast Neura
                      </h3>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        現在
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      ML Engineer / PM
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Fast Neuraでは、神経科学✖️AIで事業に参画しています。
                    </p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Building2 className="w-4 h-4 mr-1" />
                      <a
                        href="https://fastneura.com/"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        会社サイト
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* コミュニティセクション */}
          {(activeTab === "all" || activeTab === "community") && (
            <motion.div
              variants={item}
              className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-full">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                  コミュニティ活動
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                    Dice
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Deep Tech 起業のコミュニティ。
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                    UTTC
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    東京大学テクノロジーコミュニティ。web開発およびAIの学習を行います。
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                    UTNT
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    東京大学ニューロテクノロジー研究会。脳科学とテクノロジーの融合領域に興味を持つ学生のコミュニティです。
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                    灯
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    機械学習に取り組むコミュニティ。Kaggle会などを行います。
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                    ut.code()
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    東京大学のプログラミングコミュニティ。ハッカソンやコーディング勉強会を定期的に開催しています。
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
            今後の目標
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            現在は機械学習と神経科学の融合領域に特に興味を持っており、将来的にはAIを活用した脳機能解析の研究を深めていきたいと考えています。
            また、学術研究だけでなく、実社会の問題解決に貢献できるAI技術の開発にも取り組んでいきたいです。
          </p>
        </motion.div>
      </div>
    </div>
  );
}
