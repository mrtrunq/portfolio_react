import { useState, useEffect } from "react";
import { cn } from "../lib/ultis";
import { X, Menu } from "lucide-react";

const navItems = [
    { name: "Trang Chủ", href: "#hero" },
    { name: "Thông Tin", href: "#about" },
    { name: "Kỹ Năng", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Liên Hệ", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn("fixed z-40 w-full transition-all duration-300", isScrolled ? "bg-background/80 py-3 shadow-xs backdrop-blur-md" : "py-5")}>
            <div className="container flex justify-between">
                <a className="text-primary flex items-center text-xl font-bold" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Trung </span> Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden space-x-8 md:flex">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)} className="text-foreground z-50 p-2 md:hidden" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("bg-background/95 backdroup-blur-md fixed inset-0 z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden", isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
