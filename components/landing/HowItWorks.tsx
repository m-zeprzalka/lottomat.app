import { Server, Cpu, LineChart, Quote } from "lucide-react"

export function HowItWorks() {
    return (
        <section className="py-32 bg-black relative">
            {/* Background Grid Accent */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-grid-white opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Matematyka w służbie Twojej Wygranej
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Nie obiecujemy "magicznego sposobu" na wygraną – obiecujemy matematyczną optymalizację.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-32">
                    <Step
                        number="01"
                        title="Pobieranie Danych"
                        desc="Łączymy się bezpośrednio z oficjalnymi bazami wyników przez API w czasie rzeczywistym."
                        icon={<Server className="w-8 h-8 text-primary" />}
                    />
                    <Step
                        number="02"
                        title="Przetwarzanie ML"
                        desc="Nasze algorytmy Machine Learning symulują tysiące scenariuszy pod kątem prawdopodobieństwa."
                        icon={<Cpu className="w-8 h-8 text-primary" />}
                    />
                    <Step
                        number="03"
                        title="Generowanie Predykcji"
                        desc="Otrzymujesz zestaw liczb o najwyższym współczynniku prawdopodobieństwa dla danego losowania."
                        icon={<LineChart className="w-8 h-8 text-primary" />}
                    />
                </div>

                {/* Quote Section - Narrow Width */}
                <div className="max-w-4xl mx-auto relative group">
                    {/* Ambient Blur Underneath */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none group-hover:opacity-75 transition-opacity duration-1000" />

                    <div className="relative p-10 md:p-14 rounded-3xl bg-black/60 border border-white/10 overflow-hidden backdrop-blur-xl shadow-2xl">
                        {/* Quote Effects */}
                        <div className="absolute inset-0 bg-grid-white opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

                        <div className="relative z-10 text-center flex flex-col items-center">
                            <p className="text-xl md:text-2xl font-normal leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
                                <span className="text-primary text-4xl leading-none mr-2 font-serif align-middle">"</span>
                                Hobbystryczny projekt z pasji do analizy danych i programowania, który przerodził się w pełnoprawne narzędzie do predykcji liczb. Mam nadzieję, że pomoże wam w maksymalizacji wygranych osiąganych w grach i zakładach Totalizatora Sportowego.
                                <span className="text-primary text-4xl leading-none ml-2 font-serif align-middle">"</span>
                            </p>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center font-bold text-xl border border-white/10 text-primary shadow-inner"><img src="/avatar.png" alt="Michał Zeprzałka" className="w-14 h-14 rounded-full" /></div>
                                <div className="text-center">
                                    <div className="font-bold text-white text-lg">Michał Zeprzałka</div>
                                    <div className="text-primary/80 text-xs font-mono tracking-widest uppercase mt-1">Twórca lottomat.app - zeprzalka.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Step({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: React.ReactNode }) {
    return (
        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/5 transition-all group overflow-hidden hover:bg-white/10 hover:shadow-[0_0_40px_rgba(204,255,0,0.1)] hover:border-primary/20">
            <div className="absolute top-0 right-0 p-3 opacity-20 text-4xl font-black text-muted-foreground select-none group-hover:text-primary transition-colors">
                {number}
            </div>

            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 relative z-10">{title}</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">{desc}</p>
        </div>
    )
}
