import axios from "axios";

export class APIServices {
  static signup(data) {
    return axios({
      method: "post",
      url: "http://localhost:4000/app/api/signup",
      data
    })
      .then(e => {
        return e.data;
      })
      .catch(e => e);
  }
}
