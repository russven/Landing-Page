import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      {product.offer && <span className="offer">Oferta</span>}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price.toLocaleString('es-CO')}</p> {/* Format price with comma separator */}
      <button>Ver detalles</button>
    </div>
  );
};

export default ProductCard;