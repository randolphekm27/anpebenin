import { motion } from 'motion/react';
import { Settings, ShieldCheck, Briefcase, Zap, Heart, MessageSquare, PieChart, Headphones, HeadphonesIcon } from 'lucide-react';

export const ServicesPage = () => {
  const services = [
    { title: 'Accompagnement Personnalisé', desc: 'Des conseillers experts vous aident à définir et atteindre vos objectifs professionnels.', icon: Heart },
    { title: 'Placement en Entreprise', desc: 'Mise en relation directe avec les employeurs les plus dynamiques du Bénin.', icon: Briefcase },
    { title: 'Coaching de Carrière', desc: 'Ateliers CV, préparation aux entretiens et développement de Soft Skills.', icon: Zap },
    { title: 'Aide à l’Entrepreneuriat', desc: 'Support technique et orientation pour lancer votre propre projet.', icon: PieChart },
    { title: 'Veille sur le Marché', desc: 'Accès privilégié aux tendances et statistiques du marché de l’emploi.', icon: ShieldCheck },
    { title: 'Support Juridique', desc: 'Conseils sur les droits du travail et les contrats pour sécuriser votre futur.', icon: MessageSquare },
  ];

  return (
    <div className="bg-brand-gray-light/30 min-h-screen">
      {/* Immersive Header */}
      <div className="min-h-[70svh] lg:min-h-[60vh] bg-brand-dark text-white flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 lg:px-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--brand-primary)_0%,_transparent_60%)] opacity-20"></div>
        <div className="container-custom relative z-10 text-center space-y-8 max-w-4xl">
          <div className="space-y-4">
            <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs">NOS SERVICES PUBLICS</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black leading-[1] lg:leading-[0.9] tracking-tighter">
              L'expertise au service de <span className="text-brand-primary">votre ambition.</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              Plus qu'une simple agence, nous sommes votre partenaire privilégié dans l'écosystème du travail au Bénin.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
             <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                <CheckCircle size={14} />
                <span>Service Gratuit</span>
             </div>
             <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                <CheckCircle size={14} />
                <span>Accompagnement d'État</span>
             </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4 lg:px-0">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-2xl border border-brand-black/5 hover:border-brand-primary/20 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-brand-primary/5 text-brand-primary flex items-center justify-center rounded-xl mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">{service.title}</h3>
              <p className="text-brand-gray-dark/50 text-xs lg:text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 lg:mt-32 p-8 lg:p-20 bg-brand-gray-light rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mx-4 lg:mx-0">
           <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold">Besoin d'un conseil spécifique ?</h2>
              <p className="text-brand-gray-dark/60 italic text-sm lg:text-base">"Notre mission est de ne laisser aucun talent sans opportunité."</p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                 <button className="btn-primary w-full sm:w-auto">Prendre RDV</button>
                 <div className="flex items-center space-x-2 text-brand-primary font-bold">
                    <HeadphonesIcon size={20} />
                    <span>Appelez le 113</span>
                 </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white rounded-2xl shadow-sm overflow-hidden p-6 lg:p-8 flex flex-col justify-between">
                 <div className="text-3xl lg:text-4xl font-bold text-brand-primary">98%</div>
                 <div className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Taux de satisfaction</div>
              </div>
              <div className="aspect-square bg-brand-primary text-white rounded-2xl shadow-sm overflow-hidden p-6 lg:p-8 flex flex-col justify-between -mt-4 lg:-mt-8">
                 <div className="text-3xl lg:text-4xl font-bold">24h</div>
                 <div className="text-[10px] lg:text-xs font-bold uppercase tracking-widest opacity-60">Réponse garantie</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
