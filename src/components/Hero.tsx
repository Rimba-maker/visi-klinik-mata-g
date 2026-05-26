import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Award } from 'lucide-react';

const medicalProfessionalReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.15 }
  }
};

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-surface-gray pt-12 pb-24">
      {/* Background Image - Absolute */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop" 
          alt="Pemeriksaan mata dokter" 
          className="w-full h-full object-cover opacity-[0.4]"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-gray/40 via-surface-gray/70 to-surface-gray"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={medicalProfessionalReveal}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={childVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Klinik Mata Spesialis Terkemuka</span>
          </motion.div>

          {/* Headline (Apple typography: massive, tight tracking) */}
          <motion.h1 
            variants={childVariant}
            className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight leading-[1.05] mb-6"
          >
            Mata Sehat, <br />
            <span className="text-brand-blue">Hidup Lebih Jernih.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={childVariant}
            className="text-lg md:text-2xl text-text-secondary max-w-2xl font-normal leading-relaxed mb-10"
          >
            Klinik mata spesialis dengan layanan komprehensif: pemeriksaan rutin, Lasik, operasi katarak, treatment retina, hingga kacamata anak dan lansia.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={childVariant} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <a 
              href="#booking" 
              className="button-primary text-lg px-8 py-3.5 flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20"
            >
              Book Pemeriksaan
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#lasik" 
              className="bg-white text-text-primary hover:bg-gray-50 border border-gray-200 rounded-pill text-lg px-8 py-3.5 font-medium transition-colors flex items-center justify-center"
            >
              Konsultasi Lasik
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={childVariant}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-gray-200 w-full"
          >
            {[
              { icon: Award, text: "15+ Dokter Sp.M Bersertifikat" },
              { icon: MapPin, text: "5 Cabang Jabodetabek" },
              { icon: ShieldCheck, text: "BPJS & Asuransi Partner" },
              { icon: CheckCircle2, text: "Teknologi Wavelight FS200" }
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-center">
                <badge.icon className="w-6 h-6 text-brand-blue opacity-80" />
                <span className="text-[13px] md:text-sm text-text-secondary font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}