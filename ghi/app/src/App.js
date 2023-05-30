import React from 'react'
import './App.css';
import Login from './Login'
import Header from './Header'
import Footer from './Footer'
import NewConference from './NewConference';
import NewLocation from './NewLocation'
import NewPresentation from './NewPresentation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AttendeeList from './AttendeeList'

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
              path="/attendeelist"
              element={<AttendeeList />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
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
        <NewLocation />
        {/* <AttendeeList attendees={props.attendees} /> */}
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
