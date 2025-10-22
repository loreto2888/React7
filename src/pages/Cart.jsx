import React from "react";
import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";

const Cart = () => {
  const { cart, updateQuantity, total, resetCart } = useCart();
  const { token } = useUser();

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", background: "#fff", padding: "24px", borderRadius: "8px", boxShadow: "0 2px 8px #ccc" }}>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map(pizza => (
            <div key={pizza.id} style={{ display: "flex", alignItems: "center", marginBottom: "16px", borderBottom: "1px solid #eee", paddingBottom: "8px" }}>
              <img src={pizza.imagen} alt={pizza.nombre} style={{ width: "60px", borderRadius: "6px", marginRight: "16px" }} />
              <div style={{ flex: 1 }}>
                <h4>{pizza.nombre}</h4>
                <p>Precio: ${pizza.precio}</p>
                <div>
                  <button onClick={() => updateQuantity(pizza.id, -1)} style={{ marginRight: "8px" }}>-</button>
                  <span>{pizza.cantidad}</span>
                  <button onClick={() => updateQuantity(pizza.id, 1)} style={{ marginLeft: "8px" }}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button 
            style={{ 
              padding: "10px 24px", 
              background: token ? "#e63946" : "#ccc", 
              color: "#fff", 
              border: "none", 
              borderRadius: "6px", 
              cursor: token ? "pointer" : "not-allowed" 
            }}
            disabled={!token}
            onClick={() => {
              if (cart.length === 0 || !token) return;
              alert('¡Compra realizada con éxito!');
              resetCart();
            }}
          >
            {token ? 'Pagar' : 'Inicia sesión para pagar'}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;