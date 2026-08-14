"use client";

import Link from "next/link";
import { FiTool, FiHome, FiArrowLeft } from "react-icons/fi";
import { HiOutlineCodeBracket } from "react-icons/hi2";

export default function UnderDevelopment({ 
  title = "Halaman Sedang Dikembangkan",
  description = "Kami sedang bekerja keras untuk menghadirkan halaman ini. Mohon kembali lagi nanti.",
  showHomeButton = true 
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <div className="relative mb-8 inline-block">
          {/* Rotating Circle Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-[#1A2CA3]/20 animate-spin-slow" />
          </div>
          
          {/* Main Icon */}
          <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-[#1A2CA3] to-[#153C91] rounded-full flex items-center justify-center shadow-xl">
            <FiTool className="text-white text-5xl animate-wiggle" />
          </div>

          {/* Floating Code Icon */}
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
            <HiOutlineCodeBracket className="text-[#1A2CA3] text-xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2CA3] mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span className="font-semibold text-[#1A2CA3]">Dalam Pengembangan</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#1A2CA3] to-[#153C91] rounded-full animate-progress" 
                 style={{ width: '60%' }} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {showHomeButton && (
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A2CA3] text-white rounded-lg font-semibold hover:bg-[#153C91] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FiHome className="text-lg" />
              Kembali ke Beranda
            </Link>
          )}
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A2CA3] border-2 border-[#1A2CA3] rounded-lg font-semibold hover:bg-[#1A2CA3] hover:text-white transition-all duration-200"
          >
            <FiArrowLeft className="text-lg" />
            Halaman Sebelumnya
          </button>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "", label: "Coming Soon", desc: "Segera Hadir" },
            { icon: "", label: "Fast Updates", desc: "Update Cepat" },
            { icon: "", label: "Best Quality", desc: "Kualitas Terbaik" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-[#1A2CA3] mb-1">
                {item.label}
              </div>
              <div className="text-xs text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-400">
          Tim LLDIKTI Wilayah XIV Papua sedang bekerja untuk Anda
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 60%;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-progress {
          animation: progress 2s ease-out;
        }
      `}</style>
    </div>
  );
}
