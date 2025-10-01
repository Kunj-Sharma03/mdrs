/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Aurora from '../components/background/Aurora';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
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
        {/* Header Navigation */}
        <header className="bg-white/20 backdrop-blur-md border-b border-white/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo and School Name */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl">M</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">MDRS</h1>
                  <p className="text-sm text-gray-600 font-medium">School Name</p>
                </div>
              </div>
              
              {/* Navigation Menu */}
              <nav className="flex items-center space-x-12">
                <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors font-semibold text-lg">
                  HOME
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg">
                  ABOUT
                </Link>
                <Link href="/academics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg">
                  ACADEMICS
                </Link>
                <Link href="/extra-curricular" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg">
                  ACTIVITIES
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content Layout */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Welcome to
                <br />
                <span className="text-blue-600">MDRS</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                Empowering minds, nurturing dreams, and building the leaders of tomorrow through 
                excellence in education and character development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
                  Learn More About Us
                </Link>
                <Link href="/academics" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center">
                  Academic Programs
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - School Image with Curved Design */}
          <div className="relative lg:flex items-center justify-center hidden">
            {/* Curved Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 backdrop-blur-sm">
              <svg 
                viewBox="0 0 400 800" 
                className="absolute left-0 top-0 h-full w-auto"
                fill="none"
              >
                <path 
                  d="M0 0 Q200 400 0 800 L400 800 L400 0 Z" 
                  fill="rgba(255,255,255,0.3)"
                  stroke="rgba(59,130,246,0.2)"
                  strokeWidth="2"
                />
              </svg>
            </div>
            
            {/* School Image */}
            <div className="relative z-10 max-w-md mx-auto p-8">
              <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/40">
                <img 
                  src="/MDRS.png" 
                  alt="MDRS School" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-800 font-semibold text-lg">MDRS Campus</p>
                  <p className="text-gray-600 font-medium">Excellence in Education</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile School Image */}
        <section className="lg:hidden px-8 py-16">
          <div className="max-w-md mx-auto">
            <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/40">
              <img 
                src="/MDRS.png" 
                alt="MDRS School" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-800 font-semibold text-lg">MDRS Campus</p>
                <p className="text-gray-600 font-medium">Excellence in Education</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
