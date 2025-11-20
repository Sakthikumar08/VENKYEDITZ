/**
 * Performance utilities for optimizing the portfolio
 */

/**
 * Debounce function to limit the rate at which a function is called
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit the rate at which a function is called
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Lazy load images and videos with intersection observer
 */
export const lazyLoadMedia = (selector, options = {}) => {
  const defaultOptions = {
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const media = entry.target;
        const src = media.dataset.src;
        
        if (src) {
          media.src = src;
          media.classList.remove('lazy');
        }
        
        observer.unobserve(media);
      }
    });
  }, defaultOptions);

  const mediaElements = document.querySelectorAll(selector);
  mediaElements.forEach(media => observer.observe(media));
};

/**
 * Preload critical assets
 */
export const preloadAssets = (assets) => {
  assets.forEach(asset => {
    if (asset.type === 'image') {
      const img = new Image();
      img.src = asset.src;
    } else if (asset.type === 'video') {
      const video = document.createElement('video');
      video.src = asset.src;
    }
  });
};

/**
 * Optimize animation frame usage
 */
export const optimizeRaf = (callback) => {
  let ticking = false;
  
  return function(...args) {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback.apply(this, args);
        ticking = false;
      });
      ticking = true;
    }
  };
};