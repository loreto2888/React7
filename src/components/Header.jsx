
const pizzaBg = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c";

const Header = () => {
  return (
    <header
      className="hero py-5 text-center"
      style={{
        backgroundImage: `url(${pizzaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        position: 'relative',
        minHeight: '260px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
      }}
    >
      <div style={{
        background: 'rgba(0,0,0,0.55)',
        padding: '2rem',
        borderRadius: '1rem',
        display: 'inline-block',
        marginTop: '2rem'
      }}>
        <h1 className="display-5 fw-bold">¡Pizzería Mamma Mía!</h1>
        <p className="lead small-muted">
          Las mejores pizzas, ingredientes frescos y mucho sabor.<br />¡Elige tu favorita y disfrútala!
        </p>
      </div>
    </header>
  );
};

export default Header;
