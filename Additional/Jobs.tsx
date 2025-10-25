import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import JobCard from "@/components/JobCard";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      title: "Aircraft Maintenance Engineer",
      location: "Bangalore, India",
      experience: "3+ years",
      description: "Perform routine and non-routine maintenance on aircraft systems.",
    },
    {
      title: "Aircraft Maintenance Technician",
      location: "Multiple locations",
      experience: "2+ years",
      description: "Connect with us to learn about openings for this role.",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviation Job Opportunities
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find your dream career in aviation
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-lightBg">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by Role / Keyword / Location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <JobCard
                  key={index}
                  title={job.title}
                  location={job.location}
                  experience={job.experience}
                  description={job.description}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No jobs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
