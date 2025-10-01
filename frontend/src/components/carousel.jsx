import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import Image from 'next/image';

const DEFAULT_ITEMS = [
  {
    title: 'School Campus',
    description: 'Beautiful view of our school campus and facilities.',
    id: 1,
    image: '/school_photos/IMG-20250925-WA0032.jpg'
  },
  {
    title: 'Learning Environment',
    description: 'Modern classrooms and learning spaces.',
    id: 2,
    image: '/school_photos/IMG-20250925-WA0033.jpg'
  },
  {
    title: 'Academic Excellence',
    description: 'Students engaged in various academic activities.',
    id: 3,
    image: '/school_photos/IMG-20250925-WA0034.jpg'
  },
  {
    title: 'School Community',
    description: 'Our vibrant school community in action.',
    id: 4,
    image: '/school_photos/IMG-20250925-WA0035.jpg'
  },
  {
    title: 'Educational Programs',
    description: 'Comprehensive educational programs and activities.',
    id: 5,
    image: '/school_photos/IMG-20250925-WA0036.jpg'
  },
  {
    title: 'School Life',
    description: 'Daily life and activities at our school.',
    id: 6,
    image: '/school_photos/IMG-20250925-WA0037.jpg'
  },
  {
    title: 'Student Activities',
    description: 'Students participating in various school activities.',
    id: 7,
    image: '/school_photos/IMG-20250925-WA0038.jpg'
  },
  {
    title: 'School Events',
    description: 'Special events and celebrations at our school.',
    id: 8,
    image: '/school_photos/IMG-20250925-WA0039.jpg'
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
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

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % items.length);
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, items.length, pauseOnHover]);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      // Swiping left (next image)
      setCurrentIndex(prev => (prev + 1) % items.length);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      // Swiping right (previous image)
      setCurrentIndex(prev => prev === 0 ? items.length - 1 : prev - 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#222]'
      }`}
      style={{
        width: `${baseWidth}px`,
        height: round ? `${baseWidth}px` : '300px',
        touchAction: 'pan-y'
      }}
    >
      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragElastic={0.1}
        dragMomentum={false}
        whileDrag={{ cursor: "grabbing" }}
        dragConstraints={{
          left: -trackItemOffset * (items.length - 1),
          right: 0
        }}
        style={{
          gap: `${GAP}px`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={SPRING_OPTIONS}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`relative shrink-0 ${
                round
                  ? 'bg-white/20 backdrop-blur-md border-0'
                  : 'bg-white/20 backdrop-blur-md border border-white/30 rounded-[12px]'
              } overflow-hidden shadow-lg pointer-events-none`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '268px',
                ...(round && { borderRadius: '50%' })
              }}
            >
              <div className={`w-full h-full relative overflow-hidden ${round ? 'rounded-full' : 'rounded-[12px]'}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center pointer-events-none select-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? 'bg-white'
                    : 'bg-[#333333]'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]'
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
