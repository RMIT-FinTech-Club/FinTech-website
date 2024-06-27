import axios from "axios";
const BASE_URL = "0.0.0.0";

export default axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});
