# **Todo App (MEVN Stack)**

A simple full-stack Todo application built with the MEVN stack (MongoDB, Express.js, Vue.js, Node.js). The app allows users to register, login, logout, and manage their to-do lists with features like creating, listing, updating, and deleting tasks.

![image](https://github.com/user-attachments/assets/386569e6-e3c0-4f49-b38f-bd8ed9d2481b)

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

## **Database Structure**

The app uses MongoDB to store data. Below is the structure of the primary collections:

### **Users Collection**
Stores users information.

| Field         | Type        | Description                    |
|---------------|-------------|--------------------------------|
| `_id`         | ObjectId    | Unique identifier for the user |
| `username`    | String      | User's name               |
| `email`       | String      | User's email (unique)          |
| `password`    | String      | Hashed password                |
| `createdAt`   | Date        | Timestamp of user registration |

### **Todos Collection**
Stores tasks information.

| Field         | Type        | Description                       |
|---------------|-------------|-----------------------------------|
| `_id`         | ObjectId    | Unique identifier for the task    |
| `user`        | ObjectId    | Reference to the user (foreign key) |
| `title`       | String      | Task title                        |
| `completed`   | Boolean     | Status of the task (tru/false)    |

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

#### 3. Config your credential in the .env file of the backend directory:
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
#### 1. Navigate to the frontend directory:
```bash
cd frontend
```

#### 2. Install dependencies:
```bash
npm install
```

#### 3. Start the frontend server:
```bash
npm run serve
```
The frontend server will run on http://localhost:8080.

