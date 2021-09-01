import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { handleRepos } from "../../actions/repos";
import { handleIssues } from "../../actions/issues";
import { useDispatch, useSelector } from "react-redux";
import { sessionAPI, formatDate } from "../../utils";
import "./Repos.css";

export default function Repos() {
    const [selectedRepo, setSelectedRepo] = useState(null);
    const [sortPreference, setSortPreference] = useState({});
    const inputForm = useSelector((state) => state.inputForm);
    const { githubRepos, loadingRepos } = useSelector((state) => state.repos);
    const issues = useSelector((state) => state.issues);
    const history = useHistory();
    const dispatch = useDispatch();
    const redirect = () => history.push("/");

    const userSortPreference = sessionAPI.getSessionItem("sortPreference");

    if (
        userSortPreference &&
        userSortPreference !== JSON.stringify(sortPreference)
    ) {
        setSortPreference(JSON.parse(userSortPreference));
    }

    if (!inputForm.apiKey) {
        redirect();
    }

    useEffect(() => {
        if (inputForm.apiKey) {
            dispatch(handleRepos(inputForm.apiKey, redirect));
        }
    }, []);

    useEffect(() => {
        if (selectedRepo && selectedRepo.issues_url) {
            const url = selectedRepo.issues_url.split("{")[0];
            dispatch(handleIssues(inputForm.apiKey, url, sortPreference));
        }
    }, [selectedRepo, sortPreference]);

    const updateSort = (sort, direction) => {
        const preference = {
            sort,
            direction,
        };
        sessionAPI.setSessionItem("sortPreference", JSON.stringify(preference));
        setSortPreference(preference);
    };

    return (
        <main className="main-wrapper">
            <section>
                <h2>Repos</h2>
                {!loadingRepos ? (
                    <ul>
                        {githubRepos.map((repo) => (
                            <li
                                style={{
                                    color:
                                        selectedRepo &&
                                        repo.id === selectedRepo.id &&
                                        "#000",
                                }}
                                className="repo-name"
                                onClick={() => setSelectedRepo(repo)}
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
            <section>
                <h2>Issues</h2>
                {issues.length > 0 ? (
                    <table className="issues-table">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Title</th>
                                <th className="sortable-column">
                                    <span>Created</span>
                                    {sortPreference.sort === "created" &&
                                    sortPreference.direction === "asc" ? (
                                        <i
                                            className="fas fa-arrow-up"
                                            onClick={() =>
                                                updateSort("created", "desc")
                                            }
                                        ></i>
                                    ) : (
                                        <i
                                            className="fas fa-arrow-down"
                                            onClick={() =>
                                                updateSort("created", "asc")
                                            }
                                        ></i>
                                    )}
                                </th>
                                <th className="sortable-column">
                                    <span>Last Updated</span>
                                    {sortPreference.sort === "updated" &&
                                    sortPreference.direction === "asc" ? (
                                        <i
                                            className="fas fa-arrow-up"
                                            onClick={() =>
                                                updateSort("updated", "desc")
                                            }
                                        ></i>
                                    ) : (
                                        <i
                                            className="fas fa-arrow-down"
                                            onClick={() =>
                                                updateSort("updated", "asc")
                                            }
                                        ></i>
                                    )}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {issues.map((issue) => (
                                <tr key={issue.id}>
                                    <td>
                                        <img
                                            src={issue.user.avatar_url}
                                            alt={"Issue creator Github avatar"}
                                            className="avatar"
                                        />
                                    </td>
                                    <td>{issue.title}</td>
                                    <td>{formatDate(issue.created_at)}</td>
                                    <td>{formatDate(issue.updated_at)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : issues.length === 0 && !selectedRepo ? (
                    <h3>Please Select a Repo to view issues.</h3>
                ) : selectedRepo && issues.length === 0 ? (
                    <h3>No issues created in Repo.</h3>
                ) : null}
            </section>
        </main>
    );
}
