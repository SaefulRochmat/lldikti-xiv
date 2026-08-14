"use client";

import { useState } from "react";
import { IoClose, IoDownload } from "react-icons/io5";

export default function PDFViewerModal({ isOpen, pdfFile, title, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#1A2CA3] text-white p-4 md:p-6 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-bold truncate">{title}</h2>
            <p className="text-xs md:text-sm text-[#b8d4e8] mt-1">
              Halaman {currentPage} {numPages && `dari ${numPages}`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="p-2 hover:bg-[#0f1f7a] rounded-lg transition-colors"
              title="Download PDF"
            >
              <IoDownload size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#0f1f7a] rounded-lg transition-colors"
              title="Tutup"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-gray-100 flex flex-col items-center p-4">
          <iframe
            src={`${pdfFile}#toolbar=0`}
            className="w-full h-full rounded-lg"
            style={{ minHeight: "500px" }}
            title={`PDF Viewer - ${title}`}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Footer dengan kontrol */}
        <div className="border-t border-gray-200 p-4 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Zoom:</span>
            <select
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2CA3]"
            >
              <option value={0.8}>80%</option>
              <option value={1}>100%</option>
              <option value={1.2}>120%</option>
              <option value={1.5}>150%</option>
              <option value={2}>200%</option>
            </select>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#1A2CA3] text-white rounded-lg hover:bg-[#0f1f7a] transition-colors text-sm font-medium"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
