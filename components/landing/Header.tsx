"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Home, HelpCircle, DollarSign, LogIn, Sparkles, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            {/* Navbar Frame matches Section Containers exactly */}
            <div className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <header className="pointer-events-auto w-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50">
                        <div className="flex h-16 items-center justify-between px-6">
                            <Link className="flex items-center gap-2 font-bold text-xl tracking-tighter" href="#">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black font-black">L</div>
                                <span>lottomat<span className="text-primary">.app</span></span>
                            </Link>
                            <nav className="hidden md:flex gap-8 text-sm font-medium">
                                <Link className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2" href="#">
                                    Problem & Rozwiązanie
                                </Link>
                                <Link className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2" href="#">
                                    Jak to działa
                                </Link>
                                <Link className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2" href="#">
                                    Cennik
                                </Link>
                            </nav>
                            <div className="flex items-center gap-4">
                                <Link href="#" className="text-sm font-medium hover:text-primary hidden md:block">
                                    Zaloguj
                                </Link>
                                <Button size="sm" className="hidden md:flex bg-primary text-black hover:bg-primary/90 rounded-xl font-bold">
                                    Zacznij Teraz
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden text-white hover:bg-white/10 rounded-xl"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </div>
                        </div>
                    </header>
                </div>
            </div>

            {/* Floating Mobile Menu - Matches Container Width */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-0 right-0 z-40 pointer-events-none"
                    >
                        <div className="container mx-auto max-w-7xl px-4 md:px-6">
                            <div className="pointer-events-auto bg-black/90 border border-white/10 rounded-2xl shadow-2xl p-4 backdrop-blur-xl w-full">
                                <nav className="flex flex-col gap-2">
                                    <MobileLink href="#" icon={<Sparkles className="w-5 h-5" />}>Problem & Rozwiązanie</MobileLink>
                                    <MobileLink href="#" icon={<HelpCircle className="w-5 h-5" />}>Jak to działa</MobileLink>
                                    <MobileLink href="#" icon={<DollarSign className="w-5 h-5" />}>Cennik</MobileLink>

                                    <div className="h-px bg-white/10 my-4" />

                                    <MobileLink href="#" icon={<LogIn className="w-5 h-5" />}>Zaloguj się</MobileLink>
                                    <Button className="w-full bg-primary text-black hover:bg-primary/90 h-12 rounded-xl text-lg font-bold mt-2">
                                        Zacznij Teraz
                                    </Button>
                                </nav>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

function MobileLink({ href, children, icon }: { href: string, children: React.ReactNode, icon?: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-4 px-4 py-4 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5"
        >
            {icon && <span className="text-primary">{icon}</span>}
            {children}
        </Link>
    )
}
