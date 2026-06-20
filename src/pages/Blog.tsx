import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_BLOG_POSTS } from '../data/demoData';
import { Search, Calendar, User, BookOpen, BookmarkCheck } from 'lucide-react';

export default function Blog() {
  const { setSelectedBlogId, setCurrentPage } = useApp();
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('All');
  const [blogSearchQuery, setBlogSearchQuery] = useState('');

  const blogCategories = ['All', 'Dogs', 'Cats', 'Pet Care', 'Fish'];

  // Recent articles list
  const recentPosts = DEMO_BLOG_POSTS.slice(0, 3);

  // Filter process
  const filteredPosts = useMemo(() => {
    let result = [...DEMO_BLOG_POSTS];

    if (blogCategoryFilter !== 'All') {
      result = result.filter(post => post.category === blogCategoryFilter);
    }

    if (blogSearchQuery.trim() !== '') {
      const q = blogSearchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(q) || 
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [blogCategoryFilter, blogSearchQuery]);

  const handleReadBlog = (id: number) => {
    setSelectedBlogId(id);
    setCurrentPage('blog-details');
  };

  // Popular Tags
  const allTags = ['Puppy', 'Dog Training', 'New Pet Owner', 'Vet Advice', 'Cat Behavior', 'Saltwater Fish', 'Aquarium Care', 'Feline Health'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16 font-sans text-left" id="blog-page-wrapper">
      
      {/* Page Title */}
      <div className="mb-8">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-950 flex items-center gap-1.5">
          📰 The PawMart Journal
        </h2>
        <p className="text-xs text-gray-400 font-medium font-sans">Everything you need to raise a healthy, happy, tail-wagging companion pet!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Listing Grid */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top Quick Category Selection strip */}
          <div className="flex border-b pb-1 gap-2 overflow-x-auto scrollbar-none">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setBlogCategoryFilter(cat)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all shrink-0 ${blogCategoryFilter === cat ? 'bg-brand-blue text-white shadow-xs' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="py-12 bg-white rounded-3xl border border-gray-100/80 text-center text-gray-400 italic">
              No journal articles match your specific queries! Try searching for other topics.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="blog-posts-grid">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleReadBlog(post.id)}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg border border-gray-100 flex flex-col justify-between group cursor-pointer transition-all duration-300"
                >
                  <div className="aspect-video w-full bg-gray-50 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <h3 className="font-display font-bold text-base text-gray-800 line-clamp-2 leading-snug group-hover:text-brand-blue transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-brand-orange group-hover:text-brand-blue transition-colors flex items-center gap-0.5 pt-1">
                      Continue Reading Article →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Sidebar Navigation (recent, tags, search) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Search bar widget */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-2xs space-y-2.5 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#1E1E1E]">Search Articles</h4>
            <div className="relative">
              <input
                type="text"
                placeholder="Search dog tips, fish..."
                value={blogSearchQuery}
                onChange={(e) => setBlogSearchQuery(e.target.value)}
                className="w-full text-xs pl-8 pr-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none"
              />
              <Search className="absolute left-2.5 top-3 w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>

          {/* Recent articles widget */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-2xs space-y-4 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#1E1E1E] flex items-center gap-1">
              <BookOpen className="w-4 h-4 text-brand-blue" />
              Recent Articles
            </h4>
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <div 
                  key={post.id}
                  onClick={() => handleReadBlog(post.id)}
                  className="flex gap-2.5 items-center cursor-pointer group"
                >
                  <img 
                    src={post.image} 
                    alt="" 
                    className="w-12 h-12 rounded-lg object-cover shrink-0 bg-gray-50 border"
                  />
                  <div className="min-w-0">
                    <h5 className="text-[11px] font-bold text-gray-700 line-clamp-1 group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h5>
                    <p className="text-[9px] font-mono text-gray-400 mt-0.5">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular tags widget */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-2xs space-y-3 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#1E1E1E] flex items-center gap-1">
              <BookmarkCheck className="w-4 h-4 text-brand-purple" />
              Popular Topics
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setBlogSearchQuery(tag)}
                  className={`py-1 px-2.5 rounded-lg text-[9px] font-extrabold border transition-all ${
                    blogSearchQuery === tag 
                      ? 'bg-brand-purple text-white' 
                      : 'bg-gray-50 text-gray-500 hover:text-gray-800'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
