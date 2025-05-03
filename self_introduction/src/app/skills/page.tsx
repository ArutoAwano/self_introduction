"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Code,
  Database,
  Globe,
  Server,
  Cpu,
  BrainCircuit,
  BarChart3,
  Cloud,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const categories = [
    { id: "all", label: "すべて", icon: <Code className="w-4 h-4" /> },
    { id: "ml", label: "機械学習", icon: <BrainCircuit className="w-4 h-4" /> },
    { id: "web", label: "Web開発", icon: <Globe className="w-4 h-4" /> },
    { id: "other", label: "その他", icon: <Server className="w-4 h-4" /> },
  ];

  // スキルデータ
  const skills = [
    {
      category: "ml",
      name: "Python",
      level: 90,
      description: "機械学習、データ分析、を中心に行なっています。",
      frameworks: ["PyTorch", "TensorFlow", "scikit-learn", "pandas", "NumPy"],
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      projects: [
        "Hugging Faceを用いた言語モデルの利用",
        "脳波の解析モジュールの開発",
        "GANを用いた画像生成",
        "レコメンドモデルの開発",
      ],
    },
    {
      category: "ml",
      name: "PyTorch",
      level: 85,
      description: "深層学習モデルの実装と学習に使用しています。",
      icon: (
        <BrainCircuit className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      ),
      projects: [
        "Hugging Faceを用いた言語モデルの利用",
        "脳波の解析モジュールの開発",
        "Diffusersを用いた画像生成",
        "レコメンドモデルの開発",
      ],
    },
    {
      category: "web",
      name: "React-TypeScript",
      level: 60,
      description: "モダンなWebフロントエンド開発に使用。",
      frameworks: ["Next.js", "Redux", "Tailwind CSS", "Material UI"],
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      projects: ["ポートフォリオサイト", "SNSアプリケーション"],
    },
    {
      category: "web",
      name: "Go",
      level: 40,
      description: "高性能なバックエンドAPIとマイクロサービスの開発に使用。",
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      projects: ["SNSアプリケーション開発"],
    },
    {
      category: "web",
      name: "Firebase",
      level: 40,
      description:
        "認証、データベース、ホスティングなど、フルスタックアプリケーション開発に活用。",
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      projects: [
        "SNSアプリケーション開発",
        "ユーザー認証システム",
        "SQLが少しかけます",
      ],
    },
    {
      category: "other",
      name: "GCP (Google Cloud Platform)",
      level: 40,
      description: "バックエンドのデプロイおよびデータベースとして利用。",
      services: ["Cloud Run", "BigQuery"],
      icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      projects: ["データウェアハウスの利用", "バックエンドのデプロイ"],
    },
    {
      category: "other",
      name: "Vercel",
      level: 40,
      description: "フロントエンドのデプロイに利用。",
      services: ["Vercel for Frontend Deployments"],
      icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      projects: ["web アプリケーションのデプロイ"],
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

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
            スキル
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
            私が習得しているプログラミング言語、フレームワーク、ツールなどのスキルセットを紹介します。
            機械学習、Web開発、クラウドインフラなど、様々な分野のスキルを持っています。
            ゲージで表記している数字は自分の中での相対的な習熟度を表しており、
            50以下は基本は学んだが触れる機会が少なく心許ないという程度で80を超えると基本が分かりある程度は使いこなせる程度です。
            あくまで自分の中での相対評価なので悪しからず。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/70"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-full">
                    {skill.icon}
                  </div>
                  <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">
                    {skill.name}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {skill.description}
              </p>

              {skill.frameworks && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    フレームワーク / ライブラリ
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.frameworks.map((framework, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skill.services && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    サービス / ツール
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skill.projects && (
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    関連プロジェクト
                  </h3>
                  <ul className="space-y-1">
                    {skill.projects.map((project, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {project}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
            学習中 / 今後習得予定のスキル
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-medium text-blue-700 dark:text-blue-300">
                  データサイエンス応用
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                より高度な統計モデリングと因果推論の手法を学び、複雑なデータ分析に応用する能力を身につけたいと考えています。
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-medium text-blue-700 dark:text-blue-300">
                  AWS
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                GCPに加えて、AWSのサービスも習得し、マルチクラウド環境での開発・運用スキルを身につけたいと考えています。
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-medium text-blue-700 dark:text-blue-300">
                  強化学習
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                強化学習アルゴリズムの理解を深め、実世界の問題に適用するスキルを習得したいと考えています。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 text-center"
        >
          {/* <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            プロジェクト事例を見る
            <ChevronRight className="w-4 h-4 ml-2" />
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
}
