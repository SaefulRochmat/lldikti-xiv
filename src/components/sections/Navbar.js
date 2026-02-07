"use client"

import { useState } from "react"
import Logo from "../ui/Logo"
import Button from "../ui/Button"
import NavLink from "../ui/Nav-Link"
import DropDownMenu from "../blocks/DropDownMenu"
import { MenuItems } from "@/contant/Nav-Items"
import { IoIosMenu } from "react-icons/io";
import { redirect } from "next/navigation"

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropDownOpen] = useState(null);

    return (
        <nav className="bg-[#ececec] text-gray-500/75 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-24">
                    {/* LOGO */}
                    <Logo />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {MenuItems.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => setDropDownOpen(link.name)}
                                onMouseLeave={() => setDropDownOpen(null)}
                            >
                                {link.href ? (
                                    <NavLink href={link.href}>{link.name}</NavLink>
                                ) : (
                                <button>{link.name}</button>
                                )}

                                {link.children &&  (
                                    <DropDownMenu 
                                        items={link.children} 
                                        isOpen={dropdownOpen === link.name}
                                    />
                                )}
                            </div>
                        ))}

                        {/* Layanan & Kontak Button */}
                        <Button 
                            className="bg-[#1A2CA3] text-white font-bold rounded-3xl hover:bg-[#ffb700]"
                            onClick = {() => redirect("/")}
                        >
                            Kontak & Pengaduan
                        </Button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <IoIosMenu />
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2">
                    {MenuItems.map((link) => (
                        <div key={link.name}>
                        {!link.children ? (
                            <NavLink href={link.href}>{link.name}</NavLink>
                        ) : (
                            <>
                            <button
                                className="block py-2"
                                onClick={() =>
                                setDropDownOpen(
                                    dropdownOpen === link.name ? null : link.name
                                )
                                }
                            >
                                {link.name}
                            </button>

                            {dropdownOpen === link.name &&
                                link.children.map((child) => (
                                <NavLink key={child.name} href={child.href}>
                                    <div className="pl-4 py-1 text-gray-400">
                                        {child.name}
                                    </div>
                                </NavLink>
                                ))}
                            </>
                        )}
                        </div>
                    ))}
                    </div>
                )}
            </div>
        </nav>
    );
}