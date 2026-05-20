import { motion } from 'framer-motion';
import { CheckCircle2, Info, ArrowRight } from 'lucide-react';

const lasikOptions = [
  {
    name: "Femto-LASIK",
    price: "Rp 15 jt / mata",
    popular: true,
    features: [
      "Wavelight FS200 femtosecond",
      "100% blade-free",
      "Recovery 24-48 jam",
      "Untuk minus -1 sampai -10"
    ]
  },
  {
    name: "SMILE",
    price: "Rp 25 jt / mata",
    popular: false,
    features: [
      "Small incision, minimal invasive",
      "Recovery lebih cepat",
      "Cocok untuk lifestyle aktif (atlet)",
      "Untuk minus -1 sampai -10"
    ]
  },
  {
    name: "PRK",
    price: "Rp 12 jt / mata",
    popular: false,
    features: [
      "Untuk kornea tipis",
      "Recovery lebih lama (5-7 hari)",
      "Permanent result",
      "Solusi untuk kasus spesifik"
    ]
  }
];

const requirements = [
  "Usia ≥ 18 tahun",
  "Refraksi stabil 1 tahun terakhir",
  "Tidak hamil/menyusui",
  "Tidak ada kondisi kornea kontradiksi"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Lasik() {
  return (
    <section id="lasik" className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Bebas Kacamata Dengan Lasik
          </h2>
          <p className="text-xl text-text-secondary">
            Teknologi Wavelight FS200 — Lasik dengan blade-free, akurasi tinggi, dan recovery yang sangat cepat.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {lasikOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`relative rounded-[24px] p-8 flex flex-col h-full bg-surface-gray transition-transform duration-300 ${option.popular ? 'border-2 border-brand-blue shadow-xl shadow-brand-blue/10 scale-100 md:scale-105 z-10' : 'border border-gray-100'}`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{option.name}</h3>
                <div className="text-brand-blue font-semibold">{option.price}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#booking" className={`w-full py-3 rounded-pill font-medium transition-colors text-center ${option.popular ? 'bg-brand-blue text-white hover:bg-brand-blue-hover' : 'bg-white border border-gray-200 text-text-primary hover:bg-gray-50'}`}>
                Pilih {option.name}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Syarat Lasik & CTA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-50 rounded-[18px] p-8 md:p-10 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-brand-blue" />
                <h4 className="text-lg font-bold text-text-primary">Syarat Kelayakan Lasik</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/50"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
              <a href="#booking" className="button-primary w-full md:w-auto px-6 py-3.5 flex items-center justify-center gap-2 text-[15px]">
                Konsultasi Lasik Gratis
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[12px] text-text-secondary text-center mt-2">Termasuk Lasik eligibility test</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}