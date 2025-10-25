import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase } from "lucide-react";

interface JobCardProps {
  title: string;
  location: string;
  experience: string;
  description: string;
}

const JobCard = ({ title, location, experience, description }: JobCardProps) => {
  const handleApply = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const email = "contact@royalaviationrecruitment.com";
    const subject = `Application for ${title}`;
    const body = `Hello,\n\nI would like to apply for the following position:\n\nRole: ${title}\nLocation: ${location}\nExperience Required: ${experience}\n\nPlease find my resume attached.\n\nBest regards`;
    
    if (!isMobile) {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    } else {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex flex-col gap-2 mt-2">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {location}
          </span>
          <span className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            {experience}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleApply} className="w-full">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
