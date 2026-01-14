# Candidate Profile Playground

A full-stack playground application that stores a candidate’s profile in a database, exposes it via REST APIs, and provides a minimal frontend UI to query and view the data.

This project is designed as an interview-ready assignment demonstrating backend APIs, database design, frontend integration, and cloud deployment.

---

## 🚀 Live URLs (Free Hosting)

- Backend API (Render):  
  https://candidate-backend.onrender.com

- Frontend UI (Vercel):  
  https://candidate-profile.vercel.app

---

## 🧱 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose ODM

### Frontend
- React (Vite)
- Plain CSS

### Hosting
- Backend: Render (Free Tier)
- Frontend: Vercel (Free Tier)
- Database: MongoDB Atlas (Free Tier)

---

## 🏗 Architecture Diagram
Browser (React UI)
|
| HTTPS (REST API)
↓
Express.js Server (Node.js)
|
| Mongoose ODM
↓
MongoDB Atlas (Cloud Database)


---

## 📦 Database Schema

**Profile Collection**

- name: String
- email: String
- education: String
- skills: [String]
- projects: [
  {
    title: String,
    description: String,
    links: [String]
  }
]
- work: [String]
- links:
  - github: String
  - linkedin: String
  - portfolio: String

---

## 🔌 API Endpoints

### Health Check
GET `/health`

### Read Profile
GET `/api/profile`

### Create Profile
POST `/api/profile`

### Update Profile
PUT `/api/profile/:id`

### Search by Skill
GET `/api/profile/search?q=react`

---

## ⚙️ Environment Variables

All sensitive values are kept server-side.

Example file:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname

Backend
cd backend
npm install
node server.js

Frontend
cd frontend
npm install
npm run dev

📝 Remarks / Tradeoffs

The application supports a single candidate profile for simplicity.

Authentication is not implemented to keep the assignment lightweight.

Search functionality uses basic MongoDB regex queries instead of advanced indexing.

Free hosting tiers are used, so cold-start delays may occur on backend requests.


🧑 Resume

Resume Link:https://drive.google.com/file/d/14BLEZ8TeNgIfZhQwPiG1tPCkYmXNmZ1F/view?usp=drivesdk

👨‍💻 Author

Shubham Rautela
GitHub: https://github.com/Shubhamrautela838

LinkedIn: https://www.linkedin.com/in/shubham-rautela-08614131a/

