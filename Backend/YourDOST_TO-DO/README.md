# 📝 Simple To-Do CRUD API
A RESTful API for managing to-do items built with Node.js and Express.js, featuring full CRUD operations and file-based persistence.

## 🚀 Live Demo
**Base URL:** https://yourdost-to-do.onrender.com  
**API Endpoints:** https://yourdost-to-do.onrender.com/todos

## ✨ Features
- ✅ Complete CRUD operations for to-do items
- ✅ File-based JSON storage (no database required)
- ✅ Input validation and error handling
- ✅ Proper HTTP status codes and JSON responses
- ✅ UUID-based unique identifiers
- ✅ Completed status tracking
- ✅ Timestamps for creation and updates
- ✅ Deployed and accessible online

## 🛠️ Tech Stack
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Storage:** JSON file-based persistence  
- **ID Generation:** UUID v4  
- **Deployment:** Render

## 📁 Project Structure
```
├── data/
│   └── todos.js          
├── lib/
│   └── store.js          
├── routes/
│   └── todos.json        
├── index.js             
├── package.json         
└── README.md            
```

## 🔌 API Endpoints
**Base URL:** https://yourdost-to-do.onrender.com

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/` | API welcome message |
| GET | `/todos` | Get all todos |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update a todo |
| DELETE | `/todos/:id` | Delete a todo |

## 📖 Detailed API Documentation

### 1. Get All Todos
```http
GET /todos
Response: 200 OK
```
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Complete backend task",
    "description": "Build REST API for todo app",
    "completed": false,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

### 2. Create a Todo
```http
POST /todos
Content-Type: application/json
```
**Request Body:**
```json
{
  "title": "Learn Node.js",
  "description": "Complete Express tutorial",
  "completed": false
}
```
**Response: 201 Created**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "title": "Learn Node.js",
  "description": "Complete Express tutorial",
  "completed": false,
  "createdAt": "2024-01-15T11:00:00.000Z"
}
```
**Validation:**
- `title` (required): Non-empty string  
- `description` (optional): String  
- `completed` (optional): Boolean (defaults to false)

### 3. Update a Todo
```http
PUT /todos/:id
Content-Type: application/json
```
**Request Body:** (All fields optional)
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}
```
**Response: 200 OK**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "title": "Updated title",
  "description": "Updated description",
  "completed": true,
  "createdAt": "2024-01-15T11:00:00.000Z",
  "updatedAt": "2024-01-15T12:00:00.000Z"
}
```
**Error Response: 404 Not Found**
```json
{ "error": "todo not found" }
```

### 4. Delete a Todo
```http
DELETE /todos/:id
Response: 200 OK
```
```json
{ "message": "Todo deleted successfully" }
```
**Error Response: 404 Not Found**
```json
{ "error": "todo not found" }
```

## 🚀 Local Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
git clone <repository-url>
cd todo-api
npm install
mkdir -p data
npm start
```
The server will run on **http://localhost:3000**

### Environment Variables
```
PORT=3000  # Optional, defaults to 3000
```

### Using Postman
- Import the following collection:  
  Base URL: https://yourdost-to-do.onrender.com  
  Add endpoints as documented above

## ✅ Features Implemented
- GET /todos - Retrieve all todos  
- POST /todos - Create new todo  
- PUT /todos/:id - Update existing todo  
- DELETE /todos/:id - Delete todo  
- File-based JSON storage  
- Input validation  
- Proper error handling  
- Completed status field  
- UUID generation for unique IDs  
- Timestamps (createdAt, updatedAt)  
- Deployed on Render  

## 🔒 Error Handling
| Status | Meaning |
|---------|----------|
| 200 OK | Successful GET/PUT/DELETE |
| 201 Created | Successful POST |
| 400 Bad Request | Invalid input data |
| 404 Not Found | Resource not found |
| 500 Internal Server Error | Server errors |

## 📦 Dependencies
```json
{
  "express": "^4.18.0",
  "uuid": "^9.0.0"
}
```

## 🚀 Deployment
This API is deployed on Render.

### Deploy Your Own
1. Fork this repository  
2. Create a new Web Service on Render  
3. Connect your GitHub repository  
4. Configure:  
   - **Build Command:** `npm install`  
   - **Start Command:** `node index.js`  
5. Deploy!

## 📄 License
MIT

## 👨‍💻 Author
Created as part of YourDost Backend Task Assessment
