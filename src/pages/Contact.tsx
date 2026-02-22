import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building2, Landmark, Tent } from "lucide-react";
import qrPlatba from "@/assets/qr-platba.jpg";

const contactInfo = [
  {
    icon: Phone,
    label: "Hlavní vedoucí (Turnus 1)",
    value: "+420 608 030 422\n+420 778 532 257",
    href: "tel:+420608030422",
  },
  {
    icon: Phone,
    label: "Hlavní vedoucí (Turnus 2)",
    value: "+420 724 299 459\n+420 606 926 732",
    href: "tel:+420724299459",
  },
  {
    icon: Tent,
    label: "Adresa táboru",
    value: "Domaslav 1\n349 53 Lestkov",
    href: "https://mapy.com/cs/zakladni?q=Domaslav%20čp%201",
  },
  {
    icon: MapPin,
    label: "Adresa spolku",
    value: "Sladkovského 2757/38\nVýchodní Předměstí, 326 00 Plzeň",
    href: "https://maps.google.com/?q=Sladkovského+2757/38,+Plzeň",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@domadinka.cz",
    href: "mailto:info@domadinka.cz",
  },
];

const organizationInfo = [
  {
    label: "Název subjektu",
    value: "Domadinka z.s.",
    href: "https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1286444&typ=UPLNY",
  },
  { label: "IČO", value: "235 12 911" },
];

const bankInfo = {
  bankName: "MONETA Money Bank, a.s.",
  accountNumber: "366 2752 811 / 0600",
  iban: "CZ21 0600 0000 0036 6275 2811",
  swift: "AGBACZPP",
};

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-camp-sky/20 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Kontakt</h1>
            <p className="text-lg text-muted-foreground">Máte otázky? Rádi se vám ozveme!</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Spojte se s námi</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === "Adresa" ? "_blank" : undefined}
                    rel={info.label === "Adresa" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border-2 border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <info.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Organization Info (VAT) */}
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-camp-grass" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Údaje o organizaci</h3>
                </div>
                <div className="space-y-3">
                  {organizationInfo.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <a href={item.href}>
                        <span className="text-foreground font-medium">{item.value}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bank Account */}
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Landmark className="w-6 h-6 text-camp-sky" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Bankovní účet</h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Banka</span>
                      <span className="text-foreground font-medium">{bankInfo.bankName}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Číslo účtu</span>
                      <span className="text-foreground font-medium">{bankInfo.accountNumber}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">IBAN</span>
                      <span className="text-foreground font-medium text-xs sm:text-sm">{bankInfo.iban}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">SWIFT/BIC</span>
                      <span className="text-foreground font-medium">{bankInfo.swift}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src={qrPlatba} alt="QR platba" className="w-32 h-32" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
