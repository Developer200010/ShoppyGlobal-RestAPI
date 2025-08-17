# 🛒 ShoppyGlobal API

Welcome to the **ShoppyGlobal REST API** – a simple and scalable backend for **User Authentication, Product Management, and Cart Operations**.  
Built with **Node.js, Express, MongoDB, and JWT authentication**.

---

## 🚀 Features
- 👤 User authentication (register & login with JWT)
- 📦 Product management (CRUD operations)
- 🛒 Cart management (add, update, delete items)
- 🔐 Secure endpoints with authorization
- 📝 Well-documented API (Swagger/OpenAPI)

---

# 📂 ShoppyGlobal API Structure

| Path/Folder        | Description                           |
|---------------------|---------------------------------------|
| `controllers/`      | Business logic for routes             |
| `models/`           | Mongoose schemas (MongoDB models)     |
| `routes/`           | Express route handlers                |
| `middleware/`       | Custom middlewares (auth, logger etc.)|
| `config/`           | Database & JWT configurations         |
| `server.js`            | Express app entry point               |
| `package.json`      | Project dependencies & scripts        |
| `README.md`         | Project documentation                 |



---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
1. git clone https://github.com/<your-username>/shoppyGlobal-api.git
2. cd shoppyGlobal-api
3. npm install
```
## Setup Environment Variables

### PORT=3000
### MONGO_URI=mongodb://localhost:27017/shoppyGlobal-RestAPI
### JWT_SECRET=secretKey
 ----
