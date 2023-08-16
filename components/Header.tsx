"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export const Header = () => {

  const navLinks = [
    {title: "Home", path: "/"},
    {title: "Movies", path: "/movies"},
    {title: "About", path: "/about"},
    {title: "Contact", path: "/contact"},
  ]

  const [nav, setNav] = useState(false);

  return (
    <header className="flex items-center relative justify-between gap-2 md:px-10 sm:px-5 px-3 py-4 shadow-md">
        <Link href="/">
          <Image src="/logo.png" width={100} height={500} className="object-cover" alt="hdToday"/>
        </Link>

        <nav className="md:flex hidden items-center gap-3">
        {navLinks.map((item, index) => (
          <Link href={item.path}
          key={index}
          className="text-lg text-text hover:text-primary"
          >
            {item.title}
          </Link>
        ))}

        <button className="text-bg bg-primary rounded-md shadow-sm px-6 py-2 ml-3">Sign Up</button>
        </nav>
        
        {/* Mobile Nav */}
        {
        nav && (
        <nav className="md:hidden flex flex-col gap-3 absolute top-[110%] left-0 z-20 px-10 pt-10 bg-bg w-[300px] h-[85vh]">
          {navLinks.map((item, index) => (
            <Link href={item.path}
            key={index}
            className="text-lg text-text hover:text-primary"
            >
              {item.title}
            </Link>
          ))}

          <button className="text-bg bg-primary rounded-md shadow-sm px-6 py-2">Sign Up</button>
        </nav>
        )
        }
        <div className="md:hidden block" 
        onClick={() => setNav(prev => !prev)}
        >
          <i className="fas fa-bars text-xl cursor-pointer"/>
        </div>

    </header>
  )
}
