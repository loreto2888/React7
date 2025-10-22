import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #ff6b6b, #ffeaa7)' }}>
      <div className="text-center text-white">
        <div className="mb-4">
          <h1 className="display-1" style={{ fontSize: '8rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>🍕</h1>
          <h1 className="display-1 fw-bold mb-0" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>404</h1>
        </div>
        
        <div className="mb-4">
          <h2 className="mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            ¡Oops! Esta pizza se perdió en el horno...
          </h2>
          <p className="lead mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            La página que buscas no existe o fue movida a otra dirección.
          </p>
          <p className="mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Pero no te preocupes, ¡nuestras pizzas deliciosas te están esperando en casa!
          </p>
        </div>

        <div>
          <Link 
            to="/" 
            className="btn btn-light btn-lg px-5 py-3 me-3"
            style={{ 
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            🏠 Volver al Inicio
          </Link>
          
          <Link 
            to="/cart" 
            className="btn btn-success btn-lg px-5 py-3"
            style={{ 
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            🛒 Ver Carrito
          </Link>
        </div>

        <div className="mt-5">
          <small style={{ opacity: 0.8 }}>
            Error 404 - Pizzería Mamma Mía
          </small>
        </div>
      </div>
    </div>
  );
};

export default NotFound;