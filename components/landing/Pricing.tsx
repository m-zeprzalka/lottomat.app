import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function Pricing() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />

            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Wybierz swoją strategię sukcesu
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Darmowy start czy pełna płatna opcja?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <div className="p-8 rounded-3xl bg-secondary/20 border border-white/10 flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white opacity-40 pointer-events-none" />
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold">Podstawowy</h3>
                            <div className="text-4xl font-bold mt-2">0 zł</div>
                            <p className="text-muted-foreground">Na start</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center"><Check className="text-primary mr-2" /> Wyniki archiwalne</li>
                            <li className="flex items-center"><Check className="text-primary mr-2" /> Podstawowe statystyki</li>
                            <li className="flex items-center text-muted-foreground/50"><X className="mr-2" /> Wszystkie predykcje</li>
                            <li className="flex items-center text-muted-foreground/50"><X className="mr-2" /> Zaawansowane filtry</li>
                            <li className="flex items-center text-muted-foreground/50"><X className="mr-2" /> Bez reklam</li>
                        </ul>
                        <Button variant="outline" className="w-full h-12 rounded-xl text-lg hover:bg-white/5">
                            Wybierz Podstawowy
                        </Button>
                    </div>

                    {/* Premium Plan */}
                    <div className="p-8 rounded-3xl bg-background border-2 border-primary relative flex flex-col shadow-[0_0_50px_rgba(204,255,0,0.1)]">
                        <div className="absolute top-0 center left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                            REKOMENDOWANY
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-primary">Premium</h3>
                            <div className="text-4xl font-bold mt-2">29 zł<span className="text-lg text-muted-foreground font-normal">/mc</span></div>
                            <p className="text-muted-foreground">Pełna moc algorytmów</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center"><Check className="text-primary mr-2" /> Wyniki archiwalne</li>
                            <li className="flex items-center"><Check className="text-primary mr-2" /> Wszystkie predykcje</li>
                            <li className="flex items-center"><Check className="text-primary mr-2" /> Podstawowe i Zaawansowane statystyki</li>
                            <li className="flex items-center"><Check className="text-primary mr-2" /> Filtry algorytmiczne</li>
                            <li className="flex items-center"><Check className="text-primary mr-2" /> Brak reklam</li>
                        </ul>
                        <Button className="w-full h-12 rounded-xl text-lg bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all">
                            Rozpocznij Okres Próbny
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
