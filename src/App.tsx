import React, { useState } from 'react';
import { Star, StarHalf, DollarSign, ShoppingCart } from 'lucide-react';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  const [cart, setCart] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#FFE600] shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Evil Meli</h1>
              <p className="text-sm text-gray-600 mt-1">
                This is a test site. All products are fictional and not real.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-medium">{cart.length}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={() => setCart([...cart, product.id])}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            This is a test site for educational purposes only. Not affiliated with MercadoLibre.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;