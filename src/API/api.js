import Axios from "axios";

export default Axios.create({
    baseURL: `https://newsapi.org/v2/top-headlines`,
    headers: {'Authorization' : '470a22b8111a4a2ea6659dbe718900fb'}
});