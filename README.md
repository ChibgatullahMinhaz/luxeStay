# 🏨 LuxeStay - A Modern Hotel Booking Platform

Welcome to **LuxeStay**, a sleek and modern hotel booking platform where users can effortlessly discover, explore, and book rooms. Designed with user experience and responsiveness in mind, Hotel Haven ensures trust, security, and ease throughout the booking journey.

## 🌐 Live Website

## 🔗 [Visit LuxeStay](https://luxe-stay-hotel.web.app/)

## 🎯 Project Purpose

To build a full-stack hotel booking system with secure authentication, real-time room availability, user reviews, date-based booking, and dynamic room filtering — all with a polished UI to attract recruiters and real users alike.

---

## 🔑 Key Features

### ✅ General

- Fully responsive on **mobile**, **tablet**, and **desktop**
- Clean, recruiter-friendly design with excellent spacing and visual contrast
- Error handling with meaningful toasts and fallbacks
- Protected routes using Firebase Access Token or JWT
- 404 page with gif and back-to-home button

### 🏠 Homepage

- Animated banner with CTA to Rooms page
- Interactive map using **React Leaflet**
- Featured top-rated rooms from real-time database
- Customer testimonials (sorted by latest reviews)
- Special Offer modal on landing
- Extra Sections:
  - Amenities Showcase
  - Newsletter Signup Section
  - Review Stats & Recommendation
  - Promotional Offers

### 🧭 Navigation

- Links to **Rooms**, **My Bookings**, and **Login/Register**
- Protected routes: "My Bookings" requires authentication

### 🔐 Authentication

- Firebase Email/Password login & registration
- Google login integration
- Strong password validation & sweetalert on success
- Firebase token stored and used for route protection

### 🛏️ Rooms Page

- Fetches rooms from MongoDB
- Server-side price range filtering
- View total & average reviews per room
- Click on card redirects to room details page

### 📄 Room Details Page

- Complete room info
- All user reviews listed
- Review modal for booked users
- Book Now → shows modal with booking summary & date picker
- Room becomes unavailable after booking

### 📆 My Bookings

- Only shows bookings of logged-in user
- Allows canceling bookings (before 1 day of date)
- Cancelled rooms become available again
- Update Booking Date feature
- Post-review modal

### 📝 Reviews

- Only users who booked can post reviews
- Rating: 1-5 stars
- Displays reviewer name, date, rating, and comment
- Reviews sorted descending by date

---

## 🧩 Packages Used

- `react-router-dom`
- `firebase`
- `axios`
- `react-hook-form`
- `sweetalert2`
- `framer-motion`
- `react-leaflet`
- `moment`
- `react-icons`
- `react-toastify`
- `axios`
- `date-fns`
- `lottie-react`
- `react-countup`
- `lucide-react`
- `lucide-react`
- `react-date-range`
- `react-helmet`
- `slick-carouse`
- `react-slick`


---

## 🛠️ Technologies

- **React.js** (Client)
- **Node.js** + **Express.js** (Server)
- **MongoDB** (Database)
- **Firebase Authentication**
- **Tailwind CSS** (Styling)

---



---

## 📌 Developer Notes

- Booking cancellation is allowed until 1 day before booking date.
- Server-side filter ensures performance and consistency.
- Newsletter section and special offers build user trust.
- All forms and modals have proper validation and UX.

---

## ❤️ Credits

Built with ❤️ by [chibgatullah Minhaz]

---