import React, { useState, useEffect } from "react";
import { updatePlayer } from "../Services/api";
import Header from "../components/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Homepage() {
  const [editId, setEditId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    previousClub: "",
    photoUrl: "",
    currentClub: "",
  });

  useEffect(() => {
    if (location.state?.player) {
      const player = location.state.player;
      setFormdata({
        name: player.name,
        age: player.age,
        previousClub: player.previousClub || "",
        photoUrl: player.photoUrl || "",
        currentClub: player.currentClub || "",
      });
      setEditId(player.id);
    } else {
      // If no player data, redirect to players table
      navigate('/players');
    }
  }, [location.state, navigate]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormdata({
      ...formdata,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await updatePlayer(editId, formdata);
    if (response) {
      alert("Updated successfully");
      resetForm();
    }
  };

  const resetForm = () => {
    setFormdata({
      name: "",
      age: "",
      previousClub: "",
      photoUrl: "",
      currentClub: "",
    });
    setEditId(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Update Player</h2>
            <Link to="/players" className="btn btn-outline-primary">
              Back to Players
            </Link>
          </div>

          <form
            className="row g-3"
            onSubmit={handleUpdate}
          >
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter player name"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Country</label>
              <input
                type="text"
                name="previousClub"
                value={formdata.previousClub}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter country"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                value={formdata.age}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter age"
                min="1"
                onWheel={(e) => e.target.blur()}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                value={formdata.photoUrl}
                onChange={handleChange}
                className="form-control"
                placeholder="https://example.com/player.jpg"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Current Club</label>
              <input
                type="text"
                name="currentClub"
                value={formdata.currentClub}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter current club name"
              />
            </div>

            <div className="col-12 d-flex gap-2">
              <button type="submit" className="btn btn-warning">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
