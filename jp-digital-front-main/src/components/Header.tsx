
import { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#educacao', label: 'Educação' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect shadow-lg shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">JP</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 hover:scale-105 transform"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/joaodorast" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20 text-gray-300 hover:text-neon-cyan">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20 text-gray-300 hover:text-neon-cyan">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href="mailto:joaopedrosantosesilva13@email.com">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20 text-gray-300 hover:text-neon-cyan">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass-effect rounded-lg animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-neon-cyan transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-4 mt-6">
              <a href="https://github.com/joaodorast" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-neon-cyan">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-neon-cyan">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:joaopedrosantosesilva13@email.com">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-neon-cyan">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
