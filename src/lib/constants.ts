export const IMAGES_VISTA_DEL_RIO = {
  frente: [
    { src: "/1.JPG", alt: "Fachada imponente del proyecto de lujo Vista del Río en Santo Domingo Este", width: 1920, height: 1080 },
    { src: "/2.JPG", alt: "Perspectiva exterior de la arquitectura moderna de Vista del Río", width: 1920, height: 1080 },
    { src: "/3.JPG", alt: "Entrada principal y accesos del condominio residencial Vista del Río", width: 1920, height: 1080 }
  ],
  sociales: [
    { src: "/4.jpeg", alt: "Elegante sala de estar de concepto abierto y diseño contemporáneo", width: 1200, height: 800 },
    { src: "/5.jpeg", alt: "Cocina gourmet integrada equipada con acabados premium y mesón de cuarzo", width: 1200, height: 800 },
    { src: "/6.jpeg", alt: "Comedor de lujo iluminado de forma natural con detalles minimalistas", width: 1200, height: 800 },
    { src: "/7.jpeg", alt: "Distribución armónica del área social principal uniendo sala y comedor", width: 1200, height: 800 },
    { src: "/8.jpeg", alt: "Lobby y recepción de diseño sofisticado con acabados de alta gama", width: 1200, height: 800 },
    { src: "/9.jpeg", alt: "Detalle interior del confort y la calidez del área de estar social", width: 1200, height: 800 }
  ],
  habitaciones: [
    { src: "/10.jpeg", alt: "Habitación máster espaciosa con iluminación natural y walk-in closet", width: 1200, height: 800 },
    { src: "/11.jpeg", alt: "Habitación secundaria elegante e ideal para descanso o zona de lectura", width: 1200, height: 800 },
    { src: "/12.jpeg", alt: "Baño de lujo revestido de porcelanato con grifería moderna", width: 1200, height: 800 },
    { src: "/13.jpeg", alt: "Detalles constructivos y armarios de madera preciosa empotrados", width: 1200, height: 800 },
    { src: "/14.jpeg", alt: "Zona de descanso principal con excelente ventilación y vistas despejadas", width: 1200, height: 800 }
  ]
};

export const APARTMENT_DATA = {
  name: "Vista del Río - Unidad Premium",
  location: "Santo Domingo Este, República Dominicana",
  specs: {
    sqm: 85,
    rooms: 2,
    bathrooms: 2,
    level: "Nivel 01 (Planta Baja)",
  },
  contact: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "18090000000",
    agentName: "Marcos Hilario"
  },
  images: {
    hero: IMAGES_VISTA_DEL_RIO.frente[0].src,
    gallery: [
      ...IMAGES_VISTA_DEL_RIO.sociales.map(img => img.src),
      ...IMAGES_VISTA_DEL_RIO.habitaciones.map(img => img.src)
    ]
  }
};

