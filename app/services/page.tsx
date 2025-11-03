import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6 text-primary">Available Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} item={service} />
        ))}
      </div>
    </div>
  );
}