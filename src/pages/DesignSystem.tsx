import { motion } from 'motion/react';
import { Smartphone, Bell, User, Search, Briefcase, GraduationCap, Heart, Instagram, Facebook, Linkedin, Twitter, Share2, ShieldCheck } from 'lucide-react';

export const MobileVision = () => {
  return (
    <div className="py-32 bg-brand-dark text-white overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">APPLICATION MOBILE</span>
          <h2 className="text-5xl font-bold leading-tight">L'ANPE dans <span className="text-brand-primary">votre poche.</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Une expérience fluide, inspirée des meilleures apps de fintech, pour ne plus jamais manquer une opportunité, où que vous soyez au Bénin.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl border border-white/10 flex-1">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Smartphone size={20} /></div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Disponible sur</p>
                <p className="font-bold">App Store</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl border border-white/10 flex-1">
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Smartphone size={20} /></div>
               <div>
                 <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Disponible sur</p>
                 <p className="font-bold">Google Play</p>
               </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Main Phone Mockup */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="w-[300px] h-[600px] bg-brand-black rounded-[3rem] border-8 border-white/10 shadow-2xl relative overflow-hidden z-20"
          >
            {/* Screen Content */}
            <div className="bg-white h-full w-full p-6 text-brand-black flex flex-col space-y-6">
              <div className="flex items-center justify-between pt-4">
                 <div>
                    <p className="text-[10px] text-brand-gray-dark/40 font-bold uppercase tracking-widest">Bonjour</p>
                    <p className="font-bold">Koffi A.</p>
                 </div>
                 <div className="p-2 bg-brand-gray-light rounded-xl"><Bell size={16} /></div>
              </div>
              <div className="bg-brand-primary/10 p-4 rounded-2xl border border-brand-primary/20 space-y-3">
                 <p className="text-xs font-bold text-brand-primary">Offre recommandée</p>
                 <p className="text-sm font-bold">UX Designer Manager</p>
                 <div className="flex justify-between items-center">
                    <p className="text-[10px] text-brand-gray-dark/50">Cotonou • 500k CFA</p>
                    <button className="bg-brand-primary text-white p-2 rounded-lg"><Search size={14} /></button>
                 </div>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark/30">Activités récentes</p>
                 {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between p-3 bg-brand-gray-light/30 rounded-xl">
                       <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center"><Briefcase size={14} className="text-brand-primary" /></div>
                       <div className="flex-1 px-3"><div className="w-20 h-2 bg-gray-200 rounded"></div></div>
                       <div className="w-12 h-2 bg-brand-primary/20 rounded"></div>
                    </div>
                 ))}
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-brand-gray-light flex justify-around">
                 <div className="p-2 text-brand-primary"><Briefcase size={20} /></div>
                 <div className="p-2 text-brand-gray-dark/30"><Search size={20} /></div>
                 <div className="p-2 text-brand-gray-dark/30"><GraduationCap size={20} /></div>
                 <div className="p-2 text-brand-gray-dark/30"><User size={20} /></div>
              </div>
            </div>
          </motion.div>
          
          {/* Secondary Phone (Floating behind) */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.5 }}
            className="absolute top-20 right-10 w-[260px] h-[520px] bg-brand-black rounded-[2.5rem] border-4 border-white/5 shadow-2xl overflow-hidden z-10"
          >
             <div className="w-full h-full bg-brand-primary p-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"><ShieldCheck size={40} className="text-white" /></div>
                <p className="text-lg font-bold">Inscrivez-vous en 1 minute.</p>
             </div>
          </motion.div>

          {/* Background light glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/30 rounded-full blur-[100px] opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export const SocialSystem = () => {
  return (
    <div className="py-32 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">SYSTEME DE COMMUNICATION</span>
          <h2 className="text-4xl font-bold">Un écosystème visuel cohérent.</h2>
          <p className="text-brand-gray-dark/60">Chaque point de contact avec nos citoyens respire l'excellence et la modernité de l'institution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Instagram Post Template */}
           <div className="space-y-4">
              <div className="aspect-square bg-brand-primary rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
                 <Instagram size={24} className="relative z-10 opacity-60" />
                 <div className="relative z-10 space-y-2">
                    <p className="text-3xl font-bold leading-tight">VOTRE FUTUR<br />PROFESSIONNEL.</p>
                    <p className="text-brand-accent font-bold">Commencez ici.</p>
                 </div>
                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40 text-center flex items-center justify-center"><Instagram size={14} className="mr-2" /> Instagram Feed</p>
           </div>

           {/* Facebook Banner Template */}
           <div className="lg:col-span-2 space-y-4">
              <div className="aspect-[2/1] bg-brand-gray-light rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden">
                 <div className="relative z-10 space-y-4 max-w-xs">
                    <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold">A</span></div>
                    <h3 className="text-2xl font-bold leading-tight">Nous recrutons pour le secteur numérique.</h3>
                    <button className="flex items-center text-brand-primary font-bold text-xs">Postuler maintenant <Share2 size={14} className="ml-2" /></button>
                 </div>
                 <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-primary/5 rounded-l-full"></div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40 text-center flex items-center justify-center"><Facebook size={14} className="mr-2" /> Facebook Header</p>
           </div>

           {/* LinkedIn Post Template */}
           <div className="space-y-4">
              <div className="aspect-square bg-brand-gray-dark rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center space-y-4">
                 <Linkedin size={32} className="text-brand-primary" />
                 <p className="text-lg font-medium">Rejoignez le réseau des talents du Bénin.</p>
                 <div className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold">PORTRAIT DE RÉUSSITE</div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40 text-center flex items-center justify-center"><Linkedin size={14} className="mr-2" /> LinkedIn Update</p>
           </div>
        </div>
      </div>
    </div>
  );
};
