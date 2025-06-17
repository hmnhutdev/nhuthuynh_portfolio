"use client";

import { useLanguage } from '@/context/language-provider';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Define blog post data
const blogPosts = [
  {
    title: 'Getting Started with Next.js and TypeScript',
    excerpt: 'Learn how to set up a new project with Next.js and TypeScript for better developer experience.',
    date: '2025-05-15',
    readTime: '5 min read',
    slug: 'getting-started-nextjs-typescript',
    image: '/assets/blog/nextjs-typescript.jpg',
  },
  {
    title: 'Building Responsive UIs with TailwindCSS',
    excerpt: 'Explore how to create beautiful, responsive user interfaces using TailwindCSS utility classes.',
    date: '2025-04-28',
    readTime: '7 min read',
    slug: 'responsive-ui-tailwindcss',
    image: '/assets/blog/tailwindcss.jpg',
  },
  {
    title: 'Animation Techniques with Framer Motion',
    excerpt: 'Discover how to add smooth animations to your React components using Framer Motion.',
    date: '2025-04-10',
    readTime: '6 min read',
    slug: 'animation-framer-motion',
    image: '/assets/blog/framer-motion.jpg',
  },
  {
    title: 'State Management in Modern React Applications',
    excerpt: 'Compare different state management approaches in React and when to use each one.',
    date: '2025-03-22',
    readTime: '8 min read',
    slug: 'state-management-react',
    image: '/assets/blog/state-management.jpg',
  },
];

const Blog = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('blog.title') as string}
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            {t('blog.description') as string}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="animate-on-scroll bg-card rounded-lg overflow-hidden border border-border shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Blog Post Image */}
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">
                {/* Replace with actual image when available */}
                <div className="text-center p-4">Blog Image: {post.title}</div>
              </div>

              {/* Blog Post Content */}
              <div className="p-6">
                {/* Meta information */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title and excerpt */}
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                {/* Read more link */}
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  {t('blog.readMore') as string}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all posts button */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors inline-block"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
