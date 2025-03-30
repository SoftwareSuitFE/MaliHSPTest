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
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel"],
  },
  {
    id: 6,
    name: "Crystal Waters Deluxe Hotel",
    location: "Alanya, Turkey",
    stars: 5,
    rating: 4.6,
    adults: 2,
    children: 2,
    date: "5 August 2023",
    nights: 9,
    concept: "Ultra all inclusive",
    price: 1550,
    image:
      "https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel", "Spa Resort"],
  },
  {
    id: 7,
    name: "Golden Bay Resort & Spa",
    location: "Side, Turkey",
    stars: 4,
    rating: 4.4,
    adults: 2,
    children: 0,
    date: "12 August 2023",
    nights: 6,
    concept: "All inclusive",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Adult Hotel", "Honeymoon Resort"],
  },
  {
    id: 8,
    name: "Mediterranean Pearl Hotel",
    location: "Kemer, Turkey",
    stars: 5,
    rating: 4.8,
    adults: 2,
    children: 1,
    date: "18 August 2023",
    nights: 7,
    concept: "All inclusive",
    price: 1300,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel", "Water Park Resort"],
  },
  {
    id: 9,
    name: "Royal Ottoman Palace",
    location: "Istanbul, Turkey",
    stars: 5,
    rating: 4.9,
    adults: 2,
    children: 0,
    date: "22 August 2023",
    nights: 5,
    concept: "Bed & Breakfast",
    price: 1450,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["City Hotel", "Boutique Hotel", "Historical Hotel"],
  },
  {
    id: 10,
    name: "Emerald Coast Hotel",
    location: "Bodrum, Turkey",
    stars: 4,
    rating: 4.5,
    adults: 2,
    children: 1,
    date: "25 August 2023",
    nights: 8,
    concept: "Half board",
    price: 1150,
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel", "Golf Resort"],
  },
  {
    id: 11,
    name: "Azure Bay Hotel & Spa",
    location: "Fethiye, Turkey",
    stars: 5,
    rating: 4.7,
    adults: 2,
    children: 0,
    date: "1 September 2023",
    nights: 10,
    concept: "All inclusive plus/ultra",
    price: 1680,
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Adult Hotel", "Eco-friendly Resort"],
  },
  {
    id: 12,
    name: "Mountain View Retreat",
    location: "Cappadocia, Turkey",
    stars: 4,
    rating: 4.6,
    adults: 2,
    children: 0,
    date: "5 September 2023",
    nights: 4,
    concept: "Bed & Breakfast",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Boutique Hotel", "Cave Hotel", "Romantic Resort"],
  },
  {
    id: 13,
    name: "Turquoise Coast Luxury Resort",
    location: "Oludeniz, Turkey",
    stars: 5,
    rating: 4.8,
    adults: 2,
    children: 2,
    date: "9 September 2023",
    nights: 7,
    concept: "Ultra all inclusive",
    price: 1750,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel", "Adventure Resort"],
  },
  {
    id: 14,
    name: "Sultan's Garden Hotel",
    location: "Antalya, Turkey",
    stars: 4,
    rating: 4.3,
    adults: 2,
    children: 1,
    date: "15 September 2023",
    nights: 6,
    concept: "All inclusive",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1581859814481-bfd944e3122f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Family Hotel", "Theme Park Resort"],
  },
  {
    id: 15,
    name: "Aegean Pearl Boutique Hotel",
    location: "Cesme, Turkey",
    stars: 5,
    rating: 4.9,
    adults: 2,
    children: 0,
    date: "20 September 2023",
    nights: 5,
    concept: "Half board",
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Beach Hotel", "Boutique Hotel", "Wellness Resort"],
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
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1608023136037-626dad6c6188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Business Class", "Refundable", "International"],
  },
  {
    id: 6,
    name: "British Airways",
    location: "London, UK",
    stars: 4,
    rating: 4.6,
    adults: 2,
    children: 0,
    date: "5 August 2023",
    nights: 5, // Uçuş süresi 5 saat
    concept: "Direct Flight", // Uçuş türü
    price: 580,
    image:
      "https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Premium Economy", "Refundable", "International"],
  },
  {
    id: 7,
    name: "Singapore Airlines",
    location: "Singapore",
    stars: 5,
    rating: 4.9,
    adults: 2,
    children: 1,
    date: "12 August 2023",
    nights: 12, // Uçuş süresi 12 saat
    concept: "One Stop", // Uçuş türü
    price: 950,
    image:
      "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["First Class", "Refundable", "International", "Long Haul"],
  },
  {
    id: 8,
    name: "Air France",
    location: "Paris, France",
    stars: 4,
    rating: 4.5,
    adults: 2,
    children: 0,
    date: "18 August 2023",
    nights: 4, // Uçuş süresi 4 saat
    concept: "Direct Flight", // Uçuş türü
    price: 510,
    image:
      "https://images.unsplash.com/photo-1533201357341-8d79b10dd0f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Business Class", "Refundable", "International"],
  },
  {
    id: 9,
    name: "Anadolu Jet",
    location: "Izmir, Turkey",
    stars: 3,
    rating: 4.0,
    adults: 1,
    children: 0,
    date: "22 August 2023",
    nights: 1, // Uçuş süresi 1 saat
    concept: "Direct Flight", // Uçuş türü
    price: 150,
    image:
      "https://images.unsplash.com/photo-1525624286412-4099c83c1bc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Economy Class", "Low Cost", "Domestic"],
  },
  {
    id: 10,
    name: "Etihad Airways",
    location: "Abu Dhabi, UAE",
    stars: 5,
    rating: 4.7,
    adults: 2,
    children: 2,
    date: "25 August 2023",
    nights: 9, // Uçuş süresi 9 saat
    concept: "One Stop", // Uçuş türü
    price: 820,
    image:
      "https://images.unsplash.com/photo-1631807719683-25f08bb2e296?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Business Class", "Refundable", "International", "Long Haul"],
  },
  {
    id: 11,
    name: "KLM Royal Dutch",
    location: "Amsterdam, Netherlands",
    stars: 4,
    rating: 4.6,
    adults: 2,
    children: 0,
    date: "1 September 2023",
    nights: 5, // Uçuş süresi 5 saat
    concept: "Direct Flight", // Uçuş türü
    price: 560,
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Premium Economy", "Refundable", "International"],
  },
  {
    id: 12,
    name: "SunExpress",
    location: "Antalya, Turkey",
    stars: 3,
    rating: 4.2,
    adults: 2,
    children: 1,
    date: "5 September 2023",
    nights: 3, // Uçuş süresi 3 saat
    concept: "Direct Flight", // Uçuş türü
    price: 320,
    image:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Economy Class", "Charter Flight", "Seasonal"],
  },
  {
    id: 13,
    name: "Japan Airlines",
    location: "Tokyo, Japan",
    stars: 5,
    rating: 4.8,
    adults: 2,
    children: 0,
    date: "10 September 2023",
    nights: 14, // Uçuş süresi 14 saat
    concept: "Multiple Stops", // Uçuş türü
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1713763539964-443b76028c9c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["First Class", "Refundable", "International", "Long Haul"],
  },
  {
    id: 14,
    name: "Delta Airlines",
    location: "New York, USA",
    stars: 4,
    rating: 4.5,
    adults: 2,
    children: 1,
    date: "15 September 2023",
    nights: 11, // Uçuş süresi 11 saat
    concept: "Direct Flight", // Uçuş türü
    price: 980,
    image:
      "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Business Class", "Refundable", "International", "Long Haul"],
  },
  {
    id: 15,
    name: "Corendon Airlines",
    location: "Bodrum, Turkey",
    stars: 3,
    rating: 4.1,
    adults: 2,
    children: 2,
    date: "20 September 2023",
    nights: 2, // Uçuş süresi 2 saat
    concept: "Direct Flight", // Uçuş türü
    price: 290,
    image:
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categories: ["Economy Class", "Charter Flight", "Domestic"],
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
  "Izmir",
  "Cesme",
  "Kusadasi",
  "Cappadocia",
  "Oludeniz",
  "Kalkan",
  "Kas",
  "Dalaman",
  "Ankara",
  "Trabzon",
  "Bursa",
  "Pamukkale",
  "Didim",
  "Gocek",
  "Datca",
  "Konya",
  "Diyarbakir",
  "Adana",
];

export const hotelConcepts: string[] = [
  "Beach Hotel",
  "Adult Hotel",
  "Boutique Hotel",
  "Family Hotel",
  "Pet Friendly",
  "All Inclusive Resort",
  "City Hotel",
  "Spa Resort",
  "Golf Resort",
  "Honeymoon Resort",
  "Water Park Resort",
  "Eco-friendly Resort",
  "Wellness Resort",
  "Historical Hotel",
  "Cave Hotel",
];

export const flightTypes: string[] = [
  "Direct Flight",
  "One Stop",
  "Multiple Stops",
  "Red-eye Flight",
  "Charter Flight",
  "Connecting Flight",
  "Domestic Flight",
  "International Flight",
  "Long Haul Flight",
  "Short Haul Flight",
  "Non-stop Flight",
  "Round Trip Flight",
  "One Way Flight",
  "Budget Flight",
  "Luxury Flight",
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
  "Long Haul",
  "Morning Departure",
  "Evening Departure",
  "Overnight Flight",
  "Weekend Flight",
  "Weekday Flight",
  "Charter",
  "Seasonal",
  "All Year Round",
  "Summer Flight",
  "Winter Flight",
  "Spring Flight",
  "Fall Flight",
  "Holiday Flight",
  "Budget Friendly",
  "Luxury Service",
  "Family Friendly",
  "Business Travel",
];

export const popularDestinations: string[] = [
  "Antalya",
  "Bodrum",
  "Istanbul",
  "Alanya",
  "Marmaris",
  "Fethiye",
  "Izmir",
  "Cappadocia",
  "Oludeniz",
  "Side",
  "Kusadasi",
  "Belek",
  "Kemer",
  "Cesme",
  "Kalkan",
];