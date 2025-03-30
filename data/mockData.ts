// src/data/mockData.ts

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

// Yeni Flight arayüzü - HotelCard ile uyumlu olacak şekilde
export interface Flight {
  id: number;
  name: string;        // uçuş firmasının ismi
  location: string;    // uçuş yapılacak şehir,ülke
  stars: number;       // yıldız sayısı (havayolu firmasının)
  rating: number;      // puanlama
  adults: number;      // kişi sayısı (yetişkin)
  children: number;    // kişi sayısı (çocuk)
  date: string;        // uçuş tarih bilgisi
  nights: number;      // uçuş süresi (saat) - HotelCard ile uyumlu olması için nights alanını kullanıyoruz
  concept: string;     // uçuş türü - HotelCard ile uyumlu olması için concept alanını kullanıyoruz
  price: number;       // fiyat bilgisi
  image: string;       // resim (uçak resmi)
  categories: string[]; // kategoriler
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
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel"],
  },
];

// Yeni Uçuş Verileri
export const flights: Flight[] = [
  {
    id: 1,
    name: "Turkish Airlines",
    location: "Istanbul, Turkey",
    stars: 5,
    rating: 4.8,
    adults: 2,
    children: 1,
    date: "28 July 2023",
    nights: 4, // Uçuş süresi 4 saat
    concept: "Direct Flight", // Uçuş türü
    price: 450,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    categories: ["Economy Class", "Refundable", "International"],
  },
  {
    id: 2,
    name: "Lufthansa",
    location: "Frankfurt, Germany",
    stars: 4,
    rating: 4.5,
    adults: 2,
    children: 0,
    date: "3 August 2023",
    nights: 6, // Uçuş süresi 6 saat
    concept: "One Stop", // Uçuş türü
    price: 520,
    image:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    categories: ["Business Class", "Non-refundable", "International"],
  },
  {
    id: 3,
    name: "Emirates",
    location: "Dubai, UAE",
    stars: 5,
    rating: 4.9,
    adults: 2,
    children: 2,
    date: "15 August 2023",
    nights: 8, // Uçuş süresi 8 saat
    concept: "Direct Flight", // Uçuş türü
    price: 780,
    image:
      "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    categories: ["First Class", "Refundable", "International"],
  },
  {
    id: 4,
    name: "Pegasus Airlines",
    location: "Antalya, Turkey",
    stars: 3,
    rating: 4.1,
    adults: 2,
    children: 0,
    date: "20 August 2023",
    nights: 2, // Uçuş süresi 2 saat
    concept: "Direct Flight", // Uçuş türü
    price: 280,
    image:
      "https://images.unsplash.com/photo-1608023136037-626dad6c6188?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    categories: ["Economy Class", "Low Cost", "Domestic"],
  },
  {
    id: 5,
    name: "Qatar Airways",
    location: "Doha, Qatar",
    stars: 5,
    rating: 4.7,
    adults: 2,
    children: 1,
    date: "10 September 2023",
    nights: 7, // Uçuş süresi 7 saat
    concept: "One Stop", // Uçuş türü
    price: 650,
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    categories: ["Business Class", "Refundable", "International"],
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

export const flightTypes: string[] = [
  "Direct Flight",
  "One Stop",
  "Multiple Stops",
  "Red-eye Flight",
  "Charter Flight",
];

export const flightCategories: string[] = [
  "Economy Class",
  "Business Class",
  "First Class",
  "Premium Economy",
  "Refundable",
  "Non-refundable",
  "Domestic",
  "International",
  "Low Cost",
];

export const popularDestinations: string[] = [
  "Antalya",
  "Bodrum",
  "Istanbul",
  "Alanya",
  "Marmaris",
];