import axios from "axios";

export const formHandler = async ({ type, formData }) => {
  console.log("type " + type);
  console.log("formData ", JSON.stringify(formData));
  try {
    const { data } = await axios.post(
      `https://movies-api.routemisr.com/${type}`,
      formData
    );
    console.log(data);
  } catch (error) {
    if (error.response) {
      console.log("err data " + error.response.data);
      console.log("err status " + error.response.status);
      console.log("err headers " + error.response.headers);
    } else if (error.request) {
      console.log("err request " + error.request);
    } else {
      console.log("Error message ", error.message);
    }
    console.log("err config " + error.config);
  }
};
