import Link from 'next/link';
import Aurora from '../components/background/Aurora';

export default function Home() {
  return (
    <div className="min-h-screen relative">
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
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-white/30 backdrop-blur-md shadow-xl border-b border-white/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-yellow-100/20 rounded-lg"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800 drop-shadow-sm">School Name</h1>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
                  About
                </Link>
                <Link href="/academics" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
                  Academics
                </Link>
                <Link href="/extra-curricular" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
                  Extra Curricular
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-yellow-50/20 backdrop-blur-sm rounded-3xl mx-4"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-white/30">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 drop-shadow-sm">
                Welcome to Our School
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto drop-shadow-sm">
                Nurturing young minds, building future leaders. Experience excellence in education 
                with our comprehensive academic programs and vibrant school community.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/about" className="bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-lg text-white px-8 py-4 rounded-xl hover:from-blue-700/90 hover:to-blue-800/90 transition-all duration-300 shadow-xl border border-blue-400/30 font-semibold">
                  Learn More
                </Link>
                <Link href="/academics" className="border-2 border-blue-600/60 bg-white/50 backdrop-blur-lg text-blue-700 px-8 py-4 rounded-xl hover:bg-white/70 hover:border-blue-700/70 transition-all duration-300 shadow-xl font-semibold">
                  Our Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview Sections */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Preview */}
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-8 hover:shadow-3xl hover:bg-white/60 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-yellow-100/20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-sm">About Us</h3>
                  <p className="text-gray-700 mb-4 drop-shadow-sm">
                    Discover our rich history, mission, and commitment to educational excellence.
                  </p>
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/50 border border-white/40">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Academics Preview */}
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-8 hover:shadow-3xl hover:bg-white/60 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-yellow-100/20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Academics</h3>
                  <p className="text-gray-700 mb-4 drop-shadow-sm">
                    Explore our comprehensive curriculum and innovative teaching methods.
                  </p>
                  <Link href="/academics" className="text-blue-600 hover:text-blue-800 font-semibold bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/50 border border-white/40">
                    View Programs →
                  </Link>
                </div>
              </div>

              {/* Extra Curricular Preview */}
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-8 hover:shadow-3xl hover:bg-white/60 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-yellow-100/20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Extra Curricular</h3>
                  <p className="text-gray-700 mb-4 drop-shadow-sm">
                    Join our vibrant community activities, sports, and clubs.
                  </p>
                  <Link href="/extra-curricular" className="text-blue-600 hover:text-blue-800 font-semibold bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/50 border border-white/40">
                    Get Involved →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
