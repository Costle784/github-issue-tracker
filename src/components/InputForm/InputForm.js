import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateApiKey } from "../../actions/inputForm";
import { useHistory } from "react-router-dom";
import "./InputForm.css";

export default function InputForm() {
    const [key, updateKey] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateApiKey(key));
        history.push(`/repos`);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Input API Key: </label>
                <input
                    className="api-key-input"
                    value={key}
                    type="text"
                    onChange={(e) => updateKey(e.target.value)}
                />
                <button
                    type="submit"
                    className="submit-button"
                    disabled={!key || (key && key.trim().length === 0)}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
