import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Pakai kacamata sejak SMP, sekarang 32 tahun. Akhirnya berani Lasik di Visi. dr. Andreas detail jelasin syarat & risiko. 1 hari recovery, sekarang melihat dunia tanpa kacamata!",
    author: "Reza, 32 tahun",
    context: "Post-Femto LASIK",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Mama saya 68 tahun, katarak bilateral. Surgery di Visi pakai IOL multifokal, sekarang bisa baca koran tanpa kacamata baca. Tetangga sampai nanya operasi di mana.",
    author: "Bu Nina",
    context: "Anak pasien Katarak",
    img: "https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    quote: "Anak saya 7 tahun didiagnosis amblyopia (lazy eye). dr. Sari sabar handle anak, kasih plan vision therapy 6 bulan. Hasilnya sangat signifikan.",
    author: "Pak Bayu",
    context: "Ayah pasien Anak",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Diabetic 15 tahun, dapat retinopathy stadium 2. Treatment anti-VEGF injection rutin di Visi sudah 2 tahun, kondisi penglihatan tetap stabil.",
    author: "Pak Bambang, 58 thn",
    context: "Diabetic Patient",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-surface-dark text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Cerita Pasien Kami
          </h2>
          <p className="text-xl text-gray-400">
            Pengalaman nyata mereka yang telah mempercayakan kesehatan matanya kepada kami.
          </p>
        </div>

        {/* CSS-only infinite scroll for testimonials */}
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1d1d1f] rounded-[24px] p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex flex-col border border-white/5"
            >
              <Quote className="w-8 h-8 text-brand-blue mb-6 opacity-50" />
              <p className="text-[15px] text-gray-300 leading-relaxed mb-8 flex-grow">
                "{testi.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testi.img} alt={testi.author} className="w-12 h-12 rounded-full object-cover grayscale opacity-80" />
                <div>
                  <div className="font-bold text-white text-[14px]">{testi.author}</div>
                  <div className="text-brand-blue text-[12px]">{testi.context}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}