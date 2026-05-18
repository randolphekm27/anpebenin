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
    <div className="bg-brand-gray-light/30 min-h-screen">
      {/* Immersive Header */}
      <div className="min-h-[70svh] lg:min-h-[60vh] bg-brand-dark text-white flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 lg:px-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--brand-primary)_0%,_transparent_60%)] opacity-20"></div>
        <div className="container-custom relative z-10 text-center space-y-8 max-w-4xl">
          <div className="space-y-4">
            <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs">NOS PROGRAMMES INSTITUTIONNELS</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black leading-[1] lg:leading-[0.9] tracking-tighter">
              Des solutions concrètes pour votre <span className="text-brand-primary">carrière.</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              L'État Béninois, à travers l'ANPE, déploie des programmes d'envergure nationale pour répondre aux défis spécifiques de l'emploi et de l'entrepreneuriat.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
             <button className="bg-brand-accent text-brand-black px-8 py-4 rounded-xl font-bold text-sm lg:text-base shadow-xl">Découvrir le PSIE</button>
             <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm lg:text-base backdrop-blur-sm">Voir tous les projets</button>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-12 lg:py-20 space-y-12 lg:space-y-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 px-4 lg:px-0">
          {programmes.map((prog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-8 lg:p-10 rounded-3xl border border-brand-black/5 hover:border-brand-primary/20 hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between items-start mb-6 lg:mb-8">
                <div className={`p-4 lg:p-5 rounded-2xl ${prog.color} text-white shadow-lg`}>
                  <prog.icon size={28} className="lg:hidden" />
                  <prog.icon size={32} className="hidden lg:block" />
                </div>
                <span className="px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-gray-50 border border-brand-black/5 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark/50">{prog.tag}</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 group-hover:text-brand-primary transition-colors">{prog.title}</h3>
              <p className="text-sm lg:text-base text-brand-gray-dark/60 mb-6 lg:mb-8 leading-relaxed">{prog.desc}</p>
              <button className="flex items-center text-brand-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                En savoir plus <ArrowUpRight size={16} className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-black rounded-[2.5rem] p-8 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mx-4 lg:mx-0 text-center lg:text-left">
           <div className="flex-1 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-display">Vous êtes un partenaire international ?</h2>
              <p className="text-sm lg:text-base text-gray-400">Collaborons pour multiplier l'impact de nos programmes sur la jeunesse béninoise.</p>
              <button className="btn-primary border-none w-full sm:w-auto">Devenir partenaire</button>
           </div>
           <div className="flex-shrink-0 hidden sm:block">
              <Globe size={100} className="text-brand-primary opacity-20 lg:w-[120px]" />
           </div>
        </div>
      </div>
    </div>
  );
};
