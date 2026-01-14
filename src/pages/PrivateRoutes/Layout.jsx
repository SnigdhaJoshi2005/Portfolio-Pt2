import { Outlet, Link, NavLink } from "react-router-dom";

const AdminLayout = () => {
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
          <NavLink to="/admin/practice">🧘 Practices</NavLink>
          <NavLink to="/admin/social">🔗 Social Links</NavLink>
          <NavLink to="/admin/certificate">📜 Certificates</NavLink>
          <NavLink to="/admin/contact">📞 Contact</NavLink>
          <NavLink to="/admin/setting">⚙ Settings</NavLink>
        </nav>

        <button className="logout-btn">Logout</button>
      </aside>

      {/* PAGE CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
