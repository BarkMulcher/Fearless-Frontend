
export default function NewConference() {
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
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="new-location.html">New location</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="new-conference.html">New conference</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="new-presentation.html">New presentation</a>
                </li>
              </ul> */}
              <form class="d-flex">
                <a class="btn btn-primary me-2" href="attend-conference.html">Attend!</a>
                <input class="form-control me-2" type="search" placeholder="Search conferences" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>

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
                <h1>Create a new conference</h1>
                <form id="create-conference-form">
                  <div class="form-floating mb-3">
                    <input placeholder="Name" required type="text" id="name" name='name' class="form-control"></input>
                    <label for="name">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input placeholder="Start Date" required type="date" name='starts' id="starts" class="form-control"></input>
                    <label for="starts">Start Date</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input placeholder="End Date" required type="date" name='ends' id="ends" class="form-control"></input>
                    <label for="ends">End Date</label>
                  </div>
                  <div class="mb-3">
                    <textarea placeholder='Description'  required id="description" class="form-control" name='description'></textarea>
                  </div>
                  <div class="form-floating mb-3">
                    <input placeholder='Maximum Presentations' required id="max_presentations" class="form-control" name='max_presentations'></input>
                  </div>
                  <div class="form-floating mb-3">
                    <input placeholder='Maximum Attendees' required id="max_attendees" class="form-control" name='max_attendees'></input>
                  </div>
                  <div class="mb-3">
                    <select required id="location" class="form-select" name='location'>
                      <option selected value="">Choose a Location</option>
                    </select>
                  </div>
                  <button class="btn btn-primary">Create</button>
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