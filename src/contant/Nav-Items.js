

export const MenuItems = [
    {
        name: "Beranda",
        href: "/",
    },
    {
        name: "Layanan",
        href: "/pelayanan",
        children: [
            {  
                name: "Lapor",
                href: "/layanan-pelaporan",
            },
            {
                name: "Data Publik",
                href: "/data-publik"
            },
            {
                name: "SIKAS",
                href: "/sikas",
            },
        ]
    },
    {
        name: "Profil",
        href: "/profile",
        children: [
            {
                name: "LLDIKTI XIV",
                href: "/profile-LLDIKTI-XIV",
            },
            {
                name: "VISI & MISI",
                href: "/visi-misi",
            },
        ]
    },
    {
        name: "Kontak",
        href: "/kontak",
    },
]