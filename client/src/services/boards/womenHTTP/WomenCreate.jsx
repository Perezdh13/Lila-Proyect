import axios from 'axios'
import { urlDB } from '../../UrlDB';

export const WomenCreate = () => {
    const createWoman = async (data) => {
        const response = await axios.post(`${urlDB}/woman`, data);
        return response
      };

      return{
        createWoman
      }

}