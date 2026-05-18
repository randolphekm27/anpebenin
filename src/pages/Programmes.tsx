import { motion } from 'motion/react';
import { Rocket, Users, ShieldCheck, Heart, Zap, Globe, ArrowUpRight } from 'lucide-react';

export const ProgrammesPage = () => {
  const programmes = [
    { 
      title: 'Programme Spécial d’Insertion dans l’Emploi (PSIE)', 
      desc: 'Une initiative présidentielle visant à placer 2 000 jeunes diplômés par an dans les entreprises privées.',
      icon: Rocket,
      color: 'bg-blue-500',
      tag: 'Gouvernemental'
    },
    { 
      title: 'AZOLI - Emploi pour les jeunes peu scolarisés', 
      desc: 'Un accompagnement sur mesure pour les jeunes ayant un faible niveau de scolarisation pour une insertion durable.',
      icon: Heart,
      color: 'bg-red-500',
      tag: 'Social'
    },
    { 
      title: 'Prodij - Projet de Développement de l’Insertion des Jeunes', 
      desc: 'Renforcement de l’employabilité et de l’entrepreneuriat des jeunes en milieu rural et urbain.',
      icon: Zap,
      color: 'bg-brand-accent',
      tag: 'Impact'
    },
    { 
      title: 'Plateforme Nationale du Volontariat', 
      desc: 'Engagez-vous pour le développement de votre pays tout en acquérant une expérience professionnelle précieuse.',
      icon: ShieldCheck,
      color: 'bg-brand-primary',
      tag: 'Engagement'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
      <div className="container-custom space-y-20">
        <div className="max-w-3xl space-y-6">
          <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">NOS PROGRAMMES INSTITUTIONNELS</span>
          <h1 className="text-5xl md:text-[72px] font-black leading-[0.95] tracking-tighter">
            Des solutions concrètes pour votre <span className="text-brand-primary">carrière.</span>
          </h1>
          <p className="text-brand-gray-dark/60 text-lg leading-relaxed max-w-2xl">
            L'État Béninois, à travers l'ANPE, déploie des programmes d'envergure nationale pour répondre aux défis spécifiques de l'emploi et de l'entrepreneuriat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programmes.map((prog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-10 rounded-3xl border border-brand-black/5 hover:border-brand-primary/20 hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-5 rounded-2xl ${prog.color} text-white shadow-lg`}>
                  <prog.icon size={32} />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-gray-50 border border-brand-black/5 text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark/50">{prog.tag}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{prog.title}</h3>
              <p className="text-brand-gray-dark/60 mb-8 leading-relaxed">{prog.desc}</p>
              <button className="flex items-center text-brand-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                En savoir plus <ArrowUpRight size={16} className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-black rounded-3xl p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12">
           <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">Vous êtes un partenaire international ?</h2>
              <p className="text-gray-400">Collaborons pour multiplier l'impact de nos programmes sur la jeunesse béninoise.</p>
              <button className="btn-primary border-none">Devenir partenaire</button>
           </div>
           <div className="flex-shrink-0">
              <Globe size={120} className="text-brand-primary opacity-20" />
           </div>
        </div>
      </div>
    </div>
  );
};
