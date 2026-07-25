# 🚀 LeadDesk Mini

**LeadDesk Mini** is a full-stack lead management application built as part of the **Digital Heroes Internship Qualification Task**.

The application allows visitors to submit business inquiries through a public landing page while providing administrators with a secure dashboard to manage incoming leads.

---

## 🌐 Live Demo

**Landing Page:**
https://leadmanagement-np4y.onrender.com/

**Admin Login:**
https://leadmanagement-np4y.onrender.com/login

**Admin Dashboard:**
https://leadmanagement-np4y.onrender.com/admin

---

## 📂 GitHub Repository

https://github.com/Shams109000/LeadManagement

---

## 🔑 Demo Credentials

**Email:** [admin@gmail.com](mailto:admin@gmail.com)

**Password:** Admin@123

---

# 💻 Installation

Clone the repository

```bash
git clone https://github.com/Shams109000/LeadManagement.git
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
```

### Production (Render)

```env
CLIENT_URL=https://leadmanagement-np4y.onrender.com
```

---

## Frontend (.env)

### Local Development

```env
VITE_API_URL=http://localhost:5000/api
```

### Production Build

```env
VITE_API_URL=/api
```

---

# 🚀 Deployment

The React frontend is built using:

```bash
npm run build
```

The generated build files are copied into the backend's **public** directory.

Express serves the React application as static files, allowing the frontend and backend to be deployed together as a **single Render Web Service**.

Production URL:

https://leadmanagement-np4y.onrender.com/

MongoDB Atlas is used as the production database.

---

# 🤖 AI Usage Disclosure

AI tools (ChatGPT) were used to accelerate development by assisting with project planning, component structure, backend API design, debugging, deployment guidance, code reviews, and documentation. All implementation decisions, application architecture, UI customization, authentication flow, data modeling, API integration, testing, and final verification were completed, reviewed, and adapted manually by me.

---

# 📝 Footer Credit

The application includes the required footer:

**Built for Digital Heroes Training Task**

linked to:

https://digitalheroesco.com
