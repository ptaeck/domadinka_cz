import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Users, Sparkles, TreePine, Palette, Music, ArrowRight, Star } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Outdoor Adventures",
    description: "Nature walks, camping skills, and exploring the great outdoors.",
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "Creative projects that let imaginations run wild.",
  },
  {
    icon: Music,
    title: "Music & Performance",
    description: "Singing, dancing, and putting on shows together.",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Games and activities that build friendships and confidence.",
  },
];

const testimonials = [
  {
    quote: "My daughter couldn't stop talking about camp for weeks! She made so many new friends.",
    author: "Sarah M.",
    role: "Parent",
  },
  {
    quote: "The counselors are amazing. They really care about every child's experience.",
    author: "Michael T.",
    role: "Parent",
  },
  {
    quote: "Best summer ever! I learned to build a campfire and made a really cool birdhouse.",
    author: "Emma, age 8",
    role: "Camper",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-camp-sun" />
              <span className="text-sm font-medium text-foreground">Summer 2025 Registration Open!</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Where Every Child's{" "}
              <span className="text-camp-grass">Summer</span>{" "}
              Becomes an{" "}
              <span className="text-camp-coral">Adventure</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our loving community where children ages 5-12 explore, create, and grow through fun-filled summer activities in a safe, nurturing environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full px-8 text-base">
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base">
                  Learn More
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
              What Makes Camp Special
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every day is an opportunity for discovery, friendship, and fun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <feature.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Ready to Give Your Child an Unforgettable Summer?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Spots fill up quickly! Secure your child's place at Domadinka today and watch them make memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full px-8">
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 bg-background/50">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Families Say
            </h2>
            <p className="text-muted-foreground">
              Hear from our amazing camp community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-camp-sun text-camp-sun" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
