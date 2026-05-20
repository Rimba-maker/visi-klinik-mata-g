import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-gray border-t border-gray-200 pt-16 pb-8 w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 text-text-primary font-semibold text-xl tracking-tight mb-4">
              <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Visi Klinik Mata
            </a>
            <p className="text-text-secondary text-[14px] leading-relaxed mb-6">
              See clearly. Live brightly.<br />
              Klinik mata spesialis dengan layanan komprehensif berstandar internasional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-text-secondary hover:bg-brand-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-text-secondary hover:bg-brand-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2.5 7.1C2.6 5.9 3.5 4.9 4.7 4.7 6.8 4.3 12 4.3 12 4.3s5.2 0 7.3.4c1.2.2 2.1 1.2 2.2 2.4.4 2.1.4 4.9.4 4.9s0 2.8-.4 4.9c-.1 1.2-1 2.2-2.2 2.4-2.1.4-7.3.4-7.3.4s-5.2 0-7.3-.4c-1.2-.2-2.1-1.2-2.2-2.4-.4-2.1-.4-4.9-.4-4.9s0-2.8.4-4.9z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">Layanan Utama</h4>
            <ul className="space-y-3 text-[14px] text-text-secondary">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Femto-LASIK & SMILE</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Operasi Katarak</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Klinik Mata Anak</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Glaukoma & Retina</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Optical Shop</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">Informasi</h4>
            <ul className="space-y-3 text-[14px] text-text-secondary">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Jadwal Dokter</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Harga & Asuransi</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Syarat Pasien BPJS</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Artikel Edukasi</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Karir</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="lokasi">
            <h4 className="font-bold text-text-primary mb-4">Hubungi Kami</h4>
            <ul className="space-y-4 text-[14px] text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-gray-400 mt-0.5" />
                <span>Tersedia di 5 cabang: Jakarta Selatan, Jakarta Pusat, BSD, Bekasi, Surabaya.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-400" />
                <span>Call Center: 1500-VISI</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-gray-400" />
                <span>hello@visiklinikmata.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-text-secondary">
          <div>
            &copy; {new Date().getFullYear()} Visi Klinik Mata. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}