# 🚀 LeadDesk Mini

**LeadDesk Mini** is a full-stack lead management application built as part of the **Digital Heroes Internship Qualification Task**.

The application allows visitors to submit business inquiries through a public landing page while providing administrators with a secure dashboard to manage incoming leads.

---

## 🌐 Live Demo

**Landing Page:** https://YOUR-LIVE-URL.onrender.com

**Admin Login:** https://YOUR-LIVE-URL.onrender.com/login

**Admin Dashboard:** https://YOUR-LIVE-URL.onrender.com/admin

---

## 📂 GitHub Repository

https://github.com/YOUR_USERNAME/YOUR_REPOSITORY

---

## 🔑 Demo Credentials

**Email:** [admin@gmail.com](mailto:admin@gmail.com)

**Password:** Admin@123

---

# ✨ Features

### Public Landing Page

* Responsive landing page
* Modern UI built with React & Tailwind CSS
* Client-side validation using React Hook Form
* Server-side validation using Express
* Stores leads in MongoDB Atlas

### Admin Dashboard

* Secure JWT Authentication
* Protected Routes
* View all submitted leads
* Search leads by Name or Email
* Update lead status

  * New
  * Contacted
  * Closed
* Delete leads
* Logout functionality

---

# 🛠 Tech Stack

## Frontend

* React
* React Router DOM
* Tailwind CSS
* Axios
* React Hook Form
* React Toastify

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* Helmet
* CORS
* Express Rate Limit

---

# 📁 Project Structure

```
LeadDesk-Mini
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   └── hooks
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── public
│
└── README.md
```

---

# 📊 Data Model

## Lead Schema

Each submitted lead is stored as a MongoDB document.

```javascript
{
  name: String,
  email: String,
  budget: String,
  message: String,
  status: "New" | "Contacted" | "Closed",
  createdAt: Date,
  updatedAt: Date
}
```

### Field Explanation

| Field     | Purpose                 |
| --------- | ----------------------- |
| name      | Visitor's name          |
| email     | Contact email           |
| budget    | Selected budget range   |
| message   | Project description     |
| status    | Current lead stage      |
| createdAt | Submission timestamp    |
| updatedAt | Last modified timestamp |

Default status:

```
New
```

The admin dashboard updates this status as the lead progresses through the sales pipeline.

---

## Admin Schema

```javascript
{
  email: String,
  password: String
}
```

Passwords are never stored in plain text.

Passwords are hashed using **bcrypt** before saving into MongoDB.

---

# 🔐 Authentication Approach

Authentication is implemented using **JSON Web Tokens (JWT)**.

### Login Flow

1. Admin enters email and password.
2. Backend verifies the email.
3. Password is compared using bcrypt.
4. If valid, a JWT token is generated.
5. The frontend stores the token in Local Storage.
6. Axios automatically attaches the token to protected API requests.
7. Protected middleware verifies the token before allowing access.

Protected routes include:

* GET /api/leads
* PATCH /api/leads/:id
* DELETE /api/leads/:id

If the token is invalid or expired, the request is rejected with a 401 Unauthorized response.

---

# 🔄 Application Flow

Visitor opens the landing page

↓

Fills out the lead form

↓

Client-side validation

↓

Server-side validation

↓

Lead stored in MongoDB

↓

Admin logs in

↓

JWT generated

↓

Admin Dashboard loads

↓

Admin searches leads

↓

Admin updates lead status

↓

Changes saved to MongoDB

---

# 📡 API Endpoints

## Authentication

POST /api/auth/login

POST /api/auth/register *(used only during development to create the initial admin account and removed before deployment)*

---

## Leads

POST /api/leads

GET /api/leads

PATCH /api/leads/:id

DELETE /api/leads/:id

---

# 🚀 Deployment

Frontend is built using:

```
npm run build
```

The generated build is copied into the backend's `public` directory.

Express serves the React application as static files, allowing the entire application (frontend + backend) to be deployed as a single Render service.

MongoDB Atlas is used as the production database.

---

# 💻 Installation

Clone the repository

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### Backend

```
cd server

npm install

npm run dev
```

### Frontend

```
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables

Backend

```
PORT=

MONGO_URI=

JWT_SECRET=

CLIENT_URL=
```

Frontend

```
VITE_API_URL=
```

---

# 🤖 AI Usage Disclosure

AI tools (ChatGPT) were used to accelerate development by assisting with component structure, code reviews, debugging, and documentation. All architecture decisions, feature implementation, UI customization, authentication flow, API design, and integration were completed, reviewed, tested, and adapted manually.

---

# 🎥 Loom Walkthrough

Loom Video:

Paste your Loom link here.

Suggested walkthrough:

* Introduce the project
* Show the landing page
* Submit a new lead
* Open MongoDB Atlas and show the saved lead (optional)
* Log in as admin
* Search for the lead
* Change status from **New → Contacted → Closed**
* Delete the lead (if implemented)
* Show the responsive design
* Show the GitHub repository
* End with a brief summary

---

# 📝 Footer Credit

The application includes the required footer:

**Built for Digital Heroes Training Task**

linked to:

https://digitalheroesco.com
