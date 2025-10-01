'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'motion/react';
import Image from 'next/image';

const SCHOOL_IMAGES = [
  '/school_photos/IMG-20250925-WA0032.jpg',
  '/school_photos/IMG-20250925-WA0033.jpg',
  '/school_photos/IMG-20250925-WA0034.jpg',
  '/school_photos/IMG-20250925-WA0035.jpg',
  '/school_photos/IMG-20250925-WA0036.jpg',
  '/school_photos/IMG-20250925-WA0037.jpg',
  '/school_photos/IMG-20250925-WA0038.jpg',
  '/school_photos/IMG-20250925-WA0039.jpg'
];

const DRAG_BUFFER = 75; // Increased for better touch experience
const VELOCITY_THRESHOLD = 400; // Reduced for more responsive swiping
const SPRING_OPTIONS = { type: 'spring', stiffness: 400, damping: 35 }; // Snappier animation

export default function SimpleCarousel({ 
  baseWidth = 400, 
  autoplay = true, 
  autoplayDelay = 4000, 
  pauseOnHover = true 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  
  const imageWidth = baseWidth;
  const trackOffset = imageWidth;

  // Mouse hover handling
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('keydown', handleKeyDown);
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener('keydown', handleKeyDown);
        }
      };
    }
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % SCHOOL_IMAGES.length);
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover]);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      // Swiped left - go to next image
      setCurrentIndex(prev => (prev + 1) % SCHOOL_IMAGES.length);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      // Swiped right - go to previous image
      setCurrentIndex(prev => prev === 0 ? SCHOOL_IMAGES.length - 1 : prev - 1);
    }
  };

  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % SCHOOL_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentIndex(prev => prev === 0 ? SCHOOL_IMAGES.length - 1 : prev - 1);
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl group focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
      style={{ width: `${baseWidth}px`, height: '268px' }}
      tabIndex={0}
      role="region"
      aria-label="School photo gallery"
    >
      {/* Images Container with smooth sliding animation */}
      <motion.div
        className="flex cursor-grab active:cursor-grabbing h-full"
        drag="x"
        dragConstraints={{
          left: -trackOffset * (SCHOOL_IMAGES.length - 1),
          right: 0
        }}
        dragElastic={0.1}
        dragMomentum={false}
        whileDrag={{ cursor: "grabbing" }}
        style={{
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackOffset) }}
        transition={SPRING_OPTIONS}
      >
        {SCHOOL_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            className="relative shrink-0 overflow-hidden"
            style={{
              width: imageWidth,
              height: '268px'
            }}
          >
            <Image
              src={image}
              alt={`School photo ${index + 1}`}
              fill
              className="object-cover pointer-events-none select-none transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              draggable={false}
            />
            {/* Subtle gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Arrows - Better visibility and accessibility */}
      <motion.button
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 z-20 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous image"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </motion.button>
      
      <motion.button
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 z-20 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next image"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </motion.button>

      {/* Progress bar instead of dots for better UX */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-1">
        {SCHOOL_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group/dot relative"
            aria-label={`Go to image ${index + 1}`}
          >
            <div className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/40 group-hover/dot:bg-white/70'
            }`} />
          </motion.button>
        ))}
      </div>

      {/* Loading state for images */}
      <div className="absolute inset-0 bg-gray-200/20 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    </div>
  );
}
