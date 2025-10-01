export default function About() {
  const features = [
    {
      icon: "🎓",
      title: "Excellence in Education",
      description: "Committed to providing high-quality education that prepares students for future success."
    },
    {
      icon: "👥",
      title: "Experienced Faculty",
      description: "Our dedicated teachers bring years of experience and passion to the classroom."
    },
    {
      icon: "🌟",
      title: "Holistic Development",
      description: "We focus on developing not just academic skills, but character and values too."
    },
    {
      icon: "🏆",
      title: "Proven Results",
      description: "Our students consistently achieve outstanding results and gain admission to top universities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, MDRS School has been a beacon of educational excellence, 
            nurturing students to become confident, capable, and compassionate individuals 
            ready to make a positive impact in the world.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Our Mission & Vision
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To provide a nurturing and challenging educational environment that empowers 
                  students to achieve academic excellence, develop critical thinking skills, 
                  and become responsible global citizens.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading educational institution that shapes future leaders through 
                  innovative teaching methods, character development, and a commitment to 
                  lifelong learning.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🏫</div>
              <p className="text-gray-600 font-medium">School Campus Image</p>
              <p className="text-sm text-gray-500">Replace with actual photo</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="text-4xl mb-4" role="img" aria-label={feature.title}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <p className="text-blue-100">Years of Excellence</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1200+</div>
              <p className="text-blue-100">Students</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">80+</div>
              <p className="text-blue-100">Expert Teachers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
