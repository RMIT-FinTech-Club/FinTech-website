import axios from 'axios'

export async function getProjects() {
    return axios
        .get("/api/projects")
        .then((res) => res.data)
        .catch((err) => {
            return Promise.reject(new Error(err.response.data.message));
        });
}