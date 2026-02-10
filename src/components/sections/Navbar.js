"use client";

import { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import NavLink from "../ui/Nav-Link";
import DropDownMenu from "../blocks/DropDownMenu";
import { MenuItems } from "@/contant/Nav-Items";
import { IoIosMenu } from "react-icons/io";
import { redirect } from "next/navigation";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(null);

  // lock scroll ketika mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav className="bg-[#fffffff1] text-gray-500/80 shadow-md relative z-50">
      {/* ===== TOP BAR ===== */}
      <div className="flex md:justify-between items-center text-[#e0e0e0f1] text-[15px] mx-auto px-8 md:px-28 py-4 md:h-10 bg-[#1A2CA3]">
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <BsFillTelephoneFill />
            <p>081-223-487-355</p>
          </div>
          <Link
            href="https://wa.me/081223487355"
            className="flex items-center space-x-2 hover:text-[#ffd000]"
          >
            <FaWhatsapp />
            <p>Whatsapp</p>
          </Link>
        </div>

        <div className="flex justify-between items-center space-x-5 text-[20px] mx-auto md:mx-0">
          <Link href="https://www.instagram.com" className="hover:text-[#ffd000]">
            <FaInstagram />
          </Link>
          <Link href="https://www.tiktok.com" className="hover:text-[#ffd000]">
            <FaTiktok />
          </Link>
          <Link href="https://www.youtube.com" className="hover:text-[#ffd000]">
            <FaYoutube />
          </Link>
          <Link href="https://www.facebook.com" className="hover:text-[#ffd000]">
            <FaFacebookF />
          </Link>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="mx-auto px-8 md:px-28">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* ===== DESKTOP MENU ===== */}
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
                  <button className="hover:text-[#1A2CA3] transition-colors">
                    {link.name}
                  </button>
                )}

                {link.children && (
                  <DropDownMenu
                    items={link.children}
                    isOpen={dropdownOpen === link.name}
                  />
                )}
              </div>
            ))}

            <Button
              className="bg-[#1A2CA3] text-white font-medium rounded-3xl hover:bg-[#ffb700]"
              onClick={() => redirect("/")}
            >
              Kontak & Pengaduan
            </Button>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            className="md:hidden text-3xl text-[#1A2CA3]"
            onClick={() => setMobileOpen(true)}
          >
            <IoIosMenu />
          </button>
        </div>
      </div>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
        ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl
        transition-transform duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <Logo />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-4xl text-gray-600 hover:text-[#1A2CA3]"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Drawer Menu */}
        <div className="p-6 space-y-3 overflow-y-auto">
          {MenuItems.map((link) => (
            <div key={link.name}>
              {/* Normal link */}
              {!link.children && (
                <NavLink href={link.href}>
                  <div
                    className="py-3 px-2 rounded-lg border-b
                    hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3] transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </div>
                </NavLink>
              )}

              {/* Dropdown link */}
              {link.children && (
                <>
                  <button
                    className={`w-full text-left py-3 px-2 rounded-lg border-b
                    flex justify-between items-center transition-all
                    hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3]
                    ${
                      dropdownOpen === link.name
                        ? "bg-[#1A2CA3]/5 text-[#1A2CA3]"
                        : ""
                    }`}
                    onClick={() =>
                      setDropDownOpen(
                        dropdownOpen === link.name ? null : link.name
                      )
                    }
                  >
                    {link.name}
                    <span
                      className={`transition-transform duration-300
                      ${dropdownOpen === link.name ? "rotate-180" : ""}`}
                    >
                      <SlArrowDown />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300
                    ${
                      dropdownOpen === link.name
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.children.map((child) => (
                      <NavLink key={child.name} href={child.href}>
                        <div
                          className="pl-6 pr-2 py-2 rounded-lg text-gray-600
                          hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3]
                          transition-all"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}

          <Button
            className="w-full mt-6 bg-[#1A2CA3] text-white rounded-3xl hover:bg-[#ffb700]"
            onClick={() => {
              setMobileOpen(false);
              redirect("/");
            }}
          >
            Kontak & Pengaduan
          </Button>
        </div>
      </div>
    </nav>
  );
}
