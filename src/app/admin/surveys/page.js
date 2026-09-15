"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiDownload, FiEye, FiX } from "react-icons/fi";

export default function AdminSurveysPage() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 0 });
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  useEffect(() => {
    fetchSurveys();
  }, [pagination.page]);

  async function fetchSurveys() {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/admin/survey?page=${pagination.page}&perPage=20`,
        { credentials: "include" }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setSurveys(data.data.data);
          setPagination(data.data.pagination);
        }
      }
    } catch (error) {
      console.error("Failed to fetch surveys:", error);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function getAverageRating(survey) {
    const ratings = [
      survey.persyaratan,
      survey.prosedur,
      survey.waktu,
      survey.biaya,
      survey.produk,
      survey.kompetensi,
      survey.perilaku,
      survey.pengaduan,
      survey.fasilitas,
    ];
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return avg.toFixed(1);
  }

  function exportCsv() {
    const headers = ["Tanggal", "Usia", "Gender", "Pekerjaan", "Layanan", "Rata-rata"];
    const rows = surveys.map((survey) => [
      new Date(survey.createdAt).toISOString(), survey.age, survey.gender,
      survey.job, survey.services.join("; "), getAverageRating(survey),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`).join(","))
      .join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `survey-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1A2CA3]"
            >
              <FiArrowLeft /> Kembali
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-[#17233d]">
                Survey Responses
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Total {pagination.total} response
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={exportCsv} disabled={surveys.length === 0} className="flex items-center gap-2 px-4 py-2 bg-[#1A2CA3] text-white rounded-lg text-sm font-semibold hover:bg-[#153C91] disabled:cursor-not-allowed disabled:opacity-50">
              <FiDownload /> Export CSV
            </button>
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white border-2 border-gray-200">
                <Image
                  src="/Logos/logo-tutwuri1.png"
                  alt="Admin"
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#1A2CA3] border-r-transparent"></div>
            <p className="mt-4 text-gray-500">Memuat data...</p>
          </div>
        ) : surveys.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <p className="text-gray-500">Belum ada response survey</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Profil
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Layanan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Rating Rata-rata
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {surveys.map((survey) => (
                    <tr
                      key={survey.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(survey.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">
                            {survey.gender}, {survey.age} tahun
                          </p>
                          <p className="text-gray-500">{survey.job}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {survey.services.length} layanan
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                          {getAverageRating(survey)} / 4.0
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => setSelectedSurvey(survey)} className="flex items-center gap-2 text-sm text-[#1A2CA3] hover:underline">
                          <FiEye /> Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Page {pagination.page} of {pagination.totalPages}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setPagination((p) => ({ ...p, page: p.page - 1 }))
                    }
                    disabled={pagination.page === 1}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setPagination((p) => ({ ...p, page: p.page + 1 }))
                    }
                    disabled={pagination.page === pagination.totalPages}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {selectedSurvey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => setSelectedSurvey(null)}>
          <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#17233d]">Detail Survey</h2>
              <button onClick={() => setSelectedSurvey(null)} aria-label="Tutup detail"><FiX /></button>
            </div>
            <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <p><b>Usia:</b> {selectedSurvey.age} tahun</p>
              <p><b>Gender:</b> {selectedSurvey.gender}</p>
              <p><b>Pekerjaan:</b> {selectedSurvey.job}</p>
              <p><b>Layanan:</b> {selectedSurvey.services.join(", ")}</p>
              <p className="sm:col-span-2"><b>Feedback:</b> {selectedSurvey.feedback || "-"}</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {["persyaratan", "prosedur", "waktu", "biaya", "produk", "kompetensi", "perilaku", "pengaduan", "fasilitas"].map((key) => (
                <div key={key} className="rounded-lg bg-gray-50 p-3"><span className="capitalize">{key}</span>: <b>{selectedSurvey[key]}/4</b></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
