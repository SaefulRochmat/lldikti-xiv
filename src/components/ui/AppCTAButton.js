"use client";

export default function AppCTAButton({ link }) {
  return (
    <a
      href={link}
      className="inline-block bg-yellow-400 text-[#153C91] px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition duration-300 shadow-md hover:shadow-lg"
    >
      Masuk Aplikasi
    </a>
  );
}
