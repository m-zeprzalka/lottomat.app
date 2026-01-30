import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { ProblemSolution } from "@/components/landing/ProblemSolution"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { Features } from "@/components/landing/Features"
import { Pricing } from "@/components/landing/Pricing"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <Header />

      {/* Real-time Ticker */}
      {/* Real-time Ticker */}
      <div className="fixed bottom-0 left-0 w-full bg-primary/10 backdrop-blur-md border-t border-primary/20 p-2 z-40 flex items-center justify-center text-xs md:text-sm font-mono text-primary gap-4 overflow-hidden">
        <span className="flex items-center animate-pulse"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>SYSTEM ONLINE</span>
        <span className="hidden lg:inline text-muted-foreground">|</span>
        <span className="hidden lg:inline">Ostatnia trafiona 'czwórka' przez algorytm: 2 godziny temu</span>
        <span className="hidden xl:inline text-muted-foreground">|</span>
        <span className="hidden xl:inline">Aktywni użytkownicy: 1,242</span>
      </div>

      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
