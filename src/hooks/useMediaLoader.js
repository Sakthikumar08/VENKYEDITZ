import { useState, useEffect } from 'react';

/**
 * Custom hook for loading media with lazy loading and error handling
 */
const useMediaLoader = (src, placeholder) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [mediaSrc, setMediaSrc] = useState(placeholder || '');

  useEffect(() => {
    if (!src) return;

    const media = new Image();
    media.src = src;

    const handleLoad = () => {
      setMediaSrc(src);
      setIsLoading(false);
      setIsError(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setIsError(true);
    };

    media.addEventListener('load', handleLoad);
    media.addEventListener('error', handleError);

    // If image is already loaded (cached)
    if (media.complete) {
      handleLoad();
    }

    return () => {
      media.removeEventListener('load', handleLoad);
      media.removeEventListener('error', handleError);
    };
  }, [src, placeholder]);

  return { mediaSrc, isLoading, isError };
};

export default useMediaLoader;