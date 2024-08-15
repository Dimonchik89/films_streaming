import axios from "axios";

// axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
const options = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

const instance = axios.create(options);

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await instance(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Try letter");
    }
  }
};

const fetchLocalData = async <T>(url: string): Promise<T> => {
  try {
    const response = await instance(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Try letter");
    }
  }
};

export { fetchData, fetchLocalData };
