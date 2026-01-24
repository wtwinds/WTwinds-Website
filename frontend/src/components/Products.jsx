export default function Products() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Our Products</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* ===== Tambola Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Real-Time Multiplayer Tambola Game
              </h4>

              <p className="card-text mt-2">
                A real-time multiplayer Tambola platform built using
                <strong> HTML, CSS, JavaScript</strong> and
                <strong> Python WebSockets</strong>.
              </p>

              <ul className="mb-3">
                <li>Live multiplayer rooms</li>
                <li>Auto ticket marking & claim validation</li>
                <li>Host-controlled number draw</li>
                <li>Real-time leaderboard</li>
              </ul>

              <p className="card-text">
                Fully deployed on <strong>Render</strong> with secure
                WebSocket communication.
              </p>

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
                Ref ID: <strong>@40475838947539</strong>
              </p>
            </div>
          </div>

          {/* ===== Tic-Tac-Toe Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Real-Time Multiplayer Tic-Tac-Toe
              </h4>

              <p className="card-text mt-2">
                A web-based Tic-Tac-Toe game built using
                <strong> HTML, CSS, JavaScript</strong> and
                <strong> Python (Flask)</strong>.
              </p>

              <ul className="mb-3">
                <li>Single-player & multiplayer modes</li>
                <li>Host & join live rooms</li>
                <li>Turn-based real-time gameplay</li>
                <li>Win & draw validation</li>
              </ul>

              <p className="card-text">
                Hosted on <strong>Render</strong> for easy access and demos.
              </p>

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
                Ref ID: <strong>39486734678934</strong>
              </p>
            </div>
          </div>

          {/* ===== Banking App Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Banking & Stock Management App
              </h4>

              <p className="card-text mt-2">
                A full-stack banking simulation platform for managing
                accounts and transactions.
              </p>

              <ul className="mb-3">
                <li>User authentication & account management</li>
                <li>Send & receive money</li>
                <li>Transaction history tracking</li>
                <li>Database-driven backend</li>
              </ul>

              <p className="card-text">
                Deployed on <strong>Render</strong> with real-time updates.
              </p>

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
                Developed by <strong>Lalit Mahajan</strong><br />
                Ref ID: <strong>BSTK-APP-001</strong>
              </p>
            </div>
          </div>

          {/* ===== Flight Search Product (LAST) ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Flight Search Web Application
              </h4>

              <p className="card-text mt-2">
                A modern flight search web app built using
                <strong> React</strong> with a clean glassmorphism UI.
              </p>

              <ul className="mb-3">
                <li>Search by flight number or route</li>
                <li>Multiple results with auto-fade transitions</li>
                <li>Pause-on-hover result cards</li>
                <li>Responsive & user-friendly design</li>
              </ul>

              <p className="card-text">
                Deployed as a static site on <strong>Render</strong>.
              </p>

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
                Developed by <strong>Aryan Hiremath</strong><br />
                Ref ID: <strong>FLIGHT-SEARCH-01</strong>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
