import React from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_BLOG_POSTS } from '../data/demoData';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Heart, 
  Share2, 
  Facebook, 
  Instagram, 
  Twitter,
  BookOpen
} from 'lucide-react';

export default function SingleBlog() {
  const { selectedBlogId, setCurrentPage, setSelectedBlogId } = useApp();

  const post = DEMO_BLOG_POSTS.find(p => p.id === selectedBlogId) || DEMO_BLOG_POSTS[0];

  // Related articles matches (filter out same post)
  const relatedPosts = DEMO_BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  const handleReadAnotherPost = (id: number) => {
    setSelectedBlogId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-6 pb-16 font-sans text-left" id="single-blog-wrapper">
      
      {/* Return button */}
      <button 
        onClick={() => setCurrentPage('blog')}
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-blue cursor-pointer transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Return to all articles
      </button>

      {/* Main Container */}
      <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-2xs p-4 sm:p-8 space-y-6">
        
        {/* Category tag */}
        <span className="inline-block bg-brand-orange text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="font-display font-black text-2xl sm:text-4xl text-gray-950 leading-tight">
          {post.title}
        </h1>

        {/* Authors and attributes */}
        <div className="flex flex-wrap gap-4 items-center text-xs text-gray-400 font-mono border-y py-3 border-gray-100">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4 text-brand-blue" />
            <span>By <strong>{post.author}</strong></span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-brand-orange" />
            <span>Published: {post.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-brand-purple" />
            <span>4 min read</span>
          </div>
        </div>

        {/* Hero image header */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-50 border relative">
          <img 
            src={post.image} 
            alt={post.title} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Full contents (Convert carriage returns into robust JSX paragraphs) */}
        <div 
          className="text-xs sm:text-base text-gray-600 leading-relaxed font-sans space-y-4 pt-4 whitespace-pre-line"
          id="single-blog-content-body"
        >
          {post.content}
        </div>

        {/* Tags footer / Share footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 mt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-bold text-gray-400 uppercase bg-gray-50 px-2.5 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5" /> Share:
            </span>
            <div className="flex gap-2">
              <button className="p-1.5 bg-gray-50 hover:bg-brand-blue hover:text-white rounded-lg text-gray-400 transition-all">
                <Facebook className="w-3.5 h-3.5 fill-current" />
              </button>
              <button className="p-1.5 bg-gray-50 hover:bg-brand-blue hover:text-white rounded-lg text-gray-400 transition-all">
                <Instagram className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 bg-gray-50 hover:bg-brand-blue hover:text-white rounded-lg text-gray-400 transition-all">
                <Twitter className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Related articles slider segment */}
      <div className="mt-12 space-y-4">
        <h3 className="font-display font-black text-xl text-gray-900 flex items-center gap-1.5">
          <BookOpen className="w-5 h-5 text-brand-orange" />
          Related Articles of Interest
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="related-posts-grid">
          {relatedPosts.map((rPost) => (
            <div 
              key={rPost.id}
              onClick={() => handleReadAnotherPost(rPost.id)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 p-3 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow text-left"
            >
              <img 
                src={rPost.image} 
                alt="" 
                referrerPolicy="no-referrer"
                className="aspect-video w-full object-cover rounded-xl bg-gray-50"
              />
              <div className="pt-3 space-y-1">
                <span className="text-[9px] font-bold font-mono text-brand-orange">{rPost.category}</span>
                <h4 className="font-display font-bold text-xs text-gray-800 line-clamp-1 group-hover:text-brand-blue transition-colors">
                  {rPost.title}
                </h4>
                <p className="text-[10px] text-gray-400 line-clamp-2">{rPost.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
