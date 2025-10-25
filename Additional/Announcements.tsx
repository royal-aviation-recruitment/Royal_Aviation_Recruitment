import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import hongKongPoster from "@/assets/hong-kong-poster.jpeg";

interface Announcement {
  id: number;
  title: string;
  date: string;
  poster: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "Walk-in Drive in Bangalore for Hong Kong",
    date: "29-30 November",
    poster: hongKongPoster,
  },
  // Add more announcements here by duplicating this object
];

const Announcements = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Updates & Announcements
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay updated with our latest job opportunities and recruitment events
          </p>
        </div>
      </section>

      {/* Announcements Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {announcements.map((announcement) => (
              <Card 
                key={announcement.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <img
                    src={announcement.poster}
                    alt={announcement.title}
                    className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    onClick={() => setSelectedPoster(announcement.poster)}
                  />
                  <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
                  <p className="text-muted-foreground mb-4">{announcement.date}</p>
                  <Button
                    onClick={() => setSelectedPoster(announcement.poster)}
                    className="w-full"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={!!selectedPoster} onOpenChange={() => setSelectedPoster(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-4 bg-background/95 backdrop-blur-sm border shadow-2xl">
          <div className="relative flex items-center justify-center">
            <DialogClose className="absolute top-2 right-2 bg-background rounded-full p-2 hover:bg-accent transition-colors z-50 shadow-md">
              <X className="h-5 w-5" />
            </DialogClose>
            <img
              src={selectedPoster || ""}
              alt="Announcement Details"
              className="max-w-full max-h-[80vh] w-auto h-auto rounded-lg object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Announcements;
