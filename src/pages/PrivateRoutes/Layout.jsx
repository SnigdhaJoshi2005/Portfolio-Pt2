import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Also clear the cookie if possible (via backend call or just redirect)
    fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    }).finally(() => {
      navigate("/login");
    });
  };

  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>

        <nav>
          <NavLink to="/admin" end>
            📊 Dashboard
          </NavLink>
          <NavLink to="/admin/hero">🖼 Edit Hero</NavLink>
          <NavLink to="/admin/aboutme">👤 About Me</NavLink>
          <NavLink to="/admin/vision">🌿 Vision</NavLink>
          <NavLink to="/admin/serve">🤝 Serve</NavLink>
          <NavLink to="/admin/practice">🧘 Practices</NavLink>
          <NavLink to="/admin/social">🔗 Social Links</NavLink>
          <NavLink to="/admin/process">⚙ Process</NavLink>
          <NavLink to="/admin/certificate">📜 Certificates</NavLink>
          <NavLink to="/admin/contact">📞 Contact</NavLink>
          <NavLink to="/admin/setting">⚙ Settings</NavLink>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* PAGE CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
