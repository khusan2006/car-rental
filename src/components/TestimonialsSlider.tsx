import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { TESTIMONIALS_DATA } from "@/data/TestimonialsData";
import Star from "@/assets/star-outline.svg";
import { useTranslation } from "react-i18next";

const TestimonialsSlider = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = TESTIMONIALS_DATA;
  const testimonialsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
    // Scroll to top of section
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToPrevious = () => {
    const newPage = (currentPage - 1 + totalPages) % totalPages;
    goToPage(newPage);
  };

  const goToNext = () => {
    const newPage = (currentPage + 1) % totalPages;
    goToPage(newPage);
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    return testimonials.slice(start, end);
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <section 
      ref={sectionRef}
      id="testimonials"
      className="bg-gradient-to-br from-gray-50 to-gray-100 px-6 md:px-0 py-20 flex flex-col items-center"
    >
      <div className="flex flex-col items-center mb-12">
        <h3 className="font-rubik text-2xl font-medium pb-2 text-gray-600">
          {t('testimonials.subtitle')}
        </h3>
        <h4 className="font-poppins font-bold text-[2rem] sm:text-[2.7rem] pb-2 text-gray-900">
          {t('testimonials.title')}
        </h4>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-2 right-2 text-teal-100 opacity-50">
                <Quote className="h-16 w-16" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <img
                      key={i}
                      src={Star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-base md:text-lg font-poppins font-medium text-gray-800 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-400"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h6 className="font-poppins font-bold text-lg text-gray-900">
                      {testimonial.name}
                    </h6>
                    <p className="font-rubik font-normal text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-50 border-gray-300 shadow-lg z-10 h-12 w-12 rounded-full"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-50 border-gray-300 shadow-lg z-10 h-12 w-12 rounded-full"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "w-8 bg-teal-700"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Page Counter */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          {t('collection.page')} {currentPage + 1} / {totalPages}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

