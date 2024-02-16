

---

# Tomato Food Delivery Web App

Tomato is a full-stack food delivery web application built with React.js, Express.js, and MongoDB. It allows users to sign in or sign up, explore a variety of food products, add them to the cart, and place orders securely. The application is designed to be responsive and user-friendly.

## Live Demo

Check out the live demo [here](your_live_demo_url).

## Features

- **User Authentication**: Secure user authentication with JSON Web Tokens (JWT).
- **Product Exploration**: Browse through a variety of food products.
- **Shopping Cart**: Add products to the cart and place orders seamlessly.
- **Responsive Design**: Fully responsive design for a great user experience on any device.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

To get a local copy of the project up and running, follow these steps:

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mihirjataniya/TOMATO-MERN
   ```

2. Change to the project directory:

   ```bash
   cd TOMATO
   ```

## Configuration

1. Set up MongoDB: Create a MongoDB database and update the connection string in `server/config/db.js`.

2. Configure environment variables: Create a `.env` file in the `server` directory and set the following variables:

   ```env
   JWT_SECRET=your_secret_key
   DATABASE=your_mongodb_connection_string
   ```

## Usage

1. Start the backend server:

   ```bash
   cd Backend
   npm i
   node index.js
   ```

   The server will be running at `http://localhost:3001`.

2. Start the frontend:

   ```bash
   cd Frontend
   npm i
   npm run dev
   ```

   The application will be accessible at `http://localhost:5173`.


## Security

This project utilizes JSON Web Tokens for user authentication. Ensure that sensitive information, such as secret keys, is kept secure. Implement HTTPS for production deployments.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

--- 


