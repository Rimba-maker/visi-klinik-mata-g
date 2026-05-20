import { motion } from 'framer-motion';

const technologies = [
  {
    name: "OCT (Optical Coherence Tomography)",
    brand: "Heidelberg Spectralis",
    desc: "Imaging retina & optic nerve resolusi tinggi untuk deteksi dini penyakit mata.",
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop" // Placeholder for OCT
  },
  {
    name: "Wavelight FS200 + EX500",
    brand: "Alcon (US)",
    desc: "Platform Lasik kelas dunia, blade-free femtosecond dengan presisi tertinggi.",
    img: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=800&auto=format&fit=crop" // Placeholder for Lasik Machine
  },
  {
    name: "Auto Refractor & Topography",
    brand: "Diagnostic",
    desc: "Pemeriksaan refraksi akurat dan pemetaan (mapping) kornea untuk kelayakan Lasik.",
    img: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder
  },
  {
    name: "Phacoemulsification Unit",
    brand: "Centurion Alcon",
    desc: "Sistem bedah katarak modern dengan kontrol tekanan intraokular aktif.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" // Placeholder for Surgery
  },
  {
    name: "Visual Field Analyzer",
    brand: "Humphrey HFA3",
    desc: "Standar emas global (gold standard) untuk deteksi dan monitoring Glaukoma.",
    img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder
  },
  {
    name: "LipiView & LipiFlow",
    brand: "TearScience",
    desc: "Diagnostik dan treatment mutakhir untuk sindrom mata kering (Dry Eye).",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" // Placeholder
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

export default function Technology() {
  return (
    <section id="teknologi" className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Teknologi Diagnostic & Surgical Modern
          </h2>
          <p className="text-xl text-text-secondary">
            Kami berinvestasi pada peralatan medis standar global untuk memastikan akurasi diagnosa dan keamanan operasi Anda.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="rounded-[20px] overflow-hidden mb-6 bg-surface-gray aspect-[4/3] relative">
                <img 
                  src={tech.img} 
                  alt={tech.name} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div>
                <div className="text-[12px] font-bold tracking-widest uppercase text-text-secondary mb-2">
                  {tech.brand}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                  {tech.name}
                </h3>
                <p className="text-[16px] text-text-secondary leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}