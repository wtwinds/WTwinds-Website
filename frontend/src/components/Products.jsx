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

              <p className="card-text mt-3">
                This is a real-time multiplayer Tambola game built using
                <strong> HTML, CSS, JavaScript</strong> for the frontend and
                <strong> Python with WebSockets</strong> for the backend.
              </p>

              <p className="card-text">
                The game allows multiple players to join a room, receive
                unique Tambola tickets, and play together live with:
              </p>

              <ul>
                <li>Host-controlled number draw</li>
                <li>Auto ticket marking</li>
                <li>Claim validation</li>
                <li>Real-time leaderboard</li>
              </ul>

              <p className="card-text">
                The entire system is deployed on <strong>Render</strong>, with
                frontend and backend running as separate services and
                communicating via secure WebSockets.
              </p>

              <div className="mt-3">
                <a
                  href="https://tambola-wtwinds.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  View Live Product
                </a>
              </div>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Isba Patel and Aryan Hiremath</strong> <br />
                Reference ID: <strong>@40475838947539</strong>
              </p>
            </div>
          </div>

          {/* ===== Tic-Tac-Toe Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Real-Time Multiplayer Tic-Tac-Toe Game
              </h4>

              <p className="card-text mt-3">
                This is a web-based Tic-Tac-Toe game built using
                <strong> HTML, CSS, JavaScript</strong> for the frontend and
                <strong> Python (Flask)</strong> for the backend.
              </p>

              <p className="card-text">
                The platform supports both single-player and multiplayer modes,
                delivering smooth turn-based gameplay with instant updates.
              </p>

              <ul>
                <li>Play vs Computer mode</li>
                <li>Host & Join multiplayer rooms</li>
                <li>Turn-based real-time gameplay</li>
                <li>Win, draw & move validation</li>
              </ul>

              <p className="card-text">
                The application is deployed on <strong>Render</strong> as a
                cloud-hosted web service, making it easily accessible for
                online play and demos.
              </p>

              <div className="mt-3">
                <a
                  href="https://tictactoe-bw7q.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  View Live Product
                </a>
              </div>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Isba Patel</strong> <br />
                Reference ID: <strong>39486734678934</strong>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
