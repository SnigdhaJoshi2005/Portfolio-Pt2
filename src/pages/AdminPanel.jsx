import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>

        <nav>
          <a className="active">📊 Dashboard</a>
          <Link to="/admin/hero">🖼 Edit Hero Section</Link>
          <Link to="/admin/aboutme">👤 Edit About Me</Link>
          <Link to="/admin/vision">🌿 Edit Vision</Link>
          <Link to="/admin/practices">🧘 Edit Practices</Link>
          <Link to="/admin/social">🔗 Edit Social Links</Link>
          <Link to="/admin/certificates">📜 Edit Certificates</Link>
          <Link to="/admin/contact">📞 Edit Contact</Link>
          <Link to="/admin/settings">⚙ Site Settings</Link>
        </nav>

        <button className="logout-btn">Logout</button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">
        <h1>Admin Dashboard</h1>
        <p className="admin-subtitle">
          Manage all content of your portfolio website from here.
        </p>

        <div className="admin-cards">
          <AdminCard
            title="Edit Hero Section"
            desc="Update headline text, background images, and call-to-action."
          />
          <AdminCard
            title="Edit About Me"
            desc="Manage biography, profile image, and introduction."
          />
          <AdminCard
            title="Edit Vision Section"
            desc="Update philosophy, guiding principles, and vision text."
          />
          <AdminCard
            title="Edit Practices"
            desc="Add, remove, or update transformational practices."
          />
          <AdminCard
            title="Edit Social Links"
            desc="Manage Instagram, Facebook, LinkedIn, and other platforms."
          />
          <AdminCard
            title="Edit Certificates"
            desc="Upload and manage lineage & certification content."
          />
          <AdminCard
            title="Edit Contact Section"
            desc="Update email, phone, address, and contact form settings."
          />
        </div>
      </main>
    </div>
  );
}

function AdminCard({ title, desc }) {
  return (
    <div className="admin-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
