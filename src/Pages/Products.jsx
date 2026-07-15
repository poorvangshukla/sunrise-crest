import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { productsData, categories } from '../data/productsData';
import SEO from '../Components/SEO';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') setFilteredProducts(productsData);
    else setFilteredProducts(productsData.filter(p => p.category === activeFilter));
  }, [activeFilter]);

  return (
    <div
      className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-20"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background-color 0.4s ease, color 0.4s ease' }}
    >
      <SEO
        title="Our Products | Premium Food Trading | Sunrise Crest"
        description="Browse our selection of premium spices, grains, nuts, and specialty food products sourced from the finest producers worldwide. Request a quote today."
        keywords="premium spices, basmati rice, cashew nuts, food products, organic spices, quality grains"
      />

      {/* Hero */}
      <section className="px-4 mb-20">
        <div ref={heroRef} className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">Our Products</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Premium quality food products sourced from the finest producers worldwide
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className="px-6 py-3 transition-all duration-300 font-medium"
                  style={{
                    backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                    color: isActive ? 'var(--accent-text)' : 'var(--text-primary)',
                    border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden group transition-all duration-300"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                aria-label={`Product: ${product.name}`}
              >
                {/* Product Image */}
                <div
                  className="h-48 sm:h-56 lg:h-64 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: 'var(--product-img-bg)' }}
                  role="img"
                  aria-label={`${product.name} product image`}
                >
                  <div
                    className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                    style={{ background: `linear-gradient(to bottom right, var(--product-img-gradient-from), var(--product-img-gradient-to))` }}
                  />
                  <span className="text-6xl relative z-10 opacity-30 group-hover:opacity-50 transition-opacity">
                    {product.category === 'Grains' && '🌾'}
                    {product.category === 'Spices' && '🌶️'}
                    {product.category === 'Nuts' && '🥜'}
                    {product.category === 'Dried Fruits' && '🍇'}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{product.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <div className="mb-4">
                    <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>Origin</p>
                    <p>{product.origin}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>Export Markets</p>
                    <p>{product.exportMarkets.join(', ')}</p>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {product.description}
                  </p>
                  <Link
                    to="/quote"
                    state={{ selectedProduct: product.name }}
                    className="w-full block text-center py-3 transition-all duration-300"
                    style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-text)'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl" style={{ color: 'var(--text-muted)' }}>No products found in this category</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="px-4 sm:px-6 mt-16 sm:mt-24 lg:mt-32 mb-8">
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-12" style={{ border: '1px solid var(--border)' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Don't See What You Need?</h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
            We source a wide variety of products. Contact us for custom requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 transition-all duration-300"
            style={{ border: '2px solid var(--accent)', color: 'var(--accent)' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-text)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;