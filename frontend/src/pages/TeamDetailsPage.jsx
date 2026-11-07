
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getTeam } from "../api.js";

export default function TeamDetailsPage() {
  const { id } = useParams();

  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadTeam() {
      try {
        setLoading(true);
        setError("");

        const data = await getTeam(id);

        if (active) {
          setTeam(data);
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadTeam();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="page">
        <p className="status">Loading team information...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page">
        <div className="error-message" role="alert">
          {error}
        </div>

        <Link className="button" to="/teams">
          Return to teams
        </Link>
      </main>
    );
  }

  if (!team) {
    return null;
  }

  return (
    <main className="page">
      <Link className="back-link" to="/teams">
        ← Back to all teams
      </Link>

      <section className="details-card">
        <p className="eyebrow">TEAM PROFILE</p>

        <h1>{team.name}</h1>

        <p className="team-number-large">
          Team {team.number}
        </p>

        <div className="details-grid">
          <div>
            <h2>Rookie Year</h2>
            <p>{team.rookieYear}</p>
          </div>

          <div>
            <h2>Description</h2>
            <p>{team.description || "No description available."}</p>
          </div>
        </div>

        <section className="history-section">
          <h2>Team History</h2>
          <p>{team.history || "No historical information has been added."}</p>
        </section>

        {team.images?.length > 0 && (
          <section className="image-section">
            <h2>Team Images</h2>

            <div className="image-grid">
              {team.images.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`${team.name} archive image ${index + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        <Link
          className="button"
          to={`/teams/${team.id}/edit`}
        >
          Edit team
        </Link>
      </section>
    </main>
  );
}
