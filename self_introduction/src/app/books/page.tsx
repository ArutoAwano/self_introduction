// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowLeft, BookOpen, Star, ChevronDown } from "lucide-react";

// export default function Books() {
//   const [mounted, setMounted] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("すべて");
//   const [expandedBook, setExpandedBook] = useState<number | null>(null);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const categories = ["すべて", "技術書", "ビジネス", "SF", "自己啓発"];

//   // サンプルの本データ
//   const books = [
//     {
//       id: 1,
//       title: "デザインシステム実践ガイド",
//       author: "佐藤 一郎",
//       cover: "/placeholder.svg?height=300&width=200",
//       description:
//         "モダンなウェブデザインシステムの構築と実装について解説した一冊。コンポーネント設計からドキュメント作成まで、実践的なアプローチを紹介しています。",
//       rating: 5,
//       category: "技術書",
//       readDate: "2023年9月",
//     },
//     {
//       id: 2,
//       title: "AIと機械学習の基礎",
//       author: "田中 誠",
//       cover: "/placeholder.svg?height=300&width=200",
//       description:
//         "人工知能と機械学習の基本概念から応用まで、わかりやすく解説した入門書。数学的な背景知識がなくても理解できるよう工夫されています。",
//       rating: 4,
//       category: "技術書",
//       readDate: "2023年7月",
//     },
//     {
//       id: 3,
//       title: "未来企業の作り方",
//       author: "鈴木 健太",
//       cover: "/placeholder.svg?height=300&width=200",
//       description:
//         "テクノロジーの進化に合わせた企業変革の方法論を提示するビジネス書。デジタルトランスフォーメーションの実践例と成功のポイントを解説しています。",
//       rating: 4,
//       category: "ビジネス",
//       readDate: "2023年5月",
//     },
//     {
//       id: 4,
//       title: "量子の海を越えて",
//       author: "高橋 洋子",
//       cover: "/placeholder.svg?height=300&width=200",
//       description:
//         "近未来の量子コンピューティング社会を舞台にしたSF小説。技術的な正確さと人間ドラマが絶妙に融合した話題作です。",
//       rating: 5,
//       category: "SF",
//       readDate: "2023年3月",
//     },
//     {
//       id: 5,
//       title: "習慣の力",
//       author: "山本 達也",
//       cover: "/placeholder.svg?height=300&width=200",
//       description:
//         "日々の小さな習慣が人生を大きく変える方法を科学的に解説した自己啓発書。実践的なワークシートと具体例が豊富に含まれています。",
//       rating: 3,
//       category: "自己啓発",
//       readDate: "2023年1月",
//     },
//     {
//       id: 6,
//       title: "クラウドネイティブアーキテクチャ",
//       author: "伊藤 雄太",
//       cover: "/placeholder.svg?height=300&width=200",
//       description:
//         "モダンなクラウドネイティブアプリケーションの設計と実装について詳細に解説した技術書。マイクロサービスからサーバーレスまで幅広くカバーしています。",
//       rating: 5,
//       category: "技術書",
//       readDate: "2022年12月",
//     },
//   ];

//   const filteredBooks =
//     activeCategory === "すべて"
//       ? books
//       : books.filter((book) => book.category === activeCategory);

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

//   const renderStars = (rating: number) => {
//     return Array(5)
//       .fill(0)
//       .map((_, i) => (
//         <Star
//           key={i}
//           className={`w-4 h-4 ${
//             i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
//           }`}
//         />
//       ));
//   };

//   const toggleExpand = (id: number) => {
//     setExpandedBook(expandedBook === id ? null : id);
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
//             読書リスト
//           </h1>
//           <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
//             私が読んだ本のリストです。技術書からビジネス書、小説まで幅広いジャンルの本を読んでいます。
//             特に興味のある分野の本を中心に紹介しています。
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.2 }}
//           className="flex flex-wrap gap-2 mb-8"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 activeCategory === category
//                   ? "bg-blue-600 text-white"
//                   : "bg-white dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/70"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {filteredBooks.map((book) => (
//             <motion.div
//               key={book.id}
//               variants={item}
//               className="bg-white dark:bg-blue-900/50 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
//             >
//               <div className="p-4 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30">
//                 <Image
//                   src={book.cover || "/placeholder.svg"}
//                   alt={`${book.title}の表紙`}
//                   width={120}
//                   height={180}
//                   className="h-[180px] w-auto object-cover shadow-md"
//                 />
//               </div>
//               <div className="p-5 flex-1 flex flex-col">
//                 <div className="flex justify-between items-start mb-2">
//                   <h2 className="text-lg font-bold text-blue-700 dark:text-blue-300 line-clamp-2">
//                     {book.title}
//                   </h2>
//                   <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300">
//                     {book.category}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
//                   {book.author}
//                 </p>
//                 <div className="flex items-center mb-3">
//                   <div className="flex">{renderStars(book.rating)}</div>
//                   <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
//                     {book.rating}/5
//                   </span>
//                 </div>
//                 <div className="mt-auto">
//                   <div
//                     className={`text-sm text-gray-700 dark:text-gray-300 overflow-hidden transition-all duration-300 ${
//                       expandedBook === book.id ? "max-h-96" : "max-h-12"
//                     }`}
//                   >
//                     {book.description}
//                   </div>
//                   <button
//                     onClick={() => toggleExpand(book.id)}
//                     className="mt-2 inline-flex items-center text-blue-600 dark:text-blue-400 text-sm"
//                   >
//                     {expandedBook === book.id ? "閉じる" : "もっと見る"}
//                     <ChevronDown
//                       className={`w-4 h-4 ml-1 transition-transform ${
//                         expandedBook === book.id ? "transform rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
//                     読了: {book.readDate}
//                   </div>
//                 </div>
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
//           <div className="flex items-center gap-3 mb-4">
//             <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//             <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">
//               読書の目標
//             </h2>
//           </div>
//           <p className="text-gray-700 dark:text-gray-300">
//             今年は技術書を中心に月に2冊のペースで読書を進めています。特に人工知能、クラウドコンピューティング、
//             ユーザーエクスペリエンスデザインの分野に関する本を重点的に読んでいきたいと考えています。
//           </p>
//           <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
//             <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
//               現在読んでいる本
//             </h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               「フロントエンドパフォーマンスチューニング」鈴木 健二 著
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
