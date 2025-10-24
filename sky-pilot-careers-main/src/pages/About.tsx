import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted partner in aviation recruitment
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Royal Aviation Recruitment is a specialized recruitment firm dedicated to connecting top aviation talent with leading organizations worldwide. With deep industry expertise and an extensive network, we bridge the gap between skilled professionals and premier opportunities in the aviation and aerospace sectors.
              </p>
              <p>
                Our team comprises seasoned recruiters with comprehensive knowledge of the aviation industry, enabling us to understand both employer needs and candidate aspirations. We pride ourselves on our ability to match the right talent with the right opportunity, ensuring mutual success and long-term partnerships.
              </p>
              <p>
                From pilots and engineers to ground staff and management professionals, we cover the entire spectrum of aviation careers. Our commitment to excellence, integrity, and personalized service has made us a trusted name in aviation recruitment across multiple countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 bg-lightBg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the leading aviation recruitment partner globally, connecting exceptional talent with outstanding opportunities while maintaining the highest standards of professionalism, integrity, and service excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Industry experts with decades of combined experience in aviation recruitment. Our team's deep understanding of the sector ensures precise matches between candidates and employers, backed by personalized support throughout the hiring process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Integrity, excellence, and reliability form the foundation of everything we do. We are committed to transparent communication, ethical practices, and delivering results that exceed expectations for both clients and candidates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Our Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Partnered with leading airlines, MROs, aerospace manufacturers, and aviation service providers across 6+ countries. Our extensive network opens doors to exclusive opportunities and ensures access to the best talent in the industry.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
