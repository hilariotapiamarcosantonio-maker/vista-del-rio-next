export default function MinimalFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-stone-950 py-8 border-t border-stone-900 text-center">
      <div className="container mx-auto px-4">
        <p className="text-stone-500 text-sm font-light">
          &copy; {currentYear} Vista del Río · Inversiones Inmobiliarias en el Caribe.
        </p>
        <div className="border-t border-stone-900 pt-8 mt-12">
          <p className="text-[10px] tracking-[0.5em] uppercase text-stone-600 mb-2">Architectural Engineering</p>
          <p className="text-sm font-light text-stone-400">
            Desarrollado por <span className="text-stone-100 font-medium">Marcos Hilario</span> · Digital Systems Architect
          </p>
        </div>
      </div>
    </footer>
  );
}
