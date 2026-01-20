
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SchoolAI from './components/SchoolAI';
import { PROGRAMS, EVENTS } from './constants';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Academics Section */}
        <section id="academics" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Programs</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Academic Excellence</h2>
              <div className="mt-4 w-20 h-1 bg-blue-600 mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PROGRAMS.map((program) => (
                <div key={program.id} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{program.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      Learn More 
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Students', val: '1,200+' },
              { label: 'Faculty Ratio', val: '8:1' },
              { label: 'Campus Size', val: '45 Acres' },
              { label: 'Success Rate', val: '100%' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.val}</div>
                <div className="text-blue-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="events" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Happening Now</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Campus Life & Events</h2>
              </div>
              <button className="border-2 border-slate-300 px-6 py-2 rounded-lg font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                Full Calendar
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {EVENTS.map((event) => (
                <div key={event.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4">
                    {event.category}
                  </span>
                  <div className="text-slate-400 text-sm mb-2 font-medium">{event.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{event.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">Event Details →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="admissions" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Horizon Family</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                  Admissions are currently open for the 2025-2026 academic year. Discover your potential and shape your future with us.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg">
                    Start Application
                  </button>
                  <button className="bg-blue-700/50 backdrop-blur-sm border border-blue-400 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all">
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <span className="text-2xl font-bold text-white mb-6 block">
                HORIZON<span className="text-blue-500 font-light">ACADEMY</span>
              </span>
              <p className="max-w-sm leading-relaxed">
                Empowering minds and building futures through global education, 
                technological innovation, and moral values. Join us in our journey 
                towards excellence.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Term Dates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">School Fees</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>123 Education Way<br />Silicon Valley, CA 94000</li>
                <li>+1 (555) 123-4567</li>
                <li>info@horizonacademy.edu</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Horizon Academy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">X</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <SchoolAI />
    </div>
  );
}
