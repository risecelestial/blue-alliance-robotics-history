
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteTeam, getTeams } from "../api.js";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadTeams() {
    try {
      setLoading(true);
      setError("");

      const data = await getTeams();
      setTeams(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTeams();
  }, []);

  async function handleDelete(id, name) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${name}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteTeam(id);
      await loadTeams();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">COMMUNITY ARCHIVES</p>
          <h1>Explore Robotics Teams</h1>
          <p>
            Discover team information and preserve the history
            of FIRST Robotics Competition.
          </p>
        </div>

        <Link className="button" to="/teams/new">
          + Add a Team
        </Link>
      </section>

      {loading && <p className="status">Loading teams...</p>}

      {error && (
        <div className="error-message" role="alert">
          {error}
          <button className="text-button" onClick={loadTeams}>
            Try again
          </button>
        </div>
      )}

      {!loading && !error && teams.length === 0 && (
        <p className="status">
          No teams have been added yet.
        </p>
      )}

      {!loading && !error && teams.length > 0 && (
        <>
          <p className="result-count">
            {teams.length} team{teams.length === 1 ? "" : "s"} in the archive
          </p>

          <section className="team-grid">
            {teams.map((team) => (
              <article className="team-card" key={team.id}>
                <div className="team-number">
                  Team {team.number}
                </div>

                <h2>{team.name}</h2>

                <p>
                  Rookie year: {team.rookieYear}
                </p>

                <p className="team-description">
                  {team.description || "No description has been added."}
                </p>

                <div className="card-actions">
                  <Link
                    className="button button-small"
                    to={`/teams/${team.id}`}
                  >
                    View details
                  </Link>

                  <Link
                    className="button button-secondary button-small"
                    to={`/teams/${team.id}/edit`}
                  >
                    Edit
                  </Link>

                  <button
                    className="button button-danger button-small"
                    onClick={() => handleDelete(team.id, team.name)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </section>
        </>
      )}
    </main>
  );
}
