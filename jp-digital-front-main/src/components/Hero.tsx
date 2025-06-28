
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-neon rounded-full flex items-center justify-center text-4xl font-bold text-white animate-glow">
                JP
              </div>
            </div>
          </div>

          <p className="text-neon-cyan text-lg mb-2 animate-slide-in-left">Olá, me chamo</p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-in-right">
            <span className="text-gradient">João Pedro</span>
            <br />
            <span className="text-white">Santos e Silva</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6">
            Desenvolvedor <span className="text-neon-cyan">Full Stack</span>
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tenho 17 anos e trabalho como <span className="text-neon-cyan font-semibold">Desenvolvedor de Software</span> no 
            <span className="text-neon-blue font-semibold"> Colégio SEICE</span>. 
            Sou apaixonado por criar experiências digitais interativas e soluções tecnológicas inovadoras.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-neon hover:opacity-90 text-white px-8 py-3 rounded-full hover-glow"
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-8 py-3 rounded-full neon-border"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 w-5 h-5" />
              Contato
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              className="w-8 h-8 text-neon-cyan mx-auto cursor-pointer hover:text-neon-blue transition-colors"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
