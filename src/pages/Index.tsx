
import React from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar, User, Code, Briefcase } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-orange-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-orange-900">Portfolio</h2>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-orange-800 hover:text-orange-600 transition-colors">About</a>
              <a href="#skills" className="text-orange-800 hover:text-orange-600 transition-colors">Skills</a>
              <a href="#projects" className="text-orange-800 hover:text-orange-600 transition-colors">Projects</a>
              <a href="#contact" className="text-orange-800 hover:text-orange-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-orange-900 mb-6">
              Hello, I'm <span className="text-orange-600">Alex</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-800 mb-8 max-w-3xl mx-auto">
              A passionate developer crafting beautiful digital experiences with modern technologies
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="#contact" className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-orange-200 to-amber-200 w-80 h-80 rounded-2xl mx-auto flex items-center justify-center">
                <User size={120} className="text-orange-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-orange-900 mb-4">Nice to meet you!</h3>
              <p className="text-orange-800 mb-6 leading-relaxed">
                I'm a dedicated developer with a passion for creating intuitive and beautiful web applications. 
                With expertise in modern technologies, I love turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-orange-800 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or enjoying a good cup of coffee while planning my next creative project.
              </p>
              <div className="flex items-center space-x-4 text-orange-700">
                <MapPin size={20} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Code className="text-orange-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Frontend Development</h3>
              <p className="text-orange-800 mb-4">Creating responsive and interactive user interfaces</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Briefcase className="text-orange-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Full Stack</h3>
              <p className="text-orange-800 mb-4">End-to-end application development and deployment</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="text-orange-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Project Management</h3>
              <p className="text-orange-800 mb-4">Leading teams and delivering projects on time</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Agile</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Git</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
                  <Code size={64} className="text-orange-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-2">Project {project}</h3>
                  <p className="text-orange-800 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Node.js</span>
                    </div>
                    <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                      View →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-orange-800 mb-12">
            I'm always interested in new opportunities and interesting projects. Let's chat!
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a href="mailto:alex@example.com" className="flex items-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="text-orange-600" size={24} />
              <span className="text-orange-900 font-medium">alex@example.com</span>
            </a>
            <a href="#" className="flex items-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Linkedin className="text-orange-600" size={24} />
              <span className="text-orange-900 font-medium">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Github className="text-orange-600" size={24} />
              <span className="text-orange-900 font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-orange-100 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Alex Portfolio. Made with ❤️ and lots of coffee.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
