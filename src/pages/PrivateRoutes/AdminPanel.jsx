import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="admin-container">
      {/* MAIN CONTENT */}
      <main className="admin-main">
        <h1>Admin Dashboard</h1>
        <p className="admin-subtitle">
          Manage all content of your portfolio website from here.
        </p>

        <div className="admin-cards">
          <Link to="/admin/hero" className="admin-card-link">
            <AdminCard
              title="Edit Hero Section"
              desc="Update headline text, background images, and call-to-action."
            />
          </Link>
          <Link to="/admin/aboutme" className="admin-card-link">
            <AdminCard
              title="Edit About Me"
              desc="Manage biography, profile image, and introduction."
            />
          </Link>
          <Link to="/admin/vision" className="admin-card-link">
            <AdminCard
              title="Edit Vision Section"
              desc="Update philosophy, guiding principles, and vision text."
            />
          </Link>
          <Link to="/admin/Serve" className="admin-card-link">
            <AdminCard
              title="Edit Serve Section"
              desc="Add, remove, or update transformational Serve."
            />
          </Link>
          <Link to="/admin/practice" className="admin-card-link">
            <AdminCard
              title="Edit Practices"
              desc="Add, remove, or update transformational practices."
            />
          </Link>
          <Link to="/admin/social" className="admin-card-link">
            <AdminCard
              title="Edit Social Links"
              desc="Manage Instagram, Facebook, LinkedIn, and other platforms."
            />
          </Link>
          <Link to="/admin/certificate" className="admin-card-link">
            <AdminCard
              title="Edit Certificates"
              desc="Upload and manage lineage & certification content."
            />
          </Link>
          <Link to="/admin/contact" className="admin-card-link">
            <AdminCard
              title="Edit Contact Section"
              desc="Update email, phone, address, and contact form settings."
            />
          </Link>
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
