"use client"

import { useState } from "react"
import Logo from "../ui/Logo"
import Button from "../ui/Button"
import NavLink from "../ui/Nav-Link"
import DropDownMenu from "../blocks/DropDownMenu"
import { MenuItems } from "@/contant/Nav-Items"
import { IoIosMenu } from "react-icons/io";
import { redirect } from "next/navigation"
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link"

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropDownOpen] = useState(null);

    return (
        <nav className="bg-[#fffffff1] text-gray-500/80 shadow-md">
                <div className="flex  md:justify-between items-center text-[#e0e0e0f1] text-[15px]  mx-auto px-8  md:px-28 py-4  md:h-10 bg-[#1A2CA3]">
                    <div className="hidden md:flex items-center space-x-4 ">
                        <BsFillTelephoneFill />
                        <p>081-223-487-355</p>
                        <Link href={"https://wa.me/081223487355"} className="flex items-center space-x-2">
                            <FaWhatsapp />
                            <p>Whatsapp</p>
                        </Link>
                    </div>
                    <div className="flex justify-between items-center space-x-5 text-[20px]">
                       <Link href={"https://www.instagram.com"} className="hover:text-[#ffd000]"><FaInstagram /></Link>
                       <Link href={"https://www.tiktok.com"} className="hover:text-[#ffd000]"><FaTiktok /></Link>
                       <Link href={"https://www.youtube.com"} className="hover:text-[#ffd000]"><FaYoutube /></Link>
                       <Link href={"https://www.facebook.com"} className="hover:text-[#ffd000]"><FaFacebookF /></Link>
                    </div>
                </div>
            <div className="mx-auto px-8  md:px-28">
                <div className="flex justify-between items-center h-20">
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
                            className="bg-[#1A2CA3] text-white font-medium rounded-3xl hover:bg-[#ffb700] cursor-pointer"
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