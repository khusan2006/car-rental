import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, SortAsc, SortDesc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CollectionCarCard from "@/components/CollectionCarCard";
import { CAR_DATA } from "@/data/CarData";
import { CarData } from "@/lib/types";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { useTranslation } from "react-i18next";

type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc" | "year-desc" | "year-asc";

const CarsCollection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMark, setSelectedMark] = useState<string>("all");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("all");
  const [selectedFuel, setSelectedFuel] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique values for filters
  const marks = useMemo(() => {
    const uniqueMarks = new Set(CAR_DATA.map((car) => car.mark));
    return Array.from(uniqueMarks).sort();
  }, []);

  const transmissions = useMemo(() => {
    const uniqueTransmissions = new Set(CAR_DATA.map((car) => car.transmission));
    return Array.from(uniqueTransmissions).sort();
  }, []);

  const fuels = useMemo(() => {
    const uniqueFuels = new Set(CAR_DATA.map((car) => car.fuel));
    return Array.from(uniqueFuels).sort();
  }, []);

  // Filter and sort cars
  const filteredAndSortedCars = useMemo(() => {
    let filtered = CAR_DATA.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.mark.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMark = selectedMark === "all" || car.mark === selectedMark;
      const matchesTransmission =
        selectedTransmission === "all" || car.transmission === selectedTransmission;
      const matchesFuel = selectedFuel === "all" || car.fuel === selectedFuel;

      return matchesSearch && matchesMark && matchesTransmission && matchesFuel;
    });

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return parseInt(a.price) - parseInt(b.price);
        case "price-desc":
          return parseInt(b.price) - parseInt(a.price);
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "year-desc":
          return parseInt(b.year) - parseInt(a.year);
        case "year-asc":
          return parseInt(a.year) - parseInt(b.year);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedMark, selectedTransmission, selectedFuel, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const currentCars = filteredAndSortedCars.slice(startIndex, endIndex);

  const handleCarClick = (car: CarData) => {
    const carIndex = CAR_DATA.findIndex((c) => c.name === car.name);
    if (carIndex !== -1) {
      navigate(`/cars/${carIndex}`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedMark("all");
    setSelectedTransmission("all");
    setSelectedFuel("all");
    setSortBy("name-asc");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ResponsiveNavbar />
      
      <main className="px-6 md:px-16 py-12 pt-24">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-2">
            {t('collection.title')}
          </h1>
          <p className="text-gray-600 text-lg">
            {t('collection.description')}
          </p>
        </div>
        {/* Search and Filters Section */}
        <div className="mb-8 space-y-6 bg-white p-6 rounded-xl shadow-sm">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder={t('collection.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-12 h-12 text-lg border-gray-300 focus:border-teal-700 focus:ring-teal-700"
            />
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-teal-700" />
                <span className="font-semibold text-gray-700">{t('collection.filters')}</span>
              </div>

              <Select value={selectedMark} onValueChange={(value) => {
                setSelectedMark(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder={t('collection.filterByBrand')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('collection.all')}</SelectItem>
                  {marks.map((mark) => (
                    <SelectItem key={mark} value={mark}>
                      {mark}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTransmission} onValueChange={(value) => {
                setSelectedTransmission(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t('collection.filterByTransmission')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('collection.all')}</SelectItem>
                  {transmissions.map((transmission) => (
                    <SelectItem key={transmission} value={transmission}>
                      {transmission}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedFuel} onValueChange={(value) => {
                setSelectedFuel(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder={t('collection.filterByFuel')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('collection.all')}</SelectItem>
                  {fuels.map((fuel) => (
                    <SelectItem key={fuel} value={fuel}>
                      {fuel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={handleResetFilters}
                className="ml-2"
              >
                {t('collection.resetFilters')}
              </Button>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              {sortBy.includes("asc") ? (
                <SortAsc className="h-5 w-5 text-gray-600" />
              ) : (
                <SortDesc className="h-5 w-5 text-gray-600" />
              )}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t('collection.sortBy')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">{t('collection.nameAsc')}</SelectItem>
                  <SelectItem value="name-desc">{t('collection.nameDesc')}</SelectItem>
                  <SelectItem value="price-asc">{t('collection.priceAsc')}</SelectItem>
                  <SelectItem value="price-desc">{t('collection.priceDesc')}</SelectItem>
                  <SelectItem value="year-desc">{t('collection.yearDesc')}</SelectItem>
                  <SelectItem value="year-asc">{t('collection.yearAsc')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-600 pt-4 border-t border-gray-200">
            <span className="font-semibold text-gray-900">{filteredAndSortedCars.length}</span> {t('collection.carsFound')}
            {filteredAndSortedCars.length !== CAR_DATA.length && (
              <span className="text-gray-500"> ({t('collection.filteredFrom')} {CAR_DATA.length} {t('collection.total')})</span>
            )}
          </div>
        </div>

        {/* Cars Grid */}
        {currentCars.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {currentCars.map((car, index) => (
                <div
                  key={index}
                  onClick={() => handleCarClick(car)}
                  className="cursor-pointer"
                >
                  <CollectionCarCard car={car} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-12">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  {t('collection.previous')}
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => handlePageChange(page)}
                        className="min-w-[40px]"
                      >
                        {page}
                      </Button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="px-2">...</span>;
                  }
                  return null;
                })}

                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  {t('collection.next')}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-semibold text-gray-600 mb-4">
              {t('collection.noCarsFound')}
            </p>
            <Button onClick={handleResetFilters}>{t('collection.resetFilters')}</Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CarsCollection;

