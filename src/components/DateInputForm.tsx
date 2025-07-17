import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface DateInputFormProps {
  onCalculate: (birthDate: Date) => void;
}

export function DateInputForm({ onCalculate }: DateInputFormProps) {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      setError("Por favor, ingresa tu fecha de nacimiento");
      return;
    }
    
    const birthDate = new Date(date);
    const today = new Date();
    
    if (birthDate > today) {
      setError("La fecha de nacimiento no puede ser en el futuro");
      return;
    }
    
    setError("");
    onCalculate(birthDate);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl"
    >
      <Card className="overflow-hidden card-shadow hover-scale border-none">
        <CardHeader className="bg-gradient-secondary text-white">
          <CardTitle className="text-2xl font-bold">Calcula tu Edad exacta</CardTitle>
          <CardDescription className="text-white/80">
            Ingresa tu fecha de nacimiento para conocer tu edad exacta, días vividos y más
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="birthdate" className="text-base">Fecha de nacimiento</Label>
              <Input
                id="birthdate"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="text-base p-6"
                max={new Date().toISOString().split('T')[0]}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-secondary text-white hover:opacity-90 transition-opacity p-6 text-lg"
            >
              Calcular mi edad exacta
              <i className="fas fa-calculator ml-2"></i>
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}