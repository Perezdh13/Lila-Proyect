import axios from 'axios'
import { urlDB } from '../../UrlDB'
function WomenRead (){
    const getAllData = async () => {
        const response = await axios.get(`${urlDB}/woman`);
        return response.data
      };

      const getWomanById = async (id) => {
        const response = await axios.get(`${urlDB}/woman/${id}`);
        return response.data
      };
      
      return{
        getAllData,
        getWomanById
      }
}
export default WomenRead