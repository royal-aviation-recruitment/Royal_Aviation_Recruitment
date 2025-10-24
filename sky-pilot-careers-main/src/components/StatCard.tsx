import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="text-4xl font-bold text-secondary mb-2">{value}</div>
        <div className="text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
