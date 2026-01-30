import Link from "next/link"

export function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-white/10 text-center md:text-left relative overflow-hidden">
            {/* Footer Ambient Effects */}
            <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-4 gap-8 relative z-10">
                <div className="space-y-4">
                    <Link className="flex items-center justify-center md:justify-start gap-2 font-bold text-xl tracking-tighter" href="#">
                        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-black font-black text-xs">L</div>
                        <span>lottomat<span className="text-primary">.app</span></span>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Zaawansowana analityka loteryjna dla świadomych graczy.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Produkt</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">Funkcje</Link></li>
                        <li><Link href="#" className="hover:text-primary">Cennik</Link></li>
                        <li><Link href="#" className="hover:text-primary">API</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Firma</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">O nas</Link></li>
                        <li><Link href="#" className="hover:text-primary">Kontakt</Link></li>
                        <li><Link href="#" className="hover:text-primary">Regulamin</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Prawne</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">Polityka Prywatności</Link></li>
                        <li><Link href="#" className="hover:text-primary">Odpowiedzialna Gra</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto max-w-7xl px-4 md:px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
                © 2026 Lottomat.app. Wszystkie prawa zastrzeżone.
            </div>
        </footer>
    )
}
