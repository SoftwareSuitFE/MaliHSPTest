import Header from "@/components/layout/header";
import Filters from "@/components/search/filters";
import HotelList from "@/components/search/hotelList";

export default function Search() {
  return (
    <main>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4 w-full">
            <Filters />
          </div>

          <div className="lg:w-3/4 w-full">
            <HotelList />
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-6 mt-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} TravelGo. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
