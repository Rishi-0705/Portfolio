import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      slug: '5-reasons-malaysian-business-needs-website-2025',
      title: '5 Reasons Your Malaysian Business Needs a Website in 2025',
      excerpt: 'Discover why having a professional website is crucial for Malaysian businesses in 2025. From reaching more customers to building credibility, learn how a website can transform your business.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-15',
      author: 'WebforMY Team',
      category: 'Business Growth',
      readTime: '5 min read'
    },
    {
      slug: 'get-more-customers-online-malaysia',
      title: 'How to Get More Customers Online in Malaysia',
      excerpt: 'Learn proven strategies to attract and convert more Malaysian customers online. From local SEO to social media marketing, discover what works best for Malaysian businesses.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-12',
      author: 'WebforMY Team',
      category: 'Digital Marketing',
      readTime: '7 min read'
    },
    {
      slug: 'affordable-web-design-malaysia-guide',
      title: 'Affordable Web Design in Malaysia — What You Need to Know',
      excerpt: 'Complete guide to getting affordable, professional web design in Malaysia. Learn about pricing, what to expect, and how to choose the right web design service for your budget.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-10',
      author: 'WebforMY Team',
      category: 'Web Design',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Web Design Malaysia Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights, tips, and guides to help Malaysian businesses succeed online. 
            Learn about web design, digital marketing, and growing your business in Malaysia.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-MY')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                      onClick={() => window.location.href = `/blog/${post.slug}`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Malaysian Web Design Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights on web design, digital marketing, and growing your Malaysian business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;