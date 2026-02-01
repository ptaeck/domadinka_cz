import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building2, Landmark } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Hlavní vedoucí 1",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
  },
  {
    icon: Phone,
    label: "Hlavní vedoucí 2",
    value: "(123) 456-7891",
    href: "tel:+1234567891",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@domadinka.cz",
    href: "mailto:info@domadinka.cz",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Sladkovského 2757/38\nVýchodní Předměstí, 326 00 Plzeň",
    href: "https://maps.google.com/?q=Sladkovského+2757/38,+Plzeň",
  },
];

const organizationInfo = [
  { label: "IČO", value: "12345678" },
  { label: "DIČ", value: "CZ12345678" },
];

const bankInfo = {
  bankName: "Česká spořitelna",
  accountNumber: "123456789/0800",
  iban: "CZ65 0800 0000 0001 2345 6789",
  swift: "GIBACZPX",
};

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-camp-sky/20 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Get in Touch
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === "Address" ? "_blank" : undefined}
                    rel={info.label === "Address" ? "noopener noreferrer" : undefined}
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
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Organization Details
                  </h3>
                </div>
                <div className="space-y-3">
                  {organizationInfo.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="text-foreground font-medium">{item.value}</span>
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
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Bank Account
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bank</span>
                    <span className="text-foreground font-medium">{bankInfo.bankName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Account Number</span>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
