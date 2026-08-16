(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/navigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuItems",
    ()=>menuItems,
    "searchSuggestions",
    ()=>searchSuggestions
]);
const menuItems = [
    {
        name: "Profil",
        href: "",
        hasDropdown: true,
        children: [
            {
                name: "Profil LLDIKTI XIV",
                href: "/category/profil"
            },
            {
                name: "Visi & Misi",
                href: "/category/visi-misi"
            }
        ]
    },
    {
        name: "Layanan",
        href: "",
        hasDropdown: true,
        children: [
            {
                name: "Layanan Publik LLDIKTI XIV",
                href: "/layanan-publik-lldikti-xiv"
            },
            {
                name: "Layanan Kami",
                href: "/layanan"
            },
            {
                name: "Cara Pengajuan Layanan",
                href: "/cara-pengajuan-layanan"
            }
        ]
    },
    {
        name: "Publikasi",
        href: "",
        hasDropdown: true,
        children: [
            {
                name: "Berita LLDIKTI Wilayah XIV",
                href: "/category/berita"
            },
            {
                name: "Info LLDIKTI Wilayah XIV",
                href: "/info-lldikti-wilayah-xiv"
            },
            {
                name: "Buletin LLDIKTI Wilayah XIV",
                href: "/buletin-lldikti-wilayah-xiv"
            },
            {
                name: "Direktori Perguruan Tinggi",
                href: "/direktori-perguruan-tinggi"
            }
        ]
    },
    {
        name: "Informasi Publik",
        href: "",
        hasDropdown: true,
        children: [
            {
                name: "Akuntabilitas",
                href: "/akuntabilitas"
            },
            {
                name: "Galeri",
                href: "/galeri"
            },
            {
                name: "Agenda Kegiatan",
                href: "/agenda-kegiatan"
            },
            {
                name: "Indeks Kepuasan Masyarakat",
                href: "/indeks-kepuasan-masyarakat"
            },
            {
                name: "Materi Kegiatan",
                href: "/materi-kegiatan"
            },
            {
                name: "Peta Proses Bisnis",
                href: "/peta-proses-bisnis-lldikti-xiv"
            },
            {
                name: "Prosedur Operasional Standar",
                href: "/prosedur-operasional-standar"
            },
            {
                name: "Rencana Umum Pengadaan",
                href: "/rencana-umum-pengadaan"
            },
            {
                name: "Standar Pelayanan Publik",
                href: "/standar-pelayanan-publik"
            },
            {
                name: "Laporan Tahunan",
                href: "/laporan-tahunan-lldikti-xiv"
            }
        ]
    },
    {
        name: "PPID",
        href: "/ppid",
        hasDropdown: false
    },
    {
        name: "Zona Integritas",
        href: "/zona-integritas",
        hasDropdown: false
    },
    {
        name: "FAQ",
        href: "/faq",
        hasDropdown: false
    }
];
const searchSuggestions = [
    {
        label: "Profil LLDikti Wilayah XIV",
        href: "/category/profil"
    },
    {
        label: "Visi & Misi",
        href: "/category/visi-misi"
    },
    {
        label: "Sejarah Lembaga",
        href: "/category/profil#sejarah"
    },
    {
        label: "Tugas & Fungsi",
        href: "/category/profil#tugas-fungsi"
    },
    {
        label: "Struktur Organisasi",
        href: "/category/profil#struktur-organisasi"
    },
    {
        label: "Berita Terbaru",
        href: "/category/berita"
    },
    {
        label: "Pengumuman",
        href: "/pengumuman"
    },
    {
        label: "Akreditasi Program Studi",
        href: "/layanan/akreditasi"
    },
    {
        label: "KIP Kuliah",
        href: "/layanan/kip-kuliah"
    },
    {
        label: "SISTER Dosen",
        href: "/layanan/sister"
    },
    {
        label: "PDDikti",
        href: "/layanan/pddikti"
    },
    {
        label: "Kontak & Pengaduan",
        href: "/kontak"
    },
    {
        label: "Tautan Terkait",
        href: "/#tautan-terkait"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/navigation/DropdownMenu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DropdownMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function DropdownMenu({ items, isOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-0 right-0 h-2 ${isOpen ? '' : 'pointer-events-none'}`,
                style: {
                    top: '100%'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/features/navigation/DropdownMenu.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-0 bg-white rounded-xl shadow-xl border border-[#e8eef5] min-w-56 overflow-hidden transition-all duration-200 ease-out z-50
          ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"}
        `,
                style: {
                    top: 'calc(100% + 8px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-1.5",
                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "flex items-center gap-2 px-4 py-2.5 text-sm text-[#374151] hover:text-[#1A2CA3] hover:bg-[#1A2CA3]/5 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1 h-1 rounded-full bg-[#f5c842] flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/navigation/DropdownMenu.js",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                item.name
                            ]
                        }, item.name, true, {
                            fileName: "[project]/src/components/features/navigation/DropdownMenu.js",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/features/navigation/DropdownMenu.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/navigation/DropdownMenu.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = DropdownMenu;
var _c;
__turbopack_context__.k.register(_c, "DropdownMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ children, className = "", variant = "primary", size = "md", ...props }) {
    const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
    const variants = {
        primary: "bg-[#1A2CA3] text-white hover:bg-[#153C91] focus:ring-[#1A2CA3]/40 shadow-sm hover:shadow-md",
        accent: "bg-[#f5c842] text-[#1A2CA3] hover:bg-[#e6b800] focus:ring-[#f5c842]/40 shadow-sm hover:shadow-md",
        outline: "border-2 border-[#1A2CA3] text-[#1A2CA3] hover:bg-[#1A2CA3] hover:text-white focus:ring-[#1A2CA3]/40",
        ghost: "text-[#1A2CA3] hover:bg-[#1A2CA3]/10 focus:ring-[#1A2CA3]/20"
    };
    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-7 py-3 text-base"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${base} ${variants[variant] ?? ""} ${sizes[size] ?? ""} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$navigation$2f$DropdownMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/navigation/DropdownMenu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/io'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/io5'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/bs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/sl'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/md'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
// ─── Search Modal ────────────────────────────────────────────────────────────
function SearchModal({ onClose }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filtered = query.trim() ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchSuggestions"].filter((s)=>s.label.toLowerCase().includes(query.toLowerCase())) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchSuggestions"].slice(0, 6);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchModal.useEffect": ()=>{
            inputRef.current?.focus();
        }
    }["SearchModal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchModal.useEffect": ()=>{
            const handler = {
                "SearchModal.useEffect.handler": (e)=>e.key === "Escape" && onClose()
            }["SearchModal.useEffect.handler"];
            window.addEventListener("keydown", handler);
            return ({
                "SearchModal.useEffect": ()=>window.removeEventListener("keydown", handler)
            })["SearchModal.useEffect"];
        }
    }["SearchModal.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: "jsx-736e8e7cc1dcc5e0" + " " + "fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-736e8e7cc1dcc5e0" + " " + "fixed top-[72px] left-1/2 -translate-x-1/2 z-[70] w-full max-w-xl px-4 animate-slideDown",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-736e8e7cc1dcc5e0" + " " + "bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e8eef5]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-736e8e7cc1dcc5e0" + " " + "flex items-center gap-3 px-5 py-4 border-b border-[#f0f4f8]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoSearchOutline, {
                                    className: "text-[#1A2CA3] text-xl flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    type: "text",
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    placeholder: "Cari halaman, layanan, atau informasi...",
                                    className: "jsx-736e8e7cc1dcc5e0" + " " + "flex-1 text-sm text-[#1a2e4a] placeholder-gray-400 outline-none bg-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setQuery(""),
                                    className: "jsx-736e8e7cc1dcc5e0" + " " + "text-gray-400 hover:text-gray-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoMdClose, {
                                        className: "text-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "jsx-736e8e7cc1dcc5e0" + " " + "hidden sm:inline-flex items-center px-2 py-1 text-[10px] font-medium text-gray-400 bg-gray-100 rounded border border-gray-200",
                                    children: "ESC"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-736e8e7cc1dcc5e0" + " " + "py-2 max-h-72 overflow-y-auto",
                            children: filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-736e8e7cc1dcc5e0" + " " + "px-5 pt-1 pb-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider",
                                        children: query ? `Hasil untuk "${query}"` : "Halaman populer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    filtered.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            onClick: onClose,
                                            className: "flex items-center gap-3 px-5 py-3 hover:bg-[#1A2CA3]/5 transition-colors group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-736e8e7cc1dcc5e0" + " " + "w-7 h-7 rounded-lg bg-[#1A2CA3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A2CA3]/20 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoSearchOutline, {
                                                        className: "text-[#1A2CA3] text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.js",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.js",
                                                    lineNumber: 93,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-736e8e7cc1dcc5e0" + " " + "text-sm text-[#1a2e4a] group-hover:text-[#1A2CA3] transition-colors",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.js",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-736e8e7cc1dcc5e0" + " " + "ml-auto text-xs text-gray-300 group-hover:text-[#1A2CA3]/50 transition-colors",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.js",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/layout/Navbar.js",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-736e8e7cc1dcc5e0" + " " + "py-10 text-center text-gray-400 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoSearchOutline, {
                                        className: "text-3xl mx-auto mb-2 text-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    "Tidak ada hasil untuk",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-736e8e7cc1dcc5e0" + " " + "font-medium text-[#1A2CA3]",
                                        children: [
                                            '"',
                                            query,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.js",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-736e8e7cc1dcc5e0" + " " + "px-5 py-3 bg-[#f8fafc] border-t border-[#f0f4f8] flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-736e8e7cc1dcc5e0" + " " + "text-[11px] text-gray-400",
                                    children: [
                                        "Tekan",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "jsx-736e8e7cc1dcc5e0" + " " + "px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-medium",
                                            children: "↵"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.js",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "untuk membuka"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-736e8e7cc1dcc5e0" + " " + "text-[11px] text-gray-400",
                                    children: "LLDikti Wilayah XIV Papua"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.js",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "736e8e7cc1dcc5e0",
                children: "@keyframes slideDown{0%{opacity:0;transform:translate(-50%)translateY(-12px)}to{opacity:1;transform:translate(-50%)translateY(0)}}.animate-slideDown{animation:.2s ease-out forwards slideDown}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(SearchModal, "AW2+Z89aCeMEMfdr5zHfNa5gRIU=");
_c = SearchModal;
function Navbar() {
    _s1();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [waktu, setWaktu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tanggal, setTanggal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Realtime clock
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const hariList = [
                "Minggu",
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jumat",
                "Sabtu"
            ];
            const bulanList = [
                "Januari",
                "Februari",
                "Maret",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus",
                "September",
                "Oktober",
                "November",
                "Desember"
            ];
            const update = {
                "Navbar.useEffect.update": ()=>{
                    const now = new Date();
                    setTanggal(`${hariList[now.getDay()]}, ${now.getDate()} ${bulanList[now.getMonth()]} ${now.getFullYear()}`);
                    setWaktu(`${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")} WIB`);
                }
            }["Navbar.useEffect.update"];
            update();
            const interval = setInterval(update, 1000);
            return ({
                "Navbar.useEffect": ()=>clearInterval(interval)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            document.body.style.overflow = mobileOpen ? "hidden" : "auto";
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = "auto";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        mobileOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-white text-black shadow-sm z-50 top-0 fixed w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex justify-between items-center bg-[#153C91] text-white/90 text-[13px] px-6 lg:px-16 xl:px-24 h-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BsFillTelephoneFill, {
                                                className: "text-yellow-400 text-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "0981-2911065"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/20",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://wa.me/6281223487355",
                                        className: "flex items-center gap-2 hover:text-yellow-400 transition-colors",
                                        "aria-label": "WhatsApp",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaWhatsapp, {
                                                className: "text-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "WhatsApp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/20",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-white/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MdAccessTime, {
                                                className: "text-yellow-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: tanggal
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-yellow-400 font-mono font-semibold",
                                                children: waktu
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaEnvelope, {
                                                className: "text-yellow-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "lldikti14@kemdikbud.go.id"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/20",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        {
                                            href: "https://www.instagram.com",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaInstagram, {}, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 201,
                                                columnNumber: 58
                                            }, this),
                                            label: "Instagram"
                                        },
                                        {
                                            href: "https://www.tiktok.com",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaTiktok, {}, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 202,
                                                columnNumber: 55
                                            }, this),
                                            label: "TikTok"
                                        },
                                        {
                                            href: "https://www.youtube.com",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaYoutube, {}, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 203,
                                                columnNumber: 56
                                            }, this),
                                            label: "YouTube"
                                        },
                                        {
                                            href: "https://www.facebook.com",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaFacebookF, {}, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 204,
                                                columnNumber: 57
                                            }, this),
                                            label: "Facebook"
                                        }
                                    ].map(({ href, icon, label }, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: href,
                                                    className: "hover:text-yellow-400 transition-all hover:scale-110",
                                                    "aria-label": label,
                                                    children: icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.js",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this),
                                                i < arr.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/20",
                                                    children: "|"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.js",
                                                    lineNumber: 210,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/components/layout/Navbar.js",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.js",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 lg:px-16 xl:px-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center h-16 md:h-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Logos/Logo2.png",
                                        alt: "Logo LLDIKTI XIV",
                                        width: 180,
                                        height: 60,
                                        className: "w-[140px] md:w-[160px] h-auto object-contain",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex items-center gap-1",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                onMouseEnter: ()=>item.hasDropdown && setDropdownOpen(item.name),
                                                onMouseLeave: ()=>setDropdownOpen(null),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1A2CA3] rounded-lg hover:bg-[#1A2CA3]/5 transition-all",
                                                        children: [
                                                            item.name,
                                                            item.hasDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlArrowDown, {
                                                                className: `text-[10px] transition-transform duration-200 ${dropdownOpen === item.name ? "rotate-180" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                                lineNumber: 246,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Navbar.js",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    item.hasDropdown && item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$navigation$2f$DropdownMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        items: item.children,
                                                        isOpen: dropdownOpen === item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.js",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.name, true, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSearchOpen(true),
                                            className: "ml-2 w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-[#1A2CA3]/10 hover:text-[#1A2CA3] transition-all",
                                            "aria-label": "Cari",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoSearchOutline, {
                                                className: "text-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.js",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/kontak",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "primary",
                                                size: "sm",
                                                className: "ml-2 rounded-lg",
                                                children: "Kontak & Pengaduan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.js",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSearchOpen(true),
                                            className: "w-9 h-9 rounded-lg flex items-center justify-center text-[#1A2CA3] hover:bg-[#1A2CA3]/10 transition-all",
                                            "aria-label": "Cari",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoSearchOutline, {
                                                className: "text-xl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.js",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-9 h-9 rounded-lg flex items-center justify-center text-[#1A2CA3] hover:bg-[#1A2CA3]/10 transition-all",
                                            onClick: ()=>setMobileOpen(true),
                                            "aria-label": "Buka menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoIosMenu, {
                                                className: "text-2xl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.js",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.js",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.js",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.js",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-0.5 bg-gradient-to-r from-[#153C91] via-yellow-400 to-[#153C91]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.js",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.js",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`,
                onClick: ()=>setMobileOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.js",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center px-5 py-4 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Logos/Logo2.png",
                                alt: "Logo LLDIKTI XIV",
                                width: 140,
                                height: 48,
                                className: "h-auto object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileOpen(false),
                                className: "w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors",
                                "aria-label": "Tutup menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoMdClose, {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.js",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-5 py-2.5 bg-[#1A2CA3]/5 border-b border-gray-100 text-xs text-[#1A2CA3]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MdAccessTime, {
                                className: "flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: tanggal
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold ml-auto",
                                children: waktu
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.js",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 overflow-y-auto h-[calc(100%-120px)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: !item.hasDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            onClick: ()=>setMobileOpen(false),
                                            className: "block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3] transition-all",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.js",
                                            lineNumber: 341,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex justify-between items-center transition-all
                        ${dropdownOpen === item.name ? "bg-[#1A2CA3]/5 text-[#1A2CA3]" : "text-gray-700 hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3]"}`,
                                                    onClick: ()=>setDropdownOpen(dropdownOpen === item.name ? null : item.name),
                                                    children: [
                                                        item.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlArrowDown, {
                                                            className: `text-xs transition-transform duration-300 ${dropdownOpen === item.name ? "rotate-180" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Navbar.js",
                                                            lineNumber: 358,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Navbar.js",
                                                    lineNumber: 350,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `overflow-hidden transition-all duration-300 ${dropdownOpen === item.name ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`,
                                                    children: item.children?.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: child.href,
                                                            onClick: ()=>setMobileOpen(false),
                                                            className: "flex items-center gap-2 pl-8 pr-4 py-2.5 text-sm text-gray-500 hover:text-[#1A2CA3] hover:bg-[#1A2CA3]/5 rounded-lg transition-all",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1 h-1 rounded-full bg-yellow-400 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Navbar.js",
                                                                    lineNumber: 374,
                                                                    columnNumber: 27
                                                                }, this),
                                                                child.name
                                                            ]
                                                        }, child.name, true, {
                                                            fileName: "[project]/src/components/layout/Navbar.js",
                                                            lineNumber: 368,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.js",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, item.name, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-4 border-t border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/kontak",
                                    onClick: ()=>setMobileOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "primary",
                                        size: "md",
                                        className: "w-full rounded-lg",
                                        children: "Kontak & Pengaduan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.js",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.js",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.js",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.js",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.js",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchModal, {
                onClose: ()=>setSearchOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.js",
                lineNumber: 400,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true);
}
_s1(Navbar, "XqI9Zb3edlnvUdP2xsbfgWAEqf4=");
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "SearchModal");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ScrollToTop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToTop() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            const toggle = {
                "ScrollToTop.useEffect.toggle": ()=>setVisible(window.scrollY > 400)
            }["ScrollToTop.useEffect.toggle"];
            window.addEventListener("scroll", toggle, {
                passive: true
            });
            return ({
                "ScrollToTop.useEffect": ()=>window.removeEventListener("scroll", toggle)
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
        className: "fixed bottom-20 left-6 z-50 w-10 h-10 bg-[#153C91] hover:bg-yellow-400 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border border-yellow-400/30",
        "aria-label": "Kembali ke atas",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaArrowUp, {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/layout/ScrollToTop.js",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ScrollToTop.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ScrollToTop, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AOSProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AOSProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-profile-lldikti-xiv/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'aos'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AOSProvider({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AOSProvider.useEffect": ()=>{
            AOS.init({
                duration: 800,
                once: true,
                easing: "ease-in-out",
                offset: 100,
                mirror: false
            });
        }
    }["AOSProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$profile$2d$lldikti$2d$xiv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(AOSProvider, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AOSProvider;
var _c;
__turbopack_context__.k.register(_c, "AOSProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D_src_3f02f165._.js.map