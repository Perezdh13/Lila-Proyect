import axios from 'axios'
const HTTPService = () => {
  const url = 'http://localhost:8080';

  
  const getAllData = async () => {
    const response = await axios.get(`${url}/woman`);
    return response.data
  };

  const getQuestions = async () => {
    const response = await axios.get(`${url}/questions`);
    return response.data
  };

 

  return {
    getAllData,
    getQuestions,
    url

  };
};

export default HTTPService;