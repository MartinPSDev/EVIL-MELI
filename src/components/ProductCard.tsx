import React, { useState } from 'react';
import { Star, StarHalf, MessageSquare } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [rating, setRating] = useState(product.rating);
  const [comment, setComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the comment to an API
    setShowCommentForm(false);
    setComment('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        
        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              } cursor-pointer`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-gray-800">${product.price}</p>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={onAddToCart}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={() => setShowCommentForm(!showCommentForm)}
            className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>

        {showCommentForm && (
          <form onSubmit={handleSubmitComment} className="mt-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Write your comment..."
              rows={3}
            />
            <button
              type="submit"
              className="mt-2 bg-gray-800 text-white py-1 px-3 rounded-md text-sm hover:bg-gray-900"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductCard;