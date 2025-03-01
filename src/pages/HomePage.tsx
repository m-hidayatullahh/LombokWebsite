import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  MessageSquare, 
  CheckCircle, 
  X, 
  ChevronRight, 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Users
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [domainResult, setDomainResult] = useState<null | boolean>(null);
  const [activeTab, setActiveTab] = useState('personal');

  const checkDomain = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to check domain availability
    // For demo purposes, we'll simulate a random result
    setDomainResult(Math.random() > 0.5);
  };

  const packages = {
    personal: [
      {
        name: "Starter",
        price: "Rp 1.500.000",
        features: [
          "1 Halaman Landing Page",
          "Domain .com (1 tahun)",
          "Hosting (1 tahun)",
          "Responsive Design",
          "SEO Dasar",
          "Support 7 hari"
        ]
      },
      {
        name: "Basic",
        price: "Rp 3.000.000",
        features: [
          "5 Halaman Website",
          "Domain .com (1 tahun)",
          "Hosting (1 tahun)",
          "Responsive Design",
          "SEO Dasar",
          "Form Kontak",
          "Support 14 hari"
        ]
      },
      {
        name: "Premium",
        price: "Rp 5.000.000",
        features: [
          "10 Halaman Website",
          "Domain .com (1 tahun)",
          "Hosting (1 tahun)",
          "Responsive Design",
          "SEO Optimasi",
          "Form Kontak",
          "Integrasi Media Sosial",
          "Support 30 hari"
        ]
      }
    ],
    business: [
      {
        name: "Business Starter",
        price: "Rp 5.000.000",
        features: [
          "10 Halaman Website",
          "Domain .com (1 tahun)",
          "Hosting (1 tahun)",
          "Responsive Design",
          "SEO Optimasi",
          "Form Kontak",
          "Integrasi Media Sosial",
          "Support 30 hari"
        ]
      },
      {
        name: "Business Pro",
        price: "Rp 8.000.000",
        features: [
          "20 Halaman Website",
          "Domain .com (1 tahun)",
          "Hosting Premium (1 tahun)",
          "Responsive Design",
          "SEO Optimasi Lanjutan",
          "Form Kontak & CRM Basic",
          "Integrasi Media Sosial",
          "Support 60 hari",
          "Training Admin Panel"
        ]
      },
      {
        name: "Enterprise",
        price: "Rp 15.000.000+",
        features: [
          "Website Custom Unlimited",
          "Domain .com (1 tahun)",
          "Hosting Premium (1 tahun)",
          "Responsive Design",
          "SEO Optimasi Lanjutan",
          "CRM System",
          "Integrasi Payment Gateway",
          "Support 90 hari",
          "Training Admin Panel",
          "Maintenance 1 tahun"
        ]
      }
    ],
    ecommerce: [
      {
        name: "Shop Basic",
        price: "Rp 8.000.000",
        features: [
          "Website E-commerce (50 produk)",
          "Domain .com (1 tahun)",
          "Hosting (1 tahun)",
          "Responsive Design",
          "SEO Optimasi",
          "Integrasi Payment Gateway",
          "Support 30 hari"
        ]
      },
      {
        name: "Shop Advanced",
        price: "Rp 12.000.000",
        features: [
          "Website E-commerce (200 produk)",
          "Domain .com (1 tahun)",
          "Hosting Premium (1 tahun)",
          "Responsive Design",
          "SEO Optimasi Lanjutan",
          "Integrasi Payment Gateway",
          "Sistem Inventori",
          "Support 60 hari",
          "Training Admin Panel"
        ]
      },
      {
        name: "Shop Premium",
        price: "Rp 20.000.000+",
        features: [
          "Website E-commerce (Unlimited produk)",
          "Domain .com (1 tahun)",
          "Hosting Premium (1 tahun)",
          "Responsive Design",
          "SEO Optimasi Lanjutan",
          "Integrasi Multiple Payment Gateway",
          "Sistem Inventori Advanced",
          "CRM System",
          "Support 90 hari",
          "Training Admin Panel",
          "Maintenance 1 tahun"
        ]
      }
    ]
  };

  const portfolioItems = [
    {
      id: "fashion-ecommerce",
      title: "Toko Online Fashion",
      description: "Website e-commerce untuk brand fashion lokal dengan fitur pembayaran online.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: "restaurant-website",
      title: "Website Restoran",
      description: "Website untuk restoran dengan fitur menu online dan reservasi meja.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "corporate-website",
      title: "Website Perusahaan",
      description: "Website korporat untuk perusahaan properti dengan fitur pencarian properti.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div id="home" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Jasa Pembuatan Website</span>
                  <span className="block text-blue-600">Profesional di Lombok</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Kami menyediakan jasa pembuatan website berkualitas tinggi dengan harga terjangkau. Dapatkan website modern, responsif, dan SEO-friendly untuk bisnis Anda.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Mulai Sekarang
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                      Lihat Harga
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img 
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" 
            alt="Web development team" 
          />
        </div>
      </div>

      {/* Domain Check Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Domain Check</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Cek Ketersediaan Domain Anda
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Pastikan domain impian Anda tersedia sebelum memulai proyek website.
            </p>
          </div>

          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={checkDomain} className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="domain" className="sr-only">Domain</label>
                <input 
                  id="domain" 
                  type="text" 
                  placeholder="yourdomain.com" 
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button 
                  type="submit" 
                  className="block w-full rounded-md border border-transparent px-4 py-3 bg-blue-600 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:px-10"
                >
                  Cek Domain
                </button>
              </div>
            </form>

            {domainResult !== null && (
              <div className={`mt-4 p-4 rounded-md ${domainResult ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {domainResult ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <X className="h-5 w-5 text-red-400" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className={`text-sm font-medium ${domainResult ? 'text-green-800' : 'text-red-800'}`}>
                      {domainResult 
                        ? `Domain ${domain} tersedia! Anda dapat menggunakannya untuk website Anda.` 
                        : `Domain ${domain} tidak tersedia. Silakan coba domain lain.`}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Layanan Kami</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Solusi Website Terbaik untuk Bisnis Anda
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Kami menyediakan berbagai layanan pembuatan website sesuai kebutuhan Anda.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Website Perusahaan</p>
                <div className="mt-2 ml-16 text-base text-gray-500">
                  Website profesional untuk perusahaan Anda dengan desain modern dan responsif.
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">E-Commerce</p>
                <div className="mt-2 ml-16 text-base text-gray-500">
                  Toko online lengkap dengan sistem pembayaran dan manajemen produk.
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Smartphone className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Website Responsif</p>
                <div className="mt-2 ml-16 text-base text-gray-500">
                  Desain yang menyesuaikan dengan semua ukuran layar, dari desktop hingga mobile.
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Code className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Custom Web Development</p>
                <div className="mt-2 ml-16 text-base text-gray-500">
                  Pengembangan website custom sesuai kebutuhan spesifik bisnis Anda.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Harga</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Paket Harga Transparan
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan budget Anda.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                    activeTab === 'personal'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Personal
                </button>
                <button
                  onClick={() => setActiveTab('business')}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'business'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Business
                </button>
                <button
                  onClick={() => setActiveTab('ecommerce')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                    activeTab === 'ecommerce'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  E-Commerce
                </button>
              </div>
            </div>

            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              {packages[activeTab as keyof typeof packages].map((pkg, index) => (
                <div key={index} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                    <p className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-3xl font-extrabold tracking-tight">{pkg.price}</span>
                    </p>
                    <p className="mt-6 text-gray-500">
                      Paket lengkap untuk kebutuhan website Anda.
                    </p>

                    <ul className="mt-6 space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex">
                          <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="ml-3 text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-blue-700"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Karya Terbaik Kami
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lihat beberapa contoh website yang telah kami kerjakan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
                <img 
                  className="w-full h-48 object-cover" 
                  src={item.image} 
                  alt={item.title} 
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <Link to={`/portfolio/${item.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      Lihat Detail <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Kontak</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hubungi Kami
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Konsultasikan kebutuhan website Anda dengan tim kami.
            </p>
          </div>

          <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nama
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Nomor Telepon
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Pesan
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Jelaskan kebutuhan website Anda"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900">Informasi Kontak</h3>
                <p className="mt-2 text-base text-gray-500">
                  Anda juga dapat menghubungi kami melalui:
                </p>
                <dl className="mt-8 space-y-6">
                  <div className="flex">
                    <dt className="flex-shrink-0">
                      <span className="sr-only">Alamat</span>
                      <Users className="h-6 w-6 text-gray-400" />
                    </dt>
                    <dd className="ml-3 text-gray-500">
                      <p>Jl. Raya Senggigi No. 123</p>
                      <p className="mt-1">Lombok, Nusa Tenggara Barat</p>
                    </dd>
                  </div>
                  <div className="flex">
                    <dt className="flex-shrink-0">
                      <span className="sr-only">Telepon</span>
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </dt>
                    <dd className="ml-3 text-gray-500">
                      <p>+62 812 3456 7890</p>
                    </dd>
                  </div>
                  <div className="flex">
                    <dt className="flex-shrink-0">
                      <span className="sr-only">Email</span>
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </dt>
                    <dd className="ml-3 text-gray-500">
                      <p>info@lombokwebsite.com</p>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8">
                  <h4 className="text-base font-medium text-gray-900">Live Chat Support</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Tim support kami siap membantu Anda setiap hari (09:00 - 17:00 WITA).
                  </p>
                  <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Mulai Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;