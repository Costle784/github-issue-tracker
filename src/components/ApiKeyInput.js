import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateApiKey } from "../actions/apikey";
import "../app.css";

export default function ApiKeyInput() {
    const [key, updateKey] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateApiKey(key));
    };

    return (
        <div className="input-wrapper">
            <div className="input-container">
                <form onSubmit={handleSubmit}>
                    <label>Input API Key: </label>
                    <input
                        value={key}
                        type="text"
                        onChange={(e) => updateKey(e.target.value)}
                    />
                    <div>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
