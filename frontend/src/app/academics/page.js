'use client';

import { useState, useEffect } from 'react';
import Aurora from '../../components/background/Aurora';
import FadeContent from '../../components/FadeContent';
import ClassroomCarousel from '../../components/ClassroomCarousel';
import SiteHeader from '../../components/SiteHeader';

export default function Academics() {
  const [showContent, setShowContent] = useState(false);
  const classroomImages = [
    { src: '/classroom_lab/IMG-20250925-WA0060.jpg', alt: 'Interactive smart classroom with students collaborating in groups.' },
    { src: '/classroom_lab/IMG-20250925-WA0061.jpg', alt: 'Students engaging in a science activity inside the laboratory.' },
    { src: '/classroom_lab/IMG-20250925-WA0062.jpg', alt: 'Bright early years classroom with play-led learning corners.' },
    { src: '/classroom_lab/IMG-20250925-WA0063.jpg', alt: 'Learners exploring hands-on materials during a guided workshop.' },
    { src: '/classroom_lab/IMG-20250925-WA0064.jpg', alt: 'Creative art studio featuring student projects and colorful displays.' },
    { src: '/classroom_lab/IMG-20250925-WA0065.jpg', alt: 'STEM lab session with robotics kits and experimentation tables.' },
    { src: '/classroom_lab/IMG-20250925-WA0066.jpg', alt: 'Reading nook with students enjoying storytelling time.' },
    { src: '/classroom_lab/IMG-20250925-WA0067.jpg', alt: 'Technology-enabled classroom with tablets and interactive board.' },
    { src: '/classroom_lab/IMG-20250925-WA0068.jpg', alt: 'Group activity in the discovery lab encouraging teamwork and problem-solving.' },
  ];

  const handleLoadingComplete = () => {
    setShowContent(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  useEffect(() => {
    // Match the loading screen timing
    handleLoadingComplete();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
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
      <div className={`relative z-10 min-h-screen transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <SiteHeader />

        {/* Academics Content */}
        <main className="relative px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <section className="text-center">
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Elementary <span className="text-blue-600">Academics</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                Our elementary school is anchored in the latest National Education Policy (NEP) 2020 guidelines,
                blending joyful learning with strong foundational skills so every child discovers their potential in a
                caring, future-ready environment.
              </p>
            </section>

            <section className="bg-white/45 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-[0_30px_70px_rgba(15,23,42,0.18)] p-10 text-center">
              <h2 className="text-3xl font-semibold text-gray-900 drop-shadow-sm">Pre-Nursery to Class V</h2>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
                The elementary wing nurtures learners across the entire foundational and preparatory stages. Each
                milestone—right from first steps in Pre-Nursery through the confident strides of Class V—is supported by
                age-appropriate pedagogy and caring educators.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['Pre-Nursery', 'Nursery', 'Kindergarten', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V'].map((label) => (
                  <span
                    key={label}
                    className="px-4 py-2 bg-white/60 backdrop-blur-xl border border-white/70 rounded-full text-sm font-semibold text-gray-800 shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/45 backdrop-blur-2xl rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/60 p-10 hover:bg-white/55 transition-transform duration-300 hover:-translate-y-1">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 drop-shadow-sm">School Curriculum</h2>
                <p className="text-gray-700 leading-relaxed">
                  We follow the NEP 2020 aligned curriculum crafted for the formative years. Competency-based modules,
                  experiential projects, and multilingual exposure nurture creativity, critical thinking, and
                  socio-emotional growth for every child.
                </p>
              </div>

              <div className="bg-white/45 backdrop-blur-2xl rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/60 p-10 hover:bg-white/55 transition-transform duration-300 hover:-translate-y-1">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 drop-shadow-sm">Learning Environment</h2>
                <p className="text-gray-700 leading-relaxed">
                  Classrooms are vibrant, inclusive, and play-led with flexible seating, discovery corners, and outdoor
                  learning zones so children feel safe to try, question, and collaborate every day.
                </p>
              </div>
            </section>

            <section className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-900 drop-shadow-sm">Classrooms & Labs Snapshot</h2>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Peek into the vibrant learning spaces that make discovery feel natural—from immersive literacy corners
                  to well-equipped science labs and collaborative technology hubs.
                </p>
              </div>
              <ClassroomCarousel images={classroomImages} />
            </section>

            <section className="bg-white/35 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-[0_30px_70px_rgba(15,23,42,0.16)] p-12">
              <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10 drop-shadow-sm">How NEP 2020 Comes Alive</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/60 p-6 text-center shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Play & Discovery</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Activity-based lessons, learning corners, and storytelling keep curiosity high while building strong
                    foundational literacy and numeracy.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/60 p-6 text-center shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Values & Wellness</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Daily mindfulness, life-skill circles, and community projects cultivate empathy, respect, and a sense
                    of responsibility in every child.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/60 p-6 text-center shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Future Readiness</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Integrated visual arts, music, technology time, and STEAM explorations help students connect concepts
                    to real-world experiences.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/45 backdrop-blur-2xl rounded-3xl shadow-[0_35px_80px_rgba(15,23,42,0.2)] border border-white/60 p-12">
              <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10 drop-shadow-sm">Academic Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="bg-white/55 backdrop-blur-xl rounded-2xl p-8 border border-white/70 shadow-xl hover:bg-white/65 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl font-black text-blue-600 mb-4 drop-shadow-sm">30 : 1</div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Student–Teacher Ratio ensuring personal attention and meaningful learning relationships in every
                    classroom.
                  </p>
                </div>
                <div className="bg-white/55 backdrop-blur-xl rounded-2xl p-8 border border-white/70 shadow-xl hover:bg-white/65 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl font-black text-blue-600 mb-4 drop-shadow-sm">100%</div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Graduation Rate reflecting our commitment to guiding each learner confidently through the elementary
                    journey.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
        </div>
      </FadeContent>
    </div>
  );
}
