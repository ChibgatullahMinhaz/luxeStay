import axios from "axios"

const loadReviews = async () => {
    const res = await axios.get('https://luxestayserver.vercel.app/all/reviews')
    return res.data;
}

export default loadReviews;