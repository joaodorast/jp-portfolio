
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      title: "Ensino Médio Técnico em Informática",
      institution: "Colégio SEICE",
      period: "2023 - 2025",
      location: "Rio de Janeiro, RJ",
      description: "Formação técnica completa em desenvolvimento de sistemas, redes de computadores, banco de dados e programação. Cursando o 3º ano com foco em tecnologias modernas.",
      type: "Ensino Formal",
      status: "Em andamento",
      highlights: [
        "Desenvolvimento de Software",
        "Banco de Dados",
        "Redes de Computadores",
        "Programação Web",
        "Análise de Sistemas"
      ]
    }
  ];

  const courses = [
    {
      title: "Desenvolvimento Full Stack",
      institution: "Rocketseat",
      period: "2024 - 2025",
      description: "Curso completo abrangendo desenvolvimento front-end com React, back-end com Node.js e desenvolvimento mobile com React Native.",
      type: "Curso Complementar",
      technologies: ["React", "Node.js", "React Native", "TypeScript"]
    },
    {
      title: "Formação React Developer",
      institution: "Udemy",
      period: "2024 - 2025",
      description: "Especialização em desenvolvimento de aplicações web e mobile com React, incluindo hooks, context API e bibliotecas do ecossistema.",
      type: "Curso Complementar",
      technologies: ["React", "Redux", "React Router", "Styled Components"]
    },
    {
      title: "JavaScript Completo ES6+",
      institution: "Curso em Vídeo",
      period: "2024 - 2025",
      description: "Curso completo de JavaScript moderno, abordando ES6+, programação assíncrona, APIs e aplicações práticas.",
      type: "Curso Complementar",
      technologies: ["JavaScript", "ES6+", "APIs", "Async/Await"]
    },
    {
      title: "Desenvolvimento Mobile com React Native",
      institution: "Udemy",
      period: "2024 - 2025",
      description: "Desenvolvimento de aplicativos móveis multiplataforma com React Native, Expo e integração com APIs nativas.",
      type: "Curso Complementar",
      technologies: ["React Native", "Expo", "APIs Nativas", "AsyncStorage"]
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-500/20 text-blue-300",
      "Node.js": "bg-green-500/20 text-green-300",
      "React Native": "bg-cyan-500/20 text-cyan-300",
      "TypeScript": "bg-blue-600/20 text-blue-400",
      "JavaScript": "bg-yellow-500/20 text-yellow-300",
      "Redux": "bg-purple-500/20 text-purple-300",
      "Expo": "bg-black/20 text-white"
    };
    return colors[tech] || "bg-gray-500/20 text-gray-300";
  };

  return (
    <section id="educacao" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Educação & Formação</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Minha trajetória acadêmica e cursos complementares na área de desenvolvimento
          </p>
        </div>

        {/* Educação Formal */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Formação Acadêmica</h3>
          {education.map((edu, index) => (
            <Card key={index} className="glass-effect border-gray-700 mb-6 hover-glow animate-slide-in-left">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">{edu.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-neon-blue/20 text-neon-blue border-0">{edu.type}</Badge>
                    <Badge className="bg-neon-cyan/20 text-neon-cyan border-0">{edu.status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="border-gray-600 text-gray-300">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cursos Complementares */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Cursos Complementares</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="glass-effect border-gray-700 hover-glow animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg mb-1">{course.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-2">
                        <span>{course.institution}</span>
                        <span>•</span>
                        <span>{course.period}</span>
                      </div>
                      <Badge className="bg-gray-700/50 text-gray-300 border-0 text-xs">{course.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech, idx) => (
                      <Badge key={idx} className={`text-xs ${getTechColor(tech)} border-0`}>
                        {tech}
                      </Badge>
                    ))}
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

export default Education;
