# 📁 User Directory Table

A modern, responsive React application that fetches and displays user data with advanced search, sort, filter, and pagination capabilities.

---

## 🌟 Features

- **User Data Display:** Fetches and displays user information in a clean table format  
- **Search Functionality:** Real-time search by name or email  
- **Sorting:** Sort users by first name or email (ascending/descending)  
- **Pagination:** Navigate through multiple pages of user data  
- **Filtering:** Filter users by email domain or first letter of name  
- **Loading States:** Smooth loading spinner during data fetching  
- **Mobile Responsive:** Fully responsive design for all device sizes  
- **Modern UI:** Clean and intuitive user interface  

---

## 🛠️ Tech Stack

- **React** - Frontend framework  
- **JavaScript/JSX** - Programming language  
- **CSS3** - Styling  
- **Fetch API** - HTTP requests  
- **React Hooks** - State management  
---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or higher)  
- npm (v6.0.0 or higher) or yarn  

---

## 🚀 Installation & Setup

### Clone the repository
```bash
git clone https://github.com/kuppamkamalesh/User-Directory.git
cd User-Directory
```

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm start
```

### Open your browser
Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 💻 Usage

### 🔍 Search Users
- Use the search bar to find users by their first name, last name, or email address.  
- Search updates in real-time as you type.

### ↕️ Sort Data
- Click on column headers (Name/Email) to sort in ascending order.  
- Click again to sort in descending order.  
- Visual indicators show current sort direction.

### 🧩 Filter Users
- **Email Domain Filter:** Filter users by their email domain (e.g., `@reqres.in`).  
- **First Letter Filter:** Quick filter by the first letter of the user's name.  
- Clear filters to view all users.

### 📄 Pagination
- Navigate between pages using Previous/Next buttons.  
- Page numbers displayed for quick navigation.  
- Shows current page and total pages available.

---

## 🔗 API Information

This application uses the **ReqRes API** for user data.

**Base URL:** `https://reqres.in/api/users`  
**Endpoints Used:**
```
GET /users?page={page}   # Fetch paginated user list
```
**Response Format:** JSON with user data including:
- ID  
- Email  
- First Name  
- Last Name  
- Avatar URL  

---

## 📁 Project Structure

```
user-directory/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── FilterBar.js
│   │   ├── Pagination.js
│   │   ├── SearchBar.js
│   │   ├── sortControls.js
│   │   └── UserTable.js
│   ├── pages/
│   │   └── Userpage.js
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

---

## 🎨 Features Implementation


### Sort Functionality
- Implements bidirectional sorting  
- Maintains sort state across pagination  

### Filter Options
- Domain extraction from email addresses  
- Alphabetical filtering by first letter  
- Combinable with search and sort  

---

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Mobile devices:** < 768px  
- **Tablets:** 768px - 1024px  
- **Desktop:** > 1024px  

---

## 🚢 Deployment

You can deploy this project easily using **Vercel**

### Vercel Deployment
```bash
npm run build
vercel --prod
```

**Live Demo:** https://user-directory-bice.vercel.app/

---

## 👤 Author

**Kamalesh Kuppam**  
Frontend Developer | React.js Enthusiast  
GitHub: [@kuppamkamalesh](https://github.com/kuppamkamalesh)

---
