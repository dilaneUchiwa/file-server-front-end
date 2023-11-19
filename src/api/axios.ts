import axios from "axios";

const API_URL="http://localhost:5000/";
//const API_URL="http://192.168.1.101:5000/";

export default axios.create({baseURL:API_URL});

// headers : 
// {
//     "content-type" : "application/json"
// }