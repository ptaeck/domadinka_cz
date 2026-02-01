import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, Users, DollarSign, CheckCircle, ExternalLink, Backpack } from "lucide-react";

const sessions = [
  {
    name: "Session 1",
    dates: "June 16 - June 27, 2025",
    status: "Open",
  },
  {
    name: "Session 2",
    dates: "June 30 - July 11, 2025",
    status: "Open",
  },
  {
    name: "Session 3",
    dates: "July 14 - July 25, 2025",
    status: "Open",
  },
  {
    name: "Session 4",
    dates: "July 28 - August 8, 2025",
    status: "Limited Spots",
  },
];

const whatToBring = [
  "Comfortable clothes for outdoor activities",
  "Closed-toe shoes (sneakers recommended)",
  "Sunscreen (SPF 30+)",
  "Hat or cap",
  "Reusable water bottle",
  "Packed lunch and snacks",
  "Change of clothes",
  "Small backpack",
];

const faqs = [
  {
    question: "What ages do you accept?",
    answer: "Sunny Camp welcomes children ages 5-12. We group campers by age to ensure activities are appropriate and engaging for everyone.",
  },
  {
    question: "What are the camp hours?",
    answer: "Camp runs from 8:30 AM to 4:00 PM, Monday through Friday. Early drop-off (7:30 AM) and late pickup (5:30 PM) are available for an additional fee.",
  },
  {
    question: "Is lunch provided?",
    answer: "Campers should bring their own packed lunch and snacks. We have a refrigerator and microwave available. Please note we are a nut-free facility.",
  },
  {
    question: "What is your counselor-to-camper ratio?",
    answer: "We maintain a 1:6 counselor-to-camper ratio to ensure every child receives proper attention and supervision.",
  },
  {
    question: "What happens if it rains?",
    answer: "We have plenty of indoor activities planned for rainy days, including arts and crafts, games, movies, and indoor sports in our gymnasium.",
  },
  {
    question: "Do you offer scholarships?",
    answer: "Yes! We offer need-based scholarships. Please contact us for more information about our scholarship program.",
  },
  {
    question: "Can I register for multiple sessions?",
    answer: "Absolutely! Many families register for multiple sessions. We offer a 10% discount for families registering for 2 or more sessions.",
  },
  {
    question: "What is your refund policy?",
    answer: "Full refunds are available up to 30 days before the session starts. After that, a 50% refund is available up to 14 days before. No refunds within 14 days of the session.",
  },
];

const Registration = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Registration
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Secure your child's spot for an unforgettable summer adventure!
            </p>
            <Button
              size="lg"
              className="gap-2 rounded-full px-8"
              onClick={() => window.open("https://forms.google.com", "_blank")}
            >
              Register Now
              <ExternalLink className="w-4 h-4" />
            </Button>
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
                <h3 className="font-display font-semibold text-foreground mb-1">Ages</h3>
                <p className="text-muted-foreground">5 - 12 years old</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-border">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-camp-sky mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">8:30 AM - 4:00 PM</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-border">
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-camp-coral mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Duration</h3>
                <p className="text-muted-foreground">2-week sessions</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-border">
              <CardContent className="p-6">
                <DollarSign className="w-10 h-10 text-camp-sun mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Price</h3>
                <p className="text-muted-foreground">$450 per session</p>
              </CardContent>
            </Card>
          </div>

          {/* Sessions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              2025 Summer Sessions
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {sessions.map((session, index) => (
                <Card key={index} className="border-2 border-border hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-display text-lg flex items-center justify-between">
                      {session.name}
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        session.status === "Open" 
                          ? "bg-camp-grass/20 text-camp-grass" 
                          : "bg-camp-coral/20 text-camp-coral"
                      }`}>
                        {session.status}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {session.dates}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Register CTA */}
            <div className="text-center mb-16">
              <Button
                size="lg"
                className="gap-2 rounded-full px-8"
                onClick={() => window.open("https://forms.google.com", "_blank")}
              >
                Complete Registration Form
                <ExternalLink className="w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                You'll be redirected to our secure registration form
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Backpack className="w-12 h-12 text-camp-earth mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
                What to Bring
              </h2>
              <p className="text-secondary-foreground/80">
                Make sure your camper is prepared for a great day!
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {whatToBring.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-background/50 rounded-lg px-4 py-3">
                  <CheckCircle className="w-5 h-5 text-camp-grass flex-shrink-0" />
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about Domadinka
            </p>
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
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
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
