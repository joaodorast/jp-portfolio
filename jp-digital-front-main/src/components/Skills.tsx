
import { Code, Palette, Smartphone, Server, Database, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end",
      icon: <Code className="w-6 h-6" />,
      description: "Desenvolvimento de interfaces modernas e responsivas",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Desenvolvimento de aplicativos cross-platform",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Expo", level: 88 },
        { name: "React Navigation", level: 80 },
        { name: "AsyncStorage", level: 82 }
      ]
    },
    {
      title: "Back-end",
      icon: <Server className="w-6 h-6" />,
      description: "APIs e serviços robustos",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "Django", level: 75 },
        { name: "API REST", level: 85 }
      ]
    },
    {
      title: "Banco de Dados",
      icon: <Database className="w-6 h-6" />,
      description: "Modelagem e gerenciamento de dados",
      skills: [
        { name: "MySQL", level: 82 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 78 }
      ]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      description: "UI/UX e prototipagem",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Ferramentas",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Versionamento e deploy",
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "Vite", level: 85 },
        { name: "Vercel", level: 82 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-neon-cyan";
    if (level >= 80) return "bg-neon-blue";
    if (level >= 70) return "bg-neon-purple";
    return "bg-gray-500";
  };

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Minhas Habilidades</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas com as quais trabalho e continuo me aprimorando
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect border-gray-700 hover-glow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-neon-cyan text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
