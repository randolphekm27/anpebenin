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
    <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">NOS SERVICES PUBLICS</span>
          <h1 className="text-5xl md:text-[64px] font-black leading-tight tracking-tighter">L'expertise au service de <span className="text-brand-primary">votre ambition.</span></h1>
          <p className="text-brand-gray-dark/60 text-lg leading-relaxed">
            Plus qu'une simple agence, nous sommes votre partenaire privilégié dans l'écosystème du travail au Bénin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl border border-brand-black/5 hover:border-brand-primary/20 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-brand-primary/5 text-brand-primary flex items-center justify-center rounded-xl mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-brand-gray-dark/50 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 lg:p-20 bg-brand-gray-light rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl font-bold">Besoin d'un conseil spécifique ?</h2>
              <p className="text-brand-gray-dark/60 italic">"Notre mission est de ne laisser aucun talent sans opportunité."</p>
              <div className="flex items-center space-x-6">
                 <button className="btn-primary">Prendre RDV</button>
                 <div className="flex items-center space-x-2 text-brand-primary font-bold">
                    <HeadphonesIcon size={20} />
                    <span>Appelez le 113</span>
                 </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white rounded-2xl shadow-sm overflow-hidden p-8 flex flex-col justify-between">
                 <div className="text-4xl font-bold text-brand-primary">98%</div>
                 <div className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Taux de satisfaction</div>
              </div>
              <div className="aspect-square bg-brand-primary text-white rounded-2xl shadow-sm overflow-hidden p-8 flex flex-col justify-between -mt-8">
                 <div className="text-4xl font-bold">24h</div>
                 <div className="text-xs font-bold uppercase tracking-widest opacity-60">Réponse garantie</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
