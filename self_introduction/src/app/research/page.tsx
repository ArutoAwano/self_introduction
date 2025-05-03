// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   ExternalLink,
//   Calendar,
//   Tag,
//   ChevronRight,
// } from "lucide-react";
// import { cn } from "../lib/utils";

// export default function Research() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   // サンプル研究プロジェクト
//   const researchProjects = [
//     {
//       id: 1,
//       title: "AIを活用した自然言語処理の新手法",
//       description:
//         "ディープラーニングを用いた自然言語処理の新しいアプローチについての研究。特に日本語テキストの感情分析における精度向上に焦点を当てています。",
//       date: "2023年10月",
//       tags: ["AI", "NLP", "機械学習"],
//       link: "#",
//       status: "進行中",
//     },
//     {
//       id: 2,
//       title: "ブロックチェーン技術を用いた分散型アプリケーションの開発",
//       description:
//         "イーサリアムプラットフォーム上での分散型アプリケーション（DApps）の設計と実装に関する研究。スマートコントラクトのセキュリティと効率性に焦点を当てています。",
//       date: "2022年6月",
//       tags: ["ブロックチェーン", "イーサリアム", "DApps"],
//       link: "#",
//       status: "完了",
//     },
//     {
//       id: 3,
//       title: "クラウドネイティブアーキテクチャの最適化",
//       description:
//         "マイクロサービスアーキテクチャを採用したクラウドネイティブアプリケーションのパフォーマンス最適化に関する研究。Kubernetesを用いたオートスケーリングの効率化について検証しています。",
//       date: "2023年3月",
//       tags: ["クラウド", "マイクロサービス", "Kubernetes"],
//       link: "#",
//       status: "論文投稿中",
//     },
//     {
//       id: 4,
//       title: "IoTデバイスのセキュリティ強化手法",
//       description:
//         "家庭用IoTデバイスのセキュリティ脆弱性分析と、軽量暗号化プロトコルを用いた保護手法の提案。リソース制約のあるデバイスでも実装可能なセキュリティ対策を研究しています。",
//       date: "2022年12月",
//       tags: ["IoT", "セキュリティ", "暗号化"],
//       link: "#",
//       status: "完了",
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
//             研究活動
//           </h1>
//           <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
//             私の研究活動と学術的な取り組みをご紹介します。AI、ブロックチェーン、クラウドコンピューティングなど、
//             様々な分野での研究プロジェクトに取り組んでいます。
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="grid gap-6"
//         >
//           {researchProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={item}
//               className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
//                 <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">
//                   {project.title}
//                 </h2>
//                 <span
//                   className={cn(
//                     "px-3 py-1 rounded-full text-sm font-medium",
//                     project.status === "完了"
//                       ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
//                       : project.status === "進行中"
//                       ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
//                       : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
//                   )}
//                 >
//                   {project.status}
//                 </span>
//               </div>

//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300"
//                   >
//                     <Tag className="w-3 h-3 mr-1" />
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                   <Calendar className="w-4 h-4 mr-1" />
//                   {project.date}
//                 </div>

//                 <motion.a
//                   href={project.link}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
//                 >
//                   詳細を見る
//                   <ChevronRight className="w-4 h-4 ml-1" />
//                 </motion.a>
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
//             学術発表
//           </h2>
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-800/30 rounded-lg mr-4">
//                 <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-900 dark:text-gray-100">
//                   「次世代AIシステムの展望と課題」
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   日本AI学会 年次大会, 2023年
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-800/30 rounded-lg mr-4">
//                 <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-900 dark:text-gray-100">
//                   「ブロックチェーンを活用した分散型アイデンティティ管理」
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   国際ブロックチェーンカンファレンス, 2022年
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-800/30 rounded-lg mr-4">
//                 <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-900 dark:text-gray-100">
//                   「クラウドネイティブアプリケーションのセキュリティ最適化」
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   クラウドコンピューティングシンポジウム, 2022年
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
