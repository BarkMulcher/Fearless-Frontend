import React, { useEffect, useState } from "react"



export default function NewLocation() {

  const [states, setStates] = useState([])

  const [name, setName] = useState('')
  function nameChanged(event) {
    setName(event.target.value)
  }

  const [roomCount, setRoomCount] = useState('')
  function roomCountChange(event) {
    setRoomCount(event.target.value)
  }

  const [city, setCity] = useState('')
  function cityChange(event) {
    setCity(event.target.value)
  }

  const [state, setState] = useState('')
  function stateChange(event) {
    setState(event.target.value)
  }

async function submitBtnHandler(event) {
  event.preventDefault()
  // create empty JSON data
  const data = {}

  data.room_count = roomCount;
  data.name = name;
  data.city = city;
  data.state = state;
  console.log(data);

  const locationUrl = 'http://localhost:8000/api/locations/';
  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(locationUrl, fetchConfig);
  if (response.ok) {
    const newLocation = await response.json();
    console.log(newLocation);
    setName('');
    setRoomCount('');
    setCity('');
    setState('');
  }
}

  const fetchData = async () => {
    const url = 'http://localhost:8000/api/states'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setStates(data.states)

    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
        <>
        <body>
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Conference GO!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <h1>Create a new location</h1>
            <form onSubmit={submitBtnHandler} id="create-location-form">
              <div className="form-floating mb-3">
                <input placeholder="Name" required type="text" id="name" name='name' value={name} onChange={nameChanged} className="form-control"></input>
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Room count" required type="number" name='room_count' value={roomCount} onChange={roomCountChange} id="room_count" className="form-control"></input>
                <label htmlFor="room_count">Room count</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="City" required type="text" name='city' id="city" value={city} onChange={cityChange} className="form-control"></input>
                <label htmlFor="city">City</label>
              </div>
              <div className="mb-3">
                <select required id="state" value={state} onChange={stateChange} className="form-select" name='state'>

                  <option>Choose a state</option>
                  {states.map(state => {
                    return (
                      <option value={state.abbreviation} key={state.abbreviation}>
                        {state.name}
                      </option>
                    )
                  })}
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
