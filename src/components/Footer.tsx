export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 mt-12 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Calcula tu Edad exacta</h3>
            <p className="text-muted-foreground">
              Herramienta precisa y fácil de usar para calcular tu edad exacta, días vividos, tiempo hasta tu próximo cumpleaños y más.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Contacto</h3>
            <ul className="space-y-2">
              <li><a className="text-muted-foreground no-underline">iacolombiabeta@gmail.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Comparte</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl text-gray-700 hover:text-blue-600 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700 hover:text-green-600 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700 hover:text-blue-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl text-gray-700 hover:text-pink-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center">
          <p className="text-muted-foreground">
            © {currentYear} Calcula tu Edad exacta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}