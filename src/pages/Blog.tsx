import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Community: How Small Acts Create Big Changes",
      excerpt: "Discover how individual contributions, no matter how small, can create ripple effects that transform entire communities. Read inspiring stories from our recent initiatives.",
      author: "Sarah Johnson",
      date: "2024-08-10",
      category: "Community Impact",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Education for All: Breaking Barriers in Remote Areas",
      excerpt: "Learn about our innovative approach to bringing quality education to children in remote and underserved areas through mobile learning centers and technology.",
      author: "Ahmed Hassan",
      date: "2024-08-05",
      category: "Education",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Healthcare Access: A Fundamental Right",
      excerpt: "Exploring the challenges and solutions in providing basic healthcare services to vulnerable populations and the impact of our medical outreach programs.",
      author: "Dr. Maria Rodriguez",
      date: "2024-08-01",
      category: "Healthcare",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Volunteer Spotlight: Meet Our Community Champions",
      excerpt: "Get to know the dedicated volunteers who are making a difference in their communities. Their stories will inspire you to get involved.",
      author: "Ehsaas Team",
      date: "2024-07-28",
      category: "Volunteers",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Development: Building for the Future",
      excerpt: "How we're implementing sustainable practices in all our projects to ensure long-term positive impact on communities and the environment.",
      author: "James Chen",
      date: "2024-07-25",
      category: "Sustainability",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "Annual Report: A Year of Impact and Growth",
      excerpt: "Reflecting on our achievements over the past year, the challenges we've overcome, and our vision for expanding our reach in the coming year.",
      author: "Leadership Team",
      date: "2024-07-20",
      category: "Reports",
      readTime: "10 min read",
      featured: false
    }
  ];

  const categories = ["All", "Community Impact", "Education", "Healthcare", "Volunteers", "Sustainability", "Reports"];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Community Impact": "bg-foundation-green",
      "Education": "bg-primary",
      "Healthcare": "bg-accent",
      "Volunteers": "bg-foundation-orange",
      "Sustainability": "bg-foundation-blue",
      "Reports": "bg-destructive"
    };
    return colors[category] || "bg-muted";
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-foundation-warm">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay updated with our latest stories, insights, and impact reports. 
            Discover the difference we're making together in communities around the world.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Featured Article</h2>
            </div>
            <Card className="shadow-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-warm p-12 flex items-center">
                  <div>
                    <Badge className={`${getCategoryColor(featuredPost.category)} text-white mb-4`}>
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-3xl font-bold text-primary mb-4">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="bg-gradient-primary hover:opacity-90">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 bg-muted flex items-center justify-center p-12">
                  <div className="text-center text-muted-foreground">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-12 w-12 text-primary" />
                    </div>
                    <p>Featured article image</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stories, insights, and updates from the field.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="shadow-card hover:shadow-lg transition-shadow duration-300 group">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm">Article image</p>
                  </div>
                </div>
                <CardHeader>
                  <Badge className={`${getCategoryColor(post.category)} text-white w-fit`}>
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-gradient-primary hover:opacity-90 shadow-soft px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter to receive the latest stories, updates, and insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;