interface Service {
  id: number;
  name: string;
  category: string;
  city: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Royal Wedding Photography",
    category: "Photography",
    city: "Patna",
    description: "Professional wedding photography with modern equipment and creative shots.",
    price: 25000,
    rating: 4.8,
    image: "https://picsum.photos/400/300?random=1"
  },
  {
    id: 2,
    name: "Elegant Events Decor",
    category: "Decoration",
    city: "Gaya",
    description: "Stunning event decorations for all occasions with premium materials.",
    price: 35000,
    rating: 4.7,
    image: "https://picsum.photos/400/300?random=2"
  },
  {
    id: 3,
    name: "Divine Catering Services",
    category: "Catering",
    city: "Muzaffarpur",
    description: "Multi-cuisine catering service with hygiene guarantee.",
    price: 45000,
    rating: 4.9,
    image: "https://picsum.photos/400/300?random=3"
  },
  {
    id: 4,
    name: "Beats & Rhythms",
    category: "Music",
    city: "Bhagalpur",
    description: "Professional DJ and live music band for all events.",
    price: 15000,
    rating: 4.6,
    image: "https://picsum.photos/400/300?random=4"
  }
];

export default services;