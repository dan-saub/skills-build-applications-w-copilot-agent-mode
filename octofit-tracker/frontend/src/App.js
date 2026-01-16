import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid px-4">
            <Link className="navbar-brand" to="/">
              <strong>🐙 OctoFit Tracker</strong>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/users">👥 Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">🏆 Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">🏃 Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">🥇 Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">💪 Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-section">
      <h1>🐙 Welcome to OctoFit Tracker</h1>
      <p className="lead">Track your fitness activities, compete with your team, and achieve your goals!</p>
      <div className="row mt-5">
        <div className="col-md-3 mb-4">
          <div className="card component-card text-center">
            <div className="card-body">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👥</div>
              <h5 className="card-title">Users</h5>
              <p className="card-text">Manage and view all users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card component-card text-center">
            <div className="card-body">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <h5 className="card-title">Teams</h5>
              <p className="card-text">Organize users into teams</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card component-card text-center">
            <div className="card-body">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏃</div>
              <h5 className="card-title">Activities</h5>
              <p className="card-text">Log and track activities</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card component-card text-center">
            <div className="card-body">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💪</div>
              <h5 className="card-title">Workouts</h5>
              <p className="card-text">Discover new workouts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
