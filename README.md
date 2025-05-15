# MediServe - A Digital Healthcare Marketplace

## 📌 Project Overview
MediServe is a digital healthcare platform that connects users with healthcare products and services. It provides functionality for product browsing, user authentication, order placement, and newsletter subscriptions.

---

## 📘 Technologies Used
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React.js, HTML5, CSS3, JavaScript
- **Auth & Media:** JWT, Multer
- **Middleware:** Role-based access (Admin/User)

---

## 🔧 Core Functionalities
- Secure User Registration & Login (JWT-based)
- Healthcare Product Management (Admins)
- Cart & Order Management
- Newsletter Email Subscriptions
- Image Uploads for Product Listings

---

## 🔄 Project Flow
1. User Registration/Login
2. Product Browsing
3. Add to Cart
4. Order Checkout & Placement
5. Admin manages inventory/orders

---

## 🧩 ERD 
![image](https://github.com/user-attachments/assets/59be5c1c-90a8-4e37-ba3b-5667856cade2)

## 🚀 How to Clone and Run the Project

Follow the steps below to clone and run the complete MediServe project, including the backend, frontend (user panel), and admin panel.

---

### 🔹 Step 1: Clone the Repository


- Run the following command to clone the repository:

  `git clone https://github.com/ameemakhtr/DBMS-Project.git`

- Navigate into the project folder:

  `cd DBMS-Project`

---

### 🔹 Step 2: Install Dependencies

- To avoid issues with peer dependencies, use this command:

  `npm install --legacy-peer-deps`

---

### 🔹 Step 3: Run the Backend

- Navigate to the backend folder:

  `cd backend`



- Start the backend server:

  `npm run dev`

---

### 🔹 Step 4: Run the Frontend (User Panel)

- Open a new terminal tab or window.
- Navigate to the frontend folder:

  `cd frontend`


- Start the frontend server:

  `npm run dev`

---

### 🔹 Step 5: Run the Admin Panel

- Open another terminal tab or window.
- Navigate to the admin folder:

  `cd admin`


- Start the admin panel server:

  `npm run dev`

---

### 📌 Notes

- Ensure **MongoDB** is running locally on your system.
- If using a remote MongoDB instance, update the `.env` file in the backend directory with your connection string.
- Run **backend, frontend, and admin** in **separate terminals** so they can work simultaneously.





## 🚫 Limitations
- No real-time payment system (only Cash on Delivery)
- Minimal error handling

---

## 🚀 Future Enhancements
- Add real-time payment gateway
- Enable prescription uploads and pharmacy-side dashboards
- Improve analytics and notifications

---
