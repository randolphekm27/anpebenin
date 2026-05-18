import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, ArrowRight, MessageSquare, ShieldCheck, PieChart, Users, Zap, Heart } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">CONTACTEZ-NOUS</span>
              <h1 className="text-5xl md:text-7xl font-bold">À votre écoute, <span className="text-brand-primary">partout.</span></h1>
              <p className="text-brand-gray-dark/60 text-lg leading-relaxed">
                Nos équipes sont mobilisées dans tout le Bénin pour répondre à vos questions et vous accompagner.
              </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-brand-primary text-white flex items-center justify-center rounded-2xl shadow-lg border border-brand-primary/20"><Phone size={24} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Téléphone (Numéro Vert)</p>
                    <p className="text-2xl font-bold text-brand-primary">113</p>
                  </div>
               </div>
               <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-brand-gray-light text-brand-gray-dark/60 flex items-center justify-center rounded-2xl border border-brand-black/5"><Mail size={24} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Email Institutionnel</p>
                    <p className="text-2xl font-bold text-brand-black">contact@anpe.bj</p>
                  </div>
               </div>
               <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-brand-gray-light text-brand-gray-dark/60 flex items-center justify-center rounded-2xl border border-brand-black/5"><MapPin size={24} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Siège Social</p>
                    <p className="text-lg font-bold text-brand-black">Avenue Steinmetz, Cotonou</p>
                  </div>
               </div>
            </div>
          </div>

          <form className="bg-white p-10 lg:p-16 rounded-[2.5rem] border border-brand-black/5 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Nom</label>
                  <input type="text" placeholder="Koffi" className="w-full px-6 py-4 rounded-xl bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Prénom</label>
                  <input type="text" placeholder="Adjavon" className="w-full px-6 py-4 rounded-xl bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
               </div>
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Email</label>
               <input type="email" placeholder="koffi@example.bj" className="w-full px-6 py-4 rounded-xl bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Message</label>
               <textarea rows={4} placeholder="Comment pouvons-nous vous aider ?" className="w-full px-6 py-4 rounded-xl bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20">
               <span>Envoyer le message</span>
               <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const AboutPage = () => {
  const values = [
    { title: 'Excellence', desc: 'Nous visons le plus haut niveau de service pour nos concitoyens.', icon: ShieldCheck },
    { title: 'Inclusion', desc: 'Aucun Béninois ne doit être laissé au bord du chemin professionnel.', icon: Users },
    { title: 'Innovation', desc: 'Nous utilisons le numérique pour transformer le marché du travail.', icon: Zap },
    { title: 'Intégrité', desc: 'La transparence est le socle de notre confiance publique.', icon: Heart },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">NOTRE HISTOIRE</span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">Bâtir le <span className="text-brand-primary">Bénin</span> de demain.</h1>
              <p className="text-brand-gray-dark/60 text-lg leading-relaxed">
                Depuis plus de 20 ans, l'ANPE est le trait d'union entre le capital humain béninois et les opportunités du marché. Sous l'impulsion de la modernité, nous nous transformons pour devenir le moteur de la croissance inclusive du pays.
              </p>
           </div>
           <div className="relative">
              <div className="aspect-square bg-brand-gray-light rounded-[3rem] p-12 overflow-hidden flex flex-col justify-end">
                 <div className="space-y-4 relative z-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Mot du Directeur</p>
                    <p className="text-2xl font-display font-medium italic">"Notre agence est le miroir de l'ambition béninoise. Nous ne nous contentons pas de trouver des emplois, nous créons des destins."</p>
                 </div>
                 <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand-primary/10 rounded-full -mr-20 -mt-20"></div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {values.map((val, idx) => (
             <div key={idx} className="bg-white p-10 rounded-2xl border border-brand-black/5 hover:border-brand-primary/20 transition-all group">
                <val.icon className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-brand-gray-dark/50 text-sm leading-relaxed">{val.desc}</p>
             </div>
           ))}
        </div>

        <div className="bg-brand-dark rounded-3xl p-12 lg:p-20 text-white grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
           <div>
              <p className="text-6xl font-bold text-brand-primary mb-2">500k+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Candidats accompagnés</p>
           </div>
           <div>
              <p className="text-6xl font-bold text-brand-accent mb-2">25k+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Entreprises partenaires</p>
           </div>
           <div>
              <p className="text-6xl font-bold text-brand-primary mb-2">12</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Antennes régionales</p>
           </div>
        </div>
      </div>
    </div>
  );
};
