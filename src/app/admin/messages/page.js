"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiMail, FiCheckCircle } from "react-icons/fi";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, unread, read, replied

  useEffect(() => {
    fetchMessages();
  }, [filter]);

  async function fetchMessages() {
    try {
      setLoading(true);
      const statusParam = filter !== "all" ? `&status=${filter}` : "";
      const response = await fetch(
        `/api/admin/contact?perPage=50${statusParam}`,
        { credentials: "include" }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessages(data.data.messages);
        }
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
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

  function getStatusBadge(status) {
    const badges = {
      unread: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Belum Dibaca" },
      read: { bg: "bg-blue-100", text: "text-blue-800", label: "Sudah Dibaca" },
      replied: { bg: "bg-green-100", text: "text-green-800", label: "Sudah Dibalas" },
    };

    const badge = badges[status] || badges.unread;

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
        {badge.label}
      </span>
    );
  }

  function getStatusIcon(status) {
    if (status === "unread") return <FiMail className="text-yellow-600" />;
    if (status === "read") return <FiMail className="text-blue-600" />;
    return <FiCheckCircle className="text-green-600" />;
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1A2CA3]"
              >
                <FiArrowLeft /> Kembali
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-[#17233d]">
                  Contact Messages
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Total {messages.length} pesan
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
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

          {/* Filter */}
          <div className="flex gap-2">
            {["all", "unread", "read", "replied"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  filter === status
                    ? "bg-[#1A2CA3] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status === "all" && "Semua"}
                {status === "unread" && "Belum Dibaca"}
                {status === "read" && "Sudah Dibaca"}
                {status === "replied" && "Sudah Dibalas"}
              </button>
            ))}
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
        ) : messages.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <p className="text-gray-500">Belum ada pesan</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow ${
                  message.status === "unread"
                    ? "border-yellow-300 bg-yellow-50/30"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1A2CA3]/10 flex items-center justify-center">
                      {getStatusIcon(message.status)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {message.nama}
                          </h3>
                          <p className="text-sm text-gray-500">{message.email}</p>
                        </div>
                        {getStatusBadge(message.status)}
                      </div>

                      <p className="text-sm text-gray-700 mt-3 line-clamp-2">
                        {message.pesan}
                      </p>

                      <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                        <span>{formatDate(message.createdAt)}</span>
                        <button className="text-[#1A2CA3] hover:underline font-semibold">
                          Lihat Detail
                        </button>
                        {message.status === "unread" && (
                          <button className="text-blue-600 hover:underline font-semibold">
                            Tandai Sudah Dibaca
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
