import axios from "axios";

const getFeaturedRooms = async () => {
    const res = await axios.get('https://luxestayserver.vercel.app/all/featured');
    return res.data;
}
export default getFeaturedRooms;