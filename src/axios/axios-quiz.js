import axios from "axios";

export default axios.create({
    baseURL: 'https://react-app-a20da.firebaseio.com/'
})