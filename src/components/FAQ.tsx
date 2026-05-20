import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Lasik aman gak?",
    a: "Lasik adalah prosedur yang sudah dilakukan jutaan kali di seluruh dunia dengan safety record yang sangat tinggi. Risiko minor sangat minimal jika dilakukan oleh dokter spesialis berpengalaman menggunakan teknologi modern seperti Wavelight FS200 kami."
  },
  {
    q: "Setelah Lasik, mata bisa minus lagi gak?",
    a: "Hasil Lasik bersifat permanen untuk kondisi refraksi saat ini. Namun, presbyopia (mata tua) yang wajar terjadi pada usia 40+ tetap bisa terjadi, dan kondisi mata akibat faktor lain tetap bisa muncul di masa depan."
  },
  {
    q: "Operasi katarak pakai BPJS bagaimana prosedurnya?",
    a: "BPJS meng-cover penuh prosedur phacoemulsification + lensa IOL monofokal standar (syarat rujukan FKTP berlaku). Jika Anda ingin upgrade ke lensa IOL multifokal atau toric, Anda bisa melakukan top-up biaya secara pribadi."
  },
  {
    q: "Anak saya terdeteksi myopia (minus), apakah harus selalu pakai kacamata?",
    a: "Tergantung besaran minusnya. Jika minus < 1, mungkin tidak diharuskan pakai full-time. Namun sangat disarankan untuk konsultasi dengan dokter Pediatric Ophthalmology kami untuk plan myopia control agar minus tidak bertambah cepat."
  },
  {
    q: "Dry eye (mata kering) bisa sembuh total?",
    a: "Dry eye umumnya adalah kondisi kronis yang bisa 'dikelola' (managed) dengan baik, tapi jarang 100% sembuh permanen. Tergantung penyebabnya, terapi modern seperti IPL (Intense Pulsed Light) kami sangat efektif mengurangi gejala signifikan untuk jangka panjang."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface-gray w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary">
            Jawaban untuk pertanyaan umum seputar kesehatan mata.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-[16px] border transition-colors duration-300 ${isOpen ? 'border-brand-blue/30 shadow-md shadow-brand-blue/5' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-semibold pr-8 text-[16px] ${isOpen ? 'text-brand-blue' : 'text-text-primary'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-secondary text-[15px] leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}