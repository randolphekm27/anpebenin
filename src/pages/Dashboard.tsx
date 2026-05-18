import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, Search, Bell, User, Briefcase, GraduationCap, 
  Settings, LogOut, LayoutDashboard, FileText, Bookmark, 
  MessageCircle, BarChart3, Clock, MapPin, CheckCircle2,
  ChevronRight, X, Home
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { label: 'Candidatures', value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Entretiens', value: '3', icon: Clock, color: 'text-brand-primary', bg: 'bg-green-50' },
    { label: 'Offres sauvées', value: '24', icon: Bookmark, color: 'text-brand-accent', bg: 'bg-yellow-50' },
    { label: 'Messages', value: '5', icon: MessageCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const sidebarItems = [
    { name: 'Vue d’ensemble', icon: LayoutDashboard, id: 'Overview' },
    { name: 'Mes candidatures', icon: FileText, id: 'Apps' },
    { name: 'Ma CVthèque', icon: Briefcase, id: 'CV' },
    { name: 'Formations', icon: GraduationCap, id: 'Lessons' },
    { name: 'Favoris', icon: Bookmark, id: 'Saves' },
    { name: 'Messages', icon: MessageCircle, badge: '5', id: 'Chat' },
  ];

  const bottomNavItems = [
    { icon: LayoutDashboard, label: 'Tableau', id: 'Overview' },
    { icon: FileText, label: 'Postes', id: 'Apps' },
    { icon: MessageCircle, label: 'Chat', id: 'Chat', badge: '5' },
    { icon: User, label: 'Profil', id: 'Profile' },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="space-y-1 flex-grow">
        <div className="px-4 py-6 mb-4 lg:hidden border-b border-brand-black/5">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-display font-black text-xl tracking-tighter text-brand-primary">ANPE</span>
          </Link>
        </div>
        {sidebarItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => {
              setActiveTab(item.id);
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === item.id ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-brand-gray-dark/60 hover:bg-brand-gray-light hover:text-brand-black'}`}
          >
            <div className="flex items-center space-x-3">
              <item.icon size={18} />
              <span>{item.name}</span>
            </div>
            {item.badge && <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px]">{item.badge}</span>}
          </button>
        ))}
      </div>

      <div className="pt-8 border-t border-brand-black/5 space-y-1">
        <button 
          onClick={() => setActiveTab('Profile')}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-brand-gray-dark/60 hover:bg-brand-gray-light hover:text-brand-black transition-all"
        >
          <Settings size={18} />
          <span>Paramètres</span>
        </button>
        <Link 
          to="/"
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
        >
          <LogOut size={18} />
          <span>Déconnexion</span>
        </Link>
      </div>
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-8 lg:space-y-12">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-5 lg:p-8 rounded-[2rem] shadow-sm border border-brand-black/5 group hover:shadow-xl transition-all"
          >
            <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <stat.icon size={22} className="lg:size-26" />
            </div>
            <p className="text-[10px] lg:text-xs font-black text-brand-gray-dark/30 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl lg:text-4xl font-black tracking-tighter">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Latest Applications */}
        <div className="lg:col-span-1 xl:col-span-2 space-y-6">
          <div className="bg-white rounded-[2rem] border border-brand-black/5 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-brand-black/5 flex items-center justify-between">
              <h3 className="font-bold text-sm lg:text-base">Candidatures récentes</h3>
              <button onClick={() => setActiveTab('Apps')} className="text-brand-primary text-xs font-bold hover:underline">Voir tout</button>
            </div>
            <div className="divide-y divide-brand-black/5">
              {[
                { title: 'Frontend Developer', company: 'InovBénin', status: 'En revue', date: 'Hier', color: 'bg-blue-500' },
                { title: 'UI Designer', company: 'Digital Africa', status: 'Entretien', date: 'Il y a 3 jours', color: 'bg-brand-primary' },
                { title: 'Project Coordinator', company: 'UNICEF Bénin', status: 'Refusé', date: 'Il y a 1 semaine', color: 'bg-red-500' },
              ].map((app, idx) => (
                <div key={idx} className="p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-brand-gray-light/50 transition-all cursor-pointer gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-brand-gray-dark/40 text-sm">
                      {app.company[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{app.title}</p>
                      <p className="text-xs text-brand-gray-dark/40">{app.company} • {app.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end space-x-6">
                    <span className="flex items-center text-xs font-medium px-3 py-1 rounded-full bg-gray-50 border border-brand-black/5">
                      <div className={`w-1.5 h-1.5 rounded-full ${app.color} mr-2`}></div>
                      {app.status}
                    </span>
                    <ChevronRight size={16} className="text-brand-gray-dark/30 hidden sm:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="space-y-6">
          <div className="bg-brand-gray-dark text-white p-8 rounded-[2rem] shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Profil à 85%</h3>
              <CheckCircle2 className="text-brand-primary" size={24} />
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="w-[85%] bg-brand-primary h-full"></div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">Complétez vos certifications pour augmenter vos chances d'être contacté par les recruteurs de 40%.</p>
            <button 
              onClick={() => alert('Profil optimisé avec succès !')}
              className="w-full py-4 bg-brand-primary rounded-xl font-bold text-sm lg:text-base hover:bg-brand-dark transition-all"
            >
              Optimiser mon profil
            </button>
          </div>

          <div className="bg-brand-accent/10 border border-brand-accent/20 p-6 rounded-[2rem] space-y-4">
            <h4 className="font-bold text-brand-gray-dark">Alerte Recruteur</h4>
            <p className="text-xs text-brand-gray-dark/70">3 recruteurs ont consulté votre profil cette semaine.</p>
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-brand-accent/20 flex items-center justify-center text-[10px] font-bold text-brand-gray-dark/40 shadow-sm">R{i}</div>
                ))}
              </div>
              <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">+ 12 vus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AppsTab = () => (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">Mes candidatures</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map(i => (
           <div key={i} className="bg-white p-8 rounded-[2rem] border border-brand-black/5 shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-brand-gray-light text-brand-gray-dark/60 text-[10px] font-bold uppercase tracking-widest rounded-full">CDI</span>
                <span className="text-xs font-bold text-brand-primary">En cours</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Architecte Solutions Cloud</h4>
              <p className="text-brand-gray-dark/40 text-sm mb-6 uppercase font-bold tracking-widest">MTN BÉNIN • Il y a 5 jours</p>
              <div className="flex items-center justify-between pt-6 border-t border-brand-black/5">
                <button className="text-brand-primary font-bold text-sm" onClick={() => alert('Détails de la candidature')}>Détails</button>
                <div className="flex -space-x-2">
                   {[1, 2].map(j => <div key={j} className="w-8 h-8 rounded-full bg-brand-gray-light border-2 border-white"></div>)}
                </div>
              </div>
           </div>
        ))}
      </div>
    </div>
  );

  const CVTab = () => (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black tracking-tighter">Ma CVthèque</h2>
          <button className="btn-primary py-3 px-6 text-sm" onClick={() => alert('Upload documentation')}>Ajouter un document</button>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'CV Principal 2026.pdf', type: 'CV', icon: FileText },
            { name: 'Diplôme Master.jpg', type: 'Diplôme', icon: GraduationCap },
            { name: 'Attestation Stage.pdf', type: 'Attestation', icon: CheckCircle2 }
          ].map((doc, idx) => (
             <div key={idx} className="bg-white p-6 rounded-3xl border border-brand-black/5 flex items-center space-x-6 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-14 h-14 bg-brand-gray-light text-brand-gray-dark/60 rounded-2xl flex items-center justify-center shrink-0">
                  <doc.icon size={24} />
                </div>
                <div className="overflow-hidden">
                   <p className="font-bold text-sm truncate">{doc.name}</p>
                   <p className="text-[10px] text-brand-gray-dark/40 font-bold uppercase tracking-widest">{doc.type}</p>
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  const ProfileTab = () => (
    <div className="max-w-4xl space-y-8">
      <div className="flex items-center justify-between">
         <h2 className="text-3xl font-black tracking-tighter">Mon Profil</h2>
         <button className="btn-secondary py-2 px-4 text-xs" onClick={() => alert('Modification activée')}>Modifier mon profil</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-1 space-y-6">
            <div className="aspect-square bg-white rounded-[2rem] border border-brand-black/5 p-4 relative group">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Koffi" alt="Avatar" className="w-full h-full object-cover" />
               <button className="absolute bottom-4 right-4 p-3 bg-brand-primary text-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"><LayoutGrid size={16} /></button>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-black/5 space-y-4">
               <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">Statut du compte</p>
               <div className="flex items-center space-x-2 text-green-500 font-bold text-sm">
                  <CheckCircle2 size={16} />
                  <span>Vérifié</span>
               </div>
            </div>
         </div>
         <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-brand-black/5 space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">Nom complet</p>
                     <p className="font-bold">Koffi ADJAVON</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">Email</p>
                     <p className="font-bold">koffi.a@example.bj</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">Téléphone</p>
                     <p className="font-bold">+229 97 00 00 00</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">Localisation</p>
                     <p className="font-bold">Cotonou, Bénin</p>
                  </div>
               </div>
               <div className="pt-6 border-t border-brand-black/5 space-y-4">
                  <p className="text-[10px] font-bold text-brand-gray-dark/40 uppercase tracking-widest">Bio Professionnelle</p>
                  <p className="text-sm text-brand-gray-dark/60 leading-relaxed font-medium">Passionné de technologie et diplômé d'un Master en Informatique, je cherche à mettre mes compétences au service de l'écosystème numérique béninois.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  const ChatTab = () => (
    <div className="h-[calc(100vh-280px)] bg-white rounded-[2.5rem] border border-brand-black/5 flex overflow-hidden lg:shadow-xl">
       <div className="w-full sm:w-80 border-r border-brand-black/5 flex flex-col">
          <div className="p-6 border-b border-brand-black/5 font-bold">Messages (5)</div>
          <div className="flex-grow overflow-y-auto divide-y divide-brand-black/5">
             {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`p-4 flex items-center space-x-3 cursor-pointer hover:bg-brand-gray-light ${i === 1 ? 'bg-brand-primary/5' : ''}`}>
                   <div className="w-10 h-10 rounded-full bg-brand-gray-light border border-brand-black/5"></div>
                   <div className="overflow-hidden">
                      <p className="font-bold text-sm truncate">Recruteur InovBénin</p>
                      <p className="text-[10px] text-brand-gray-dark/40 truncate">Votre candidature a été retenue pour...</p>
                   </div>
                </div>
             ))}
          </div>
       </div>
       <div className="hidden sm:flex flex-grow flex-col">
          <div className="p-6 border-b border-brand-black/5 flex items-center justify-between">
             <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10"></div>
                <p className="font-bold">InovBénin - Recrutement</p>
             </div>
             <Settings size={18} className="text-brand-gray-dark/40" />
          </div>
          <div className="flex-grow p-8 flex flex-col items-center justify-center text-center space-y-4 text-brand-gray-dark/20">
             <MessageCircle size={64} strokeWidth={1} />
             <p className="font-bold">Sélectionnez une discussion pour commencer</p>
          </div>
       </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Apps': return <AppsTab />;
      case 'CV': return <CVTab />;
      case 'Chat': return <ChatTab />;
      case 'Profile': return <ProfileTab />;
      case 'Overview': return <OverviewTab />;
      default: return <div className="p-20 text-center text-brand-gray-dark/20 font-bold italic">Section {activeTab} en cours de développement...</div>;
    }
  };

  return (
    <div className="flex h-screen bg-brand-gray-light lg:pt-20 overflow-hidden relative">
      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-brand-black/5 lg:hidden z-[100] flex items-center justify-around px-6 pb-2">
        {bottomNavItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center space-y-1 relative transition-colors ${activeTab === item.id ? 'text-brand-primary' : 'text-brand-gray-dark/40'}`}
          >
            <item.icon size={22} className={activeTab === item.id ? 'animate-bounce-subtle' : ''} />
            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            {item.badge && (
               <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {item.badge}
               </span>
            )}
          </button>
        ))}
      </nav>

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white border-r border-brand-black/5 hidden lg:flex flex-col p-6 space-y-8">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-brand-black/60 backdrop-blur-md lg:hidden z-[110]"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white flex flex-col p-6 lg:hidden z-[120] shadow-[32px_0_64px_-16px_rgba(0,0,0,0.2)]"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 space-y-8 lg:space-y-12 pb-32 lg:pb-12">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center justify-between sm:block">
            <div className="space-y-1">
              <h1 className="text-3xl lg:text-5xl font-black tracking-tighter">Bonjour, Koffi 👋</h1>
              <p className="text-brand-gray-dark/50 text-xs sm:text-sm font-bold uppercase tracking-widest">Tableau de Bord Personnel</p>
            </div>
            <div className="flex items-center space-x-3 sm:hidden">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-3 bg-white rounded-2xl border border-brand-black/5 shadow-sm text-brand-black relative"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end gap-4">
             <div className="flex-grow sm:flex-grow-0 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray-dark/40" size={18} />
                <input type="text" placeholder="Rechercher une offre..." className="w-full sm:w-64 pl-12 pr-4 py-3 bg-white border border-brand-black/5 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
             </div>
            <button className="relative p-3 bg-white rounded-2xl border border-brand-black/5 shadow-sm text-brand-gray-dark/60 hover:text-brand-primary transition-all">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};