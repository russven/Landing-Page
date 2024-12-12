import React from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header'; // Importa el componente Header
import HeroSection from '../components/HeroSection'; // Importa el componente HeroSection
import Footer from '../components/Footer'; // Importar el Footer



const products = [
  {
    id: 1,
    name: 'Balón de fútbol',
    price: 120000,
    image: '/balon.jpg',
    description: 'Balón de fútbol profesional para un juego de alta calidad.',
    offer: true
  },
  {
    id: 2,
    name: 'Camiseta de fútbol',
    price: 85750,
    image: '/camiseta.jpg',
    description: 'Camiseta de fútbol oficial del equipo más popular.'
  },
  {
    id: 3,
    name: 'Guayos de fútbol',
    price: 135999,
    image: '/guayos.jpg',
    description: 'Guayos de fútbol con tecnología de última generación para un mejor rendimiento.',
    offer: true
  },
  {
    id: 4,
    name: 'Canilleras de fútbol',
    price: 35900,
    image: '/canilleras.jpg',
    description: 'Canilleras de fútbol para proteger tus piernas durante el juego.'
  }
];


const HomePage = () => {
  return (
    <div>
      <Header /> {/* Encabezado */}
      <HeroSection /> {/* Sección Hero */}
      <h2>Productos Destacados</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer /> {}
    </div>
  );
};

export default HomePage;