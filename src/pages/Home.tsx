import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const navigate = useNavigate();
  
  const stats = [
    { icon: Users, label: "Lives Impacted", value: "5,000+" },
    { icon: Heart, label: "Volunteers", value: "100+" },
    { icon: Target, label: "Projects Completed", value: "50+" },
    { icon: Award, label: "Awards Received", value: "10+" },
  ];

  const programs = [
    {
      title: "Education Support",
      description: "Providing quality education and learning resources to underprivileged children.",
      icon: "📚"
    },
    {
      title: "Healthcare Initiatives",
      description: "Ensuring access to basic healthcare services and medical support.",
      icon: "🏥"
    },
    {
      title: "Food Security",
      description: "Fighting hunger through food distribution and nutrition programs.",
      icon: "🍎"
    },
    {
      title: "Community Development",
      description: "Building sustainable communities through infrastructure and skill development.",
      icon: "🏘️"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Ehsaas Foundation helping communities" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Transforming Lives with <span className="text-foundation-orange">Ehsaas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Join us in creating positive change through compassion, support, and sustainable development programs that uplift communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-foundation-orange hover:bg-foundation-orange/90 text-white shadow-hero text-lg px-8 py-6">
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8 py-6"
              onClick={() => navigate('/gallery')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-foundation-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-soft">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ehsaas Foundation is dedicated to creating lasting positive change in communities around the world. 
              Through our comprehensive programs in education, healthcare, food security, and community development, 
              we work tirelessly to build a more equitable and compassionate society where everyone has the opportunity to thrive.
            </p>
            <Button className="bg-gradient-primary hover:opacity-90 shadow-soft">
              Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-foundation-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on four key areas to create maximum impact and sustainable change in the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-white shadow-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can help us reach more communities and create lasting positive change. 
            Join us in our mission to build a better world for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-foundation-orange hover:bg-foundation-orange/90 shadow-hero">
              Donate Today
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white hover:text-primary backdrop-blur-sm">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;