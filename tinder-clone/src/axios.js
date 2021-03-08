import axios from "axios";

const instance = axios.create({
    baseURL:'https://ttinder-backend.herokuapp.com'
})

export default instance;