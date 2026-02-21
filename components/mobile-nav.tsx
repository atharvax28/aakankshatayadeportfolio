"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    return (
        <>
            <button
                className="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle mobile menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
                <div className="mobile-menu-overlay">
                    <ul className="mobile-nav-links">
                        <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Spaces</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            )}
        </>
    )
}
