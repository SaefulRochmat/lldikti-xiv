import Link from "next/link";
import { notFound } from "next/navigation";
import { BsCalendar3, BsPerson } from "react-icons/bs";
import { HiOutlineTag } from "react-icons/hi";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";
import { beritaData } from "@/components/sections/BeritaPage/BeritaData";
import prisma from "@/lib/prisma";

function formatDate(value) {
  return new Date(value).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

async function getNews(id) {
  const databaseNews = await prisma.news.findUnique({ where: { id } });
  if (databaseNews) return databaseNews;

  return beritaData.find((item) => String(item.id) === id) || null;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const news = await getNews(id);

  return {
    title: news
      ? `${news.judul} - LLDIKTI Wilayah XIV`
      : "Berita - LLDIKTI Wilayah XIV",
    description: news?.ringkasan || "Berita LLDIKTI Wilayah XIV Papua.",
  };
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const news = await getNews(id);
  if (!news) notFound();

  return (
    <>
      <main className="min-h-screen bg-[#f8fafc] py-12 md:py-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/category/berita"
            className="text-sm font-semibold text-[#1A2CA3] hover:underline"
          >
            ← Kembali ke berita
          </Link>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#e8eef5] bg-white shadow-sm">
            {news.gambar && (
              <img
                src={news.gambar}
                alt={news.judul}
                className="h-64 w-full object-cover md:h-96"
              />
            )}
            <div className="p-6 md:p-10">
              <span className="inline-flex items-center gap-2 rounded-lg bg-[#1A2CA3]/10 px-3 py-1.5 text-xs font-semibold text-[#1A2CA3]">
                <HiOutlineTag /> {news.kategori}
              </span>
              <h1 className="mt-5 text-2xl font-bold leading-tight text-[#1a2e4a] md:text-4xl">
                {news.judul}
              </h1>
              <div className="mt-5 flex flex-wrap gap-4 border-b border-[#eef2f6] pb-5 text-sm text-[#7b8a9c]">
                <span className="flex items-center gap-2">
                  <BsCalendar3 /> {formatDate(news.tanggal)}
                </span>
                <span className="flex items-center gap-2">
                  <BsPerson /> {news.penulis}
                </span>
              </div>
              <p className="mt-7 text-base font-medium leading-8 text-[#536477]">
                {news.ringkasan}
              </p>
              <div className="mt-6 whitespace-pre-line text-base leading-8 text-[#3e4d60]">
                {news.isi}
              </div>
            </div>
          </div>
        </article>
      </main>
      <FloatingWidgets />
    </>
  );
}
