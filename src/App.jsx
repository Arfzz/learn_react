import React, { useState, useEffect } from 'react';
import TextType from '@/components/TextType';
import { ChevronDown, ChevronUp, Search, Menu, X, MapPin, Phone, Mail, Instagram, ShoppingBag, Star, Award, Clock, Users, Heart, ArrowRight, Globe, Sparkles } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('id');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Translations
  const translations = {
    id: {
      nav: {
        home: 'Beranda',
        products: 'Produk',
        story: 'Tentang Kami',
        contact: 'Kontak',
        faq: 'FAQ'
      },
      hero: {
        title: 'Danggedang',
        subtitle: 'Keripik Pisang Premium & Camilan Kekinian',
        description: 'Cita rasa unik yang berbeda dari yang lain. Dibuat dengan cinta sejak 2002.',
        cta: 'Jelajahi Produk',
        shopee: 'Beli di Shopee'
      },
      products: {
        title: 'Produk Kami',
        categories: {
          all: 'Semua',
          chips: 'Keripik',
          frozen: 'Makanan Beku',
          drinks: 'Minuman',
          traditional: 'Tradisional'
        },
        bestSeller: 'Best Seller',
        viewAll: 'Lihat Semua Produk'
      },
      testimonials: {
        title: 'Kata Pelanggan',
        subtitle: 'Apa yang mereka katakan tentang produk kami'
      },
      story: {
        title: 'Cerita Kami',
        subtitle: 'Perjalanan dari modal Rp100.000 hingga menjadi brand terpercaya'
      },
      contact: {
        title: 'Hubungi Kami',
        form: {
          name: 'Nama Lengkap',
          email: 'Email',
          message: 'Pesan',
          send: 'Kirim Pesan'
        },
        info: {
          address: 'Alamat',
          phone: 'WhatsApp',
          email: 'Email'
        }
      },
      faq: {
        title: 'Pertanyaan Umum'
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        story: 'About Us',
        contact: 'Contact',
        faq: 'FAQ'
      },
      hero: {
        title: 'Danggedang',
        subtitle: 'Premium Banana Chips & Modern Snacks',
        description: 'Unique flavors that stand out from the rest. Made with love since 2002.',
        cta: 'Explore Products',
        shopee: 'Buy on Shopee'
      },
      products: {
        title: 'Our Products',
        categories: {
          all: 'All',
          chips: 'Chips',
          frozen: 'Frozen Food',
          drinks: 'Beverages',
          traditional: 'Traditional'
        },
        bestSeller: 'Best Seller',
        viewAll: 'View All Products'
      },
      testimonials: {
        title: 'Customer Reviews',
        subtitle: 'What they say about our products'
      },
      story: {
        title: 'Our Story',
        subtitle: 'Journey from Rp100,000 capital to trusted brand'
      },
      contact: {
        title: 'Contact Us',
        form: {
          name: 'Full Name',
          email: 'Email',
          message: 'Message',
          send: 'Send Message'
        },
        info: {
          address: 'Address',
          phone: 'WhatsApp',
          email: 'Email'
        }
      },
      faq: {
        title: 'Frequently Asked Questions'
      }
    }
  };

  const t = translations[language];

  // Product data
  const products = [
    { id: 1, name: 'Keripik Pisang Cokelat', price: 30000, category: 'chips', image: '🍫', bestSeller: true, description: 'Varian unggulan dengan rasa cokelat premium' },
    { id: 2, name: 'Basreng Original', price: 30000, category: 'chips', image: '🥟', bestSeller: true, description: 'Keripik basreng renyah dengan bumbu khas' },
    { id: 3, name: 'Dimsum Frozen', price: 30000, category: 'frozen', image: '🥟', description: 'Dimsum berkualitas siap masak' },
    { id: 4, name: 'Matcha Latte', price: 30000, category: 'drinks', image: '🍵', description: 'Minuman matcha creamy' },
    { id: 5, name: 'Potato Donat Full Topping', price: 35000, category: 'frozen', image: '🍩', bestSeller: true, description: 'Donat kentang dengan topping melimpah' },
    { id: 6, name: 'Kembang Goyang Sultan', price: 30000, category: 'traditional', image: '🍪', description: 'Camilan tradisional premium' },
    { id: 7, name: 'Nugget Bola Keju', price: 30000, category: 'frozen', image: '🧀', description: 'Nugget lembut dengan keju meleleh' },
    { id: 8, name: 'Banana Latte', price: 30000, category: 'drinks', image: '🍌', description: 'Minuman pisang creamy' }
  ];

  // Testimonials data
  const testimonials = [
    { id: 1, name: 'Siti Nurhaliza', text: 'Keripik pisang cokelatnya enak banget! Rasa cokelatnya pas, tidak terlalu manis. Cocok untuk camilan keluarga.', rating: 5, avatar: '👩‍🦱' },
    { id: 2, name: 'Budi Santoso', text: 'Basrengnya renyah dan bumbunya meresap sempurna. Sudah jadi langganan untuk acara kumpul-kumpul.', rating: 5, avatar: '👨‍💼' },
    { id: 3, name: 'Maya Putri', text: 'Produk frozen food-nya berkualitas dan praktis. Dimsum dan nuggetnya jadi andalan saat ada tamu mendadak.', rating: 4, avatar: '👩‍🎓' }
  ];

  // FAQ data
  const faqs = [
    { 
      id: 1, 
      question: language === 'id' ? 'Apakah produk sudah bersertifikat halal?' : 'Are products halal certified?',
      answer: language === 'id' ? 'Ya, semua produk kami sudah bersertifikat halal MUI.' : 'Yes, all our products are MUI halal certified.'
    },
    { 
      id: 2, 
      question: language === 'id' ? 'Bagaimana cara memesan produk?' : 'How to order products?',
      answer: language === 'id' ? 'Anda bisa memesan melalui WhatsApp, Shopee, atau datang langsung ke outlet kami di Botani Square Bogor.' : 'You can order via WhatsApp, Shopee, or visit our outlet at Botani Square Bogor.'
    },
    { 
      id: 3, 
      question: language === 'id' ? 'Apakah bisa kirim ke luar kota?' : 'Do you ship outside the city?',
      answer: language === 'id' ? 'Ya, kami melayani pengiriman ke seluruh Indonesia melalui berbagai ekspedisi terpercaya.' : 'Yes, we ship throughout Indonesia via trusted courier services.'
    },
    { 
      id: 4, 
      question: language === 'id' ? 'Berapa lama daya tahan produk?' : 'What is the product shelf life?',
      answer: language === 'id' ? 'Keripik dapat bertahan 2-3 bulan dalam kemasan tertutup. Produk frozen harus disimpan di freezer.' : 'Chips last 2-3 months in sealed packaging. Frozen products must be stored in freezer.'
    }
  ];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // iOS Button Component
  const IOSButton = ({ children, variant = 'primary', size = 'md', className = '', onClick, href, ...props }) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium transition-all duration-200 
      focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden
      active:scale-95 hover:scale-105
    `;
    
    const variants = {
      primary: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500 border-0',
      secondary: 'bg-white/80 backdrop-blur-xl border border-gray-200/50 text-gray-800 hover:bg-white/90 shadow-md hover:shadow-lg focus:ring-blue-500',
      success: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500 border-0',
      warning: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl focus:ring-orange-500 border-0'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-xl',
      md: 'px-6 py-3 text-base rounded-2xl',
      lg: 'px-8 py-4 text-lg rounded-3xl'
    };
    
    const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    
    if (href) {
      return (
        <a href={href} className={buttonClass} {...props}>
          {children}
        </a>
      );
    }
    
    return (
      <button onClick={onClick} className={buttonClass} {...props}>
        {children}
      </button>
    );
  };

  // iOS Card Component
  const IOSCard = ({ children, className = '', hover = true, glass = true }) => {
    const baseStyles = `
      rounded-3xl transition-all duration-300 border border-white/20
      ${hover ? 'hover:scale-105 hover:shadow-2xl' : ''}
      ${glass ? 'bg-white/80 backdrop-blur-xl shadow-xl' : 'bg-white shadow-lg'}
    `;
    
    return (
      <div className={`${baseStyles} ${className}`}>
        {children}
      </div>
    );
  };

  // iOS Input Component
  const IOSInput = ({ type = 'text', placeholder, value, onChange, className = '', ...props }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-6 py-4 text-base rounded-2xl border border-gray-200/50
          bg-white/80 backdrop-blur-xl focus:bg-white/90
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
          transition-all duration-200 placeholder-gray-500
          ${className}
        `}
        {...props}
      />
    );
  };

  // iOS Select Component (Dropdown)
  const IOSSelect = ({ options, value, onChange, placeholder, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 text-base rounded-2xl border border-gray-200/50
                     bg-white/80 backdrop-blur-xl hover:bg-white/90
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                     transition-all duration-200 flex items-center justify-between text-left"
        >
          <span className={value ? 'text-gray-800' : 'text-gray-500'}>
            {value ? options.find(opt => opt.value === value)?.label : placeholder}
          </span>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-white/95 backdrop-blur-xl
                           rounded-2xl shadow-2xl border border-gray-200/50 z-20 max-h-60 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-3 text-left hover:bg-blue-50/80 transition-colors duration-150
                           text-gray-800 first:rounded-t-2xl last:rounded-b-2xl"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

    

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden font-['Poppins']">
      {/* iOS-style floating orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* iOS-style Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/80 backdrop-blur-2xl shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className={`text-2xl font-bold transition-colors duration-300 ${
                  scrollY > 50 ? 'text-gray-800' : 'text-white'
                }`}>Danggedang</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <a 
                  key={key} 
                  href={`#${key}`} 
                  className={`font-medium transition-all duration-300 hover:scale-110 px-4 py-2 rounded-xl ${
                    scrollY > 50 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50' 
                      : 'text-white hover:text-blue-100 hover:bg-white/10'
                  }`}
                >
                  {value}
                </a>
              ))}
              <IOSButton
                variant="secondary"
                size="sm"
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="!px-4 !py-2"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'id' ? 'EN' : 'ID'}
              </IOSButton>
            </div>

            <IOSButton
              variant="secondary"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden !p-3"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </IOSButton>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-200/50">
            <div className="px-6 py-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <a 
                  key={key}
                  href={`#${key}`} 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 rounded-2xl transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {value}
                </a>
              ))}
              <IOSButton
                variant="secondary"
                size="sm"
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="w-full"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'id' ? 'English' : 'Indonesia'}
              </IOSButton>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* iOS-style gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-pink-600/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <IOSCard className="inline-block px-6 py-3 mb-8 !bg-white/20 !backdrop-blur-xl !border-white/30">
              <div className="flex items-center text-white">
                <Award className="w-5 h-5 mr-3 text-green-400" />
                <span className="font-semibold">Bersertifikat Halal MUI</span>
              </div>
            </IOSCard>

            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-semibold text-white/90 mb-6 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              {t.hero.subtitle}
            </p>
            
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp font-medium" style={{animationDelay: '0.6s'}}>
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{animationDelay: '0.9s'}}>
              <IOSButton 
                href="#products"
                variant="primary"
                size="lg"
                className="group !bg-gradient-to-r !from-blue-500 !to-purple-600 hover:!from-blue-600 hover:!to-purple-700"
              >
                <span className="flex items-center">
                  {t.hero.cta}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </IOSButton>
              
              <IOSButton
                href="https://shopee.co.id"
                variant="secondary"
                size="lg"
                className="group !bg-white/20 !backdrop-blur-xl !border-white/30 !text-white hover:!bg-white/30"
              >
                <ShoppingBag className="w-5 h-5 mr-3 text-red-400 group-hover:animate-bounce" />
                {t.hero.shopee}
              </IOSButton>
            </div>
          </div>
        </div>

        {/* Floating iOS-style elements */}
        <div className="absolute top-1/4 left-10 text-6xl animate-float drop-shadow-lg">🍌</div>
        <div className="absolute top-1/3 right-20 text-5xl animate-float drop-shadow-lg" style={{animationDelay: '1s'}}>🍫</div>
        <div className="absolute bottom-1/4 left-1/4 text-4xl animate-float drop-shadow-lg" style={{animationDelay: '2s'}}>🥟</div>
        <div className="absolute bottom-1/3 right-1/4 text-5xl animate-float drop-shadow-lg" style={{animationDelay: '1.5s'}}>🍵</div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t.products.title}
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {/* iOS-style Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
              <div className="flex gap-3 flex-wrap justify-center">
                {Object.entries(t.products.categories).map(([key, label]) => (
                  <IOSButton
                    key={key}
                    variant={activeCategory === key ? 'primary' : 'secondary'}
                    size="md"
                    onClick={() => setActiveCategory(key)}
                    className={activeCategory === key ? '!bg-gradient-to-r !from-blue-500 !to-purple-600' : ''}
                  >
                    {label}
                  </IOSButton>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <IOSInput
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="!pl-14 !pr-6 w-80"
                />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <IOSCard 
                key={product.id} 
                className="group overflow-hidden animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <div className="h-56 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                    {product.image}
                  </div>
                  {product.bestSeller && (
                    <IOSCard className="absolute top-4 right-4 !bg-gradient-to-r !from-red-500 !to-pink-500 !border-0 !px-3 !py-1 !rounded-full">
                      <span className="text-white text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {t.products.bestSeller}
                      </span>
                    </IOSCard>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed font-medium">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                    <IOSButton
                      variant="primary"
                      size="sm"
                      className="!p-3 !bg-gradient-to-r !from-blue-500 !to-purple-600 group/btn"
                    >
                      <ShoppingBag className="w-5 h-5 group-hover/btn:animate-bounce" />
                    </IOSButton>
                  </div>
                </div>
              </IOSCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-blue-100/50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 mb-4 font-medium">{t.testimonials.subtitle}</p>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {testimonials.map((testimonial, index) => (
    <IOSCard 
      key={testimonial.id} 
      className="group p-8 animate-fadeInUp hover:-translate-y-2"
      style={{animationDelay: `${index * 0.2}s`}}
    >
      <div className="text-center mb-6">
        <IOSCard className="w-20 h-20 mx-auto mb-4 text-4xl flex items-center justify-center !bg-gradient-to-br !from-purple-100 !to-pink-100 !border-purple-200/50">
          {testimonial.avatar}
        </IOSCard>
        <h4 className="font-bold text-xl text-gray-800">{testimonial.name}</h4>
      </div>
      
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-6 h-6 transition-colors duration-300 ${
              i < testimonial.rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }`} 
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 text-center leading-relaxed font-medium">
        "{testimonial.text}"
      </blockquote>
    </IOSCard>
  ))}
</div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              {t.story.title}
            </h2>
            <p className="text-xl text-gray-600 mb-4 font-medium">{t.story.subtitle}</p>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                { icon: Clock, title: '2002 - The Beginning', desc: 'Started with only Rp100,000 capital and two flavors, driven by passion and determination.' },
                { icon: Users, title: 'Growing Together', desc: 'Expanded our team, participated in bazaars, and opened a physical store at Botani Square.' },
                { icon: Heart, title: 'Today', desc: 'Serving customers nationwide with halal-certified products and unique flavors that stand out.' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start group animate-fadeInUp"
                  style={{animationDelay: `${index * 0.3}s`}}
                >
                  <div className="flex-shrink-0">
                    <IOSCard className="w-16 h-16 !bg-gradient-to-r !from-blue-500 !to-indigo-600 flex items-center justify-center !border-0 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </IOSCard>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <IOSCard className="p-12 text-center group !bg-gradient-to-br !from-blue-50 !via-indigo-50 !to-purple-50 !border-blue-200/50">
                <div className="text-8xl mb-6 group-hover:animate-bounce transition-all duration-300">🎯</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  To deliver unique, high-quality snacks that bring joy to every moment, while maintaining our commitment to halal standards and customer satisfaction.
                </p>
              </IOSCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t.faq.title}
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <IOSCard 
                key={faq.id} 
                className="overflow-hidden animate-fadeInUp hover:!shadow-2xl"
                style={{animationDelay: `${index * 0.1}s`}}
                hover={false}
              >
                <IOSButton
                  variant="secondary"
                  onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
                  className="w-full !px-8 !py-6 text-left flex justify-between items-center !bg-transparent hover:!bg-gradient-to-r hover:!from-indigo-50/50 hover:!to-purple-50/50 !border-0 !shadow-none group !rounded-3xl"
                >
                  <span className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`transform transition-all duration-300 ${activeFAQ === faq.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-indigo-500" />
                  </div>
                </IOSButton>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 py-6 border-t bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">{faq.answer}</p>
                  </div>
                </div>
              </IOSCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t.contact.title}
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fadeInUp">
              <IOSCard className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Send us a message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">
                      {t.contact.form.name}
                    </label>
                    <IOSInput
                      type="text"
                      placeholder={t.contact.form.name}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">
                      {t.contact.form.email}
                    </label>
                    <IOSInput
                      type="email"
                      placeholder={t.contact.form.email}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      rows="6"
                      className="w-full px-6 py-4 text-base rounded-2xl border border-gray-200/50
                                 bg-white/80 backdrop-blur-xl focus:bg-white/90
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                 transition-all duration-200 placeholder-gray-500 resize-none"
                      placeholder={t.contact.form.message}
                    ></textarea>
                  </div>
                  
                  <IOSButton
                    variant="primary"
                    size="lg"
                    className="w-full !bg-gradient-to-r !from-blue-500 !to-purple-600 hover:!from-blue-600 hover:!to-purple-700"
                  >
                    {t.contact.form.send}
                  </IOSButton>
                </form>
              </IOSCard>
            </div>
            
            <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <IOSCard className="p-8 !bg-gradient-to-br !from-blue-50 !via-indigo-50 !to-purple-50 !border-blue-200/50">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: t.contact.info.address, value: 'Taman Cimanggu, Kota Bogor', extra: 'Outlet: Botani Square, Bogor' },
                    { icon: Phone, label: t.contact.info.phone, value: '+62 819-3611-0396', link: 'https://wa.me/6281936110396' },
                    { icon: Mail, label: t.contact.info.email, value: 'nastiticahayagemilang@gmail.com', link: 'mailto:nastiticahayagemilang@gmail.com' },
                    { icon: Instagram, label: 'Instagram', value: '@Danggedang_official', link: 'https://instagram.com/Danggedang_official' }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="flex-shrink-0">
                        <IOSCard className="w-12 h-12 !bg-gradient-to-r !from-blue-500 !to-purple-600 flex items-center justify-center !border-0 group-hover:scale-110 transition-all duration-300">
                          <contact.icon className="w-6 h-6 text-white" />
                        </IOSCard>
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-gray-700 mb-1">{contact.label}</p>
                        {contact.link ? (
                          <a 
                            href={contact.link} 
                            target={contact.link.startsWith('http') ? '_blank' : undefined}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-blue-600 hover:text-purple-600 font-medium transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 font-medium">{contact.value}</p>
                        )}
                        {contact.extra && (
                          <p className="text-gray-500 text-sm mt-1 font-medium">{contact.extra}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </IOSCard>
              
              {/* Map placeholder */}
              <IOSCard className="h-64 flex items-center justify-center !bg-gradient-to-br !from-blue-100 !to-purple-100 !border-blue-200/50 group cursor-pointer">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4 group-hover:animate-bounce transition-all duration-300" />
                  <p className="text-gray-800 font-bold text-xl mb-2">Visit Our Store</p>
                  <p className="text-gray-600 font-medium">Botani Square, Bogor</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">Click to open in Google Maps</p>
                </div>
              </IOSCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-fadeInUp">
              <div className="flex items-center space-x-3 mb-6">
                <IOSCard className="w-14 h-14 !bg-gradient-to-r !from-blue-500 !to-purple-600 flex items-center justify-center !border-0">
                  <Sparkles className="w-8 h-8 text-white" />
                </IOSCard>
                <h3 className="text-3xl font-bold">Danggedang</h3>
              </div>
              <p className="text-blue-100 mb-8 leading-relaxed font-medium">
                Keripik Pisang Premium & Camilan Kekinian sejak 2002. Dibuat dengan cinta untuk keluarga Indonesia.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, link: 'https://instagram.com/Danggedang_official' },
                  { icon: Phone, link: 'https://wa.me/6281936110396' },
                  { icon: ShoppingBag, link: 'https://shopee.co.id' }
                ].map((social, index) => (
                  <IOSButton
                    key={index}
                    href={social.link}
                    variant="primary"
                    size="sm"
                    className="!p-3 !bg-gradient-to-r !from-blue-500 !to-purple-600 hover:!from-blue-600 hover:!to-purple-700"
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </IOSButton>
                ))}
              </div>
            </div>
            
            <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'Products', 'Our Story', 'Contact', 'FAQ'].map((link, index) => (
                  <a 
                    key={index}
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="block text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 transform font-medium"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4 text-blue-100">
                <p className="flex items-center font-medium">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  Botani Square, Bogor
                </p>
                <p className="flex items-center font-medium">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  +62 819-3611-0396
                </p>
                <p className="flex items-center font-medium">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  nastiticahayagemilang@gmail.com
                </p>
              </div>
              
              <IOSCard className="mt-8 p-4 !bg-gradient-to-r !from-blue-500/20 !to-purple-500/20 !border-blue-400/30">
                <p className="text-sm text-blue-200 font-semibold flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Bersertifikat Halal MUI
                </p>
              </IOSCard>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 mt-12 text-center">
            <p className="text-blue-200 font-medium">
              &copy; 2024 Danggedang. All rights reserved. Made with ❤️ for Indonesian UMKM.
            </p>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Floating Button */}
      
      
      {/* Custom Styles with Poppins Font */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* iOS-style scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 8px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Enhanced backdrop blur support */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
        
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }
        
        /* iOS-style shadow depths */
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          -webkit-tap-highlight-color: transparent;
        }
          
        button, a {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default App;