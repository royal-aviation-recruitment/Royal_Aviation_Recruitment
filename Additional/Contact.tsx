import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're here to help you with your aviation career journey
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                    const email = "contact@royalaviationrecruitment.com";
                    const subject = "Inquiry - Royal Aviation Recruitment";
                    const body = "Hello,\n\nI would like to know more about your services.\n\nBest regards";
                    
                    if (!isMobile) {
                      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
                    } else {
                      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }
                  }}
                  className="text-muted-foreground hover:text-secondary transition-colors break-all cursor-pointer"
                >
                  contact@royalaviationrecruitment.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+917996881260"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  +91 7996881260
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Royal Aviation Recruitment<br />
                  Bangalore, India
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon–Fri: 9 AM – 6 PM<br />
                  Sat: 10 AM – 4 PM<br />
                  Sun: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Contact Card */}
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="bg-lightBg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Ready to Connect?</h2>
                <p className="text-center text-muted-foreground mb-4">
                  Whether you're a job seeker looking for your next aviation opportunity or an employer seeking top talent, we're here to help. Reach out to us via email or phone, and our team will respond promptly to discuss how we can assist you.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                      const email = "contact@royalaviationrecruitment.com";
                      const subject = "Inquiry - Royal Aviation Recruitment";
                      const body = "Hello,\n\nI would like to know more about your services.\n\nBest regards";
                      
                      if (!isMobile) {
                        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
                      } else {
                        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      }
                    }}
                    className="text-secondary hover:underline font-semibold cursor-pointer"
                  >
                    Send us an email →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
