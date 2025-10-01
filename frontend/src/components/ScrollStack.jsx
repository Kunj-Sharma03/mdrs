'use client';

import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={[
      'scroll-stack-card relative w-full my-12 px-12 py-16 md:px-16 md:py-20 rounded-[48px] origin-top will-change-transform transform-gpu bg-white/70 border border-white/40 backdrop-blur-2xl shadow-[0_40px_80px_rgba(15,23,42,0.28)] text-slate-900 transition-transform duration-500 ease-out hover:-translate-y-2 hover:bg-white/80',
      itemClassName
    ]
      .filter(Boolean)
      .join(' ')}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 120,
  itemScale = 0.035,
  itemStackDistance = 40,
  stackPosition = '22%',
  scaleEndPosition = '12%',
  baseScale = 0.82,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef(null);
    const lenisRef = useRef(null);
    const cardsRef = useRef([]);
    const lastTransformsRef = useRef(new Map());
    const isUpdatingRef = useRef(false);
    const detachListenerRef = useRef(null);
    const ownsLenisRef = useRef(false);

    const calculateProgress = useCallback((scrollTop, start, end) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value, containerHeight) => {
      if (typeof value === 'string' && value.includes('%')) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value);
    }, []);

    const getScrollData = useCallback(() => {
      if (useWindowScroll) {
        return {
          scrollTop: window.scrollY,
          containerHeight: window.innerHeight,
          scrollContainer: document.documentElement
        };
      }

      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }, [useWindowScroll]);

    const getElementOffset = useCallback(
      element => {
        if (useWindowScroll) {
          const rect = element.getBoundingClientRect();
          return rect.top + window.scrollY;
        }
        return element.offsetTop;
      },
      [useWindowScroll]
    );

    const updateCardTransforms = useCallback(() => {
      if (!cardsRef.current.length || isUpdatingRef.current) return;

      isUpdatingRef.current = true;

      const { scrollTop, containerHeight } = getScrollData();
      const stackPositionPx = parsePercentage(stackPosition, containerHeight);
      const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

      const endElement = useWindowScroll
        ? document.querySelector('.scroll-stack-end')
        : scrollerRef.current?.querySelector('.scroll-stack-end');

      const endElementTop = endElement ? getElementOffset(endElement) : 0;

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const cardTop = getElementOffset(card);
        const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
        const triggerEnd = cardTop - scaleEndPositionPx;
        const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
        const pinEnd = endElementTop - containerHeight / 2;

        const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
        const targetScale = baseScale + i * itemScale;
        const scale = 1 - scaleProgress * (1 - targetScale);
        const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

        let blur = 0;
        if (blurAmount) {
          let topCardIndex = 0;
          for (let j = 0; j < cardsRef.current.length; j += 1) {
            const jCardTop = getElementOffset(cardsRef.current[j]);
            const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
            if (scrollTop >= jTriggerStart) {
              topCardIndex = j;
            }
          }

          if (i < topCardIndex) {
            const depthInStack = topCardIndex - i;
            blur = Math.max(0, depthInStack * blurAmount);
          }
        }

        let translateY = 0;
        const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

        if (isPinned) {
          translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
        } else if (scrollTop > pinEnd) {
          translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
        }

        const newTransform = {
          translateY: Math.round(translateY * 100) / 100,
          scale: Math.round(scale * 1000) / 1000,
          rotation: Math.round(rotation * 100) / 100,
          blur: Math.round(blur * 100) / 100
        };

        const lastTransform = lastTransformsRef.current.get(i);
        const hasChanged =
          !lastTransform ||
          Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
          Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
          Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
          Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

        if (hasChanged) {
          const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
          const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

          card.style.transform = transform;
          card.style.filter = filter;

          lastTransformsRef.current.set(i, newTransform);
        }

        if (i === cardsRef.current.length - 1) {
          const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
          if (isInView && !stackCompletedRef.current) {
            stackCompletedRef.current = true;
            onStackComplete?.();
          } else if (!isInView && stackCompletedRef.current) {
            stackCompletedRef.current = false;
          }
        }
      });

      isUpdatingRef.current = false;
    }, [
      itemScale,
      itemStackDistance,
      stackPosition,
      scaleEndPosition,
      baseScale,
      rotationAmount,
      blurAmount,
      useWindowScroll,
      onStackComplete,
      calculateProgress,
      parsePercentage,
      getScrollData,
      getElementOffset
    ]);

    const handleScroll = useCallback(() => {
      updateCardTransforms();
    }, [updateCardTransforms]);

    const setupLenis = useCallback(() => {
      if (useWindowScroll) {
        if (typeof window !== 'undefined' && window.__lenisInstance) {
          const globalLenis = window.__lenisInstance;
          const onScroll = () => handleScroll();
          globalLenis.on('scroll', onScroll);
          detachListenerRef.current = () => globalLenis.off('scroll', onScroll);
          lenisRef.current = globalLenis;
          ownsLenisRef.current = false;
          return globalLenis;
        }

        const lenis = new Lenis({
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
          infinite: false,
          wheelMultiplier: 1,
          lerp: 0.1,
          syncTouch: true,
          syncTouchLerp: 0.075
        });

        lenis.on('scroll', handleScroll);

        const raf = time => {
          lenis.raf(time);
          animationFrameRef.current = requestAnimationFrame(raf);
        };
        animationFrameRef.current = requestAnimationFrame(raf);

        lenisRef.current = lenis;
        ownsLenisRef.current = true;
        return lenis;
      }

      const scroller = scrollerRef.current;
      if (!scroller) return null;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      const onScroll = () => handleScroll();
      lenis.on('scroll', onScroll);
      detachListenerRef.current = () => lenis.off('scroll', onScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      ownsLenisRef.current = true;
      return lenis;
    }, [handleScroll, useWindowScroll]);

    useLayoutEffect(() => {
      const scroller = scrollerRef.current;
      if (!scroller && !useWindowScroll) return;

      const cards = Array.from(
        useWindowScroll
          ? document.querySelectorAll('.scroll-stack-card')
          : scroller.querySelectorAll('.scroll-stack-card')
      );

      cardsRef.current = cards;
      const transformsCache = lastTransformsRef.current;

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          card.style.marginBottom = `${itemDistance}px`;
        }
        card.style.willChange = 'transform, filter';
        card.style.transformOrigin = 'top center';
        card.style.backfaceVisibility = 'hidden';
        card.style.transform = 'translateZ(0)';
        card.style.webkitTransform = 'translateZ(0)';
        card.style.perspective = '1000px';
        card.style.webkitPerspective = '1000px';
      });

      setupLenis();

      updateCardTransforms();

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (detachListenerRef.current) {
          detachListenerRef.current();
          detachListenerRef.current = null;
        }
        if (ownsLenisRef.current && lenisRef.current) {
          lenisRef.current.destroy();
        }
        lenisRef.current = null;
        ownsLenisRef.current = false;
        stackCompletedRef.current = false;
        cardsRef.current = [];
        transformsCache.clear();
        isUpdatingRef.current = false;
      };
    }, [
      itemDistance,
      itemScale,
      itemStackDistance,
      stackPosition,
      scaleEndPosition,
      baseScale,
      scaleDuration,
      rotationAmount,
      blurAmount,
      useWindowScroll,
      onStackComplete,
      setupLenis,
      updateCardTransforms
    ]);

    const containerStyles = useWindowScroll
      ? {
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)'
        }
      : {
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          willChange: 'scroll-position'
        };

    const containerClassName = useWindowScroll
      ? `relative w-full ${className}`.trim()
      : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

    return (
      <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
    <div className="scroll-stack-inner pt-16 md:pt-20 px-6 md:px-12 pb-32 md:pb-40 min-h-screen">
          {children}
          <div className="scroll-stack-end w-full h-px" />
        </div>
      </div>
    );
  };

export default ScrollStack;
