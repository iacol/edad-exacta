import { useState } from "react";
import { calculateAge, AgeData } from "@/lib/utils";
import { DateInputForm } from "@/components/DateInputForm";
import { ResultCard } from "@/components/ResultCard";
import { AdBanner } from "@/components/AdBanner";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";

export default function Index() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [ageData, setAgeData] = useState<AgeData | null>(null);

  const handleCalculate = (date: Date) => {
    setBirthDate(date);
    const calculatedAge = calculateAge(date);
    setAgeData(calculatedAge);
  };

  const handleReset = () => {
    setBirthDate(null);
    setAgeData(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Calcula tu Edad exacta</h1>
          <p className="text-center mt-2 text-white/80 max-w-2xl mx-auto">
            Descubre tu edad precisa en años, meses y días, junto con información interesante sobre los días que has vivido y tu signo zodiacal.
          </p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Top Ad Banner */}
        <div className="flex justify-center mb-8">
          <AdBanner position="top" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col items-center">
            {!ageData ? (
              <DateInputForm onCalculate={handleCalculate} />
            ) : (
              <ResultCard
                ageData={ageData}
                birthDate={birthDate!}
                onReset={handleReset}
              />
            )}

            {/* Features Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8">Características de nuestra calculadora</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-calendar-alt text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-center">Edad Exacta</h3>
                  <p className="text-gray-600 text-center">Calcula tu edad precisa en años, meses y días con total exactitud</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-hourglass-half text-purple-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-center">Días Vividos</h3>
                  <p className="text-gray-600 text-center">Descubre el número total de días que has vivido desde tu nacimiento</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-birthday-cake text-green-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-center">Próximo Cumpleaños</h3>
                  <p className="text-gray-600 text-center">Conoce exactamente cuántos días faltan para tu próximo cumpleaños</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
                  <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-star text-yellow-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-center">Signo Zodiacal</h3>
                  <p className="text-gray-600 text-center">Descubre tu signo zodiacal y una frase personalizada inspiradora</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
                  <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-share-alt text-red-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-center">Comparte Fácilmente</h3>
                  <p className="text-gray-600 text-center">Comparte tus resultados en WhatsApp y Facebook con un solo clic</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-mobile-alt text-indigo-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-center">Diseño Responsivo</h3>
                  <p className="text-gray-600 text-center">Disfruta de una experiencia perfecta en cualquier dispositivo</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ />

            {/* Bottom Ad Banner */}
            <div className="flex justify-center mt-12">
              <AdBanner position="bottom" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Side Ad Banner */}
              <AdBanner position="side" />

              {/* Info Box */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-3">¿Por qué conocer tu edad exacta?</h3>
                <p className="text-gray-600 mb-4">
                  Conocer tu edad exacta va más allá de solo saber cuántos años tienes. Te permite apreciar el tiempo que has vivido con precisión y reflexionar sobre tus experiencias.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <p className="text-gray-600">Celebra tus logros con una perspectiva precisa del tiempo</p>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <p className="text-gray-600">Planifica eventos especiales basados en fechas importantes</p>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <p className="text-gray-600">Comprende mejor la relación entre tu signo zodiacal y tu personalidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}