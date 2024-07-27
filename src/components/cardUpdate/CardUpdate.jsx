import React from "react";
import { useState } from "react";
import "./cardUpdate.css";
import {updatePut } from "../../service/functionsHTTP";

function CardUpdate({ setIsEditing, woman,onUpdate }) {

    const [name, setName] = useState(woman.name);
    const [lastName, setLastName] = useState(woman.lastName);
    const [nationality, setNationality] = useState(woman.nationality);
    const [bio, setBio] = useState(woman.bio);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {
                name: name,
                lastName: lastName,
                nationality: nationality,
                bio: bio,
                photo: woman.photo
            }
            setIsEditing(false);
            onUpdate(body);
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
                    <button type="submit">Update</button>
                    <button onClick={() => setIsEditing(false)}>cancel</button>
                </div>

            </form>
           
        </div>

    );
}

export default CardUpdate;