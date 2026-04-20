export default function MinimalFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-stone-950 py-8 border-t border-stone-900 text-center">
      <div className="container mx-auto px-4">
        <p className="text-stone-500 text-sm font-light">
          &copy; {currentYear} Vista del Río · Inversiones Inmobiliarias en el Caribe.
        </p>
        <p className="text-stone-600 text-xs mt-2 font-light">
          Este sitio no forma parte de la red de Facebook, Meta o Google Inc. 
        </p>
      </div>
    </footer>
  );
}
