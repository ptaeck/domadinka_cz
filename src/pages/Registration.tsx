import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, Users, DollarSign, CheckCircle, ExternalLink, Backpack, XCircle } from "lucide-react";
const sessions = [
  {
    name: "1. turnus",
    dates: "1. srpna – 8. srpna 2026",
    status: "Omezená místa",
    lead: "Ema Sosnová a Viktorie Sichingerová",
    formUrl: "https://forms.gle/v24UMBHWyaT2znqT8",
  },
  {
    name: "2. turnus",
    dates: "15. srpna – 22. srpna 2026",
    status: "Omezená místa",
    lead: "Ondřej Sosna a Tereza Pilná",
    formUrl: "https://forms.gle/s8mqmVr3HHih4FgV9",
  },
];
const whatToBring = [
  "Pohodlné oblečení na aktivity venku",
  "Uzavřené boty (tenisky doporučeny)",
  "Opalovací krém (SPF 30+)",
  "Klobouk nebo čepice",
  "Láhev na vodu",
  "Náhradní oblečení",
  "Batoh na výlet",
  "Spacák, polštář a plyšáka",
  "Repelent proti klíšťatům",
];
const forbiddenItems = ["Mobilní telefon", "Sladkosti", "Cennosti a šperky", "Ostré předměty (vytahovací nože, nůžky)"];
const faqs = [
  {
    question: "Jaký věk přijímáte?",
    answer:
      "Domadinka přijímá děti ve věku 7–14 let. Nerozdělujeme děti podle věku: Všechny děti jsou v několika smíšených skupinách, aby aktivity byly společné a podporovaly vzájemné učení.",
  },
  {
    question: "Jaká je provozní doba tábora?",
    answer: "Tábor probíhá od soboty do soboty v uvedeném termínu turnusu.",
  },
  {
    question: "Je oběd součástí?",
    answer: "Děti mají zajištěnou snídani, oběd a večeři a dvě svačiny během dne včetně celodenního pitného režimu.",
  },
  {
    question: "Jaký je poměr vedoucích a dětí?",
    answer:
      "Udržujeme poměr 1:3 (vedoucí:děti), abychom zajistili, že každé dítě dostane náležitou pozornost a individuální přístup.",
  },
  {
    question: "Co se děje, když prší?",
    answer:
      "Máme připraveno spoustu aktivit do interiéru na deštivé dny, včetně výtvarných činností nebo společenských her.",
  },
  {
    question: "Nabízíte slevy?",
    answer: "Ano! Nabízíme slevy pro sourozence.",
  },
  {
    question: "Jaká je vaše storno politika?",
    answer:
      "Plné vrácení peněz je možné do 30 dnů před začátkem turnusu. Poté je možné 50% vrácení do 14 dnů před turnusem. V období kratším než 14 dnů peníze nevracíme.",
  },
];
const Registration = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Přihláška</h1>
            <p className="text-lg text-muted-foreground">
              Zajistěte svému dítěti místo na nezapomenutelném letním dobrodružství!
            </p>
          </div>
        </div>
      </section>

      {/* Camp Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            <Card className="text-center border-2 border-border">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-camp-grass mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Věk</h3>
                <p className="text-muted-foreground">7–14 let</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-border">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-camp-sky mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">TERMÍN</h3>
                <p className="text-muted-foreground">od soboty do soboty</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-border">
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-camp-coral mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Délka</h3>
                <p className="text-muted-foreground">8 dní</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-border">
              <CardContent className="p-6">
                <DollarSign className="w-10 h-10 text-camp-sun mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Cena</h3>
                <p className="text-muted-foreground">4 900 Kč základní, 4 200 Kč sourozenec</p>
              </CardContent>
            </Card>
          </div>

          {/* Sessions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">LETNÍ TURNUSY 2026</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {sessions.map((session, index) => (
                <Card key={index} className="border-2 border-border hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-display text-lg flex items-center justify-between">
                      {session.name}
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${session.status === "Otevřeno" ? "bg-camp-grass/20 text-camp-grass" : "bg-camp-coral/20 text-camp-coral"}`}
                      >
                        {session.status}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {session.dates}
                    </p>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {session.lead}
                    </p>
                    <Button
                      size="sm"
                      className="gap-2 rounded-full w-full mt-2"
                      onClick={() => window.open(session.formUrl, "_blank")}
                    >
                      Vyplnit přihlášku
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Budete přesměrováni na přihlašovací formulář
            </p>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Backpack className="w-12 h-12 text-camp-earth mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">Co s sebou</h2>
              <p className="text-secondary-foreground/80">Ujistěte se, že je váš táborník připraven na celý týden!</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {whatToBring.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-background/50 rounded-lg px-4 py-3">
                  <CheckCircle className="w-5 h-5 text-camp-grass flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
              {forbiddenItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-background/50 rounded-lg px-4 py-3">
                  <XCircle className="w-5 h-5 text-camp-coral flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Často kladené otázky</h2>
              <p className="text-muted-foreground">Najděte odpovědi na běžné otázky o Domadince</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border-2 border-border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Registration;
