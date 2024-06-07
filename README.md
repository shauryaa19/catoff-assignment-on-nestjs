# NESTjs CRUD API with PostgreSQL Database

This project is a basic NESTjs application that provides CRUD (Create, Read, Update, Delete) operations for managing users and their wallet addresses in a PostgreSQL database.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to demonstrate the implementation of a simple CRUD API using NESTjs and PostgreSQL. It provides endpoints for creating, retrieving, updating, and deleting users and their associated wallet addresses. The application follows basic RESTful principles and includes validation and error handling features.

## Features

- Create a new user with a name, email, and password.
- Retrieve a list of users or a specific user by ID.
- Update user details, including password hashing for security.
- Delete a user by ID.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/shauryaa19/catoff-assignment-on-nestjs

2. Navigate to the project directory
   ```bash
   cd catoff-assignment

3. Install dependencies
   ```bash
   npm install

4. Set up the PostgreSQL database
   - Create a PostgreSQL database.
   - Copy the `.env.example` file and rename it to `.env`.
   - Update the `.env` file with your database connection string and other configuration parameters. You can take reference from the `.env.example` file.

5. Start the server
   ```bash
   npm start:dev

## Usage

Once the server is running, you can use tools like Postman or curl to interact with the API endpoints.
Here are some example requests:
- Create a new user:
``` bash
POST http://localhost:3000/users
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password"
}
```
- Retrieve all users:
``` bash
GET http://localhost:3000/users
```
- Retrieve a specific user by ID:
``` bash
GET http://localhost:3000/users/1
```
- Update a user's details:
```bash
PUT http://localhost:3000/users/1
{
    "name": "Updated Name",
    "email": "updated@example.com"
}
```

- Delete a user by ID:
```bash
DELETE http://localhost:3000/users/1
```

## API Endpoints
- POST /users : Create a new user.
- GET /users : Retrieve a list of users.
- GET /users/:id : Retrieve a specific user by ID.
- PUT /users/:id : Update a user's details.
- DELETE /users/:id : Delete a user by ID.

## Thank You!
Thank you for using this project! If you have any questions or suggestions for improvements, feel free to reach out. Your feedback is valuable and appreciated.