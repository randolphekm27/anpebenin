import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { 
  Menu, X, Search, User, Briefcase, GraduationCap, 
  LayoutGrid, Rocket, Info, MessageSquare, Bell,
  ChevronRight, ArrowRight, MapPin, Calendar, Clock,
  Filter, CheckCircle, TrendingUp, Users, ShieldCheck,
  Building2
} from 'lucide-react';

import ScrollToTop from './components/ScrollToTop.tsx';
import { UserDashboard } from './pages/Dashboard.tsx';
import { TrainingPage } from './pages/Training.tsx';
import { ProgrammesPage } from './pages/Programmes.tsx';
import { AuthPage } from './pages/Auth.tsx';
import { ServicesPage } from './pages/Services.tsx';
import { ContactPage, AboutPage } from './pages/StaticPages.tsx';
import { MobileVision, SocialSystem } from './pages/DesignSystem.tsx';
import { ActualitesPage, FAQPage, EventsPage } from './pages/HelpNews.tsx';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Offres d’emploi', path: '/offres' },
    { name: 'Formations', path: '/formations' },
    { name: 'Programmes', path: '/programmes' },
    { name: 'Services', path: '/services' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'À propos', path: '/a-propos' },
  ];

  const isHomePage = location.pathname === '/';
  const isDashboard = location.pathname.startsWith('/dashboard');

  if (isDashboard) return null;

  return (
    <>
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 bg-white shadow-sm py-3 lg:py-4`}>
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 relative z-[1001] focus:outline-none">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-lg sm:text-xl tracking-tighter text-brand-primary">ANPE</span>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-bold leading-none text-brand-gray-dark">BÉNIN</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-brand-primary ${location.pathname === link.path ? 'text-brand-primary' : 'text-brand-gray-dark'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 relative z-[1001]">
            <button className="p-2 transition-colors hidden md:block text-brand-gray-dark hover:text-brand-primary">
              <Search size={20} />
            </button>
            <Link to="/connexion" className="hidden sm:flex items-center space-x-2 px-5 lg:px-6 py-2 sm:py-2.5 rounded-full bg-brand-primary text-white font-bold text-[11px] lg:text-[13px] shadow-lg hover:bg-brand-dark transition-all">
              <User size={14} className="lg:size-[16px]" />
              <span>Mon Espace</span>
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen);
              }}
              className={`lg:hidden p-2 transition-colors rounded-xl relative ${isMenuOpen ? 'bg-brand-primary text-white' : 'text-brand-black bg-brand-gray-light'}`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] bg-white lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-full h-[50vh] bg-brand-primary/5 rounded-b-[5rem] -z-10"></div>
            
            <div className="flex flex-col p-8 pt-28 space-y-8 h-full">
              <div className="flex flex-col space-y-1">
                <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Navigation principale</span>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`text-4xl font-black tracking-tighter block py-2 ${location.pathname === link.path ? 'text-brand-primary' : 'text-brand-black'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto space-y-6 pb-8"
              >
                <Link 
                  to="/connexion" 
                  className="w-full bg-brand-primary text-white py-5 rounded-2xl flex items-center justify-center font-bold text-lg shadow-xl shadow-brand-primary/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} className="mr-3" />
                  Mon Espace Personnel
                </Link>
                
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/contact" className="p-4 bg-brand-gray-light rounded-xl text-center text-sm font-bold" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                  <Link to="/faq" className="p-4 bg-brand-gray-light rounded-xl text-center text-sm font-bold" onClick={() => setIsMenuOpen(false)}>Aide</Link>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2 py-4 text-brand-gray-dark/40 border-t border-brand-black/5">
                  <div className="flex space-x-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">ANPE BÉNIN</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">RÉPUBLIQUE DU BÉNIN</span>
                  </div>
                  <p className="text-[9px] font-medium opacity-50 italic">Service Public de l'Emploi</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="bg-brand-gray-dark text-white pt-20 pb-10 mt-auto">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-xl tracking-tighter text-white">ANPE</span>
              <span className="text-[8px] uppercase tracking-widest text-brand-primary font-bold leading-none">BÉNIN</span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            L'Agence Nationale Pour l'Emploi (ANPE) est au cœur du marché du travail au Bénin. Nous accompagnons les citoyens et les entreprises vers la réussite.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold mb-6 text-lg">Opportunités</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/offres" className="hover:text-brand-primary transition-colors">Offres d'emploi</Link></li>
            <li><Link to="/formations" className="hover:text-brand-primary transition-colors">Formations</Link></li>
            <li><Link to="/programmes" className="hover:text-brand-primary transition-colors">Programmes Jeunes</Link></li>
            <li><Link to="/evenements" className="hover:text-brand-primary transition-colors">Événements</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-lg">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/espace-recruteurs" className="hover:text-brand-primary transition-colors">Espace Recruteurs</Link></li>
            <li><Link to="/espace-jeunes" className="hover:text-brand-primary transition-colors">Espace Jeunes</Link></li>
            <li><Link to="/dashboard" className="hover:text-brand-primary transition-colors">Espace Candidat</Link></li>
            <li><Link to="/faq" className="hover:text-brand-primary transition-colors">Centre d'aide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-lg">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Siège Social: Cotonou, Bénin</li>
            <li>Tél: +229 21 00 00 00</li>
            <li>Email: contact@anpe.bj</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-gray-light/40 space-y-4 md:space-y-0">
        <p>© 2026 ANPE BÉNIN. Tous droits réservés.</p>
        <div className="flex space-x-6">
          <Link to="/mentions" className="hover:text-white transition-colors">Mentions Légales</Link>
          <Link to="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  return (
    <div className="pt-24 space-y-0">
      {/* Hero Section */}
      <section className="min-h-[100svh] flex items-center relative overflow-hidden mb-0 pt-24 lg:pt-0">
        {/* Immersive background for Home */}
        <div className="absolute inset-0 bg-white lg:hidden -z-10">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--brand-primary)_0%,_transparent_70%)]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] rounded-full"></div>
        </div>

        <div className="container-custom flex flex-col items-center z-10 py-12 lg:py-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:space-y-12 max-w-4xl mx-auto px-4"
          >
            <div className="px-3 py-1 bg-brand-gray-light border border-gray-100 rounded-full inline-flex items-center gap-2 mx-auto">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-brand-gray-dark/60 lg:text-gray-500">Service Public Numérique</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-black leading-[1] lg:leading-[0.82] tracking-tighter text-brand-black">
              L’OPPORTUNITÉ<br />
              <span className="text-brand-primary">DE DEMAIN</span><br />
              COMMENCE ICI.
            </h1>
            <p className="text-brand-gray-dark/70 text-base md:text-lg lg:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
              L’ANPE accompagne chaque citoyen béninois dans sa quête d'excellence. 
              Emploi, formation, entrepreneuriat : nous bâtissons ensemble le futur professionnel du Bénin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Link to="/offres" className="btn-primary py-4 sm:py-5 px-8 lg:px-12 text-lg group shadow-2xl shadow-brand-primary/40">
                Je cherche un emploi
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/formations" className="bg-brand-gray-light text-brand-black border border-brand-black/5 py-4 sm:py-5 px-8 lg:px-12 text-lg font-bold rounded-2xl hover:bg-brand-gray-light/80 transition-all">
                Je me forme
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-6xl mt-16 lg:mt-32 flex flex-col items-center justify-center py-6 lg:py-10"
          >
             {/* Organic shapes background */}
            <div className="absolute w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-brand-primary/10 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-20 flex gap-4 lg:gap-12 px-4 w-full justify-center">
              <div className="w-[150px] sm:w-[250px] lg:w-[340px] h-[240px] sm:h-[350px] lg:h-[480px] rounded-[35px] lg:rounded-[60px] overflow-hidden border-4 lg:border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] translate-y-12 lg:translate-y-24">
                <img 
                  src="/src/assets/images/anpe_hero_professionals_1779088259969.png" 
                  alt="Beninese Professional" 
                  className="w-full h-full object-cover scale-150 origin-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-[150px] sm:w-[250px] lg:w-[340px] h-[240px] sm:h-[350px] lg:h-[480px] rounded-[35px] lg:rounded-[60px] overflow-hidden border-4 lg:border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
                <img 
                  src="/src/assets/images/anpe_hero_professionals_1779088259969.png" 
                  alt="Beninese Professional" 
                  className="w-full h-full object-cover translate-x-[-20%] scale-150 origin-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Metric Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 lg:bottom-12 right-0 sm:right-10 lg:right-4 z-40 bg-white/90 backdrop-blur-md p-4 lg:p-7 rounded-[2rem] shadow-2xl border border-white/20 flex items-center gap-3 lg:gap-5 scale-90 lg:scale-110"
            >
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-brand-primary/30 shrink-0">
                <Users size={28} />
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-black text-brand-black leading-none tracking-tighter">12k+</div>
                <div className="text-[9px] lg:text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-[0.2em] mt-1 lg:mt-2">Professionnels Actifs</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Utility Bar */}
      <section className="bg-brand-gray-light border-y border-gray-200">
        <div className="container-custom py-8 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6">
           {[
             { title: 'Recrutement', desc: 'Espace dédié aux entreprises', icon: Briefcase, color: 'bg-green-50 text-brand-primary', link: '/espace-recruteurs' },
             { title: 'Formation', desc: 'Catalogue des certifications', icon: GraduationCap, color: 'bg-yellow-50 text-brand-accent', link: '/formations' },
             { title: 'Actualités', desc: 'Salons & Événements emploi', icon: LayoutGrid, color: 'bg-blue-50 text-blue-500', link: '/actualites' },
             { title: 'Centre d\'aide', desc: 'Assistance personnalisée', icon: Info, color: 'bg-gray-100 text-gray-500', link: '/faq' },
           ].map((item, idx) => (
             <Link key={idx} to={item.link} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gray-light/30 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform flex-shrink-0 relative z-10`}>
                  <item.icon size={22} />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-[15px]">{item.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">{item.desc}</p>
                </div>
             </Link>
           ))}
        </div>
      </section>

      {/* Quick Access Modules */}
      <section className="py-32 bg-brand-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Trouver un emploi', icon: Briefcase, color: 'text-brand-primary', link: '/offres' },
              { title: 'Trouver une formation', icon: GraduationCap, color: 'text-brand-accent', link: '/formations' },
              { title: 'Programmes jeunes', icon: Rocket, color: 'text-brand-primary', link: '/programmes' },
              { title: 'Espace recruteurs', icon: Users, color: 'text-brand-gray-dark', link: '/espace-recruteurs' },
              { title: 'Volontariat', icon: ShieldCheck, color: 'text-brand-primary', link: '/programmes' },
              { title: 'Créer mon compte', icon: User, color: 'text-brand-accent', link: '/connexion' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-brand-black/5 flex flex-col items-center text-center space-y-6 hover:shadow-2xl transition-all cursor-pointer group"
              >
                <Link to={item.link} className="flex flex-col items-center space-y-6 w-full">
                  <div className={`p-5 rounded-2xl bg-gray-50 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={40} />
                  </div>
                  <h3 className="font-display font-bold text-2xl">{item.title}</h3>
                  <p className="text-brand-gray-dark/50 text-sm leading-relaxed">Accédez à nos services dédiés pour faciliter votre parcours professionnel en toute simplicité.</p>
                  <div className="w-10 h-10 rounded-full border border-brand-black/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24 space-y-4 px-4">
            <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">VOTRE RÉUSSITE</span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Un parcours vers l'excellence</h2>
            <p className="text-brand-gray-dark/60 leading-relaxed text-base lg:text-lg">Nous avons simplifié chaque étape pour que votre seule préoccupation soit votre réussite.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-12 px-6 sm:px-0">
            {[
              { id: '01', title: 'Je m’inscris', desc: 'Créez votre profil sécurisé' },
              { id: '02', title: 'Profil complet', desc: 'Valorisez vos compétences' },
              { id: '03', title: 'Opportunités', desc: 'Explorez les offres' },
              { id: '04', title: 'Je postule', desc: 'En un clic, simplement' },
              { id: '05', title: 'Accompagnement', desc: 'Bénéficiez de conseils' },
              { id: '06', title: 'Je réussis', desc: 'Atteignez vos objectifs' },
            ].map((step, idx) => (
              <div key={idx} className="space-y-6 group text-center lg:text-left xl:text-center">
                <div className="relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[2rem] bg-brand-gray-light flex items-center justify-center mx-auto lg:mx-0 xl:mx-auto text-brand-primary font-display font-black text-2xl group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    {step.id}
                  </div>
                  {idx < 5 && (
                    <div className="hidden xl:block absolute top-1/2 -right-6 w-12 h-px bg-brand-black/10"></div>
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg lg:text-xl tracking-tight">{step.title}</h4>
                  <p className="text-[10px] text-brand-gray-dark/40 uppercase tracking-[0.2em] font-black leading-tight sm:px-4 lg:px-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileVision />
      <SocialSystem />
      
      {/* Testimonial / Institutional Quote */}
      <section className="py-32 border-t border-brand-black/5">
        <div className="container-custom text-center space-y-10">
           <div className="flex justify-center space-x-1 text-brand-accent">
              {[1, 2, 3, 4, 5].map(i => <ShieldCheck key={i} size={16} fill="currentColor" />)}
           </div>
           <p className="text-3xl md:text-5xl font-display font-medium text-brand-black leading-tight max-w-4xl mx-auto italic">
            "Travailler pour le Bénin, c'est d'abord permettre à chaque Béninois de trouver sa juste place dans l'économie de demain."
           </p>
           <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center"><User className="text-brand-primary" /></div>
              <div className="text-left">
                 <p className="font-bold text-sm">MINISTÈRE DU TRAVAIL</p>
                 <p className="text-xs text-brand-gray-dark/40 uppercase tracking-widest font-bold">République du Bénin</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const JobBoardPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobs = [
    { title: 'Développeur FullStack Senior', company: 'InovBénin', location: 'Cotonou', type: 'CDI', salary: '450k - 700k CFA', date: 'Il y a 2 jours', desc: 'Nous recherchons un expert React/Node pour rejoindre notre équipe d\'innovation. Vous travaillerez sur des projets d\'envergure nationale.' },
    { title: 'Responsable Marketing Digital', company: 'Digital Africa', location: 'Porto-Novo', type: 'CDA', salary: '350k - 500k CFA', date: 'Il y a 4 jours', desc: 'Pilotez la stratégie digitale d\'une agence dynamique. Expertise SEO/SEM requise.' },
    { title: 'Analyste Financier', company: 'Banque Atlantique', location: 'Cotonou', type: 'CDI', salary: '600k - 900k CFA', date: 'Il y a 1 semaine', desc: 'Analyse de risques et gestion de portefeuilles institutionnels.' },
    { title: 'Project Manager IT', company: 'E-Benin', location: 'Bureau / Télétravail', type: 'Expertise', salary: 'Consultant', date: 'Il y a 1 jour', desc: 'Coordination de projets gouvernementaux de digitalisation.' },
    { title: 'Ingénieur DevOps', company: 'Orange Bénin', location: 'Cotonou', type: 'CDI', salary: '800k - 1.2M CFA', date: 'Il y a 3 jours', desc: 'Maintenance et évolution des infrastructures cloud critiques.' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Recherche en cours pour : ' + (e.target as any)[0].value);
  };

  return (
    <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-brand-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="p-8 sm:p-12 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-brand-primary text-white flex items-center justify-center rounded-2xl font-bold text-2xl">
                       {selectedJob.company[0]}
                    </div>
                    <div>
                       <h2 className="text-3xl font-black tracking-tighter">{selectedJob.title}</h2>
                       <p className="text-brand-gray-dark/40 font-bold uppercase tracking-widest text-sm">{selectedJob.company}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedJob(null)} className="p-2 hover:bg-brand-gray-light rounded-full transition-colors"><X size={24} /></button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-brand-gray-light rounded-2xl">
                      <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest mb-1">Localisation</p>
                      <p className="font-bold flex items-center"><MapPin size={14} className="mr-2 text-brand-primary" /> {selectedJob.location}</p>
                   </div>
                   <div className="p-4 bg-brand-gray-light rounded-2xl">
                      <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest mb-1">Type de contrat</p>
                      <p className="font-bold flex items-center"><Briefcase size={14} className="mr-2 text-brand-primary" /> {selectedJob.type}</p>
                   </div>
                </div>

                <div className="space-y-4">
                   <h3 className="font-bold text-lg">Description du poste</h3>
                   <p className="text-brand-gray-dark/60 leading-relaxed">{selectedJob.desc}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <button 
                     onClick={() => alert(`Candidature envoyée pour ${selectedJob.title} !`)}
                     className="btn-primary flex-1 py-5"
                   >
                     Confirmer ma candidature
                   </button>
                   <button className="bg-brand-gray-light text-brand-black px-8 py-5 rounded-2xl font-bold flex items-center justify-center hover:bg-brand-gray-light/80 transition-all">
                      <Bookmark size={20} className="mr-2" />
                      Sauvegarder
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="container-custom space-y-8 lg:space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left px-4 lg:px-0">
            <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">OFFRES D'EMPLOI</span>
            <h1 className="text-4xl sm:text-5xl md:text-[64px] font-black leading-tight tracking-tighter">Trouvez votre prochaine <span className="text-brand-primary">opportunité.</span></h1>
            <p className="text-brand-gray-dark/60 text-base sm:text-lg">Plus de 2,400 offres vérifiées par l'État pour propulser votre carrière.</p>
          </div>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row bg-white p-2 rounded-2xl sm:rounded-full shadow-2xl border border-brand-black/5 w-full lg:w-auto mx-auto lg:mx-0">
            <div className="flex items-center px-6 sm:px-8 border-b sm:border-b-0 sm:border-r border-brand-gray-light py-4 sm:py-0">
              <Search size={20} className="text-brand-primary mr-3 flex-shrink-0" />
              <input type="text" placeholder="Poste, mots-clés..." className="outline-none text-sm w-full lg:w-48 bg-transparent font-medium" />
            </div>
            <div className="flex items-center px-6 sm:px-8 py-4 sm:py-0">
              <MapPin size={20} className="text-brand-primary mr-3 flex-shrink-0" />
              <select className="outline-none text-sm bg-transparent appearance-none cursor-pointer flex-1 font-medium pr-8">
                <option>Tout le Bénin</option>
                <option>Cotonou</option>
                <option>Porto-Novo</option>
                <option>Parakou</option>
              </select>
            </div>
            <button type="submit" className="bg-brand-primary text-white py-4 px-6 sm:p-5 rounded-xl sm:rounded-full hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center w-full sm:w-auto">
              <span className="sm:hidden mr-2 font-bold">Rechercher</span>
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        <div className="flex lg:hidden px-4">
           <button 
             onClick={() => setIsFilterOpen(!isFilterOpen)}
             className="w-full py-4 bg-white rounded-2xl border border-brand-black/5 flex items-center justify-center space-x-2 font-bold text-brand-gray-dark shadow-sm active:bg-gray-50 transition-colors"
           >
             <Filter size={18} className="text-brand-primary" />
             <span>{isFilterOpen ? 'Fermer les filtres' : 'Afficher les filtres'}</span>
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 px-4 lg:px-0">
          <aside className={`lg:col-span-1 space-y-8 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand-black/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold flex items-center text-lg"><Filter size={18} className="mr-2 text-brand-primary" /> Filtres</h3>
                <button className="text-xs text-brand-primary font-bold">Reset</button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold mb-4 uppercase tracking-widest text-brand-gray-dark/30">Type de contrat</h4>
                  <div className="space-y-3">
                    {['CDI', 'CDD', 'Stage Pro', 'Expertise'].map(type => (
                      <label key={type} className="flex items-center text-sm cursor-pointer group">
                        <input type="checkbox" className="mr-3 w-5 h-5 rounded-lg border-brand-gray-light text-brand-primary focus:ring-brand-primary/20 transition-all" />
                        <span className="font-medium group-hover:text-brand-primary transition-colors text-brand-gray-dark/70">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                   <h4 className="text-[10px] font-bold mb-4 uppercase tracking-widest text-brand-gray-dark/30">Domaine</h4>
                   <div className="space-y-3">
                     {['Digital', 'Finance', 'BTP', 'Industrie', 'Santé'].map(cat => (
                       <label key={cat} className="flex items-center text-sm cursor-pointer group">
                         <input type="checkbox" className="mr-3 w-5 h-5 rounded-lg border-brand-gray-light text-brand-primary focus:ring-brand-primary/20 transition-all" />
                         <span className="font-medium group-hover:text-brand-primary transition-colors text-brand-gray-dark/70">{cat}</span>
                       </label>
                     ))}
                   </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-primary p-8 rounded-[2rem] text-white space-y-6 shadow-2xl relative overflow-hidden">
               <h3 className="text-xl font-bold relative z-10">Recevez des alertes personnalisées.</h3>
               <p className="text-white/70 text-sm relative z-10">Ne manquez plus aucune opportunité correspondant à votre profil.</p>
               <button 
                 onClick={() => alert('Une alerte email a été créée pour vos critères !')}
                 className="w-full py-4 bg-white text-brand-primary rounded-xl font-bold text-sm hover:bg-brand-accent hover:text-brand-black transition-all relative z-10"
               >
                 M'alerter
               </button>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
               <p className="text-sm font-medium text-brand-gray-dark/40"><span className="text-brand-black font-bold">128</span> offres correspondent à vos critères</p>
               <div className="text-xs font-bold text-brand-gray-dark flex items-center">
                  Trier par : <span className="text-brand-primary ml-1 cursor-pointer">Les plus récentes</span>
               </div>
            </div>
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedJob(job)}
                className="bg-white p-6 sm:p-8 lg:p-10 rounded-[2.5rem] border border-brand-black/5 hover:border-brand-primary/30 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-gray-light rounded-[1.5rem] flex items-center justify-center text-brand-primary font-bold text-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                      {job.company[0]}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                         <h3 className="text-xl sm:text-2xl font-bold group-hover:text-brand-primary transition-colors">{job.title}</h3>
                         {idx === 0 && <span className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Nouveau</span>}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-brand-gray-dark/50 font-medium">
                        <span className="flex items-center"><Briefcase size={16} className="mr-2 text-brand-primary/60" /> {job.company}</span>
                        <span className="flex items-center"><MapPin size={16} className="mr-2 text-brand-primary/60" /> {job.location}</span>
                        <span className="flex items-center"><Clock size={16} className="mr-2 text-brand-primary/60" /> {job.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between xl:justify-end xl:space-x-4 border-t xl:border-t-0 pt-6 xl:pt-0">
                    <div className="text-left xl:text-right mr-8">
                      <p className="text-[10px] text-brand-gray-dark/30 font-bold uppercase tracking-[0.2em] mb-1">Salaire Indicatif</p>
                      <p className="text-lg sm:text-xl font-bold text-brand-primary tracking-tight">{job.salary}</p>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Candidature envoyée pour le poste de ${job.title} !`);
                      }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/10"
                    >
                      Postuler
                    </button>
                  </div>
                </div>
                {/* Visual accent */}
                <div className="absolute top-0 right-0 w-2 h-0 group-hover:h-full bg-brand-primary transition-all duration-500"></div>
              </motion.div>
            ))}
            
            <div className="pt-10 flex justify-center">
               <button className="btn-secondary flex items-center space-x-2">
                  <span>Charger plus d'offres</span>
                  <ArrowRight size={18} />
               </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 container-custom min-h-[70vh]">
    <h1 className="text-5xl font-black mb-8 tracking-tighter">{title}</h1>
    <div className="p-32 border-2 border-dashed border-brand-gray-light rounded-[3rem] flex flex-col items-center justify-center text-brand-gray-dark/20 text-center space-y-6">
      <LayoutGrid size={80} strokeWidth={1} />
      <div className="space-y-2">
         <p className="text-2xl font-bold text-brand-gray-dark/40">Section en déploiement</p>
         <p className="max-w-md mx-auto">Nous optimisons cette interface pour vous offrir la meilleure expérience digitale de service public.</p>
      </div>
      <Link to="/" className="text-brand-primary font-bold hover:underline">Retour à l'accueil</Link>
    </div>
  </div>
);

const RecruiterSpacePage = () => (
  <div className="bg-brand-gray-light/30 min-h-screen">
    {/* Full Height Hero for Recruiter */}
    <div className="min-h-[90svh] bg-brand-dark text-white flex items-center relative overflow-hidden pt-32 lg:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--brand-primary)_0%,_transparent_60%)] opacity-30"></div>
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 lg:px-0 py-12">
        <div className="max-w-3xl space-y-8 text-center lg:text-left">
          <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs">ESPACE ENTREPRISES</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black leading-[1] lg:leading-[0.9] tracking-tighter">
            Recrutez les<br />
            meilleurs <span className="text-brand-primary">talents</span><br />
            du Bénin.
          </h1>
          <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Accédez à la CVthèque nationale et bénéficiez de l'accompagnement personnalisé de l'ANPE pour vos besoins stratégiques en recrutement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Link to="/connexion" className="btn-primary py-5 px-10 text-lg shadow-2xl shadow-brand-primary/20">Publier une offre</Link>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 py-5 px-10 text-lg font-bold rounded-2xl transition-all backdrop-blur-md">Découvrir nos solutions</button>
          </div>
        </div>
        
        <div className="relative hidden lg:flex justify-center">
           <div className="w-[400px] h-[500px] bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-sm p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center"><Building2 size={24} /></div>
                 <h3 className="text-3xl font-black tracking-tighter">Portail<br />Entreprise</h3>
              </div>
              <div className="space-y-6">
                 <div className="p-4 bg-white/10 rounded-2xl border border-white/5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-primary rounded-lg"></div>
                    <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                 </div>
                 <div className="p-4 bg-white/10 rounded-2xl border border-white/5 flex items-center gap-4 opacity-60">
                    <div className="w-10 h-10 bg-white/20 rounded-lg"></div>
                    <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                 </div>
              </div>
           </div>
           {/* Decorative dots */}
           <div className="absolute -top-10 -right-10 grid grid-cols-4 gap-4">
              {[...Array(12)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-brand-primary/40 rounded-full"></div>)}
           </div>
        </div>
      </div>
    </div>

    <div className="container-custom py-20 lg:py-32 px-4 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'CVthèque vérifiée', desc: 'Accès à plus de 150,000 profils qualifiés et minutieusement vérifiés par nos conseillers.', icon: Users },
          { title: 'IA Matchmaking', desc: 'Algorithmes avancés de recommandation pour trouver le candidat idéal en quelques secondes.', icon: Rocket },
          { title: 'Accompagnement', desc: 'Profitez de l\'expertise d\'un conseiller dédié à votre entreprise pour vos recrutements de masse.', icon: HandshakeIcon },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-brand-black/5 shadow-sm hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
              <item.icon size={28} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
            <p className="text-sm lg:text-base text-brand-gray-dark/50 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HandshakeIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2 6-6"/><path d="m3 11 1.164.582a2 2 0 0 0 1.741 0L7.5 10.741a2 2 0 0 1 1.742 0l1.164.582a2 2 0 0 0 1.742 0l1.164-.582a2 2 0 0 1 1.741 0L16.5 11.259a2 2 0 0 0 1.742 0L21 10"/><path d="m14 17 8-8"/><path d="M14 5a2 2 0 1 0-4 0"/><path d="M8 5a2 2 0 1 0-4 0"/><path d="M18 5a2 2 0 1 0-4 0"/></svg>
);

// Master App Component
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offres" element={<JobBoardPage />} />
            <Route path="/formations" element={<TrainingPage />} />
            <Route path="/programmes" element={<ProgrammesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/actualites" element={<ActualitesPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/connexion" element={<AuthPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/espace-recruteurs" element={<RecruiterSpacePage />} />
            <Route path="/espace-jeunes" element={<ProgrammesPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
