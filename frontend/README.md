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
