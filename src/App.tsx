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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${(!isHomePage || isScrolled || isMenuOpen) ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 relative z-50 focus:outline-none">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-xl tracking-tighter text-brand-primary">ANPE</span>
            <span className="text-[8px] uppercase tracking-widest text-brand-gray-dark font-bold leading-none">BÉNIN</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${location.pathname === link.path ? 'text-brand-primary' : 'text-brand-gray-dark'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4 relative z-50">
          <button className="p-2 text-brand-gray-dark hover:text-brand-primary transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <Link to="/connexion" className="hidden sm:flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-primary text-white font-bold text-[13px] shadow-md hover:bg-brand-dark transition-all">
            <User size={16} />
            <span>Mon Espace</span>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden p-6 border-t border-brand-black/5 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-lg font-bold py-2 ${location.pathname === link.path ? 'text-brand-primary' : 'text-brand-black'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/connexion" className="bg-brand-primary text-white py-4 rounded-xl flex items-center justify-center font-bold">
                Mon Espace
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
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
      <section className="min-h-[85vh] flex items-center relative overflow-hidden mb-0 px-6 sm:px-0">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="px-3 py-1 bg-brand-gray-light border border-gray-100 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Service Public Numérique</span>
            </div>
            
            <h1 className="text-6xl md:text-[72px] font-black leading-[0.9] tracking-tighter">
              L’OPPORTUNITÉ<br />
              <span className="text-brand-primary">DE DEMAIN</span><br />
              COMMENCE ICI.
            </h1>
            <p className="text-brand-gray-dark/70 text-lg md:text-xl max-w-lg leading-relaxed">
              L’ANPE accompagne chaque citoyen béninois dans sa quête d'excellence. 
              Emploi, formation, entrepreneuriat : nous bâtissons ensemble le futur professionnel du Bénin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/offres" className="btn-primary py-5 px-10 text-lg group">
                Je cherche un emploi
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/formations" className="btn-secondary py-5 px-10 text-lg">
                Je me forme
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-full flex items-center justify-center py-10"
          >
             {/* Organic shapes background */}
            <div className="absolute w-[500px] h-[500px] bg-brand-primary/10 rounded-full -right-20 blur-3xl"></div>
            <div className="absolute w-[350px] h-[350px] bg-brand-accent/10 rounded-[60px] rotate-12 -bottom-10 -left-10"></div>

            <div className="relative z-20 flex gap-6">
              <div className="w-[200px] sm:w-[220px] h-[300px] sm:h-[340px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl translate-y-12">
                <img 
                  src="/src/assets/images/anpe_hero_professionals_1779088259969.png" 
                  alt="Beninese Professional" 
                  className="w-full h-full object-cover scale-150 origin-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-[200px] sm:w-[220px] h-[300px] sm:h-[340px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/src/assets/images/anpe_hero_professionals_1779088259969.png" 
                  alt="Beninese Professional" 
                  className="w-full h-full object-cover translate-x-[-20%] scale-150 origin-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating Metric Card */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-20 right-0 sm:-right-4 z-40 bg-white p-6 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-brand-accent shrink-0">
                <Users size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-brand-primary leading-none">12,450</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Postulants Actifs</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Utility Bar */}
      <section className="bg-brand-gray-light border-y border-gray-200">
        <div className="container-custom py-10 flex flex-col md:flex-row gap-6">
           {[
             { title: 'Recrutement', desc: 'Espace dédié aux entreprises', icon: Briefcase, color: 'bg-green-50 text-brand-primary', link: '/espace-recruteurs' },
             { title: 'Formation', desc: 'Catalogue des certifications', icon: GraduationCap, color: 'bg-yellow-50 text-brand-accent', link: '/formations' },
             { title: 'Actualités', desc: 'Salons & Événements emploi', icon: LayoutGrid, color: 'bg-blue-50 text-blue-500', link: '/actualites' },
             { title: 'Centre d\'aide', desc: 'Assistance personnalisée', icon: Info, color: 'bg-gray-50 text-gray-500', link: '/faq' },
           ].map((item, idx) => (
             <Link key={idx} to={item.link} className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[15px]">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
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
      <section className="py-32">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
            <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">VOTRE RÉUSSITE</span>
            <h2 className="text-5xl font-bold">Un parcours vers l'excellence</h2>
            <p className="text-brand-gray-dark/60 leading-relaxed text-lg">Nous avons simplifié chaque étape pour que votre seule préoccupation soit votre réussite.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 text-center relative">
            {[
              { id: '01', title: 'Je m’inscris', desc: 'Créez votre profil sécurisé' },
              { id: '02', title: 'Profil complet', desc: 'Valorisez vos compétences' },
              { id: '03', title: 'Opportunités', desc: 'Explorez les offres' },
              { id: '04', title: 'Je postule', desc: 'En un clic, simplement' },
              { id: '05', title: 'Accompagnement', desc: 'Bénéficiez de conseils' },
              { id: '06', title: 'Je réussis', desc: 'Atteignez vos objectifs' },
            ].map((step, idx) => (
              <div key={idx} className="space-y-6 group">
                <div className="relative">
                  <div className="w-24 h-24 rounded-[2rem] bg-brand-gray-light flex items-center justify-center mx-auto text-brand-primary font-display font-bold text-2xl group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                    {step.id}
                  </div>
                  {idx < 5 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-brand-black/5"></div>
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg">{step.title}</h4>
                  <p className="text-[10px] text-brand-gray-dark/40 uppercase tracking-widest font-bold leading-tight">{step.desc}</p>
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
  const jobs = [
    { title: 'Développeur FullStack Senior', company: 'InovBénin', location: 'Cotonou', type: 'CDI', salary: '450k - 700k CFA', date: 'Il y a 2 jours' },
    { title: 'Responsable Marketing Digital', company: 'Digital Africa', location: 'Porto-Novo', type: 'CDA', salary: '350k - 500k CFA', date: 'Il y a 4 jours' },
    { title: 'Analyste Financier', company: 'Banque Atlantique', location: 'Cotonou', type: 'CDI', salary: '600k - 900k CFA', date: 'Il y a 1 semaine' },
    { title: 'Project Manager IT', company: 'E-Benin', location: 'Bureau / Télétravail', type: 'Expertise', salary: 'Consultant', date: 'Il y a 1 jour' },
    { title: 'Ingénieur DevOps', company: 'Orange Bénin', location: 'Cotonou', type: 'CDI', salary: '800k - 1.2M CFA', date: 'Il y a 3 jours' },
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
      <div className="container-custom space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">OFFRES D'EMPLOI</span>
            <h1 className="text-5xl md:text-[64px] font-black leading-tight tracking-tighter">Trouvez votre prochaine <span className="text-brand-primary">opportunité.</span></h1>
            <p className="text-brand-gray-dark/60 text-lg">Plus de 2,400 offres vérifiées par l'État pour propulser votre carrière.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row bg-white p-2 rounded-full shadow-2xl border border-brand-black/5 w-full md:w-auto">
            <div className="flex items-center px-8 border-b sm:border-b-0 sm:border-r border-brand-gray-light py-3 sm:py-0">
              <Search size={20} className="text-brand-primary mr-3" />
              <input type="text" placeholder="Poste, mots-clés..." className="outline-none text-sm w-full lg:w-48 bg-transparent font-medium" />
            </div>
            <div className="flex items-center px-8 py-3 sm:py-0">
              <MapPin size={20} className="text-brand-primary mr-3" />
              <select className="outline-none text-sm bg-transparent appearance-none cursor-pointer flex-1 font-medium pr-8">
                <option>Tout le Bénin</option>
                <option>Cotonou</option>
                <option>Porto-Novo</option>
                <option>Parakou</option>
              </select>
            </div>
            <button className="bg-brand-primary text-white p-5 rounded-full hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 space-y-8">
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
               <button className="w-full py-4 bg-white text-brand-primary rounded-xl font-bold text-sm hover:bg-brand-accent hover:text-brand-black transition-all relative z-10">M'alerter</button>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-6">
            <div className="flex justify-between items-center mb-4">
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
                className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-brand-black/5 hover:border-brand-primary/30 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex gap-8">
                    <div className="w-20 h-20 bg-brand-gray-light rounded-[1.5rem] flex items-center justify-center text-brand-primary font-bold text-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
                      {job.company[0]}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">{job.title}</h3>
                         {idx === 0 && <span className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Nouveau</span>}
                      </div>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-brand-gray-dark/50 font-medium">
                        <span className="flex items-center"><Briefcase size={16} className="mr-2 text-brand-primary/60" /> {job.company}</span>
                        <span className="flex items-center"><MapPin size={16} className="mr-2 text-brand-primary/60" /> {job.location}</span>
                        <span className="flex items-center"><Clock size={16} className="mr-2 text-brand-primary/60" /> {job.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right hidden md:block mr-8">
                      <p className="text-[10px] text-brand-gray-dark/30 font-bold uppercase tracking-[0.2em] mb-1">Salaire Indicatif</p>
                      <p className="text-xl font-bold text-brand-primary tracking-tight">{job.salary}</p>
                    </div>
                    <button 
                      onClick={() => alert(`Candidature envoyée pour le poste de ${job.title} !`)}
                      className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/10"
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
  <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
    <div className="container-custom space-y-12">
      <div className="max-w-3xl space-y-6">
        <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">ESPACE ENTREPRISES</span>
        <h1 className="text-5xl md:text-[72px] font-black leading-[0.95] tracking-tighter">Recrutez les meilleurs <span className="text-brand-primary">talents</span> du Bénin.</h1>
        <p className="text-brand-gray-dark/60 text-lg leading-relaxed">
          Accédez à la CVthèque nationale et bénéficiez de l'accompagnement de l'ANPE pour vos besoins en recrutement.
        </p>
        <div className="flex gap-4 pt-4">
          <Link to="/connexion" className="btn-primary">Publier une offre</Link>
          <button className="btn-secondary">Découvrir nos solutions</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'CVthèque vérifiée', desc: 'Accès à plus de 150,000 profils qualifiés.', icon: Users },
          { title: 'IA Matchmaking', desc: 'Algorithmes de recommandation de talents.', icon: Rocket },
          { title: 'Accompagnement', desc: 'Un conseiller dédié à votre entreprise.', icon: HandshakeIcon },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-brand-black/5 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-brand-gray-dark/50 leading-relaxed">{item.desc}</p>
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
            <Route path="/actualites" element={<PlaceholderPage title="Actualités ANPE" />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/connexion" element={<AuthPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/evenements" element={<PlaceholderPage title="Événements & Salons" />} />
            <Route path="/faq" element={<PlaceholderPage title="Centre d'aide" />} />
            <Route path="/espace-recruteurs" element={<RecruiterSpacePage />} />
            <Route path="/espace-jeunes" element={<ProgrammesPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
