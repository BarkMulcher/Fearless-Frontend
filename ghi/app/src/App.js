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
import AttendConferenceForm from './AttendConferenceForm'
import MainPage from './MainPage';

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
        <div className='container'>
          <Routes>
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path="conferences/new"
              element={<NewConference />}
            />
            <Route
              path="attendees/new"
              element={<AttendConferenceForm />}
            />
            <Route
              path="locations/new"
              element={<NewLocation />}
            />
            <Route
              path="attendees"
              element={<AttendeeList attendees={props.attendees} />}
            />
            <Route
              path="/presentations/new"
              element={<NewPresentation />}
            />
            <Route
              path='login'
              element={<Login />}
            />
          </Routes>
        </div>
      </Router>



      <div className="container">
        {/* <NewConference /> */}
        {/* <NewLocation /> */}
        {/* <AttendeeList attendees={props.attendees} /> */}
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
