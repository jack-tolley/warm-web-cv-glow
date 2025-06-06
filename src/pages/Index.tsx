
import React from 'react';
import { Mail, Github, Linkedin, MapPin, Sprout, User, Leaf, TreePine } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-green-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-green-900">Portfolio</h2>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-green-800 hover:text-green-600 transition-colors">About</a>
              <a href="#expertise" className="text-green-800 hover:text-green-600 transition-colors">Expertise</a>
              <a href="#projects" className="text-green-800 hover:text-green-600 transition-colors">Gardens</a>
              <a href="#contact" className="text-green-800 hover:text-green-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-green-900 mb-6">
              Hello, I'm <span className="text-green-600">Sandy</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-800 mb-8 max-w-3xl mx-auto">
              An urban gardener cultivating green spaces and sustainable communities in the heart of the city
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="#contact" className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                See My Gardens
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-green-200 to-emerald-200 w-80 h-80 rounded-2xl mx-auto flex items-center justify-center">
                <User size={120} className="text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Nice to meet you!</h3>
              <p className="text-green-800 mb-6 leading-relaxed">
                I'm a passionate urban gardener dedicated to transforming city spaces into thriving green oases. 
                With years of experience in sustainable gardening practices, I specialize in making the most of small spaces and challenging urban environments.
              </p>
              <p className="text-green-800 mb-6 leading-relaxed">
                When I'm not tending to plants, you can find me researching permaculture techniques, teaching community workshops, 
                or enjoying a cup of herbal tea made from my own garden while planning the next green transformation.
              </p>
              <div className="flex items-center space-x-4 text-green-700">
                <MapPin size={20} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="expertise" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Gardening Expertise</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Leaf className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-green-900 mb-4">Urban Farming</h3>
              <p className="text-green-800 mb-4">Maximizing yield in small city spaces and containers</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Vertical Gardens</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Hydroponics</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Composting</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <TreePine className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-green-900 mb-4">Permaculture Design</h3>
              <p className="text-green-800 mb-4">Creating self-sustaining ecosystems and food forests</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Food Forests</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Water Systems</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Soil Health</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Sprout className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-green-900 mb-4">Community Education</h3>
              <p className="text-green-800 mb-4">Teaching sustainable practices and building green communities</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Workshops</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Consulting</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Garden Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Featured Gardens</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                  <Leaf size={64} className="text-green-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Garden Project {project}</h3>
                  <p className="text-green-800 mb-4">
                    A beautiful urban garden transformation showcasing sustainable growing techniques and creative space utilization.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Vertical</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Organic</span>
                    </div>
                    <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
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
          <h2 className="text-4xl font-bold text-green-900 mb-4">Let's Grow Together</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-green-800 mb-12">
            Ready to transform your space into a thriving urban garden? Let's cultivate something beautiful together!
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a href="mailto:sandy@urbangarden.com" className="flex items-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="text-green-600" size={24} />
              <span className="text-green-900 font-medium">sandy@urbangarden.com</span>
            </a>
            <a href="#" className="flex items-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Linkedin className="text-green-600" size={24} />
              <span className="text-green-900 font-medium">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Github className="text-green-600" size={24} />
              <span className="text-green-900 font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Sandy's Urban Gardens. Grown with ❤️ and lots of compost.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
