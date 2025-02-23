# 📝 Notes Taking Website

A **beautiful** and **responsive** Notes Taking Web Application built with **Angular** and **MySQL**, featuring full CRUD (Create, Read, Update, Delete) operations.

---

## 🚀 Features

✅ **Create, Read, Update, and Delete Notes**  
✅ **Beautiful & Responsive UI (Angular + Material UI)**  
✅ **SQL Database Integration (MySQL)**  
✅ **REST API with Node.js & Express (Backend)**  
✅ **Standalone Angular Components**  
✅ **Deployed with Vite for Faster Performance**  

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| Angular 16+ | Frontend Framework |
| TypeScript | Strongly-Typed JavaScript |
| MySQL | Database |
| Node.js & Express | Backend API |
| Angular Material | UI Components |
| Vite | Fast Dev Server |

---

## 📸 Screenshots

![Dashboard](./screenshot/Screenshot_23-2-2025_18754_localhost.jpeg) <!-- Replace with actual screenshot -->

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 🔹 1. Clone the Repository
```sh
git clone https://github.com/TutorialsAndroid/Notes-Taking-Website-Angular.git
cd Notes-Taking-Website-Angular
```

### 🔹 2. Install Dependencies
```sh
npm install
```

### 🔹 3. Setup the MySQL Database
1. Open MySQL Workbench or any MySQL client.
2. Run the SQL script to create the database and tables:
```sql
CREATE DATABASE notes_db;
USE notes_db;
CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
3. Update database credentials in `server/config.js`.

### 🔹 4. Start the Backend Server
```sh
node server.js
```

### 🔹 5. Start the Angular Frontend
```sh
ng serve
```

🚀 Now, open **`http://localhost:4200`** in your browser!

---

## 🤝 Contributing
Contributions are always welcome! Follow these steps to contribute:

1. **Fork** the repository 🍴
2. **Create a branch** for your feature (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m 'Add feature'`)
4. **Push to your branch** (`git push origin feature-name`)
5. Open a **Pull Request** 🎉

---

## 🛡️ License
This project is licensed under the **MIT License**. See the **LICENSE** file for details.

---

## 📬 Contact
For any questions or suggestions, feel free to reach out:
📧 Email: [Akshay](mailto:akshaysunilmasram@yahoo.com)  
💻 GitHub: [TutorialsAndroid](https://github.com/TutorialsAndroid)  
🐦 Twitter: [Instagram](https://instagram.com/coderx09)  

---

🔗 **Give this repo a ⭐ if you like it!**

