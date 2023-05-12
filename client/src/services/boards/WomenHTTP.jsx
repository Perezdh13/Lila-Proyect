import axios from 'axios'
import { urlDB } from '../UrlDB';

export const WomenHTTP = () => {

  const getAllData = async () => {
    const response = await axios.get(`${urlDB}/woman`);
    return response.data
  };
  const createWoman = async (data) => {
    const response = await axios.post(`${urlDB}/woman`, data);
    return response
  }

  const deletewoman = async (id) => {
    const response = await axios.delete(`${urlDB}/woman/${id}`);
    return response
  }

  const getWomanById = async (id) => {
    const response = await axios.get(`${urlDB}/woman/${id}`);
    return response.data
   }

  return {
    getAllData,
    createWoman,
    deletewoman,
    getWomanById,
  };
};


export default WomenHTTP;
