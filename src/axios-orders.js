import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-my-burger-fbb71-default-rtdb.firebaseio.com/'
});

export default instance;