# Clueso Clone – Frontend

##  Overview

This is the **frontend** of the Clueso Clone application, built using **React**. It provides user authentication, dashboard views, product listing, and navigation to product-specific pages. The frontend communicates with a RESTful backend using Axios.

---

## Tech Stack

* React (Create React App)
* React Router DOM
* Axios
* JavaScript (ES6)
* HTML & CSS

---

## Folder Structure

```
src/
 ├── api/
 │   └── api.js          # Axios instance with auth interceptor
 ├── pages/
 │   ├── Login.jsx
 │   ├── Signup.jsx
 │   ├── Dashboard.jsx
 │   └── Product.jsx
 ├── components/
 │   ├── Navbar.jsx
 │   └── FeedbackForm.jsx
 ├── App.jsx
 └── index.js
```

---

## Setup & Installation

### Prerequisites

* Node.js (v18+ recommended)
* npm

### Installation Steps

```bash
cd frontend
npm install
```

---

## Running the Frontend

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## API Communication

* Base URL configured in `src/api/api.js`

```js
const api = axios.create({ baseURL: "http://localhost:5000" });
```

* JWT token is attached automatically via Axios interceptor.

---

##  Architecture Overview

```
User Browser
     ↓
React UI (Pages & Components)
     ↓ Axios
Backend REST API (Node + Express)
```

---

##  Design Decisions & Assumptions

* JWT-based authentication stored in `localStorage`
* Protected routes are accessed only after login
* Backend is assumed to run on port `5000`
* Simple UI kept intentionally for clarity and learning

---

## Current Features

* User Login & Signup
* Dashboard with product listing
* Product detail navigation
* Authenticated API calls

---

##  Future Improvements

* UI enhancements
* Better error handling
* Loading states
* Role-based access

---

##  Author

Developed as part of a learning project inspired by Clueso.








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

