// src/components/AdmissionHandlers.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdmissionHandlers() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/admission-handlers');
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Admission Handlers</h1>
            <ul>
                {data.map(handler => (
                    <li key={handler.id}>
                        <p>Name: {handler.name}</p>
                        <p>Email: {handler.email}</p>
                        <p>Password: {handler.password}</p>
                        <p>Created At: {handler.created_at}</p>
                        <p>Updated At: {handler.updated_at}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdmissionHandlers;
