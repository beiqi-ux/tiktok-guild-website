'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Play, Users, TrendingUp, Award, Globe, MessageCircle, Star, ArrowRight, Menu, X } from 'lucide-react';
import { smartRedirect } from '@/lib/utils';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // BROAD公会TikTok链接配置
  const BROAD_GUILD_TIKTOK_URL = 'https://www.tiktok.com/tcn/scout_creators?use_spark=1&agency_scout_source=qr_code_leads&ShareLinkID=7511510409707555601';

  // 处理智能跳转
  const handleTikTokRedirect = () => {
    smartRedirect(BROAD_GUILD_TIKTOK_URL);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* BROAD Guild Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img
                  src="/images/broad-logo.png"
                  alt="BROAD Guild Logo"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo when image is not available */}
                <div className="w-full h-full bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
                  <Play className="w-3 h-3" />
                </div>
              </div>
              <span className="text-xl font-bold text-gradient">BROAD Guild</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-[#fe2c55] transition-colors">Home</a>
                <a href="#about" className="hover:text-[#fe2c55] transition-colors">About Us</a>
                <a href="#services" className="hover:text-[#fe2c55] transition-colors">Services</a>
                <a href="#creators" className="hover:text-[#fe2c55] transition-colors">Top Creators</a>
                <a href="#contact" className="hover:text-[#fe2c55] transition-colors">Join Us</a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                className="btn-primary"
                onClick={handleTikTokRedirect}
              >
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#fe2c55] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:text-[#fe2c55] transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 hover:text-[#fe2c55] transition-colors">About Us</a>
              <a href="#services" className="block px-3 py-2 hover:text-[#fe2c55] transition-colors">Services</a>
              <a href="#creators" className="block px-3 py-2 hover:text-[#fe2c55] transition-colors">Top Creators</a>
              <a href="#contact" className="block px-3 py-2 hover:text-[#fe2c55] transition-colors">Join Us</a>
              <div className="px-3 py-2">
                <button
                  className="btn-primary w-full"
                  onClick={handleTikTokRedirect}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-dots overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fe2c55]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#25f4ee]/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="heading-xl mb-6">
            Become the Next
            <span className="text-gradient block">TikTok Star</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our professional guild and get traffic support, monetization guidance, and comprehensive assistance to make your creative journey extraordinary
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              className="btn-primary text-lg px-8 py-4"
              onClick={handleTikTokRedirect}
            >
              Join Our Guild Now
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-400">Signed Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">1B+</div>
              <div className="text-gray-400">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-400">Professional Support</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-[#161823]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our <span className="text-gradient">Core Services</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional service system to comprehensively support your TikTok creative journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Traffic Support</h3>
              <p className="text-gray-300 mb-4">
                Professional traffic promotion strategies to help your content gain more exposure and followers
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Precision algorithm optimization</li>
                <li>• Trending topic planning</li>
                <li>• Cross-platform promotion</li>
              </ul>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Guidance</h3>
              <p className="text-gray-300 mb-4">
                One-on-one professional mentor guidance to improve your creative skills and content quality
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Content creation training</li>
                <li>• Personal brand building</li>
                <li>• Performance skill enhancement</li>
              </ul>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monetization Support</h3>
              <p className="text-gray-300 mb-4">
                Diversified revenue channels to maximize your creative value and income
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Brand partnership connections</li>
                <li>• Live streaming sales training</li>
                <li>• Ad revenue optimization</li>
              </ul>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Promotion</h3>
              <p className="text-gray-300 mb-4">
                International promotion resources to help your content reach global markets
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Overseas market expansion</li>
                <li>• Multi-language content support</li>
                <li>• Cross-cultural creative guidance</li>
              </ul>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Support</h3>
              <p className="text-gray-300 mb-4">
                Active creator community for networking, learning, and growing together with peers
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Creator networking groups</li>
                <li>• Regular offline meetups</li>
                <li>• Experience sharing sessions</li>
              </ul>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-300 mb-4">
                Professional technical team providing comprehensive equipment and technical support
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Equipment rental services</li>
                <li>• Video editing training</li>
                <li>• Live streaming tech support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="creators" className="py-20 bg-[#161823]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Featured <span className="text-gradient">Creators</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our outstanding guild creators whose success stories will inspire your creative journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Creator Cards */}
            <div className="card group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-[#fe2c55] to-[#25f4ee] flex items-center justify-center">
                  <div className="text-6xl">👨‍💼</div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                  <span className="text-[#fe2c55]">●</span> Online
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">@FoodieChef</h3>
              <p className="text-gray-400 text-sm mb-4">Food Blogger • 5M Followers</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Views</span>
                  <span className="text-[#25f4ee] font-semibold">20M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Growth Rate</span>
                  <span className="text-green-400 font-semibold">+150%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Income</span>
                  <span className="text-[#fe2c55] font-semibold">$50K+</span>
                </div>
              </div>
            </div>

            <div className="card group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-[#25f4ee] to-[#fe2c55] flex items-center justify-center">
                  <div className="text-6xl">👩‍🎨</div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                  <span className="text-[#fe2c55]">●</span> Online
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">@Fashionista</h3>
              <p className="text-gray-400 text-sm mb-4">Fashion Influencer • 8M Followers</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Views</span>
                  <span className="text-[#25f4ee] font-semibold">35M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Growth Rate</span>
                  <span className="text-green-400 font-semibold">+200%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Income</span>
                  <span className="text-[#fe2c55] font-semibold">$80K+</span>
                </div>
              </div>
            </div>

            <div className="card group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-[#fe2c55] flex items-center justify-center">
                  <div className="text-6xl">🎵</div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                  <span className="text-[#fe2c55]">●</span> Online
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">@MusicGenius</h3>
              <p className="text-gray-400 text-sm mb-4">Music Producer • 12M Followers</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Views</span>
                  <span className="text-[#25f4ee] font-semibold">50M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Growth Rate</span>
                  <span className="text-green-400 font-semibold">+300%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Income</span>
                  <span className="text-[#fe2c55] font-semibold">$120K+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">95%</div>
              <div className="text-gray-400">Creator Growth Rate</div>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-400">Million+ Creators</div>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">100+</div>
              <div className="text-gray-400">Brand Partnerships</div>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">4.9</div>
              <div className="text-gray-400">Satisfaction Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#161823] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">About <span className="text-gradient">Our Guild</span></h2>
              <p className="text-xl text-gray-300 mb-6">
                We are an industry-leading TikTok official partner guild dedicated to providing creators with the most professional services and support.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#25f4ee] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>TikTok Official Certified Guild</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#25f4ee] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>5 Years Professional Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#25f4ee] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>500+ Success Stories</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#25f4ee] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>24/7 Professional Support</span>
                </div>
              </div>
              <button className="btn-primary">
                Learn More Details
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">3 Years</div>
                  <div className="text-sm text-gray-400">Average Growth Period</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">200%</div>
                  <div className="text-sm text-gray-400">Average Income Growth</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">98%</div>
                  <div className="text-sm text-gray-400">Contract Renewal Rate</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6 text-white">Ready to Start Your Creative Journey?</h2>
            <p className="text-xl text-white/90 mb-8">
              Fill out the application form and our professional team will contact you within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Application Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Join Our Guild</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">TikTok Account</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="@your_tiktok_username"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Follower Count</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                      <option value="">Select follower count</option>
                      <option value="0-1k">Under 1K</option>
                      <option value="1k-10k">1K - 10K</option>
                      <option value="10k-100k">10K - 100K</option>
                      <option value="100k+">100K+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Content Type</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                      <option value="">Select content type</option>
                      <option value="dance">Dance</option>
                      <option value="comedy">Comedy</option>
                      <option value="food">Food</option>
                      <option value="fashion">Fashion</option>
                      <option value="music">Music</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="For easy communication"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Invitation Code
                      <span className="text-white/60 text-xs ml-1">(if any)</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#25f4ee]/50"
                      placeholder="Enter your invitation code"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">About Yourself</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tell us about your creative style and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
                >
                  Submit Application
                </button>
              </form>
            </div>

            {/* Benefits & Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">Application Requirements</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Have a TikTok account with original content</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Passionate about creating and consistent posting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Comply with platform rules and community guidelines</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Cooperate with guild training and guidance</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-black/30 rounded-lg border border-white/20">
                  <p className="text-sm text-white/70">
                    📋 <strong>About Invitation Codes:</strong> Invitation codes are exclusive passes provided by our guild for specific creators. If you have received an invitation code, please fill it in when applying.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">Membership Benefits</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#25f4ee] rounded-full"></div>
                    <span>One-on-one professional mentorship</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#25f4ee] rounded-full"></div>
                    <span>Traffic support and algorithm optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#25f4ee] rounded-full"></div>
                    <span>Priority brand partnership recommendations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#25f4ee] rounded-full"></div>
                    <span>Creator community networking opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#fe2c55] rounded-full"></div>
                    <span>Exclusive invitation code privileges</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gradient-to-r from-[#fe2c55]/20 to-[#25f4ee]/20 rounded-lg border border-[#25f4ee]/30">
                  <p className="text-sm text-white/90">
                    💎 <strong>Invitation Code Benefits:</strong> If you already have an invitation code, you can enjoy fast-track approval and exclusive membership benefits!
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
                <div className="space-y-3 text-white/90">
                  <div>
                    <strong>Email:</strong> contact@tiktokguild.com
                  </div>
                  <div>
                    <strong>Support Phone:</strong> +1-800-TIKTOK-1
                  </div>
                  <div>
                    <strong>Business Hours:</strong> 9:00 AM - 6:00 PM (Weekdays)
                  </div>
                  <div>
                    <strong>Emergency Contact:</strong> 24/7 Online Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161823] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">BROAD Guild</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional BROAD TikTok guild dedicated to helping creators achieve their dreams
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button type="button" className="hover:text-white transition-colors text-left">Traffic Support</button></li>
                <li><button type="button" className="hover:text-white transition-colors text-left">Professional Guidance</button></li>
                <li><button type="button" className="hover:text-white transition-colors text-left">Monetization Support</button></li>
                <li><button type="button" className="hover:text-white transition-colors text-left">Global Promotion</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button type="button" className="hover:text-white transition-colors text-left">Guild Introduction</button></li>
                <li><button type="button" className="hover:text-white transition-colors text-left">Team Members</button></li>
                <li><button type="button" className="hover:text-white transition-colors text-left">Success Stories</button></li>
                <li><button type="button" className="hover:text-white transition-colors text-left">News & Updates</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: contact@tiktokguild.com</li>
                <li>Phone: +1-800-TIKTOK-1</li>
                <li>Address: 123 Creator Street, Social Media City</li>
                <li>Support: 24/7 Live Chat</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 BROAD Guild. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
