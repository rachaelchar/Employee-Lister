import axios from "axios";

export default {

  getAllEmployees: function() {
    const url = "https://randomuser.me/api/?results=20&inc=picture,name,phone,email,dob";
    return axios.get(url);
  }
};
  