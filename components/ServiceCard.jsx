import Image from "next/image";

export default function ServiceCard({ item }) {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm bg-white">
      <div className="h-40 w-full bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          className="object-cover"
          width={400}
          height={160}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="p-3">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.category} · {item.city}</p>
        <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm font-medium">₹{item.price.toLocaleString()}</div>
          <div className="text-sm text-yellow-600">⭐ {item.rating}</div>
        </div>
      </div>
    </div>
  );
}
