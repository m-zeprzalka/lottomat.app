import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-32">
            {/* Improved Gradient - Smoother Radial */}
            <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20 pointer-events-none" />
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.15)_0%,transparent_70%)] blur-[160px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <Badge variant="outline" className="mb-8 border-primary/30 text-primary bg-primary/5 backdrop-blur-md px-4 py-1.5 text-sm rounded-full tracking-wide">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Algorytmiczna Optymalizacja Gry
                </Badge>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 max-w-5xl leading-[1.1]">
                    Przestań zgadywać. <br />
                    <span className="text-primary drop-shadow-[0_0_40px_rgba(204,255,0,0.25)]">Zacznij analizować.</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                    Wykorzystaj moc Big Data i zaawansowanych algorytmów prawdopodobieństwa, by zwiększyć swoje szanse w grach Totalizatora Sportowego. Analiza, nie przypadek.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg h-14 px-8 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] transition-all transform hover:scale-105 duration-300">
                        Sprawdź dzisiejsze predykcje
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <div className="text-sm text-muted-foreground/60 flex flex-col md:flex-row items-center gap-2 text-center">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span>Dołącz do <span className="text-foreground font-semibold">1 200</span> użytkowników</span>
                        </div>
                        <span className="hidden md:inline">-</span>
                        <span>optymalizujących swoje zakłady.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
