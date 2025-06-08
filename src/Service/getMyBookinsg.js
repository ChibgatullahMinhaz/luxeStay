import axios from "axios"
import { auth } from "./Firebase.init"

const loadMyBookins = async () => {
    const user = auth.currentUser;
    
    if (!user) {
        throw new Error("User not logged in");
    }
    const token = user?.accessToken
    const email = user?.email


    const res = await axios.get(`http://localhost:3000/rooms/myBookings?email=${email}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res.data;
}

export default loadMyBookins;