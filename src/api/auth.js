import axios from "axios";
import {config} from "../config";


export const login = (uuid) => {
    return axios.post(config.LOGIN_HOST, `uuid=${uuid}`,
        {
            headers: {
                Accept: 'application/json',
            }
        })
        .then((res) => {
            localStorage.setItem("logo-bear-token", res.data.response.access_token);
        })
};