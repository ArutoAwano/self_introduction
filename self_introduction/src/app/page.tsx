"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  ChevronRight,
  User,
  Briefcase,
  BookOpen,
  Trophy,
  Code,
  ExternalLink,
} from "lucide-react";
import { cn } from "./lib/utils";

export default function Home() {
  const [activeLink, setActiveLink] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    {
      href: "/positions",
      label: "Positions",
      icon: <Briefcase className="w-4 h-4" />,
    },
    // {
    //   href: "/research",
    //   label: "Research",
    //   icon: <ExternalLink className="w-4 h-4" />,
    // },
    { href: "/skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    // { href: "/prizes", label: "Prizes", icon: <Trophy className="w-4 h-4" /> },
    // { href: "/books", label: "Books", icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12"
        >
          {/* Profile Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="relative w-40 h-40 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
            >
              <img
                src="/img/profile.jpg" // ここに画像のパスを指定
                alt="Image"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                Haruto Kawano
              </h1>
              <p className="text-blue-600 dark:text-blue-400 mt-1">
                ML/Software Engineer, Neuroscientist
              </p>
            </div>

            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="https://x.com/Neuro06020104" // Twitter のリンクを設定
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                rel="noreferrer"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/haruto-kawano-711145314" //LinkedIn のLinkを設定
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>

            <nav className="hidden md:block">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <motion.li key={link.href} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center space-x-2 p-2 rounded-lg transition-colors",
                        "text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800",
                        activeLink === link.href &&
                          "bg-blue-200 dark:bg-blue-800 font-medium"
                      )}
                      onClick={() => setActiveLink(link.href)}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                自己紹介
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                はじめまして、川野晴冬です。脳とAIの分野に興味があり研究やエンジニアをやっています。
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                このポートフォリオサイトでは、私の経歴、スキルを紹介しています。
                お気軽に各セクションをご覧ください。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                最近の活動
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Diceの活動でボストンの研究室及び企業を訪問しました
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    脳科学若手の会の合宿に参加しました
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                お問い合わせ
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                お問い合わせやご質問がございましたら、SNSまたはメールでお気軽にご連絡ください。
              </p>
              <div className="mt-4">
                <motion.a
                  href="mailto:chuanyeharuto4@gmail.com?subject=お問い合わせ&body=こんにちは、" //ここにメールアドレスを入れる
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  メールを送る
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 bg-white dark:bg-blue-900 shadow-lg md:hidden z-10"
        >
          <ul className="flex justify-around py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg transition-colors",
                    "text-blue-700 dark:text-blue-300",
                    activeLink === link.href &&
                      "text-blue-500 dark:text-blue-400 font-medium"
                  )}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.icon}
                  <span className="text-xs mt-1">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </div>
  );
}
