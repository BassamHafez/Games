import axios from "axios";

export const formHandler = async ({ type, formData }) => {
  try {
    const { data } = await axios.post(
      `https://movies-api.routemisr.com/${type}`,
      formData
    );
    if(data.message!=='success'){
      return data.message;
    }
  } catch (error) {
    if (error.response) {
      const error = new Error('An error occured while signing please try again later!')
      throw error
    } else if (error.request) {
        throw error.request
    } 
      throw error.message;
  }
};
