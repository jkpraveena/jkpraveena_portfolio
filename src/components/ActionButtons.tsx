import React from 'react';
import { Heart, Share2, ArrowRight } from 'lucide-react';

interface ActionButtonsProps {
  isFavorite: boolean;
  onFavoriteClick: () => void;
  onShareClick: () => void;
  onNextClick: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isFavorite,
  onFavoriteClick,
  onShareClick,
  onNextClick,
}) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <button
        onClick={onFavoriteClick}
        className={`p-2 rounded-full transition-colors ${
          isFavorite 
            ? 'bg-pink-100 text-pink-600 hover:bg-pink-200' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
      >
        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
      </button>
      
      <button
        onClick={onShareClick}
        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
        title="Share fact"
      >
        <Share2 className="w-5 h-5" />
      </button>
      
      <button
        onClick={onNextClick}
        className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center space-x-2"
        title="Next fact"
      >
        <span>Next Fact</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};