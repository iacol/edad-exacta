import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Preguntas Frecuentes</h2>
        <p className="text-muted-foreground">Respuestas a las dudas más comunes sobre el cálculo de edad</p>
      </div>
      
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Cómo calcula esta página la edad exacta?</AccordionTrigger>
          <AccordionContent>
            Nuestra calculadora utiliza algoritmos precisos para determinar tu edad exacta en años, meses y días basándose en la fecha de nacimiento que ingresas. Calculamos la diferencia entre la fecha actual y tu fecha de nacimiento, ajustando días, meses y años correctamente.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>¿Cómo se calculan los días vividos?</AccordionTrigger>
          <AccordionContent>
            Los días vividos se calculan como la diferencia total de días entre tu fecha de nacimiento y la fecha actual. Tomamos en cuenta años bisiestos y todos los días del calendario para darte el número exacto de días que has vivido.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>¿Cómo se determina el signo zodiacal?</AccordionTrigger>
          <AccordionContent>
            Tu signo zodiacal se determina según el día y mes de tu nacimiento. Cada signo corresponde a un periodo específico del año. La calculadora identifica automáticamente tu signo según estos periodos establecidos y te muestra una frase personalizada relacionada con las características de tu signo.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>¿Puedo compartir mis resultados en redes sociales?</AccordionTrigger>
          <AccordionContent>
            Sí, ofrecemos botones para compartir tus resultados directamente en WhatsApp y Facebook. Al hacer clic en cualquiera de estos botones, se generará un mensaje personalizado con tu edad exacta, días vividos y otros datos interesantes que podrás compartir con tus amigos y familiares.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>¿Es preciso el cálculo de días hasta mi próximo cumpleaños?</AccordionTrigger>
          <AccordionContent>
            Sí, calculamos los días exactos que faltan hasta tu próximo cumpleaños. Si tu cumpleaños ya pasó este año, calculamos los días hasta tu cumpleaños del próximo año. Si aún no has celebrado tu cumpleaños este año, calculamos los días que faltan dentro del año actual.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}