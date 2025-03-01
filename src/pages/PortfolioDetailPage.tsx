import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, CheckCircle, ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: "fashion-ecommerce",
    title: "Toko Online Fashion",
    description: "Website e-commerce untuk brand fashion lokal dengan fitur pembayaran online.",
    website: "https://lombokfashion.com",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    client: "Lombok Fashion Store",
    year: "2024",
    services: ["Web Design", "E-commerce Development", "Payment Integration"],
    challenge: "Brand fashion lokal ini membutuhkan platform online untuk menjangkau pelanggan di seluruh Indonesia. Mereka membutuhkan sistem yang mudah digunakan untuk mengelola produk dan pesanan.",
    solution: "Kami membangun website e-commerce dengan desain yang elegan dan responsif. Sistem manajemen produk yang intuitif memudahkan tim untuk mengelola inventaris. Integrasi dengan berbagai gateway pembayaran lokal memastikan proses checkout yang lancar.",
    features: [
      "Katalog produk dengan filter dan pencarian",
      "Sistem keranjang belanja",
      "Integrasi pembayaran (QRIS, Bank Transfer, E-wallet)",
      "Sistem manajemen inventaris",
      "Dashboard admin untuk mengelola pesanan",
      "Notifikasi email otomatis",
      "Desain responsif untuk mobile dan desktop"
    ],
    results: "Sejak peluncuran, toko online ini telah mencatat peningkatan penjualan sebesar 150% dalam 3 bulan pertama. Jangkauan pelanggan meluas hingga ke luar pulau Lombok.",
    gallery: [
      "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    testimonial: {
      quote: "LombokWebsite telah membantu bisnis kami berkembang secara online. Desain website yang profesional dan sistem e-commerce yang mudah digunakan membuat pelanggan kami senang berbelanja di platform kami.",
      author: "Lina Wijaya",
      position: "CEO, Lombok Fashion Store"
    }
  },
  {
    id: "restaurant-website",
    title: "Website Restoran",
    description: "Website untuk restoran dengan fitur menu online dan reservasi meja.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    client: "Warung Lombok Asli",
    year: "2023",
    services: ["Web Design", "CMS Development", "Reservation System"],
    challenge: "Restoran lokal ini ingin meningkatkan visibilitas online dan menyediakan sistem reservasi yang efisien untuk mengurangi panggilan telepon. Mereka juga ingin menampilkan menu mereka secara digital dengan foto yang menarik.",
    solution: "Kami merancang website dengan tampilan visual yang menggugah selera, menampilkan foto-foto hidangan berkualitas tinggi. Sistem reservasi online memungkinkan pelanggan untuk memesan meja dengan mudah. CMS khusus memudahkan staf untuk memperbarui menu dan promosi.",
    features: [
      "Galeri foto hidangan berkualitas tinggi",
      "Menu digital dengan kategori dan deskripsi",
      "Sistem reservasi meja online",
      "Integrasi dengan Google Maps",
      "Halaman testimoni pelanggan",
      "CMS untuk pembaruan menu dan event",
      "Optimasi SEO untuk pencarian lokal"
    ],
    results: "Reservasi online meningkat 80% dalam 2 bulan pertama. Kunjungan dari wisatawan meningkat 60% berkat visibilitas yang lebih baik di mesin pencari.",
    gallery: [
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    testimonial: {
      quote: "Website baru kami telah mengubah cara kami berinteraksi dengan pelanggan. Sistem reservasi online sangat membantu mengurangi beban kerja staf kami, dan tampilan menu yang menarik membuat pelanggan tertarik untuk mencoba hidangan kami.",
      author: "Pak Made",
      position: "Pemilik, Warung Lombok Asli"
    }
  },
  {
    id: "corporate-website",
    title: "Website Perusahaan",
    description: "Website korporat untuk perusahaan properti dengan fitur pencarian properti.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    client: "Lombok Property Group",
    year: "2023",
    services: ["Web Design", "Property Listing System", "CRM Integration"],
    challenge: "Perusahaan properti ini membutuhkan platform untuk menampilkan portofolio properti mereka dengan sistem pencarian yang canggih. Mereka juga ingin mengintegrasikan CRM untuk mengelola prospek dan klien.",
    solution: "Kami mengembangkan website profesional dengan sistem pencarian properti yang komprehensif. Fitur filter memungkinkan pengguna mencari berdasarkan lokasi, harga, dan fitur properti. Integrasi CRM membantu tim penjualan mengelola prospek dengan efisien.",
    features: [
      "Sistem pencarian properti dengan filter lanjutan",
      "Halaman detail properti dengan galeri foto dan virtual tour",
      "Form kontak untuk setiap properti",
      "Integrasi CRM untuk pengelolaan prospek",
      "Dashboard admin untuk mengelola listing",
      "Blog untuk konten pemasaran",
      "Optimasi SEO untuk meningkatkan visibilitas"
    ],
    results: "Jumlah prospek meningkat 120% dalam 6 bulan pertama. Efisiensi tim penjualan meningkat berkat sistem CRM yang terintegrasi.",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    testimonial: {
      quote: "Website baru kami telah menjadi alat pemasaran yang sangat efektif. Sistem pencarian properti yang intuitif memudahkan calon pembeli menemukan properti yang sesuai dengan kebutuhan mereka. Integrasi CRM juga sangat membantu tim penjualan kami.",
      author: "Agus Santoso",
      position: "Direktur Marketing, Lombok Property Group"
    }
  }
];

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioItems.find(item => item.id === id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Proyek tidak ditemukan</h2>
          <p className="mt-4 text-lg text-gray-500">
            Maaf, proyek yang Anda cari tidak ditemukan.
          </p>
          <div className="mt-6">
            <Link to="/portfolio" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Kembali ke Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link to="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60 rounded-xl"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <p className="mt-2 text-xl text-white">{project.description}</p>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">Tentang Proyek</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Tantangan</h3>
                <p className="mt-2 text-gray-600">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Solusi</h3>
                <p className="mt-2 text-gray-600">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Hasil</h3>
                <p className="mt-2 text-gray-600">{project.results}</p>
              </div>
            </div>

            <h3 className="mt-10 text-lg font-semibold text-gray-900">Fitur Utama</h3>
            <ul className="mt-4 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Informasi Proyek</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Klien</p>
                  <p className="font-medium text-gray-900">{project.client}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Tahun</p>
                  <p className="font-medium text-gray-900">{project.year}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Layanan</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="italic text-gray-700">"{project.testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-medium text-gray-900">{project.testimonial.author}</p>
                <p className="text-sm text-gray-600">{project.testimonial.position}</p>
              </div>
            </div>
            <div className="mt-6">
                <a 
                  href={project.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Kunjungi Website
                </a>
              </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Galeri Proyek</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`} 
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Tertarik dengan layanan kami?
              </h2>
              <p className="mt-3 text-lg text-blue-100">
                Konsultasikan kebutuhan website Anda dengan tim kami sekarang.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link
                to="/#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;