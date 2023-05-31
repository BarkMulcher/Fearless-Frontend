export default function NewPresentation() {
    return (
        <>
            <body>
<header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">

        <span className="navbar-toggler-icon"></span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link d-none" aria-current="page" href="new-location.html">New location</a>
            </li>
            <li className="nav-item">
                <a className="nav-link d-none" aria-current="page" href="new-conference.html">New conference</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="new-presentation.html">New presentation</a>
            </li>
        </ul> */}
        <form className="d-flex">
            <a className="btn btn-primary me-2" href="attend-conference.html">Attend!</a>
            <input className="form-control me-2" type="search" placeholder="Search conferences" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
</header>
<main>
    <div className="container">
    <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a New Presentation</h1>
            <form id="create-presentation-form">
            <div className="form-floating mb-3">
                <input placeholder="Presenter name" required type="text" name="presenter_name" id="presenter_name" className="form-control"></input>
                <label for="presenter_name">Presenter name</label>
            </div>
            <div className="form-floating mb-3">
                <input name="presenter_email" type="email" className="form-control" id="presenter_email" placeholder="Presenter email"></input>
                <label for="presenter_email">Presenter email</label>
            </div>
            <div className="form-floating mb-3">
                <input placeholder="Company name" type="text" name="company_name" id="company_name" className="form-control"></input>
                <label for="company_name">Company name</label>
            </div>
            <div className="form-floating mb-3">
                <input placeholder="Title" required type="text" name="title" id="title" className="form-control"></input>
                <label for="title">Title</label>
            </div>
            <div className="mb-3">
                <textarea placeholder="Synopsis" required type="text" name="synopsis" id="synopsis" className="form-control" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <select required name="conference" id="conference" className="form-select">
                <option selected value="">Select conference</option>
                </select>
            </div>
            <button className="btn btn-primary">Create</button>
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
