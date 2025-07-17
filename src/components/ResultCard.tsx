import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AgeData, shareOnWhatsApp, shareOnFacebook } from "@/lib/utils";
import { motion } from "framer-motion";

interface ResultCardProps {
  ageData: AgeData;
  birthDate: Date;
  onReset: () => void;
}

export function ResultCard({ ageData, birthDate, onReset }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl"
    >
      <Card className="overflow-hidden card-shadow hover-scale border-none">
        <CardHeader className="bg-gradient-primary text-white">
          <CardTitle className="text-2xl font-bold">Tu Edad Exacta</CardTitle>
          <CardDescription className="text-white/80">
            Basado en tu fecha de nacimiento: {birthDate.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'})}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-blue-700 font-medium mb-2">Años, Meses, Días</h3>
              <p className="text-2xl font-bold text-blue-800">
                {ageData.years} <span className="text-sm">años</span>, {ageData.months} <span className="text-sm">meses</span>, {ageData.days} <span className="text-sm">días</span>
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h3 className="text-purple-700 font-medium mb-2">Días Vividos</h3>
              <p className="text-2xl font-bold text-purple-800">
                {ageData.totalDays.toLocaleString()}
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="text-green-700 font-medium mb-2">Próximo Cumpleaños</h3>
              <p className="text-2xl font-bold text-green-800">
                {ageData.daysUntilNextBirthday} <span className="text-sm">días</span>
              </p>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <h3 className="text-amber-700 font-medium mb-2">Signo Zodiacal</h3>
              <p className="text-2xl font-bold text-amber-800">
                {ageData.zodiacSign}
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-indigo-700 font-medium mb-2 text-center">Tu frase personalizada</h3>
            <p className="text-indigo-800 italic text-center">
              "{ageData.zodiacPhrase}"
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 p-6 flex flex-col sm:flex-row gap-3 justify-between">
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="gap-2 hover:bg-blue-50"
              onClick={() => shareOnWhatsApp(ageData, birthDate)}
            >
              <i className="fab fa-whatsapp text-green-600"></i>
              Compartir
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 hover:bg-blue-50"
              onClick={() => shareOnFacebook(ageData, birthDate)}
            >
              <i className="fab fa-facebook text-blue-600"></i>
              Compartir
            </Button>
          </div>
          <Button 
            variant="outline" 
            className="hover:bg-purple-50"
            onClick={onReset}
          >
            Calcular de nuevo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}