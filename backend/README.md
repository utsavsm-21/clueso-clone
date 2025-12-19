# Clueso Clone – Backend

##  Overview

This is the **backend** of the Clueso Clone application, built using **Node.js**, **Express**, and **MySQL** with **Sequelize ORM**. It provides REST APIs for authentication, products, feedback, and insights.

---

##  Tech Stack

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT Authentication
* bcrypt
* dotenv

---

##  Folder Structure

```
backend/
 ├── src/
 │   ├── config/
 │   │   └── db.js              # Sequelize DB connection
 │   ├── models/
 │   │   ├── User.js
 │   │   ├── Product.js
 │   │   ├── Feedback.js
 │   │   └── Insight.js
 │   ├── routes/
 │   │   ├── auth.routes.js
 │   │   ├── product.routes.js
 │   │   ├── feedback.routes.js
 │   │   └── insight.routes.js
 │   ├── controllers/
 │   │   ├── auth.controller.js
 │   │   ├── product.controller.js
 │   │   ├── feedback.controller.js
 │   │   └── insight.controller.js
 │   ├── middleware/
 │   │   └── auth.middleware.js
 │   ├── utils/
 │   │   └── mockAI.js
 │   └── server.js
 ├── seedUser.js
 ├── .env
 └── package.json
```

---

##  Setup & Installation

### Prerequisites

* Node.js (v18+ recommended)
* MySQL Server

### Environment Variables (`.env`)

```
DB_NAME=clueso_clone
DB_USER=root
DB_PASS=yourpassword
JWT_SECRET=your_jwt_secret
```

### Installation Steps

```bash
cd backend
npm install
```

---

##  Running the Backend

```bash
npm start
```

OR

```bash
node src/server.js
```

Backend runs on:

```
http://localhost:5000
```

---

##  Seeding a Test User

```bash
node seedUser.js
```

Creates a default user for login testing.

---

##  Authentication Flow

```
Client → /auth/login → JWT issued → Stored on frontend → Used in headers
```

---

##  Architecture Overview

```
Frontend (React)
     ↓ HTTP / JSON
Express Server
     ↓ Sequelize ORM
MySQL Database
```

---

##  Design Decisions & Assumptions

* Sequelize used for DB abstraction
* JWT for stateless authentication
* Passwords stored using bcrypt hashing
* Modular MVC-style folder structure
* Simple REST APIs (no GraphQL)

---

## Current Features

* User authentication (login/signup)
* Product CRUD APIs
* Feedback handling
* Insight generation (mock AI)
* JWT-protected routes

---

##  Future Enhancements

* Pagination & filtering
* Role-based authorization
* Real AI integration
* Unit & integration tests

---

##  Author

Developed as part of a full-stack learning project inspired by Clueso.

