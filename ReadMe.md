📄 Backend README.md

# Password Reset Flow – Backend (Node.js, Express, MongoDB)

This is the backend implementation of password reset functionality using Node.js, Express, MongoDB, bcrypt, and crypto.

## Features

- User login
- Forgot password
- Generate reset token
- Send email with reset link
- Verify reset token
- Reset password securely
- Password hashing using bcrypt

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- crypto
- Nodemailer (for email)

---

## API Endpoints

### 1. Login

POST /api/auth/login

Body:

{
"email": "user@email.com
",
"password": "123456"
}

---

### 2. Forgot Password

Generates reset token and sends email.

POST /api/auth/forgot-password

Body:

{
"email": "user@email.com
"
}

---

### 3. Verify Reset Token

Checks if token is valid.

GET /api/auth/verify-reset-token/:token

---

### 4. Reset Password

Updates user password.

POST /api/auth/reset-password/:token

Body:

{
"confirmPassword": "newpassword"
}

---

## Installation

Install dependencies:

npm install

---

## Run Server

npm run dev

or

node server.js

Runs on:

http://localhost:3000

---

## Security Features

- Password hashing using bcrypt
- Secure token generation using crypto
- Token expiry validation
- Token removed after password reset

---

## Flow Summary

1. User requests password reset
2. Token generated and saved in database
3. Email sent with reset link
4. Token verified
5. Password updated securely

