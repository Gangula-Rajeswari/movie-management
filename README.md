🎬 Movie Management Application (Full Stack)

A simple full-stack Movie Management application built using Java Spring Boot (Backend) and HTML, CSS, JavaScript (Frontend).
The application provides RESTful APIs to manage movies and a clean UI to interact with them.

🚀 Live Demo

Frontend (Netlify):
👉 https://movie-app.netlify.app

Backend (Render):
👉 https://movie-backend.onrender.com/api/movies

🛠️ Tech Stack
Backend

Java 17

Spring Boot

Spring Web (REST API)

In-memory storage (ArrayList)

Maven

Frontend

HTML5

CSS3

JavaScript (Fetch API)

Deployment

Backend: Render

Frontend: Netlify

Version Control: Git & GitHub

📁 Project Structure
movie-app/
│
├── backend/
│   ├── src/main/java/com/example/movieapp
│   │   ├── controller
│   │   ├── model
│   │   └── service
│   ├── pom.xml
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

🎥 Features

Add a new movie

Get movie by ID

View all movies

Input validation

Clean and responsive UI

RESTful API design

🔗 API Endpoints
➕ Add Movie
POST /api/movies


Request Body

{
  "id": 1,
  "name": "Inception",
  "description": "Sci-Fi Thriller",
  "rating": 9
}

📄 Get All Movies
GET /api/movies

🔍 Get Movie by ID
GET /api/movies/{id}

⚙️ How to Run Locally
🧩 Backend (Spring Boot)
cd backend
mvn spring-boot:run


Backend will start at:

http://localhost:8080/api/movies

🎨 Frontend

Open frontend/index.html

OR use Live Server (recommended)

Make sure API URL in script.js:

const API_URL = "http://localhost:8080/api/movies";

🌐 Deployment Steps
Backend Deployment (Render)

Build JAR using Maven

Create Dockerfile

Deploy as Web Service on Render

Frontend Deployment (Netlify)

Update API URL to production backend

Push code to GitHub

Deploy frontend folder via Netlify

🧪 Validation & Error Handling

Required field validation for movie name

Proper error messages

HTTP status handling

CORS enabled for frontend access