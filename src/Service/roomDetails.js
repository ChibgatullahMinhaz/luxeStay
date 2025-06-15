import axios from "axios"

const roomDetails = async (id) => {
    const res = await axios.get(`https://luxestayserver.vercel.app/roomDetails/${id}`)
    return res.data;
}

export default roomDetails;