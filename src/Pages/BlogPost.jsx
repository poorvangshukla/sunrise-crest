import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { blogsData } from '../data/blogsData';
import SEO from '../components/SEO';

const BlogPost = () => {
    const { slug } = useParams();
    const blog = blogsData.find(b => b.slug === slug);

    if (!blog) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen bg-[#0F1011] text-[#f0f4ef] pt-32 pb-20">
            <SEO
                title={`${blog.title} | Sunrise Crest Blog`}
                description={blog.excerpt}
                keywords={`food trade, ${blog.title}, import export, industry insights`}
            />
            <div className="max-w-4xl mx-auto px-4">
                <Link
                    to="/blogs"
                    className="inline-block mb-8 text-textGray hover:text-[#f0f4ef] transition-colors"
                >
                    ← Back to Blogs
                </Link>

                <article>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{blog.title}</h1>

                    <div className="flex gap-4 text-textGray mb-8 text-sm">
                        <span>{blog.author}</span>
                        <span>•</span>
                        <span>{blog.date}</span>
                    </div>

                    {blog.image && (
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-[400px] object-cover mb-12 rounded"
                            loading="lazy"
                        />
                    )}

                    <div
                        className="prose prose-invert prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
