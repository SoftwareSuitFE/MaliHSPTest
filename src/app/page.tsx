import Header from "@/components/layout/header";
import TravelTabs from "@/components/home/travelTabs";
import SearchForm from "@/components/home/searchForm";
import { popularDestinations } from "../../data/mockData";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />

      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="relative container mx-auto h-full flex flex-col justify-center items-center px-4">
          <div className="w-full max-w-4xl">
            <div className="mb-6 mt-24">
              <TravelTabs />
            </div>

            <SearchForm />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularDestinations.map((destination) => (
            <Link
              href={`/search?destination=${destination}`}
              key={destination}
              className="destination-card block"
            >
              <div
                className="relative bg-cover bg-center h-48 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url('https://source.unsplash.com/400x300/?${destination.toLowerCase()},travel')`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity hover:bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {destination}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} TravelGo. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
