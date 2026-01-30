import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, BrainCircuit, Database, Fingerprint, ArrowRight } from "lucide-react"

export function ProblemSolution() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">

                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Masz 1 szansę na <span className="text-primary font-mono bg-primary/10 px-2 rounded">13 983 816</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Chyba że masz lottomat.app. Zamieniamy szczęście na statystykę, wykorzystując twarde dane przeciwko ślepemu losowi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Main Contrast Blocks - Top Hierarchy */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group flex flex-col justify-between min-h-[300px]">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <XCircle size={80} className="text-white" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2 text-white">Błąd Poznawczy</h3>
                                <div className="w-12 h-1 bg-white/20 mb-6 rounded-full" />
                                <p className="text-muted-foreground leading-relaxed">
                                    Ludzkie przeczucie nie ma szans z matematyką. Wybieranie dat urodzin to statystyczne samobójstwo w grach losowych.
                                </p>
                            </div>
                            <div className="mt-8 text-sm font-mono text-muted-foreground/40">ERROR: HUMAN BIAS DETECTED</div>
                        </div>

                        <div className="p-8 rounded-3xl bg-primary text-black relative overflow-hidden group flex flex-col justify-between min-h-[300px]">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Database size={80} className="text-black" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Potęga Danych</h3>
                                <div className="w-12 h-1 bg-black/20 mb-6 rounded-full" />
                                <p className="font-medium leading-relaxed opacity-90">
                                    Analizujemy miliony rekordów w czasie rzeczywistym. Wyłapujemy mikrowzorce niewidoczne dla ludzkiego oka.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center font-bold text-sm tracking-widest uppercase opacity-60">
                                System Online <div className="w-2 h-2 bg-black rounded-full ml-2 animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Feature Stack - Right Column */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        <BentoCard
                            icon={<BrainCircuit className="w-6 h-6 text-primary" />}
                            title="Analiza Patternów"
                            desc="Wykrywanie anomalii w rozkładzie liczb parzystych."
                        />
                        <BentoCard
                            icon={<Database className="w-6 h-6 text-primary" />}
                            title="Cold & Hot Numbers"
                            desc="Śledzenie częstotliwości występowania."
                        />
                        <BentoCard
                            icon={<Fingerprint className="w-6 h-6 text-primary" />}
                            title="Eliminacja Szumu"
                            desc="Odrzucanie kombinacji nieprawdopodobnych."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
function BentoCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex-1 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-white/5 text-primary">{icon}</div>
                <h4 className="font-bold text-lg">{title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    )
}
