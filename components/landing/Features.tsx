import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Database, Calculator, Bell, Zap, Lock } from "lucide-react"

export function Features() {
    return (
        <section className="py-24 bg-muted/5">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Wszystko, czego potrzebuje <span className="text-primary">świadomy gracz</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Kompletny zestaw narzędzi analitycznych w jednej aplikacji.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureItem
                        icon={<Zap className="w-8 h-8 text-primary" />}
                        title="Predykcje Live"
                        desc="Generowane przed każdym losowaniem w oparciu o aktualny trend."
                    />
                    <FeatureItem
                        icon={<Database className="w-8 h-8 text-primary" />}
                        title="Archiwum i Statystyki"
                        desc="Pełny wgląd w historię zakładów, trafień naszych algorytmów oraz ich skuteczność."
                    />
                    <FeatureItem
                        icon={<Calculator className="w-8 h-8 text-primary" />}
                        title="Systemy Skrócone"
                        desc="Optymalizacja kosztów zakładów przy zachowaniu wysokich szans."
                    />
                    <FeatureItem
                        icon={<Bell className="w-8 h-8 text-primary" />}
                        title="Powiadomienia"
                        desc="Wyniki i nowe analizy wysyłane prosto na Twój telefon."
                    />
                </div>
            </div>
        </section>
    )
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <Card className="bg-white/5 border-white/5 hover:bg-white/10 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)] transition-all duration-300 group">
            <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <CardTitle className="text-xl text-white font-bold">{title}</CardTitle>
                <CardDescription className="text-base mt-2 text-muted-foreground leading-relaxed">{desc}</CardDescription>
            </CardHeader>
        </Card>
    )
}
