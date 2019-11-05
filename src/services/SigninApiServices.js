import axios from 'axios';

export class SigninApiServices {
    static signin(data) {
        return axios({
            method: "post",
            url: "",
            data
        }).then( e => {
            return e.data;
        }).catch( e => e );
    }
}