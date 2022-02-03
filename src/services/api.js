//minha chave b24b42751c4b30511a4c908285b9a84cfb5e8e58
//'https://api-ssl.bitly.com/v4/shorten'

import axios from "axios";

export const key = "b24b42751c4b30511a4c908285b9a84cfb5e8e58";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization':  `Bearer ${key}`
    }
})

export default api;