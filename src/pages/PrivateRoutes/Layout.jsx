import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });

        console.log(res);

        if (!res.ok) {
          // Not authenticated
          navigate("/login");
        }
      } catch (err) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      navigate("/login");
    }
  };

  if (loading) return null; // or spinner

  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>

        <nav>
          <NavLink to="/admin" end>📊 Dashboard</NavLink>
          <NavLink to="/admin/hero">🖼 Edit Hero</NavLink>
          <NavLink to="/admin/aboutme">👤 About Me</NavLink>
          <NavLink to="/admin/vision">🌿 Vision</NavLink>
          <NavLink to="/admin/serve">🤝 Serve</NavLink>
          <NavLink to="/admin/practice">🧘 Practices</NavLink>
          <NavLink to="/admin/social">🔗 Social Links</NavLink>
          <NavLink to="/admin/process">⚙ Process</NavLink>
          <NavLink to="/admin/certificate">📜 Certificates</NavLink>
          <NavLink to="/admin/contact">📞 Contact</NavLink>
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