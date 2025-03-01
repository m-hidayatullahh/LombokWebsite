import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const portfolioItems = [
  {
    id: "fashion-ecommerce",
    title: "Toko Online Fashion",
    description: "Website e-commerce untuk brand fashion lokal dengan fitur pembayaran online.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", // URL dinamis dari Unsplash
  },
  {
    id: "web-design",
    title: "Jasa Desain Web",
    description: "Membantu bisnis dalam pembuatan desain UI/UX yang menarik dan responsif.",
    image: "https://source.unsplash.com/600x400/?web,design",
  },
];

const PortfolioPage = () => {
  return (
    <div className="p-6">
      <Link to="/" className="flex items-center text-blue-600 hover:underline">
        <ArrowLeft className="w-5 h-5 mr-2" /> Kembali ke Beranda
      </Link>

      <h1 className="text-2xl font-bold mt-4">Portofolio</h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")} // Fallback jika gambar error
            />
            <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <Link to={`/portfolio/${item.id}`} className="text-blue-500 hover:underline">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
