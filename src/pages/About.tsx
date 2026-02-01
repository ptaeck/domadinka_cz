import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Star, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every child with kindness, understanding, and respect.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "A secure, nurturing environment where children can thrive.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Encouraging imagination and self-expression in everything we do.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting friendships and a sense of belonging.",
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
              About Domadinka
            </h1>
            <p className="text-lg text-muted-foreground">
              Creating magical summer memories since 2010
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
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Domadinka z.s. began with a simple dream: to create a place where every child could experience the joy of summer. What started as a small community program has grown into a beloved institution serving hundreds of families each year.
                  </p>
                  <p>
                    Founded by a group of passionate educators and parents, we believed that every child deserves access to enriching summer experiences, regardless of their background. This belief continues to drive everything we do.
                  </p>
                  <p>
                    Today, we're proud to be a nonprofit organization dedicated to providing safe, fun, and educational summer programs that help children grow, learn, and make lifelong friends.
                  </p>
                </div>
              </div>
              <div className="bg-accent/50 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">15+ Years</p>
                  <p className="text-muted-foreground">of Summer Magic</p>
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
              Our Mission
            </h2>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              To provide a safe, inclusive, and joyful summer experience where children can explore their interests, develop new skills, build lasting friendships, and create cherished memories that inspire them throughout their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Domadinka
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
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals who make every summer special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
              What Children Can Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-sun rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fun Daily Activities</h3>
                    <p className="text-sm text-muted-foreground">From arts and crafts to sports and games, every day brings new adventures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-grass rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">New Friends</h3>
                    <p className="text-sm text-muted-foreground">Meet other kids, work together, and build friendships that last beyond summer.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-sky rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Caring Counselors</h3>
                    <p className="text-sm text-muted-foreground">Our trained staff provides guidance, support, and lots of encouragement.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Outdoor Exploration</h3>
                    <p className="text-sm text-muted-foreground">Discover nature, learn about the environment, and enjoy the fresh air.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-camp-earth rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Skill Building</h3>
                    <p className="text-sm text-muted-foreground">Learn new things, from swimming to crafting, and gain confidence along the way.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Unforgettable Memories</h3>
                    <p className="text-sm text-muted-foreground">Take home stories, projects, and memories that will be cherished forever.</p>
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
