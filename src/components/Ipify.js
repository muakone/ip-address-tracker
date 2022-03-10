import axios from "axios";

export default axios.create({
    baseURL: 'https://geo.ipify.org/api/v2/',
});