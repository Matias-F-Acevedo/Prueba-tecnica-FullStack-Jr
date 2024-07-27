import React from "react";
import { useState } from "react";
import "./cardCreate.css";


function CardCreate({onCreate, setShowCreate }) {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nationality, setNationality] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {
                name: name,
                lastName: lastName,
                nationality: nationality,
                bio: bio,
                photo:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3qHxYPNflULIZtzHpxgjb9vVN8dpSdd_gT76pehrS_uKS-zvf"
            }

            onCreate(body);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="card cardUpdate">
            <form onSubmit={handleSubmit}>

                <label htmlFor="Name">Name:</label>
                <input
                    type="text"
                    id="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="lastName">LastName:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />


                <label htmlFor="Nationality">Nationality:</label>
                <input
                    type="text"
                    id="Nationality"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    required
                />

                <label htmlFor="description">Bio:</label>
                <textarea
                    id="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    required
                />
                <div className="container-btn-update">
                    <button type="submit">Create</button>
                    <button onClick={() => setShowCreate(false)}>cancel</button>
                </div>
            </form>
        
        </div>

    );
}

export default CardCreate;