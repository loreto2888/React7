// src/pages/Pizza.jsx
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useCart } from '../context/useCart';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { addToCart } = useCart();
  const { id } = useParams(); // Obtener el id desde la URL
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Pizza no encontrada');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error al obtener la pizza:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPizza();
    }
  }, [id]);

  if (loading) {
    return (
      <main>
        <Header />
        <div className="container py-4 text-center">
          <p>Cargando pizza...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <Header />
        <div className="container py-4 text-center">
          <p>Error: {error}</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <section className="container py-4">
        <div className="row g-4">
          {pizza && (
            <div className="" key={pizza.id}>
              <CardPizza 
                id={pizza.id}
                nombre={pizza.name}
                precio={pizza.price}
                ingredientes={pizza.ingredients}
                imagen={pizza.img}
                onAddToCart={() => addToCart({ id: pizza.id, nombre: pizza.name, precio: pizza.price, imagen: pizza.img })}
                showViewMore={false}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Pizza;