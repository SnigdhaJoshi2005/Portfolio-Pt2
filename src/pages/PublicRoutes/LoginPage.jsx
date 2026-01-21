import { useState, useEffect } from "react";
import "./../../App.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/admin");
        }
    }, [navigate]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok) {
                navigate("/admin"); // redirect to admin dashboard
            } else {
                alert(data.error || "Login failed");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Try again later.");
        }
    };


    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Admin Login</h2>
                <p>Access the content management panel</p>

                <form onSubmit={handleSubmit}>
                    <div className="login-field">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
