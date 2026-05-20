import { motion } from 'framer-motion';
import { CalendarDays, MessageCircle } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-blue rounded-[32px] overflow-hidden shadow-2xl shadow-brand-blue/20 flex flex-col md:flex-row"
        >
          {/* Left Info Area */}
          <div className="p-10 md:p-12 md:w-5/12 bg-gradient-to-br from-brand-blue to-[#0055aa] text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Book Pemeriksaan Mata
              </h2>
              <p className="text-white/80 text-[16px] mb-8 leading-relaxed">
                Pemeriksaan komprehensif memakan waktu 45-60 menit. Hasil diagnostik dan rekomendasi akan langsung dijelaskan oleh dokter.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <CalendarDays className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Jadwal Praktik</div>
                    <div className="text-white/70 text-sm">Senin - Sabtu (08:00 - 20:00)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="text-sm text-white/60 mb-3">Butuh bantuan cepat?</div>
              <a href="#" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-pill font-medium transition-colors w-full justify-center shadow-lg shadow-green-500/20">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Direct
              </a>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="p-10 md:p-12 md:w-7/12 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wide">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-surface-gray border-transparent focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-text-primary" placeholder="Budi Santoso" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wide">No. WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-surface-gray border-transparent focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-text-primary" placeholder="0812..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wide">Layanan Yang Dibutuhkan</label>
                <select className="w-full px-4 py-3 rounded-lg bg-surface-gray border-transparent focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-text-primary appearance-none cursor-pointer">
                  <option value="">Pilih Layanan</option>
                  <option value="general">Pemeriksaan Rutin / Kacamata</option>
                  <option value="lasik">Konsultasi Lasik</option>
                  <option value="cataract">Konsultasi Katarak</option>
                  <option value="pediatric">Pemeriksaan Mata Anak</option>
                  <option value="other">Lainnya (Glaukoma, Retina, Dry Eye)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wide">Cabang Pilihan</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-surface-gray border-transparent focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-text-primary appearance-none cursor-pointer">
                    <option value="jaksel">Jakarta Selatan</option>
                    <option value="jakpus">Jakarta Pusat</option>
                    <option value="bsd">BSD Tangerang</option>
                    <option value="bekasi">Bekasi</option>
                    <option value="surabaya">Surabaya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wide">Tanggal Preferensi</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg bg-surface-gray border-transparent focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-text-primary" />
                </div>
              </div>

              <button className="w-full py-4 rounded-pill bg-text-primary text-white font-bold text-[16px] hover:bg-black transition-colors shadow-lg mt-4">
                Kirim Permintaan Booking
              </button>
              <p className="text-[12px] text-text-secondary text-center mt-4">
                Tim admin kami akan menghubungi Anda via WhatsApp untuk konfirmasi jam dan ketersediaan dokter.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}