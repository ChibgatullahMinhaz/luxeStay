import axios from "axios"
import { auth } from "./Firebase.init"

const loadMyBookins = async () => {
    const user = auth.currentUser;
    const token = user?.accessToken
    const email = user?.email

    if (!user) {
        throw new Error("User not logged in");
    }

    const res = await axios.get(`http://localhost:3000/all/myBookings?email=${email}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res.data;
}

export default loadMyBookins;