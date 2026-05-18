import { motion } from 'motion/react';
import { Search, GraduationCap, Video, Book, Award, Clock, Star, Users, Filter, ArrowRight } from 'lucide-react';

export const TrainingPage = () => {
  const categories = [
    'Digital & IT', 'Entrepreneuriat', 'Gestion de Projet', 'Langues', 'Soft Skills', 'Artisanat', 'Agriculture Moderne'
  ];

  const courses = [
    { 
      title: 'Maîtrise du Marketing Digital', 
      provider: 'ANPE Academy', 
      duration: '40h', 
      students: '1.2k', 
      rating: '4.9', 
      type: 'Hybride',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426'
    },
    { 
      title: 'Fondamentaux de l’IA', 
      provider: 'Bénin Digital', 
      duration: '25h', 
      students: '850', 
      rating: '4.8', 
      type: 'En ligne',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2426'
    },
    { 
      title: 'Gestion de Projet Agile', 
      provider: 'AFRI-Skills', 
      duration: '32h', 
      students: '2.1k', 
      rating: '4.7', 
      type: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2426'
    },
    { 
      title: 'Anglais pour Professionnels', 
      provider: 'British Council Bénin', 
      duration: '60h', 
      students: '4.5k', 
      rating: '4.9', 
      type: 'En ligne',
      image: 'https://images.unsplash.com/photo-1543167664-40d699ef7383?auto=format&fit=crop&q=80&w=2426'
    }
  ];

  return (
    <div className="bg-brand-gray-light/30 min-h-screen">
      {/* Immersive Header Section */}
      <div className="min-h-[70svh] lg:min-h-[60vh] bg-brand-dark text-white flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 lg:px-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--brand-primary)_0%,_transparent_60%)] opacity-30"></div>
        <div className="container-custom relative z-10 text-center space-y-8 max-w-4xl">
          <div className="space-y-4">
            <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs">CATALOGUE DE FORMATIONS</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black leading-[1] lg:leading-[0.9] tracking-tighter">
              Investissez en vous <span className="text-brand-primary">aujourd'hui.</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              Accédez à des formations certifiantes conçues par les meilleurs partenaires pour booster votre employabilité au Bénin et à l'international.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row bg-white p-2 rounded-2xl sm:rounded-full shadow-2xl border border-white/10 w-full lg:w-auto mx-auto lg:max-w-xl">
            <div className="flex items-center px-6 sm:px-8 py-4 sm:py-0 w-full">
              <Search size={20} className="text-brand-primary mr-3 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Que voulez-vous apprendre ?" 
                className="outline-none text-sm w-full bg-transparent font-medium text-brand-black placeholder:text-gray-400" 
              />
            </div>
            <button className="bg-brand-primary text-white py-4 px-6 sm:p-5 rounded-xl sm:rounded-full hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center w-full sm:w-auto">
              <span className="sm:hidden mr-3 font-bold">Lancer la recherche</span>
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 lg:py-20 space-y-8 lg:space-y-12">
        {/* Categories Carousel */}
        <div className="flex items-center space-x-3 lg:space-x-4 overflow-x-auto pb-4 lg:pb-8 no-scrollbar scroll-smooth px-4 lg:px-0">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`whitespace-nowrap px-6 py-3 rounded-full border border-brand-black/5 text-sm font-medium transition-all hover:border-brand-primary hover:text-brand-primary ${idx === 0 ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-brand-gray-dark/60'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 lg:px-0">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-brand-black/5 overflow-hidden shadow-sm group hover:shadow-xl transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-brand-primary uppercase tracking-wider">{course.type}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-brand-gray-dark/40 font-medium">
                  <span className="flex items-center"><Clock size={12} className="mr-1" /> {course.duration}</span>
                  <span className="flex items-center"><Users size={12} className="mr-1" /> {course.students}</span>
                </div>
                <h3 className="font-bold text-lg leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">{course.title}</h3>
                <p className="text-xs text-brand-gray-dark/50">{course.provider}</p>
                <div className="pt-4 border-t border-brand-black/5 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-brand-accent">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-brand-gray-dark">{course.rating}</span>
                  </div>
                  <button className="text-brand-primary p-2 bg-brand-primary/5 rounded-full hover:bg-brand-primary hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="mt-20 bg-brand-gray-light rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mx-4 lg:mx-0 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Obtenez des certifications d'État.</h2>
            <p className="text-brand-gray-dark/60 text-sm sm:text-base">Nos programmes sont validés par les ministères et reconnus par les plus grands employeurs du Bénin.</p>
          </div>
          <div className="flex gap-4">
             <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-brand-black/5">
                <Award size={40} className="text-brand-accent" />
             </div>
             <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-brand-black/5">
                <GraduationCap size={40} className="text-brand-primary" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
