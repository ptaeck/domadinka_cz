import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Star, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Soucit",
    description: "Ke každému dítěti přistupujeme s laskavostí, porozuměním a respektem.",
  },
  {
    icon: Shield,
    title: "Bezpečnost",
    description: "Bezpečné a pečující prostředí, kde děti mohou prospívat.",
  },
  {
    icon: Sparkles,
    title: "Kreativita",
    description: "Podporujeme fantazii a sebevyjádření ve všem, co děláme.",
  },
  {
    icon: Users,
    title: "Komunita",
    description: "Budujeme trvalá přátelství a pocit sounáležitosti.",
  },
];

const team = [
  { name: "Tereza Pilná", email: "tereza.pilna@domadinka.cz" },
  { name: "Jan Šíp", email: "jan.sip@domadinka.cz" },
  { name: "Kryštof Kunc", email: "krystof.kunc@domadinka.cz" },
  { name: "Ondřej Sosna", email: "ondrej.sosna@domadinka.cz" },
  { name: "Ema Sosnová", email: "ema.sosnova@domadinka.cz" },
  { name: "Viktorie Sichingerová", email: "viktorie.sichingerova@domadinka.cz" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              O Domadince
            </h1>
            <p className="text-lg text-muted-foreground">
              Vytváříme kouzelné letní vzpomínky od roku 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Náš příběh
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Domadinka z.s. začala s jednoduchým snem: vytvořit místo, kde každé dítě může zažít radost z léta. Co začalo jako malý komunitní program, vyrostlo v oblíbenou instituci, která každý rok slouží stovkám rodin.
                  </p>
                  <p>
                    Založena skupinou nadšených pedagogů a rodičů, věřili jsme, že každé dítě si zaslouží přístup k obohacujícím letním zážitkům bez ohledu na své zázemí. Toto přesvědčení nadále pohání vše, co děláme.
                  </p>
                  <p>
                    Dnes jsme hrdí na to, že jsme nezisková organizace zaměřená na poskytování bezpečných, zábavných a vzdělávacích letních programů, které pomáhají dětem růst, učit se a navazovat přátelství na celý život.
                  </p>
                </div>
              </div>
              <div className="bg-accent/50 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">15+ let</p>
                  <p className="text-muted-foreground">letní magie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-12 h-12 text-camp-grass mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Naše mise
            </h2>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Poskytovat bezpečný, inkluzivní a radostný letní zážitek, kde děti mohou objevovat své zájmy, rozvíjet nové dovednosti, budovat trvalá přátelství a vytvářet vzpomínky, které je budou inspirovat po celý život.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Naše hodnoty
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tyto základní principy vedou vše, co v Domadince děláme
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-2 border-border">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-camp-sky" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Poznejte náš tým
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oddaní profesionálové, kteří dělají každé léto výjimečným
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-2 border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-camp-sky to-camp-grass rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-sm text-muted-foreground hover:text-camp-sky transition-colors mt-1 block"
                  >
                    {member.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Co mohou děti očekávat
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-sun rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Zábavné denní aktivity</h3>
                    <p className="text-sm text-muted-foreground">Od výtvarných aktivit po sporty a hry – každý den přináší nová dobrodružství.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-grass rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Noví kamarádi</h3>
                    <p className="text-sm text-muted-foreground">Seznámí se s dalšími dětmi, spolupracují a budují přátelství, která přetrvají i po létě.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-sky rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Pečující vedoucí</h3>
                    <p className="text-sm text-muted-foreground">Náš vyškolený tým poskytuje vedení, podporu a spoustu povzbuzení.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Objevování přírody</h3>
                    <p className="text-sm text-muted-foreground">Poznávají přírodu, učí se o životním prostředí a užívají si čerstvý vzduch.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-earth rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Rozvoj dovedností</h3>
                    <p className="text-sm text-muted-foreground">Učí se nové věci, od plavání po tvoření, a získávají sebevědomí.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Nezapomenutelné vzpomínky</h3>
                    <p className="text-sm text-muted-foreground">Odnášejí si domů příběhy, výrobky a vzpomínky, které budou navždy cenit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
