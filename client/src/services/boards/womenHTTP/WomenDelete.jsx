import axios from 'axios'
import { urlDB } from '../../UrlDB'

function WomenDelete  ()  {
    const deleteWoman = async (id) => {
        const response = await axios.delete(`${urlDB}/woman/${id}`);
        return response.data;
    }
  return {
   
        deleteWoman,
   
}
  
}
export default WomenDelete
