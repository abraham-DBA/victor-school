"use client"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            {/* banner section  */}
            <div className="w-full py-2.5 font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
                <div className="max-w-screen-xl mx-auto px-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">

                        {/* Left - Email & Time (stacked on mobile) */}
                        <div className=" px-6 flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs">✉️</span>
                                <span className="truncate">info@gmail.com</span>
                            </div>
                            <div className="hidden sm:block text-white/40">|</div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs">🕒</span>
                                <span>8:00 AM-4:00 PM</span>
                            </div>
                        </div>

                        {/* Right - Contact & Social (stacked on mobile) */}
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs">📞</span>
                                <span>+256 782 846 266</span>
                            </div>
                            <div className="hidden sm:block text-white/40">|</div>
                            <div className="flex items-center gap-3">
                                <a href="#" className="hover:text-blue-200 transition-colors" title="Facebook">
                                    <span className="text-sm"><Facebook/></span>
                                </a>
                                <a href="#" className="hover:text-blue-200 transition-colors" title="Instagram">
                                    <span className="text-sm"><Instagram /></span>
                                </a>
                                <a href="#" className="hover:text-blue-200 transition-colors" title="Twitter">
                                    <span className="text-sm"><Twitter /></span>
                                </a>
                                <a href="#" className="hover:text-blue-200 transition-colors" title="YouTube">
                                    <span className="text-sm"><Youtube /></span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Navigation links menu  */}
            <nav className="flex items-center justify-between px-6 md:px-16 lg:px-16 xl:px-6 py-4 border-b border-gray-300 bg-white relative transition-all">

                <a href="https://disneyvictorsjuniorschool.com">
                    <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* <!-- DV monogram --> */}
                        <path d="M20 15V35M20 15L30 25L40 15V35M20 20L25 25L20 30" stroke="#1D4ED8" stroke-width="3" />
                        <circle cx="50" cy="25" r="15" stroke="#1D4ED8" stroke-width="2" fill="none" />
                        <path d="M45 20L55 25L45 30" stroke="#1D4ED8" stroke-width="2" />

                        {/* <!-- Text --> */}
                        <g font-family="Arial, sans-serif" fill="#1E3A8A">
                            <text x="75" y="25" font-size="16" font-weight="bold">DISNEY VICTORS</text>
                            <text x="75" y="40" font-size="12">JUNIOR SCHOOL</text>
                        </g>

                        {/* <!-- Decorative line --> */}
                        <path d="M75 28H185" stroke="#1D4ED8" stroke-width="0.5" />
                    </svg>
                </a>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8">
                    <Link href="/">Home</Link>
                    {/* <a href="#">Programs</a> */}
                    <a href="#about">About</a>
                    <Link href="/contact" className="cursor-pointer">Contact</Link>



                    <Link href="/register" className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                        Register
                    </Link>
                </div>

                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                    {/* Menu Icon SVG */}
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div className={`${open ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg py-4 flex-col items-start gap-3 px-5 text-sm md:hidden z-50 border-t border-gray-200`}>
                    <Link href="/" className="block w-full hover:text-blue-600 transition py-2">Home</Link>
                    <a href="#about" className="block w-full hover:text-blue-600 transition py-2">About</a>
                    <Link href="/contact" className="block w-full hover:text-blue-600 transition py-2">Contact</Link>
                    <Link href="/register" className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm w-full text-center">
                        Register
                    </Link>
                </div>

            </nav></>

    )
}

export default Header