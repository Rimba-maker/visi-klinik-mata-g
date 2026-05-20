import { motion } from 'framer-motion';
import { Glasses, Baby, Eye, Activity, ActivitySquare, Droplets, Smile, CircleDashed } from 'lucide-react';

const conditions = [
  {
    title: "Refraction Errors",
    icon: Glasses,
    items: ["Minus (myopia), plus (hyperopia)", "Silinder (astigmatism)", "Presbyopia (mata tua)"],
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Myopia Control Anak",
    icon: Baby,
    items: ["Atropine drops", "Ortho-K (contact lens malam)", "MiSight contact lens"],
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Katarak",
    icon: Eye,
    items: ["Phacoemulsification surgery", "Multifokal IOL implant", "Day-surgery, recovery cepat"],
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Glaucoma",
    icon: Activity,
    items: ["Early detection (tekanan mata)", "Medication & surgery", "Lifetime monitoring"],
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Diabetic Retinopathy",
    icon: ActivitySquare,
    items: ["Screening untuk diabetic patient", "Laser & injection treatment", "Anti-VEGF therapy"],
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Dry Eye Syndrome",
    icon: Droplets,
    items: ["Computer vision syndrome", "Meibomian gland dysfunction", "IPL therapy & punctal plug"],
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Mata Juling (Strabismus)",
    icon: Smile,
    items: ["Pada anak & dewasa", "Bedah otot mata", "Vision therapy"],
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    title: "Floater & Retinal Detachment",
    icon: CircleDashed,
    items: ["Posterior vitreous detachment", "Retinal tear & detachment", "Vitrectomy surgery"],
    color: "text-slate-500",
    bg: "bg-slate-500/10"
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
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function EyeConditions() {
  return (
    <section id="kondisi" className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Kondisi Mata Yang Kami Tangani
          </h2>
          <p className="text-xl text-text-secondary">
            Mulai dari gangguan refraksi umum hingga penanganan bedah kompleks, tim dokter spesialis kami siap membantu.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-surface-gray rounded-[18px] p-6 border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-full ${condition.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <condition.icon className={`w-6 h-6 ${condition.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {condition.title}
              </h3>
              <ul className="space-y-2">
                {condition.items.map((item, i) => (
                  <li key={i} className="text-[15px] text-text-secondary flex items-start">
                    <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-brand-blue flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}