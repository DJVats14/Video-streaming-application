import axios from "axios";

//base url to make/append requests further
const instance = axios.create ({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//default can be only one
//but also you can rename it and destructure the component acordingly in another component