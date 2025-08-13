import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically come from a CMS or API
  const blogPosts = {
    '5-reasons-malaysian-business-needs-website-2025': {
      title: '5 Reasons Your Malaysian Business Needs a Website in 2025',
      content: `
        <p>In today's digital age, having a professional website is no longer optional for Malaysian businesses—it's essential. Whether you're running a small kedai in Kuala Lumpur or a growing enterprise in Penang, a website can transform how you connect with customers and grow your business.</p>

        <h2>1. Reach More Malaysian Customers Online</h2>
        <p>With over 28 million internet users in Malaysia, your potential customers are already online. A professional website allows you to reach customers across Malaysia, from Johor to Sabah, 24/7. Unlike a physical store with limited hours, your website works around the clock to attract new customers.</p>

        <h2>2. Build Trust and Credibility</h2>
        <p>Malaysian consumers research businesses online before making purchases. A professional website with customer testimonials, clear contact information, and professional design builds trust. Without a website, potential customers might question your legitimacy or choose competitors who have a strong online presence.</p>

        <h2>3. Compete with Larger Businesses</h2>
        <p>A well-designed website levels the playing field. Your small Malaysian business can compete with larger companies by showcasing your unique value proposition, local expertise, and personalized service. Many customers prefer supporting local businesses when they can easily find and contact them online.</p>

        <h2>4. Improve Customer Service</h2>
        <p>Your website can answer common questions, provide business hours, location information, and contact details. This reduces phone calls and allows customers to find information instantly. Features like WhatsApp integration make it easy for Malaysian customers to contact you directly.</p>

        <h2>5. Cost-Effective Marketing</h2>
        <p>Compared to traditional advertising methods like newspaper ads or radio spots, a website provides ongoing marketing value. With proper SEO, your website can attract customers searching for your services in Malaysia for years to come, making it one of the most cost-effective marketing investments.</p>

        <h2>Getting Started with Your Malaysian Business Website</h2>
        <p>Ready to get your business online? At WebforMY, we specialize in creating professional websites for Malaysian businesses starting from just RM147/month. Our packages include everything you need: mobile-responsive design, SEO optimization, and ongoing support.</p>
      `,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: '2025-01-15',
      author: 'WebforMY Team',
      category: 'Business Growth',
      readTime: '5 min read'
    },
    'get-more-customers-online-malaysia': {
      title: 'How to Get More Customers Online in Malaysia',
      content: `
        <p>Getting more customers online in Malaysia requires understanding local consumer behavior and implementing proven digital marketing strategies. Here's your complete guide to attracting Malaysian customers online.</p>

        <h2>1. Optimize for Local Malaysian Searches</h2>
        <p>Most Malaysian customers search for local businesses using terms like "near me" or specific location names. Ensure your website includes your city, state, and relevant Malaysian keywords. Set up and optimize your Google Business Profile with accurate information, photos, and customer reviews.</p>

        <h2>2. Use WhatsApp for Customer Communication</h2>
        <p>WhatsApp is extremely popular in Malaysia. Add WhatsApp buttons to your website and social media profiles. Many Malaysian customers prefer WhatsApp over phone calls or emails for business inquiries. Make it easy for them to contact you instantly.</p>

        <h2>3. Leverage Social Media Marketing</h2>
        <p>Facebook and Instagram are widely used in Malaysia. Create business profiles and regularly post engaging content about your products or services. Share customer testimonials, behind-the-scenes content, and local community involvement to build connections with Malaysian audiences.</p>

        <h2>4. Implement SEO Best Practices</h2>
        <p>Optimize your website for search engines with relevant Malaysian keywords. Create content that answers common questions your customers have. Focus on local SEO by including location-specific terms and creating location pages if you serve multiple areas in Malaysia.</p>

        <h2>5. Offer Online Booking or Ordering</h2>
        <p>Make it convenient for customers to do business with you online. Whether it's booking appointments, ordering products, or requesting quotes, streamline the process. Malaysian consumers appreciate convenience and efficiency.</p>

        <h2>6. Build Customer Reviews and Testimonials</h2>
        <p>Positive reviews from Malaysian customers build trust and credibility. Encourage satisfied customers to leave reviews on Google, Facebook, and your website. Display testimonials prominently to show social proof to potential customers.</p>

        <h2>Start Growing Your Online Presence Today</h2>
        <p>Ready to attract more Malaysian customers online? WebforMY can help you implement these strategies with a professional website designed for the Malaysian market. Contact us for a free consultation.</p>
      `,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: '2025-01-12',
      author: 'WebforMY Team',
      category: 'Digital Marketing',
      readTime: '7 min read'
    },
    'affordable-web-design-malaysia-guide': {
      title: 'Affordable Web Design in Malaysia — What You Need to Know',
      content: `
        <p>Finding affordable web design in Malaysia doesn't mean compromising on quality. This comprehensive guide will help you understand pricing, what to expect, and how to choose the right web design service for your Malaysian business.</p>

        <h2>Understanding Web Design Pricing in Malaysia</h2>
        <p>Web design prices in Malaysia vary significantly based on complexity, features, and the service provider. Basic websites can start from RM147/month, while complex e-commerce sites may cost RM500+ monthly. Understanding what's included in each package is crucial for making the right decision.</p>

        <h2>What Should Be Included in Every Package</h2>
        <p>Regardless of price, every professional website should include:</p>
        <ul>
          <li>Mobile-responsive design (essential for Malaysian users)</li>
          <li>Basic SEO optimization</li>
          <li>SSL certificate for security</li>
          <li>Contact forms and WhatsApp integration</li>
          <li>Fast loading speeds</li>
          <li>Professional design and branding</li>
        </ul>

        <h2>Red Flags to Avoid</h2>
        <p>Be cautious of web design services that:</p>
        <ul>
          <li>Offer extremely low prices with hidden costs</li>
          <li>Don't provide mobile-responsive designs</li>
          <li>Use outdated design practices</li>
          <li>Don't offer ongoing support</li>
          <li>Can't show you examples of their work</li>
        </ul>

        <h2>Questions to Ask Potential Web Designers</h2>
        <p>Before choosing a web design service in Malaysia, ask:</p>
        <ul>
          <li>Can you show me examples of websites you've built for Malaysian businesses?</li>
          <li>What's included in the monthly fee?</li>
          <li>How long does it take to build the website?</li>
          <li>Do you provide ongoing support and updates?</li>
          <li>Will my website be optimized for Malaysian search engines?</li>
        </ul>

        <h2>The Value of Professional Web Design</h2>
        <p>While DIY website builders exist, professional web design offers significant advantages for Malaysian businesses. Professional designers understand local market preferences, SEO best practices, and can create websites that truly convert visitors into customers.</p>

        <h2>Making the Right Choice for Your Business</h2>
        <p>Choose a web design service that understands Malaysian businesses, offers transparent pricing, and provides ongoing support. At WebforMY, we specialize in affordable, professional websites for Malaysian businesses with packages starting from RM147/month.</p>
      `,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: '2025-01-10',
      author: 'WebforMY Team',
      category: 'Web Design',
      readTime: '6 min read'
    }
  };

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="pt-20 py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <button
          onClick={() => window.location.href = '/blog'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back to Blog */}
      <div className="bg-gray-50 py-4 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => window.location.href = '/blog'}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-MY')}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Your Malaysian Business Online?
            </h3>
            <p className="text-gray-700 mb-6">
              Let WebforMY help you create a professional website that attracts more customers 
              and grows your business. Get started with our affordable packages from RM147/month.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 inline-flex items-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;