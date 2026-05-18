import { motion } from 'motion/react';
import { 
  Calendar, Clock, Tag, ChevronRight, Search, 
  HelpCircle, MessageSquare, Phone, Mail, 
  LayoutGrid, ArrowRight, MapPin, Users
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Actualités ---

export const ActualitesPage = () => {
  const news = [
    {
      id: 1,
      category: 'Événement',
      title: 'Salon de l\'Emploi Digital à Cotonou : Plus de 50 entreprises présentes',
      excerpt: 'L\'ANPE organise la 3ème édition du salon dédié aux métiers du numérique ce vendredi...',
      date: '15 Mai 2026',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      category: 'Formation',
      title: 'Lancement du programme "Certif-Pro" pour 5000 jeunes diplômés',
      excerpt: 'Une nouvelle vague de certifications internationales gratuites est désormais accessible via le portail...',
      date: '12 Mai 2026',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      category: 'Coopération',
      title: 'Signature d\'un partenariat stratégique avec la CCIB pour l\'insertion',
      excerpt: 'L\'ANPE et la Chambre de Commerce et d\'Industrie du Bénin s\'unissent pour faciliter...',
      date: '10 Mai 2026',
      readTime: '3 min',
      image: 'https://images.unsplash.com/photo-1573161158362-59f51b4482b7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      category: 'Innovation',
      title: 'Intelligence Artificielle : L\'ANPE déploie son nouvel algorithme de matching',
      excerpt: 'Trouver le candidat idéal devient plus simple grâce à nos nouvelles capacités d\'analyse sémantique...',
      date: '08 Mai 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 px-4">
          <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">ACTUALITÉS & MÉDIAS</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight">Restez informé de l'évolution du <span className="text-brand-primary">marché.</span></h1>
          <p className="text-brand-gray-dark/60 text-lg">Suivez les dernières initiatives, événements et opportunités à travers tout le Bénin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {news.map((item, idx) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-brand-black/5 hover:shadow-2xl transition-all group flex flex-col sm:flex-row h-full"
            >
              <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="sm:w-2/3 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest rounded-full">{item.category}</span>
                    <div className="flex items-center text-[10px] text-brand-gray-dark/40 font-bold uppercase tracking-widest">
                       <Clock size={12} className="mr-1" />
                       {item.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-brand-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-brand-gray-dark/50 leading-relaxed line-clamp-2">{item.excerpt}</p>
                </div>
                <div className="pt-6 flex items-center justify-between border-t border-brand-black/5 mt-6">
                  <span className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">{item.date}</span>
                  <button className="text-brand-primary font-bold text-sm flex items-center hover:translate-x-1 transition-transform">
                    Lire la suite <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
           <button className="btn-secondary">Charger plus d'actualités</button>
        </div>
      </div>
    </div>
  );
};

// --- FAQ ---

export const FAQPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Comment s\'inscrire sur le portail de l\'ANPE ?',
      a: 'L\'inscription se fait en ligne via le bouton "Mon Espace". Munissez-vous de votre pièce d\'identité et de vos diplômes numérisés. Le processus prend environ 10 minutes.'
    },
    {
      q: 'Quels sont les documents nécessaires pour mon dossier ?',
      a: 'Vous aurez besoin d\'une copie de votre CNIE ou CIP, de vos diplômes certifiés, de vos attestations de travail si disponibles, et d\'un CV à jour au format PDF.'
    },
    {
      q: 'Comment postuler à une offre d\'emploi ?',
      a: 'Une fois connecté, recherchez l\'offre qui vous intéresse dans le Job Board, cliquez sur "Postuler" et validez votre candidature après avoir vérifié que votre CV est à jour.'
    },
    {
      q: 'Suis-je éligible aux programmes pour jeunes ?',
      a: 'La plupart de nos programmes s\'adressent aux jeunes de 18 à 35 ans. Certains programmes spécifiques comme le PSIE ont leurs propres critères détaillés dans la section Programmes.'
    },
    {
      q: 'Comment contacter un conseiller ANPE ?',
      a: 'Vous pouvez prendre rendez-vous via votre espace personnel ou vous rendre dans l\'antenne départementale la plus proche de votre domicile.'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">CENTRE D'AIDE</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-brand-black">Questions <span className="text-brand-primary">Fréquentes.</span></h1>
              <p className="text-brand-gray-dark/60 text-lg">Trouvez rapidement des réponses à vos questions les plus courantes.</p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-black/5 shadow-xl space-y-6">
              <h3 className="font-bold text-xl">Encore des questions ?</h3>
              <p className="text-sm text-brand-gray-dark/50">Nos conseillers sont disponibles pour vous accompagner personnellement.</p>
              <div className="space-y-4">
                <a href="tel:113" className="flex items-center space-x-4 p-4 bg-brand-gray-light rounded-2xl hover:bg-brand-primary/10 transition-colors">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center shrink-0"><Phone size={18} /></div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">Numéro Vert</p>
                    <p className="font-bold">113</p>
                  </div>
                </a>
                <a href="mailto:support@anpe.bj" className="flex items-center space-x-4 p-4 bg-brand-gray-light rounded-2xl hover:bg-brand-primary/10 transition-colors">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center shrink-0"><Mail size={18} /></div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">Email Support</p>
                    <p className="font-bold">support@anpe.bj</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-[2rem] border transition-all overflow-hidden ${activeFaq === idx ? 'border-brand-primary shadow-xl' : 'border-brand-black/5'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between"
                >
                  <span className="font-bold sm:text-lg pr-8">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === idx ? 'bg-brand-primary text-white rotate-45' : 'bg-brand-gray-light text-brand-gray-dark'}`}>
                    <LayoutGrid size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 sm:px-8 pb-8 text-brand-gray-dark/60 leading-relaxed font-medium"
                    >
                      <div className="pt-4 border-t border-brand-black/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Événements ---

export const EventsPage = () => {
  const events = [
    {
      title: 'Salon Régional de l\'Emploi - Borgou',
      date: '28 Juin 2026',
      location: 'Parakou, Place Tabéra',
      type: 'Salon Physique',
      color: 'bg-blue-500'
    },
    {
      title: 'Workshop Recrutement IT & Design',
      date: '05 Juillet 2026',
      location: 'Cotonou, Sèmè One',
      type: 'Atelier Pratique',
      color: 'bg-brand-primary'
    },
    {
      title: 'Forum National de l\'Entrepreneuriat',
      date: '15 Juillet 2026',
      location: 'Palais des Congrès, Cotonou',
      type: 'Conférence',
      color: 'bg-brand-accent'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 px-4">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">AGENDA INSTITUTIONNEL</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight">Nos prochains <span className="text-brand-primary">rendez-vous.</span></h1>
            <p className="text-brand-gray-dark/60 text-lg">Ne manquez aucun événement majeur pour votre insertion professionnelle.</p>
          </div>
          <div className="flex items-center space-x-2 bg-white p-2 rounded-full shadow-sm border border-brand-black/5 mx-auto lg:mx-0">
             <button className="px-6 py-2 bg-brand-primary text-white rounded-full font-bold text-sm">Juillet</button>
             <button className="px-6 py-2 text-brand-gray-dark/40 font-bold text-sm">Août</button>
             <button className="px-6 py-2 text-brand-gray-dark/40 font-bold text-sm">Septembre</button>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-brand-black/5 shadow-sm hover:shadow-2xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-brand-gray-light rounded-3xl flex flex-col items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-dark group-hover:text-white/60">{event.date.split(' ')[1]}</span>
                  <span className="text-3xl font-black tracking-tighter group-hover:text-white">{event.date.split(' ')[0]}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className={`w-2 h-2 rounded-full ${event.color}`}></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark/40">{event.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{event.title}</h3>
                  <div className="flex items-center text-sm text-brand-gray-dark/50 font-medium">
                    <MapPin size={16} className="mr-2 text-brand-primary" />
                    {event.location}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-brand-black/5">
                <div className="hidden lg:flex -space-x-3 items-center mr-4">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full bg-brand-gray-light border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">P{i}</div>
                   ))}
                   <div className="w-10 h-10 rounded-full bg-brand-primary/10 border-2 border-white flex items-center justify-center text-[10px] font-black text-brand-primary">+150</div>
                </div>
                <button className="btn-primary py-4 px-8 shadow-xl shadow-brand-primary/10">S'inscrire</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
