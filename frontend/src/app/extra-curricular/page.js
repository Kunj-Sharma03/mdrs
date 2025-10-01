'use client';

import { useState, useEffect } from 'react';
import Aurora from '../../components/background/Aurora';
import FadeContent from '../../components/FadeContent';
import Masonry from '../../components/Masonry';
import SiteHeader from '../../components/SiteHeader';

const eventsGallery = [
  { id: 'event-1', img: '/events/IMG-20250925-WA0053.jpg', height: 520 },
  { id: 'event-2', img: '/events/IMG-20250925-WA0054.jpg', height: 420 },
  { id: 'event-3', img: '/events/IMG-20250925-WA0055.jpg', height: 480 },
  { id: 'event-4', img: '/events/IMG-20250925-WA0056.jpg', height: 360 },
  { id: 'event-5', img: '/events/IMG-20250925-WA0057.jpg', height: 540 }
];

const sportsGallery = [
  { id: 'sport-1', img: '/sports_athelectics/IMG-20250925-WA0069.jpg', height: 500 },
  { id: 'sport-2', img: '/sports_athelectics/IMG-20250925-WA0071.jpg', height: 380 },
  { id: 'sport-3', img: '/sports_athelectics/IMG-20250925-WA0073.jpg', height: 540 },
  { id: 'sport-4', img: '/sports_athelectics/IMG-20250925-WA0074.jpg', height: 420 }
];

const clubsGallery = [
  { id: 'club-1', img: '/clubs_organisation/IMG-20250925-WA0070.jpg', height: 420 },
  { id: 'club-2', img: '/clubs_organisation/IMG-20250925-WA0072.jpg', height: 480 },
  { id: 'club-3', img: '/clubs_organisation/IMG-20250925-WA0075.jpg', height: 400 },
  { id: 'club-4', img: '/clubs_organisation/IMG-20250925-WA0076.jpg', height: 520 }
];

export default function ExtraCurricular() {
  const [showContent, setShowContent] = useState(false);

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

        {/* Extra Curricular Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 border border-white/30 shadow-xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-sm">Campus Life & Activities</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our students thrive beyond the classroom. Explore a glimpse of the vibrant events, athletic energy,
                and student-led clubs that make M.D.R.S. Memorial Public School a joyful place to learn and grow.
              </p>
            </div>
          </div>

          <section className="bg-white/30 backdrop-blur-lg rounded-3xl p-10 border border-white/40 shadow-2xl space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-semibold text-gray-800 drop-shadow-sm">Signature Events</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Annual day celebrations, cultural showcases, and milestone ceremonies bring our community together in
                color and joy.
              </p>
            </div>
            <div className="relative w-full">
              <Masonry
                items={eventsGallery}
                ease="power3.out"
                duration={0.6}
                stagger={0.08}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.97}
                blurToFocus
                colorShiftOnHover={false}
              />
            </div>
          </section>

          <section className="bg-white/30 backdrop-blur-lg rounded-3xl p-10 border border-white/40 shadow-2xl space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-semibold text-gray-800 drop-shadow-sm">Sports & Athletics</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                From morning drills to inter-house tournaments, our young athletes learn teamwork, discipline, and
                resilience on and off the field.
              </p>
            </div>
            <div className="relative w-full">
              <Masonry
                items={sportsGallery}
                ease="power3.out"
                duration={0.6}
                stagger={0.08}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.97}
                blurToFocus
                colorShiftOnHover={false}
              />
            </div>
          </section>

          <section className="bg-white/30 backdrop-blur-lg rounded-3xl p-10 border border-white/40 shadow-2xl space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-semibold text-gray-800 drop-shadow-sm">Clubs & Organisations</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Student-led initiatives across arts, service, leadership, and innovation give every learner a voice and
                a platform to shine.
              </p>
            </div>
            <div className="relative w-full">
              <Masonry
                items={clubsGallery}
                ease="power3.out"
                duration={0.6}
                stagger={0.08}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.97}
                blurToFocus
                colorShiftOnHover={false}
              />
            </div>
          </section>
        </div>
      </div>
      </FadeContent>
    </div>
  );
}
