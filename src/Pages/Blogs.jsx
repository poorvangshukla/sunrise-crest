import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { blogsData } from '../data/blogsData';
import SEO from '../Components/SEO';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen pt-32 pb-20"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background-color 0.4s ease, color 0.4s ease' }}
    >
      <SEO
        title="Industry Insights & Blog | Sunrise Crest"
        description="Expert perspectives on global food trade, market trends, certifications, and industry best practices from Sunrise Crest."
        keywords="food trade blog, import export news, food industry insights, trade trends, food safety certifications"
      />

      {/* Hero */}
      <section className="px-4 mb-20">
        <div ref={heroRef} className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Industry Insights</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Expert perspectives on global food trade, market trends, and industry best practices
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden transition-all duration-300 group"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                {/* Image placeholder */}
                <div
                  className="h-56 relative overflow-hidden"
                  style={{ background: `linear-gradient(to bottom right, var(--product-img-gradient-from), var(--product-img-gradient-to))` }}
                  role="img"
                  aria-label={`Featured image for ${blog.title}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: 'var(--bg-primary)' }} />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 transition-colors group-hover:opacity-80">
                    {blog.title}
                  </h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {blog.excerpt}
                  </p>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center hover:gap-3 gap-2 transition-all duration-300"
                    style={{ color: 'var(--accent)' }}
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-16">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
                const isActive = currentPage === number;
                return (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className="px-5 py-2 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                      color: isActive ? 'var(--accent-text)' : 'var(--text-primary)',
                      border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                    }}
                  >
                    {number}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="px-4 mt-32">
        <div className="max-w-4xl mx-auto text-center p-12" style={{ border: '1px solid var(--border)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
            Get the latest insights on global food trade delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 outline-none"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                cursor: 'text',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button
              className="px-8 py-3 font-medium transition-all duration-300"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-text)',
                border: '1px solid var(--accent)',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-text)'; }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;