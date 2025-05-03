// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowLeft, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

// export default function Prizes() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   // サンプルの受賞歴データ
//   const prizes = [
//     {
//       id: 1,
//       title: "テックイノベーション大賞",
//       organization: "日本テクノロジー協会",
//       date: "2023年11月",
//       description:
//         "AIを活用した自然言語処理システムの開発により、テックイノベーション大賞を受賞。特に日本語テキスト解析の精度向上に貢献したことが評価されました。",
//       location: "東京",
//       link: "#",
//       highlight: true,
//     },
//     {
//       id: 2,
//       title: "クラウドアーキテクト認定 - 最優秀賞",
//       organization: "グローバルクラウドアライアンス",
//       date: "2023年6月",
//       description:
//         "クラウドネイティブアプリケーションの設計と実装に関する高度な知識と実践力が評価され、年間最優秀賞を受賞しました。",
//       location: "オンライン",
//       link: "#",
//       highlight: false,
//     },
//     {
//       id: 3,
//       title: "オープンソースコントリビューター賞",
//       organization: "オープンデベロッパーズカンファレンス",
//       date: "2022年10月",
//       description:
//         "複数のオープンソースプロジェクトへの継続的な貢献が評価され、年間トップコントリビューターとして表彰されました。特にJavaScriptフレームワークの改善に対する貢献が高く評価されています。",
//       location: "大阪",
//       link: "#",
//       highlight: false,
//     },
//     {
//       id: 4,
//       title: "ハッカソン優勝",
//       organization: "テックフォーグッド財団",
//       date: "2022年7月",
//       description:
//         "社会問題解決のためのアプリケーション開発ハッカソンで優勝。高齢者の生活をサポートするAIアシスタントアプリの提案と48時間でのプロトタイプ開発が評価されました。",
//       location: "福岡",
//       link: "#",
//       highlight: true,
//     },
//     {
//       id: 5,
//       title: "ベストデベロッパー賞",
//       organization: "アジアデベロッパーズカンファレンス",
//       date: "2022年3月",
//       description:
//         "革新的なモバイルアプリケーション開発手法の提案と実装により、ベストデベロッパー賞を受賞。特にパフォーマンス最適化とユーザーエクスペリエンス向上の両立が評価されました。",
//       location: "シンガポール",
//       link: "#",
//       highlight: false,
//     },
//     {
//       id: 6,
//       title: "学生プログラミングコンテスト 金賞",
//       organization: "全国大学プログラミング連盟",
//       date: "2020年9月",
//       description:
//         "大学生時代に参加した全国規模のプログラミングコンテストで金賞を受賞。アルゴリズムの効率性と創造的な問題解決アプローチが評価されました。",
//       location: "京都",
//       link: "#",
//       highlight: false,
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
//       <div className="max-w-5xl mx-auto px-4 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-8"
//         >
//           <Link
//             href="/"
//             className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-6"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             ホームに戻る
//           </Link>

//           <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">
//             受賞歴・表彰
//           </h1>
//           <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
//             これまでに受賞した賞や表彰の記録です。技術コンテスト、ハッカソン、業界からの表彰など、
//             様々な分野での成果を紹介しています。
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg mb-10"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <Award className="w-8 h-8 text-yellow-500" />
//             <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
//               主な受賞
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {prizes
//               .filter((prize) => prize.highlight)
//               .map((prize) => (
//                 <div
//                   key={prize.id}
//                   className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 p-4 rounded-lg border-l-4 border-blue-500"
//                 >
//                   <h3 className="font-bold text-blue-700 dark:text-blue-300">
//                     {prize.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
//                     {prize.organization}
//                   </p>
//                   <p className="text-gray-700 dark:text-gray-300 text-sm">
//                     {prize.description}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="space-y-6"
//         >
//           {prizes.map((prize) => (
//             <motion.div
//               key={prize.id}
//               variants={item}
//               className={`bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg ${
//                 prize.highlight ? "ring-2 ring-blue-500 ring-opacity-50" : ""
//               }`}
//             >
//               <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
//                 <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">
//                   {prize.title}
//                 </h2>
//                 <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                   <Calendar className="w-4 h-4 mr-1" />
//                   {prize.date}
//                 </div>
//               </div>

//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 {prize.description}
//               </p>

//               <div className="flex flex-wrap items-center gap-4 text-sm">
//                 <div className="flex items-center text-gray-600 dark:text-gray-400">
//                   <Award className="w-4 h-4 mr-1" />
//                   {prize.organization}
//                 </div>

//                 <div className="flex items-center text-gray-600 dark:text-gray-400">
//                   <MapPin className="w-4 h-4 mr-1" />
//                   {prize.location}
//                 </div>

//                 <a
//                   href={prize.link}
//                   className="inline-flex items-center ml-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
//                 >
//                   詳細を見る
//                   <ExternalLink className="w-3 h-3 ml-1" />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="mt-12 bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg"
//         >
//           <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
//             資格・認定
//           </h2>
//           <ul className="space-y-3">
//             <li className="flex items-start">
//               <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-800/30 rounded-lg mr-4">
//                 <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-900 dark:text-gray-100">
//                   AWS 認定ソリューションアーキテクト - プロフェッショナル
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   2023年取得
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-800/30 rounded-lg mr-4">
//                 <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-900 dark:text-gray-100">
//                   Google Cloud 認定プロフェッショナルクラウドアーキテクト
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   2022年取得
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-800/30 rounded-lg mr-4">
//                 <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-900 dark:text-gray-100">
//                   情報処理安全確保支援士
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   2021年取得
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
