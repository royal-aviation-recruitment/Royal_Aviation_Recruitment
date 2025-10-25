import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadResume = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    applyingFor: "",
    company: "",
    notice: "",
    cover: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const email = "contact@royalaviationrecruitment.com";
    const subject = "Resume Submission";
    const body = `
Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Experience: ${formData.experience}
Applying For (Job Role): ${formData.applyingFor}
Current Company: ${formData.company}
Notice Period: ${formData.notice}
Cover Message: ${formData.cover}

Please attach your resume before sending.
`;

    if (!isMobile) {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    } else {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    
    toast({
      title: "Opening Gmail",
      description: "Please attach your resume before sending the email.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Submit Your Resume
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take the first step towards your aviation career
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Upload className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Ready to Join the Aviation Industry?</CardTitle>
              <CardDescription className="text-base mt-2">
                Fill in your details below and we'll help you find the perfect opportunity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Column 1 */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 1234567890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="City, Country"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="experience">Experience (Years)</Label>
                      <Input
                        id="experience"
                        name="experience"
                        type="text"
                        placeholder="e.g., 3+ years"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="applyingFor">Applying For (Job Role)</Label>
                      <Input
                        id="applyingFor"
                        name="applyingFor"
                        type="text"
                        placeholder="e.g., Aircraft Maintenance Engineer"
                        value={formData.applyingFor}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Current Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Current employer"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="notice">Notice Period</Label>
                      <Input
                        id="notice"
                        name="notice"
                        type="text"
                        placeholder="e.g., Immediate, 30 days"
                        value={formData.notice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Full Width Cover Message */}
                <div>
                  <Label htmlFor="cover">Cover Message (Optional)</Label>
                  <Textarea
                    id="cover"
                    name="cover"
                    placeholder="Tell us about yourself and why you're interested in aviation careers..."
                    value={formData.cover}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  Submit Resume
                </Button>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">What happens next?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Gmail will open with all your details pre-filled</li>
                    <li>• Attach your resume (PDF or Word format preferred)</li>
                    <li>• Send the email to complete your submission</li>
                    <li>• Our team will review and contact you within 2-3 business days</li>
                  </ul>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default UploadResume;
