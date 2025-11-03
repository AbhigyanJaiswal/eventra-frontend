export default function ServicesLayout({ children }) {
  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Find Services</h1>
        <p className="text-sm text-gray-600">
          Search, filter, and explore wedding & event services.
        </p>
      </div>
      {children}
    </div>
  );
}
