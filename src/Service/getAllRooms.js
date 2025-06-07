import axios from "axios";

const fetchHotels = async () => {
    const response = await axios.get('https://luxestayserver.vercel.app/all/hotels');
    return response.data;
};

export default fetchHotels;