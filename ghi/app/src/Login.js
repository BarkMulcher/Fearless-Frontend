export default function Login() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Conference GO!</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="offset-3 col-6">
                            <div className="shadow p-4 mt-4">
                                <h1>Login</h1>
                                <form id="login-form">
                                    <div className="form-floating mb-3">
                                        <input placeholder="Username" required type="text" name="username" id="username" className="form-control"></input>
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input placeholder="Password" required type="password" name="password" id="password" className="form-control"></input>
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <button className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous">
            </script>
        </>
    )
}