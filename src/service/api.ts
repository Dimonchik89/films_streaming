import axios from "axios";

// axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
};


const fetchData = async <T>(url: string): Promise<T> => {
    try {
        const response = await axios(url, { ...options })
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Try letter")
        }
    }
}

const fetchLocalData = async <T>(url: string): Promise<T> => {
    try {
        const response = await axios(url)
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Try letter")
        }
    }
}

export { fetchData, fetchLocalData };
