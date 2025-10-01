'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Aurora from '../../components/background/Aurora';
import FadeContent from '../../components/FadeContent';
import ScrollStack, { ScrollStackItem } from '../../components/ScrollStack';
import SiteHeader from '../../components/SiteHeader';

export default function About() {
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

        {/* About Content */}
        <main className="relative px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            {/* School Description Section */}
            <div className="text-center mb-20">
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                About <span className="text-blue-600">M.D.R.S.</span>
              </h1>
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 max-w-4xl mx-auto">
                <p className="text-xl text-gray-800 leading-relaxed font-medium">
                  M.D.R.S MEMORIAL PUBLIC SCHOOL is a co-ed school that provides a nurturing and inclusive 
                  environment for students to grow academically, socially and emotionally. With a strong 
                  focus on academic excellence, character development, innovation, we empower students to 
                  reach their full potential and become responsible global citizens.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mb-20">
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/30">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
                <p className="text-lg text-gray-800 leading-relaxed text-center max-w-4xl mx-auto">
                  To foster highest quality education and nurture the creativity in students. M.D.R.S MEMORIAL 
                  PUBLIC SCHOOL is a child centered and progressive school, where emphasis is placed on 
                  holistic development of the students. We believe education is the right of every child. Our 
                  mission is to imbibe, extend and refine moral and ethical values for holistic development of 
                  students as good human beings and socially responsible citizens.
                </p>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-xl border border-white/30">
                <div className="text-5xl font-black text-blue-600 mb-3">260</div>
                <div className="text-gray-800 font-semibold text-xl">Students</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-xl border border-white/30">
                <div className="text-5xl font-black text-blue-600 mb-3">7</div>
                <div className="text-gray-800 font-semibold text-xl">Faculty Members</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-xl border border-white/30">
                <div className="text-5xl font-black text-blue-600 mb-3">8</div>
                <div className="text-gray-800 font-semibold text-xl">Years of Excellence</div>
              </div>
            </div>

            {/* Leadership Messages with ScrollStack */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Words from Leadership</h2>
              
              <ScrollStack
                useWindowScroll
                className="max-w-6xl mx-auto"
                itemDistance={140}
                itemScale={0.04}
                itemStackDistance={50}
                stackPosition="24%"
                scaleEndPosition="12%"
              >
                <ScrollStackItem itemClassName="min-h-[30rem] flex flex-col lg:flex-row items-center gap-12 lg:gap-24 text-slate-900">
                    <div className="flex-shrink-0">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-[7px] border-white/45 shadow-[0_35px_70px_rgba(15,23,42,0.35)] bg-white">
                        <Image
                          src="/chairman.jpg"
                          alt="Chairman - Dr. R.K. Sharma"
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: '50% 10%' }}
                        />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mt-6 text-center tracking-wide">Chairman</h3>
                      <p className="text-slate-600 text-center text-base">Dr. R.K. Sharma</p>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-xl text-slate-700 leading-relaxed italic max-w-3xl">
                        &ldquo;Welcome to M.D.R.S MEMORIAL PUBLIC SCHOOL, a community dedicated to fostering academic
                        excellence, creativity, and character development. As Chairman, I&rsquo;m proud of our dedicated
                        faculty and staff who work tirelessly to provide a nurturing environment that empowers students
                        to reach their full potential. Our mission is to inspire a love of learning, promote critical
                        thinking, and cultivate responsible global citizens. I&rsquo;m confident that our students will become
                        the leaders and innovators of tomorrow. Thank you for being part of our school community. I
                        invite you to explore our website to learn more about our programs, achievements, and values.&rdquo;
                      </blockquote>
                    </div>
                </ScrollStackItem>

                <ScrollStackItem itemClassName="min-h-[30rem] flex flex-col lg:flex-row items-center gap-12 lg:gap-24 text-slate-900">
                    <div className="flex-shrink-0">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-[7px] border-white/45 shadow-[0_35px_70px_rgba(15,23,42,0.35)] bg-white">
                        <Image
                          src="/principal.jpg"
                          alt="Principal - Mrs. Priya Gupta"
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: '50% 15%' }}
                        />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mt-6 text-center tracking-wide">Principal</h3>
                      <p className="text-slate-600 text-center text-base">Mrs. Priya Gupta</p>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-xl text-slate-700 leading-relaxed italic max-w-3xl">
                        &ldquo;Welcome to M.D.R.S MEMORIAL PUBLIC SCHOOL! As Principal, I&rsquo;m delighted to share our
                        commitment to providing a supportive and inclusive learning environment that empowers
                        students to excel academically, socially, and emotionally. Our dedicated faculty and staff strive
                        to inspire curiosity, creativity, and critical thinking in our students. We believe in nurturing
                        individual talents and strengths, while promoting values like respect, empathy, and
                        responsibility. I&rsquo;m proud of our school&rsquo;s achievements and look forward to working with students,
                        parents, and the community to continue our journey of excellence. Thank you for being part of
                        our school family!&rdquo;
                      </blockquote>
                    </div>
                </ScrollStackItem>

                <ScrollStackItem itemClassName="min-h-[26rem] flex flex-col items-center justify-center text-center text-slate-900">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/40 flex items-center justify-center mb-8 border-[3px] border-white/40 shadow-xl">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-wide">Our Vision</h3>
                    <p className="text-slate-700 leading-relaxed text-xl max-w-3xl">
                      &ldquo;To be a premier educational institution that transforms young minds into confident, creative,
                      and compassionate global citizens who contribute meaningfully to society.&rdquo;
                    </p>
                </ScrollStackItem>
              </ScrollStack>
            </div>

            {/* Values Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
                  <p className="text-gray-700">Striving for high standards in education</p>
                </div>

                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Respect</h3>
                  <p className="text-gray-700">Promoting empathy, kindness and inclusivity</p>
                </div>

                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                  <p className="text-gray-700">Building strong relationships among students, parents and staff</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        </div>
      </FadeContent>
    </div>
  );
}
