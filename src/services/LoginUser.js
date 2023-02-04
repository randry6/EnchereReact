import axios from 'axios';

const login="https://encherews-production-f5d6.up.railway.app/utilisateurs"

class LoginUser {
    login(mail,mdp){
        return axios.post(login,mail,mdp);
    }
}
export default new LoginUser()
