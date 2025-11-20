import { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaLoader from '../hooks/useMediaLoader';

const GalleryItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { mediaSrc: imageSrc, isLoading } = useMediaLoader(item.imageUrl);

  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        {isLoading ? (
          <div className="w-full h-full bg-gray-700 animate-pulse rounded-lg" />
        ) : (
          <img 
            src={imageSrc} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <h3 className="text-white font-semibold">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.category}</p>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default GalleryItem;