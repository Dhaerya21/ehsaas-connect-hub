import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "2024-09-15",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom, Unity Hotel",
      description: "Join us for an elegant evening of fundraising, featuring dinner, live music, and inspiring stories from our beneficiaries.",
      type: "Fundraising",
      attendees: "200+",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Community Health Fair",
      date: "2024-08-20",
      time: "9:00 AM - 4:00 PM",
      location: "Community Center Park",
      description: "Free health screenings, medical consultations, and wellness workshops for the entire community.",
      type: "Healthcare",
      attendees: "500+",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Back-to-School Supply Drive",
      date: "2024-08-25",
      time: "10:00 AM - 3:00 PM",
      location: "Ehsaas Foundation Office",
      description: "Help us collect and distribute school supplies to children in need. Volunteers welcome!",
      type: "Education",
      attendees: "100+",
      status: "upcoming"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Summer Food Distribution",
      date: "2024-07-10",
      time: "8:00 AM - 2:00 PM",
      location: "Multiple Locations",
      description: "Successfully distributed food packages to 500+ families during our summer relief program.",
      type: "Community Support",
      attendees: "500+",
      status: "completed"
    },
    {
      id: 5,
      title: "Skills Development Workshop",
      date: "2024-06-28",
      time: "2:00 PM - 6:00 PM",
      location: "Training Center",
      description: "Provided vocational training in computer skills and digital literacy to 75 participants.",
      type: "Training",
      attendees: "75",
      status: "completed"
    },
    {
      id: 6,
      title: "Youth Leadership Summit",
      date: "2024-06-15",
      time: "9:00 AM - 5:00 PM",
      location: "University Auditorium",
      description: "Empowered young leaders with workshops on leadership, communication, and community engagement.",
      type: "Youth",
      attendees: "150",
      status: "completed"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Fundraising": "bg-foundation-orange",
      "Healthcare": "bg-accent",
      "Education": "bg-primary",
      "Community Support": "bg-foundation-green",
      "Training": "bg-foundation-blue",
      "Youth": "bg-destructive"
    };
    return colors[type] || "bg-muted";
  };

  const EventCard = ({ event, isPast = false }: { event: any, isPast?: boolean }) => (
    <Card className="shadow-card hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={`${getTypeColor(event.type)} text-white`}>
            {event.type}
          </Badge>
          {!isPast && (
            <Badge variant="outline" className="text-accent border-accent">
              Upcoming
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {event.attendees} attendees
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {event.description}
        </p>
        {!isPast && (
          <Button className="w-full bg-gradient-primary hover:opacity-90">
            Register Now
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-foundation-warm">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join us in our mission to create positive change. Discover upcoming events, 
            volunteer opportunities, and ways to get involved in our community initiatives.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these exciting opportunities to make a difference in your community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Past Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent successful events and their impact on the community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Event Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm opacity-90">Events Organized</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25,000+</div>
              <div className="text-sm opacity-90">People Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5,000+</div>
              <div className="text-sm opacity-90">Volunteers Engaged</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$500K+</div>
              <div className="text-sm opacity-90">Funds Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foundation-light-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Want to Host an Event?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to organize impactful community events. We provide support, 
            resources, and expertise to make your event successful.
          </p>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-soft px-8">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;