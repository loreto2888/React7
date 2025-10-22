// src/pages/Home.jsx
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useCart } from '../context/useCart';
import { pizzas } from '../utils/pizzas';

const Home = () => {
  const { addToCart } = useCart();

  return (
    <main>
      <Header />
      <section className="container py-4">
        <div className="row justify-content-center">
          {pizzas.map((pizza) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={pizza.id}>
              <CardPizza
                id={pizza.id}
                nombre={pizza.nombre}
                precio={pizza.precio}
                ingredientes={pizza.ingredientes}
                imagen={pizza.imagen}
                onAddToCart={() => addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;