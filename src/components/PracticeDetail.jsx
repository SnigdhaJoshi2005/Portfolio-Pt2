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
    <div className="practice-detail">
      <h1 className="practice-title">{practice.title}</h1>
      {practice.image && (
        <img
          src={practice.image.startsWith("http") ? practice.image : `http://localhost:5000/${practice.image}`}
          alt={practice.title}
          className="practice-detail-image"
        />
      )}
      <p className="practice-detail-description">{practice.description}</p>
    </div>
  );
};

export default PracticeDetail;
