import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const userEmail = "usuario@pizzeriamamiamia.com"; // Email estático por ahora

  const handleLogout = () => {
    // Funcionalidad estática por ahora
    alert("Sesión cerrada correctamente");
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-header bg-dark text-white text-center py-4">
              <h3 className="mb-0">👤 Mi Perfil</h3>
            </div>
            <div className="card-body text-center py-5">
              <div className="mb-4">
                <div className="mb-3">
                  <i className="fs-1 text-primary">👤</i>
                </div>
                <h5 className="card-title">Información del Usuario</h5>
              </div>
              
              <div className="mb-4">
                <h6 className="text-muted mb-2">📧 Email:</h6>
                <p className="lead fw-bold">{userEmail}</p>
              </div>

              <div className="mb-4">
                <h6 className="text-muted mb-2">🍕 Estado:</h6>
                <span className="badge bg-success fs-6">Usuario Activo</span>
              </div>
              
              <div className="d-grid gap-2">
                <button 
                  className="btn btn-danger btn-lg"
                  onClick={handleLogout}
                >
                  🔒 Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;