import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';
import Link from "next/link";

export function BlogSection() {
  return (
    <div className="w-full bg-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              My Thoughts
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of technology, design, and innovation through 
              thoughtful analysis and practical insights.
            </p> */}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
                <Card 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Meta Information */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <time>{post.date}</time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Read More Link */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span className="mr-2">Read more</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};