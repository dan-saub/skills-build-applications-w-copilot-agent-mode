import React, { useState, useEffect } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const baseUrl = process.env.REACT_APP_CODESPACE_NAME 
          ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
          : 'http://localhost:8000';
        const apiUrl = `${baseUrl}/api/workouts/`;
        
        console.log('Fetching workouts from:', apiUrl);
        console.log('REACT_APP_CODESPACE_NAME:', process.env.REACT_APP_CODESPACE_NAME);

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Workouts data received:', data);

        // Handle both paginated and plain array responses
        const workoutsList = Array.isArray(data) ? data : (data.results || []);
        setWorkouts(workoutsList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching workouts:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) return (
    <div className="alert alert-info" role="alert">
      <div className="spinner-border spinner-border-sm me-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      Loading workouts...
    </div>
  );
  
  if (error) return (
    <div className="alert alert-danger" role="alert">
      <strong>Error:</strong> {error}
    </div>
  );

  return (
    <div className="card component-card">
      <div className="card-header">
        <h2 className="card-title">Workouts</h2>
      </div>
      <div className="card-body p-0">
        {workouts.length === 0 ? (
          <div className="empty-state p-5">
            <div className="empty-state-icon">💪</div>
            <p className="text-muted">No workouts found.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover table-sm">
              <thead>
                <tr>
                  <th>Workout Name</th>
                  <th>Difficulty</th>
                  <th>Suggested For</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout) => (
                  <tr key={workout._id || workout.id}>
                    <td>
                      <strong>{workout.name}</strong>
                    </td>
                    <td>
                      <span className={`badge ${
                        workout.difficulty === 'Easy' ? 'bg-success' :
                        workout.difficulty === 'Medium' ? 'bg-warning text-dark' :
                        'bg-danger'
                      }`}>
                        {workout.difficulty}
                      </span>
                    </td>
                    <td>{workout.suggested_for}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Start Workout</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Workouts;
