import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../Components/PageTransition';
import SEO from '../Components/SEO';

const NotFound = () => {
    return (
        <PageTransition>
            <SEO
                title="404 - Page Not Found | Sunrise Crest"
                description="The page you're looking for doesn't exist. Return to Sunrise Crest homepage."
            />
            <div
                className="min-h-screen flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background-color 0.4s ease, color 0.4s ease' }}
            >
                <div className="text-center px-4">
                    <h1 className="text-[10rem] md:text-[15rem] font-bold opacity-20">404</h1>
                    <h2 className="text-3xl md:text-5xl mb-4 -mt-20">Page Not Found</h2>
                    <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-8 py-4 transition-all duration-300"
                        style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-text)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
};

export default NotFound;
