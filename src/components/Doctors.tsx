import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const doctors = [
  { name: "dr. Andreas Hartono, Sp.M(K)", spec: "Spesialis Mata Konsultan, Lasik & Refractive", img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Sari Wulandari, Sp.M", spec: "Pediatric Ophthalmology", img: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Reza Pratama, Sp.M(K)", spec: "Vitreoretinal Surgery", img: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Maya Setiawati, Sp.M", spec: "Cataract & Anterior Segment", img: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Bayu Kurniawan, Sp.M", spec: "Glaucoma Specialist", img: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Linda Wijaya, Sp.M(K)", spec: "Oculoplastic Surgery", img: "https://images.pexels.com/photos/5214931/pexels-photo-5214931.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Andre Hartanto, Sp.M", spec: "Cornea & External Disease", img: "https://images.pexels.com/photos/8460159/pexels-photo-8460159.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Nina Indriani, Sp.M", spec: "General Ophthalmology", img: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Daniel Kusuma, Sp.M(K)", spec: "Neuro-Ophthalmology", img: "https://images.pexels.com/photos/5327917/pexels-photo-5327917.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "dr. Tika Larasati, Sp.M", spec: "Dry Eye & Ocular Surface", img: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function Doctors() {
  return (
    <section id="dokter" className="py-24 bg-surface-dark text-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Tim Dokter Spesialis Mata
            </h2>
            <p className="text-xl text-gray-400">
              Semua bersertifikat Sp.M, berpengalaman puluhan tahun, dan didukung subspesialisasi khusus.
            </p>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative rounded-[16px] overflow-hidden bg-[#1d1d1f] flex flex-col h-full"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                {/* Fallback gray bg if image doesn't load */}
                <div className="absolute inset-0 bg-gray-800"></div>
                <img 
                  src={doctor.img} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 relative z-10"
                  loading="lazy"
                />
                {/* Gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
                
                {/* Hover schedule slide-up */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
                  <button className="w-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-xs font-medium py-2 rounded flex items-center justify-center gap-1 transition-colors border border-white/10">
                    <Calendar className="w-3 h-3" /> Cek Jadwal
                  </button>
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow relative z-30 bg-[#1d1d1f] -mt-2">
                <h3 className="text-[15px] font-bold text-white mb-1 line-clamp-1">
                  {doctor.name}
                </h3>
                <p className="text-[12px] text-brand-blue font-medium leading-tight">
                  {doctor.spec}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}