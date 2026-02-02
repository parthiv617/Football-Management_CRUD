import React, { useEffect, useState } from "react";
import { fetchPlayers, createPlayer, deletePlayer } from "../Services/api";
import Header from "../components/Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import backgroundImage from '../assets/wp8255680.webp'; 
function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    previousClub: "",
    photoUrl: "",
    currentClub: "",
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    loadPlayers();
    // Handle view parameter
    const view = searchParams.get('view');
    if (view === 'add') {
      setShowAddForm(true);
    } else {
      setShowAddForm(false);
    }
  }, [searchParams]);

  const loadPlayers = async () => {
    const data = await fetchPlayers();
    setPlayers(data);
  };

  const onEdit = (player) => {
    navigate('/homepage', { state: { player } });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormdata({
      ...formdata,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleAddPlayer = async (e) => {
    e.preventDefault();
    await createPlayer(formdata);
    alert("Player added successfully");
    setFormdata({
      name: "",
      age: "",
      previousClub: "",
      photoUrl: "",
      currentClub: "",
    });
    setShowAddForm(false);
    loadPlayers();
    navigate('/players?view=table');
  };

  const onDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      await deletePlayer(id);
      alert("Player deleted successfully");
      loadPlayers();
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" 
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundAttachment: 'fixed',
           minHeight: '100vh'
         }}>
      <Header />

      <main className="flex-grow-1">
        <div className="container mt-5">
          <h2 className="mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Players List</h2>

          {showAddForm && (
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Add New Player</h5>
                <form
                  className="row g-3"
                  onSubmit={handleAddPlayer}
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

                  <div className="col-12">
                    <button type="submit" className="btn btn-success">
                      Add Player
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          <div className="table-responsive">
            <table className="table text-center align-middle" 
                   style={{
                     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                     borderRadius: "15px",
                     overflow: "hidden",
                     border: "2px solid #000000",
                     boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                   }}>
              <thead>
                <tr style={{ backgroundColor: "#000000" }}>
                  <th style={{ 
                    padding: "12px",
                    color: "#000000ff",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>Player Photo</th>
                  <th style={{ 
                    padding: "12px",
                    color: "#010000ff",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>Name</th>
                  <th style={{ 
                    padding: "12px",
                    color: "#0a0000ff",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>Age</th>
                  <th style={{ 
                    padding: "12px",
                    color: "#030000ff",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>Country</th>
                  <th style={{ 
                    padding: "12px",
                    color: "#020000ff",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>Current Club</th>
                  <th style={{ 
                    padding: "12px",
                    color: "#000000ff",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {players.length > 0 ? (
                  players.map((player, index) => (
                    <tr key={player.id} style={{
                      backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                      borderBottom: "1px solid #ddd",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#e6f7ff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#fff";
                    }}>
                      <td style={{ 
                        padding: "12px",
                        verticalAlign: "middle",
                        width: "120px",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                      }}>
                        {player.photoUrl ? (
                          <img
                            src={player.photoUrl}
                            alt={player.name}
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                              borderRadius: "8px",
                              border: "2px solid #e9ecef",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                              transition: "all 0.3s ease",
                              cursor: "pointer"
                            }}
                            onMouseOver={(e) => {
                              e.target.style.transform = "scale(1.05)";
                              e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.transform = "scale(1)";
                              e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                            }}
                            onClick={() => {
                              window.open(player.photoUrl, '_blank');
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
                              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontSize: "10px",
                              fontWeight: "600",
                              border: "2px solid #e9ecef",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                            }}
                          >
                            No Photo
                          </div>
                        )}
                      </td>
                      <td style={{ 
                        padding: "12px",
                        fontWeight: "bold",
                        textAlign: "left",
                        color: "#2c3e50",
                        fontSize: "15px",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                      }}>{player.name}</td>
                      <td style={{ 
                        padding: "12px",
                        color: "#6c757d",
                        fontSize: "14px",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                      }}>{player.age}</td>
                      <td style={{ 
                        padding: "12px",
                        color: "#6c757d",
                        fontSize: "14px",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                      }}>{player.previousClub || "N/A"}</td>
                      <td style={{ 
                        padding: "12px",
                        color: "#6c757d",
                        fontSize: "14px",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                      }}>{player.currentClub || "N/A"}</td>
                      <td style={{ 
                        padding: "12px",
                        verticalAlign: "middle",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                      }}>
                        <div className="d-flex justify-content-center gap-2 flex-wrap">
                          <button
                            className="btn btn-sm"
                            style={{
                              backgroundColor: "#f39c12",
                              border: "none",
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "4px",
                              fontSize: "12px",
                              fontWeight: "500",
                              transition: "all 0.3s ease",
                              boxShadow: "0 2px 4px rgba(243,156,18,0.3)",
                              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                            }}
                            onMouseOver={(e) => {
                              e.target.style.backgroundColor = "#e67e22";
                              e.target.style.transform = "translateY(-1px)";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.backgroundColor = "#f39c12";
                              e.target.style.transform = "translateY(0)";
                            }}
                            onClick={() => onEdit(player)}
                          >
                            <i className="bi bi-pencil-square me-1"></i>
                            Edit
                          </button>
                          <button
                            className="btn btn-sm"
                            style={{
                              backgroundColor: "#e74c3c",
                              border: "none",
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "4px",
                              fontSize: "12px",
                              fontWeight: "500",
                              transition: "all 0.3s ease",
                              boxShadow: "0 2px 4px rgba(231,76,60,0.3)",
                              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                            }}
                            onMouseOver={(e) => {
                              e.target.style.backgroundColor = "#c0392b";
                              e.target.style.transform = "translateY(-1px)";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.backgroundColor = "#e74c3c";
                              e.target.style.transform = "translateY(0)";
                            }}
                            onClick={() => onDelete(player.id)}
                          >
                            <i className="bi bi-trash me-1"></i>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-muted" style={{ 
                      padding: "40px",
                      fontSize: "16px",
                      fontWeight: "500",
                      backgroundColor: "#f8f9fa",
                      textAlign: "center"
                    }}>
                      <div className="d-flex flex-column align-items-center">
                        <i className="bi bi-inbox" style={{ fontSize: "48px", marginBottom: "10px", color: "#dee2e6" }}></i>
                        No players found
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PlayersTable;
