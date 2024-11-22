# **Todo App (MEVN Stack)**

A simple full-stack Todo application built with the MEVN stack (MongoDB, Express.js, Vue.js, Node.js). The app allows users to register, login, logout, and manage their to-do lists with features like creating, reading, updating status, and deleting tasks.

---

## **Project Structure**
```	
├── backend/          # Node.js and Express.js backend
├── frontend/         # Vue.js frontend
└── README.md         # Project documentation
```

## **Features**

- **Authentication**: User registration and login with JWT-based authentication.
- **CRUD**: Create, read, update, and delete todos.
- **Completion Toggle**: Mark todos as completed or incomplete.

---

## **Tech Stack**

### Backend:
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- Authentication using **JSON Web Tokens (JWT)**

### Frontend:
- **Vue.js** for the UI
- **Axios** for API communication
- **Vue Router** for client-side routing

---

## **Getting Started**

### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

---

### Clone the Repository

```bash
git clone https://github.com/munirot/todo-app-demo
cd todo-app
```
---

## **Backend Setup**
#### 1. Navigate to the backend directory:
```bash
cd backend
```

#### 2. Install dependencies:
```bash
npm install
```

#### 3. Create a .env file in the backend directory and configure it:
```bash
PORT=3004
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

#### 4. Start the backend server:
```bash
npm run dev
```
The backend server will run on http://localhost:3004.


## **Frontend Setup**
#### 1. Navigate to the backend directory:
```bash
cd frontend
```

#### 2. Install dependencies:
```bash
npm install
```

#### 3. Create a .env file in the backend directory and configure it:
```bash
VUE_APP_API_URL=backend_url
```

#### 4. Start the backend server:
```bash
npm run serve
```
The frontend server will run on http://localhost:8080.

