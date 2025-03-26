export interface Hotel {
  id: number;
  name: string;
  location: string;
  stars: number;
  rating: number;
  adults: number;
  children: number;
  date: string;
  nights: number;
  concept: string;
  price: number;
  image: string;
  categories: string[];
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Pine Beach Belek Side Royal Palace Hotel & Spa",
    location: "Belek, Turkey",
    stars: 5,
    rating: 4.8,
    adults: 2,
    children: 1,
    date: "25 July 2023",
    nights: 7,
    concept: "All inclusive plus/ultra",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Boutique Hotel", "Family Hotel"],
  },
  {
    id: 2,
    name: "Grand Oasis Resort",
    location: "Antalya, Turkey",
    stars: 4,
    rating: 4.5,
    adults: 2,
    children: 0,
    date: "30 July 2023",
    nights: 5,
    concept: "All inclusive",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Adult Hotel"],
  },
  {
    id: 3,
    name: "Blue Lagoon Luxury Resort",
    location: "Bodrum, Turkey",
    stars: 5,
    rating: 4.9,
    adults: 2,
    children: 2,
    date: "15 August 2023",
    nights: 10,
    concept: "Ultra all inclusive",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel", "Pet Friendly"],
  },
  {
    id: 4,
    name: "Sunshine Paradise Hotel",
    location: "Fethiye, Turkey",
    stars: 4,
    rating: 4.3,
    adults: 2,
    children: 0,
    date: "20 August 2023",
    nights: 6,
    concept: "Bed & Breakfast",
    price: 780,
    image:
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Boutique Hotel", "Adult Hotel"],
  },
  {
    id: 5,
    name: "Seaside Elegance Resort",
    location: "Marmaris, Turkey",
    stars: 5,
    rating: 4.7,
    adults: 2,
    children: 1,
    date: "10 September 2023",
    nights: 8,
    concept: "All inclusive",
    price: 1350,
    image:
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel"],
  },
];

export const destinations: string[] = [
  "Antalya",
  "Bodrum",
  "Istanbul",
  "Belek",
  "Marmaris",
  "Fethiye",
  "Alanya",
  "Side",
  "Kemer",
];

export const hotelConcepts: string[] = [
  "Beach Hotel",
  "Adult Hotel",
  "Boutique Hotel",
  "Family Hotel",
  "Pet Friendly",
];

export const popularDestinations: string[] = [
  "Antalya",
  "Bodrum",
  "Istanbul",
  "Alanya",
  "Marmaris",
];
