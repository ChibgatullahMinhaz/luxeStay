import axios from "axios"

const roomDetails = async (id) => {
    const res = await axios.get(`http://localhost:3000/roomDetails/${id}`)
    return res.data;
}

export default roomDetails;