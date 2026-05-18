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
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-brand-gray-dark/60 hover:bg-brand-gray-light hover:text-brand-black transition-all">
          <Settings size={18} />
          <span>Paramètres</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
          <LogOut size={18} />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );

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
                <button className="text-brand-primary text-xs font-bold hover:underline">Voir tout</button>
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
      </main>
    </div>
  );
};
