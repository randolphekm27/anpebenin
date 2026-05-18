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
    <div className="pt-32 pb-20 bg-brand-gray-light/30 min-h-screen">
      <div className="container-custom space-y-12">
        {/* Institutional Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">CATALOGUE DE FORMATIONS</span>
            <h1 className="text-5xl md:text-[64px] font-black leading-tight tracking-tighter">
              Investissez en vous <span className="text-brand-primary">aujourd'hui.</span>
            </h1>
            <p className="text-brand-gray-dark/60 text-lg leading-relaxed">
              Accédez à des formations certifiantes conçues par les meilleurs partenaires pour booster votre employabilité au Bénin et à l'international.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row bg-white p-2 rounded-full shadow-2xl border border-brand-black/5 w-full md:w-auto">
            <div className="flex items-center px-8 py-3 sm:py-0">
              <Search size={20} className="text-brand-primary mr-3" />
              <input type="text" placeholder="Que voulez-vous apprendre ?" className="outline-none text-sm w-full lg:w-48 bg-transparent font-medium" />
            </div>
            <button className="bg-brand-primary text-white p-5 rounded-full hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Categories Carousel */}
        <div className="flex items-center space-x-4 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div className="mt-20 bg-brand-gray-light rounded-3xl p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Obtenez des certifications d'État.</h2>
            <p className="text-brand-gray-dark/60">Nos programmes sont validés par les ministères et reconnus par les plus grands employeurs du Bénin.</p>
          </div>
          <div className="flex gap-4">
             <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-brand-black/5">
                <Award size={48} className="text-brand-accent" />
             </div>
             <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-brand-black/5">
                <GraduationCap size={48} className="text-brand-primary" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
