# Library Management System

## Objective
Build a web application where users can view books and admins can manage books.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Next.js

## Features
- JWT Authentication
- Role-based access (Admin/User)
- Rate limiting on APIs
- Centralized error handling

## API Endpoints

### Get all books
GET /api/books

### Get book by ID
GET /api/books/:id

### Add new book (Admin only)
POST /api/books

### Update book (Admin only)
PUT /api/books/:id

## Book Schema
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self Help",
  "available": true
}

## Project Structure
library-system
│── backend
│   ├── server.js
│   ├── routes
│   └── models
│
│── frontend
│   ├── pages
│   └── components
│
│── README.md
│── .gitignore

