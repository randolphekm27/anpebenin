import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, ArrowRight, MessageSquare, ShieldCheck, PieChart, Users, Zap, Heart } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10 lg:space-y-12 px-4 lg:px-0 text-center lg:text-left">
            <div className="space-y-6">
              <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">CONTACTEZ-NOUS</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">À votre écoute, <span className="text-brand-primary">partout.</span></h1>
              <p className="text-brand-gray-dark/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Nos équipes sont mobilisées dans tout le Bénin pour répondre à vos questions et vous accompagner.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
               <div className="flex flex-col sm:flex-row items-center sm:space-x-6 text-center sm:text-left gap-4">
                  <div className="w-14 h-14 bg-brand-primary text-white flex items-center justify-center rounded-2xl shadow-lg border border-brand-primary/20 flex-shrink-0"><Phone size={24} /></div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40 mb-1">Téléphone (Numéro Vert)</p>
                    <p className="text-xl sm:text-2xl font-bold text-brand-primary">113</p>
                  </div>
               </div>
               <div className="flex flex-col sm:flex-row items-center sm:space-x-6 text-center sm:text-left gap-4">
                  <div className="w-14 h-14 bg-brand-gray-light text-brand-gray-dark/60 flex items-center justify-center rounded-2xl border border-brand-black/5 flex-shrink-0"><Mail size={24} /></div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40 mb-1">Email Institutionnel</p>
                    <p className="text-xl sm:text-2xl font-bold text-brand-black">contact@anpe.bj</p>
                  </div>
               </div>
               <div className="flex flex-col sm:flex-row items-center sm:space-x-6 text-center sm:text-left gap-4">
                  <div className="w-14 h-14 bg-brand-gray-light text-brand-gray-dark/60 flex items-center justify-center rounded-2xl border border-brand-black/5 flex-shrink-0"><MapPin size={24} /></div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40 mb-1">Siège Social</p>
                    <p className="text-base sm:text-lg font-bold text-brand-black">Avenue Steinmetz, Cotonou</p>
                  </div>
               </div>
            </div>
          </div>

          <form className="bg-white p-8 sm:p-10 lg:p-16 rounded-[2.5rem] border border-brand-black/5 shadow-2xl space-y-6 lg:space-y-8 mx-4 lg:mx-0">
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
      <div className="container-custom space-y-16 lg:space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 lg:px-0 text-center lg:text-left">
           <div className="space-y-6 lg:space-y-8">
              <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">NOTRE HISTOIRE</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">Bâtir le <span className="text-brand-primary">Bénin</span> de demain.</h1>
              <p className="text-brand-gray-dark/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Depuis plus de 20 ans, l'ANPE est le trait d'union entre le capital humain béninois et les opportunités du marché. Sous l'impulsion de la modernité, nous nous transformons pour devenir le moteur de la croissance inclusive du pays.
              </p>
           </div>
           <div className="relative">
              <div className="aspect-square bg-brand-gray-light rounded-[2.5rem] p-8 sm:p-12 overflow-hidden flex flex-col justify-end">
                 <div className="space-y-4 relative z-10 text-center sm:text-left">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary">Mot du Directeur</p>
                    <p className="text-xl sm:text-2xl font-display font-medium italic">"Notre agence est le miroir de l'ambition béninoise. Nous ne nous contentons pas de trouver des emplois, nous créons des destins."</p>
                 </div>
                 <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand-primary/10 rounded-full -mr-16 lg:-mr-20 -mt-16 lg:-mt-20"></div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 lg:px-0">
           {values.map((val, idx) => (
             <div key={idx} className="bg-white p-8 lg:p-10 rounded-2xl border border-brand-black/5 hover:border-brand-primary/20 transition-all group">
                <val.icon className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">{val.title}</h3>
                <p className="text-brand-gray-dark/50 text-xs lg:text-sm leading-relaxed">{val.desc}</p>
             </div>
           ))}
        </div>

        <div className="bg-brand-dark rounded-[2.5rem] p-10 lg:p-20 text-white grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 text-center mx-4 lg:mx-0">
           <div className="space-y-2">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary">500k+</p>
              <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-500">Candidats accompagnés</p>
           </div>
           <div className="space-y-2">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-accent">25k+</p>
              <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-500">Entreprises partenaires</p>
           </div>
           <div className="space-y-2">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary">12</p>
              <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-500">Antennes régionales</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export const MentionsPage = () => (
  <div className="pt-32 pb-20 container-custom px-4">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">JURIDIQUE</span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter">Mentions Légales</h1>
      </div>
      <div className="prose prose-brand max-w-none space-y-8 text-brand-gray-dark/70 font-medium">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-black">Éditeur du site</h2>
          <p>Le site internet officiel de l'ANPE (Agence Nationale Pour l'Emploi) est édité par l'ANPE Bénin, établissement public à caractère social situé à Cotonou.</p>
          <p>Siège social : Avenue Steinmetz, Cotonou, Bénin.</p>
          <p>Téléphone : +229 21 00 00 00</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-black">Hébergement</h2>
          <p>Le site est hébergé sur les infrastructures souveraines de la République du Bénin, garantissant la sécurité et la disponibilité des services numériques de l'État.</p>
        </section>
      </div>
    </div>
  </div>
);

export const PrivacyPage = () => (
  <div className="pt-32 pb-20 container-custom px-4">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">DONNÉES PERSONNELLES</span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter">Confidentialité</h1>
      </div>
      <div className="prose prose-brand max-w-none space-y-8 text-brand-gray-dark/70 font-medium">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-black">Protection des données</h2>
          <p>L'ANPE s'engage à protéger les données personnelles de chaque citoyen conformément à la législation béninoise sur le numérique.</p>
          <p>Les informations collectées lors de votre inscription servent exclusivement à faciliter votre insertion professionnelle et à vous proposer des opportunités adaptées à votre profil.</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-black">Vos droits</h2>
          <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données via votre espace personnel ou sur simple demande auprès de nos services.</p>
        </section>
      </div>
    </div>
  </div>
);


