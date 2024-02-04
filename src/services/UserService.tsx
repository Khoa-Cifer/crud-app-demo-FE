import axios from "./CustomizeAxios";

const fetchAllUser = (page: unknown) => {
    return axios.get(`/api/users?page=${page}`);
}

const postCreateUser = (name: string, job: string) => {
    return axios.post("/api/users", { name, job });
}
const putEditUser = (name: string, job: string) => {
    return axios.put("/api/users/2", { name, job })
}

export { fetchAllUser, postCreateUser, putEditUser }