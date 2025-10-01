'use client';

import { useState } from 'react';
import Link from 'next/link';
import Aurora from '../components/background/Aurora';
import LoadingScreen from '../components/LoadingScreen';
import FadeContent from '../components/FadeContent';
import SimpleCarousel from '../components/SimpleCarousel';
import SiteHeader from '../components/SiteHeader';

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Loading Screen */}
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <FadeContent duration={800} delay={100}>
          {/* Aurora Background */}
          <div className="fixed inset-0 z-0">
            <Aurora
              colorStops={["#FFFFFF", "#F7F016"]}
              blend={0.9}
              amplitude={2.0}
              speed={0.2}
            />
          </div>
        
          {/* Content */}
          <div className="relative z-10 min-h-screen">
            <SiteHeader />

          {/* Main Hero Section - Below Navbar */}
          <main className="relative px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
                
                {/* Left Side - Content */}
                <div className="flex flex-col justify-center space-y-8">
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                      Welcome to
                      <br />
                      <span className="text-blue-600">M.D.R.S.</span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium max-w-lg">
                      Empowering minds, nurturing dreams, and building the leaders of tomorrow through 
                      excellence in education and character development.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
                      Learn More About Us
                    </Link>
                    <Link href="/academics" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center">
                      Academic Programs
                    </Link>
                  </div>
                </div>

                {/* Right Side - Large Circular School Image */}
                <div className="flex items-center justify-center relative">
                  {/* Decorative background curves */}
                  <div className="absolute inset-0 overflow-hidden">
                    <svg 
                      viewBox="0 0 600 600" 
                      className="absolute inset-0 w-full h-full opacity-30"
                      fill="none"
                    >
                      {/* Curved decorative lines */}
                      <path 
                        d="M50 100 Q200 150 350 100 Q400 200 350 300 Q200 250 50 300 Q0 200 50 100" 
                        stroke="rgba(239, 68, 68, 0.4)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path 
                        d="M100 400 Q250 450 400 400" 
                        stroke="rgba(239, 68, 68, 0.3)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path 
                        d="M450 150 Q500 200 550 150" 
                        stroke="rgba(239, 68, 68, 0.3)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path 
                        d="M20 450 Q70 500 120 450" 
                        stroke="rgba(239, 68, 68, 0.3)"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  
                  {/* School Photos Carousel */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-full max-w-[600px] h-[450px] bg-white/20 backdrop-blur-lg rounded-3xl border-2 border-white/40 shadow-2xl overflow-hidden p-4">
                      <div className="h-full relative flex items-center justify-center">
                        <SimpleCarousel
                          baseWidth={500}
                          autoplay={true}
                          autoplayDelay={4000}
                          pauseOnHover={true}
                        />
                      </div>
                    </div>
                    
                    {/* Carousel Caption */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center bg-white/40 backdrop-blur-lg rounded-xl px-6 py-3 border border-white/50 shadow-lg">
                      <p className="text-gray-800 font-semibold text-lg">M.D.R.S. Campus Gallery</p>
                      <p className="text-gray-600 font-medium text-sm">Excellence in Education</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </main>

          {/* Contact Information Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-50/50 to-indigo-100/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-700 font-medium">
                  Connect with M.D.R.S. Memorial Public School
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* Phone Numbers */}
                <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-4 rounded-full mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Phone Numbers</h3>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href="tel:+919868114621" 
                      className="flex items-center text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                    >
                      <span className="mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-200">📞</span>
                      <span className="font-semibold">+91 9868114621</span>
                    </a>
                    <a 
                      href="tel:+919999091306" 
                      className="flex items-center text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                    >
                      <span className="mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-200">📞</span>
                      <span className="font-semibold">+91 9999091306</span>
                    </a>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 p-4 rounded-full mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Email Addresses</h3>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href="mailto:mdrspublicschool01@gmail.com" 
                      className="flex items-center text-lg text-gray-700 hover:text-green-600 transition-colors duration-200 group"
                    >
                      <span className="mr-3 text-green-500 group-hover:scale-110 transition-transform duration-200">✉️</span>
                      <span className="font-semibold break-all">mdrspublicschool01@gmail.com</span>
                    </a>
                    <a 
                      href="mailto:mdrspublicschool@gmail.com" 
                      className="flex items-center text-lg text-gray-700 hover:text-green-600 transition-colors duration-200 group"
                    >
                      <span className="mr-3 text-green-500 group-hover:scale-110 transition-transform duration-200">✉️</span>
                      <span className="font-semibold break-all">mdrspublicschool@gmail.com</span>
                    </a>
                  </div>
                </div>

              </div>



            </div>
          </section>

          {/* Location Section */}
          <section className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />
            <div className="max-w-6xl mx-auto relative z-10">
              <FadeContent>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Visit Our Campus
                  </h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Come and explore our beautiful campus. We&apos;re conveniently located and easy to find.
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 max-w-3xl mx-auto">
                  <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.0826749316234!2d77.06667149072373!3d28.67340466313603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzI0LjMiTiA3N8KwMDQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl"
                      title="M.D.R.S. Memorial Public School Location"
                    ></iframe>
                  </div>
                  
                  {/* Map Info */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-semibold">M.D.R.S. Memorial Public School</span>
                    </div>
                    
                    <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://maps.app.goo.gl/H5Pm9GqMnCJ3dkWCA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                        Open in Google Maps
                      </a>
                      
                      <a 
                        href="https://maps.app.goo.gl/H5Pm9GqMnCJ3dkWCA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </FadeContent>
            </div>
          </section>

          </div>
        </FadeContent>
      </div>
    </div>
  );
}
