import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * Used for lazy loading and scroll animations
 */
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState(null);
  const observer = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  };

  useEffect(() => {
    if (!element) return;

    observer.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, defaultOptions);

    observer.current.observe(element);

    return () => {
      if (observer.current) {
        observer.current.unobserve(element);
      }
    };
  }, [element, defaultOptions.threshold, defaultOptions.rootMargin]);

  return [setElement, isIntersecting];
};

export default useIntersectionObserver;