import React from "react";
import { useState } from "react";
import "./card.css";
import CardUpdate from "../cardUpdate/CardUpdate";


function Card({ woman, onDelete,onUpdate}) {

    const [isEditing, setIsEditing] = useState(false);

    function handleDelete() {
        onDelete();
    }

    function handleEdit() {
        setIsEditing(true);
    }

    const handleUpdate = (updatedWoman) => {
        onUpdate(woman.id, updatedWoman);
        setIsEditing(false);
    };


    return (
        <>
        {
          isEditing? 
          <CardUpdate setIsEditing={setIsEditing} woman={woman} onUpdate={handleUpdate}></CardUpdate> :
          <div className="card">
          <div>
              <h2>{woman.name} {woman.lastName}</h2>
          </div>
          <div className="container-img">
              <img src={woman.photo} alt={`woman-photo-${woman.id}`} />
          </div>
          <div>
              <p>{woman.nationality}</p>
              <p>{woman.bio}</p>
          </div>
          <div className="buttons">
              <button className="btn-completed" onClick={() => handleEdit()}>Update</button>
              <button className="btn-delete" onClick={() => handleDelete()}>Delete</button>
          </div>
      </div>
        }
           
        </>
    );
}

export default Card;