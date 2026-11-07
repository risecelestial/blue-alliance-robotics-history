
import { Link, NavLink, Route, Routes } from "react-router-dom";

import TeamsPage from "./pages/TeamsPage.jsx";
import TeamDetailsPage from "./pages/TeamDetailsPage.jsx";
import TeamFormPage from "./pages/TeamFormPage.jsx";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/teams" className="brand">
          <span className="brand-mark">BA</span>
          <span>
            <strong>Blue Alliance</strong>
            <small>Robotics History</small>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/teams/new">Add a Team</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NotFoundPage() {
  return (
    <main className="page">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="button" to="/teams">
        Return to teams
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<TeamsPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/teams/new" element={<TeamFormPage />} />
        <Route path="/teams/:id" element={<TeamDetailsPage />} />
        <Route path="/teams/:id/edit" element={<TeamFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <footer className="site-footer">
        <p>Blue Alliance Robotics History</p>
        <p>Exploring the history of FIRST Robotics Competition.</p>
      </footer>
    </>
  );
}
