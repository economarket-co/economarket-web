import axios from 'axios'
import { baseUrl } from '../../enviroment'


export const DataService = (url, method, data) => {

    switch (method){

        case "GET":
            return  axios.get(baseUrl+url)
        
        case "POST":
            return axios.post(baseUrl+url, data)
        
        default: 
            return false
    }
}