import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray-light p-6 pt-24">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Visual Side */}
        <div className="md:w-1/2 bg-brand-dark p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-display font-bold text-xl leading-none">ANPE BÉNIN</span>
            </Link>
            <h2 className="text-4xl font-bold leading-tight">
              {isLogin ? "Ravi de vous revoir parmi nous." : "Rejoignez l'élite professionnelle du Bénin."}
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">
              Accédez à votre espace personnalisé pour gérer vos candidatures, certifications et opportunités.
            </p>
          </div>
          
          <div className="relative z-10 mt-12 space-y-4">
             <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                <ShieldCheck className="text-brand-primary" />
                <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Données sécurisées par l'État</span>
             </div>
          </div>

          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="400" height="400" viewBox="0 0 400 400" className="rotate-45 -mr-40 -mt-20">
                <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="40" strokeDasharray="40 20" />
             </svg>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 p-12 lg:p-16 space-y-10">
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold">{isLogin ? "Connexion" : "Créer un compte"}</h1>
            <p className="text-brand-gray-dark/50 text-sm">
              {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
              <button onClick={() => setIsLogin(!isLogin)} className="text-brand-primary font-bold ml-1 hover:underline">
                {isLogin ? "S'inscrire" : "Se connecter"}
              </button>
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Nom complet</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray-dark/30" />
                  <input type="text" placeholder="Koffi ADJAVON" className="w-full pl-12 pr-6 py-4 rounded-xl bg-brand-gray-light/50 border border-transparent focus:border-brand-primary/30 outline-none transition-all" />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Email professionnel</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray-dark/30" />
                <input type="email" placeholder="contact@example.bj" className="w-full pl-12 pr-6 py-4 rounded-xl bg-brand-gray-light/50 border border-transparent focus:border-brand-primary/30 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-gray-dark/40">Mot de passe</label>
                {isLogin && <button type="button" className="text-xs text-brand-primary font-medium hover:underline">Oublié ?</button>}
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray-dark/30" />
                <input type="password" placeholder="••••••••••••" className="w-full pl-12 pr-6 py-4 rounded-xl bg-brand-gray-light/50 border border-transparent focus:border-brand-primary/30 outline-none transition-all" />
              </div>
            </div>

            {!isLogin && (
               <div className="flex items-center space-x-3 p-4 bg-brand-accent/5 rounded-xl border border-brand-accent/10">
                  <input type="checkbox" id="terms" className="w-4 h-4 text-brand-primary border-brand-gray-light rounded focus:ring-brand-primary" />
                  <label htmlFor="terms" className="text-[10px] text-brand-gray-dark/60 leading-tight">
                    J'accepte les conditions générales d'utilisation et la politique de confidentialité de l'ANPE BÉNIN.
                  </label>
               </div>
            )}

            <button type="submit" className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-dark hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-brand-primary/20">
              <span>{isLogin ? "Se connecter" : "Créer mon compte"}</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="relative py-4">
             <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-brand-black/5"></div></div>
             <div className="relative flex justify-center"><span className="bg-white px-4 text-xs font-bold text-brand-gray-dark/30 uppercase tracking-widest italic">Ou continuer avec</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button className="flex items-center justify-center space-x-3 py-3 border border-brand-black/5 rounded-xl hover:bg-gray-50 transition-all text-xs font-bold">
                <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                <span>Google</span>
             </button>
             <button className="flex items-center justify-center space-x-3 py-3 border border-brand-black/5 rounded-xl hover:bg-gray-50 transition-all text-xs font-bold">
                <Briefcase size={16} className="text-brand-primary" />
                <span>E-Bénin</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
