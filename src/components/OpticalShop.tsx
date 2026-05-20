import { motion } from 'framer-motion';
import { Glasses, Scan, Eye } from 'lucide-react';

const highlights = [
  {
    icon: Glasses,
    title: "Frame Collection",
    items: ["Frame premium: Ray-Ban, Oakley, Persol", "Frame affordable: brand lokal", "Frame anak (durable & fun design)", "Custom fitting oleh optician"]
  },
  {
    icon: Scan,
    title: "Lensa Premium",
    items: ["Zeiss (Jerman) — premium clarity", "Essilor (Prancis) — multifokal expertise", "Hoya (Jepang) — anti-reflective", "Lensa progresif & transisi"]
  },
  {
    icon: Eye,
    title: "Contact Lens",
    items: ["Soft daily & monthly", "Toric (untuk mata silinder)", "Multifocal contact lens", "Fitting & training pemakaian"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function OpticalShop() {
  return (
    <section id="kacamata" className="py-24 bg-surface-gray w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={childVariants} className="inline-block bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-text-secondary mb-6">
                One-Stop Solution
              </motion.div>
              
              <motion.h2 variants={childVariants} className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
                Optical Shop In-Clinic
              </motion.h2>
              
              <motion.p variants={childVariants} className="text-xl text-text-secondary mb-10 max-w-lg">
                Setelah pemeriksaan mata, Anda dapat langsung melakukan fitting kacamata atau lensa kontak tanpa perlu repot berpindah ke optik lain.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                {highlights.map((item, index) => (
                  <motion.div key={index} variants={childVariants} className="flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4 text-brand-blue">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                    <ul className="space-y-1">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="text-[14px] text-text-secondary flex items-start gap-2">
                          <span className="text-brand-blue/50 mt-0.5">•</span>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.a 
                variants={childVariants}
                href="#booking" 
                className="button-primary inline-flex"
              >
                Book Pemeriksaan & Fitting
              </motion.a>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-[24px] overflow-hidden shadow-2xl shadow-black/10 aspect-[4/3] md:aspect-square lg:aspect-[4/3]"
            >
              <img 
                src="https://images.pexels.com/photos/3956133/pexels-photo-3956133.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Optical shop interior" 
                className="w-full h-full object-cover"
              />
              {/* Glassmorphism Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-xl rounded-[16px] p-6 border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <h4 className="text-text-primary font-bold text-[15px]">Lensa Presisi Tinggi</h4>
                    <p className="text-text-secondary text-[13px]">Garansi akurasi resep dokter</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}