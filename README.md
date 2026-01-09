# 🛒 MERN E-Commerce Platform

A full-stack E-Commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js).  
This project demonstrates real-world concepts like authentication, product management, cart flow, orders, and admin control.

---

## 🧠 Project Objective

This project is built to implement a complete e-commerce system using modern web technologies.  
It follows real-world architecture and backend API design patterns.

---

## 🧰 Tech Stack

### Frontend
- React
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 📁 Folder Structure
```bash
ecommerce-platform-MERN/
│
├── admin/ # Admin dashboard
│
├── backend/
│ ├── controllers/ # Business logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── middleware/ # Auth & error handling
│ ├── config/ # DB config
│ └── server.js # Entry point
│
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.js
│
└── README.md
```


---

## ✨ Features

### User Features
- User registration and login
- JWT authentication
- View products
- Product search
- Add to cart
- Checkout
- Place orders
- View order history
- User profile

### Admin Features
- Admin authentication
- Add products
- Update products
- Delete products
- View all users
- View all orders
- Update order status

---

## 🔌 Installation & Setup

### Step 1: Clone Repository
```bash
git clone https://github.com/aman-singh009/ecommerce-platform-MERN.git
cd ecommerce-platform-MERN
```

### Step 2: Backend Setup
```bash
cd backend
npm install
```
Create a .env file inside backend/ directory:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Start backend server:
```bash
npm run dev
```

### Step 3: Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on:
```bash
http://localhost:3000
```
Backend runs on:
```bash
http://localhost:5000
```

---

## 🔗 API Endpoints

### Authentication
```bash
POST /api/users/register
POST /api/users/login
```

### Products
```bash
GET /api/products
GET /api/products/:id
POST /api/products (Admin)
PUT /api/products/:id (Admin)
DELETE /api/products/:id (Admin)
```

### Orders
```bash
POST /api/orders
GET /api/orders/myorders
GET /api/orders/:id
```

---

## 🔐 Authentication & Authorization

- JWT based authentication  
- Protected routes using middleware  
- Role-based access (User / Admin)

---

## 🧪 Environment Variables

| Variable | Description |
|---------|-------------|
| PORT | Backend server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | JWT token secret |

---

## 🚀 Future Enhancements

- Payment gateway integration  
- Product reviews and ratings  
- Pagination and filtering  
- Email notifications  
- Admin analytics dashboard  

---

## ⚠️ Disclaimer

This project is for learning purposes.  
Not production-ready without proper security, validation, and optimization.

---

## 📜 License

This project is open-source and free to use for educational purposes.

---

## 👤 Author

Aman Singh  

GitHub: https://github.com/aman-singh009

LinkedIn: https://www.linkedin.com/in/javawithaman/

Portfolio: https://aman-webdev.netlify.app/









