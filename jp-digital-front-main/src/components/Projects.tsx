
import { ExternalLink, Github, Smartphone, Monitor, Database, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Elegance",
      description: "Aplicativo mobile de loja de roupas com interface moderna e sistema completo de e-commerce",
      image: "/api/placeholder/400/250",
      github: "https://github.com/joaodorast/Elegance",
      technologies: ["React Native", "Expo", "MySQL", "Node.js"],
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "GastoFácil",
      description: "Aplicativo de controle financeiro pessoal com categorização de gastos e relatórios detalhados",
      image: "/api/placeholder/400/250",
      github: "https://github.com/joaodorast/gastofacil-main",
      technologies: ["React Native", "Expo", "MySQL", "Node.js"],
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "Controle de Presença",
      description: "Sistema de controle de presença de estagiários com dashboard administrativo e relatórios",
      image: "/api/placeholder/400/250",
      github: "https://github.com/joaodorast/presen-a-estagiarios",
      technologies: ["HTML", "CSS", "JavaScript", "Django", "PostgreSQL", "API REST"],
      category: "Web",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "EstudaJá",
      description: "Plataforma educacional para estudos com recursos interativos e acompanhamento de progresso",
      image: "/api/placeholder/400/250",
      github: "https://github.com/joaodorast/estudaja",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      category: "Web",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "SecurityWay",
      description: "Sistema inteligente de transporte escolar com rastreamento em tempo real e notificações",
      image: "/api/placeholder/400/250",
      github: "https://github.com/joaodorast/securityway",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Maps API"],
      category: "Web",
      icon: <Code className="w-5 h-5" />
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "React Native": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      "TypeScript": "bg-blue-600/20 text-blue-400 border-blue-600/30",
      "Node.js": "bg-green-500/20 text-green-300 border-green-500/30",
      "MongoDB": "bg-green-600/20 text-green-400 border-green-600/30",
      "MySQL": "bg-orange-500/20 text-orange-300 border-orange-500/30",
      "PostgreSQL": "bg-blue-700/20 text-blue-400 border-blue-700/30",
      "Django": "bg-green-700/20 text-green-400 border-green-700/30",
      "Expo": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "HTML": "bg-red-500/20 text-red-300 border-red-500/30",
      "CSS": "bg-blue-400/20 text-blue-300 border-blue-400/30",
      "JavaScript": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      "API REST": "bg-gray-500/20 text-gray-300 border-gray-500/30",
      "Socket.io": "bg-black/20 text-white border-gray-500/30",
      "Maps API": "bg-red-600/20 text-red-300 border-red-600/30"
    };
    return colors[tech] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  return (
    <section id="projetos" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Meus Projetos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi aplicando tecnologias modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect border-gray-700 overflow-hidden hover-glow group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-cyber flex items-center justify-center">
                  <div className="text-white/50 text-6xl">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${project.category === 'Mobile' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-neon-blue/20 text-neon-blue'} border-0`}>
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className={`text-xs ${getTechColor(tech)}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-8 py-3 rounded-full neon-border"
            onClick={() => window.open('https://github.com/joaodorast', '_blank')}
          >
            <Github className="mr-2 w-5 h-5" />
            Ver mais no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
