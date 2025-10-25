import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/upload-resume" className="hover:text-accent transition-colors">
                  Upload Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
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
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  contact@royalaviationrecruitment.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+917996881260" className="hover:text-accent transition-colors">
                  +91 7996881260
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/royal-aviation-recruitment"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/royal_aviation_recruitment/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582817786500"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/917996881260?text=Hello%20Team%20Royal%20Aviation%20Recruitment,%20I%20want%20to%20know%20more%20about%20career%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                  const message = "Hello%20Team%20Royal%20Aviation%20Recruitment,%20I%20want%20to%20know%20more%20about%20career%20opportunities.";
                  const url = isMobile 
                    ? `https://api.whatsapp.com/send?phone=917996881260&text=${message}`
                    : `https://web.whatsapp.com/send?phone=917996881260&text=${message}`;
                  window.open(url, '_blank');
                }}
                className="hover:text-accent transition-colors cursor-pointer"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>© 2025 ROYAL AVIATION RECRUITMENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
