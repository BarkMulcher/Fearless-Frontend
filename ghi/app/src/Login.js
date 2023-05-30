export default function Login() {
    return (
        <>
            <body>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">Conference GO!</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-none" aria-current="page" href="new-location.html">New location</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-none" aria-current="page" href="new-conference.html">New conference</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="new-presentation.html">New presentation</a>
                                    </li>
                                </ul> */}
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search conferences" aria-label="Search"></input>
                                    <button class="btn btn-outline-success me-2" type="submit">Search</button>
                                    <a class="btn btn-primary" href="attend-conference.html">Attend!</a>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div class="container">
                        <div class="row">
                            <div class="offset-3 col-6">
                                <div class="shadow p-4 mt-4">
                                    <h1>Login</h1>
                                    <form id="login-form">
                                        <div class="form-floating mb-3">
                                            <input placeholder="Username" required type="text" name="username" id="username" class="form-control"></input>
                                            <label for="username">Username</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input placeholder="Password" required type="password" name="password" id="password" class="form-control"></input>
                                            <label for="password">Password</label>
                                        </div>
                                        <button class="btn btn-primary">Login</button>
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
            </body>
        </>
    )
}