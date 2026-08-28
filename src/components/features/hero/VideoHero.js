"use client";

import { useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function VideoHero() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative w-full h-[650px] sm:h-[490px] md:h-[640px] lg:h-[850px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted={muted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top sm:object-center"
      >
        <source src="/Assets/video-cp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay - lebih soft untuk estetika */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className="mb-4 animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-white/90">
              LLDIKTI Wilayah XIV
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Selamat Datang di
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
              LLDIKTI Wilayah XIV
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Portal resmi layanan informasi, pelaporan, dan data pendidikan
            tinggi di Tanah Papua
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#introduction"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#153C91] rounded-full font-semibold text-sm hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Jelajahi Layanan
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="/category/profil"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold text-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Tentang Kami
            </a>
          </div>

          {/* Stats Bar */}
          <div
            className="mt-12 flex flex-wrap gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            {[
              { value: "37+", label: "Perguruan Tinggi" },
              { value: "369+", label: "Program Studi" },
              { value: "2800+", label: "Dosen Aktif" },
              { value: "67K+", label: "Mahasiswa" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 group"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <FiVolumeX className="text-lg group-hover:scale-110 transition-transform" />
        ) : (
          <FiVolume2 className="text-lg group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
