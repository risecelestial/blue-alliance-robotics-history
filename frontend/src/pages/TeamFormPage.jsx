
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import {
  createTeam,
  getTeam,
  updateTeam
} from "../api.js";

const emptyForm = {
  name: "",
  number: "",
  rookieYear: "",
  description: "",
  history: "",
  images: ""
};

export default function TeamFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditing = Boolean(id);

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEditing) {
      return;
    }

    let active = true;

    async function loadTeam() {
      try {
        const team = await getTeam(id);

        if (active) {
          setForm({
            name: team.name ?? "",
            number: String(team.number ?? ""),
            rookieYear: String(team.rookieYear ?? ""),
            description: team.description ?? "",
            history: team.history ?? "",
            images: (team.images ?? []).join("\n")
          });
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
  }, [id, isEditing]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSaving(true);

    const teamData = {
      name: form.name.trim(),
      number: Number(form.number),
      rookieYear: Number(form.rookieYear),
      description: form.description.trim(),
      history: form.history.trim(),
      images: form.images
        .split("\n")
        .map((image) => image.trim())
        .filter(Boolean)
    };

    try {
      if (isEditing) {
        await updateTeam(id, teamData);
      } else {
        await createTeam(teamData);
      }

      navigate("/teams");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="page">
        <p className="status">Loading team information...</p>
      </main>
    );
  }

  return (
    <main className="page">
      <Link className="back-link" to="/teams">
        ← Back to teams
      </Link>

      <section className="form-card">
        <p className="eyebrow">COMMUNITY ARCHIVES</p>

        <h1>{isEditing ? "Edit Team" : "Add a Team"}</h1>

        <p>
          Enter the team's information below. Use verified
          information when adding historical records.
        </p>

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Team Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="number">Team Number</label>
          <input
            id="number"
            name="number"
            type="number"
            min="1"
            value={form.number}
            onChange={handleChange}
            required
          />

          <label htmlFor="rookieYear">Rookie Year</label>
          <input
            id="rookieYear"
            name="rookieYear"
            type="number"
            min="1900"
            value={form.rookieYear}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
          />

          <label htmlFor="history">Team History</label>
          <textarea
            id="history"
            name="history"
            rows="6"
            value={form.history}
            onChange={handleChange}
          />

          <label htmlFor="images">
            Image URLs (one URL per line)
          </label>
          <textarea
            id="images"
            name="images"
            rows="4"
            value={form.images}
            onChange={handleChange}
            placeholder="https://example.com/team-photo.jpg"
          />

          <div className="form-actions">
            <button
              className="button"
              type="submit"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : isEditing
                  ? "Save Changes"
                  : "Create Team"}
            </button>

            <Link
              className="button button-secondary"
              to="/teams"
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
