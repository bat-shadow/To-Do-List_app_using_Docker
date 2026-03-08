# To-Do List App 📝

A full-stack **To-Do List application** built with **ReactJS, FastAPI, Python, and PostgreSQL**, fully **containerized with Docker**. Manage tasks efficiently with a simple and responsive interface.

---

## Features

- Add, edit, delete, and mark tasks as complete  
- Persistent storage using PostgreSQL  
- REST API powered by FastAPI  
- Interactive UI with ReactJS  
- Fully containerized for easy setup and deployment

---

## Tech Stack

- **Frontend:** ReactJS  
- **Backend:** FastAPI (Python)  
- **Database:** PostgreSQL  
- **Containerization:** Docker & Docker Compose

---

## Installation & Setup

1. **Clone the repository**

git clone <your-repo-url>
cd <your-repo-folder>

2. **Run with Docker Compose

docker-compose up --build

Access the app

Frontend: http://localhost:3000

API: http://localhost:8000

Project Structure
frontend/        # ReactJS app
backend/         # FastAPI app
db/              # PostgreSQL Docker setup
docker-compose.yml
Usage

Open the frontend in a browser

Add tasks, mark them as complete, edit or delete tasks

Data is persisted in PostgreSQL
