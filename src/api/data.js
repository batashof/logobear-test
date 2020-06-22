import axios from "axios";
import {config} from "../config";


export const getData = (token) => {
    return axios.get(config.DATA_SYNC,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
};
export const postData = (token, date, time, distance) => {
    return axios.post(config.DATA_JOG,`date=${date}&time=${time}&distance=${distance}`,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

};
export const putData = (token) => {
    return axios.put(config.DATA_JOG,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
};