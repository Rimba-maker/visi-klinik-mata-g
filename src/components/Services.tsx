import { motion } from 'framer-motion';
import { Microscope, Zap, EyeOff, Activity, Baby, Eye, Droplet, Glasses } from 'lucide-react';

const services = [
  {
    title: "Pemeriksaan Mata Komprehensif",
    icon: Microscope,
    desc: "Refraction test, tonometry, slit lamp, funduscopy.",
    price: "Rp 250k - 500k",
  },
  {
    title: "Lasik & Refractive Surgery",
    icon: Zap,
    desc: "Femto-LASIK (Wavelight FS200), SMILE, PRK.",
    price: "Mulai Rp 15 jt / mata",
    featured: true
  },
  {
    title: "Cataract Surgery",
    icon: EyeOff,
    desc: "Phacoemulsification, IOL implant, day surgery 20 menit.",
    price: "Mulai Rp 8 jt / mata",
  },
  {
    title: "Retina Treatment",
    icon: Activity,
    desc: "Anti-VEGF injection, retinal laser, vitrectomy.",
    price: "Mulai Rp 3 - 15 jt",
  },
  {
    title: "Pediatric Ophthalmology",
    icon: Baby,
    desc: "Mata juling, lazy eye (amblyopia), myopia control.",
    price: "Konsultasi Rp 350k",
  },
  {
    title: "Glaucoma Management",
    icon: Eye,
    desc: "OCT optic nerve, visual field test, medication & surgery.",
    price: "Mulai Rp 500k",
  },
  {
    title: "Dry Eye Clinic",
    icon: Droplet,
    desc: "LipiView assessment, IPL therapy, punctal plug.",
    price: "Mulai Rp 1 jt",
  },
  {
    title: "Optical Shop In-House",
    icon: Glasses,
    desc: "Frame premium, lensa Zeiss/Essilor, contact lens fitting.",
    price: "One-stop solution",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-surface-gray w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
              Layanan Lengkap
            </h2>
            <p className="text-xl text-text-secondary">
              Fasilitas medis terintegrasi dari diagnosis hingga prosedur bedah.
            </p>
          </div>
          <a href="#booking" className="text-brand-blue font-medium hover:text-brand-blue-hover transition-colors flex items-center gap-1 group">
            Lihat semua harga
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`rounded-[18px] p-8 flex flex-col h-full bg-white transition-all duration-300 border ${service.featured ? 'border-brand-blue shadow-md shadow-brand-blue/10' : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'}`}
            >
              <div className="mb-6 flex justify-between items-start">
                <div className={`p-3 rounded-xl ${service.featured ? 'bg-brand-blue text-white' : 'bg-gray-100 text-text-primary'}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                {service.featured && (
                  <span className="text-[11px] font-bold tracking-wider uppercase text-brand-blue bg-blue-50 px-2 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              
              <p className="text-[15px] text-text-secondary flex-grow mb-6">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[14px] font-medium text-text-secondary">Estimasi Biaya:</span>
                <span className="text-[14px] font-semibold text-text-primary">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}