import axios from 'axios'
const HTTPService = () => {
  const url = 'http://localhost:8080/woman';

  
  const getAllData = async () => {
    const response = await axios.get(`${url}`);
    return response.data
  };

 

  return {
    getAllData,
    url

  };
};

export default HTTPService;