import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bed, 
  Bath, 
  Square, 
  Maximize, 
  CheckCircle2, 
  Waves, 
  Sun, 
  Cpu, 
  ShieldCheck, 
  Car, 
  Plane, 
  Umbrella, 
  Phone, 
  Mail, 
  Globe, 
  Share2,
  Menu,
  Building2,
  Search,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const GALLERY_IMAGES = [
  "https://fotos15.apinmo.com/3503/27148697/45-2.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-3.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-4.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-5.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-6.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-8.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-9.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-10.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-11.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-12.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-13.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-14.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-15.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-16.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-17.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-18.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-19.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-20.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-22.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-23.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-24.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-25.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-26.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-27.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-28.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-29.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-30.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-31.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-32.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-33.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-34.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-35.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-36.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-37.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-38.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-39.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-40.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-41.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-42.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-43.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-44.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-45.jpg",
  "https://fotos15.apinmo.com/3503/27148697/45-46.jpg"
];

const IMAGES = {
  hero: "https://fotos15.apinmo.com/3503/27148697/45-1.jpg",
  living: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh9NFdWIYmI69F0NaQHJxLP5r2PnkVRdmLSpiwEFaCBgAL1mx9_vTSoQmcnZDkrFGYqdJhOcBhEaLHop9pO4Va5-_j6y-4yw97-_y7to3ePO0WPdP9WlplViMUKJi5qhLI-nOlE1tsyPVBljfzuzQVMDEnk3Lk02zldKBTSMy-wkyfSrSmESRAn-NMVV6TLqFQKNp6-d1D57SkssRXPudG3T-_PhKqBGMIrElfDVeI2xzcvDm_L5oFIDOuf9uqNUhKKovzIZ_VI_U",
  kitchen: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbgZK5PiYgm_ZwaO5ZCp9DhziaYBwyaLkWgC_ZshVjqoH46Li74qqzN8Lt32Sah-t0q9i1XLfINpuo5pHfi3h5KbDTz-cAAsovfUImolkYBs6o_Wf1pIPsbd95zCZKI7X20sWRgSDVgxQO_DVCI3KW6H5FUqcTypGeAblBQSopPb-6wS-c73B-xjAs3n9FkUo8tsGO3pw2kUXW6aZNjJekD4ixtbdGa3w-m1UY-oTV3wJlJJwMurorIqvhXhPRMwmmNZyGBZiCSFQ",
  bedroom: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTRGtEvkx_qV25D9NnliXJRmjOc37hDRe25z7Z72hW3kswvDVrT1sfwGarh_E0ZHGa6XsGqkePnEUWGSvLyFoDvDkfcLF3AXw88IauG_cNCtc5SxpfiaVow0VzdEqJ8hLgWDmLbBXTRi-tQuQAC3k4TPF0W67WSJJsGO3mv5WSLwgz9_qBVLf9tyMJjOr9bX7411OJMs4cdM26tySvAZNlHfYfEpEkhjitb53rBLnPxY7tJOypqWI_pwsiZu868wBzPWAjX-twb_g",
  bathroom: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNLfyzPAdoBSPUKsBWEFo92NU5q0kX9xn_StwNH1sSdd0fZjSao6y5LP8oa2ShptisgTnTKSzJyujTJ3v23Ei95epTShwyjZmFsfoSOoR7lipIJ2P7Djlkl-rGiAYJWf6YJPUlPQLYA9ufZS7q5KhKGcXpp2PEdyXNE3nHeW9tFMahvYdCx2DzPyg6BvCHYT-7cMVCF1vN4TwWrfFLcaadh3C2ISO_qzc8cXKr8wUXaH_29pW_AQkSJAYr0jatwYPMNvFiSK4kX64",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtpS4O3NWF0mFcijM5kWdeWjc8CT8T2OYcET9tXwfv87mVoryrKReqhSSB0GQRP0qtCpkYMcPWkMM47i69PQIcW2N6Bnfmi5NN4c4N3PbrVP5cPR88Z_5-2Q0KDO0I2UhHgYFXydLBeB6Qeguv9GEUK3fL_LvzYSpLCcGhzbDowHEYa-77EXVVMMVdCbhUvt79z3QEMOO3ga3SIRXV740QqJiS9R9441JlOQfLOVU9rkLGWtvFu1M0oPnCnXt2B0WN0C2mh5U7ep8"
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "PROPIEDADES", href: "https://www.comprarcasasevilla.com/venta/" },
    { label: "CALCULADORA HIPOTECA", href: "https://suhogar.comprarcasa.com/landing/calculadora-hipoteca" },
    { label: "VALORA TU VIVIENDA", href: "https://suhogar.comprarcasa.com/landing/valorador" },
    { label: "CONTACTO", href: "https://suhogar.comprarcasa.com/contacto" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setShowShareMenu(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setFormError("Por favor, rellene todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Por favor, introduzca un email válido.");
      return;
    }

    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setFormError("Hubo un error al enviar la solicitud. Inténtelo de nuevo.");
      }
    } catch (error) {
      setFormStatus("error");
      setFormError("Error de conexión. Inténtelo de nuevo.");
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#f6f7f8] font-['Public_Sans',sans-serif] text-slate-900 selection:bg-red-500/30">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="https://suhogar.comprarcasa.com/inicio" className="flex items-center">
            <img 
              src="https://procomprarcasasa.blob.core.windows.net/public-front/public/logo/suhogar.png" 
              alt="SUHOGAR Comprarcasa" 
              className="h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-[13px] font-bold tracking-wider text-slate-700 hover:text-[#E4232A] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={`mailto:Magdalena@suhogarsevilla.com?subject=${encodeURIComponent("Solicitud de información")}&body=${encodeURIComponent("Hola Magdalena, me interesa esta propiedad. Enlace: " + (typeof window !== 'undefined' ? window.location.href : ""))}`}
              className="bg-[#E4232A] hover:bg-[#E4232A]/90 text-white px-8 py-3.5 rounded-lg text-base font-bold transition-all shadow-lg shadow-[#E4232A]/20"
            >
              Solicitar Información
            </a>
          </nav>
          <button 
            className="md:hidden text-slate-900 z-50 relative p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 h-screen w-[280px] bg-white z-40 shadow-2xl md:hidden flex flex-col pt-32 px-8"
                >
                  <div className="flex flex-col gap-8">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-bold tracking-wider text-slate-900 hover:text-[#E4232A] transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                    <a 
                      href={`mailto:Magdalena@suhogarsevilla.com?subject=${encodeURIComponent("Solicitud de información")}&body=${encodeURIComponent("Hola Magdalena, me interesa esta propiedad. Enlace: " + (typeof window !== 'undefined' ? window.location.href : ""))}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="bg-[#E4232A] text-white px-6 py-4 rounded-xl text-center font-bold transition-all shadow-lg shadow-[#E4232A]/20 mt-4"
                    >
                      Solicitar Información
                    </a>
                  </div>
                  
                  <div className="mt-auto pb-12 flex flex-col gap-4 border-t border-slate-100 pt-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contacto Directo</p>
                    <a href="tel:+34635475213" className="flex items-center gap-3 text-slate-700 font-bold">
                      <Phone className="w-5 h-5 text-[#E4232A]" />
                      +34 635 47 52 13
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Villa Lumina Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end pb-10 md:pb-20 h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mb-8 md:mb-0 text-center md:text-left"
          >
            <span className="inline-block px-4 py-1 bg-[#E4232A] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
              Exclusividad
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-black text-white leading-none mb-6">
              FLOR DE<br />LORETO
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-lg mx-auto md:mx-0">
              Una obra maestra de la arquitectura contemporánea fusionada con el entorno natural mediterráneo.
            </p>
          </motion.div>

          {/* Floating Info Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/85 backdrop-blur-xl p-6 md:p-8 rounded-2xl w-full max-w-[92vw] md:w-[380px] shadow-2xl border border-white/20"
          >
            <div className="flex justify-between items-end mb-5">
              <div>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Precio</p>
                <p className="text-xl md:text-2xl font-black text-slate-900 whitespace-nowrap">550.000 €</p>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Ubicación</p>
                <p className="text-sm md:text-base font-bold text-slate-900 leading-tight">Espartinas, Sevilla</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 md:gap-4 py-4 md:py-5 border-y border-slate-200 mb-5">
              <div className="text-center">
                <Bed className="text-[#E4232A] w-5 h-5 md:w-6 md:h-6 mx-auto mb-1" />
                <p className="text-[13px] md:text-base font-bold">4 Dorm</p>
              </div>
              <div className="text-center border-x border-slate-200">
                <Bath className="text-[#E4232A] w-5 h-5 md:w-6 md:h-6 mx-auto mb-1" />
                <p className="text-[13px] md:text-base font-bold">3 Baños</p>
              </div>
              <div className="text-center">
                <Square className="text-[#E4232A] w-5 h-5 md:w-6 md:h-6 mx-auto mb-1" />
                <p className="text-[13px] md:text-base font-bold">421 m²</p>
              </div>
            </div>
            
            <a 
              href={`mailto:Magdalena@suhogarsevilla.com?subject=${encodeURIComponent("Solicitud de información")}&body=${encodeURIComponent("Hola Magdalena, me interesa esta propiedad. Enlace: " + (typeof window !== 'undefined' ? window.location.href : ""))}`}
              className="w-full bg-[#E4232A] hover:bg-[#E4232A]/90 text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Solicitar Información
            </a>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#E4232A] text-sm font-black uppercase tracking-[0.3em] mb-4">LA PROPIEDAD</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Un hogar donde la luz y la tranquilidad se encuentran</h3>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Ubicada en una de las zonas residenciales más agradables de Espartinas, esta vivienda ofrece un ambiente lleno de calma, amplitud y luminosidad. Sus espacios invitan a disfrutar del día a día con comodidad, combinando privacidad, diseño y un entorno perfecto para vivir con calidad.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="galeria" className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
            <motion.div 
              whileHover={{ scale: 0.99 }}
              onClick={() => setSelectedImage(0)}
              className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group cursor-pointer relative"
            >
              <img src={GALLERY_IMAGES[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <Search className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.99 }}
              onClick={() => setSelectedImage(1)}
              className="md:col-span-2 rounded-2xl overflow-hidden group cursor-pointer relative"
            >
              <img src={GALLERY_IMAGES[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <Search className="text-white w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.99 }}
              onClick={() => setSelectedImage(2)}
              className="rounded-2xl overflow-hidden group cursor-pointer relative"
            >
              <img src={GALLERY_IMAGES[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <Search className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.99 }}
              onClick={() => setSelectedImage(3)}
              className="rounded-2xl overflow-hidden group cursor-pointer relative"
            >
              <img src={GALLERY_IMAGES[3]} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <Search className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="detalles" className="py-24 bg-[#f6f7f8]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Especificaciones de la Propiedad</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Bed, label: "HABITACIONES", value: "4 Habitaciones" },
              { icon: Bath, label: "BAÑOS", value: "3 Baños" },
              { icon: Square, label: "CONSTRUIDOS", value: "421 m²" },
              { icon: Maximize, label: "TIPO", value: "Chalet" },
              { icon: CheckCircle2, label: "ESTADO", value: "Buen estado" },
              { icon: Waves, label: "EXTRAS", value: "Piscina" },
            ].map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center"
              >
                <spec.icon className="text-[#E4232A] w-10 h-10 mb-3" />
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">{spec.label}</p>
                <p className="text-xl font-bold text-slate-900">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Sun, title: "UBICACIÓN PRIVILEGIADA", desc: "Situada en Espartinas, una de las zonas residenciales más tranquilas y demandadas del Aljarafe sevillano, con fácil acceso a Sevilla." },
              { icon: Cpu, title: "AMPLIA PARCELA PRIVADA", desc: "La vivienda se encuentra en una gran parcela que permite disfrutar de zonas exteriores, jardín y espacios ideales para el ocio y la tranquilidad." },
              { icon: ShieldCheck, title: "PISCINA PRIVADA", desc: "Perfecta para disfrutar del clima de Sevilla durante todo el año y convertir el exterior de la vivienda en una auténtica zona de relax." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#E4232A]/10 flex items-center justify-center">
                    <item.icon className="text-[#E4232A] w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-24 bg-[#f6f7f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[#E4232A] text-sm font-black uppercase tracking-[0.3em] mb-4">UBICACIÓN</h2>
              <h3 className="text-4xl font-bold mb-6 text-slate-900">Tranquilidad y calidad de vida en Espartinas</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Situada en Espartinas, una de las zonas residenciales más valoradas del Aljarafe sevillano, esta vivienda ofrece un entorno tranquilo y familiar a pocos minutos de Sevilla. La zona combina la calma de un municipio residencial con todos los servicios necesarios cerca, como colegios, comercios, zonas verdes y excelentes conexiones con la capital.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Car className="text-[#E4232A] w-5 h-5" />
                  <span className="text-lg font-semibold text-slate-700">15 min de Sevilla</span>
                </div>
                <div className="flex items-center gap-3">
                  <Plane className="text-[#E4232A] w-5 h-5" />
                  <span className="text-lg font-semibold text-slate-700">Cerca de colegios y servicios</span>
                </div>
                <div className="flex items-center gap-3">
                  <Umbrella className="text-[#E4232A] w-5 h-5" />
                  <span className="text-lg font-semibold text-slate-700">Entorno residencial tranquilo</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.011854666666!2d-6.1264!3d37.3811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIyJzUyLjAiTiA2wrAwNyczNS4wIlc!5e0!3m2!1ses!2ses!4v1710600000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#E4232A] rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 relative overflow-hidden shadow-2xl shadow-[#E4232A]/30">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
            
            <div className="lg:w-1/2 relative z-10 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">Hablemos de su futura inversión</h3>
                <p className="text-white/80 text-lg mb-8 max-w-md">Nuestro equipo de consultores expertos está a su disposición para organizar una visita privada o enviarle el dossier completo de la propiedad.</p>
                
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/20 overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src="https://i.ibb.co/3yvvt76w/imagen.jpg" 
                      alt="Agente Magdalena" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-white">
                    <p className="text-xl font-bold">Magdalena</p>
                    <p className="text-white/60 text-sm">Agente Inmobiliaria Senior</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <a href="tel:+34635475213" className="flex items-center gap-3 sm:gap-4 text-white hover:text-white/80 transition-colors group">
                    <div className="p-2.5 sm:p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-white/60 uppercase font-bold">Llámenos</p>
                      <p className="text-base sm:text-xl font-bold">+34 635 47 52 13</p>
                    </div>
                  </a>
                  <a href="mailto:Magdalena@suhogarsevilla.com" className="flex items-center gap-3 sm:gap-4 text-white hover:text-white/80 transition-colors group">
                    <div className="p-2.5 sm:p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-white/60 uppercase font-bold">Email</p>
                      <p className="text-[13px] sm:text-xl font-bold whitespace-nowrap">Magdalena@suhogarsevilla.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative z-10">
              <form className="bg-white p-8 rounded-3xl shadow-xl space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase px-1">Nombre Completo</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border border-slate-100 focus:ring-2 focus:ring-[#E4232A] outline-none transition-all" 
                      placeholder="Ej: Juan Pérez" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase px-1">Teléfono</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border border-slate-100 focus:ring-2 focus:ring-[#E4232A] outline-none transition-all" 
                      placeholder="+34 --- --- ---" 
                      type="tel" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1">Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border border-slate-100 focus:ring-2 focus:ring-[#E4232A] outline-none transition-all" 
                    placeholder="email@ejemplo.com" 
                    type="email" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1">Mensaje</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border border-slate-100 focus:ring-2 focus:ring-[#E4232A] outline-none transition-all" 
                    placeholder="Estoy interesado en..." 
                    rows={4}
                  ></textarea>
                </div>

                {formError && (
                  <p className="text-red-500 text-sm font-medium px-1">{formError}</p>
                )}

                {formStatus === "success" && (
                  <div className="bg-emerald-50 text-emerald-600 p-4 rounded-xl text-sm font-medium border border-emerald-100">
                    ¡Solicitud enviada con éxito! Nos pondremos en contacto con usted pronto.
                  </div>
                )}

                <button 
                  disabled={formStatus === "sending"}
                  className={`w-full bg-[#E4232A] hover:bg-[#E4232A]/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#E4232A]/20 flex items-center justify-center gap-2 ${formStatus === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : "Enviar Solicitud"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src="https://procomprarcasasa.blob.core.windows.net/public-front/public/logo/suhogar.png" 
                  alt="SuHogar Logo" 
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                Servicios inmobiliarios profesionales en Sevilla y el Aljarafe. Especialistas en la comercialización de viviendas con estrategias digitales avanzadas.
              </p>
            </div>
            
            <div className="flex gap-12">
              <div className="flex flex-col gap-4">
                <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Legal</h5>
                <a className="text-sm text-slate-500 hover:text-[#E4232A]" href="#">Aviso Legal</a>
                <a className="text-sm text-slate-500 hover:text-[#E4232A]" href="#">Privacidad</a>
                <a className="text-sm text-slate-500 hover:text-[#E4232A]" href="#">Cookies</a>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Síguenos</h5>
                <div className="flex gap-4">
                  <a 
                    className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#E4232A] hover:text-white transition-all" 
                    href="https://suhogar.comprarcasa.com/inicio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <div className="relative">
                    <button 
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#E4232A] hover:text-white transition-all"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    
                    <AnimatePresence>
                      {showShareMenu && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setShowShareMenu(false)}
                          ></div>
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute bottom-full right-0 mb-4 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 overflow-hidden"
                          >
                            <a 
                              href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 w-full p-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#E4232A] rounded-xl transition-all"
                            >
                              <Globe className="w-4 h-4" />
                              WhatsApp
                            </a>
                            <a 
                              href={`mailto:?subject=Propiedad&body=${encodeURIComponent(window.location.href)}`}
                              className="flex items-center gap-3 w-full p-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#E4232A] rounded-xl transition-all"
                            >
                              <Mail className="w-4 h-4" />
                              Email
                            </a>
                            <button 
                              onClick={handleCopyLink}
                              className="flex items-center gap-3 w-full p-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#E4232A] rounded-xl transition-all"
                            >
                              <Globe className="w-4 h-4" />
                              Copiar enlace
                            </button>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-200 text-center relative">
            <p className="text-xs text-slate-400">© 2024 SuHogar. Todos los derechos reservados.</p>
            
            <AnimatePresence>
              {copied && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-2 px-4 rounded-full shadow-lg"
                >
                  Enlace copiado
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </footer>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-[110] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            
            <button 
              className="absolute left-4 md:left-10 text-white/70 hover:text-white z-[110] bg-white/10 p-3 rounded-full backdrop-blur-md transition-all hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={GALLERY_IMAGES[selectedImage]}
              alt={`Gallery ${selectedImage}`}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />

            <button 
              className="absolute right-4 md:right-10 text-white/70 hover:text-white z-[110] bg-white/10 p-3 rounded-full backdrop-blur-md transition-all hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest">
              {selectedImage + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
