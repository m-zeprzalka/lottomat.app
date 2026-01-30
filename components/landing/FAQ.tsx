import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto max-w-4xl px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        FAQ & Etyka
                    </h2>
                    <p className="text-muted-foreground">Najczęściej zadawane pytania</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b border-white/10">
                        <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors py-6">Czy Lottomat gwarantuje wygraną?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                            Nie. Każde losowanie jest zdarzeniem losowym. Nasza aplikacja służy do optymalizacji statystycznej i pomocy w wyborze liczb na podstawie danych historycznych, co zwiększa świadomość gracza, ale nie eliminuje elementu losowości. Traktuj to jako narzędzie analityczne, a nie wyrocznię.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-white/10">
                        <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors py-6">Jak działa algorytm?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                            Algorytm analizuje miliony historycznych wyników, szukając powtarzalnych wzorców (tzw. patternów), cykliczności liczb "zimnych" i "gorących" oraz anomalii statystycznych. Wykorzystujemy uczenie maszynowe, aby z każdym losowaniem system był coraz bardziej precyzyjny.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b border-white/10">
                        <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors py-6">Czy mogę zrezygnować w każdej chwili?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                            Tak, subskrypcja Premium jest odnawialna miesięcznie i możesz ją anulować w dowolnym momencie w ustawieniach konta. Po anulowaniu zachowasz dostęp do końca opłaconego okresu.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
