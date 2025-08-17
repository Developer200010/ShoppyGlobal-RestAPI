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
## 📖 API Endpoints

### 👤 User Authentication
| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| 🔑 POST | `/user/register` | 📝 Register a user  |
| 🔐 POST | `/user/login`    | 🔓 Login a user     |

---

### 📦 Product API
| Method   | Endpoint          | Description              |
|----------|-------------------|--------------------------|
| 🌍 GET   | `/products`       | 📋 Get all products      |
| 🔎 GET   | `/products/:id`   | 🔍 Get product by ID     |
| ➕ POST  | `/products`       | 🛠️ Add new product       |
| ✏️ PUT   | `/products/:id`   | ♻️ Update existing product |
| 🗑️ DELETE | `/products/:id`   | ❌ Delete a product       |

---

### 🛒 Cart API only when user is register or logged in
| Method   | Endpoint      | Description                  |
|----------|---------------|------------------------------|
| 🛍️ POST  | `/cart`       | ➕ Add item to cart           |
| 📦 GET   | `/cart`       | 📋 Get cart items             |
| 🔄 PUT   | `/cart/:id`   | 🔢 Update cart item quantity |
| 🗑️ DELETE | `/cart/:id`   | ❌ Remove item from cart      |


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
1. https://github.com/Developer200010/ShoppyGlobal-RestAPI.git
2. cd ShoppyGlobal-RestAPI.git
3. npm install
```
## ⚙️ Setup Environment Variables

- 🔌 **PORT** = `3000`  
- 🗄️ **MONGO_URI** = `mongodb://localhost:27017/shoppyGlobal-RestAPI`  
- 🔑 **JWT_SECRET** = `secretKey`

 ----
