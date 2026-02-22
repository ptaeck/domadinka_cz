import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Users, Sparkles, TreePine, Palette, Music, ArrowRight, Star } from "lucide-react";
const features = [
{
  icon: TreePine,
  title: "Dobrodružství v přírodě",
  description: "Procházky přírodou, táborové dovednosti a objevování krás přírody."
},
{
  icon: Palette,
  title: "Výtvarné aktivity",
  description: "Kreativní projekty, které rozvíjí fantazii."
},
{
  icon: Music,
  title: "Hudba a představení",
  description: "Zpívání, tanec a společné vystupování."
},
{
  icon: Users,
  title: "Týmové aktivity",
  description: "Hry a aktivity, které budují přátelství a sebevědomí."
}];

const testimonials = [
{
  quote: "Dcera nemohla přestat o táboře mluvit celé týdny! Našla si spoustu nových kamarádů.",
  author: "Petra M.",
  role: "Rodič"
},
{
  quote: "Vedoucí jsou úžasní. Opravdu jim záleží na zážitku každého dítěte.",
  author: "Martin T.",
  role: "Rodič"
},
{
  quote: "Nejlepší léto ever! Naučil jsem se rozdělávat oheň a vyrobil jsem si super budku pro ptáky.",
  author: "Tomáš, 8 let",
  role: "Táborník"
}];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-camp-sun" />
              <span className="text-sm font-medium text-foreground">Přihlášky na léto 2026 spuštěny!</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Kde se každé <span className="text-camp-grass">léto</span> stává{" "}
              <span className="text-camp-coral">dobrodružstvím</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Připojte se k naší táborové komunitě, kde děti ve věku 7–14 let objevují, tvoří a rostou prostřednictvím letních aktivit v bezpečném a láskyplném prostředí.


            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full px-8 text-base">
                  Přihlásit se
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base">
                  Zjistit více
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Co dělá náš tábor výjimečným
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Každý den je příležitostí k objevování, přátelství a zábavě.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) =>
            <Card key={index} className="border-2 border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <feature.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Připraveni dopřát svému dítěti nezapomenutelné léto?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Místa se rychle plní! Zajistěte svému dítěti místo v Domadince ještě dnes a sledujte, jak vytváří
              vzpomínky na celý život.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full px-8">
                  Přihlásit se
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 bg-background/50">
                  Prohlédnout historii
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials
                     <section className="py-16 md:py-24">
                      <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Co říkají rodiny</h2>
                          <p className="text-muted-foreground">Poslechněte si naši úžasnou táborovou komunitu</p>
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                          {testimonials.map((testimonial, index) => <Card key={index} className="bg-card border-2 border-border">
                              <CardContent className="p-6">
                                <div className="flex gap-1 mb-4">
                                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-camp-sun text-camp-sun" />)}
                                </div>
                                <p className="text-foreground mb-4 italic">„{testimonial.quote}"</p>
                                <div>
                                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                              </CardContent>
                            </Card>)}
                        </div>
                      </div>
                     </section>*/
      }
    </Layout>);

};
export default Index;