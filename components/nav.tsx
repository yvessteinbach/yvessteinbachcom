"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import Image from 'next/image';

export default function Nav() {

    const pathname = usePathname();

    useEffect(() => {
        const menuIcon = document.getElementById("menu-icon") as HTMLElement | null;
        const headerMenu = document.querySelector(".header_menu") as HTMLElement | null;
        const menuLinks = document.querySelectorAll<HTMLElement>(".header_menu .menu_link");

        if (!menuIcon || !headerMenu) {
            console.error("Menu icon or header menu not found.");
            return;
        }

        gsap.set(headerMenu, { y: -50, opacity: 0, display: "none" });
        gsap.set(menuLinks, { opacity: 0, y: 20 });

        const handleMenuToggle = () => {
            if (
                headerMenu.style.display === "none" ||
                headerMenu.style.display === ""
            ) {
                gsap.to(headerMenu, {
                    y: 0,
                    opacity: 1,
                    duration: 0.2,
                    display: "flex",
                    onComplete: () => {
                        gsap.to(menuLinks, {
                            opacity: 1,
                            y: 0,
                            duration: 0.3,
                            stagger: 0.1,
                        });
                    },
                });
            } else {
                gsap.to(menuLinks, {
                    opacity: 0,
                    y: 20,
                    duration: 0.2,
                    stagger: 0.1,
                    onComplete: () => {
                        gsap.to(headerMenu, {
                            y: -50,
                            opacity: 0,
                            duration: 0.2,
                            display: "none",
                        });
                    },
                });
            }
            menuIcon.classList.toggle("active");
        };

        menuIcon.addEventListener("click", handleMenuToggle);

        return () => {
            menuIcon.removeEventListener("click", handleMenuToggle);
        };
    }, []);

    return (
        <>
            <div className="header">
                <div className="header_logo">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            width={50}
                            height={50}
                            alt="Y"
                        />
                    </Link>
                </div>

                <div className="header_nav">
                    <Link href="/" className={`nav_link ${pathname === "/" ? "active" : ""}`}>Index</Link>
                    <Link href="/collections" className={`nav_link ${pathname === "/collections" ? "active" : ""}`}>Collections</Link>
                </div>

                <div className="header_end">
                    <div className="header_job">
                        <span className="job_link">Cinematography, </span>
                        <span className="job_link">Webdevelopment</span>
                    </div>
                    <div className="menu-icon" id="menu-icon">
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div >

            <div className="header_menu">
                <div className="menu_links">
                    <Link href="/" className={`menu_link ${pathname === "/" ? "active" : ""}`}>Index</Link>
                    <Link href="/collections" className={`menu_link ${pathname === "/collections" ? "active" : ""}`}>Collections</Link>
                    <a href="mailto:kontakt@yvessteinbach.com" className="menu_link">Contact</a>
                </div>
            </div>
        </>
    );
}
