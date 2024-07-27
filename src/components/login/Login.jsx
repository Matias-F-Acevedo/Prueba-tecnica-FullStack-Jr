import React from "react";
import "./login.css";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";



function Login() {
    const { handleLogin } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [user, setUser] = useState({
        email: "admin123",
        password: "admin123"
    });



    async function handleSubmit(event) {
        event.preventDefault();

        if (email === "" || password === "") {
            setError("Enter all fields.");
            return;
        } else if (email !== user.email || password !== user.password) {
            setError("La Contraseña o Email/Usuario son incorrectos.");
            return;
        }
        else {
            handleLogin({ user });
            setError("Inicio de sesión exitoso.");
            setPassword("");
            setEmail("");
        }
    }

    return (
        <div className="container-login">
            <div className="login-box">
                <div className="login-header">
                    <header>Login</header>
                    <p className="p-error">{error}</p>
                </div>

                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Email/Usuario"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Contraseña"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <div className="input-submit">
                        <button className="submit-btn" id="submit"></button>
                        <label htmlFor="submit">Login</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;