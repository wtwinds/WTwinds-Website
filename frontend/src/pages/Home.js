export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div className="container text-center mt-5">
        <h1 className="fw-bold">WT Winds</h1>
        <p className="lead">Professional Internship Platform</p>

        <div className="row mt-4 justify-content-center">
          <div className="col-md-4">
            <i className="bi bi-code-slash fs-1 text-primary"></i>
            <h5 className="mt-2">Software Development</h5>
          </div>

          <div className="col-md-4">
            <i className="bi bi-kanban fs-1 text-success"></i>
            <h5 className="mt-2">Product Management</h5>
          </div>
        </div>
      </div>

      {/* ===== OUR PRODUCTS ===== */}
      <div className="container mt-5">
        <h2 className="fw-bold text-center mb-4">Our Products</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">

            {/* Tambola */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="fw-bold">Real-Time Multiplayer Tambola Game</h4>

                <a
                  href="https://tambola-wtwinds.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Product
                </a>

                <hr />
                <p className="text-muted mb-0">
                  Developed by <strong>Isba Patel & Aryan Hiremath</strong><br />
                  Managed by <strong>Abhishek & Mudit</strong>
                </p>
              </div>
            </div>

            {/* Tic Tac Toe */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="fw-bold">Real-Time Multiplayer Tic-Tac-Toe</h4>

                <a
                  href="https://tictactoe-bw7q.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Product
                </a>

                <hr />
                <p className="text-muted mb-0">
                  Developed by <strong>Isba Patel</strong><br />
                  Managed by <strong>Rudra Deshpande</strong>
                </p>
              </div>
            </div>

            {/* Banking App */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="fw-bold">Banking & Stock Management App</h4>

                <a
                  href="https://bank-stock-app.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Product
                </a>

                <hr />
                <p className="text-muted mb-0">
                  Developed by <strong>Lalit Mahajan</strong>
                  <br></br>
                  Managed by <strong>Hetavi Shah</strong>
                </p>
              </div>
            </div>

            {/* Flight Search */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="fw-bold">Flight Search Web Application</h4>

                <a
                  href="https://flight-search-iua0.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Product
                </a>

                <hr />
                <p className="text-muted mb-0">
                  Developed by <strong>Aryan Hiremath</strong>
                  <br></br>
                  Managed by <strong>Gunjan</strong>
                </p>
              </div>
            </div>
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h4 className="fw-bold">
                        WeaTherly 
                    </h4>

                    <a href="https://drive.google.com/file/d/1qAfFLN9a7tPl9JE8rj4ccfRGxGNf2oEC/view?usp=drive_link"
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className="btn btn-primary"                    
                    >
                        View Live Product
                    </a>
                    <hr />
                    <p className="text-muted mb-0">
                        Developed by <strong>Isba Patel</strong>
                        <br></br>
                        Managed by <strong>Gunjan Deore</strong>
                    </p>
                </div>

            </div>
                          {/* InShot App */}
<div className="card shadow-sm mb-4">
  <div className="card-body">
    <h4 className="fw-bold">InShot</h4>

    <a
      href="https://inshots.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      View Live Product
    </a>

    <hr />
    <p className="text-muted mb-0">
      Developed by <strong>Lalit Mahajan</strong>
      <br />
      Managed by <strong>Vedanti Ingle</strong>
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
}