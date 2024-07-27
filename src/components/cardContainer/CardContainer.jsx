import "./cardContainer.css";
import React from "react";
import { useState, useEffect} from "react";
import { getAll, remove, updatePatch, post, updatePut } from "../../service/functionsHTTP";
import Card from "../card/Card";
import CardCreate from "../cardCreate/CardCreate";
// import { UserContext } from "../../context/UserContext";



function CardContainer() {


    const [women, setWomen] = useState([]);
    const [search, setSearch] = useState("");
    const [showCreate, setShowCreate] = useState(false);
    // const { user } = useContext(UserContext);

    async function getWomen() {
        try {
            const url = `https://66a4272444aa6370458372b2.mockapi.io/women`;
            const res = await getAll(url);

            if (!res.ok) {
                throw new Error("Failed to fetch orders");
            }
            const parsed = await res.json();
            setWomen(parsed);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getWomen();
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredWomen = women.filter((woman) =>
        woman.name.toLowerCase().includes(search.toLowerCase())
    );



    const handleDelete = async (id) => {
        try {
            const url = `https://66a4272444aa6370458372b2.mockapi.io/women/${id}`;
            const res = await remove(url);

            if (!res.ok) {
                throw new Error("Failed to delete woman");
            }
            setWomen((prev) => prev.filter(woman => woman.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = async (id, updatedFields) => {
        try {
            const url = `https://66a4272444aa6370458372b2.mockapi.io/women/${id}`;
            const res = await updatePut(url, updatedFields);

            if (!res.ok) {
                throw new Error("Failed to update woman");
            }

            setWomen((prev) =>
                prev.map(woman =>
                    woman.id === id
                        ? { ...woman, ...updatedFields }
                        : woman
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddWoman = async (woman) => {
        try {
            const url = `https://66a4272444aa6370458372b2.mockapi.io/women`;
            const res = await post(url, woman);

            if (!res.ok) {
                throw new Error("Failed to add woman");
            }
            const newWoman = await res.json();
            setWomen((prev) => [newWoman, ...prev]);
            setShowCreate(false);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <div className="container-search">
                <div>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <div>
                    <button onClick={() => setShowCreate(!showCreate)}>
                        Add Woman
                    </button>
                </div>




            </div>
            <div className="card-container">
                {showCreate && <CardCreate onCreate={handleAddWoman} setShowCreate={setShowCreate} />}
                {filteredWomen.map((woman, index) => (
                    <Card key={index} woman={woman} onDelete={() => handleDelete(woman.id)} onUpdate={handleUpdate} />

                ))}
            </div>
        </>
    );
}

export default CardContainer;