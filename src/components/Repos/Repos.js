import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleRepos } from "../../actions/repos";
import { useDispatch } from "react-redux";
import "./Repos.css";

function Repos({ inputForm, repos }) {
    const [selectedRepo, setSelectedRepo] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();

    if (!inputForm.apiKey) {
        history.push("/");
    }

    useEffect(() => {
        if (inputForm.apiKey) {
            dispatch(handleRepos(inputForm.apiKey, history));
        }
    }, []);

    useEffect(() => {
        if (selectedRepo.id) {
            console.log(selectedRepo);
        }
    }, [selectedRepo]);

    const handleClick = (repo) => {
        setSelectedRepo(repo);
    };

    return (
        <>
            <h2>Repos</h2>
            <section>
                {repos ? (
                    <ul>
                        {repos.map((repo) => (
                            <li
                                style={{
                                    color:
                                        repo.id === selectedRepo.id && "#000",
                                }}
                                className="repo-name"
                                onClick={() => handleClick(repo)}
                                key={repo.id}
                            >
                                {repo.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>Loading...</h3>
                )}
            </section>
        </>
    );
}

export default connect((state) => ({
    inputForm: state.inputForm,
    repos: state.repos,
}))(Repos);
