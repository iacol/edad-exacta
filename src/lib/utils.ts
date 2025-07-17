import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AgeData {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  daysUntilNextBirthday: number;
  zodiacSign: string;
  zodiacPhrase: string;
}

export function calculateAge(birthDate: Date): AgeData {
  const today = new Date();
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  
  // Adjust months and years if days are negative
  if (days < 0) {
    months--;
    // Get the last day of the previous month
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }
  
  // Adjust years if months are negative
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Calculate total days lived
  const birthTime = birthDate.getTime();
  const todayTime = today.getTime();
  const diffTime = todayTime - birthTime;
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Calculate days until next birthday
  const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  const daysUntilNextBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  // Determine zodiac sign
  const zodiacInfo = getZodiacSign(birthDate);
  
  return {
    years,
    months,
    days,
    totalDays,
    daysUntilNextBirthday,
    zodiacSign: zodiacInfo.sign,
    zodiacPhrase: zodiacInfo.phrase
  };
}

export function getZodiacSign(birthDate: Date): { sign: string; phrase: string } {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1; // JavaScript months start from 0
  
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return { 
      sign: "Acuario", 
      phrase: "Tu mente innovadora te lleva a descubrir nuevos horizontes. Tu originalidad es tu mayor fortaleza."
    };
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return { 
      sign: "Piscis", 
      phrase: "Tu intuición y sensibilidad te conectan profundamente con los demás. Tu compasión ilumina el camino."
    };
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return { 
      sign: "Aries", 
      phrase: "Tu energía y determinación te impulsan a conquistar cualquier meta. Eres un líder natural."
    };
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return { 
      sign: "Tauro", 
      phrase: "Tu perseverancia y paciencia son tus mayores virtudes. Construyes bases sólidas para tu futuro."
    };
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return { 
      sign: "Géminis", 
      phrase: "Tu versatilidad y comunicación te abren puertas donde otros ven muros. Tu mente ágil es tu tesoro."
    };
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return { 
      sign: "Cáncer", 
      phrase: "Tu sensibilidad e intuición te conectan profundamente con quienes amas. Tu hogar es donde está tu corazón."
    };
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return { 
      sign: "Leo", 
      phrase: "Tu carisma y generosidad iluminan el camino de los demás. Naciste para brillar con luz propia."
    };
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return { 
      sign: "Virgo", 
      phrase: "Tu precisión y atención al detalle te permiten ver lo que otros pasan por alto. Tu análisis es invaluable."
    };
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return { 
      sign: "Libra", 
      phrase: "Tu diplomacia y sentido de la justicia crean armonía a tu alrededor. El equilibrio es tu don."
    };
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return { 
      sign: "Escorpio", 
      phrase: "Tu intensidad y pasión te llevan a profundizar en los misterios de la vida. Tu transformación es constante."
    };
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return { 
      sign: "Sagitario", 
      phrase: "Tu optimismo y espíritu aventurero te llevan a explorar nuevos horizontes. La libertad es tu esencia."
    };
  } else {
    return { 
      sign: "Capricornio", 
      phrase: "Tu disciplina y ambición te permiten escalar las montañas más altas. Tu persistencia es tu fuerza."
    };
  }
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

export function shareOnWhatsApp(ageData: AgeData, birthDate: Date): void {
  const formattedBirthDate = formatDate(birthDate);
  const message = `🎂 *¡Mi edad exacta!* 🎂\n\n` +
    `Nací el: ${formattedBirthDate}\n` +
    `Tengo: ${ageData.years} años, ${ageData.months} meses y ${ageData.days} días\n` +
    `He vivido: ${ageData.totalDays.toLocaleString()} días\n` +
    `Faltan ${ageData.daysUntilNextBirthday} días para mi próximo cumpleaños\n` +
    `Mi signo zodiacal: ${ageData.zodiacSign}\n\n` +
    `Calcula tu edad exacta en: calculatuedad.com`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

export function shareOnFacebook(ageData: AgeData, birthDate: Date): void {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://calculatuedad.com")}&quote=${encodeURIComponent(`Acabo de calcular mi edad exacta: ${ageData.years} años, ${ageData.months} meses y ${ageData.days} días. ¡He vivido ${ageData.totalDays.toLocaleString()} días! Descubre la tuya en calculatuedad.com`)}`;
  window.open(facebookUrl, '_blank');
}