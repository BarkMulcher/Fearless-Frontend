import React from 'react'
import './App.css';
import Header from './Header'
import Footer from './Footer'
import NewConference from './NewConference';
import NewLocation from './NewLocation'
import NewPresentation from './NewPresentation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(props) {
  if (props.attendees === undefined) {
    return null
  }
  return (
    <React.Fragment>
      <Router>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Header />
          </nav>
        </header>
        <div>
          <Routes>
          <Route
              path="/newpresentation"
              element={<NewPresentation />}
            />
            <Route
              path="/newconference"
              element={<NewConference />}
            />
            <Route
              path="/newlocation"
              element={<NewLocation />}
            />
            <Route
              path="/newpresentation"
              element={<NewPresentation />}
            />
            </Routes>
        </div>
      </Router>



      <div className="container">
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Conference</th>
            </tr>
          </thead>
          <tbody>
            {props.attendees.map(attendee => {
              return (
                <tr key={attendee.href}>
                  <td>{attendee.name}</td>
                  <td>{attendee.conference}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
