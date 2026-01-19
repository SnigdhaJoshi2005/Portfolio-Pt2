import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PracticeDetail = () => {
  const { id } = useParams();
  const [practice, setPractice] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/practices`).then((res) => {
      const p = res.data.find((item) => item._id === id);
      setPractice(p);
    });
  }, [id]);

  if (!practice) return <p>Loading...</p>;

  return (
    <div style={{ padding: "60px" }}>
      <h1>{practice.title}</h1>
      {practice.image && (
        <img
          src={practice.image.startsWith("http") ? practice.image : `http://localhost:5000/${practice.image}`}
          alt={practice.title}
          style={{ width: "100%", maxWidth: "600px", borderRadius: "12px", marginBottom: "20px" }}
        />
      )}
      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>{practice.description}</p>
    </div>
  );
};

export default PracticeDetail;
