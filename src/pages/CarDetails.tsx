import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAR_DATA } from "@/data/CarData";
import Footer from "@/components/Footer";
import CarDetail from "@/components/CarDetail";
import Navbar from "@/components/Navbar";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import ContactSection from "@/components/ContactSection";
import { useTranslation } from "react-i18next";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const carIndex = id ? parseInt(id) : -1;
  const car = carIndex >= 0 && carIndex < CAR_DATA.length ? CAR_DATA[carIndex] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ResponsiveNavbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 pt-24">
          <h2 className="text-3xl font-bold mb-4">{t('collection.carNotFound')}</h2>
          <Button onClick={() => navigate("/cars")}>{t('collection.backToCollection')}</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ResponsiveNavbar />
      
      <main className="w-full py-12 pt-24">
        <div className="w-full px-6 md:px-16">
          {/* Back Button - Inline */}
          <div className="mb-8 flex items-center">
            <Button
              variant="outline"
              onClick={() => navigate("/cars")}
              className="inline-flex"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('collection.backToCollection')}
            </Button>
          </div>

          {/* Car Details - Full Width */}
          <div className="w-full mb-12">
            <CarDetail car={car} />
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default CarDetails;

