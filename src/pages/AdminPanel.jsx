import "../App.css";

export default function AdminPanel() {
  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>

        <nav>
          <a className="active">📊 Dashboard</a>
          <a>🖼 Edit Hero Section</a>
          <a>👤 Edit About Me</a>
          <a>🌿 Edit Vision</a>
          <a>🧘 Edit Practices</a>
          <a>🔗 Edit Social Links</a>
          <a>📜 Edit Certificates</a>
          <a>📞 Edit Contact</a>
          <a>⚙ Site Settings</a>
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
