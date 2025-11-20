import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/**
 * Initialize GSAP animations for the hero section
 */
export const initHeroAnimations = () => {
  // Text reveal animation
  gsap.fromTo('.hero-text', 
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out"
    }
  );

  // Floating elements animation
  gsap.to('.floating-element', {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
};

/**
 * Initialize scroll-triggered animations
 */
export const initScrollAnimations = () => {
  // Fade in elements on scroll
  gsap.utils.toArray('.fade-in').forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Parallax effect for gallery items
  gsap.utils.toArray('.parallax-item').forEach(element => {
    gsap.to(element, {
      y: -50,
      scrollTrigger: {
        trigger: element,
        scrub: true
      }
    });
  });
};

/**
 * Create floating animation for elements
 */
export const createFloatingAnimation = (element, amplitude = 20, duration = 2) => {
  return gsap.to(element, {
    y: -amplitude,
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
};

/**
 * Create smooth hover effect for cards
 */
export const createHoverEffect = (element) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
};