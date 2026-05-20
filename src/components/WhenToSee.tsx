import { motion } from 'framer-motion';
import { Baby, GraduationCap, Briefcase, UserPlus, Droplets, AlertTriangle } from 'lucide-react';

const cases = [
  {
    age: "Anak (3-6 tahun)",
    icon: Baby,
    desc: "First eye check sebelum masuk sekolah — deteksi mata juling, refraction error (mata malas).",
    bg: "bg-blue-500/10",
    color: "text-blue-600"
  },
  {
    age: "Sekolah & Remaja",
    icon: GraduationCap,
    desc: "Setiap 1-2 tahun, terutama jika sering menggunakan gadget. Cek myopia progression.",
    bg: "bg-indigo-500/10",
    color: "text-indigo-600"
  },
  {
    age: "Dewasa (20-40)",
    icon: Briefcase,
    desc: "Setiap 2 tahun jika tidak ada keluhan. Setiap tahun jika menggunakan kacamata/lensa kontak.",
    bg: "bg-emerald-500/10",
    color: "text-emerald-600"
  },
  {
    age: "Lansia (40+)",
    icon: UserPlus,
    desc: "Setiap tahun. Risiko presbyopia (mata tua), katarak, dan glaukoma meningkat drastis.",
    bg: "bg-amber-500/10",
    color: "text-amber-600"
  },
  {
    age: "Diabetic Patient",
    icon: Droplets,
    desc: "Setiap tahun (atau 6 bulan jika ada retinopati). Risiko besar untuk penyakit mata diabetik.",
    bg: "bg-purple-500/10",
    color: "text-purple-600"
  },
  {
    age: "Emergency Signs",
    icon: AlertTriangle,
    desc: "Penglihatan tiba-tiba kabur, banyak floater baru, kilatan cahaya, atau mata merah hebat.",
    bg: "bg-red-500/10",
    color: "text-red-600",
    urgent: true
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function WhenToSee() {
  return (
    <section className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Kapan Sebaiknya Periksa Mata?
          </h2>
          <p className="text-xl text-text-secondary">
            Pemeriksaan mata rutin adalah kunci untuk mencegah kerusakan penglihatan permanen di setiap fase usia.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`rounded-[18px] p-6 border ${item.urgent ? 'border-red-200 bg-red-50/50' : 'border-gray-100 bg-surface-gray'} flex flex-col gap-4`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg}`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className={`text-lg font-bold ${item.urgent ? 'text-red-700' : 'text-text-primary'}`}>
                  {item.age}
                </h3>
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}