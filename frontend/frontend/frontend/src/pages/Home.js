export default function Home() {
    return (
        <div className="container text-center mt-5">
            <h1 className="fw-bold">WT Winds</h1>
            <p className="lead">Professional Internship Platform</p>

            <div className="row mt-4 justify-content-center">
                <div className="col-md-4">
                    <i className="bi bi-code-slash fs-1 text-primary"></i>
                    <h5 className="mt-2">Software Developement</h5>
                </div>

                <div className="col-md-4">
                    <i className="bi bi-kanban fs-1 text-success"></i>
                    <h5 className="mt-2">Product Management</h5>
                </div>
            </div>
        </div>
    );
}
