/**
 * Video utilities for optimized video handling
 */

/**
 * Format video time in MM:SS format
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

/**
 * Optimize video loading with progressive enhancement
 */
export const optimizeVideoLoad = (videoElement, options = {}) => {
  const defaultOptions = {
    preload: 'metadata',
    muted: true,
    playsInline: true,
    loop: true,
    ...options
  };

  // Apply options
  Object.keys(defaultOptions).forEach(key => {
    videoElement[key] = defaultOptions[key];
  });

  // Handle loading states
  videoElement.addEventListener('loadstart', () => {
    videoElement.classList.add('loading');
  });

  videoElement.addEventListener('canplay', () => {
    videoElement.classList.remove('loading');
    videoElement.classList.add('ready');
  });

  videoElement.addEventListener('error', (e) => {
    console.error('Video loading error:', e);
    videoElement.classList.remove('loading');
    videoElement.classList.add('error');
  });

  return videoElement;
};

/**
 * Create a video thumbnail from a video element
 */
export const createVideoThumbnail = (videoElement, time = 1) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    videoElement.currentTime = time;
    
    videoElement.addEventListener('seeked', function onSeeked() {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      
      const thumbnail = canvas.toDataURL('image/jpeg');
      videoElement.removeEventListener('seeked', onSeeked);
      resolve(thumbnail);
    });
    
    videoElement.addEventListener('error', reject);
  });
};

/**
 * Check if browser supports modern video formats
 */
export const checkVideoSupport = () => {
  const video = document.createElement('video');
  const formats = {
    webm: 'video/webm; codecs="vp8, vorbis"',
    mp4: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    ogg: 'video/ogg; codecs="theora, vorbis"'
  };
  
  const support = {};
  
  Object.keys(formats).forEach(format => {
    support[format] = !!video.canPlayType && 
      video.canPlayType(formats[format]) !== '';
  });
  
  return support;
};