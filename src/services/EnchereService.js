import axios from 'axios';


const listeEnchere = "https://encherews-production-f5d6.up.railway.app/encheres";
const encours = "https://encherews-production-f5d6.up.railway.app/encheres/encours";

class EnchereService {

    getEnchere(){
        console.log(axios.get(listeEnchere)) ;
        return axios.get(listeEnchere)
    }

    getEnchereEncours(){
        return axios.get(encours)
    }
    getEnchereById(idenchere){
        return axios.get(listeEnchere + '/' + idenchere)
    }
}
export default  new EnchereService()