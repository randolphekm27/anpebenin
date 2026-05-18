import { motion } from 'motion/react';
import { 
  Menu, Search, Bell, User, Briefcase, GraduationCap, 
  Settings, LogOut, LayoutDashboard, FileText, Bookmark, 
  MessageCircle, BarChart3, Clock, MapPin, CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const UserDashboard = () => {
  const stats = [
    { label: 'Candidatures', value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Entretiens', value: '3', icon: Clock, color: 'text-brand-primary', bg: 'bg-green-50' },
    { label: 'Offres sauvées', value: '24', icon: Bookmark, color: 'text-brand-accent', bg: 'bg-yellow-50' },
    { label: 'Messages', value: '5', icon: MessageCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="flex h-screen bg-brand-gray-light pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-brand-black/5 hidden lg:flex flex-col p-6 space-y-8">
        <div className="space-y-1">
          {[
            { name: 'Vue d’ensemble', icon: LayoutDashboard, active: true },
            { name: 'Mes candidatures', icon: FileText },
            { name: 'Ma CVthèque', icon: Briefcase },
            { name: 'Formations suivies', icon: GraduationCap },
            { name: 'Mes favoris', icon: Bookmark },
            { name: 'Messages', icon: MessageCircle, badge: '5' },
          ].map((item) => (
            <button 
              key={item.name} 
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.active ? 'bg-brand-primary text-white' : 'text-brand-gray-dark/60 hover:bg-brand-gray-light hover:text-brand-black'}`}
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
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-brand-gray-dark/60 hover:bg-brand-gray-light hover:text-brand-black transition-all">
            <Settings size={18} />
            <span>Paramètres</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
            <LogOut size={18} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 space-y-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tighter">Bonjour, Koffi 👋</h1>
            <p className="text-brand-gray-dark/50 text-sm font-medium">Ravi de vous revoir. Voici ce qui se passe sur votre compte aujourd’hui.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 bg-white rounded-xl border border-brand-black/5 shadow-sm text-brand-gray-dark/60 hover:text-brand-primary transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center space-x-3 bg-white p-1.5 pr-4 rounded-xl border border-brand-black/5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white font-bold">K</div>
              <div className="hidden sm:block">
                <p className="text-xs font-bold leading-none">Koffi ADJAVON</p>
                <p className="text-[10px] text-brand-gray-dark/40">Candidat Premium</p>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-brand-black/5"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon size={24} />
              </div>
              <p className="text-sm font-medium text-brand-gray-dark/50">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Latest Applications */}
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-brand-black/5 overflow-hidden">
              <div className="p-6 border-b border-brand-black/5 flex items-center justify-between">
                <h3 className="font-bold">Candidatures récentes</h3>
                <button className="text-brand-primary text-xs font-bold">Voir tout</button>
              </div>
              <div className="divide-y divide-brand-black/5">
                {[
                  { title: 'Frontend Developer', company: 'InovBénin', status: 'En revue', date: 'Hier', color: 'bg-blue-500' },
                  { title: 'UI Designer', company: 'Digital Africa', status: 'Entretien', date: 'Il y a 3 jours', color: 'bg-brand-primary' },
                  { title: 'Project Coordinator', company: 'UNICEF Bénin', status: 'Refusé', date: 'Il y a 1 semaine', color: 'bg-red-500' },
                ].map((app, idx) => (
                  <div key={idx} className="p-6 flex items-center justify-between hover:bg-brand-gray-light/50 transition-all cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-brand-gray-dark/40 text-sm">
                        {app.company[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{app.title}</p>
                        <p className="text-xs text-brand-gray-dark/40">{app.company} • {app.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <span className="flex items-center text-xs font-medium px-3 py-1 rounded-full bg-gray-50 border border-brand-black/5">
                        <div className={`w-1.5 h-1.5 rounded-full ${app.color} mr-2`}></div>
                        {app.status}
                      </span>
                      <ChevronRight size={16} className="text-brand-gray-dark/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="space-y-6">
            <div className="bg-brand-gray-dark text-white p-8 rounded-2xl shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Profil à 85%</h3>
                <CheckCircle2 className="text-brand-primary" size={24} />
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="w-[85%] bg-brand-primary h-full"></div>
              </div>
              <p className="text-sm text-gray-400">Complétez vos certifications pour augmenter vos chances d'être contacté par les recruteurs de 40%.</p>
              <button 
                onClick={() => alert('Profil optimisé avec succès !')}
                className="w-full py-3 bg-brand-primary rounded-xl font-bold text-sm hover:bg-brand-dark transition-all"
              >
                Optimiser mon profil
              </button>
            </div>

            <div className="bg-brand-accent/10 border border-brand-accent/20 p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-brand-gray-dark">Alerte Recruteur</h4>
              <p className="text-xs text-brand-gray-dark/70">3 recruteurs ont consulté votre profil cette semaine.</p>
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-brand-gray-dark/40">R{i}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
