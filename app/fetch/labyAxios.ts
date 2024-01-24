import axios from "axios";

const laxios = axios.create({
    baseURL : 'http://localhost:8080/api/v1/'
});

export default laxios;