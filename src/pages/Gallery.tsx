import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import galleryImage1 from "@/assets/gallery-1.jpg";
import galleryImage2 from "@/assets/gallery-2.jpg";
import galleryImage3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: galleryImage1,
      title: "Food Distribution Drive",
      description: "Volunteers distributing essential food supplies to families in need during our monthly community outreach program.",
      category: "Community Support"
    },
    {
      id: 2,
      image: galleryImage2,
      title: "Education Support Program",
      description: "Teaching and mentoring children in our after-school learning center, providing them with quality education and guidance.",
      category: "Education"
    },
    {
      id: 3,
      image: galleryImage3,
      title: "Community Fundraiser Event",
      description: "Annual fundraising event bringing together supporters and volunteers to raise funds for various community projects.",
      category: "Events"
    },
    {
      id: 4,
      image: galleryImage1,
      title: "Healthcare Initiative",
      description: "Free medical checkup camp organized in partnership with local healthcare providers for underprivileged communities.",
      category: "Healthcare"
    },
    {
      id: 5,
      image: galleryImage2,
      title: "Skills Development Workshop",
      description: "Vocational training workshop helping community members develop practical skills for better employment opportunities.",
      category: "Training"
    },
    {
      id: 6,
      image: galleryImage3,
      title: "Youth Empowerment Program",
      description: "Engaging with young people through mentorship programs and leadership development activities.",
      category: "Youth"
    }
  ];

  const categories = ["All", "Community Support", "Education", "Events", "Healthcare", "Training", "Youth"];

  return (
    <div className="min-h-screen bg-foundation-warm">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Witness the impact of our work through these moments captured during our various programs and initiatives. 
            Each image tells a story of hope, compassion, and positive change.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gradient-primary" : ""}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-gradient-primary hover:opacity-90 shadow-soft px-8">
              Load More Images
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm opacity-90">Photos Captured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm opacity-90">Events Documented</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm opacity-90">Stories Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm opacity-90">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;