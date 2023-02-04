import axios from 'axios';

const hs="https://encherews-production-f5d6.up.railway.app/historiques"

class Demande {
    dm(idenchere,iduser,prix){
        return axios.post(hs,{"idenchere":idenchere,"iduser":iduser,"prix":prix});
    }
}
export default new Demande()
