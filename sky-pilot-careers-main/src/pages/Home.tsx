import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import JobCard from "@/components/JobCard";
import { Users, TrendingUp, Target, Wrench, Plane, Settings, Shield, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpeg";
import hongKongPoster from "@/assets/hong-kong-poster.jpeg";


const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
            Launch Your Aviation Career with Royal Aviation Recruitment
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Connecting pilots, engineers, and aviation experts with global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/jobs">Find Jobs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/upload-resume">Upload Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Updates & Announcements Section */}
<section className="py-20 bg-lightBg">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Latest Updates & Announcements
      </h2>
      <p className="text-lg text-muted-foreground">
        Stay informed about our latest recruitment drives and opportunities
      </p>
    </div>
    {/* New Themed CTA Section Below Header */}
<section className="py-2 bg-lightBg">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto bg-[rgb(26,40,61)] rounded-lg shadow-md p-8">
      
      {/* CTA Content */}
      <div className="text-center text-white">
        <p className="text-xl md:text-2xl font-semibold mb-6">
          Explore new career opportunities today
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/announcements"
            className="bg-white text-[rgb(26,40,61)] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
          >
            Check Out Updates
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

    
  </div>
</section>


      {/* Recruitment Services */}
      <section className="py-2 bg-lightBg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Recruitment Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Users}
              title="General Hiring"
              description="Efficient recruitment for aviation and aerospace roles."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Mass Hiring"
              description="Bulk and fast-track recruitment for large teams."
            />
            <ServiceCard
              icon={Target}
              title="Executive Search"
              description="Leadership & senior management placements."
            />
            <ServiceCard
              icon={Wrench}
              title="Technical Recruitment"
              description="Avionics, MRO, engineering & flight operations roles."
            />
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industry Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <Plane className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Airlines</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <Settings className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Maintenance (MRO)</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Aerospace</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Defense</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-lightBg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="6+" label="Countries Served" />
            <StatCard value="15+" label="Active Clients" />
            <StatCard value="1k+" label="Candidates Placed" />
            <StatCard value="95%" label="Placement Satisfaction" />
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Aviation Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <JobCard
              title="Aircraft Maintenance Engineer"
              location="Bangalore, India"
              experience="3+ years"
              description="Perform routine and non-routine maintenance on aircraft systems."
            />
            <JobCard
              title="Aircraft Maintenance Technician"
              location="Multiple locations"
              experience="2+ years"
              description="Connect with us to learn about openings for this role."
            />
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-lightBg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Candidates Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 italic">
                  "ROYAL Aviation placed me in a dream role at a leading airline within two weeks!"
                </p>
                <p className="font-semibold">— Rahul S., Aircraft Engineer</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 italic">
                  "Professional, efficient, and truly understands the aviation industry. Highly recommended!"
                </p>
                <p className="font-semibold">— Priya M., Avionics Technician</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 italic">
                  "The team's expertise and network helped me find the perfect match for my skills."
                </p>
                <p className="font-semibold">— Arjun K., Flight Operations Manager</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
