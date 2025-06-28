
import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Desenvolvimento completo desde front-end até back-end"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experiência Profissional",
      description: "Desenvolvedor de Software no Colégio SEICE"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formação Técnica",
      description: "Cursando 3º ano do Ensino Médio Técnico em Informática"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Paixão por UI/UX",
      description: "Focado em criar experiências excepcionais para o usuário"
    }
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Sobre Mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça mais sobre minha jornada e paixão pela tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="glass-effect p-8 rounded-2xl neon-border">
              <h3 className="text-2xl font-bold text-white mb-6">Minha História</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Sou um jovem desenvolvedor <span className="text-neon-cyan font-semibold">full stack</span> apaixonado 
                  por criar experiências digitais inovadoras e funcionais. Aos 17 anos, já atuo profissionalmente 
                  como <span className="text-neon-blue font-semibold">Desenvolvedor de Software no Colégio SEICE</span>, 
                  onde aplico meus conhecimentos em projetos reais.
                </p>
                <p>
                  Minha jornada na programação começou com HTML, CSS e JavaScript, e desde então tenho me dedicado 
                  a dominar tecnologias modernas como <span className="text-neon-cyan">React</span>, 
                  <span className="text-neon-cyan"> TypeScript</span>, <span className="text-neon-cyan">React Native</span> 
                  e <span className="text-neon-cyan">Node.js</span>.
                </p>
                <p>
                  Tenho grande interesse em <span className="text-neon-purple font-semibold">UI/UX Design</span> e 
                  em criar interfaces que não apenas pareçam boas, mas que também proporcionem uma experiência 
                  de usuário excepcional. Busco constantemente aprimorar minhas habilidades através de 
                  cursos e projetos práticos.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card key={index} className="glass-effect border-gray-700 hover-glow group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center text-white group-hover:animate-pulse">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
