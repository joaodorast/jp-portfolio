
import { Code, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/joaodorast",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:joaopedrosantosesilva13@email.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              onClick={scrollToTop}
            >
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gradient cursor-pointer" onClick={scrollToTop}>
                João Pedro
              </h3>
              <p className="text-sm text-gray-400">Desenvolvedor Full Stack</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-full transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </Button>
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { href: '#home', label: 'Home' },
              { href: '#sobre', label: 'Sobre' },
              { href: '#projetos', label: 'Projetos' },
              { href: '#habilidades', label: 'Habilidades' },
              { href: '#educacao', label: 'Educação' },
              { href: '#contato', label: 'Contato' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
              <span>© {currentYear} João Pedro Santos e Silva.</span>
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>e muito</span>
              <Code className="w-4 h-4 text-neon-cyan" />
            </p>
            <p className="text-gray-500 text-xs">
              Todos os direitos reservados.
            </p>
          </div>

          {/* Back to top button */}
          <Button
            onClick={scrollToTop}
            className="bg-gradient-neon hover:opacity-90 text-white px-6 py-2 rounded-full hover-glow"
          >
            ↑ Voltar ao topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
