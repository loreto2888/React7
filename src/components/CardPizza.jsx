import React from "react";
import { Link } from "react-router-dom";

const CardPizza = ({ id, nombre, precio, imagen, ingredientes, onAddToCart, showViewMore = true }) => {
  return (
    <div className="card-pizza">
      <img
        src={imagen}
        alt={`Pizza ${nombre}`}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
        onError={e => {
          e.target.onerror = null;
          e.target.src = "img/default.jpg";
        }}
      />
      <h2>{nombre}</h2>
      <p><strong>Precio:</strong> ${precio.toLocaleString()}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {ingredientes && ingredientes.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {showViewMore && id && (
          <Link to={`/pizza/${id}`} style={{ textDecoration: "none" }}>
            <button style={{ background: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
              Ver Más
            </button>
          </Link>
        )}
        <button onClick={onAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;