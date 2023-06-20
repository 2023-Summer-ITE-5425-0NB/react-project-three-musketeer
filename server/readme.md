# Book Management System

A user management system built with Node.js, Express, and MongoDB.

## Table of Contents

-   [Project Description](#project-description)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Documentation](#api-documentation)
-   [Configuration](#configuration)
-   [Contributing](#contributing)
-   [License](#license)

## Project Description

The Book User Management System is a RESTful API that allows users to register, login, view, update, and delete user information. It provides endpoints to perform these operations securely with
JWT-based authentication.

## Features

-   User registration with validation
-   User login with JWT-based authentication
-   Retrieving user information
-   Updating user information
-   Updating user password
-   Deleting user account

## Installation

1. Clone the repository: `git clone <repository_url>`

2. Install dependencies: `npm install`

# 3. Set up environment variables: Create a `.env` file in the project root directory and provide the following variables:

-   MONGO_URL=<your_mongodb_connection_string>
-   JWT_SECRET=<your_jwt_secret_key>

4. Start the server: `npm start`

5. Access the application in a web browser at `http://localhost:3000`.

## Usage

-   Register a new user by making a POST request to `/users/register` endpoint with the required user details.
-   Login with an existing user by making a POST request to `/users/login` endpoint with the user's email and password.
-   Retrieve user information by making a GET request to `/users/:userId` endpoint with the user's ID.
-   Update user information by making a PATCH request to `/users/:userId` endpoint with the updated user data.
-   Update user password by making a PATCH request to `/users/changepassword/:userId` endpoint with the new password.
-   Delete a user by making a DELETE request to `/users/:userId` endpoint.

## API Documentation

### Register a new user

-   Endpoint: `POST /users/register`
-   Request body: { "firstName": "John", "lastName": "Doe", "email": "johndoe@example.com", "password": "password123", "dateOfBirth": "1990-01-01", "gender": "male" }

-   Response: { "newUser": { "firstName": "John", "lastName": "Doe", "email": "johndoe@example.com", "dateOfBirth": "1990-01-01", "gender": "male", "createdAt": "2023-06-08T12:00:00.000Z",
    "updatedAt": "2023-06-08T12:00:00.000Z" }, "token": "<generated_jwt_token>" }

### Login

-   Endpoint: `POST /users/login`
-   Request body: { "email": "johndoe@example.com", "password": "password123" }
-   Response: { "token": "<generated_jwt_token>" }

### Retrieve user information

-   Endpoint: `GET /users/:userId`
-   Response: { "user": { "firstName": "John", "lastName": "Doe", "email": "johndoe@example.com", "dateOfBirth": "1990-01-01", "gender": "male", "createdAt": "2023-06-08T12:00:00.000Z", "updatedAt":
    "2023-06-08T12:00:00.000Z" } }

### Update user information

-   Endpoint: `PATCH /users/:userId`
-   Request body: { "firstName": "John", "lastName": "Smith", "email": "johnsmith@example.com", "dateOfBirth": "1990-01-01", "gender": "male" }
-   Response:

{ "user": { "firstName": "John", "lastName": "Smith", "email": "johnsmith@example.com", "dateOfBirth": "1990-01-01", "gender": "male", "createdAt": "2023-06-08T12:00:00.000Z", "updatedAt":
"2023-06-08T12:00:00.000Z" } }

### Update user password

-   Endpoint: `PATCH /users/changepassword/:userId`
-   Request body: { "password": "newpassword123" }

-   Response:{ "message": "Password updated successfully" }

### Delete a user

-   Endpoint: `DELETE /users/:userId`
-   Response:{ "message": "User deleted successfully" }

### Login user

-   Endpoint: `POST /users/login`

-   Endpoint: `DELETE /users/:userId`
-   Request body: { "email" : "The user's email address", "password" : "The user's password"}

-   Response:{ "token": "<generated_jwt_token>" }

## Configuration

The application can be configured using environment variables. The following variables are available:

-   `MONGO_URL`: MongoDB connection string.
-   `JWT_SECRET`: Secret key used for JWT token generation.
