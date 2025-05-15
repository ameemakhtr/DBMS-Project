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

## 🧩 ERD Notes
![image](https://github.com/user-attachments/assets/59be5c1c-90a8-4e37-ba3b-5667856cade2)

### 🔹 `ORDERITEMS` Table
- **Status:** Not used in the actual project implementation.
- **Purpose:** Originally intended to normalize the many-to-many relationship between `ORDER` and `PRODUCT`.
- **Current Structure:** The relationship is handled via the `items` array inside the `ORDER` table.
- **Why it's included in ERD:** 
  > To demonstrate normalized database design, though not implemented in code.

📝 _Note: This table can be removed in future revisions as it is not functionally necessary._

---

### 🔹 `NEWSLETTER` Table
- **Status:** Included and partially implemented.
- **Purpose:** To allow non-registered users to subscribe to promotional updates.
- **Use Case:** Useful for future marketing, announcements, and offers.

📝 _This table is lightweight and complements user engagement without requiring login._

---

## 🚫 Limitations
- No real-time payment system (only Cash on Delivery)
- Minimal error handling
- `ORDERITEMS` is unused and not linked through foreign keys

---

## 🚀 Future Enhancements
- Add real-time payment gateway
- Enable prescription uploads and pharmacy-side dashboards
- Improve analytics and notifications
- Consider removing unused ERD entities like `ORDERITEMS` for clarity

---
