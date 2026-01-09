export default function Products() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Our Products</h2>

      <div className="row justify-content-center">
        {/* Product Card */}
        <div className="col-md-8">
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
                  href="https://tambola-isba.onrender.com/"
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
                Reference ID: <strong>@40475838947539</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
