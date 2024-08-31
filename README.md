<h1><b>🍔 Food Delivery App</b></h1>

<h2><b>Table of Contents</b></h2>

📖 Introduction

✨ Features

🛠️ Tech Stack

🚀 Installation

🧑‍💻 Usage

📚 API Documentation

📁 Project Structure

🤝 Contributing


📜 License

📬 Contact

📖 Introduction

The Food Delivery App is a web application that allows users to browse through a variety of delicious food items, add them to their cart, and place orders online. This project focuses on creating a smooth and intuitive user experience for online food ordering, with features such as cart management, real-time updates, and secure payment integration.


<h3><b>✨ Features</b></h3>

🔐 User Authentication and Authorization

🍽️ Browse food items by categories

🛒 Add items to the shopping cart

➕ Increase or decrease item quantities in the cart

🔄 Persistent cart items after page reload

💳 Secure payment gateway integration with Stripe

📦 Order tracking and history

📱 Responsive design for mobile and desktop devices

<h3><b>🛠️ Tech Stack</b></h3>

Frontend: ⚛️ React.js, ⚡ Vite, 🎨 CSS

Backend: 🟢 Node.js, 🚀 Express.js, 🍃 Mongoose

Database: 🗄️ MongoDB

Payment Gateway: 💵 Stripe API

Version Control: 🌀 Git

<h3><b>🚀 Installation</b></h3>

Prerequisites

🟢 Node.js and npm installed

🍃 MongoDB installed and running

💳 Stripe account for payment processing

<h4><b>Steps</b></h4>

Clone the repository 🛠️

bash

Copy code

git clone https://github.com/parv-meht08/Food-Delivery-App.git

<b>Navigate to the project directory 📂</b>

bash

Copy code

cd food-delivery-app

Install the dependencies 📦

bash

Copy code

npm install

Set up environment variables 🔐

Create a .env file in the root directory.

Add the following variables:

makefile

Copy code

MONGO_URI=your_mongo_db_connection_string

STRIPE_SECRET_KEY=your_stripe_secret_key

PORT=your_preferred_port

<b>Start the application 🚀</b>

bash

Copy code

npm start

The application should be running on http://localhost:your_port.

🧑‍💻 Usage

<b>Frontend:</b>

Navigate to the frontend directory

Run the development server using npm run dev ⚡

Access the application on http://localhost:your_vite_port

<b>Backend:</b>

The backend server should be running with the steps mentioned above.

Make sure your MongoDB instance is running 🍃

📚 API Documentation

<b>Endpoints</b>

POST /api/auth/register - Register a new user ✍️

POST /api/auth/login - Login user 🔑

GET /api/foods - Fetch all food items 🍔

POST /api/orders - Place an order 🛒

GET /api/orders/:userId - Get user order history 📜

For detailed API documentation, refer to the API Documentation 📘.



<h3><b>📁 Project Structure</b></h3>

arduino
Copy code

food-delivery-app/

│

├── backend/

│   ├── config/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── server.js

│   └── ...

│

├── frontend/

│   ├── public/

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── App.js

│   │   └── ...

│   └── vite.config.js

│

├── .env

├── package.json

└── README.md

<h3><b>🤝 Contributing</b>


Contributions are welcome! 🎉 Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and 
passes all tests.



<h3><b>📜 License</b></h3>

This project is licensed under the MIT License. See the LICENSE file for details.



📬 Contact

For any questions or issues, feel free to reach out:



<b>GitHub: parv-meht08</b>

<b>Email: mehtaparv21@gmail.com</b>


<b>Home Page</b>
![tomato](https://github.com/user-attachments/assets/bda658c2-0f68-49b8-9f76-cbb801919782)
